# AGENTS.md

## What this project is

A single-page, keyboard-driven slide deck for Aljabar Linear lecture 6 (Bab VI,
Ruang Hasil Kali Dalam), built by group 2B. It is a pure static site: HTML, CSS,
vanilla JS, and photos. No build step, no framework, no CDN assets — it must
keep working with no network connection.

## Source of truth

`docs/ALIN-6 2AB Modif Nj.pdf` is the authoritative lecture material ("ALIN-6 2AB
Modif Nj"). Slide text, notation, examples, and exercise numbering follow that
document. When the deck and the PDF disagree, the PDF wins — fix the deck.
Do not invent theorems or numbers that are not in the PDF or derivable from it.
Example 7 and 8 were recomputed so the arithmetic comes out clean; keep them
consistent with each other if you touch them.

## Layout

```
server.ts             Deno static file server, local preview only
deno.json             tasks, fmt config, Deno Deploy config
public/index.html     all 24 slides, in order
public/styles.css     styling
public/deck.js        navigation: keyboard, buttons, swipe, TOC
public/assets/anggota/*.jpg  member photos, 3:4 (720x960)
docs/                 source material (PDF), not served
```

`public/` is the deploy artifact. Never put source material or scratch files
there; anything inside is publicly downloadable.

## Editing slides

- Each slide is `<section class="slide" data-title="...">` in
  `public/index.html`. `data-title` feeds the table of contents and the browser
  title, so keep it short and unique.
- Add `class="frag"` to elements that should appear one keypress at a time.
- Math is hand-written HTML (`<sup>`, `<sub>`, `<span class="math">`), not
  LaTeX. There is no MathJax/KaTeX; do not add a renderer.
- The TOC is generated in `public/deck.js` from the slides, never hardcode it.
- All user-visible copy is Bahasa Indonesia (formal, academic). Keep the
  existing terms: ruang hasil kali dalam, ortogonal, ortonormal, proyeksi,
  Gram-Schmidt.

## Commands

```sh
deno task start                 # http://localhost:8000
deno task dev                   # same, with --watch
deno fmt                        # lineWidth 100, semicolons on
deno lint
deno check server.ts
```

Run `deno lint` and `deno check server.ts` before committing. Lint skips
`public/` because `deck.js` is browser code, not Deno runtime code.

`deno fmt` currently rewrites the whole of `public/index.html` (the hand-written
indentation is not fmt-stable). Do not run it across `public/` as part of an
unrelated change; it is fine for `server.ts` and small new files.

## Deploy

Auto-deploy uses the Deno Deploy GitHub integration, not GitHub Actions: the
app `present-alin` in org `symful` is connected to this repository, so a push
to `main` builds and releases the site. Org, app, and the static `./public`
runtime all come from the `deploy` section of `deno.json`; change them there.

Live site: https://present-alin.symful.deno.net

`server.ts` is only for local preview and is not used in production.

Manual deploy, when needed:

```sh
deno deploy --prod
```
