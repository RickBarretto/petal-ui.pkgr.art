# Petal UI documentation example

A documentation website inspired by [DaisyUI's documentation](https://daisyui.com/components/), built with the local Petal UI library and the HTML DSL and served directly by Lanx. Includes getting started and composition guides, all 64 component guides with 419 API snippets and 417 HTML contracts, live previews, copyable Arturo and generated HTML, grouped search, mobile navigation, and five themes.

## Run with Lanx

Requires Arturo 0.10.0+, HTML 1.0.0+, and [Lanx](https://lanx.pkgr.art/). Run these commands from the repository root:

```sh
arturo -p install lanx
arturo examples/documentation/main.art
```

Open **http://localhost:18966/**. Stop the server with Ctrl+C. The launcher uses Lanx as a library, so its executable does not need to be on your `PATH`. There is no build step or generated output directory: the HTML stays in memory and Lanx serves the CSS, JavaScript, and favicon from this folder.

Lanx starts before Petal and the component reference are loaded. The first browser request displays a loading page immediately; it prepares the reference in memory, then opens the documentation automatically. Rendering errors appear on that page. `/health` responds without triggering rendering. Without JavaScript, use the loading page's “Open the documentation” link.

The page reads every component file under `api/` and imports `../../src/lib.art` directly, so no published Petal package is needed. Its HTML dependency must be available to Arturo; imports may acquire missing packages. DaisyUI 5.7.50, Tailwind's browser runtime 4.1.18, and Google Fonts load from CDNs, so the styled example needs internet access. The Tailwind browser runtime is convenient for this example; a production website should compile its utilities.

## Edit the example

- `main.art` starts Lanx and serves the page from memory, with static asset handling inherited from Lanx.
- `page.art` composes the document, navigation, guides, and component previews using Petal and HTML.
- `content.art` discovers every component contract in `api/`, reads its prose and examples with `scripts/api-examples.art`, and executes each file in one Petal scope. Setup definitions accompany dependent examples.
- `guides.art` documents shared API conventions, styling, themes, browser dependencies, and accessibility.
- `previews.art` renders isolated preview documents from the actual Petal output and embeds them with `srcdoc`, so displaying a component does not require another preview-page request. Frames load lazily and inherit the selected theme. This keeps IDs, radio groups, theme controllers, and positioned elements local to each example. Each `/preview/…` URL remains available as a fallback and for direct viewing.
- `preview.css` and `preview.js` provide the preview shell, sizing, and theme messages. Calendar previews also load Cally.
- `illustrations.art` supplies original SVG fixtures for illustrative image filenames. Copyable source retains the API filenames; applications should provide their own assets.
- `styles.css` styles the documentation shell and responsive layout.
- `app.js` adds hash navigation, in-page outlines, search (`/` or Ctrl/Cmd+K), code copying, theme persistence, and mobile navigation. Component behavior remains native where supported by Petal.

Restart the launcher after changes to Arturo files, then refresh the browser. CSS and JavaScript changes only need a browser refresh. The launcher also works when invoked by absolute path from another working directory.

Without JavaScript, all guides remain visible and sidebar links navigate to their sections. With JavaScript, each guide has a linkable hash URL, such as `/#button`. Theme persistence is optional, and code copying falls back to selecting text when clipboard access is unavailable.

The complete component reference follows the repository's [`api/`](../../api/) files automatically, including their headings, behavior notes, and variants. The composition guide includes all five rendered compositions and their setup definitions. Each component links to its original Arturo source, served at `/reference/<component>.art`. Preview links and non-dialog form submissions are intentionally inert because the API URLs illustrate application destinations.
