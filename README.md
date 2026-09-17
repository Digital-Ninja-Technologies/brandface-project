# BrandFace Media — Sales Page

React + Vite implementation of the BrandFace Media sales page.

The app lives in the **`web/`** subdirectory, not the repo root. This matches the
Vercel project's **Root Directory** setting (`web`) — see "Deploy on Vercel" below.

## Develop

```
cd web
npm install
npm run dev
```

## Build

```
cd web
npm run build
```

Outputs a static site to `web/dist/`.

## Deploy on Vercel

The Vercel project's **Settings → General → Root Directory** must be set to
**`web`**. Everything Vercel needs — `package.json`, `vite.config.js`,
`index.html` and `vercel.json` — lives in that folder, and Vercel resolves
`vercel.json` relative to the Root Directory.

If the app is ever moved back to the repo root, the Root Directory setting has to
be cleared in the same change, or the build fails with:

```
The specified Root Directory "web" does not exist. Please update your Project Settings.
```

Root Directory is a Project Settings field only — it cannot be overridden from
`vercel.json`, which supports `buildCommand`, `outputDirectory`, `installCommand`
and `framework` but not `rootDirectory`.

1. Import the GitHub repo into Vercel.
2. Set **Root Directory** to `web`.
3. Framework Preset auto-detects as **Vite** (build command `npm run build`,
   output `dist`) — `web/vercel.json` pins that explicitly.
4. No environment variables are required; the Calendly embed and GoHighLevel
   webhook are public URLs baked into the code (`web/src/siteConfig.js`).

Deploying with the Vercel CLI:

```
cd web
vercel
```

The production URL is https://brandfacemediasite.vercel.app — the `og:url` and
`og:image` tags in `web/index.html` are absolute, so update them if a custom
domain is added.
