---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/reflection/inspect
    - https://arturo-lang.io/documentation/library/reflection/info
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/command-line
---

# Ask Arturo for signatures

Inspect runtime metadata before guessing a function's arguments or attributes:

```sh
arturo --no-color -e "inspect info.get 'if"
arturo --no-color -e "inspect info.get 'switch"
arturo --no-color -e "inspect info.get 'function"
arturo --no-color -e "inspect info.get 'when"
arturo --no-color -e "inspect info.get 'sort"
```

The shell uses double quotes here because Arturo literal identifiers contain `'`. `info.get` retrieves the named symbol's metadata as a dictionary; `inspect` displays its structure and types. `info 'if` is a compact human-readable alternative.

Do not use `inspect 'if` for a signature: it inspects the literal identifier and prints `if :literal`. `inspect var 'if` retrieves and inspects the actual function value, but Arturo 0.10.0 only shows `:function` and `(builtin)`, without its signature. Avoid `inspect if`: a bare callable word invokes the function and requires its arguments.

## Reading the result

- `name`, `type`, and `module` identify the symbol and its library. `description` states its purpose.
- `args` maps positional argument names to blocks of accepted types, in call order. Each named argument consumes one value; several types in that argument's block are alternatives, not extra arguments. `any :type` means the accepted type is `:any`.
- `attrs` lists optional attributes. Each entry contains `types` and a description. A logical flag is written `.flag`; an attribute-label passes a value, as in `.has: 2`. Optional attributes do not increase positional arity.
- `returns` lists documented result types. `nothing :type` means no result value. Multiple listed types describe possible results, not a tuple of all of them. Check the behavior of the selected form when it matters.
- `alias` and `infix?` identify an alias and whether it is used infix. They do not establish conventional arithmetic precedence.
- `example` contains documentation strings, not automatically executed checks. `address`, `line`, and `source` are diagnostic metadata; an embedded source URL may name an older revision, so record `arturo --version` separately.

## Finding a name

When you know part of a name, filter runtime symbol names before printing:

```sh
arturo --no-color -e "print select keys symbols 'name [contains? name {sort}]"
```

Then query only the selected symbol. For concept-to-function discovery, use the relevant official library module; do not dump every symbol's metadata. The runtime may expose symbols not available in another build.

## CLI verification

Use the installed runtime's `arturo --help` and `arturo --version` to check available options. Arturo executes `.art` files directly; no build step is needed for ordinary verification.

| Task                               | Command                               |
| ---------------------------------- | ------------------------------------- |
| Execute a file                     | `arturo path.art`                     |
| Evaluate a small expression        | `arturo -e 'ensure [14 = 2 * 3 + 4]'` |
| Capture output without ANSI colors | `arturo --no-color path.art`          |
| Experiment interactively           | `arturo --repl`                       |

Use a file for code containing literal identifiers such as `'items`; embedding these inside shell single quotes breaks shell quoting. Check exit status and stderr as well as output. Run examples that create files in a temporary directory.

Package imports can install missing packages automatically. Keep routine language checks free of remote package imports. Prefer the standard library unless dependencies serve the task.

Bytecode (`--compile`, `--execute`) and bundling (`--bundle`, `--as`) are documented as experimental; consult the installed help before using them for a requested deliverable.
