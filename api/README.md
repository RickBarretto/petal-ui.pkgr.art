# Petal UI DSL proposals

These files describe the implemented API and expected HTML. The test suite executes
every snippet and compares every `; =>` output, including multiline comments.
Import Petal and evaluate component snippets inside `petal [...]`.

Petal ports component intent to Arturo on top of DaisyUI and the HTML DSL.
A card owns its body, title, image, and action wrappers; callers supply content.
A modal owns its IDs and opening/closing wiring. Callers should not have to
reproduce DaisyUI's internal HTML structure.

Use lowercase, preferably one-word names: `gallery`, `rotate`, `radial`, `hint`,
`.frozen`. Avoid camelCase, prefixes such as `aria`, and class-shaped names such
as `cardBody` in the component API. Keep established HTML names such as
`.maxlength` where they are already clear. Values such as `'heart`, `'primary`,
and `'dark` are Arturo literals, not custom types (`:heart`).

- Content is positional. A block supplies children; a string supplies text.
- A dictionary supplies named slots for composites: `content`, `image`, `title`,
  `actions`, `open`, `close`. Omitted slots produce no optional wrapper.
- Use `open` for an opening control, including Dropdown, FAB, Modal, and Drawer.
  `.open` is a state flag; the `open:` slot supplies a control.
- Flags select variants or initial states; valued attributes supply options.
  Keep size/color vocabulary consistent across components.
- `button.href` renders an anchor for navigation, with no button role.
  `button.submit` and `button.reset` render native buttons. `check.button` and
  `radio.button` render button-style choices; `check` and `radio` render the
  ordinary controls. There is no generic `.as` conversion.
- `upload` creates a file control; its string is an accessible label. Text-like
  variants remain under `input`: `.email`, `.password`, `.search`, `.number`.
- `tooltip.text: "Help" content` owns its wrapper and placement modifiers.
- `.label` maps to `aria-label`, `.busy` to `aria-busy`, and `.description` to
  `aria-describedby`. Preserve native names in the output.

Utility attributes such as `.w`, `.bg`, and `.p` belong to Petal's DSL layer.
They are an intentional convenience, not attributes supported by the HTML
package. The component examples show the Petal scope; contextual
helpers such as `item`, `tab`, and `li.title` exist only in their owning scope.
Do not create global aliases for them or modify the shared `markup` object.

The HTML package remains responsible for markup values, escaping, native
attributes, fragments, documents, and serialization. Petal can simplify element
signatures: `img.alt: "Ana" "ana.jpg"` takes the source as its positional argument,
just as `avatar.alt: "Ana" "ana.jpg"` does. The adapter delegates to the HTML
package's `img.src: "ana.jpg" .alt: "Ana" []` internally.

The image contract requires an explicit `.alt` string. Use a description
for meaningful images and `.alt: ""` for decorative ones. Missing `.alt` should
raise a clear error; do not infer it from a filename or silently insert empty
text. This keeps the source positional and makes the accessibility choice
explicit. The same rule applies to Avatar when it renders an image; placeholder
avatars have their own text contract.

`petal [...]` is the entry point. It evaluates a child block with short
component names and returns an HTML markup fragment. Component child blocks,
including named content slots, retain this scope. Ordinary HTML helpers such as
`p` and headings delegate to the HTML DSL. Contextual helpers such as `item`
exist only within their owning component. No per-component namespace is needed.

Put a `petal [...]` region inside native HTML `fragment`/`html` blocks, or return
one from a reusable Arturo function. Within the region, names such as `button`,
`input`, `table`, `menu`, `link`, and `footer` refer to Petal components. Outside
it, the HTML DSL's native helpers retain their meanings. For example, native
`link` is metadata, while Petal's `link` is a styled anchor.

Scope evaluation runs once and restores the caller's bindings afterward. An explicit native `fragment`, `html`, or `body` block establishes its own HTML helpers; enter `petal [...]`
inside it when needed. Preserve markup values across these boundaries; do not
stringify and reinsert them or use `raw` to compose.

[Composition examples](composition.art) mix native forms, semantic sections,
loops, and reusable Arturo functions with Petal regions. They assume the HTML
package has been loaded and the `petal` entry point is available.

Expected HTML comments describe structure, attributes, and behavior; formatting,
attribute order are illustrative. Examples supply deterministic IDs or native group names; generated identities are tested separately. Runtime and browser
verification must accompany the renderer implementation.

[Review decisions](REVIEW.md) record the inconsistencies found in this pass.

Accordion has no wrapper element: `.id` identifies its shared details group and
becomes the HTML `name`. Form groups use `.name`; `.id` sets an actual root ID.
When `.name` is omitted, a supplied root ID also provides deterministic grouping.
