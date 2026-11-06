---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.9.0
  arturo-version: 0.10.0
  source-package-version: 0.8.0
  sources:
    - https://validator.pkgr.art/
    - https://github.com/drkameleon/validator.art/tree/v0.8.0
    - https://arturo-lang.io/documentation/library/core/import/
---

# String validation

Use validator for string-format checks.

```art
import "validator"!

valid?.url "https://arturo-lang.io" ; true
valid?.email "loremIpsum@"         ; false
valid?.ip.v6 "127.0.0.1"           ; false
```

Locally test expected successes and failures with an already installed package.

`valid?` accepts a string or a block of strings and returns a logical. A block checks the collection; it does not return individual diagnostics. Use a separate call per input when the caller needs field-specific errors. Select the intended mode explicitly instead of relying on implicit detection.

Modes include `.email`, `.url`, `.ip` (with `.v4` or `.v6`), `.integer`, `.floating`, `.json`, `.date`, `.password`, `.iban`, `.card`, `.isbn`, `.base58`, `.md5`, `.sha`, `.sedol`, and `.tld`. For example, date checks accept `.format:`, JSON accepts `.strict`, and passwords accept length and character-count options.

Confirm their defaults in the installed release before encoding a policy.

A successful format check does not prove that a mailbox exists, a URL is reachable, or an account belongs to someone. Preserve the original string unless the application separately asks for normalization.
