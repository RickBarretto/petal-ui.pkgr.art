---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.2.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://github.com/drkameleon/lanx/blob/0d539d467f17671a7f2b873bbaff6492629d7cfd/src/lanx.art
    - https://github.com/drkameleon/lanx/blob/0d539d467f17671a7f2b873bbaff6492629d7cfd/src/cli.art
    - https://arturo-lang.io/documentation/library/core/import/
    - https://lanx.pkgr.art/
    - https://github.com/drkameleon/lanx/blob/0d539d467f17671a7f2b873bbaff6492629d7cfd/README.md
---

# Lanx static file server

Use Lanx to serve a static directory. `lanx` serves the current directory; `lanx ./public` serves a selected folder.

Verify package installation and executable discovery before relying on the command. Do not infer flags from another static server.

## Embedded server

This prepares configuration without starting a listener; import may download and execute the package and its `mimetypes` dependency:

```art
import 'lanx!
server: to :lanx []!
server\root: "./public"
server\port: 8080
print server\port
```

Call `server\start` separately to begin serving. Object field assignments mutate this server instance. The default root is the current directory and default port is 18966. `start` resolves a relative root against the current working directory and mutates it to an absolute normalized path.

An invalid root prints an error and exits the process; validate it before embedding in a larger application.

## Response behavior

An existing directory redirects to a trailing slash, then serves `index.html` if present, otherwise a generated listing. Missing paths return 404. Files are read as binary; the implementation uses the `mimetypes` package to choose the first MIME match and falls back to `application/octet-stream`.

Binary handling differs across Arturo versions in the source; include an image or other binary fixture when verifying the user's runtime.

Choose a document root containing only the intended public assets. Directory listings hide hidden entries, but this is not an access-control guarantee for direct file requests. The public interface configures root and port, with no documented host-binding, authentication, or TLS option. Do not claim it binds exclusively to loopback.

For a bounded manual integration check, use a disposable folder containing one HTML and one binary fixture, request those paths plus a missing path, then stop the server. Keep ordinary checks offline by inspecting configuration without calling `start`.

## Preview handoff

For an ambiguous “lynx” request in Arturo preview context, investigate Lanx and ask whether that is the intended package. Do not silently install either name. `arturo --package list` lists local packages; `remote` queries the registry. Verify the installed CLI before choosing options.

After successful generation, give the working directory, selected document root, imports/dependencies, start command (`lanx ./public` when that is the actual output), reported address/port, and shutdown (`Ctrl+C` for the foreground CLI). Check generated HTML, one binary asset and a missing path; stop the listener even after a failed check. Do not infer loopback-only binding from a localhost preview URL.

## Generate before previewing

Separate application data validation, HTML rendering, output writing and preview startup. Test ordinary/empty text plus `<`, `&` and quotes using the selected HTML release. A package-loading or generation failure must stop before serving. Keep output in a dedicated directory; inspect generated files and the intended root before starting the preview. Writing HTML alone does not establish working serving/browser behavior.
