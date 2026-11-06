---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://recase.pkgr.art/
    - https://github.com/drkameleon/recase.art
    - https://arturo-lang.io/documentation/library/core/import/
---

# Identifier case conversion

Use recase when converting names between case conventions.

```art
import "recase"!

recase.snake "This is an example"
; => "this_is_an_example"
recase.camel "Print SQL"
; => "printSQL"
```

### API

- Usage: `recase str :string` converts text into a specified naming convention.
- Formats: `.title`, `.camel`, `.snake`, `.kebab`, `.dot`, `.train`, `.plain`, or `.custom:` for custom separators.
- Title case: `.title` produces `TitleCase`, not natural-language capitalization.
- Whitespace: Word separation removes whitespace, making recase suitable for identifiers rather than preserving prose.
- Unicode: Supports Unicode; ASCII conversion requires a separate operation.
- Reversibility: Preserve the original string when needed. Different inputs may produce identical identifiers.
- Validation: Test acronyms, separators, whitespace, Unicode names, and naming collisions with the package installed.
