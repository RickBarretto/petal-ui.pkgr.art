# DSL examples

These files describe the API and expected HTML; they do not implement a renderer.

Use plain lowercase names, preferably one word: `gallery`, `rotate`, `radial`,
`hint`, `.frozen`, and `.maxlength`. Avoid camelCase and HTML-specific prefixes
in the DSL. For example, `.label:` emits `aria-label`, `.busy:` emits `aria-busy`,
and `.description:` references hint IDs through `aria-describedby`.

Keep native HTML, CSS, and JavaScript names in the generated output.
