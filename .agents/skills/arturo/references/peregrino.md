---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.1.2
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://peregrino.pkgr.art/
    - https://github.com/drkameleon/peregrino/tree/v0.1.2
---

# Peregrino benchmarking

Confirm installed options with `peregrino --help`. Package import may download and execute code.

The CLI runs command strings repeatedly. Use safe, bounded commands and account for their side effects on every run. Keep inputs, working directory, runtime, and cache conditions comparable; report run count with results. Benchmarks measure performance, not correctness.

Example:

```sh
peregrino --run:3 "arturo -e 'print 1'" "arturo -e 'print 2'"
```

Value options use the documented colon form, such as `--run:3`. `--file` reads one command per line; `--json` and `--markdown` export results to chosen files. Check help for the installed syntax before writing exports.

Library construction uses a block of command strings:

```art
import {peregrino}!

measurement: to :peregrino @["arturo -e 'print 1'"]!
measurement\benchmark
```

This includes process startup and command output costs. Use `--minimal`, `--ascii`, or `--colorless` for simpler terminal presentation.
