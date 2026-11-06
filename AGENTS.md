# Repository Guidelines

## Agent Instructions

Before starting work, read [the Arturo skill](.agents/skills/arturo/SKILL.md) and follow its guidance. Load the task-specific references it links as needed, including HTML, testing, and formatting guidance.

Consult these references before implementing components:

- [DaisyUI components](https://daisyui.com/components/): HTML structure, classes, variants, and interaction patterns.
- [Arturo HTML package](https://html.pkgr.art/) and [local HTML guidance](.agents/skills/arturo/references/html-current.md): markup composition, scoped helpers, escaping, and serialization. Verify APIs against the selected package version.

## Project Structure & Module Organization

Petal UI is an Arturo UI library combining DaisyUI component conventions with the HTML DSL (https://html.pkgr.art). The repository currently centers on API proposals; the renderer remains to be implemented.

- `api/`: component proposals grouped into `actions`, `data-display`, `data-input`, `feedback`, `layout`, and `navigation`. Read `api/README.md` for shared contracts and `api/composition.art` for composition examples.
- `src/`: intended implementation directory; currently empty. `info.art` declares the entry point as `src/lib`.
- `specs/`: Arturo tests; `config.art` configures discovery.
- `docs/`: icons and showcase images. `examples/` is reserved for demos.
- `.github/workflows/test.yml`: cross-platform test workflow.

## Build, Test, and Development Commands

Use Arturo 0.10.0 or newer. Package dependencies are declared in `info.art`: `html >= 1.0.0` and `unitt >= 3.1.1`.

- `arturo -p install unitt`: install the test runner. Add `~/.arturo/packages/bin` to your `PATH`.
- `unitt`: run the configured suite from the repository root, matching Linux/macOS CI.
- `cmd.exe /C unitt.bat`: run the suite on Windows, matching CI.

There is no configured build command or development server. Files under `api/` are design examples, not runnable demos.

## Coding Style & Naming Conventions

Use four-space indentation inside Arturo blocks and semicolon comments. Follow surrounding formatting; no formatter or linter is configured.

Prefer lowercase, one-word component names and modifiers, such as `gallery`, `radial`, and `.frozen`. Avoid camelCase and names copied from internal DaisyUI classes. Keep content positional and use dictionaries for named composite slots. Include expected HTML comments when extending proposals.

## Testing Guidelines

Use `unitt` with `describe`, `it`, and `expects.be`. Name tests `specs/<feature>.spec.art`; no coverage threshold is configured.

The existing `lib.spec.art` tests a template `double` function and imports the missing `src/lib.art`; the current suite requires implementation before it can pass. Add behavior-focused tests alongside implemented components, including generated HTML and accessibility contracts.

## Commit & Pull Request Guidelines

History uses short imperative subjects, such as `Add html dependency` and `Remove API inconsistencies`. Follow that pattern and keep each commit focused.

In pull requests, describe the affected component, behavior changes, and validation performed. Link relevant issues, update proposals when contracts change, and include screenshots for rendered visual changes. Identify missing implementation or test blockers explicitly.
