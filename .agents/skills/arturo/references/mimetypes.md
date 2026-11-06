---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.0.4
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://mimetypes.pkgr.art/
    - https://github.com/drkameleon/mimetypes.art/blob/v0.0.4/src/mimetypes.art
    - https://arturo-lang.io/documentation/library/core/import/
---

# MIME lookup

Use mimetypes for extension-based MIME lookup. Importing can download a missing package and execute its entrypoint.

```art
import "mimetypes"!

mimetype "somefile.jpg" ; ["image/jpeg"]
mimetype "boom"         ; []
mimetype.extensions "image/jpeg"
; ["jpe" "jpeg" "jpg"]
```

`mimetype location :string` accepts an extension or filepath and normally returns a block of possible MIME strings. `.extensions` reverses the lookup and returns sorted extensions. Unknown inputs return an empty block; choose an application fallback explicitly.

`.best` changes the return shape: the 0.0.4 implementation returns a single string on a match and an empty block on a miss, despite the reference's blanket `:block` return description. Handle both cases before setting a header. Do not assume a list's first entry is the same as `.best`; the implementation chooses the last match.

Lookup uses a bundled database derived from mime-db. It does not inspect file bytes, prove the content matches the extension, or validate an upload. Normalize input casing deliberately when the application requires it; do not assume the implementation normalizes extensions.

Once installed, test known, unknown, ambiguous, and uppercase extensions relevant to the application.
