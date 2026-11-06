---
metadata:
  author: Eloi Torrents (Eloitor)
  license: Beerware-42
  package-version: 0.0.1
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://mermaid.pkgr.art/
    - https://codeberg.org/Eloitor/mermaid.art/src/tag/v0.0.1
    - https://arturo-lang.io/documentation/library/ui/webview/
---

# Mermaid webviews

Use `mermaid` to display diagram text in an Arturo webview. This wrapper injects Mermaid JavaScript; it does not document an Arturo data-to-diagram DSL or a headless SVG export API.

```art
import "mermaid"!

webview.inject: mermaidJs
.title: "A small flow"
---------------
<pre class="mermaid">
graph LR
  A[Start] --> B[Finish]
</pre>
```

The upstream `import ./"mermaid"!` assumes a local checkout. The example opens a GUI. Import may download and evaluate package code.

Preserve the `mermaid` class on the container. Check diagram syntax, resulting HTML, script injection, and resource loading separately when rendering fails. Confirm webview support in the installed Arturo build and use a desktop session.

Upstream lists offline support as future work; inspect the selected release's browser dependencies before promising offline operation or assuming support for newer Mermaid syntax. Treat injected markup/scripts as executable content and keep diagram inputs appropriate for the intended renderer.
