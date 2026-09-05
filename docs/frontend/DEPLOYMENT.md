
# EDUPATH Deployment

## Env
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_APP_NAME=EDUPATH
VITE_APP_ENV=production

## Build
bun install
bun run build → dist

## Targets
- Cloudflare Pages: Build command vite build, output dist, SPA redirect _redirects: /* /index.html 200
- Vercel: vercel.json rewrites { "source": "/(.*)", "destination": "/index.html" }
- Netlify: _redirects /* /index.html 200
- GitHub Pages: Use HashRouter or 404.html copy of index.html

## Assets
public/manifest.json, public/sw.js, public/favicon.svg, public/icon-*.png (to be added)

## SPA Routing
BrowserRouter requires server rewrite to index.html for deep links.

## No Secrets
Only VITE_ public vars, no AI keys, no Paystack secret.

## PWA
After deploy, service worker registers, manifest installable.
