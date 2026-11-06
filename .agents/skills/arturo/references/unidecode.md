---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.0.3
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://unidecode.pkgr.art/
    - https://github.com/drkameleon/unidecode.art/tree/v0.0.3
    - https://arturo-lang.io/documentation/library/core/import/
---

# Unicode transliteration

Use unidecode for approximate Unicode-to-ASCII conversion.

```art
import "unidecode"!

print unidecode "доброе утро!"
; dobroe utro!
```

### API

- Usage: `unidecode str` returns an approximate, language-independent transliteration.
- Limitations: Transliteration is not translation, reversible encoding, or guaranteed correct spelling.
- Data preservation: Keep the original text for display and identity-sensitive information.
- Slugs and filenames: Apply separator, normalization, and collision-handling rules separately.
- Validation: Test representative scripts, punctuation, and transliteration collisions using the installed package.
