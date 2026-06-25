# safe-json-extract

A production-grade, zero-dependency JavaScript library for safely extracting, repairing, and parsing JSON from LLM-generated outputs.

---

## Built for AI systems that return unreliable JSON

Modern LLMs often produce structured data that is not safely parseable.

This library is designed to handle outputs from:

- OpenAI
- Anthropic Claude
- Google Gemini
- xAI Grok
- Alibaba Qwen
- DeepSeek
- Ollama

---

## Why this library exists

When working with LLMs in production, JSON responses are often:

- mixed with natural language
- wrapped in markdown
- truncated mid-response
- using invalid syntax (single quotes, trailing commas)
- partially structured but not machine-safe

This creates a recurring problem:

> The output looks like JSON, but cannot be safely parsed.

safe-json-extract solves this by providing a deterministic extraction and repair layer.

---

## Key principles

- Zero dependencies
- Deterministic output
- Pure functions
- No side effects
- Works in Node.js, Bun, Deno, and browsers
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

---

## Output example

```javascript
{
  ok: true,
  repaired: false,
  data: {
    name: "Eliezer",
    age: 42
  }
}
```

---

## Core API

### Extraction functions

- extractJson(text)
- extractArray(text)
- extractCodeBlock(text)
- extractAllJson(text)

### Validation functions

- isJson(text)
- safeParse(text)

### Transformation functions

- repairJson(text)
- normalizeJson(object)

### High-level function

- parseLLMResponse(text)

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

This library is not a replacement for JSON.parse.

It is a **reliability layer between LLM outputs and your application logic**.

Its goal is to make unpredictable outputs usable in production systems.

---

## Error handling model

Instead of throwing errors, the library always returns structured results:

```javascript
{
  ok: true | false,
  repaired: true | false,
  data: object | null,
  error?: string
}
```

This ensures predictable control flow.

---

## Compatibility

- Node.js (LTS)
- Bun
- Deno
- Browser environments

---

## Performance

- No dependencies
- Lightweight execution
- Designed for high-frequency parsing
- Safe for backend pipelines

---

## Author

Eliezer Tavares de Oliveira  
Computer Engineering Student — UNIVESP

GitHub: https://github.com/eliezer-tavares  
Email: contact@eliezertavaresdeoliveira.com  

---

## License

MIT License

This project is free to use, modify, and distribute.

---

## Contributing

Contributions are welcome.

You can help by:

- reporting edge cases from LLM outputs
- improving parsing robustness
- suggesting new extraction utilities
- optimizing performance

---

## Roadmap

### v1.1
- improved markdown extraction
- normalization improvements
- better partial JSON recovery

### v1.2
- streaming-safe parsing
- chunked LLM response handling

### v2.0
- plugin system for LLM providers
- structured adapters for OpenAI, Grok, Qwen, Claude

---

## Final note

If you have ever received an LLM response that is "almost JSON but not quite valid", this library was built for that exact problem.