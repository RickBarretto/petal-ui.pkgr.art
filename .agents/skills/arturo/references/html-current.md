---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 1.0.0-rc.1
  arturo-version: 0.10.0
  review-date: 2026-11-01
  sources:
    - https://github.com/RickBarretto/html.pkgr.art/blob/v1.0.0-rc.1/src/html.art
    - https://github.com/RickBarretto/html.pkgr.art/blob/v1.0.0-rc.1/API.md
    - https://github.com/RickBarretto/html.pkgr.art/blob/v1.0.0-rc.1/LICENSE
---

# HTML DSL — 1.0.0-rc.1

This prerelease requires Arturo 0.10.0+. Select it deliberately; registry imports may resolve another API. For 0.0.4 use the [legacy guide](html.md). Source and API reviewed 2026-11-01; local source checks do not establish registry acquisition or browser behavior.

Import the selected checkout's `src/html.art` with a script-relative local path and `!`, or use the project's verified release import. Do not assume Arturo's version syntax accepts prerelease identifiers without checking.

```art
; After loading the selected release:
card: $[name :string] -> fragment [p name]
page: fragment [section [card "Ana <reader>" card "João"]]
print to :string page
```

- `html`, `body`, and `fragment` evaluate child blocks with scoped helpers. Outside them use `markup\p`, `markup\element "my-widget" content`, or `markup\raw trustedText`. `html` adds the doctype; `markup` is the DSL object.
- Elements/fragments return markup objects. Nest them without `raw`; converting to a string and reinserting it as text escapes it again. Child blocks execute once at construction, not on every rendering.
- Text and attribute values escape `&`, `<`, `>`, and double quotes. Children accept strings/markup; null is ignored. Convert numbers explicitly. `raw` bypasses escaping; script/style require raw or empty content. URLs, CSS, and JavaScript are not sanitized.
- Each tag takes one content argument. Void elements require empty content or an attribute dictionary and reject nonempty children. Attributes normalize to lowercase/hyphens; call attributes override dictionary attributes. Null omits an attribute. HTML boolean true/false emits/omits its bare name; other logical values remain quoted.
- Child helpers shadow built-ins/caller names including `div`, `map`, `select`, and `input`. Save a needed built-in under another name before entering. Bindings are restored afterward; child assignments follow function scope. Separate instances use `to :htmlDsl []!`.
- This serializes HTML5 without checking content models. SVG/MathML and obsolete APIs are unsupported; browser support for experimental helpers is separate from serialization.

Check escaping, nested markup without double escaping, explicit raw content, helper restoration, repeated rendering, and empty/invalid content. Run the optional package lane for execution evidence; the normal smoke suite does not acquire HTML.
