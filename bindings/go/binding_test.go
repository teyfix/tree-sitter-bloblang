package tree_sitter_bloblang_test

import (
	"os"
	"strings"
	"testing"

	tree_sitter_bloblang "github.com/teyfix/tree-sitter-bloblang/bindings/go"
	tree_sitter "github.com/tree-sitter/go-tree-sitter"
)

func parse(t *testing.T, code string) *tree_sitter.Tree {
	t.Helper()
	parser := tree_sitter.NewParser()
	t.Cleanup(parser.Close)
	if err := parser.SetLanguage(tree_sitter.NewLanguage(tree_sitter_bloblang.Language())); err != nil {
		t.Fatal(err)
	}
	tree := parser.Parse([]byte(code), nil)
	if tree == nil {
		t.Fatal("Parse returned nil")
	}
	t.Cleanup(tree.Close)
	return tree
}

func TestRuntimeSyntax(t *testing.T) {
	for _, code := range []string{
		`root = this.items.filter(item -> item.a != null && item.b.length() > 0)`,
		`root = this.replace_all(old: "dog", new: "cat",)`,
		"map \"normalize-user\" { root = this }\nroot = this.apply(\"normalize-user\")",
		"root = this.items.\nmap_each(item -> item.with(\"name\", \"id\",))",
		`root = match { this.x == 1 => "id:" + this.name.uppercase(), _ => null }`,
		"if this.a {\nroot = this\nroot.x = 1\n} else if this.b { root = null } else { root = deleted() }",
		`meta "Content-Encoding" = "gzip"` + "\n" + `root.0abc = this.items.0`,
		"#!input {\"name\":\"😀\"}\nroot.x = \"😀\" + this.name # preserved",
		"root = \"\"\"\nbody with \\\\ and \"quotes\"\n\"\"\"",
	} {
		t.Run(code, func(t *testing.T) {
			tree := parse(t, code)
			if tree.RootNode().HasError() {
				t.Fatalf("valid Bloblang has parse errors: %s", tree.RootNode().ToSexp())
			}
		})
	}
}

func TestMalformedSyntax(t *testing.T) {
	for _, code := range []string{
		`root = this.replace_all(old: "dog", "cat")`,
		`root = this.replace_all(old: )`,
		`if this.a { root this }`,
		`root = 1e3`,
		"root = \"line\nbreak\"",
		`root = """unterminated`,
	} {
		t.Run(code, func(t *testing.T) {
			if !parse(t, code).RootNode().HasError() {
				t.Fatal("malformed Bloblang was accepted")
			}
		})
	}
}

func TestStatementAndArgumentFields(t *testing.T) {
	code := "if this.a {\nroot = this.replace_all(old: \"a\", new: \"b\",)\n} else { root = null }"
	statement := parse(t, code).RootNode().NamedChild(0)
	if statement.Kind() != "if_statement" {
		t.Fatalf("statement kind: %s", statement.Kind())
	}
	for name, kind := range map[string]string{"condition": "field_access", "consequence": "statement_block", "alternative": "statement_block"} {
		field := statement.ChildByFieldName(name)
		if field == nil || field.Kind() != kind {
			t.Fatalf("%s field = %v; want %s", name, field, kind)
		}
	}
	assignment := statement.ChildByFieldName("consequence").NamedChild(0)
	call := assignment.ChildByFieldName("value")
	if call.Kind() != "method_call" || call.ChildByFieldName("method").Utf8Text([]byte(code)) != "replace_all" {
		t.Fatalf("method fields: %s", call.ToSexp())
	}
	argument := call.NamedChild(2)
	if argument.Kind() != "named_argument" || argument.ChildByFieldName("name").Utf8Text([]byte(code)) != "old" || argument.ChildByFieldName("value").Kind() != "string" {
		t.Fatalf("argument fields: %s", argument.ToSexp())
	}
}

func TestQuotedMapNameField(t *testing.T) {
	code := "map \"normalize-user\" { root = this }"
	declaration := parse(t, code).RootNode().NamedChild(0)
	name := declaration.ChildByFieldName("name")
	if name == nil || name.Kind() != "string" || name.Utf8Text([]byte(code)) != `"normalize-user"` {
		t.Fatalf("quoted map name field: %s", declaration.ToSexp())
	}
}

func TestPrecedenceAndLambdaRanges(t *testing.T) {
	code := `root = this.items.filter(item -> item.a != null && item.b.length() > 0)`
	call := parse(t, code).RootNode().NamedChild(0).ChildByFieldName("value")
	lambda := call.NamedChild(2)
	body := lambda.ChildByFieldName("body")
	if body.Kind() != "binary_expr" || body.ChildByFieldName("operator").Utf8Text([]byte(code)) != "&&" {
		t.Fatalf("lambda must include the whole boolean body: %s", lambda.ToSexp())
	}
	if body.Utf8Text([]byte(code)) != `item.a != null && item.b.length() > 0` {
		t.Fatalf("lambda body range: %q", body.Utf8Text([]byte(code)))
	}
	code = `root = 1 + 2 * 3 == 7 && true`
	value := parse(t, code).RootNode().NamedChild(0).ChildByFieldName("value")
	for _, operator := range []string{"&&", "==", "+"} {
		if got := value.ChildByFieldName("operator").Utf8Text([]byte(code)); got != operator {
			t.Fatalf("operator = %q, want %q", got, operator)
		}
		value = value.ChildByFieldName("left")
	}
}

func TestUnicodeByteRanges(t *testing.T) {
	code := `root.x = "😀" + this.name`
	value := parse(t, code).RootNode().NamedChild(0).ChildByFieldName("value")
	right := value.ChildByFieldName("right")
	want := uint(strings.Index(code, "this.name"))
	if right.StartByte() != want || right.StartPosition().Column != want || right.Utf8Text([]byte(code)) != "this.name" {
		t.Fatalf("UTF-8 range: %v-%v %q", right.StartPosition(), right.EndPosition(), right.Utf8Text([]byte(code)))
	}
}

func TestQueriesCompile(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bloblang.Language())
	for _, name := range []string{"highlights", "locals", "outline"} {
		t.Run(name, func(t *testing.T) {
			source, err := os.ReadFile("../../queries/" + name + ".scm")
			if err != nil {
				t.Fatal(err)
			}
			query, queryErr := tree_sitter.NewQuery(language, string(source))
			if queryErr != nil {
				t.Fatal(queryErr)
			}
			defer query.Close()
			if query.PatternCount() == 0 {
				t.Fatal("query has no patterns")
			}
		})
	}
}
