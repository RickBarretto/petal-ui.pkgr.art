---
metadata:
  author: Yanis Zafirópulos (drkameleon)
  license: MIT
  package-version: 0.3.0
  arturo-version: 0.10.0
  review-date: 2026-10-29
  sources:
    - https://github.com/drkameleon/mwiki.art/blob/bace1e015ae93876b5669b52351ce4a1ad5fa1d8/README.md
    - https://github.com/drkameleon/mwiki.art/blob/bace1e015ae93876b5669b52351ce4a1ad5fa1d8/src/mwiki.art
    - https://arturo-lang.io/documentation/library/core/import/
    - https://mwiki.pkgr.art/
---

# MediaWiki in Arturo

Use the mwiki package for MediaWiki Action API integration. `import 'mwiki!` may download and execute the package; distinguish this from making wiki requests.

## Read operations

`to :MW [apiUrl]!` creates a client for an actual `api.php` endpoint. Construction initializes cookies and login state locally. `wiki\page title` fetches wikitext and returns `:mwPage` or null; check before reading `\content`. It does not return rendered HTML. `wiki\search.limit: 5 query` returns page-title strings.

A failed search can return an empty block, so emptiness alone does not establish that there were no matches.

`wiki\category.limit: 10 name` bounds category traversal. Without `.limit`, the implementation follows continuation tokens until all members are fetched, potentially making many requests. `wiki\recent 5` returns recent-change records; pass null for the default limit. `wiki\user` returns a user object or null, with information under `\details`.

The following local fixture exercises page consumption without contacting a wiki, once the package is already available:

```art
import 'mwiki!
page: to :mwPage ["Fixture" "A small wikitext sample."]!
print page\title
print page\content
```

For a live read, construct a client with the user's intended endpoint, call `wiki\page "Known title"`, and branch on `null? page` before accessing its fields. HTTP errors may become null/empty values, while malformed API responses or JSON can still raise errors. Keep fixture tests separate from network checks.

## Authentication and writes

`wiki\login username password` returns a logical result and mutates the client's session state; cookies are maintained automatically. Read credentials from the application's secret configuration.

`wiki\editPage title content summary` requires a logged-in client and submits a full page text replacement or creation, obtaining a CSRF token internally. Prepare the target title, complete replacement text, and summary before performing an edit within the user's requested scope.

The implementation reports an edit as successful when the response has an `edit` key; verify the resulting page when confirmation of the actual stored content matters. It exposes no conflict-resolution or revision-precondition interface.
