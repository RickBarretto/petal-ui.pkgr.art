---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 1.0.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://optionally.pkgr.art/
    - https://github.com/RickBarretto/optionally.art/blob/v1.0.0/src/lib.art
    - https://github.com/RickBarretto/optionally.art/tree/v1.0.0/examples
    - https://arturo-lang.io/documentation/library/core/function/
---

# Optional function attributes and DSLs

Use optionally for typed attribute interfaces in reusable functions and DSL commands. Keep DSL required operands positional and optional configuration in attributes; this preserves the generated bindings and evaluation behavior described below.

Use optionally to generate attribute handling for Arturo functions. Requires Arturo 0.10.0 or newer. An import can download the package and execute its entrypoint.

```art
import {optionally}!

person: $[name :string] optionally [age :integer][
    #[name: name age: age ?? "Not provided"]
]

person "Rick"
person.age: 30 "Rick"
```

Test omitted attributes, explicit values, wrong types, and successive calls once the package is installed.

`optionally params body` returns a new block that prepends generated handling to the function body. Required parameters remain in `$[...]`; optional declarations go in the separate block. The generated body reads attributes into local bindings when the function runs; it does not add positional parameters or create a closure.

Typed optionals default to `null`; a supplied value must match the declared type or be `null`, otherwise an assertion fails. Substitute a custom default inside the body with `??`. A logical name ending in `?`, such as `verbose? :logical`, defaults to `false` and also accepts the affirmation `.verbose`.

`.verbose?` and attribute-labels such as `.verbose?: true` are supported too. A name without the suffix does not generate a question-mark alias.

Keep generated optional names distinct from required parameters and body locals so the generated `let` bindings do not hide useful values. Pass optionals as attributes, for example `.age: 30`, rather than inserting them into the required argument sequence.
