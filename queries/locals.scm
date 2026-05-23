; queries/locals.scm

; -------------------------------------------------------------------------
; Scopes
; -------------------------------------------------------------------------
; The entire document is a scope
(source) @local.scope

; Map blocks create nested scopes
(map_declaration) @local.scope

; -------------------------------------------------------------------------
; Definitions
; -------------------------------------------------------------------------
; let kvs = ... defines kvs
(let_assignment
  name: (identifier) @local.definition)

; -------------------------------------------------------------------------
; References
; -------------------------------------------------------------------------
; $kvs references the let-defined variable
(variable_ref
  (identifier) @local.reference)
