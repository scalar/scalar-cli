# Scalar CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Registry`](#registry)
  - [List all API Documents](#list-all-api-documents)
  - [List API Documents in a namespace](#list-api-documents-in-a-namespace)
  - [Create API Document](#create-api-document)
  - [Update API Document metadata](#update-api-document-metadata)
  - [Delete API Document](#delete-api-document)
  - [Get API Document](#get-api-document)
  - [Update API Document version](#update-api-document-version)
  - [Delete API Document version](#delete-api-document-version)
  - [Get API Document version metadata](#get-api-document-version-metadata)
  - [Create API Document version](#create-api-document-version)
  - [Add access group](#add-access-group)
  - [Remove access group](#remove-access-group)
- [`Schemas`](#schemas)
  - [List all shared components](#list-all-shared-components)
  - [Create a shared component](#create-a-shared-component)
  - [Update shared component metadata](#update-shared-component-metadata)
  - [Delete a shared component](#delete-a-shared-component)
  - [`Schemas Version`](#schemas-version)
    - [Get a shared component document](#get-a-shared-component-document)
    - [Delete a shared component version](#delete-a-shared-component-version)
    - [Create a shared component version](#create-a-shared-component-version)
  - [`Schemas AccessGroup`](#schemas-accessgroup)
    - [Add shared component access group](#add-shared-component-access-group)
    - [Remove shared component access group](#remove-shared-component-access-group)
- [`LoginPortals`](#loginportals)
  - [Get a login portal](#get-a-login-portal)
  - [Update portal metadata](#update-portal-metadata)
  - [Delete a login portal](#delete-a-login-portal)
  - [Create a portal](#create-a-portal)
  - [List all portals](#list-all-portals)
- [`Rules`](#rules)
  - [List all rules](#list-all-rules)
  - [Create a rule](#create-a-rule)
  - [Update rule metadata](#update-rule-metadata)
  - [Delete a rule](#delete-a-rule)
  - [Get a rule](#get-a-rule)
  - [Add rule access group](#add-rule-access-group)
  - [Remove rule access group](#remove-rule-access-group)
- [`Themes`](#themes)
  - [List all themes](#list-all-themes)
  - [Create a theme](#create-a-theme)
  - [Update theme metadata](#update-theme-metadata)
  - [Update theme document](#update-theme-document)
  - [Delete a theme](#delete-a-theme)
  - [Get a theme](#get-a-theme)
- [`Teams`](#teams)
  - [List teams](#list-teams)
- [`ScalarDocs`](#scalardocs)
  - [List all projects](#list-all-projects)
  - [Create a project](#create-a-project)
  - [Publish a project](#publish-a-project)
- [`Namespaces`](#namespaces)
  - [List namespaces](#list-namespaces)
- [`Authentication`](#authentication)
  - [Exchange token](#exchange-token)
  - [Get current user](#get-current-user)

## `Registry`

### List all API Documents

List all API documents across every namespace the caller can access.

```sh
scalarapi registry list-all-api-documents --bearer-auth "$BEARER_AUTH"
```

### List API Documents in a namespace

List API documents in a namespace.

```sh
scalarapi registry list-api-documents 'namespace_' --bearer-auth "$BEARER_AUTH"
```

### Create API Document

Create an API document.

```sh
scalarapi registry create-api-document 'namespace_' --bearer-auth "$BEARER_AUTH" --title 'title' --version-command 'version' --slug 'slug' --document 'document'
```

### Update API Document metadata

Update metadata for an API document.

```sh
scalarapi registry update-api-document 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Delete API Document

Delete an API document and all versions.

```sh
scalarapi registry delete-api-document 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Get API Document

Get a specific API document version.

```sh
scalarapi registry retrieve-api-document-version 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug'
```

### Update API Document version

Update the registry file content for an API document version.

```sh
scalarapi registry update-api-document-version 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug' --document 'document'
```

### Delete API Document version

Delete a specific API document version.

```sh
scalarapi registry delete-api-document-version 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug'
```

### Get API Document version metadata

Get metadata (uid, content shas, version sha, tags) for a specific API document version.

```sh
scalarapi registry list-api-document-version-metadata 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug'
```

### Create API Document version

Create a new API document version.

```sh
scalarapi registry create-api-document-version 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --version-command 'version' --document 'document'
```

### Add access group

Add an access group to an API document.

```sh
scalarapi registry create-api-document-access-group 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

### Remove access group

Remove an access group from an API document.

```sh
scalarapi registry delete-api-document-access-group 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

## `Schemas`

### List all shared components

List schemas in a namespace.

```sh
scalarapi schemas list 'namespace_' --bearer-auth "$BEARER_AUTH"
```

### Create a shared component

Create a schema in a namespace.

```sh
scalarapi schemas create 'namespace_' --bearer-auth "$BEARER_AUTH" --title 'title' --version-command 'version' --slug 'slug' --document 'document'
```

### Update shared component metadata

Update schema metadata.

```sh
scalarapi schemas update 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Delete a shared component

Delete a schema and all related versions.

```sh
scalarapi schemas delete 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### `Schemas Version`

#### Get a shared component document

Get a specific schema version document.

```sh
scalarapi schemas:version-command retrieve-schema 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug'
```

#### Delete a shared component version

Delete a schema version.

```sh
scalarapi schemas:version-command delete-schema 'semver' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --slug 'slug'
```

#### Create a shared component version

Create a schema version.

```sh
scalarapi schemas:version-command create-schema 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --version-command 'version' --document 'document'
```

### `Schemas AccessGroup`

#### Add shared component access group

Add an access group to a schema.

```sh
scalarapi schemas:access-group create-schema 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

#### Remove shared component access group

Remove an access group from a schema.

```sh
scalarapi schemas:access-group delete-schema 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

## `LoginPortals`

### Get a login portal

Get a login portal by slug.

```sh
scalarapi login-portals retrieve 'slug' --bearer-auth "$BEARER_AUTH"
```

### Update portal metadata

Update metadata for a login portal.

```sh
scalarapi login-portals update 'slug' --bearer-auth "$BEARER_AUTH"
```

### Delete a login portal

Delete a login portal.

```sh
scalarapi login-portals delete 'slug' --bearer-auth "$BEARER_AUTH"
```

### Create a portal

Create a login portal for the current team.

```sh
scalarapi login-portals create --bearer-auth "$BEARER_AUTH" --title 'title' --slug 'slug' --email '{"logo":"","logoSize":"100","buttonText":"Login","message":"Click to access private documentation hosted by scalar.com","title":"Private Docs","mainColor":"#2a2f45","mainBackground":"#f6f6f6","cardColor":"2a2f45","cardBackground":"#fff","buttonColor":"#fff","buttonBackground":"#0f0f0f"}' --page '{"title":"Scalar Private Docs","description":"Login to access your documentation","head":"","script":"","theme":"","companyName":"","logo":"","logoURL":"","favicon":"","termsLink":"","privacyLink":"","formTitle":"Scalar Private Docs","formDescription":"Login to access your documentation","formImage":""}'
```

### List all portals

List all login portals for the current team.

```sh
scalarapi login-portals list --bearer-auth "$BEARER_AUTH"
```

## `Rules`

### List all rules

List all rulesets in a namespace.

```sh
scalarapi rules list-rulesets 'namespace_' --bearer-auth "$BEARER_AUTH"
```

### Create a rule

Create a rule in a namespace.

```sh
scalarapi rules create-ruleset 'namespace_' --bearer-auth "$BEARER_AUTH" --title 'title' --slug 'slug' --document 'document'
```

### Update rule metadata

Update rule metadata by slug.

```sh
scalarapi rules update-ruleset 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Delete a rule

Delete a rule by slug.

```sh
scalarapi rules delete-ruleset 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Get a rule

Get a rule document by slug.

```sh
scalarapi rules retrieve-ruleset-document 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace'
```

### Add rule access group

Grant an access group to a rule.

```sh
scalarapi rules create-ruleset-access-group 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

### Remove rule access group

Remove an access group from a rule.

```sh
scalarapi rules delete-ruleset-access-group 'slug' --bearer-auth "$BEARER_AUTH" --namespace 'namespace' --access-group-slug 'accessGroupSlug'
```

## `Themes`

### List all themes

List all team themes.

```sh
scalarapi themes list --bearer-auth "$BEARER_AUTH"
```

### Create a theme

Create a team theme.

```sh
scalarapi themes create --bearer-auth "$BEARER_AUTH" --name 'name' --slug 'slug' --document 'document'
```

### Update theme metadata

Update theme metadata.

```sh
scalarapi themes update 'slug' --bearer-auth "$BEARER_AUTH"
```

### Update theme document

Replace the theme document.

```sh
scalarapi themes replace-document 'slug' --bearer-auth "$BEARER_AUTH" --document 'document'
```

### Delete a theme

Delete a theme by slug.

```sh
scalarapi themes delete 'slug' --bearer-auth "$BEARER_AUTH"
```

### Get a theme

Get the theme document by slug.

```sh
scalarapi themes retrieve 'slug' --bearer-auth "$BEARER_AUTH"
```

## `Teams`

### List teams

List all available teams

```sh
scalarapi teams list --bearer-auth "$BEARER_AUTH"
```

## `ScalarDocs`

### List all projects

List all guide projects.

```sh
scalarapi scalar-docs list-guides --bearer-auth "$BEARER_AUTH"
```

### Create a project

Create a guide project.

```sh
scalarapi scalar-docs create-guide --bearer-auth "$BEARER_AUTH" --name 'name' --is-private
```

### Publish a project

Start a new publish process.

```sh
scalarapi scalar-docs publish-guide 'slug' --bearer-auth "$BEARER_AUTH"
```

## `Namespaces`

### List namespaces

Get all namespaces for the current team

```sh
scalarapi namespaces list --bearer-auth "$BEARER_AUTH"
```

## `Authentication`

### Exchange token

Exchange an API key for an access token.

```sh
scalarapi authentication exchange-personal-token --bearer-auth "$BEARER_AUTH" --personal-token 'personalToken'
```

### Get current user

Get the authenticated user, including their available teams and theme.

```sh
scalarapi authentication list-current-user --bearer-auth "$BEARER_AUTH"
```
