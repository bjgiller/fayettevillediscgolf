# fayettevillediscgolf.com

Website for the Fayetteville Disc Golf Association (FDGA). Static HTML on GitHub Pages,
domain on Cloudflare, same setup as `hogwildhandiwork/`.

| Path | What |
|---|---|
| `index.html` | Home: weekly rounds, tags, signature events, sponsors summary, about, join |
| `sponsors.html` | 2027 sponsor packet at `/sponsors` (the link to send prospective sponsors) |
| `css/style.css` | Styles (FDGA teal/gold, same palette as the FDGA proposal) |
| `js/main.js` | Mobile nav toggle |
| `images/` | `fdga-logo.png` (800px), `favicon.svg`, `sponsors/` (sponsor logos, 800px) |
| `CNAME` | `www.fayettevillediscgolf.com` |

## Updating

- **"Next up" strip:** near the top of `index.html`. Change it after each event.
- **Sponsor packages:** prices/spots live in both `sponsors.html` and the summary cards in `index.html`; keep them in sync. Add new sponsors to "Current Sponsors" on both.
- **Event links:** each event card links to that year's Disc Golf Scene page; update yearly.
- When changing CSS or JS, bump the `?v=N` on its link/script tag.
- Everything here is public. No secrets, no player contact info.

## Hosting

- GitHub repo `bjgiller/fayettevillediscgolf`, Pages from `main` / root, custom domain
  `www.fayettevillediscgolf.com`.
- Cloudflare DNS (proxied, SSL mode Full): `www` CNAME → `bjgiller.github.io`; apex
  redirects to `www`.
