---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-30
  sources:
    - https://arturo-lang.io/documentation/library/net
    - https://arturo-lang.io/llms.txt
---

# HTTP, JSON, and Net helpers

## Function selection

Net selection guide reviewed 2026-10-29 against the [Net library](https://arturo-lang.io/documentation/library/net) and [official reference](https://arturo-lang.io/llms.txt). These independent fragments require configured destinations or resources; they are documentation-only and can perform external actions. Keep destinations and credentials configurable. Verify server routes and lifecycle against the installed runtime.

## JSON

Decode text with `data: read.json jsonText` and a local JSON file with `data: read.json "data.json"`. Use fixture content or a known path deliberately because `read` accepts several input forms.

Encode to a file with `write.json data "data.json"`. The official examples use `write.json data null` to obtain serialized text without a destination. Verify that behavior on the target interpreter when using the result in another call. Dictionaries become objects; blocks become arrays. Check application field types after parsing.

`read.json` is also a resource loader: a string that names a local file or URL can be read as that resource. Do not treat arbitrary HTTP bodies as necessarily literal JSON text. For untrusted bodies, write the body to an unused scratch file in a private working directory, then use `read.file.json scratchPath`.

Delete that file after parsing succeeds or fails. Allocate the private directory outside the parser; do not share a fixed scratch path across concurrent requests. The worked example below refuses an existing scratch file so it does not overwrite a caller's data.

Parsing establishes JSON syntax, not an application contract. An object can have missing fields or fields with unexpected types. Check the object type before dictionary access, check key presence before reading optional fields, and check field types without converting strings such as `"false"` into booleans implicitly.

Missing keys, explicit `null`, `false`, and empty arrays are different states.

## Requests

Basic forms (illustrative; these contact a remote service):

```art
response: request.timeout: 5000 "https://httpbin.org/get" null
response: request.post.json "https://httpbin.org/post" #[name: "Ada"]
```

`request` defaults to GET. It also supports `.post`, `.put`, `.patch`, `.delete`, `.json`, `.headers:`, and `.timeout:`. Do not infer timeout units solely from the attribute name; confirm them for the installed runtime before choosing a production value. The numeric value above is illustrative.

For a returned dictionary, inspect `response\status`, `response\headers`, and `response\body`. A successful transport can still return an unsuccessful HTTP status. Validate an acceptable status before decoding the response body; a body can be empty or non-JSON even when the service usually returns JSON.

Wrap transport or parsing operations in `try` when the caller should recover. The wrapper yields null/error; assign a desired response inside its action. Handle a null response separately before accessing members. Avoid unlimited retries, and do not automatically retry non-idempotent writes.

For a configured GET, keep the transport result distinct from the captured error:

```art
response: null
transportError: try -> response: request.timeout: timeoutValue endpoint null
if error? transportError -> throw "request failed"
if null? response -> throw "request returned no response"
; Pass response to decodeProfile from the worked example below.
profile: decodeProfile response scratchPath
```

`endpoint`, `timeoutValue`, and `scratchPath` are caller-supplied configuration. Confirm the timeout unit and enforce an overall process deadline in the host before live execution. The example performs one request; retry policy belongs to the caller. It does not own a socket handle or listener to close.

Any scratch directory remains the caller's responsibility to remove.

`read "https://..."` is a short way to fetch content when metadata is unnecessary, as demonstrated upstream. Prefer `request` when status, headers, a method, or a timeout matters. For servers, inspect [serve](https://arturo-lang.io/documentation/library/net/serve) rather than adapting the client interface.

## Worked offline response workflow

Run [response.art](../examples/networking/response.art) in a fresh temporary working directory. It defines `decodeProfile` with typed dictionary/string parameters and fail-fast `ensure.that:` guards, accepts exactly HTTP 200 for this endpoint's contract, stages the body, parses it, checks required fields, and returns the dictionary.

Ordinary function locals hold the parsed value; passing the response dictionary does not request mutation. `try` does not create a scope: assignment to `profile` inside its action remains available for the later return.

Cleanup runs after the captured parse or validation failure, then a deliberate application error reaches the caller. Cleanup itself can fail and should be reported; the host should remove its temporary directory even if the program exits unsuccessfully.

Check live transport, timeouts, TLS, and retries separately.

- [Official reference](https://arturo-lang.io/llms.txt): Net/request; Files/read, write; Exceptions/try; Collections/key?.
- [JSON example](https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/JSON.art).
- [HTTP example](https://github.com/arturo-lang/examples/blob/60e7b92242e39fccdb764c505bb289e3a1e3d391/src/rosetta/HTTP.art).

For unknown function names, use [the net module](https://arturo-lang.io/documentation/library/net). Query the selected built-in with `inspect info.get 'name`; use a bounded probe for behavior absent from metadata.
