# safe-json-extract

[![CI](https://github.com/eliezer-tavares/safe-json-extract/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/eliezer-tavares/safe-json-extract/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/safe-json-extract.svg)](https://www.npmjs.com/package/safe-json-extract)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/node/v/safe-json-extract.svg)](https://www.npmjs.com/package/safe-json-extract)

A production-grade, zero-dependency JavaScript library for safely extracting, repairing, and parsing JSON from LLM-generated outputs.

**v1.1.0** Â· 12 functions Â· Node.js â‰¥ 18 Â· runs on Node.js, Bun, Deno and browsers

---

## Table of contents

- [Why this library exists](#why-this-library-exists)
- [Key principles](#key-principles)
- [Installation](#installation)
- [Quick start](#quick-start)
- [API](#api)
- [Error handling model](#error-handling-model)
- [What makes this library different](#what-makes-this-library-different)
- [Use cases](#use-cases)
- [Design philosophy](#design-philosophy)
- [Compatibility](#compatibility)
- [Performance](#performance)
- [Documentation](#documentation)
- [Project](#project)
- [Roadmap](#roadmap)
- [Final note](#final-note)

---

## Why this library exists

Modern LLMs often produce structured data that is not safely parseable.

When working with LLMs in production, JSON responses are often:

- mixed with natural language
- wrapped in markdown
- truncated mid-response
- using invalid syntax (single quotes, trailing commas)
- partially structured but not machine-safe

This creates a recurring problem:

> The output looks like JSON, but cannot be safely parsed.

safe-json-extract solves this by providing a deterministic extraction and repair layer.

It is designed to handle outputs from:

- OpenAI
- Anthropic Claude
- Google Gemini
- xAI Grok
- Alibaba Qwen
- DeepSeek
- Ollama

---

## Key principles

- Zero dependencies
- Deterministic output
- Pure functions
- No side effects
- No telemetry or data collection

---

## Installation

```bash
npm install safe-json-extract
```

---

## Quick start

```javascript
const { parseLLMResponse } = require('safe-json-extract');

const input = `
Here is the response:

{"name":"Eliezer", "age":42}
`;

const result = parseLLMResponse(input);

console.log(result);
```

Output:

```javascript
{
  ok: true,
  repaired: false,
  sourceType: 'json',
  data: { name: 'Eliezer', age: 42 }
}
```

---

## API

All 12 exported functions are pure, dependency-free and never throw.

### Extraction

| Function | Description |
| --- | --- |
| `extractJson(text)` | Returns the first JSON structure found in raw text, even when surrounded by prose. |
| `extractArray(text)` | Returns the first JSON array found in the input. |
| `extractAllJson(text)` | Returns every JSON structure present in the input, in order of appearance. |
| `extractFirstValid(text)` | Convenience over `extractAllJson`: returns the first structure that parses, or `null`. |
| `extractCodeBlock(text)` | Extracts JSON from the first fenced markdown code block (` ```json `). |
| `extractAllCodeBlocks(text)` | Returns the contents of all fenced markdown code blocks in the input. |

### Validation

| Function | Description |
| --- | --- |
| `isJson(text)` | Returns `true`/`false` â€” strict validation of a JSON string, no repair attempts. |
| `safeParse(text)` | `JSON.parse` without throwing. Returns a structured result (see [Error handling model](#error-handling-model)). |

### Repair and normalization

| Function | Description |
| --- | --- |
| `repairJson(text)` | Returns a repaired JSON string: converts single quotes to double quotes, removes trailing commas, strips markdown fences and trims whitespace. |
| `recoverTruncatedJson(text)` | Balances unclosed braces by appending the missing `}` characters â€” for outputs cut off mid-object. |
| `normalizeJson(obj)` | Returns a shallow copy of an object with all keys lowercased, for case-consistent access. |

### High-level

| Function | Description |
| --- | --- |
| `parseLLMResponse(text)` | The recommended entry point. Runs the full pipeline: direct extraction first, repair flow as fallback. Returns `{ ok, repaired, sourceType, data }`. |

---

## Error handling model

Instead of throwing errors, the library always returns structured results:

```javascript
{
  ok: true | false,        // whether usable data was produced
  repaired: true | false,  // whether repair was needed
  sourceType: 'json' | 'unknown',  // where the data came from (parseLLMResponse)
  data: object | null,     // the parsed payload
  error?: string           // present only when ok is false
}
```

This ensures predictable control flow â€” no `try/catch` gymnastics around LLM output.

---

## What makes this library different

Most JSON parsers assume valid input.

This library assumes the opposite:

> Real-world AI output is messy, inconsistent, and partially invalid.

Instead of failing, it:

- extracts valid structures
- repairs common formatting issues
- safely returns structured results
- avoids throwing runtime exceptions

---

## Use cases

- AI agent development
- LLM API integrations
- Backend data pipelines
- Log parsing systems
- Structured response extraction
- Automation systems using GPT-like models

---

## Design philosophy

This library is not a replacement for `JSON.parse`.

It is a **reliability layer between LLM outputs and your application logic**.

Its goal is to make unpredictable outputs usable in production systems.

---

## Compatibility

- Node.js â‰¥ 18 (LTS)
- Bun
- Deno
- Browser environments

---

## Performance

- No dependencies â€” the whole library is ~600 lines of auditable JavaScript
- Lightweight execution
- Designed for high-frequency parsing
- Safe for backend pipelines and serverless/edge environments

---

## Documentation

| Document | Description |
| --- | --- |
| [Roadmap](docs/roadmap.md) | Single source of truth for current and upcoming versions |
| [Architecture](docs/architecture.md) | Architecture specification and design vision |
| [Changelog](CHANGELOG.md) | Notable changes per release |
| [Contributing](CONTRIBUTING.md) | How to contribute |
| [Security](SECURITY.md) | Security policy |

---

## Project

**Author** â€” Eliezer Tavares de Oliveira
Computer Engineering Student â€” UNIVESP

- GitHub: https://github.com/eliezer-tavares
- Email: contact@eliezertavaresdeoliveira.com

**License** â€” MIT. This project is free to use, modify, and distribute.

**Contributing** â€” contributions are welcome. You can help by:

- reporting edge cases from LLM outputs
- improving parsing robustness
- suggesting new extraction utilities
- optimizing performance

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Roadmap

| Version | Status | Theme |
| --- | --- | --- |
| 1.1.0 | âœ… Released | Markdown support, multi-JSON extraction, truncation recovery, normalization |
| 1.2.0 | ðŸ”œ Next | Advanced JSON recovery: nested structures, malformed objects, partial reconstruction |
| 2.0.0 | ðŸ”­ Planned | Streaming support: chunk parsing and real-time agent processing |
| 3.0.0 | ðŸ’­ Exploring | Provider plugin system and structured adapters (OpenAI, Grok, Qwen, Claude) |

âž¡ï¸ **Full roadmap with details:** [docs/roadmap.md](docs/roadmap.md)

---

## Final note

If you have ever received an LLM response that is "almost JSON but not quite valid", this library was built for that exact problem.

