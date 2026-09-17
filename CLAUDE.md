# CLAUDE.md

## Commit identity

All commits and pushes must be authored as the repository owner, never as Claude.

```
git config user.name  "Ifeoluwa"
git config user.email "31360910+onifa1@users.noreply.github.com"
```

Set this at the start of any session before committing — git config lives in the
session container and does not persist between sessions.

Do **not** add `Co-Authored-By: Claude ...` or `Claude-Session: ...` trailers to
commit messages, and do not reference Claude, Anthropic or a model name in commit
messages, PR titles or bodies, or anywhere else pushed to this repository.

## Project layout

The app lives in `web/`, not the repo root. Only `README.md`, `.gitignore` and
`CLAUDE.md` belong at the top level.

```
cd web
npm install
npm run dev     # or: npm run build, npm run lint
```

## Deploying

This repo is connected to a Vercel project on the **client's** account, served at
https://brandfacemediasite.vercel.app. That account is not readable from Claude
Code sessions, so deploy results have to be confirmed by the repo owner.

Two things are coupled and must move together:

- The Vercel project's **Root Directory** is set to `web`. If the app is ever
  moved back to the repo root, that setting has to be cleared in the same change,
  or every build fails with `The specified Root Directory "web" does not exist`.
  Root Directory is a Project Settings field and **cannot** be overridden from
  `vercel.json` (which supports `buildCommand`, `outputDirectory`, `installCommand`
  and `framework`, but not `rootDirectory`).
- The `og:url`, `og:image` and `twitter:image` tags in `web/index.html` are
  absolute URLs pointing at `brandfacemediasite.vercel.app`. They must track
  whatever domain actually serves this repo.

## Relationship to the `brandface` repo

The app is also developed in `Digital-Ninja-Technologies/brandface`, which keeps
the same `web/` layout and deploys to a different Vercel project. That repo is
generally ahead of this one. When syncing from it, do not copy its OG tags — they
point at `brandface-theta.vercel.app`, a host that does not resolve.
