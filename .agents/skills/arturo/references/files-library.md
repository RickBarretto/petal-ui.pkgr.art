---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/files
    - https://arturo-lang.io/llms.txt
---

# Files: function selection

Use for filesystem reads, writes, metadata, and archives. `write` takes content before destination. Establish the intended root and overwrite behavior. Run effectful checks only in disposable directories; inspect archive argument order rather than assuming it. A path string and a filesystem path value are different language concepts.

Examples are independent fragments; names such as `value`, `items`, `settings`, `client`, `server`, `db`, and `childPid` denote inputs or resources prepared by the surrounding program. They are not implicit globals. Mutating and archive examples require disposable fixtures.

For verified removal and separate action/cleanup errors, see [the cleanup workflow](scripting-workflows.md#preserve-action-and-cleanup-failures) and its [offline assertions](../examples/scripting/file-cleanup.art). On Arturo 0.10.0 Linux, `delete` can return normally with a path still present; catching errors alone does not establish removal.

The workflow checks the postcondition and continues with later owned files.

For unknown function names, use [the files module](https://arturo-lang.io/documentation/library/files).
