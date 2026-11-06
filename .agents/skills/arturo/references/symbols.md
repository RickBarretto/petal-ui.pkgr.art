---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://arturo-lang.io/documentation/library/#symbol-index
    - https://arturo-lang.io/llms.txt
---

# Symbol aliases

Prefer non-logical aliases when writing Arturo; keep logical functions such as `and?`, `or?` and `not?` spelled out for readability. Choose `read`/`write` or `<<`/`>>` by context. This table catalogs available aliases, including logical symbols for recognition; it does not recommend using every alias. See [formatting guidance](formatting.md) for expression blocks and layout. Follow their arity, evaluation, and mutation contracts; grouping still follows Arturo evaluation rules.

| Symbol | Function                                                                                      | Position |
| ------ | --------------------------------------------------------------------------------------------- | -------- |
| `+`    | [`add`](https://arturo-lang.io/documentation/library/arithmetic/add/)                         | infix    |
| `∧`    | [`and?`](https://arturo-lang.io/documentation/library/logic/and-/)                            | infix    |
| `++`   | [`append`](https://arturo-lang.io/documentation/library/collections/append/)                  | infix    |
| `@`    | [`array`](https://arturo-lang.io/documentation/library/collections/array/)                    | prefix   |
| `<=>`  | [`between?`](https://arturo-lang.io/documentation/library/comparison/between-/)               | infix    |
| `??`   | [`coalesce`](https://arturo-lang.io/documentation/library/core/coalesce/)                     | infix    |
| `:=`   | [`conforms?`](https://arturo-lang.io/documentation/library/quantities/conforms-/)             | infix    |
| `-->`  | [`convert`](https://arturo-lang.io/documentation/library/quantities/convert/)                 | infix    |
| `#`    | [`dictionary`](https://arturo-lang.io/documentation/library/collections/dictionary/)          | prefix   |
| `/`    | [`div`](https://arturo-lang.io/documentation/library/arithmetic/div/)                         | infix    |
| `/%`   | [`divmod`](https://arturo-lang.io/documentation/library/arithmetic/divmod/)                   | infix    |
| `<=`   | [`dup`](https://arturo-lang.io/documentation/library/core/dup/)                               | prefix   |
| `=`    | [`equal?`](https://arturo-lang.io/documentation/library/comparison/equal-/)                   | infix    |
| `//`   | [`fdiv`](https://arturo-lang.io/documentation/library/arithmetic/fdiv/)                       | infix    |
| `$`    | [`function`](https://arturo-lang.io/documentation/library/core/function/)                     | prefix   |
| `>`    | [`greater?`](https://arturo-lang.io/documentation/library/comparison/greater-/)               | infix    |
| `>=`   | [`greaterOrEqual?`](https://arturo-lang.io/documentation/library/comparison/greaterorequal-/) | infix    |
| `∈`    | [`in?`](https://arturo-lang.io/documentation/library/collections/in-/)                        | infix    |
| `∩`    | [`intersection`](https://arturo-lang.io/documentation/library/sets/intersection/)             | infix    |
| `<`    | [`less?`](https://arturo-lang.io/documentation/library/comparison/less-/)                     | infix    |
| `=<`   | [`lessOrEqual?`](https://arturo-lang.io/documentation/library/comparison/lessorequal-/)       | infix    |
| `:`    | [`let`](https://arturo-lang.io/documentation/library/core/let/)                               | infix    |
| `%`    | [`mod`](https://arturo-lang.io/documentation/library/arithmetic/mod/)                         | infix    |
| `*`    | [`mul`](https://arturo-lang.io/documentation/library/arithmetic/mul/)                         | infix    |
| `⊼`    | [`nand?`](https://arturo-lang.io/documentation/library/logic/nand-/)                          | infix    |
| `¬`    | [`not?`](https://arturo-lang.io/documentation/library/logic/not-/)                            | prefix   |
| `<>`   | [`notEqual?`](https://arturo-lang.io/documentation/library/comparison/notequal-/)             | infix    |
| `∨`    | [`or?`](https://arturo-lang.io/documentation/library/logic/or-/)                              | infix    |
| `^`    | [`pow`](https://arturo-lang.io/documentation/library/arithmetic/pow/)                         | infix    |
| `∏`    | [`product`](https://arturo-lang.io/documentation/library/numbers/product/)                    | prefix   |
| `..`   | [`range`](https://arturo-lang.io/documentation/library/collections/range/)                    | infix    |
| `<<`   | [`read`](https://arturo-lang.io/documentation/library/files/read/)                            | prefix   |
| `./`   | [`relative`](https://arturo-lang.io/documentation/library/paths/relative/)                    | prefix   |
| `--`   | [`remove`](https://arturo-lang.io/documentation/library/collections/remove/)                  | infix    |
| `~`    | [`render`](https://arturo-lang.io/documentation/library/strings/render/)                      | prefix   |
| `-`    | [`sub`](https://arturo-lang.io/documentation/library/arithmetic/sub/)                         | infix    |
| `⊆`    | [`subset?`](https://arturo-lang.io/documentation/library/sets/subset-/)                       | infix    |
| `∑`    | [`sum`](https://arturo-lang.io/documentation/library/numbers/sum/)                            | prefix   |
| `⊇`    | [`superset?`](https://arturo-lang.io/documentation/library/sets/superset-/)                   | infix    |
| `?`    | [`switch`](https://arturo-lang.io/documentation/library/core/switch/)                         | infix    |
| `∪`    | [`union`](https://arturo-lang.io/documentation/library/sets/union/)                           | infix    |
| `>>`   | [`write`](https://arturo-lang.io/documentation/library/files/write/)                          | infix    |
| `⊻`    | [`xor?`](https://arturo-lang.io/documentation/library/logic/xor-/)                            | infix    |

- `>>` writes as `content >> destination`; `<< source` reads in prefix position. Use named `read`/`write` when attributes or the surrounding I/O workflow are clearer that way.
- `<=` duplicates; `=<` compares. `<=>` checks inclusive bounds with three arguments.
- `-->` converts quantities; inspect its accepted types before choosing a converter.
- `∧`, `∨`, `¬`, `⊼`, and `⊻` alias logical predicates, not bitwise functions. Prefer their explicit names (`and?`, `or?`, `not?`, `nand?`, `xor?`) in new code.
- `:` aliases `let`; distinguish labels (`name:`) and types (`:integer`).
- `#[...]` constructs dictionaries; `#red` and hexadecimal color literals denote colors; use the [pinned color-name table](https://github.com/arturo-lang/arturo/blob/4e549e105c54af2e250381d578474b9064d9d4d2/src/vm/values/custom/vcolor.nim#L620-L1199) for named literals.
- `->` is terminal-expression block syntax, outside this library-alias index. Keep `[...]` for multi-step bodies.
