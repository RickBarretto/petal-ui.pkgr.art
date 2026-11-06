---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://arturo-lang.io/documentation/library/core/import/
    - https://github.com/arturo-lang/pkgr.art#using-packages
---

# Split a small program into files

Keep reusable computations in a helper file and execution, I/O, and reporting in the entry script. A helper that only defines functions can be loaded by checks without starting the application.

The self-contained [project example](../examples/language/project/main.art) loads [helpers.art](../examples/language/project/helpers.art). Run `arturo --no-color examples/language/project/main.art` from this skill directory, or pass the entry's absolute path from another directory.

Use `import ./{helpers}!` to resolve the helper beside the executing script. The `.art` extension is optional: `import ./{helpers.art}!` also works. `import relative "helpers.art"!` is another explicit script-relative form.

`import ./{helpers}!` evaluates trusted Arturo source and introduces its bindings into the current scope. It is not a data reader or an isolated namespace. The trailing `!` makes imported functions visible to parsing and execution of subsequent code at the same level, so the example calls the helper directly.

Do not assume ordinary source-order assignment alone makes callable words visible to an already parsed body.

A missing file should stop application startup before I/O begins; do not catch it and continue with partially loaded bindings.

Loading arbitrary helper source can have effects, so inspect it before evaluation.

When namespace isolation is needed, use a local package directory and `import.lean`, retaining the returned dictionary and calling qualified members. Resolve a filename or explicit local path before importing; a bare name can trigger registry installation.

Importing does not supply dependency locking, a sandbox, or automatic resource cleanup. Resources belong in the entry workflow and must be closed on success and failure.
