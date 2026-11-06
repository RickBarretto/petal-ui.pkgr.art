---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/crypto
    - https://arturo-lang.io/llms.txt
---

# Crypto: function selection

Use for encodings, checksums, and hashes exposed by this runtime. Base64 and URL encoding are representations, not encryption. CRC and generic hashes are not authenticity checks. `digest` defaults to MD5 and `.sha` selects SHA1; these are compatibility functions, not a password-storage or modern security design. Avoid assuming unsupported algorithms.

For unknown function names, use [the crypto module](https://arturo-lang.io/documentation/library/crypto).
