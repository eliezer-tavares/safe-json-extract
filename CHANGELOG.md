# Changelog

All notable changes to **safe-json-extract** will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project uses Semantic Versioning.

---

## [Unreleased]

### Added

- `.gitattributes` enforcing LF line endings across platforms (prevents CRLF/LF churn between Windows and Linux)

### Changed

- Documentation restructured: `docs/roadmap.md` is now the single source of truth for versions, and the README shows only a summary table linked to it
- Historical planning document moved from `docs/v1.1.md` to `docs/releases/v1.1-plan.md`
- README rewritten: proper CI badge (linked to the Actions page), npm/license/Node badges, full API reference covering all 12 exported functions, and a table of contents

### Fixed

- CI workflow: corrected invalid YAML indentation in `.github/workflows/ci.yml` that made every run fail before any job could execute (runs #1–#3)

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

---

[Unreleased]: https://github.com/eliezer-tavares/safe-json-extract/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/eliezer-tavares/safe-json-extract/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/eliezer-tavares/safe-json-extract/releases/tag/v1.0.0
