/**
 * @file Tree-sitter grammar for Bloblang, the data mapping language used by Benthos/Redpanda Connect
 * @author Halil Teyfik Dolmaci <hlltvfk@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "bloblang",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
