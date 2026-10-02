/**
 * @file Tree-sitter grammar for Bloblang, the data mapping language used by Benthos/Redpanda Connect
 * @author Halil Teyfik Dolmaci <hlltvfk@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "bloblang",

  /**
   * Define whitespace and comments as extras so they can appear anywhere
   */
  extras: ($) => [/\s/, $.comment],

  /**
   * Tell Tree-sitter to use GLR parsing for this specific ambiguity
   */
  conflicts: ($) => [
    [$.match_expr, $.object_literal],
    [$.meta_ref, $.bare_meta_ref],
  ],

  rules: {
    // -------------------------------------------------------------------------
    // Top-level / Statements
    // -------------------------------------------------------------------------

    /**
     * The entry point of the grammar: a document is zero or more statements.
     */
    source: ($) => repeat($._statement),

    /**
     * A statement can be a mapping declaration, meta assignment, root assignment, or let variable assignment.
     */
    _statement: ($) =>
      choice(
        $.map_declaration,
        $.meta_assignment,
        $.root_assignment,
        $.let_assignment,
        $.import_statement,
        $.if_statement,
      ),

    if_statement: ($) =>
      seq(
        "if",
        field("condition", $._expr),
        field("consequence", $.statement_block),
        optional(
          seq(
            "else",
            field("alternative", choice($.statement_block, $.if_statement)),
          ),
        ),
      ),

    statement_block: ($) => seq("{", repeat($._statement), "}"),

    /**
     * Map blocks for reusable mapping structures (e.g., map normalize_user { ... })
     */
    map_declaration: ($) =>
      seq(
        "map",
        field("name", choice($.identifier, $.string)),
        "{",
        repeat($._statement),
        "}",
      ),

    /**
     * Metadata assignments (e.g., meta original_topic = @kafka_topic)
     */
    meta_assignment: ($) =>
      choice(
        seq(
          "meta",
          field("key", choice($.identifier, $.string)),
          "=",
          field("value", $._expr),
        ),
        seq("meta", "=", field("value", $._expr)),
      ),

    /**
     * Root assignments, updated to natively support deep paths (e.g., root.doc.id = ...)
     */
    root_assignment: ($) =>
      seq(
        "root",
        optional(
          repeat1(
            seq(
              token.immediate("."),
              field("path", choice($._path_identifier, $.string)),
            ),
          ),
        ),
        "=",
        field("value", $._expr),
      ),

    /**
     * Import statements (e.g import "./common_maps.blobl")
     */
    import_statement: ($) => seq("import", field("path", $.string)),

    /**
     * Variable declarations (e.g., let header = if count("rows") == 1 { ... })
     */
    let_assignment: ($) =>
      seq("let", field("name", $.identifier), "=", field("value", $._expr)),

    // -------------------------------------------------------------------------
    // Expressions
    // -------------------------------------------------------------------------

    /**
     * Expressions evaluate to values and make up the right-hand side of statements.
     */
    _expr: ($) =>
      choice(
        $.if_expr,
        $.match_expr, // Added to support match blocks
        $.method_call,
        $.field_access,
        $.lambda,
        $.object_literal,
        $.array_literal,
        $.binary_expr,
        $.unary_expr, // Added to support !, -
        $._primary,
      ),

    /**
     * Conditional expressions (e.g., if this.foo == 1 { ... } else { ... })
     */
    if_expr: ($) =>
      seq(
        "if",
        field("condition", $._expr),
        "{",
        field("consequence", $._expr),
        "}",
        optional(
          choice(
            seq("else", "{", field("alternative", $._expr), "}"),
            seq("else", field("alternative", $.if_expr)),
          ),
        ),
      ),

    /**
     * Match expressions for conditional switching (e.g., match this.doc { "article" => this, _ => deleted() })
     */
    match_expr: ($) =>
      seq(
        "match",
        optional(field("condition", $._expr)),
        "{",
        repeat($.match_case),
        "}",
      ),

    /**
     * Individual cases within a match expression, matching a pattern to an output expression
     */
    match_case: ($) =>
      seq(
        field("pattern", choice($._expr, $.catch_all)),
        "=>",
        field("result", $._expr),
        optional(","),
      ),

    /**
     * The underscore catch-all strictly for match expressions
     */
    catch_all: ($) => "_",

    /**
     * Property access without invocation (e.g., this.items, this.foo.bar)
     */
    field_access: ($) =>
      prec.left(
        6,
        seq(
          field("object", $._expr),
          token.immediate("."),
          field(
            "field",
            choice($._path_identifier, $.parenthesized_expr, $.string),
          ),
        ),
      ),

    /**
     * Method chain — must end with parentheses (e.g., this.items(), this.foo.bar())
     */
    method_call: ($) =>
      prec.left(
        7,
        seq(
          field("object", $._expr),
          token.immediate("."),
          field("method", $.identifier),
          "(",
          optional($._arguments),
          ")",
        ),
      ),

    /**
     * Lambda functions used for higher-order methods (e.g., role -> role.uppercase())
     */
    lambda: ($) =>
      prec.right(
        0,
        seq(field("param", $.identifier), "->", field("body", $._expr)),
      ),

    _arguments: ($) =>
      choice(
        seq($._expr, repeat(seq(",", $._expr)), optional(",")),
        seq(
          $.named_argument,
          repeat(seq(",", $.named_argument)),
          optional(","),
        ),
      ),

    named_argument: ($) =>
      seq(field("name", $.identifier), ":", field("value", $._expr)),

    /**
     * Global function calls by bare identifier only (e.g., uuid_v4(), deleted())
     */
    call_expr: ($) =>
      prec.left(
        7,
        seq(field("function", $.identifier), "(", optional($._arguments), ")"),
      ),

    /**
     * Object literals constructed on the fly (e.g., { "key": value, "other": 123 })
     */
    object_literal: ($) =>
      seq(
        "{",
        optional(seq($.pair, repeat(seq(",", $.pair)), optional(","))),
        "}",
      ),

    /**
     * A single key-value pair used inside object literals
     */
    pair: ($) => seq(field("key", $._expr), ":", field("value", $._expr)),

    /**
     * Array literals (e.g., [a, b, c])
     */
    array_literal: ($) =>
      seq(
        "[",
        optional(seq($._expr, repeat(seq(",", $._expr)), optional(","))),
        "]",
      ),

    /**
     * Binary operations, expanded to include mathematical (+, -, *, /, %) and the coalescing operator (|)
     */
    binary_expr: ($) =>
      choice(
        ...[
          [1, ["&&", "||"]],
          [2, [">", "<", ">=", "<=", "==", "!="]],
          [3, ["+", "-"]],
          [4, ["*", "/", "%", "|"]],
        ].map(([precedence, operators]) =>
          prec.left(
            precedence,
            seq(
              field("left", $._expr),
              field("operator", choice(...operators)),
              field("right", $._expr),
            ),
          ),
        ),
      ),

    /**
     * Unary operations to evaluate logical NOT or negative numbers (e.g., !(this.foo > this.bar))
     */
    unary_expr: ($) =>
      prec.right(
        5,
        seq(field("operator", choice("!", "-")), field("argument", $._expr)),
      ),

    // -------------------------------------------------------------------------
    // Primary / Tokens
    // -------------------------------------------------------------------------

    /**
     * Core atomic values that don't depend on lower precedence operations
     */
    _primary: ($) =>
      choice(
        $.call_expr,
        $.meta_ref,
        $.bare_meta_ref,
        $.this_ref,
        $.variable_ref,
        $.deleted,
        $.identifier,
        $.string,
        $.number,
        $.boolean,
        $.null,
        $.parenthesized_expr,
      ),

    /**
     * Parentheses to explicitly override operator precedence (e.g., (a + b))
     */
    parenthesized_expr: ($) => seq("(", $._expr, ")"),

    /**
     * Reference to the current object (e.g., this)
     */
    this_ref: ($) => "this",

    /**
     * Metadata reference (e.g., @kafka_topic)
     */
    meta_ref: ($) => seq("@", choice($.identifier, $.string)),
    bare_meta_ref: ($) => "@",

    /**
     * Variable reference initialized previously via let (e.g., $kvs)
     */
    variable_ref: ($) => seq("$", $.identifier),

    /**
     * Special deleted() keyword explicitly used for filtering out messages
     */
    deleted: ($) => "deleted()",

    /**
     * Identifiers represent variable names, field names, and function/method names
     */
    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    _path_identifier: ($) =>
      choice($.identifier, alias(/[0-9][a-zA-Z0-9_]*/, $.identifier)),

    /**
     * String literals mapped within double quotes (including escaped characters)
     */
    string: ($) =>
      choice(
        token(seq('"', repeat(choice(/[^"\\\n\r]+/, /\\[^\n\r]/)), '"')),
        token(seq('"""', repeat(choice(/[^"]+/, /"[^"]/, /""[^"]/)), '"""')),
      ),

    /**
     * Numeric literals (Bloblang supports decimal integers and floats)
     */
    number: ($) => /\d+(?:\.\d+)?/,

    /**
     * Boolean literals
     */
    boolean: ($) => choice("true", "false"),

    null: ($) => "null",

    /**
     * Single-line comments defined by a hash (#)
     */
    comment: ($) => token(seq("#", /[^\n]*/)),
  },
});
