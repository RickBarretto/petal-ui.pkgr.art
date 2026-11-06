---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/exceptions
    - https://arturo-lang.io/llms.txt
---

### Error Handling

- Purpose: Use for explicit errors, guarded evaluation, and error detection.
- Error kinds: Constants identify error types; they are not exception-catching syntax.
- Error preservation: Propagate meaningful errors instead of silently suppressing them.
- Error capture: `err: try [action]` captures `null` or an error, not the action's return value. Assert `error? err` or use `throws? [action]` for expected failures.
- Assertions: Use `ensure -> actual = expected` for one expression; it passes a block rather than a boolean. Add custom messages with `.that:`.
- Explicit errors: Use `throw "message"` to raise errors, with `.as:` to specify an error kind.
- CLI validation: Verify exit codes and output. Printing an error message alone does not prove failure handling works.
- Stack safety: Verify whether evaluated blocks leave additional values on the stack.

For unknown function names, use [the exceptions module](https://arturo-lang.io/documentation/library/exceptions).
