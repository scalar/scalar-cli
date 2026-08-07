// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Command } from 'commander'
import SDK from '../sdk/index'
import { createProgram, type CliClientOptionDefinition, type CliCommandDefinition } from '../cli/runtime'
import { completions } from '../cli/completions'

const clientOptions = [
  {
    "clientKey": "bearerAuth",
    "sdkKey": "bearerAuth",
    "name": "bearer-auth",
    "optionKey": "bearerAuth",
    "env": "BEARER_AUTH",
    "auth": true
  }
] as const satisfies readonly CliClientOptionDefinition[]

const commands = [
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "list-all-api-documents"
    ],
    "methodName": "listAllAPIDocuments",
    "summary": "List all API Documents",
    "description": "List all API documents across every namespace the caller can access.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "list-api-documents"
    ],
    "methodName": "listAPIDocuments",
    "summary": "List API Documents in a namespace",
    "description": "List API documents in a namespace.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "create-api-document"
    ],
    "methodName": "createAPIDocument",
    "summary": "Create API Document",
    "description": "Create an API document.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "version-command",
        "optionKey": "versionCommand",
        "paramKey": "version",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "ruleset",
        "optionKey": "ruleset",
        "paramKey": "ruleset",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "update-api-document"
    ],
    "methodName": "updateAPIDocument",
    "summary": "Update API Document metadata",
    "description": "Update metadata for an API document.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      },
      {
        "name": "ruleset",
        "optionKey": "ruleset",
        "paramKey": "ruleset",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "delete-api-document"
    ],
    "methodName": "deleteAPIDocument",
    "summary": "Delete API Document",
    "description": "Delete an API document and all versions.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "retrieve-api-document-version"
    ],
    "methodName": "retrieveAPIDocumentVersion",
    "summary": "Get API Document",
    "description": "Get a specific API document version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "update-api-document-version"
    ],
    "methodName": "updateAPIDocumentVersion",
    "summary": "Update API Document version",
    "description": "Update the registry file content for an API document version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "last-known-version-sha",
        "optionKey": "lastKnownVersionSha",
        "paramKey": "lastKnownVersionSha",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "delete-api-document-version"
    ],
    "methodName": "deleteAPIDocumentVersion",
    "summary": "Delete API Document version",
    "description": "Delete a specific API document version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "list-api-document-version-metadata"
    ],
    "methodName": "listAPIDocumentVersionMetadata",
    "summary": "Get API Document version metadata",
    "description": "Get metadata (uid, content shas, version sha, tags) for a specific API document version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "create-api-document-version"
    ],
    "methodName": "createAPIDocumentVersion",
    "summary": "Create API Document version",
    "description": "Create a new API document version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "version-command",
        "optionKey": "versionCommand",
        "paramKey": "version",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "force",
        "optionKey": "force",
        "paramKey": "force",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      },
      {
        "name": "last-known-version-sha",
        "optionKey": "lastKnownVersionSha",
        "paramKey": "lastKnownVersionSha",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "create-api-document-access-group"
    ],
    "methodName": "createAPIDocumentAccessGroup",
    "summary": "Add access group",
    "description": "Add an access group to an API document.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "registry"
    ],
    "commandPath": [
      "registry",
      "delete-api-document-access-group"
    ],
    "methodName": "deleteAPIDocumentAccessGroup",
    "summary": "Remove access group",
    "description": "Remove an access group from an API document.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas"
    ],
    "commandPath": [
      "schemas",
      "list"
    ],
    "methodName": "list",
    "summary": "List all shared components",
    "description": "List schemas in a namespace.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "schemas"
    ],
    "commandPath": [
      "schemas",
      "create"
    ],
    "methodName": "create",
    "summary": "Create a shared component",
    "description": "Create a schema in a namespace.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "version-command",
        "optionKey": "versionCommand",
        "paramKey": "version",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas"
    ],
    "commandPath": [
      "schemas",
      "update"
    ],
    "methodName": "update",
    "summary": "Update shared component metadata",
    "description": "Update schema metadata.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas"
    ],
    "commandPath": [
      "schemas",
      "delete"
    ],
    "methodName": "delete",
    "summary": "Delete a shared component",
    "description": "Delete a schema and all related versions.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas",
      "version"
    ],
    "commandPath": [
      "schemas:version-command",
      "retrieve-schema"
    ],
    "methodName": "retrieveSchema",
    "summary": "Get a shared component document",
    "description": "Get a specific schema version document.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas",
      "version"
    ],
    "commandPath": [
      "schemas:version-command",
      "delete-schema"
    ],
    "methodName": "deleteSchema",
    "summary": "Delete a shared component version",
    "description": "Delete a schema version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "semver",
        "optionKey": "semver",
        "paramKey": "semver",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas",
      "version"
    ],
    "commandPath": [
      "schemas:version-command",
      "create-schema"
    ],
    "methodName": "createSchema",
    "summary": "Create a shared component version",
    "description": "Create a schema version.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "version-command",
        "optionKey": "versionCommand",
        "paramKey": "version",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas",
      "accessGroup"
    ],
    "commandPath": [
      "schemas:access-group",
      "create-schema"
    ],
    "methodName": "createSchema",
    "summary": "Add shared component access group",
    "description": "Add an access group to a schema.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "schemas",
      "accessGroup"
    ],
    "commandPath": [
      "schemas:access-group",
      "delete-schema"
    ],
    "methodName": "deleteSchema",
    "summary": "Remove shared component access group",
    "description": "Remove an access group from a schema.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "loginPortals"
    ],
    "commandPath": [
      "login-portals",
      "retrieve"
    ],
    "methodName": "retrieve",
    "summary": "Get a login portal",
    "description": "Get a login portal by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "loginPortals"
    ],
    "commandPath": [
      "login-portals",
      "update"
    ],
    "methodName": "update",
    "summary": "Update portal metadata",
    "description": "Update metadata for a login portal.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "loginPortals"
    ],
    "commandPath": [
      "login-portals",
      "delete"
    ],
    "methodName": "delete",
    "summary": "Delete a login portal",
    "description": "Delete a login portal.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "loginPortals"
    ],
    "commandPath": [
      "login-portals",
      "create"
    ],
    "methodName": "create",
    "summary": "Create a portal",
    "description": "Create a login portal for the current team.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "email",
        "optionKey": "email",
        "paramKey": "email",
        "location": "body",
        "required": true,
        "valueKind": "object"
      },
      {
        "name": "email.logo",
        "optionKey": "email.logo",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "logo"
        ]
      },
      {
        "name": "email.logo-size",
        "optionKey": "email.logoSize",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "logoSize"
        ]
      },
      {
        "name": "email.button-text",
        "optionKey": "email.buttonText",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "buttonText"
        ]
      },
      {
        "name": "email.message",
        "optionKey": "email.message",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "message"
        ]
      },
      {
        "name": "email.title",
        "optionKey": "email.title",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "title"
        ]
      },
      {
        "name": "email.main-color",
        "optionKey": "email.mainColor",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "mainColor"
        ]
      },
      {
        "name": "email.main-background",
        "optionKey": "email.mainBackground",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "mainBackground"
        ]
      },
      {
        "name": "email.card-color",
        "optionKey": "email.cardColor",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "cardColor"
        ]
      },
      {
        "name": "email.card-background",
        "optionKey": "email.cardBackground",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "cardBackground"
        ]
      },
      {
        "name": "email.button-color",
        "optionKey": "email.buttonColor",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "buttonColor"
        ]
      },
      {
        "name": "email.button-background",
        "optionKey": "email.buttonBackground",
        "paramKey": "email",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "buttonBackground"
        ]
      },
      {
        "name": "page",
        "optionKey": "page",
        "paramKey": "page",
        "location": "body",
        "required": true,
        "valueKind": "object"
      },
      {
        "name": "page.title",
        "optionKey": "page.title",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "title"
        ]
      },
      {
        "name": "page.description",
        "optionKey": "page.description",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "description"
        ]
      },
      {
        "name": "page.head",
        "optionKey": "page.head",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "head"
        ]
      },
      {
        "name": "page.script",
        "optionKey": "page.script",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "script"
        ]
      },
      {
        "name": "page.theme",
        "optionKey": "page.theme",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "theme"
        ]
      },
      {
        "name": "page.company-name",
        "optionKey": "page.companyName",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "companyName"
        ]
      },
      {
        "name": "page.logo",
        "optionKey": "page.logo",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "logo"
        ]
      },
      {
        "name": "page.logo-url",
        "optionKey": "page.logoUrl",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "logoURL"
        ]
      },
      {
        "name": "page.favicon",
        "optionKey": "page.favicon",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "favicon"
        ]
      },
      {
        "name": "page.terms-link",
        "optionKey": "page.termsLink",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "termsLink"
        ]
      },
      {
        "name": "page.privacy-link",
        "optionKey": "page.privacyLink",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "privacyLink"
        ]
      },
      {
        "name": "page.form-title",
        "optionKey": "page.formTitle",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "formTitle"
        ]
      },
      {
        "name": "page.form-description",
        "optionKey": "page.formDescription",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "formDescription"
        ]
      },
      {
        "name": "page.form-image",
        "optionKey": "page.formImage",
        "paramKey": "page",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "formImage"
        ]
      }
    ]
  },
  {
    "resourcePath": [
      "loginPortals"
    ],
    "commandPath": [
      "login-portals",
      "list"
    ],
    "methodName": "list",
    "summary": "List all portals",
    "description": "List all login portals for the current team.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "list-rulesets"
    ],
    "methodName": "listRulesets",
    "summary": "List all rules",
    "description": "List all rulesets in a namespace.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "create-ruleset"
    ],
    "methodName": "createRuleset",
    "summary": "Create a rule",
    "description": "Create a rule in a namespace.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace_",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "update-ruleset"
    ],
    "methodName": "updateRuleset",
    "summary": "Update rule metadata",
    "description": "Update rule metadata by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "body-slug",
        "optionKey": "bodySlug",
        "paramKey": "slug",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "title",
        "optionKey": "title",
        "paramKey": "title",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": false,
        "valueKind": "boolean"
      }
    ]
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "delete-ruleset"
    ],
    "methodName": "deleteRuleset",
    "summary": "Delete a rule",
    "description": "Delete a rule by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "retrieve-ruleset-document"
    ],
    "methodName": "retrieveRulesetDocument",
    "summary": "Get a rule",
    "description": "Get a rule document by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "create-ruleset-access-group"
    ],
    "methodName": "createRulesetAccessGroup",
    "summary": "Add rule access group",
    "description": "Grant an access group to a rule.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "rules"
    ],
    "commandPath": [
      "rules",
      "delete-ruleset-access-group"
    ],
    "methodName": "deleteRulesetAccessGroup",
    "summary": "Remove rule access group",
    "description": "Remove an access group from a rule.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "namespace",
        "optionKey": "namespace",
        "paramKey": "namespace",
        "location": "path",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "access-group-slug",
        "optionKey": "accessGroupSlug",
        "paramKey": "accessGroupSlug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "list"
    ],
    "methodName": "list",
    "summary": "List all themes",
    "description": "List all team themes.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "create"
    ],
    "methodName": "create",
    "summary": "Create a theme",
    "description": "Create a team theme.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "update"
    ],
    "methodName": "update",
    "summary": "Update theme metadata",
    "description": "Update theme metadata.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "description",
        "optionKey": "description",
        "paramKey": "description",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "replace-document"
    ],
    "methodName": "replaceDocument",
    "summary": "Update theme document",
    "description": "Replace the theme document.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "document",
        "optionKey": "document",
        "paramKey": "document",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "delete"
    ],
    "methodName": "delete",
    "summary": "Delete a theme",
    "description": "Delete a theme by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "themes"
    ],
    "commandPath": [
      "themes",
      "retrieve"
    ],
    "methodName": "retrieve",
    "summary": "Get a theme",
    "description": "Get the theme document by slug.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "teams"
    ],
    "commandPath": [
      "teams",
      "list"
    ],
    "methodName": "list",
    "summary": "List teams",
    "description": "List all available teams",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "scalarDocs"
    ],
    "commandPath": [
      "scalar-docs",
      "list-guides"
    ],
    "methodName": "listGuides",
    "summary": "List all projects",
    "description": "List all guide projects.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "scalarDocs"
    ],
    "commandPath": [
      "scalar-docs",
      "create-guide"
    ],
    "methodName": "createGuide",
    "summary": "Create a project",
    "description": "Create a guide project.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "body",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "is-private",
        "optionKey": "isPrivate",
        "paramKey": "isPrivate",
        "location": "body",
        "required": true,
        "valueKind": "boolean"
      },
      {
        "name": "allowed-user",
        "optionKey": "allowedUser",
        "paramKey": "allowedUsers",
        "location": "body",
        "required": true,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "allowed-domain",
        "optionKey": "allowedDomain",
        "paramKey": "allowedDomains",
        "location": "body",
        "required": true,
        "valueKind": "array",
        "repeatable": true
      }
    ]
  },
  {
    "resourcePath": [
      "scalarDocs"
    ],
    "commandPath": [
      "scalar-docs",
      "publish-guide"
    ],
    "methodName": "publishGuide",
    "summary": "Publish a project",
    "description": "Start a new publish process.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "slug",
        "optionKey": "slug",
        "paramKey": "slug",
        "location": "path",
        "required": true,
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "namespaces"
    ],
    "commandPath": [
      "namespaces",
      "list"
    ],
    "methodName": "list",
    "summary": "List namespaces",
    "description": "Get all namespaces for the current team",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  },
  {
    "resourcePath": [
      "authentication"
    ],
    "commandPath": [
      "authentication",
      "exchange-personal-token"
    ],
    "methodName": "exchangePersonalToken",
    "summary": "Exchange token",
    "description": "Exchange an API key for an access token.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "personal-token",
        "optionKey": "personalToken",
        "paramKey": "personalToken",
        "location": "body",
        "required": true,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "authentication"
    ],
    "commandPath": [
      "authentication",
      "list-current-user"
    ],
    "methodName": "listCurrentUser",
    "summary": "Get current user",
    "description": "Get the authenticated user, including their available teams and theme.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [],
    "flags": []
  }
] as const satisfies readonly CliCommandDefinition[]

export const getProgram = (): Command =>
  createProgram({
    SDK,
    binaryName: "scalarapi",
    version: "0.1.0", // x-release-please-version
    description: "CLI for Scalar API",
    defaultFormat: "auto",
    defaultErrorFormat: "auto",
    clientOptions,
    commands,
    completions,
  })
