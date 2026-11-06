---
name: arturo
description: Write, explain, debug, test, or automate Arturo (.art) programs, including language semantics, standard-library APIs, external packages and uncertain package names, data validation, CLI tools, HTTP, web content, and CI.
metadata:
  arturo-version: 0.10.0
---

# Arturo

Expressions group right to left; arity determines boundaries, not arithmetic precedence. `name:` binds, `'name` is literal, `:integer` is a type, and `.flag`/`.option: value` are attributes. `[...]` preserves code/data; `@[...]` evaluates it; `#[...]` constructs a dictionary. Equality is `=`.

Ordinary evaluated blocks share scope; functions normally isolate assignments. Supported literal arguments enable mutation; direct `set` can change shared storage. Use `new` for independent copies. Bind intermediate results so functions leave only intended values on the stack.

For uncertain built-ins, query `arturo --no-color -e "inspect info.get 'name"`: positional `args`, optional `attrs`, possible `returns`. Filter symbol names or use the relevant official module for unknown names. Probe behavior metadata cannot establish; reuse established results. Read [inspection detail](references/inspection.md) only when needed. Without Arturo, mark execution unverified.

Load only references needed for the task:

- [Language](references/language.md): evaluation, functions, control flow, scope/copying; [symbols](references/symbols.md): aliases/lookalikes; [projects](references/projects.md): local loading and parser visibility.
- [Library map](references/library.md): collection/text, numeric/units/colors, filesystem, databases, dates, crypto, GUI, reflection and socket caveats. Discover routine APIs at runtime rather than reading every module.
- [Scripting](references/scripting.md) and [workflows](references/scripting-workflows.md): CLI input, files, SQL and cleanup failures.
- [HTTP/JSON](references/http-json.md): transport/status/body handling; JSON text can name resources.
- [Debugging](references/debugging.md): observed failures; [exceptions](references/exceptions-library.md): `try` returns null/error, not the action result.
- [Unitt](references/unitt.md): native project tests and reporting; small probes can use `ensure`. [CI](references/ci-workflows.md): actions, bundling and hosted verification.
- [Package index](references/package-index.md): each package has its own guide, including Schema/Validator, HTML/Lanx and DSLs. [Package management](references/packages.md) covers discovery, versions, metadata and publication.

Prefer documented [symbols](references/symbols.md) to spelled-out built-ins, except logical functions: write `and?`, `or?`, `not?` and other logical names explicitly for readability. Choose `read`/`write` or `<<`/`>>` by context. Prefer `->` for single-expression bodies; keep `[]` for data, parameters and multi-step bodies. Follow [formatting guidance](references/formatting.md). Use typed parameters when they express the contract; preserve polymorphism and project style. Default to lowerCamelCase, `_` for private helpers, and readable indentation. Imports evaluate code and may acquire packages; check selected releases. Verify affected behavior with bounded examples, using disposable directories for I/O.

Investigate uncertain package names using project context, installed metadata and official sources. If identity remains ambiguous, name the plausible candidate and ask before installing or importing; never silently correct a package name.
