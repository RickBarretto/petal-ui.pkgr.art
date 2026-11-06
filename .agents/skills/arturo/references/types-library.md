---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/types
    - https://arturo-lang.io/llms.txt
---

# Types: function selection

Use for conversion, type predicates, and custom object definitions. Type names use lower camelCase, for example `:someObject`. A syntactic value inside a block can be inspected without resolving its words. `to` takes the type first; handle conversion failures explicitly.

Define inheritance and constructors using the actual `define`, `is`, and `constructor` signatures.

For unknown function names, use [the types module](https://arturo-lang.io/documentation/library/types).
