; queries/outline.scm

; Variable declarations
(let_assignment
  name: (identifier) @name) @item

; Reusable mapping blocks
(map_declaration
  name: (identifier) @name) @item

; Root assignments with deep path: root.user.name = ...
(root_assignment
  path: (identifier) @name) @item

; Root assignments without path: root = ...
(root_assignment
  !path
  "root" @name) @item

; Metadata assignments (optional)
(meta_assignment
  key: (identifier) @name) @item
