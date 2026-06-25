# Changelog

All notable changes to **safe-json-extract** will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project uses Semantic Versioning.

---

## [1.1.0] - 2026-06-25

### Added

- Improved JSON extraction reliability from LLM-generated text
- Enhanced support for multiple JSON structures in a single input
- Better handling of malformed JSON responses (trailing commas, single quotes)
- Recovery logic for partially truncated JSON objects
- Improved Markdown code block extraction robustness
- Stronger normalization of object keys (case consistency improvements)
- Expanded test coverage for edge-case LLM outputs

---

### Changed

- Refined internal parsing pipeline for more deterministic behavior
- Improved consistency of `safeParse` return structure
- Enhanced `parseLLMResponse` logic to prioritize direct extraction before repair flow
- Better error handling strategy (no unexpected exceptions thrown)

---

### Fixed

- Edge cases where valid JSON inside text was not detected
- Incorrect parsing when multiple JSON objects exist in the same input
- Inconsistent behavior when encountering malformed arrays
- Minor normalization inconsistencies in key formatting

---

### Security

- Improved resilience against malformed or intentionally broken JSON input
- Reduced risk of unexpected parsing crashes from untrusted LLM outputs

---

## [1.0.0] - 2026-06-25

### Added

- extractJson
- extractArray
- safeParse
- repairJson
- isJson
- extractCodeBlock
- normalizeJson

---

### Notes

- First stable release of safe-json-extract
- Focused on deterministic parsing of LLM outputs