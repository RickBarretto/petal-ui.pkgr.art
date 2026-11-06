---
metadata:
  arturo-version: 0.10.0
  sources:
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/library/quantities
---

# Quantities reference

## Quantities

Source review: 2026-10-29.

Use for dimensional quantities, units, conversion, custom units, and physical constants. A backtick introduces a unit (see the examples below). Keep the quantity until unit validation is complete; `scalar` removes units. Check dimensions and precision rather than treating unlike quantities as plain numbers.

Currency examples may depend on external data and are not part of offline checks.

Signatures and mutation: [runtime](numeric.md#runtime). Examples are fragments; bound inputs.

Use `convert value unit` or `in unit value`. Check `conforms?` before converting dimensions; extract a `scalar` only after validation. Conversions leave the source quantity unchanged.

For unknown function names, use [the quantities module](https://arturo-lang.io/documentation/library/quantities). Query the selected built-in with `inspect info.get 'name`; use a bounded probe for behavior absent from metadata.
