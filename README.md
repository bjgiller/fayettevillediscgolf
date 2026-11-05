# fayettevillediscgolf.com

Website for the Fayetteville Disc Golf Association (FDGA), the club Brady is Vice President of.
Static HTML on GitHub Pages, domain on Cloudflare, same setup as `hogwildhandiwork/`.
Built 2026-11-04. **This repo is public (the README is served too): no secrets, no phone
numbers, no player contact info.**

## How it connects

```
visitor ──► Cloudflare (DNS + proxy, SSL Full, Always Use HTTPS)
              ├─ fayettevillediscgolf.com/*  ──301──► https://www.fayettevillediscgolf.com/$1  (Redirect Rule)
              └─ www.fayettevillediscgolf.com ──► GitHub Pages (repo bjgiller/fayettevillediscgolf, main, root)

/sponsors contact form ──POST JSON──► hogwild-forms Worker  /fdga  ──Gmail SMTP──► bjgiller@gmail.com
                                      (C:\Programming\hogwild-forms, reply-to = the sender)
```

- **GitHub:** `bjgiller/fayettevillediscgolf`, Pages deploys from `main` / root. The `CNAME` file
  claims `www.fayettevillediscgolf.com`. All of bjgiller's Pages sites (SWDAA, hogwildhandiwork,
  this one) point DNS at `bjgiller.github.io`; GitHub picks the repo by the domain in each `CNAME`.
  The Pages settings page may show a DNS-check warning because of the Cloudflare proxy; ignore it.
- **Cloudflare** (zone `fayettevillediscgolf.com`, bought on Cloudflare 2026-11): CNAME `www` →
  `bjgiller.github.io` and CNAME `@` → `bjgiller.github.io`, both proxied; SSL/TLS **Full**;
  Always Use HTTPS on; Redirect Rule "Redirect from root to WWW" (301).
- **Sponsor form:** `js/main.js` posts `{name, email, business, pkg, message, website}` to
  `https://hogwild-forms.bandicoot3111.workers.dev/fdga`. The Worker only accepts the two
  fayettevillediscgolf.com origins, drops submissions with the hidden `website` honeypot filled,
  and rate-limits 5/min per IP. Email goes from the Hogwild Gmail to `FDGA_TO` (default
  bjgiller@gmail.com). Package keys (`presenting`, `weekly`, `title`, `hole`, `friend`, `unsure`)
  must match `PACKAGE_LABELS` in `hogwild-forms/src/index.js`. Changing the Worker means
  `npx wrangler deploy` in `C:\Programming\hogwild-forms` (see that README).

## Files

| Path | What |
|---|---|
| `index.html` | Home: hero, "Next up" strip, Weekly Rounds, Tags, Signature Events, Sponsors summary, About, Join |
| `sponsors.html` | 2027 sponsor packet at `/sponsors`, the link Brady sends to prospective sponsors; ends with the contact form |
| `css/style.css` | All styles. Dark theme in FDGA teal `#1f7f84`/`#2bb3b9` and gold `#f0c814` (same palette as the City proposal) |
| `js/main.js` | Mobile nav toggle + sponsor form submit |
| `images/fdga-logo.png` | FDGA logo, 800px, transparent (original 1400px is in `hogwildhandiwork/fdga/images/`) |
| `images/favicon.svg` | Teal circle with a gold disc |
| `images/sponsors/` | Sponsor logos, resized to 800px wide (shown on a white card) |
| `CNAME`, `.nojekyll`, `.gitattributes` | Pages domain, serve every file, line endings |

`sponsors.html` uses root-relative paths (`/css/...`), so preview with a local static server, not
by opening the file. A tiny Node server that maps `/x` → `x.html` works.

## What the content says, and where it came from

Facts came from the FDGA Facebook group (https://www.facebook.com/groups/421920494597940, public,
readable through Claude in Chrome) and Disc Golf Scene event pages. Don't add numbers or claims
that can't be traced to one of those or to Brady.

**Weekly Rounds** (each host's name links to their Facebook profile):

| Round | When | Season | Host |
|---|---|---|---|
| Monday Flip Doubles | Monday evenings ~5:30 PM, mainly Northshore at Lake Fayetteville | March – October | Andrew McDonagh (facebook.com/andrew.mcdonagh.142) |
| Wacky Wednesday | Wednesday mornings ~10 AM, course rotates | Year-round | Mitchell Twombley (facebook.com/mitchell.twombley) |
| FDGA Tag Match | Saturdays or Sundays | Year-round | Paul Pequette (facebook.com/paul.pequette) |

**Tags:** $10/year numbered bag tag = club membership; needed for tag-match cash games.

**Signature events** (calendar order):
- **Ice Bowl** (Feb, temporary course at Kessler Mountain): charity for Everhope (formerly NWA
  Children's Shelter). 2026: 152 pre-registered, record $7,800+ raised.
- **Hogwild Huck** (mid-Aug, Creekside DGC Farmington + Carter Park West Fork): 3-round PDGA
  B-tier, presented by The Disc Golf Dojo & Innova; proceeds to the FDGA general fund.
- **Northshore Invitational** (late Aug, Northshore DGC, Lake Fayetteville): since 2006; the 20th
  in 2026 had the largest field ever (presented by Innova & Rush Truck Centers).
- **Darkside of the Disc** (Nov, Northshore): glow night round, volunteers decorate holes.
  2026 edition: Sat Nov 14, 5:30 PM, $25.

**Sponsors section / packet:**
- Current sponsor: **Play It Forward NWA** (playitforwardnwa.com), a 501(c)(3) fighting local food
  insecurity. Logo copied from their site.
- 2027 packages (each sold once; prices are in both `sponsors.html` and the summary cards in
  `index.html`, keep them in sync):

  | Package | Spots | Price | Key perk |
  |---|---|---|---|
  | Season Presenting Partner | 1 | $2,500/yr | Logo on the 2027 FDGA tag; "FDGA 2027 Season presented by ___" |
  | Weekly Series Partner | 3 (Flip Doubles, Wacky Wed, Tag Match) | $750/yr | Named in every weekly post (~50/yr, ~35 for Flip Doubles) |
  | Event Title Sponsor | 4 | $500; Hogwild Huck $1,000 | Business name in the event title |
  | Hole Sponsor | 18 | $200/yr | FDGA-owned sign on a hole at all four events (not permanent course signs, which need City approval) |
  | Friend of FDGA | unlimited | $100 or in-kind | Name on the site |

- Sales plan Brady agreed to: pitch Nov–Jan before the Ice Bowl; December recap to each sponsor;
  current sponsors get first right to renew. Promises FDGA must actually deliver: logo on tags,
  monthly feature posts, 18 event hole signs, the recap.
- Decided against: yearly T-shirt sponsorship (Brady said drop it), the old Ace/Eagle/Birdie tiers,
  and showing Brady's phone number (removed; the form replaced it).

## Routine updates

- **"Next up" strip** (top of `index.html`): still shows Darkside of the Disc, Nov 14, 2026.
  Change it after each event (next would be the 2027 Ice Bowl once it has a date and sign-up link).
- **Event links:** each event card links to that year's Disc Golf Scene page; update yearly.
- **New sponsor:** add a logo to `images/sponsors/` (resize to ~800px wide) and a card to
  "Current Sponsors" in `sponsors.html` and the sponsors section of `index.html`.
- **Packet year:** the packet says 2027; roll it forward each fall.
- When changing CSS or JS, bump `?v=N` on its tag in **both** HTML files (currently
  `style.css?v=6`, `main.js?v=2`).
- Workflow: edit, commit, push to `main`; live in about a minute. Verify with
  `curl -s https://www.fayettevillediscgolf.com/ | grep ...`.
