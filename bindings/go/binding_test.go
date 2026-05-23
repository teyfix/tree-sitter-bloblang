package tree_sitter_bloblang_test

import (
	"testing"

	tree_sitter_bloblang "github.com/teyfix/tree-sitter-bloblang/bindings/go"
	tree_sitter "github.com/tree-sitter/go-tree-sitter"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bloblang.Language())
	if language == nil {
		t.Errorf("Error loading Bloblang grammar")
	}
}

func TestCanParseSnippet(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bloblang.Language())

	parser := tree_sitter.NewParser()
	defer parser.Close() // Required in v0.24.0+ to prevent memory leaks

	// 1. Capture and handle the error from SetLanguage
	if err := parser.SetLanguage(language); err != nil {
		t.Fatalf("Error setting language: %v", err) // This is where it's currently failing!
	}

	// 2. Parse the snippet
	tree := parser.Parse([]byte(`
root.name = this.name.replace("old", "new")
root.surname = "surname value"
`[1:]), nil)
	if tree == nil {
		t.Fatalf("Error parsing Bloblang snippet: Parse returned nil")
	}
	defer tree.Close() // Required in v0.24.0+

	// tree is successfully populated at this point
}
