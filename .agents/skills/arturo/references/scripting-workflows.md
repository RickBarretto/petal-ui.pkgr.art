---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/library/files/delete
    - https://arturo-lang.io/documentation/library/files/write
    - https://arturo-lang.io/documentation/library/exceptions/try/
    - https://arturo-lang.io/documentation/library/exceptions/throw/
---

# Bounded scripting workflows

Run these built-in examples with Arturo 0.10.0 in a disposable working directory. No package downloads are needed. Failed `ensure` assertions raise errors.

`try` returns null/error; assign application results inside its action. Ordinary action blocks do not create variable scope.

## Validate CLI input before effects

[cli-count.art](../examples/scripting/cli-count.art) accepts one raw argument, converts it to a nonnegative integer, and prints it. It checks argument count before `first`, then validates before effects. Keep identifiers as raw strings.

`arturo cli-count.art 003` prints `3` and exits 0. Invalid input calls `panic.unstyled` with usage text and exits 1. Built-in `exit` takes no positional status argument on this runtime.

Add lexical validation for decimal-only syntax; integer conversion accepts the runtime's syntax. Use Climax for richer options and subcommands.

## Own a file and clean it up

[files.art](../examples/scripting/files.art) refuses existing fixtures, writes and appends text, and checks contents with `read.file`. It covers empty files and unchanged bindings after failed reads.

`runFileWorkflow` runs a successful action and a failing child write beneath a regular file. Both paths delete owned fixtures before propagating errors.

Use fixed names only in an exclusive test directory. An `exists?` preflight does not guarantee later operations succeed; capture their errors too. Run cleanup after the captured action, before propagating failure. Abrupt termination can skip script-level cleanup.

## Preserve action and cleanup failures

[file-cleanup.art](../examples/scripting/file-cleanup.art) checks a runtime pitfall: `try [delete path]` can return null while the path remains. On Arturo 0.10.0 Linux, deleting a directory without `.directory` reproduces this. The implementation discards file-removal results and catches directory-removal OS errors.

`cleanupOwnedFiles paths` attempts each removal once, checks `exists?`, and collects remaining paths as dictionaries with `path` and `cause`. It continues after errors, accepts absent paths and empty input, and leaves the caller's block unchanged. Its collector is local; iterator arguments are restored.

`runCleanupWorkflow` refuses existing fixture names, captures the action error, attempts both cleanups, and returns:

| Field           | Meaning                                               |
| --------------- | ----------------------------------------------------- |
| `value`         | Assigned action result, otherwise null                |
| `actionError`   | Original action error, otherwise null                 |
| `cleanupErrors` | Cleanup issues; empty when all checked paths are gone |

Check both error fields. Assign `value` inside the action because `try` returns null/error. Give each cleanup its own `try` so one failure cannot skip later paths or replace the action error.

Return original errors to preserve diagnostics; `throw to :string error` constructs a new error. A CLI can report both failures before exiting.

This helper assumes owned file paths in an exclusive directory. It does not allocate names atomically or establish safe behavior under concurrent replacement, symlinks, permission failures, partial acquisition, or abrupt termination. Never switch to recursive deletion because a file became a directory.

## Convert dates and check a calendar boundary

[dates.art](../examples/scripting/dates.art) parses with `to.format:"yyyy-MM-dd" :date`, crosses February 28 to 29 in a leap year, and asserts the original date is unchanged. It rejects malformed text and an impossible February date. Current-time checks capture `now` once.

Conversion uses the local timezone. Verify offsets, daylight-saving transitions, and month boundaries separately. A calendar day need not equal 86,400 elapsed seconds.

## Close a database after either outcome

[databases.art](../examples/scripting/databases.art) opens SQLite `:memory:`, inserts a bound parameter, and asserts the row shape `[["Ada"]]`. Duplicate-value and malformed-SQL errors leave the original row intact.

`runDatabaseWorkflow` closes the connection before propagating action errors. Do not query a closed handle.

Handle open failures separately when translating errors for a CLI or service. After a successful open, close on success and failure. Bound parameters protect values, not dynamic SQL identifiers.

Check transaction, rollback, flushing, and concurrency behavior for the chosen driver.
