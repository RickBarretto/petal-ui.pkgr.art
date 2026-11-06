---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.2.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://tabular.pkgr.art/
    - https://github.com/drkameleon/tabular.art/tree/v0.2.0
---

# Tabular terminal tables

Import may download a missing package and execute its entry file.

`tabular` accepts a block of row blocks and returns a string; explicitly `print` the result when terminal output is wanted. Prepare rows as data rather than interpolating executable Arturo text. Keep row widths consistent and align header, alignment, and padding settings with the columns.

Example:

```art
import "tabular"!

rows: [
    ["queued" 3]
    ["done"   7]
]
print tabular
    .header:["Status" "Count"]
    .align:['left 'right]
    .padding:1
rows
```

`.align:` accepts a literal for all columns or a block for individual columns; documented choices are `'left`, `'center`, and `'right`. `.padding:` similarly accepts an integer or block. Add `.unicode` for Unicode borders; omit it for ASCII output.

Validate empty data and long cell contents against the installed version when needed. Table rendering is presentation, so preserve the underlying data for sorting, numeric operations, or machine-readable export.
