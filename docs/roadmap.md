# Roadmap

> **This is the single source of truth for the project's versions.**
> The README only shows a summary table and links here. When plans change,
> update this file first — never fork the roadmap into other documents.

Status legend:

| Icon | Meaning |
| --- | --- |
| ✅ | Shipped and published on npm |
| 🔜 | Next release — actively planned |
| 🔭 | Planned — design phase |
| 💭 | Exploring — may change or be re-scoped |

---

## v1.0.0 — Core functionality ✅

**Released:** 2026-06-25 · published on npm as `safe-json-extract@1.0.0`

The deterministic core: safe parsing of LLM output without exceptions.

- [x] `extractJson` — first JSON structure in raw text
- [x] `extractArray` — first JSON array
- [x] `safeParse` — `JSON.parse` without throwing
- [x] `repairJson` — quotes, trailing commas, fences
- [x] `isJson` — strict validation

## v1.1.0 — Markdown support ✅

**Released:** 2026-06-25 · published on npm as `safe-json-extract@1.1.0`

Resilience to the formats LLMs actually produce.

- [x] `extractCodeBlock` — fenced markdown blocks
- [x] `extractAllCodeBlocks` — all fenced blocks
- [x] `extractAllJson` / `extractFirstValid` — multiple JSON structures in one input
- [x] `recoverTruncatedJson` — missing closing braces
- [x] `normalizeJson` — case-consistent object keys
- [x] `parseLLMResponse` — high-level pipeline (extract first, repair as fallback)
- [x] Expanded test coverage for edge-case LLM outputs

Planning notes for this release are preserved in
[`docs/releases/v1.1-plan.md`](releases/v1.1-plan.md).

## v1.2.0 — Advanced JSON recovery 🔜

**Theme:** go from "repairs syntax" to "reconstructs structure".
Incremental release — builds on the existing pipeline, no breaking changes.

- [ ] Nested recovery — repair broken objects nested inside arrays and vice versa
- [ ] Malformed object recovery — unquoted keys, single-quoted strings with escaped
      quotes, comments injected by the model
- [ ] Partial reconstruction — salvage complete fields from an otherwise unparseable
      object instead of failing the whole result
- [ ] Truncation recovery v2 — handle cut-off strings and arrays (current version
      only balances object braces)
- [ ] Public edge-case corpus — a shared fixture suite of real broken LLM outputs,
      used as the acceptance test for every release from now on
- [ ] API reference for all 12 functions (JSDoc + generated docs)

## v2.0.0 — Streaming support 🔭

**Theme:** parse the answer while it is still being generated.
This changes the core pipeline (incremental state machine instead of whole-string
parsing), which is why it is a major version.

- [ ] Streaming extraction — consume a `ReadableStream`/async iterator of chunks
- [ ] Chunk parsing — emit stable partial results as the stream arrives
- [ ] Real-time agent processing — intended for tool-calls that cannot wait for the
      full response
- [ ] Browser + Bun + Deno parity for the streaming API

## v3.0.0 — Provider ecosystem 💭

**Theme:** extension points instead of hardcoded assumptions.
Scope and shape are still being explored; nothing here is final.

- [ ] Plugin system for LLM providers
- [ ] Structured adapters for OpenAI, Grok, Qwen, Claude
- [ ] Optional schema integration (e.g. validate/shape results against a user-supplied
      schema) — kept out of core to preserve zero dependencies

---

## Non-goals

To keep the library small, deterministic and dependency-free, it will **not**:

- Validate against schemas (use `zod`/`ajv` on top of the parsed result)
- Call any LLM API or add network code
- Replace `JSON.parse` for trusted input
- Add telemetry, config files or runtime options that change output shape

## Release process

1. Work lands against `[Unreleased]` in [`CHANGELOG.md`](../CHANGELOG.md)
2. On release day: rename `[Unreleased]` → `[x.y.z] - date`, update this file's
   status icons, tag `x.y.z` and `npm publish`
3. Every feature PR must reference the roadmap item it implements
