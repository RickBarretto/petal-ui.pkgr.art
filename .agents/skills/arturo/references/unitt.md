---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 3.1.1
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://unitt.pkgr.art/
    - https://github.com/RickBarretto/unitt/tree/v3.1.1
---

# Unitt unit testing

Use native Unitt discovery/reporting for project unit tests, preserving configured paths. Do not replace the runner with a compatibility wrapper without a versioned reproducer. Upstream forbids `.lean`; imports may download and execute code.

Prefer `describe`/`it`/`expects`. Assertions belong inside cases; `.be:` or `.to:` selects a predicate literal with evaluated arguments. Keep test inputs deterministic.

```art
import {unitt}!

describe "addition" [
    it "adds positive integers" [
        expects.be: 'equal? @[3 add 1 2]
    ]
]

if and? standalone? not? key? args 'filename ::
    unitt\report 'full
```

`report` exits with the result status; `.keep` continues. `'minimal` reports failures and summary. Use runner totals: loops repeat assertions.

Install with `arturo -p install unitt`, then run `unitt` for native discovery/reporting. Preserve existing paths; new projects can use root `config.art`:

```art
path: "specs"
suffix: ".spec.art"
binary: "arturo"
```

Place matching test files under `path`; `binary` selects the Arturo executable. Run a guarded file directly with `arturo specs/example.spec.art`.

`test`, `suite`, and `assert.with:` support older syntax. Conditional `.skip: logicalValue` skips `it` or standalone `test` cases when true. Version 3 removed `.prop`, `.static`, and `fatal`; `.prop` never generated property tests. Uncaught exceptions stop the runner.

On Unitt 3.1.1 / Arturo 0.10.0, native discovery launches each file as a command-line child with `--filename:` for file-backed results. `standalone?` is true there too: suppress direct reporting when `args` contains `filename`. `unitt\report` expects standalone dictionary storage and fails on the native store. This guard was reproduced in the opt-in package lane; it is not a replacement runner.

Uncaught runner errors can print an error yet exit zero on this runtime because upstream calls `exit 1`; empty discovery raises `No test found!` and exits 1. Check executed summaries and error output as well as process status; zero alone is not proof of success.
