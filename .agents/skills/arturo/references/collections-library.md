---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/language/#scope-and-rules
    - https://arturo-lang.io/documentation/library/collections
---

# Collections: function selection

- Supported types: `:block`, `:dictionary`, `:range`, and collection-like `:string`s.
- Operation selection: Choose functions based on the desired result and supported collection type.
- Membership: `contains? collection value` and `in? value collection` use reversed argument order.
- Mutation: Prefer non-mutating operations unless intentional. Direct `set` may modify shared storage.
- Performance: Bound ranges, combinations, and permutations to avoid excessive computation.

## Values and access

`[]` stores code or data; `@[...]` evaluates expressions. Use quoted strings for text. Ranges such as `1..10` include both endpoints; materialize with `array`/`@` only when needed.

Create dictionaries with `#[key: value]`; access through paths or `get`. `key?` distinguishes missing keys from `null`; missing-key `get` raises an error. In Arturo 0.10.0, `first []` returns `null`. Use `empty?` and bounds checks for access. Do not assume dictionary order; iterate key/value pairs with `loop`, or use `keys`/`values`.

`sort values` returns a result; `sort 'values` mutates the binding. Numeric transformations preserve the input; mixed numeric/string operations do not automatically parse strings. Parenthesize ambiguous calculations when porting algorithms.

Patterns reviewed 2026-10-30; [upstream collection tests](https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/collections).

For unknown function names, use [the collections module](https://arturo-lang.io/documentation/library/collections).
