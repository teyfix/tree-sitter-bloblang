# tree-sitter-bloblang

[Bloblang](https://docs.redpanda.com/redpanda-connect/guides/bloblang/about/) grammar for [tree-sitter](https://github.com/tree-sitter/tree-sitter), the data mapping language used by Benthos and Redpanda Connect.

## Features

- **Syntax highlighting** via `queries/highlights.scm`
- **Local variable tracking** via `queries/locals.scm` (`let` / `$var`)
- **Semantic distinction** between property access (`this.foo`) and method calls (`this.foo()`)
- **Computed field access** support: `this.(bar | baz)`
