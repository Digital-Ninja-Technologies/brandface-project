# BrandFace Media — Sales Page

React + Vite implementation of the BrandFace Media sales page, built from the Claude Design handoff bundle in the repo root (`README.md`, `chats/`, `project/`).

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a static site to `dist/`.

## Deploy on Vercel

The app lives at the repo root — `index.html`, `package.json` and `vite.config.js`
are all top level, so the Vercel project's **Root Directory** must be left empty
(the repo root). Setting it to `web` will fail the build with
"The specified Root Directory 'web' does not exist".

1. Import the GitHub repo into Vercel.
2. Leave **Settings → General → Root Directory** blank.
3. Framework Preset auto-detects as **Vite** (build command `npm run build`,
   output `dist`) — `vercel.json` pins that explicitly.
4. No environment variables are required; the Calendly embed and GoHighLevel
   webhook are public URLs baked into the code (`src/siteConfig.js`).

Deploying with the Vercel CLI from the repo root works the same way:

```
vercel
```

The production URL is https://brandface-eta.vercel.app — the `og:url` and
`og:image` tags in `index.html` are absolute and must match it, so update them
if a custom domain is added.
