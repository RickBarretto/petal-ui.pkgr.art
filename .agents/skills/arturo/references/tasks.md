---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 1.0.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://tasks.pkgr.art/
    - https://github.com/RickBarretto/tasks/tree/v1.0.0
    - https://github.com/RickBarretto/tasks/blob/v1.0.0/readme.md
---

# Tasks automation

Import normally with `import {tasks}!`; upstream explicitly warns against `.lean`. Imports can download and execute packages.

Separate declarations from the runner. `routine` declares reusable work; `task` declares runnable work. `runTask` accepts a task name as string or literal. `.requires:` names prerequisite routines; `.defers:` declares deferred routines. Inspect the installed implementation before relying on failure or repeat-execution semantics.

`directory` creates a directory. `file filename action` supports file requirements; `.as:` binds a dictionary containing `file` and `requires` inside its action. Confirm timestamp and rebuild rules in source before designing incremental builds.

`exec` (alias `|>`) runs shell commands and is available only within routine/task actions. Treat those commands and cleanup actions as real filesystem/process effects.
