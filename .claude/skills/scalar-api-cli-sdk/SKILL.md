---
name: scalar-api-cli-sdk
description: "CLI SDK for Scalar API. Use when writing CLI code that calls Scalar API with the scalarapi-cli package: installing it, constructing and authenticating the client, and calling API operations."
---

# Scalar API CLI SDK

Generated CLI client for Scalar API, published as `scalarapi-cli`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
# Homebrew — standalone binary, no Node.js required
brew tap scalar/scalar-cli-homebrew https://github.com/scalar/scalar-cli-homebrew
brew install scalarapi
```

## Client setup and authentication

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `--bearer-auth` (env: `BEARER_AUTH`) — Credential for the BearerAuth scheme.

## Calling operations

```sh
scalarapi [resource] [command] [flags]

scalarapi registry list-all-api-documents --bearer-auth "$BEARER_AUTH"
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](../../../api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

## Requirements

- None — the standalone binaries bundle their own runtime.

## Reference files

- [README.md](../../../README.md) — full feature tour: client options, retries and timeouts, logging.
- [api.md](../../../api.md) — complete catalogue of every operation with request and response types.
