package tree_sitter_bloblang_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_bloblang "github.com/teyfix/tree-sitter-bloblang.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_bloblang.Language())
	if language == nil {
		t.Errorf("Error loading Bloblang grammar")
	}
}
