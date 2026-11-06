---
metadata:
  author: Eloi Torrents (Eloitor)
  license: Beerware-42
  package-version: 0.0.2
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://mathjax.pkgr.art/
    - https://codeberg.org/Eloitor/mathjax.art/src/tag/v0.0.2
    - https://arturo-lang.io/documentation/library/ui/webview/
---

# MathJax webviews

Use `mathjax` for rendering equations in an Arturo desktop webview. The package supplies JavaScript injection, rather than a symbolic mathematics API or a command-line image exporter.

The documented integration imports the package, passes `mathjaxJs` to `webview.inject:`, and supplies content containing inline `$...$` or display `$$...$$` math:

```art
import "mathjax"!

webview.inject: mathjaxJs
.title: "An equation"
---------------
$$a^2 + b^2 = c^2$$
```

It opens a GUI. Import may download and execute the package. Check that the Arturo build supports webviews and a desktop session is available before launch.

Keep TeX in Arturo strings intact: do not introduce escaping rules from another language. Diagnose the generated content, injection, and browser resource loading separately. The upstream documentation lists offline support as future work; do not promise an offline renderer.

Inspect the selected release's JavaScript dependencies before choosing an offline deployment strategy or assuming a MathJax version/configuration.
