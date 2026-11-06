---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.2.12
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://github.com/drkameleon/grafito
    - https://github.com/drkameleon/grafito/blob/v0.2.12/grafito.art
    - https://grafito.pkgr.art/#command-reference
    - https://arturo-lang.io/documentation/library/core/import/
    - https://grafito.pkgr.art/
---

# Grafito graph databases

Use Grafito when the task needs its graph DSL or SQLite-backed graph storage. Import with `import 'grafito!`; package import may download and execute code.

The upstream repository also demonstrates `do.import {grafito.art}` for a local checkout; that path is relative to the checkout, not a registry import name.

## Graph scope and storage

Run graph commands inside `graph database body`. Pass null (`ø`) for an in-memory database; passing a string selects persistent storage. `graph.create` forces schema recreation even when a database exists, so reserve it for deliberate resets or disposable fixtures. Ordinary reopening uses `graph` without `.create`.

The graph block is evaluated as Arturo code with graph operations available in that environment. It is not a string query language. Do not execute untrusted query text as code.

The implementation closes the database after normal block completion and returns the block's result; do not assume exception rollback or transactional cleanup that the source does not provide.

This bounded recipe uses memory only after the package is available:

```art
import 'grafito!
graph ø [
    ada: put 'person [name: "Ada"]
    book: put 'book [title: "Notes"]
    link ada 'wrote book
    inspect fetch 'person [name: "Ada"]
]
```

Test node counts and relationship direction in memory before opening an existing database. The implementation derives persistent filenames from the supplied basename and adds `.graf`; inspect path behavior before relying on a directory component.

## Queries and mutation

`put tag properties` inserts nodes and returns a node dictionary or block. `fetch tag properties` returns a block of matching nodes; null properties select all nodes of the tag. Multiple criteria match together. Nodes expose `id`, `tag`, and `properties`.

`link source relationship target` creates a directed edge. `unlink source relationship target` removes it; preserve this argument order even though one README example uses a conflicting order. `unput nodes` removes nodes. These operations mutate the database, while `fetch` reads it.

The infix `~>` aliases directed linking; use explicit `link` when direction would be unclear.

Filters are nested property criteria, for example `fetch 'person [age: [over: 30]]`. Documented filters include `contains`, `prefix`, `suffix`, `under`, `overOrEqual`, `underOrEqual`, `in`, and `not`.

`.helpers: [person book]` creates tag-specific DSL helpers inside the graph environment; use explicit commands for a small integration before introducing sugar. `preview` opens the interactive visualization, so exclude it from headless checks.
