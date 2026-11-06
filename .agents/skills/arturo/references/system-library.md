---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/system
    - https://arturo-lang.io/llms.txt
---

# System: function selection

Use for CLI arguments, environment/process information, and local automation. `arg` preserves raw strings; `args` parses values. Do not dump environment variables while debugging. Inspect `execute` behavior and quote externally supplied arguments deliberately.

`config` may use persistent global storage; process termination and exit are effects, not harmless probes.

Examples are independent fragments; names such as `value`, `items`, `settings`, `client`, `server`, `db`, and `childPid` denote inputs or resources prepared by the surrounding program. They are not implicit globals. Examples can access persistent configuration, launch processes, or exit the program.

For unknown function names, use [the system module](https://arturo-lang.io/documentation/library/system).
