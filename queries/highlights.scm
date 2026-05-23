; queries/highlights.scm

; -------------------------------------------------------------------------
; Keywords
; -------------------------------------------------------------------------
"map"      @keyword
"root"     @keyword
"meta"     @keyword
"let"      @keyword
"if"       @keyword
"else"     @keyword
"match"    @keyword
(deleted)  @keyword.builtin

; -------------------------------------------------------------------------
; Operators
; -------------------------------------------------------------------------
"->"  @operator
"="   @operator
"=="  @operator
"!="  @operator
">"   @operator
"<"   @operator
">="  @operator
"<="  @operator
"&&"  @operator
"||"  @operator
"+"   @operator
"-"   @operator
"*"   @operator
"/"   @operator
"%"   @operator
"|"   @operator
"!"   @operator
"=>"  @operator

; -------------------------------------------------------------------------
; Punctuation & Sigils
; -------------------------------------------------------------------------
"." @punctuation.delimiter
"," @punctuation.delimiter
":" @punctuation.delimiter
"{" @punctuation.bracket
"}" @punctuation.bracket
"[" @punctuation.bracket
"]" @punctuation.bracket
"(" @punctuation.bracket
")" @punctuation.bracket
"$" @punctuation.special
"@" @punctuation.special

; -------------------------------------------------------------------------
; Literals
; -------------------------------------------------------------------------
(string)  @string
(number)  @number
(boolean) @boolean

; -------------------------------------------------------------------------
; Comments
; -------------------------------------------------------------------------
(comment) @comment

; -------------------------------------------------------------------------
; Identifiers (Ordered by specificity)
; -------------------------------------------------------------------------

; 1. Base fallback: Any loose identifier is treated as a variable
(identifier) @variable

; 2. Lambda parameters (e.g., 'v' in v -> v.key)
(lambda
  param: (identifier) @variable.parameter)

; 3. Variable/Meta declarations (e.g., let kvs = ...)
(let_assignment
  name: (identifier) @variable)

; 4. Object literal keys (e.g., { "theme": "...", key_name: "..." })
(pair
  key: (identifier) @property)

; 5. Properties and fields (e.g., root.doc.id or v.key)
(root_assignment
  path: (identifier) @property)

(meta_assignment
  key: (identifier) @property)

(method_chain
  method: (identifier) @property)

; 6. Functions and map definitions
(call_expr
  function: (identifier) @function)

(map_declaration
  name: (identifier) @type.definition)

; 7. Built-ins and Catch-alls
(catch_all) @variable.builtin

((identifier) @variable.builtin
 (#eq? @variable.builtin "this"))
