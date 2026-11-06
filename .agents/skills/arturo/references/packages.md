---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/command-line/
    - https://arturo-lang.io/documentation/library/core/import/
    - https://github.com/arturo-lang/pkgr.art#using-packages
    - https://github.com/arturo-lang/pkgr.art#creating-packages
    - https://github.com/arturo-lang/pkgr.art/blob/main/packages/list.art
---

# Package installation and publishing

## Install and maintain

Arturo includes its package manager. These commands come from the [official CLI reference](https://arturo-lang.io/documentation/command-line/):

```sh
arturo --package remote
arturo --package list
arturo --package install grafito
arturo --package uninstall grafito
arturo --package update
```

`remote` queries the registry; `list` shows local packages. Installation downloads a package, uninstall removes it, and update affects all installed packages. Run updates deliberately. The installed runtime's `arturo --help` also documents an optional version argument for install/uninstall; confirm support before using it.

## Import and choose versions

[Core/import](https://arturo-lang.io/documentation/library/core/import/) supports registry names, repository URLs, local files, and package directories. A missing registry package is downloaded automatically; an existing installation is reused unless the chosen attributes request otherwise.

```art
import "dummy"!
print dummyFunc 10
```

The [registry guide](https://github.com/arturo-lang/pkgr.art#using-packages) uses `!` to make imported functions visible to parsing and execution of subsequent code at the same level. The reference also demonstrates deferring calls inside `do [...]` after importing.

```art
import.version:0.0.3 "dummy"!       ; exact version
import.min.version:0.0.3 "dummy"!   ; version >= 0.0.3
import.latest "dummy"!              ; check for latest even when installed

import.branch:"main" "https://github.com/arturo-lang/dummy-package"!

d: import.lean "dummy"!
print d\dummyFunc 10
```

These are separate usage alternatives. `.lean` returns a dictionary for namespace isolation. A branch selects repository code; it is not a version pin.

## Create and publish

Before distributing reusable logic, verify a local package without registry access. [The local workflow](../examples/packages/local-package.art) resolves its package beside the script using `relative`, then uses `.lean` to retain a dictionary namespace. Its typed `doubleValue` helper accepts integers and leaves I/O to the entry script.

The checks assert normal and zero results, rejection of a string, absence of an unqualified `doubleValue` binding, and a missing local file error. No files or handles are created, so cleanup is empty.

Keep missing-code errors fatal before application effects begin; a failed import must not leave the application running with an incomplete interface.

The [official registry guide](https://github.com/arturo-lang/pkgr.art#creating-packages) defines a package as a directory whose default entry is `main.art`. Optional `info.art` configures it:

```art
entry: "myownmain"
depends: [
    [someOtherPackage >= 0.0.2]
]
requires: [> 0.9.83]
```

Replace these illustrative values. `entry` selects another entry file, `depends` declares package dependencies, and `requires` constrains the Arturo version. Optional `executable` points to a package file; installation creates a Bash-based launcher in `$HOME/.arturo/packages/bin`, which must be on `PATH` to invoke it globally.

1. Put the package code and documentation in its repository. Verify the entry locally.
2. Publish a GitHub Release with a SemVer-compatible tag, such as `0.1.0` or `v0.1.0`, for version-aware distribution.
3. Fork the registry and add an unused name to [packages/list.art](https://github.com/arturo-lang/pkgr.art/blob/main/packages/list.art), following its current syntax:

   ```art
   mypackage: gh "owner/repository"
   ```

4. Submit that change as a pull request. Registration takes effect after merge. Metadata and documentation come from the package repository.

For later versions, publish new tagged releases in the registered repository. Check the package page and versioned import after publication; report pending merge or registry visibility accurately.

## Uncertain package names

Before acquisition, compare the requested name with project dependencies, local package metadata and authoritative registry or upstream documentation. Similar spelling alone does not establish identity. Ask a targeted clarification when ambiguity remains, naming a candidate only when evidence supports it. For example, in an Arturo preview task, investigate whether “lynx” means Lanx before importing or installing. Apply this procedure to every package; clear requests need no extra confirmation. Imports can acquire and execute code.
