---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/databases
    - https://arturo-lang.io/llms.txt
---

# Databases: function selection

Use for database connections, parameterized SQL, and persistent stores. Inspect the enabled backend and return shapes. Bind SQL data with `.with:` instead of interpolating it. Close connections on success and failure. Stores write to disk; `.global` changes the destination and `.deferred` changes when persistence occurs.

Examples are independent fragments; names such as `value`, `items`, `settings`, `client`, `server`, `db`, and `childPid` denote inputs or resources prepared by the surrounding program. They are not implicit globals. Examples require a connection or store and cleanup; use a disposable database.

For unknown function names, use [the databases module](https://arturo-lang.io/documentation/library/databases).
