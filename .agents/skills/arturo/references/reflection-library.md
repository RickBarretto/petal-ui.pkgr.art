---
metadata:
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://arturo-lang.io/documentation/library/reflection
    - https://arturo-lang.io/llms.txt
---

### Runtime Introspection

- Signatures: Follow [runtime guidance](inspection.md) to query and interpret builtin metadata.
- Attributes: `attr`, `attr?`, and `attrs` access call attributes within function contexts.
- Benchmarking: Keep workloads bounded.
- Examples: Treat fragments as independent. Variables such as `items`, `settings`, and `client` require explicit initialization.
- Validation: Call attribute-enabled functions with appropriate attributes to verify behavior.

For unknown function names, use [the reflection module](https://arturo-lang.io/documentation/library/reflection).
