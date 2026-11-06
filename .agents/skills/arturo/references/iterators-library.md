---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/language/#scope-and-rules
    - https://arturo-lang.io/documentation/library/iterators
    - https://arturo-lang.io/llms.txt
---

# Iterators

## Scope and empty inputs

Iterator arguments and injected indices temporarily shadow bindings, which are restored afterward; other assignments persist. Index injection uses `.with: 'i`; verify each iterator's parameters and attributes.

Empty `map`, `select`, and `filter` return `[]`; seeded `fold` returns its seed without running the body. Use `map` for transformations, `select` to retain matches, `filter` to remove matches, `fold` to accumulate, and `loop` for effects. The [offline checks](../examples/collections/collections.art) exercise these forms.

Scope and empty-input patterns reviewed 2026-10-30.

For unknown function names, use [the iterators module](https://arturo-lang.io/documentation/library/iterators).
