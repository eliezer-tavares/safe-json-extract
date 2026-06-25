# safe-json-extract

Extract, validate and repair JSON from LLM output.

## Features

- Zero dependencies
- Works with OpenAI
- Works with Anthropic Claude
- Works with Google Gemini
- Works with xAI Grok
- Works with Qwen
- Works with DeepSeek
- Works with Ollama
- Works with autonomous agents
- Works with logs and text files

## Installation

```bash
npm install safe-json-extract

Usage

const {
  extractJson,
  safeParse
} = require('safe-json-extract');

const result =
  extractJson('hello {"name":"Eliezer"}');

console.log(result);

Testing

node --test

License
MIT