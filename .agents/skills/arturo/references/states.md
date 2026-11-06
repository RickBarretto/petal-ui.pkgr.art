---
metadata:
  author: RickBarretto
  license: MIT
  package-version: 0.1.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://states.pkgr.art/
    - https://github.com/RickBarretto/states.art/tree/v0.1.0
---

# States finite state machines

Package imports may download and execute code.

Construct `:states` from an initial-state literal and a transition block. Each transition is ordered **event, source, destination**. Separators such as `/` and `~>` are DSL decoration; do not interpret them as ordinary division or language operators here.

Example:

```art
import {states}!

door: to :states ['closed [
    open  / closed ~> opened
    close / opened ~> closed
]]

print door\state
door\open
print door\state
door\changeFrom 'close
print door\state
```

Read the current state through `machine\state`. Calling an event method or `machine\changeFrom 'event` transitions that existing machine; subsequent reads observe its changed state.

Enumerate transitions for every supported event/source pair, including intentional self-transitions. Test event sequences and expected states. The overview does not specify handling of missing transitions, duplicate definitions, callbacks, or persistence: inspect source before relying on those behaviors or adding such capabilities.
