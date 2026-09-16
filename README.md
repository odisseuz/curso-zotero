# Curso CIPET II — Zotero Reference Management Course

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Code: MIT](https://img.shields.io/badge/code-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Leia em português:** [README.pt-BR.md](./README.pt-BR.md)

Open-source, multilingual mini-course on bibliographic reference management with **Zotero**, prepared for the II CIPET.

**Live course:** <https://odisseuz.github.io/curso-zotero/>

## Course contents

- **Module 1** — Introduction, concepts and planning; installation and configuration.
- **Module 2** — Inserting items into Zotero; metadata, tags and folder organization.
- **Module 3** — Integration with text editors and references.
- **Extra** — Additional resources and acknowledgements.

## Languages

Portuguese is the default locale and is served at `/`. The other locales use path prefixes: `/es/` (Spanish) and `/en/` (English). Every page added under `src/content/docs/` needs a counterpart in the `es/` and `en/` folders to appear in those languages.

## Local development

Requires Node.js 22 or newer.

```bash
git clone https://github.com/odisseuz/curso-zotero.git
cd curso-zotero
npm install
npm run dev
```

Because `base` is set to `/curso-zotero` in `astro.config.mjs`, the dev server responds at <http://localhost:4321/curso-zotero/> — not at the bare `/`.

To build and inspect the production output:

```bash
npm run build    # generates dist/
npm run preview  # serves dist/ locally
```

### Nix environment (optional)

The repository ships a `shell.nix` with Node.js 22, `gh`, `git` and the Zed editor. With Nix installed:

```bash
nix-shell
```

## Project structure

```text
astro.config.mjs       # Starlight config: locales, sidebar, site and base
src/content/docs/      # Portuguese content (default locale, served at /)
src/content/docs/es/   # Spanish content (served at /es/)
src/content/docs/en/   # English content (served at /en/)
src/assets/            # Images referenced by the pages
public/                # Static files copied verbatim to the site root
```

## Deploy

Handled automatically by `.github/workflows/deploy.yml` on every push to `main`, publishing to GitHub Pages via `withastro/action`.

## License

- **Content and images:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see [LICENSE-CONTENT.md](./LICENSE-CONTENT.md).
- **Source code:** [MIT](./LICENSE).
