---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.2.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://github.com/drkameleon/claude.ai.art/blob/a0ea0e84a6b5e9debb1b661b000295345d482c59/README.md
    - https://github.com/drkameleon/claude.ai.art/blob/a0ea0e84a6b5e9debb1b661b000295345d482c59/src/api.art
    - https://arturo-lang.io/documentation/library/core/import/
    - https://claude.pkgr.art/
---

# Claude API in Arturo

Use the claude package for this Arturo wrapper. Check the project's installed version before adopting examples. Import with `import "claude"!`; importing may download and execute package code.

## Client and messages

Construct `to :claudeAPI @[apiKey]!` with a string obtained through the application's secret configuration. The initializer checks the `sk-` prefix, stores the key, and makes no API request. Keep keys out of committed examples and logs.

`createMessage role content` creates a `:message`; only `"user"` and `"assistant"` roles are accepted. Pass system instructions through `.system`, rather than creating a system-role message.

This bounded example constructs a message locally after the package is available:

```art
import "claude"!
message: createMessage "user" "Reply with one word."
print message\role
```

`client\chat [createMessage "user" "Reply with one word."]` evaluates the supplied block to obtain message objects, then sends one HTTP POST to Anthropic's Messages endpoint. Its result is the complete response dictionary.

Use `.maxTokens: 32` for a bounded integration check; `.model`, `.system`, `.temperature`, `.topP`, and `.topK` are also supported. Attribute names use camelCase even when the JSON API uses snake_case.

`client\ask question` returns text from the first content block only and throws if that block is not text. Use `chat` when inspecting multiple blocks or response metadata. Neither method maintains conversation history: supply the desired history to each `chat` call.

`setModel`, `setMaxTokens`, `setTemperature`, and `setTopP` mutate the client's defaults; per-call attributes on `chat` override them. This release provides `.opus` and `.haiku` constructor attributes and a Sonnet default. Resolve a supported model for the user's account instead of assuming those release defaults remain current.

## Verification

Test message construction and response consumers with local fixtures first. Live `chat`/`ask` calls transmit prompt data and consume API credits; keep them explicit integration checks. Non-200 responses throw a runtime error. The source has no retry loop or streaming implementation; do not promise either.
