---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 0.0.4
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://html.pkgr.art/
    - https://github.com/RickBarretto/html.pkgr.art/blob/v0.0.4/src/html.art
    - https://github.com/RickBarretto/html.pkgr.art/blob/v0.0.4/test/element.test.art
    - https://github.com/RickBarretto/html.pkgr.art/blob/v0.0.4/exp.art
---

# HTML DSL — legacy 0.0.4

For the incompatible prerelease API, use [1.0.0-rc.1 guidance](html-current.md).

Use `html` for the experimental Arturo HTML generator. This guidance follows release 0.0.4 source and tests; the registry README contains little API documentation. Verify behavior against the chosen release before expanding the DSL.

```art
import.version:0.0.4 "html"!

print html\element 'p "Hello"
print html\element.class: "notice" 'div [
    "Welcome"
    html\element 'strong "reader"
]
print html\element 'input #[type: "text" name: "user"]
```

Import can download and evaluate package code.

- String content produces an opening tag, content, and closing tag.
- Block content is evaluated and its resulting values joined with newlines and indented. It is executable Arturo, not inert markup or a sandbox. Use qualified `html\element` calls when scope would make short tag names ambiguous.
- Dictionary content selects void-element rendering (`<input .../>`). Passing a string to an input element instead follows the ordinary closing-tag path.
- Arturo attributes become HTML attributes. Underscores in attribute names become hyphens; `.aria_label:` renders `aria-label`.

The `html` object provides tag methods and an `html` method for a document with a doctype; `fragment` joins evaluated content without that wrapper. Prefer explicit element calls while diagnosing evaluation or scope problems.

The implementation interpolates content and attribute values without HTML escaping. Escape untrusted text and attribute values for their specific contexts before rendering; generating markup does not sanitize it. Keep script/style insertion deliberate.
