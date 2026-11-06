---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.0.3
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://progressive.pkgr.art/
    - https://github.com/drkameleon/progressive.art/tree/v0.0.3
---

# Progressive terminal progress

Importing a missing package can download and execute it.

Choose iterator wrappers for `loop`, `map`, `select`, or `filter`; keep the original iterator's processing logic. Call `processing` inside a wrapped iterator to supply status detail. Do not assume other iterators are wrapped.

Example:

```art
import "progressive"!

progressive\loop .plain .static .colorless 1..3 'item [
    processing ~"Item |item|"
]
```

For manual tracking, construct `progress: progressive\new total!` and call `progress\increase 1` after each completed unit. The object changes as work advances; use a finite total and align increments with actual completion.

Options apply to wrappers and constructors: `.plain` selects ASCII, `.static` disables animation, `.colorless` disables colors, `.simple` removes detail, and `.counter` selects a counter. `.keep` retains the completed display; `.hide` removes it. Use `.label:` and `.message:` for labels and completion text.

Progress rendering is terminal output. Keep machine-readable output separate and avoid timing assertions against animation or terminal formatting.
