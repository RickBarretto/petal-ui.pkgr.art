---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/llms.txt
---

# Diagnostic patterns

Capture the failing invocation, installed version and expected behavior, then reduce the failure to a bounded case. Use the symptom table to choose the next check; inspect signatures without invoking effectful APIs. Add a regression for the observed failure and retest the original invocation. Keep diagnostics separate from program output and report actual verification.


| Symptom                              | First check                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------- |
| Arithmetic differs from a port       | Right-to-left grouping; parenthesize intended subexpressions                    |
| Function receives an unexpected type | Arity and expression boundaries; a nested call may consume inputs               |
| A block contains unresolved names    | It is data until evaluated; consider `do` or `array` for the intended operation |
| A variable changes unexpectedly      | Literal mutation, `set`, and aliases created without `new`                      |
| Assignment disappears after a call   | Function scope; inspect explicit `.export:` or returned values                  |
| Iterator name disappears or reverts  | Iterator-injected bindings are temporary and restored                           |
| Filtering yields the complement      | `filter` removes matches; `select` keeps them                                   |
| Extra values remain                  | A function/action left unintended values on the stack                           |
| JSON or HTTP member access fails     | Null/error response, HTTP status, body encoding, and missing keys               |

- [Official reference](https://arturo-lang.io/llms.txt): Exceptions; Core/ensure; Reflection; Precedence and Evaluation; Scope and rules; In-place variable modification.
