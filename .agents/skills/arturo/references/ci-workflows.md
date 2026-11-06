---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://github.com/arturo-lang/bundler/blob/856568f0f4c5baf6ee61e9a963abacda3dd4e2d9/.github/workflows/testrelease.yml
    - https://github.com/arturo-lang/setup-arturo/blob/59c9867a8c8564f0ad1cd4d1960e9fddd623c5b7/README.md
    - https://github.com/arturo-lang/bundler/blob/856568f0f4c5baf6ee61e9a963abacda3dd4e2d9/README.md
    - https://github.com/RickBarretto/unitt/blob/v3.1.1/readme.md
    - https://arturo-lang.io/documentation/command-line/
---

# GitHub Actions for Arturo

## Install and test

Use [Unitt test files](unitt.md) with assertions inside cases and a guarded direct report excluding native `filename` runs.

```yaml
name: Arturo CI
on: [push, pull_request, workflow_dispatch]
permissions:
  contents: read
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: arturo-lang/setup-arturo@v2
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - name: Install Unitt
        run: arturo -p install unitt
      - name: Add package executables to PATH
        run: echo "$HOME/.arturo/packages/bin" >> "$GITHUB_PATH"
      - name: Run tests
        run: unitt
```

## Unitt Installation and Testing

- Version compatibility: The installer uses the available registry release (documented for v3.1.1). Follow the project's version strategy and verify installed APIs.
- Executable discovery: Ensure package executables are on `PATH`. If unitt is missing, inspect installation logs and executable directories.
- Standalone tests: Run `arturo --no-color specs/example.spec.art`, ending with a guarded `unitt\report 'full` or `'minimal` without `.keep`.
- Failure handling: Never suppress failures using `continue-on-error`, `|| true`, or `--silent`.
- Validation: Confirm tests are discovered and intentionally failing assertions produce a failing job. Restore the tests afterward.

### setup-arturo Configuration

- Authentication: Requires `token`, typically `${{ secrets.GITHUB_TOKEN }}`. Test jobs can use `contents: read`. Preserve existing action pins or use reviewed commit SHAs for immutability.
- Runtime selection:
  - `do: fetch` (default): `from: stable` for stable releases or `latest` for nightlies. Both are moving targets.
  - `do: compile`: Use `src` to select a branch, tag, or commit. No generic `version` input exists.
- Build mode: `mode: full` is the default. Use `mini` only when compatible.
- Platforms: OS and architecture normally follow the runner. Supported targets include Linux, Windows, macOS, FreeBSD, and Web. Web requires separate testing considerations.
- Artifacts: `create_artifact: true` uploads the runtime build. `artifacts_only: true` skips environment setup in fetch mode.
- Test matrix: Match runners to target architectures. Use MSYS2 on Windows and the FreeBSD VM shell on Ubuntu for FreeBSD.
- Workflow ordering: Checkout before setup. Start FreeBSD run blocks with `cd $GITHUB_WORKSPACE`; working directories do not persist between steps.

## Bundle an application

Bundler installs Arturo and Nim itself. A build-only job does not need an extra setup-arturo step. Add a dependency on the test job when assembling a combined workflow:

```yaml
bundle:
  needs: test
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: arturo-lang/bundler@v2
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
        entry: main.art
        target: myapp
        release: "true"
```

### Arturo Bundler Configuration

- Entry and target: Replace `main.art` and `myapp` with actual values. `entry` accepts scripts or package directories containing `info.art` with `executable:`. Use safe, repository-controlled paths.
- Runtime selection: `from` supports `stable` (default), `latest` (nightly), or `master` (source compilation). `version` labels archives but does not pin Arturo.
- Binary naming: `target: auto` derives names from scripts. Prefer explicit targets for package directories.
- Artifacts: `release: "true"` creates and uploads a ZIP artifact, not a GitHub release. Archives follow `<target>[-<version>]-<os>-<arch>.zip`, with `.exe` on Windows.
- Build output: Without `release: "true"`, executables are built but not uploaded. Package additional runtime assets separately when necessary.
- Platform compatibility: Use matching native runners for Linux/macOS (amd64/arm64) and Windows (amd64). FreeBSD (amd64) builds require an Ubuntu-hosted VM.
- Verification: Check imports, dependencies, output filenames, and runtime assets. Smoke-test executables on their target platforms.

### Release Publishing

- Reference workflow: Adapt the upstream [bundler release workflow](https://github.com/arturo-lang/bundler/blob/856568f0f4c5baf6ee61e9a963abacda3dd4e2d9/.github/workflows/testrelease.yml) for the application's entry, name, tags, release notes, dependencies, and artifacts.
- Versioning: Pass `version` explicitly when archive filenames should include it. Bundler does not automatically extract release tags.
- Permissions: Use `contents: write` only for publishing jobs. Keep ordinary CI read-only. Investigate token permissions and event context when encountering `Resource not accessible by integration`.
- Release validation: Confirm every matrix artifact exists before publishing. Never suppress build or test failures.
- Authoritative references: Consult pinned revisions of the [setup-arturo](https://github.com/arturo-lang/setup-arturo/blob/59c9867a8c8564f0ad1cd4d1960e9fddd623c5b7/README.md), [bundler](https://github.com/arturo-lang/bundler/blob/856568f0f4c5baf6ee61e9a963abacda3dd4e2d9/README.md), and [Unitt](https://github.com/RickBarretto/unitt/blob/v3.1.1/readme.md) documentation, alongside the [Arturo CLI](https://arturo-lang.io/documentation/command-line/). Prefer action implementation over documentation when behavior differs.

## Verification boundary

The example is source-reviewed against the action revisions above. It has not established a clean hosted pass or a deliberately failing hosted job. Record the observed runner, runtime, package executable path and job URLs before claiming CI verification. In particular, Unitt 3.1.1 on Arturo 0.10.0 can exit zero on an uncaught child error; require evidence of executed assertions and inspect runner error output. Do not add a custom project runner merely to hide an upstream compatibility failure.
