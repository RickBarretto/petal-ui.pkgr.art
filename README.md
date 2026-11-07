<h1 align="center">petal-ui</h1>

<p align="center">
    <i>UI library powered by DaisyUI and HTML for the Arturo programming Language</i>
    <br><br><br>
    <img
        src=./docs/icons/arturo-light-mode.png#gh-light-mode-only
        alt=Arturo logo
        width=20
    />
    <img
        src=./docs/icons/arturo-dark-mode.png#gh-dark-mode-only
        alt=Arturo logo
        width=20
    />
    <br>
    <b>~ CODE IS ART ~</b>
    <br><br>
</p>

<p align="center">
    <a href="https://www.arturo-lang.io"><img src="https://img.shields.io/badge/language-Arturo-6A156B.svg?&style=flat&colorA=000000&colorB=000000" alt="Language: Arturo"/></a>
    &nbsp;
    <a href="https://github.com/RickBarretto/petal-ui.pkgr.art/blob/main/LICENSE"><img src="https://img.shields.io/github/license/RickBarretto/petal-ui.pkgr.art?&style=flat&colorA=000000&colorB=000000" alt="License"/></a>
    &nbsp;
    <a href="https://github.com/RickBarretto/petal-ui.pkgr.art/actions"><img src="https://img.shields.io/github/actions/workflow/status/RickBarretto/petal-ui.pkgr.art/test.yml?branch=main&style=flat&colorA=000000&colorB=000000" alt="CI Status"/></a>
</p>

## At a Glance

<p align="center">
    <img alt="At a Glance" width="720"
    src="./docs/images/"
    />
</p>

## Installation

```sh
arturo -p install petal-ui
```

or

```art
import {petal-ui}!
```

## Documentation

[Read the documentation](https://rickbarretto.github.io/petal-ui.pkgr.art/)
for guides, live previews, and the complete component reference.

Import the package and compose styled components with the HTML DSL:

```art
import {petal-ui}!

print html.lang: "en" [
    body [
        petal [
            card #[
                title: "Hello, Petal"
                content: [p "Components built on the HTML DSL."]
                actions: [button.primary "Continue"]
            ]
        ]
    ]
]
```

Use Arturo 0.10.0+, HTML 1.0.0+, and Unitt 3.1.1+. The host page must
load DaisyUI 5 and the Tailwind utilities used by its components. Calendar
also requires the host to load Cally. Petal generates markup; it does not
install browser dependencies or load stylesheets.

See [the API contracts](api/README.md) and [composition examples](api/composition.art).
For a runnable documentation website built with Petal UI, see
[the documentation example](examples/documentation/README.md), including its Lanx setup instructions.
Content and named slots execute once. HTML handles escaping and serialization.
Controls that Petal must adapt structurally must be created inside Petal;
ordinary content slots also accept existing HTML markup.

Run `unitt` from the repository root. Tests cover all 417 output examples,
including multiline `; =>` comments, composition, generated identities, and
accessibility/scope regressions. Example IDs and form names are deterministic;
generated identities have separate tests. Browser behavior is not tested.
CI also validates the completed runner report using `scripts/check-tests.art`.
