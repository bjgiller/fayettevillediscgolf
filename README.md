# fayettevillediscgolf.com

Website for the Fayetteville Disc Golf Association (FDGA). Static HTML on GitHub Pages,
domain on Cloudflare, same setup as `hogwildhandiwork/`.

| Path | What |
|---|---|
| `index.html` | The whole site: weekly rounds, signature events, about, join |
| `css/style.css` | Styles (FDGA teal/gold, same palette as the FDGA proposal) |
| `js/main.js` | Mobile nav toggle |
| `images/` | `fdga-logo.png` (800px), `favicon.svg`, `sponsors/` (sponsor logos, 800px) |
| `CNAME` | `www.fayettevillediscgolf.com` |

## Updating

- **"Next up" strip:** near the top of `index.html`. Change it after each event.
- **Event links:** each event card links to that year's Disc Golf Scene page; update yearly.
- When changing CSS or JS, bump the `?v=N` on its link/script tag.
- Everything here is public. No secrets, no player contact info.

## Hosting

- GitHub repo `bjgiller/fayettevillediscgolf`, Pages from `main` / root, custom domain
  `www.fayettevillediscgolf.com`.
- Cloudflare DNS (proxied, SSL mode Full): `www` CNAME → `bjgiller.github.io`; apex
  redirects to `www`.
