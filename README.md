# tree-sitter-bloblang

[Bloblang](https://docs.redpanda.com/redpanda-connect/guides/bloblang/about/) grammar for [Tree-sitter](https://github.com/tree-sitter/tree-sitter), the data mapping language used by Benthos and Redpanda Connect. File extensions are `.blobl` and `.bloblang`.

## Syntax and queries

The grammar covers root and metadata assignments, `let` bindings, imports, named maps (including quoted names), statement `if` blocks, and `if`/`match` expressions. Expressions include objects, arrays, lambdas, function and method calls with positional or named arguments and trailing commas, computed and quoted field access, metadata references, `deleted()`, `null`, and ordinary or triple-quoted strings.

Operator precedence follows Bloblang: boolean operators share a level, comparisons bind more tightly, followed by addition/subtraction, multiplication/division/modulo/coalesce, unary operators, and field access/calls. Lambdas include their full expression body. Calls distinguish properties (`this.foo`) from methods (`this.foo()`). A continuation can follow a dot on the next line; whitespace before the dot is invalid.

```bloblang
map "normalize-user" {
  root = this.with("name", "id",)
}
if this.active {
  root = this.apply("normalize-user")
  root.name = this.name.replace_all(old: "dog", new: "cat")
} else {
  root = deleted()
}
```

Editor queries are shipped in `queries/`:

- `highlights.scm` distinguishes properties, calls, bindings, named arguments, literals, and comments.
- `locals.scm` tracks `let` definitions and `$name` references, with document and named-map scopes. It does not implement full semantic scope analysis for lambdas or conditional branches.
- `outline.scm` captures map declarations and assignments for consumers that support outlines.

This parser builds a syntax tree; it does not evaluate mappings or validate function availability, argument types, or runtime behavior. Directive lines such as `#!input` are parsed as comments.

## Generate and verify

The generated C parser and node metadata are checked in. With Node.js and npm installed:

```sh
npm install
npx tree-sitter generate
npx tree-sitter test
go test -count=1 ./bindings/go/...
```

Generation uses `grammar.js`. The corpus covers accepted and malformed syntax. Go binding tests also check AST fields, precedence, UTF-8 byte ranges, malformed inputs, and compilation of the highlighting, locals, and outline queries. Repository commit hooks regenerate the parser, run the corpus, and validate the commit message; the commit-message hook uses Bun.

With Bun and the installed native Tree-sitter CLI, generation and corpus checks can run without Node.js:

```sh
bun install
node_modules/tree-sitter-cli/tree-sitter generate --js-runtime bun
node_modules/tree-sitter-cli/tree-sitter test
```

## Bindings and CGo

C, Go, and Node.js bindings are included. The Go module requires Go 1.23 or later and exposes `Language()` from `bindings/go`, for use with `github.com/tree-sitter/go-tree-sitter`.

The Go binding uses **CGo** and compiles the checked-in `src/parser.c`; builds and tests require CGo enabled and a C compiler. Cross-compilation requires a compiler for the target platform. Generation tools are unnecessary when building from the checked-in parser. A compiled application does not need Node.js, Bun, or a compiler at runtime; its native library requirements depend on how it was linked.
