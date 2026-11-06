---
metadata:
  arturo-version: 0.10.0
  sources:
    - https://arturo-lang.io/llms.txt
    - https://arturo-lang.io/documentation/library/colors
    - https://github.com/arturo-lang/arturo/blob/4e549e105c54af2e250381d578474b9064d9d4d2/src/vm/values/custom/vcolor.nim#L620-L1199
---

# Colors reference

## Colors

Source review: 2026-10-29.

Use for color values, hue/saturation transformations, and palettes. Amounts for darkening, lightening, and saturation changes are documented as fractions from 0.0 to 1.0; `spin` uses a hue-wheel amount. Do not infer perceptual color-space behavior from another library.

For literal spellings, use the [named-color catalog](color-names.md). `#aliceBlue` is a color; `#[name: "Ada"]` is a dictionary.

Signatures and mutation: [runtime](numeric.md#runtime). Examples are fragments; bound inputs.

Darkening by 0.0 preserves the color; 1.0 produces black. A value argument returns a result; a literal argument changes the binding. Keep fractional adjustments within the documented range.
