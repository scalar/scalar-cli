// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: invokes the generated CLI once per operation to confirm each command can reach
// its endpoint. Build the CLI first (so dist/esm/bin.js exists), then run this from the repo
// with `bun tests/smoke-test.ts`. Each case below holds the argv for one command, minus the
// base URL and credentials — the embedded SDK reads those from the environment, so set
// <PREFIX>_BASE_URL and the auth variables before running.
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { execFile } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `args` is the argv passed to the built CLI; the other fields
// are metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the CLI command surface.
const cases: { operation: string; method: string; path: string; args: string[] }[] = [
  {
    operation: "listAllApiDocuments",
    method: "GET",
    path: "/v1/apis",
    args: ["registry","list-all-api-documents"],
  },

  {
    operation: "listApiDocuments",
    method: "GET",
    path: "/v1/apis/{namespace}",
    args: ["registry","list-api-documents","namespace_"],
  },

  {
    operation: "createApiDocument",
    method: "POST",
    path: "/v1/apis/{namespace}",
    args: ["registry","create-api-document","namespace_","--title","title","--version-command","version","--slug","slug","--document","document"],
  },

  {
    operation: "updateApiDocument",
    method: "PATCH",
    path: "/v1/apis/{namespace}/{slug}",
    args: ["registry","update-api-document","slug","--namespace","namespace"],
  },

  {
    operation: "deleteApiDocument",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}",
    args: ["registry","delete-api-document","slug","--namespace","namespace"],
  },

  {
    operation: "retrieveApiDocumentVersion",
    method: "GET",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    args: ["registry","retrieve-api-document-version","semver","--namespace","namespace","--slug","slug"],
  },

  {
    operation: "updateApiDocumentVersion",
    method: "PATCH",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    args: ["registry","update-api-document-version","semver","--namespace","namespace","--slug","slug","--document","document"],
  },

  {
    operation: "deleteApiDocumentVersion",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    args: ["registry","delete-api-document-version","semver","--namespace","namespace","--slug","slug"],
  },

  {
    operation: "listApiDocumentVersionMetadata",
    method: "GET",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}/metadata",
    args: ["registry","list-api-document-version-metadata","semver","--namespace","namespace","--slug","slug"],
  },

  {
    operation: "createApiDocumentVersion",
    method: "POST",
    path: "/v1/apis/{namespace}/{slug}/version",
    args: ["registry","create-api-document-version","slug","--namespace","namespace","--version-command","version","--document","document"],
  },

  {
    operation: "createApiDocumentAccessGroup",
    method: "POST",
    path: "/v1/apis/{namespace}/{slug}/access-group",
    args: ["registry","create-api-document-access-group","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "deleteApiDocumentAccessGroup",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}/access-group",
    args: ["registry","delete-api-document-access-group","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/schemas/{namespace}",
    args: ["schemas","list","namespace_"],
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/schemas/{namespace}",
    args: ["schemas","create","namespace_","--title","title","--version-command","version","--slug","slug","--document","document"],
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/schemas/{namespace}/{slug}",
    args: ["schemas","update","slug","--namespace","namespace"],
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}",
    args: ["schemas","delete","slug","--namespace","namespace"],
  },

  {
    operation: "retrieveSchema",
    method: "GET",
    path: "/v1/schemas/{namespace}/{slug}/version/{semver}",
    args: ["schemas:version-command","retrieve-schema","semver","--namespace","namespace","--slug","slug"],
  },

  {
    operation: "deleteSchema",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}/version/{semver}",
    args: ["schemas:version-command","delete-schema","semver","--namespace","namespace","--slug","slug"],
  },

  {
    operation: "createSchema",
    method: "POST",
    path: "/v1/schemas/{namespace}/{slug}/version",
    args: ["schemas:version-command","create-schema","slug","--namespace","namespace","--version-command","version","--document","document"],
  },

  {
    operation: "createSchema",
    method: "POST",
    path: "/v1/schemas/{namespace}/{slug}/access-group",
    args: ["schemas:access-group","create-schema","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "deleteSchema",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}/access-group",
    args: ["schemas:access-group","delete-schema","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/login-portals/{slug}",
    args: ["login-portals","retrieve","slug"],
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/login-portals/{slug}",
    args: ["login-portals","update","slug"],
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/login-portals/{slug}",
    args: ["login-portals","delete","slug"],
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/login-portals",
    args: ["login-portals","create","--title","title","--slug","slug","--email","{\"logo\":\"\",\"logoSize\":\"100\",\"buttonText\":\"Login\",\"message\":\"Click to access private documentation hosted by scalar.com\",\"title\":\"Private Docs\",\"mainColor\":\"#2a2f45\",\"mainBackground\":\"#f6f6f6\",\"cardColor\":\"2a2f45\",\"cardBackground\":\"#fff\",\"buttonColor\":\"#fff\",\"buttonBackground\":\"#0f0f0f\"}","--page","{\"title\":\"Scalar Private Docs\",\"description\":\"Login to access your documentation\",\"head\":\"\",\"script\":\"\",\"theme\":\"\",\"companyName\":\"\",\"logo\":\"\",\"logoURL\":\"\",\"favicon\":\"\",\"termsLink\":\"\",\"privacyLink\":\"\",\"formTitle\":\"Scalar Private Docs\",\"formDescription\":\"Login to access your documentation\",\"formImage\":\"\"}"],
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/login-portals",
    args: ["login-portals","list"],
  },

  {
    operation: "listRulesets",
    method: "GET",
    path: "/v1/rulesets/{namespace}",
    args: ["rules","list-rulesets","namespace_"],
  },

  {
    operation: "createRuleset",
    method: "POST",
    path: "/v1/rulesets/{namespace}",
    args: ["rules","create-ruleset","namespace_","--title","title","--slug","slug","--document","document"],
  },

  {
    operation: "updateRuleset",
    method: "PATCH",
    path: "/v1/rulesets/{namespace}/{slug}",
    args: ["rules","update-ruleset","slug","--namespace","namespace"],
  },

  {
    operation: "deleteRuleset",
    method: "DELETE",
    path: "/v1/rulesets/{namespace}/{slug}",
    args: ["rules","delete-ruleset","slug","--namespace","namespace"],
  },

  {
    operation: "retrieveRulesetDocument",
    method: "GET",
    path: "/v1/rulesets/{namespace}/{slug}",
    args: ["rules","retrieve-ruleset-document","slug","--namespace","namespace"],
  },

  {
    operation: "createRulesetAccessGroup",
    method: "POST",
    path: "/v1/rulesets/{namespace}/{slug}/access-group",
    args: ["rules","create-ruleset-access-group","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "deleteRulesetAccessGroup",
    method: "DELETE",
    path: "/v1/rulesets/{namespace}/{slug}/access-group",
    args: ["rules","delete-ruleset-access-group","slug","--namespace","namespace","--access-group-slug","accessGroupSlug"],
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/themes",
    args: ["themes","list"],
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/themes",
    args: ["themes","create","--name","name","--slug","slug","--document","document"],
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/themes/{slug}",
    args: ["themes","update","slug"],
  },

  {
    operation: "replaceDocument",
    method: "PUT",
    path: "/v1/themes/{slug}",
    args: ["themes","replace-document","slug","--document","document"],
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/themes/{slug}",
    args: ["themes","delete","slug"],
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/themes/{slug}",
    args: ["themes","retrieve","slug"],
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/teams",
    args: ["teams","list"],
  },

  {
    operation: "listGuides",
    method: "GET",
    path: "/v1/guides",
    args: ["scalar-docs","list-guides"],
  },

  {
    operation: "createGuide",
    method: "POST",
    path: "/v1/guides",
    args: ["scalar-docs","create-guide","--name","name","--is-private"],
  },

  {
    operation: "publishGuide",
    method: "POST",
    path: "/v1/guides/{slug}/publish",
    args: ["scalar-docs","publish-guide","slug"],
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/namespaces",
    args: ["namespaces","list"],
  },

  {
    operation: "exchangePersonalToken",
    method: "POST",
    path: "/v1/auth/exchange",
    args: ["authentication","exchange-personal-token","--personal-token","personalToken"],
  },

  {
    operation: "listCurrentUser",
    method: "GET",
    path: "/v1/auth/me",
    args: ["authentication","list-current-user"],
  },

]

// Each command gets its own budget so one hanging command fails on its own instead of stalling
// the whole run; the generator additionally bounds the overall run.
const COMMAND_TIMEOUT_MS = 60_000

// Locate the built executable from the nearest package.json `bin` entry. Walking up from this
// file (rather than assuming a fixed relative path) keeps it correct whether this harness runs
// from the repo's `tests/` directory or is staged flat into a runner by the smoke tester.
const resolveBinPath = (): string => {
  let dir = dirname(fileURLToPath(import.meta.url))
  for (let depth = 0; depth < 6; depth += 1) {
    const manifestPath = join(dir, 'package.json')
    if (existsSync(manifestPath)) {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as { bin?: string | Record<string, string> }
      const bin = typeof manifest.bin === 'string' ? manifest.bin : Object.values(manifest.bin ?? {})[0]
      if (bin) return join(dir, bin)
    }
    const parent = dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  throw new Error('Could not locate the built CLI binary (run the package build first so dist/esm/bin.js exists).')
}

const main = async (): Promise<void> => {
  const binPath = resolveBinPath()

  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected command concurrently. Promise.allSettled means one failing command never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        // Pass the current environment through so the embedded SDK picks up the base URL and
        // credentials; node runs the built bin exactly as the published executable would.
        await execFileAsync('node', [binPath, ...testCase.args], { env: process.env, timeout: COMMAND_TIMEOUT_MS, maxBuffer: 1024 * 1024 * 20 })
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Surface stderr (commander/runtime error output) when present; fall back to the message.
        const detail = error && typeof error === 'object' && 'stderr' in error ? String((error as { stderr?: unknown }).stderr ?? '') : ''
        const message = detail.trim() || (error instanceof Error ? (error.stack ?? error.message) : String(error))
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No commands ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} commands passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()
