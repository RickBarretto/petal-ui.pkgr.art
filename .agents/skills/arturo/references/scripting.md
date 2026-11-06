---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://arturo-lang.io/documentation/language/
    - https://arturo-lang.io/documentation/library/system/arg/
    - https://arturo-lang.io/documentation/library/types/to/
    - https://arturo-lang.io/documentation/library/exceptions/try/
    - https://arturo-lang.io/documentation/library/files/read/
    - https://arturo-lang.io/llms.txt
    - https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/Command-line%20arguments.art
    - https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/Read%20entire%20file.art
    - https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/types/to.test.art
    - https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/exceptions/functions.test.art
---

# CLI and local automation

## Arguments

`arg` returns raw command-line inputs as a block of strings. `loop arg 'value [print value]` processes them unchanged. `args` parses switches and named values into a dictionary with positional values; inspect its shape for the actual invocation. Parsed numbers are inappropriate for identifiers where leading zeroes matter.

Validate the number of positional arguments before indexing. Use `to :integer` only after establishing expected input and handle conversion errors. Use `exit` for the intended process result after checking the installed function's signature.

### A count is different from an identifier

[input-count.art](../examples/scripting/input-count.art) defines `countFrom inputs`: require one argument, convert it with `to :integer`, reject negative counts, and return the result explicitly. `"001"` becomes `1` for a count; keep the raw string for an identifier.

Reject missing/extra arguments, empty strings, malformed text, and negative counts. Keep parser assignments local.

To adapt the routine to a CLI, pass `arg` instead of the example blocks. Assign the result inside `try`, then branch on `error?` before using it:

```art
parsed: null
err: try -> parsed: countFrom arg
(error? err) ? [
    print "Expected one nonnegative integer count"
][
    print parsed
]
```

This fragment assumes `countFrom` from the worked example is already defined. Add the application's chosen exit status at its entry point. `try` returns null on success, not the parsed count. If the right-hand side fails, an earlier `parsed` value remains; never treat it as the current result without checking `err`.

This routine delegates accepted numeric text to the installed converter; it does not enforce a digits-only grammar or a workload limit. Add those constraints when the count will control expensive work.

`arturo -e 'print 2 + 3'` is convenient for a small reproduction. Prefer a file for multi-line programs and shell-sensitive strings. Do not assume every experimental compile/bundle option is present across interpreter versions.

## Files and paths

| Operation       | Form                                         |
| --------------- | -------------------------------------------- |
| Read text       | `read "input.txt"`                           |
| Read lines      | `read.lines "input.txt"`                     |
| Write text      | `write "hello" "output.txt"`                 |
| Append text     | `write.append "more" "output.txt"`           |
| Check a path    | `exists? "input.txt"`                        |
| Check file kind | `file? "input.txt"` or `directory? "folder"` |

For ambiguous text/path inputs, check the `read.file` attribute. `read` can also accept URLs or format content; do not assume every string is treated as a local filename.

[files.art](../examples/scripting/files.art) contrasts a normal read/append with an empty file and a missing-file failure. It asserts the resulting contents, that a failed read leaves the previous result binding unchanged, and that it does not create the missing file.

Run it in a disposable working directory: the example overwrites its named fixtures. Use `read.file` when a missing local file must raise an error rather than allowing another interpretation of the input.

Paths/absolute, relative, normalize, extract, and list provide path operations. Their attributes affect output and resolution; check the current signature before using them. A script's location and the process working directory are distinct concepts. Confirm how System/script and System/path behave when the task depends on that distinction.

For external processes, look up System/execute and System/process and their result/exit semantics. Keep untrusted values out of interpolated shell command strings. Do not replace a built-in operation with an assumed shell utility unless the target environment supports it.

## Error handling

`err: try [ ... ]` captures an error value; `error? err` distinguishes failure. Assign a needed result inside the action because `try` itself reports null/error rather than the action's successful result. Test missing-file and invalid-input cases in an isolated directory.

For cleanup that must continue after a failed removal, use [separate action and cleanup diagnostics](scripting-workflows.md#preserve-action-and-cleanup-failures). Verify that owned paths are gone: `try [delete path]` alone can report null even when deletion did not take effect.

- [Language evaluation and scope](https://arturo-lang.io/documentation/language/).
- [System/arg](https://arturo-lang.io/documentation/library/system/arg/), [Types/to](https://arturo-lang.io/documentation/library/types/to/), and [Exceptions/try](https://arturo-lang.io/documentation/library/exceptions/try/).
- [Files/read](https://arturo-lang.io/documentation/library/files/read/): explicit file interpretation and missing-file errors.

- [Official reference](https://arturo-lang.io/llms.txt): Files; Paths; System/arg, args, script, path, execute, process, exit; Exceptions/try.
- [Command-line arguments](https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/Command-line%20arguments.art).
- [Read entire file](https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/Read%20entire%20file.art).

Upstream tests: [type conversion](https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/types/to.test.art); [error handling](https://github.com/arturo-lang/arturo/blob/master/tests/unitt/lib/exceptions/functions.test.art).
