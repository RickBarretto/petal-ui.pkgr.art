---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.1.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://climax.pkgr.art/
    - https://github.com/drkameleon/climax.art/tree/v0.1.0
---

# Climax CLI building

This release requires Arturo >= 0.10.0; check compatibility before adopting it. Imports can download and execute packages.

`command` and `group` exist only inside `climax` declarations and nested group declarations. Command bodies receive positional bindings, `opts` for resolved options, and `rest` for arguments after `--`. Group options are inherited.

Option rows have ordered slots: name, optional single-character literal alias, default, type(s), description. A trailing `?` creates a boolean switch defaulting to false. Include `:null` for optional positionals.

Example:

```art
import "climax"!

climax .template: 'plain [
    greet: command "Greet someone" [name :string] .with: [
        loud? 'l "uppercase greeting"
    ][
        message: append "Hello, " name
        if opts\loud? -> message: upper message
        print message
    ]
]
```

Check help, missing required arguments, unknown flags, defaults, and `--` passthrough. `default:` selects the action without a subcommand; `'plain` avoids ANSI help output. Consult the linked reference before customizing templates.
