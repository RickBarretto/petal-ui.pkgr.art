---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/sockets
    - https://arturo-lang.io/llms.txt
---

# Sockets: function selection

Use for TCP or UDP transport rather than HTTP abstractions. Socket examples require a peer and are documentation-only here. Bound receiving and connection waits, define message framing, and close accepted client sockets as well as listeners. `.timeout:` on `receive` is documented in milliseconds; inspect every other timeout separately.

Examples are independent fragments with prepared sockets and a peer; `client` and `server` are caller-supplied handles. Receive/accept can block.

For unknown function names, use [the sockets module](https://arturo-lang.io/documentation/library/sockets).
