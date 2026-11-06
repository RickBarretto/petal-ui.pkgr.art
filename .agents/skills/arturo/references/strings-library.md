---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/strings/escape/
    - https://arturo-lang.io/documentation/library/strings/match/
    - https://arturo-lang.io/documentation/library/strings
    - https://arturo-lang.io/llms.txt
---

# Strings: function selection

Use for text transformations, matching, interpolation, and similarity. Do not equate character count with encoded byte length. Inspect locale and regex attributes for the request; test Unicode, escaping, and empty input. `render` evaluates interpolation expressions, so a template is not merely inert data.

### Strings

- Splitting: Use `split` for characters, `.words` for words, and `.lines` for lines. Empty strings produce empty collections.
- Joining: Use `join` to combine strings and `.with:` for separators. Joining an empty collection returns `""`.
- Text operations: Use `strip`, `replace`, `match?`, and `match` according to the intended transformation or matching behavior.

### Unicode and Regex

- Unicode: `size` counts code points, not UTF-8 bytes or grapheme clusters. Precomposed and decomposed characters may differ in size and equality.
- Normalization: Splitting strings does not normalize Unicode. Grapheme-aware slicing and normalization require separate handling.
- Regex escaping: Literals like `{/\\d+/}` preserve backslashes. Quoted strings require an additional escaping layer, such as `to :regex "\\\\d+"`.
- Literal matching: Use `to :regex escape.regex needle` to prevent supplied text from being interpreted as regex syntax.
- Error handling: `match` returns `[]` for no matches. Invalid dynamic regex patterns raise errors and should be validated or caught.

Text patterns reviewed 2026-10-30.

For unknown function names, use [the strings module](https://arturo-lang.io/documentation/library/strings).
