# Funkesound rebuild — handover

Written at the end of a Cowork session that lost its connection to the repo.
Everything below is what the next session needs in order to pick up without
re-deriving it. Read this first, then `docs/content-strategy.md` and
`docs/blog-writer-skill/SKILL.md` before writing any content.

**Last pushed commit:** `ceb087b` — *Publish day 3: TV Says No Signal?*
**Delivered as a patch, not yet in the repo:** day 9 (see "Apply this first").

---

## Apply this first

The Cowork session ended one commit ahead of `origin/main` and could not push.
That commit is supplied as a patch alongside this file.

```bash
git checkout main
git pull
git am --3way 0001-Publish-day-9-TV-Stand-vs-Wall-Mount-Which-Is-Better.patch
git am --3way 0002-Add-blog-QC-tooling-and-the-session-handover.patch
```

`0001` is the day 9 blog post: an entry in `blog.ts`, one status flip in
`blog-schedule.ts`, and two WebP images. The patch was exported with
`--binary`, so the images come with it. `0002` adds the QC tooling described
below plus this document.

If `git am` refuses for any reason, the day 9 post entry is also supplied
as `day9-entry.ts` — paste it as the first element of the `BLOG_POSTS`
array and set day 9 to `status: 'published'` in `blog-schedule.ts`. The two
images are supplied separately; they go in
`artifacts/funkesound/public/media/`.

After applying, verify and push:

```bash
CF_PAGES_BRANCH=main ./build-cloudflare.sh
node scripts/qc/blog-qc.mjs tv-stand-vs-wall-mount   # expect 18/18
git push origin main
```

---

## What this project is

A rebuild of funkesound.com — Steve Funke's TV antenna, TV wall mounting and
home theatre installation business in Melbourne and on the Mornington
Peninsula. It replaces a WordPress site whose URLs are still in Google's
index, so URL continuity matters more than anything else in the build.

**Stack:** Vite 7, React 19, TypeScript 5.9, Tailwind v4, shadcn/ui, wouter,
framer-motion. pnpm workspaces, pnpm 10.28.0, Node 22.

**Hosting:** Cloudflare Pages. Build command `./build-cloudflare.sh`, output
`artifacts/funkesound/dist/public`. Functions live in `/functions` at the repo
root, deliberately outside the output directory.

**Rendering:** every route is pre-rendered at build time with `renderToString`
and hydrated on the client. There is **no SPA fallback** — a `/* /index.html 200`
rule would return HTTP 200 for unknown URLs, which Google treats as a soft 404.
Unknown URLs serve `404.html` with a real 404 status. 484 routes currently
build.

---

## Things that will bite you

These each cost real debugging time once. They are written down so they only
cost it once.

**Flat files, not directories.** `scripts/prerender.mjs` writes `services.html`,
never `services/index.html`. Cloudflare Pages resolves exact file → `<path>.html`
→ `<path>/index.html`, then normalises toward whichever form it did *not* find.
With directories, `/services` answered with a 308 to `/services/`, contradicting
every canonical tag and sitemap entry. Do not "fix" this back.

**Legacy redirects need both slash forms.** WordPress served trailing slashes,
so that is the form in Google's index and in every inbound link. Cloudflare
matches `_redirects` literally. The generator in `prerender.mjs` emits both the
bare and the slashed form of each rule — all 13 legacy redirects were 404ing in
the exact form Google had indexed until this was fixed.

**`dist/public/index.html` is both the pre-renderer's template and its home-page
output.** Running `prerender.mjs` twice without a fresh `vite build` in between
fails, and the GA4 guard will throw a confusing "missing GA4 block" error. Always
run the full build.

**`build-cloudflare.sh` decides production from the branch,** not from `NOINDEX`
directly. Setting `NOINDEX=false` by hand does nothing — the script overwrites
it. To build as production locally: `CF_PAGES_BRANCH=main ./build-cloudflare.sh`.

**The GA4 tag is stripped from non-production builds.** It lives literally in
`artifacts/funkesound/index.html` between `<!-- GA4-START -->` and
`<!-- GA4-END -->` markers. `prerender.mjs` cuts the block out when `NOINDEX`
is true so preview deploys never report into the live property, and throws if a
production build is missing it. Do not remove the marker comments.

**Cloudflare dashboard settings that have caused problems.** Rocket Loader
rewrites `type="module"` and broke hydration — it is now off, leave it off.
Email Address Obfuscation rewrites `mailto:` links into
`/cdn-cgi/l/email-protection` — this is *on* by choice, so served HTML will not
byte-match the local build. Normalise that out before concluding anything from a
hash comparison.

**Deploys take roughly 90–150 seconds** and assets can 404 briefly while
propagating across PoPs. Poll rather than concluding failure from one request.

**Tailwind v4 dropped the Preflight `cursor: pointer` rule for buttons.** It is
restored explicitly in `src/index.css`. Do not remove it.

---

## Publishing a blog post

The editorial queue is `artifacts/funkesound/src/data/blog-schedule.ts`. Take the
lowest-numbered item still marked `'planned'` unless told otherwise.

1. **Decide whether to write at all.** Classify the intent, then check whether an
   existing URL already satisfies it. The choice is create / update / merge /
   redirect / expand. Two of the queue items turned out to be already-satisfied
   by rewritten legacy posts — see "Editorial queue" below.
2. **Research and verify every factual claim first.** Any claim about broadcast
   bands, regulation, standards, product specifications or building materials
   must carry its primary source. Open each URL and quote it accurately.
3. **Write** to the tier's word band. Voice, structure and the never-write list
   are in `docs/blog-writer-skill/SKILL.md`.
4. **Generate images.** Two minimum for standard tier, three for premium. All
   existing hero images are 1344×752 WebP at quality 82. Alt text describes the
   actual image.
5. **Add to `blog.ts`** as the first element of `BLOG_POSTS`, flip the schedule
   entry to `'published'`.
6. **Build, then QC:** `CF_PAGES_BRANCH=main ./build-cloudflare.sh` then
   `node scripts/qc/blog-qc.mjs <slug>`.
7. **Check the table at 320px and 375px** in a browser. Horizontal scrolling is
   not acceptable — most readers never find it.
8. **Commit, push, wait ~2 minutes, verify live.**

### QC tooling (`scripts/qc/`)

```bash
CF_PAGES_BRANCH=main ./build-cloudflare.sh
node scripts/qc/cfserve.mjs &            # Pages emulator on :5180
node scripts/qc/blog-qc.mjs <slug>
```

`cfserve.mjs` mirrors Cloudflare's asset resolution order including
`_redirects` and real 404s. An earlier, simpler version of it gave a false pass
on the trailing-slash bug because it only tried exact and `<path>/index.html`.

`blog-qc.mjs` runs 18 mechanical checks against the *built* page: title and
description length and uniqueness, canonical, indexability, GA4 presence,
complete BlogPosting and BreadcrumbList schema, single h1, heading-order skips,
external links opening safely, no competitor links, internal links resolving to
routes that were actually built, image files existing with alt text, and
`data-label` on every table cell after the first. It deliberately does not judge
intent, tone, or whether a source says what you claim it says.

### Blog conventions

- Posts live at the **root**, not under `/blog/` — `/tv-stand-vs-wall-mount`,
  not `/blog/tv-stand-vs-wall-mount`. Four legacy slugs are preserved exactly
  because they carry rankings: `top-performing-tv-antenna-models`,
  `expert-tv-wall-mount-installations`, `wall-mount-your-tv`,
  `tv-reception-issues`. **Never change these.**
- Every post links up to its parent hub: `/services/tv-antenna-installation`,
  `/services/tv-wall-mounting`, or `/services/home-theatre-installation`.
- Internal links go in the body where they are relevant, never stacked in the
  closing paragraph.
- Tables need `data-label` on every `<td>` after the first, matching that cell's
  column heading. Below 640px the stylesheet restacks each row as a card and
  uses those labels as headings; without them the mobile table is unreadable.
- External links carry `target="_blank" rel="noopener noreferrer"`.
- **Never link to Melbourne competitors** — Jim's Antennas, Australian Antennas,
  Antenna Plus, Melbourne TV Digital Antennas, Universal Home Theatre, or local
  installer blogs.

### Sources already opened and verified

Reuse these rather than re-deriving them. Quotes are verbatim.

| Source | Verified content |
| --- | --- |
| [ACMA — bands for broadcasting services](https://www.acma.gov.au/bands-broadcasting-services) | "VHF television channels 6 to 12: 174 to 230MHz (inclusive)"; "UHF television channels 27 to 51: 520 to 694MHz (inclusive)" |
| [ACMA — TV reception problems and fixes](https://www.acma.gov.au/tv-reception-problems-and-fixes) | "Antennas generally only last 10 to 15 years."; "Re-tune your TV or set-top box with a manual tune, rather than an 'auto-scan', using the frequencies provided on mySwitch."; "Don't use a connector or splitter to split the signal from your antenna to 2 or more TVs – it will reduce the signal level and may reduce reception quality."; "Use a signal booster or amplifier only if necessary. They can overload your TV receiver with TV or mobile phone signals."; ducting is "when distant services interfere with local services during certain weather conditions. It is more common during warmer months and usually occurs (or is noticed) more often in the early evening." |
| [ACMA — work as a registered cabler](https://www.acma.gov.au/work-registered-cabler) | "To work as a cabler in Australia, you must be registered." |
| [mySwitch](https://myswitch.digitalready.gov.au/) | Per-address transmitter direction, predicted reception and frequencies |
| [ACCC — toppling furniture and televisions](https://www.productsafety.gov.au/products/home-living/furniture/toppling-furniture-and-televisions) | "Toppling furniture has killed at least 28 people in Australia since 2000 and causes nearly 20 injuries every week."; "Children under 5 years old are most at risk…"; "Consider wall-mounting your TV."; "Don't put TVs on furniture that isn't intended for this purpose, such as a chest of drawers."; "If you secure the TV to a piece of furniture, make sure the furniture is also secured to the wall." |
| [Energy Safe Victoria — Electrical DDIY](https://www.energysafe.vic.gov.au/electrical-ddiy-dont-do-it-yourself) | "Doing unqualified electrical work isn't only extremely dangerous, it's also illegal."; "Electrical work isn't a DIY job, even for small jobs such as changing power points or light switches." |
| [ESV — Certificates of Electrical Safety](https://www.energysafe.vic.gov.au/certificates-electrical-safety/certificates-electrical-safety-consumers) | Customer copy required; 30 days for non-prescribed work, 4 days for prescribed work once inspection is complete |
| [Standards Australia — Wiring Rules](https://www.standards.org.au/flagship-projects/wiring-rules) | AS/NZS 3000 is "the technical rules that help electricians design, construct and verify electrical installations" |
| [Consumer Affairs Victoria — renters making changes](https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/renters-making-changes-to-the-property) | "picture hooks or screws for wall mounts, shelves or brackets on exposed brick or concrete walls" cannot be unreasonably refused; renter must "restore the property to the condition it was in immediately before the changes were made, allowing for fair wear" or pay the reasonable cost |
| [Dolby — Atmos speaker setup](https://www.dolby.com/about/support/guide/dolby-atmos-speaker-setup/) | Meaning of the 5.1 / 5.1.2 notation; height speakers in-ceiling or upward-firing |
| [VESA — FDMI overview](https://www.vesa.org/wp-content/uploads/2010/12/FDMI-Overview.pdf) | Largest interface part covers 31" to 90" and up to 113.6kg |
| [EPA Victoria — residential noise](https://www.epa.vic.gov.au/residential-noise) | Prohibited hours for audio equipment audible in a neighbour's habitable room |
| [YourHome — glazing](https://www.yourhome.gov.au/passive-design/glazing) | Low-e glass carries a thin-film metal coating |

Note: `acma.gov.au` and `energysafe.vic.gov.au` refuse plain `curl` from some
sandboxes but fetch fine through a normal web-fetch tool. A curl failure there
is not evidence the URL is dead.

---

## Editorial queue status

Nine posts are live. `blog-schedule.ts` is now accurate — it was not, and two
corrections were made during the last session.

| Day | Title | Status |
| --- | --- | --- |
| 1 | TV Antenna Installation Cost in Melbourne | **Blocked** — Zed said hold off on pricing |
| 2 | How to Choose the Right TV Antenna | Published *as* `top-performing-tv-antenna-models` |
| 3 | TV Says No Signal? | Published — `/tv-no-signal-what-to-check` |
| 4 | Indoor vs Outdoor TV Antennas | Published |
| 5 | Fixed vs Tilt vs Full-Motion Mounts | Published |
| 6 | Home Theatre Installation Cost | **Blocked** — pricing |
| 7 | Soundbar vs Surround Sound | Published |
| 8 | How to Hide TV Cables | Published — `/hide-tv-cables-wall-mount` |
| 9 | TV Stand vs Wall Mount | Written, **in the attached patch**, not yet pushed |
| 10 | What Affects TV Antenna Reception in Melbourne? | **Next up** (premium, 1600–2000) |

Day 2 is the important one to understand: rather than create a new URL, the
legacy `top-performing-tv-antenna-models` post was rewritten under the title
"How to Choose a TV Antenna in Melbourne" with focus keyword
`choose TV antenna Melbourne`. That is the update-don't-create call the strategy
asks for. Do not now write a second article for that intent.

**Watch day 20** ("Melbourne TV Reception Problems: Causes, Blackspots and
Solutions", premium). The legacy `tv-reception-issues` post covers roughly that
ground and is weak — it still carries WordPress-era filler including a "Key
Takeaways" block and a garbled heading reading "Verification Successful Waiting:
Ensuring Proper Setup". The right move is almost certainly to rewrite that URL
into day 20 rather than create another one.

---

## Known issues, not yet fixed

Found by the QC sweep at the end of the session. None are urgent; all are real.

**`wall-mount-your-tv` has an h1 → h3 heading skip.** The post opens with
`<h3>Introduction</h3>` directly after the h1. That is an accessibility
violation on a live page and it survived the earlier site-wide heading fix
because it is inside legacy post body HTML rather than a component. Change it
to `h2`. Note Zed's standing instruction: **fixing heading order must not change
any font size.**

**`wall-mount-your-tv` has one image with no meaningful alt text.**

**Trailing-slash internal links in two legacy posts.** `wall-mount-your-tv`
links to `/projects/`, `/contact/`, `/blog/` and
`/digital-tv-antenna-installation/`; `tv-reception-issues` links to
`/digital-tv-antenna-installation/` and `/contact/`. All of them resolve — the
first three via a 308 and the legacy URL via a 301 — so nothing is broken, but
each one spends a redirect hop for no reason. Rewrite them to the unslashed
final destination.

**One unsafe external link.** `tv-reception-issues` links to
`https://www.acma.gov.au/tv-and-radio-reception-and-interference` without
`target="_blank" rel="noopener noreferrer"`.

**`http://www.funkesound.com` (plain HTTP) returns 522.** Fix by enabling
**Always Use HTTPS** in the Cloudflare dashboard under SSL/TLS → Edge
Certificates. This is a dashboard setting, not a code change.

**Optional, offered but never actioned:** promoting the CTA `h3` headings to
`h2` across all six service pages.

---

## Outstanding, needs a human

**Rotate the GitHub personal access token.** A PAT was pasted in plaintext into
the Cowork chat during the session. It was never committed — it lived only in
`.git/config` inside an ephemeral container that is now gone — but it is in the
chat log and should be treated as exposed. Rotate it.

**Search Console.** Zed is handling this himself. The verification meta tag is
live on the home page only, injected for the `/` route by `prerender.mjs` (see
`GOOGLE_SITE_VERIFICATION` in that file). **Leave it in place after verifying** —
removing it un-verifies the property.

**Solicitor review** of the privacy policy and terms of service.

**Confirm the Control4 / Crestron / Savant claims** on the remote programming
service page are accurate before that page gets promoted.

---

## Contact and business facts

Use these exactly; they have been corrected more than once.

- Email **steve@funkesound.com** — must carry a `mailto:` link everywhere it appears
- Phone **0414 685 502**
- Address **10 Sewell Ct, Frankston South VIC 3199**
- Funkesound is a **sole trader**; no ABN is required and none should be published
- Legal pages say **Funkesound**, not "Steve Funke"
- 20+ years, owner-operated, 59 reviews averaging 4.9
- GA4 measurement ID **G-X843HE0S88**. The old WordPress property was Universal
  Analytics `UA-58673196-1` and was deliberately not carried over — Google
  stopped processing UA hits on 1 July 2023 and deleted the data from July 2024

## Zed's standing preferences

- No AI-sounding words. "Elevate" was called out by name. It has to sound natural.
- Scope discipline: do what was asked, not the adjacent thing as well.
- Heading-order fixes must not change font sizes.
- Hold off on anything pricing-related until told otherwise.

---

## Contact form

`/api/contact` is a Cloudflare Pages Function at `functions/api/contact.js`,
plain JavaScript on purpose. It posts to the Resend REST API — note the field is
`reply_to`, not `replyTo`.

Environment variables: `RESEND_API_KEY` (required), `CONTACT_TO` and
`CONTACT_FROM` (optional, defaulting to `steve@funkesound.com` and
`Funkesound Website <noreply@funkesound.com>`).

Two anti-spam measures both return `{ok: true}` **without sending**, so bots
believe they succeeded: a `company` honeypot field, and a sub-three-second
`elapsedMs`. The customer confirmation email sends only after the enquiry
succeeds and can never fail the request.

Tests: `node tests/contact-function.test.mjs` — 32 cases, no network required.
