# External packages

Read only the selected package's file. Each guide records its reviewed API/release, sources and limitations. Imports may acquire and evaluate code; installed package metadata can be incomplete, so use versioned source and small fixtures where necessary. A reference baseline is not a minimum runtime or execution claim.

| Task                                       | Package guide                                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Unit tests and native discovery/reporting  | [Unitt](unitt.md)                                                                                    |
| Command benchmarks                         | [Peregrino](peregrino.md)                                                                            |
| Structured input, coercion/defaults/faults | [Schema](schema.md)                                                                                  |
| String-format checks                       | [Validator](validator.md)                                                                            |
| Typed CLI options/subcommands              | [Climax](climax.md)                                                                                  |
| Automation routines/dependencies           | [Tasks](tasks.md)                                                                                    |
| Terminal progress                          | [Progressive](progressive.md)                                                                        |
| Terminal tables                            | [Tabular](tabular.md)                                                                                |
| MIME extension lookup                      | [MIMEtypes](mimetypes.md)                                                                            |
| Graph storage/DSL                          | [Grafito](grafito.md)                                                                                |
| Typed optional function attributes         | [optionally](optionally.md)                                                                          |
| State machines                             | [States](states.md)                                                                                  |
| Experimental bytecode                      | [ArtSembly](artsembly.md)                                                                            |
| Identifier case conversion                 | [Recase](recase.md)                                                                                  |
| Unicode-to-ASCII transliteration           | [Unidecode](unidecode.md)                                                                            |
| Anthropic wrapper                          | [Claude](claude.md)                                                                                  |
| Static directory previews                  | [Lanx](lanx.md)                                                                                      |
| HTML generation                            | [Legacy 0.0.4](html.md) or [1.0.0-rc.1](html-current.md); their escaping and return contracts differ |
| MediaWiki                                  | [mwiki](mwiki.md)                                                                                    |
| Equation/diagram webviews                  | [MathJax](mathjax.md), [Mermaid](mermaid.md)                                                         |

Data validation is distinct from testing: Schema's `check` does not mutate; `coerce` transforms without validating; `conform` returns a valid coerced copy or null. Validator returns logical results. Built-in assertions do not require these packages.

For acquisition/versioning, local-versus-registry listing, package creation or publication, use [package management](packages.md). Setup-arturo/bundler action guidance lives in [CI workflows](ci-workflows.md), not a runtime import.
