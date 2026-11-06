# Standard-library caveats by task

Use this map when you need domain-specific pitfalls or do not know which module owns an operation. It is not a required reading list. For a known function, query its installed signature first. All guides link official modules for further discovery; examples are bounded checks, not mandatory steps.

| Task                                                   | Relevant guidance                                                                                                                                         |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Control flow, equality, logic, conversion/custom types | [Core](core.md), [Comparison](comparison-library.md), [Logic](logic-library.md), [Types](types-library.md)                                                |
| Blocks/dictionaries, mapping/filtering, sets           | [Collections](collections-library.md), [Iterators](iterators-library.md), [Sets](sets-library.md); [checks](../examples/collections/collections.art)      |
| Unicode, regex, interpolation                          | [Strings](strings-library.md); [checks](../examples/collections/collections.art)                                                                          |
| Arithmetic, bits, statistics                           | [Numeric recipes](numeric.md); [checks](../examples/math/checks.art)                                                                                      |
| Dimensions/conversions                                 | [Quantities](quantities.md); [checks](../examples/math/quantities.art)                                                                                    |
| Color operations or literal spellings                  | [Colors](colors.md); search [names](color-names.md) only when needed; [checks](../examples/math/colors.art)                                               |
| Files and paths                                        | [Files](files-library.md), [Paths](paths-library.md); [workflows](scripting-workflows.md)                                                                 |
| Arguments, processes, terminal output                  | [System](system-library.md), [Io](io-library.md); [CLI patterns](scripting.md), [raw-argument check](../examples/scripting/arguments.art)                 |
| SQL and persistent stores                              | [Databases](databases-library.md); [checks](../examples/scripting/databases.art)                                                                          |
| Calendar arithmetic/timezones                          | [Dates](dates-library.md); [checks](../examples/scripting/dates.art)                                                                                      |
| Encodings, checksums, legacy hashes                    | [Crypto](crypto-library.md); [checks](../examples/scripting/crypto.art)                                                                                   |
| Native dialogs, clipboard, webviews                    | [Ui](ui-library.md); [headless metadata checks](../examples/scripting/ui.art)                                                                             |
| Errors and call attributes                             | [Exceptions](exceptions-library.md), [Reflection](reflection-library.md); [checks](../examples/debugging/errors.art)                                      |
| HTTP/JSON or TCP/UDP                                   | [HTTP/JSON](http-json.md), [Sockets](sockets-library.md); [metadata](../examples/networking/checks.art), [JSON fixtures](../examples/networking/json.art) |
