---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/core
    - https://arturo-lang.io/llms.txt
---

# Core functions: purpose and examples

Use this as a selection guide, then ask Arturo for the installed signature using [runtime inspection](inspection.md). These are actual callable functions, not reserved control-flow or declaration syntax. `any`, `null`, and `window` are constants, listed separately below.

Examples are independent fragments; bindings such as `items`, `ready`, and `score` represent the surrounding program's inputs. Package, file, and external-library operations require the corresponding resources; routine checks should remain offline.

## Conditions and iteration

Use `if`/`unless` for actions, `switch` for two alternatives, `case` for value matching, and `when` for condition chains.

`case` and `when` evaluate their outer blocks. Wrap actions and deferred conditions deliberately; see [control-flow evaluation](language.md#functions-and-control-flow).

## Functions, modules, and evaluation

Loading code can introduce callable words after the enclosing code was parsed. The official `do` and `import` examples wrap later calls in `do [...]`; follow that pattern when invoking newly loaded functions. Module export visibility is distinct from the `_` naming convention for private helpers.

## Bindings, representation, and the stack

## Core constants

`any`, `null`, and `window` are constants; inspect their values rather than invoking them.

The local-file `import` example is documentation-only; package installation and external-library calls were not exercised.

Do not treat metadata as proof of all runtime edge cases: the documented `case` return annotation, for example, is narrower than its own selected-value examples.

For unknown function names, use [the core module](https://arturo-lang.io/documentation/library/core). Query the selected built-in with `inspect info.get 'name`; use a bounded probe for behavior absent from metadata.
