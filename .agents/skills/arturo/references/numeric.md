---
metadata:
  arturo-version: 0.10.0
  sources:
    - https://arturo-lang.io/documentation/library/reflection/inspect
    - https://arturo-lang.io/documentation/library/reflection/info
    - https://arturo-lang.io/documentation/language
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/library/arithmetic
    - https://arturo-lang.io/documentation/library/bitwise
    - https://arturo-lang.io/documentation/library/numbers
    - https://arturo-lang.io/documentation/library/statistics
---

# Numeric reference

## Runtime

Use [runtime inspection](inspection.md) for installed signatures, evaluation and mutation uncertainty. Numeric behavior below records the reviewed baseline; verify differences with a bounded reproducer.

## Numeric Recipes

Source review: 2026-10-30.

Offline assertions: [checks.art](../examples/math/checks.art).

- **Grouping:** `2 * 3 + 4` and `mul 2 add 3 4` yield 14; `(2 * 3) + 4` yields 10. Use parentheses or intermediates.
- **Division:** `div 5 2` → integer 2; `fdiv 5 2` → floating 2.5; `/` aliases `div`. Guard divisors or catch errors; integer division by zero raises.
- **Mutation:** `increased: add amount 2` preserves `amount`; `add 'amount 2` mutates it. Mutation need not return the value form's result.
- **Conversion:** `to :integer "42"`, `to :floating 4`. Integer conversion truncates toward zero: 4.9 → 4, -4.9 → -4 on 0.10.0. Malformed strings raise; inspect `try` errors, never silently substitute zero. Failed conversion preserves input and previous destination; that destination is not a successful parse.
- **Mixed types:** `(to :string 4) ++ " units"` converts before concatenation; omitting parentheses attempts concatenation first. `convert` handles units, not general types.
- **Empty input:** `sum []` → 0; `product []` → 1; `average []` raises without mutation. Choose an explicit empty-data policy; do not invent a zero mean.
- **Statistics:** `average`, `variance`, and `median sort samples` preserve the original unsorted input. Singleton average equals its element; population variance is zero. `variance` defaults to population; `variance.sample [1 3]` → 2.0. Require ≥2 sample values: 0.10.0 returns 0.0 for singleton sample variance, although mathematically undefined.
- Check overflow, non-finite results, mixed types, and floating tolerances for intended inputs.

More conversion examples: [upstream tests](https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/types/to.test.art).

## Arithmetic

Source review: 2026-10-29.

Use for arithmetic across supported numeric types. Integer `div` differs from floating `fdiv`; select deliberately. Expressions group right to left without conventional operator precedence. A supported literal argument mutates its binding; a value argument returns a result.

Signatures and mutation: [runtime](#runtime). Examples are fragments; bound inputs.

## Bitwise

Source review: 2026-10-29.

Use for integer or binary bit operations. These functions differ from the logical predicates ending in `?`. Check integer width, signed values, and shift limits before using a bit pattern as an external representation.

Signatures and mutation: [runtime](#runtime). Examples are fragments; bound inputs.

## Numbers

Source review: 2026-10-29.

Use for numerical functions, constants, aggregates, and numeric predicates. Check domains, angle units, floating error, and non-finite results. `epsilon` denotes Euler’s number here, not machine precision. Keep factorials, factorization, and primality inputs bounded.

Signatures and mutation: [runtime](#runtime). Examples are fragments; bound inputs.

## Statistics

Source review: 2026-10-29.

Use for descriptive statistics on numeric collections. Population statistics are the defaults; inspect `.sample` support before choosing sample estimators. Decide how empty input, singleton samples, and non-numeric values should behave. Verify ordering requirements for `median` on the installed runtime.

Signatures and mutation: [runtime](#runtime). Examples are fragments; bound inputs.

For unknown function names, use [the arithmetic module](https://arturo-lang.io/documentation/library/arithmetic), [the bitwise module](https://arturo-lang.io/documentation/library/bitwise), [the numbers module](https://arturo-lang.io/documentation/library/numbers), [the statistics module](https://arturo-lang.io/documentation/library/statistics). Query the selected built-in with `inspect info.get 'name`; use a bounded probe for behavior absent from metadata.
