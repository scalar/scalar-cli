# Scalar API

Generated CLI SDK for Scalar API.
API for managing Scalar platform resources.

## TypeScript SDK

For TypeScript, we provide a SDK that makes using our API even easier.

### Install

```bash
npm add @scalar/sdk
```

### Get a Scalar API key

Create an API key in your Scalar account:

- Dashboard: https://dashboard.scalar.com/account
- Store it in `.env`, for example:

```bash
SCALAR_API_KEY=your_personal_token
```

### Exchange your API key for an access token

The personal token is not an access token. Exchange it first with `postv1AuthExchange`.

If you use the personal token directly for authenticated API calls, the API returns `401 Invalid authentication token`.

```ts
import { Scalar } from '@scalar/sdk'

const scalar = new Scalar()

const exchange = await scalar.auth.postv1AuthExchange({
  personalToken: process.env.SCALAR_API_KEY!,
})

const accessToken = exchange.accessToken
```

### Use the access token

Construct a second client with bearer auth. Use this authenticated client for API calls.

```ts
import { Scalar } from '@scalar/sdk'

const scalar = new Scalar()

const exchange = await scalar.auth.postv1AuthExchange({
  personalToken: process.env.SCALAR_API_KEY!,
})

const authedScalar = new Scalar({
  bearerAuth: exchange.accessToken,
})
```

### Notes

- The exchange request itself can be made from a client constructed with no arguments (`new Scalar()`).
- The exchanged access token is valid for 12 hours.
- Timestamps are Unix seconds.

### Read more

- [@scalar/sdk on npm](https://www.npmjs.com/package/@scalar/sdk)

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install -g scalarapi-cli
```

<br />

## Usage

```sh
scalarapi [resource] [command] [flags]

scalarapi registry list-all-api-documents --bearer-auth "$BEARER_AUTH"
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `--bearer-auth` | `string \| provider` | - | Credential for the BearerAuth scheme. Defaults to BEARER_AUTH. |

Declared schemes:

- `BearerAuth` bearer token

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

Documented error statuses: `400`, `401`, `403`, `404`, `422`, `500`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `--base-url` | `<url>` | - | Override the base URL for API requests. |
| `--timeout` | `<ms>` | - | Request timeout in milliseconds. |
| `--max-retries` | `<count>` | - | Number of retries for retryable failures. |
| `--debug` | `flag` | - | Enable SDK debug logging. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Helpers

- `--format <format>` — output format: `auto`, `json`, `jsonl`, `pretty`, `raw`, or `yaml`.
- `--format-error <format>` — error output format: `auto`, `json`, `jsonl`, `pretty`, `raw`, or `yaml`.
- `--transform <path>` and `--transform-error <path>` — dot-path transform for data/error output.
- `--raw-output`, `-r` — print transformed string values without JSON quotes.
- `--max-items <count>` — bound iterator, streaming, and WebSocket command output.

<br />

## Logging

- Pass `--debug` to any command to enable SDK debug logging on stderr.

<br />

## Requirements

- Node.js 20 or newer

Powered by Scalar.


## Contributions

This SDK is generated programmatically. Manual edits to generated files will be
overwritten on the next build.

### SDK created by [Scalar](https://www.scalar.com/?utm_source=scalar-typescript-sdk-cli&utm_campaign=sdk)
