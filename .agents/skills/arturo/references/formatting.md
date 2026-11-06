---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-11-01
  sources:
    - https://arturo-lang.io/documentation/language/#right-arrow-operator
    - https://arturo-lang.io/documentation/library/#symbol-index
    - https://arturo-lang.io/documentation/library/core/function/
    - https://arturo-lang.io/documentation/library/core/switch/
    - https://arturo-lang.io/llms.txt
---

# Expressive Arturo syntax

Prefer documented symbols to spelled-out built-ins in new code: `$` for `function`, arithmetic/comparison operators, `?` for `switch`, `??` for `coalesce`, and `@`/`./` for evaluated arrays/script-relative paths. Keep logical functions explicit: use `and?`, `or?`, `not?`, `xor?`, `nand?` and similar names rather than their symbolic aliases. The [symbol map](symbols.md) catalogs available aliases and prefix/infix positions; availability is not a recommendation to use logical symbols. Keep names when referring to APIs in metadata/diagnostics or when a package interface expects a name or literal predicate.

Choose I/O syntax by context rather than forcing aliases everywhere. `content >> destination` and `<< source` suit a simple, readable file flow. Prefer named calls when format attributes, explicit file interpretation or operand order need emphasis: `write.json settings "settings.json"`, `read.file.json "settings.json"`. Keep resource-selection and mutation behavior unchanged; `write` takes content before destination, while `>>` is infix and `<<` is prefix.

Prefer `->` for a function, iterator, conditional action or assertion whose body is one terminal expression:

```art
doubleValue: $[value :integer :floating] -> value * 2
squares: map [1 2 3] 'value -> value ^ 2
ensure -> squares = [1 4 9]
ensure -> and? (not? empty? squares) (or? 2 > 1 false)
labelFor: $[count :integer] -> ((count = 1) ? -> "item" -> "items")
```

Keep `[]` for data, parameter lists, empty blocks and multi-step bodies. A short line is not necessarily one expression; `body: -> 1 2` binds `[1]` and leaves `2` outside it. `->` is block syntax, not a replacement for every bracket pair. It adds neither scope nor arithmetic precedence.

```art
changedFirst: $[items :block value][
    ensure -> not? empty? items
    result: new items
    set result 0 value
    result
]
```

Use spaces around infix operators and four-space indentation for multi-step bodies. Separate statements and related groups visibly. Parenthesize compound conditions and function results before using them as operands: `(count = 1) ? -> "item" -> "items"`, `(labelFor 1) = "item"`. Group intended arithmetic explicitly; `2 * 3 + 4` still yields 14. Prefer `=<` for less-or-equal; `<=` is duplication.

Do not replace lazy branches with eager `??`, change a literal mutation argument to a value, or rename package DSL predicates merely to shorten a call. Preserve existing project style unless restyling is requested. Use named parameters and intermediate bindings when they make evaluation or the result contract clearer.

[formatting.art](../examples/language/formatting.art) checks these forms and the terminal boundary offline. The wording here summarizes the official syntax; the examples are original. It is a code-writing convention, not an automatic formatter or a change to Arturo evaluation.
