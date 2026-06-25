# Contributing to safe-json-extract

Thank you for your interest in contributing to **safe-json-extract**.

This project exists to provide a reliable, dependency-free layer for extracting and repairing JSON from LLM outputs.

All contributions are welcome, as long as they follow the principles below.

---

## Maintainer

**Eliezer Tavares de Oliveira**  
GitHub: https://github.com/eliezer-tavares  
Email: contact@eliezertavaresdeoliveira.com

---

## Core Principles

This project is intentionally strict about its design:

- Zero external dependencies
- Deterministic behavior (same input = same output)
- Backward compatibility is prioritized
- No side effects in core functions
- Minimal and readable implementation

Any contribution must respect these principles.

---

## Types of Contributions

You can contribute by:

- Fixing bugs
- Improving JSON extraction edge cases
- Adding test coverage
- Improving performance
- Enhancing documentation
- Reporting real-world LLM parsing failures

---

## Pull Request Guidelines

Before submitting a pull request, ensure:

1. All tests pass locally
2. New features include corresponding tests
3. No existing behavior is broken
4. Code remains dependency-free
5. Documentation is updated if needed

---

## Code Style

To keep the project consistent:

- Use plain JavaScript (CommonJS)
- Avoid external libraries
- Prefer small, pure functions
- Write clear and minimal comments only when necessary
- Avoid unnecessary abstraction

---

## Testing

All changes must include or pass tests using:

```bash
node --test
```

No external test frameworks are used.

---

## Security & Stability

If your contribution introduces a potential breaking change:

- Document it clearly
- Suggest migration path if needed
- Avoid silent behavioral changes

---

## Philosophy

This project is designed to be a **small but critical reliability layer** between LLM outputs and production systems.

Simplicity is not optional — it is a requirement.

---

## Contact

For questions, discussions, or collaboration:

📧 Email: contact@eliezertavaresdeoliveira.com  
🐙 GitHub: https://github.com/eliezer-tavares

---

Thank you for helping improve safe-json-extract.