# Nicholas O'Sullivan Personal Site

This repository contains the Jekyll source for [www.nickosullivan.id.au](https://www.nickosullivan.id.au).

The site uses the [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) Jekyll theme and is published as a static site.

## Common Editing Tasks

Update profile pages:

```bash
_tabs/about.md
_tabs/skills.md
```

Add a new article:

```bash
bin/new-post "Article title"
```

The new post will be created in `_posts/` with the current date and a URL-friendly slug.

## AI-readable site guide

`llms.txt` provides a curated overview of Nicholas's profile, writing topics,
related businesses and archived projects. Jekyll renders it as plain text at
`/llms.txt`, using the canonical URL from `_config.yml`. Each HTML page links to
the guide through `_includes/metadata-hook.html`.

Review the guide when the site's focus, key articles or brand relationships
change. Keep it concise, use published sources for descriptions, and distinguish
active services from archives. The posts listing, feed and sitemap provide
ongoing discovery without adding every article to this file. Check that all
internal links resolve in `_site/` after building.

## Consulting and contact

`_tabs/consulting.md` is the service and contact page at `/consulting/`, with
redirects from `/contact/` and `/consult/`. Service descriptions, the booking URL,
ABN and encoded email are maintained in `_data/consulting.yml`. The descriptions
also populate the Service structured data in `_includes/consulting-schema.html`.

The page copy is Markdown; `_layouts/consulting.html` provides the page wrapper
and `_includes/consulting-email.html` holds the interactive email controls.

`assets/js/contact.js` reveals the email only after a visitor presses the button,
and supports copying it. Base64 is a deterrent to basic email scraping, not
encryption or protection against determined bots. Keep public contact links
pointing to this page instead of exposing the address in HTML, feeds or `llms.txt`.

## Build Locally

Install dependencies and build:

```bash
bundle install
JEKYLL_ENV=production bundle exec jekyll build
```

Preview locally:

```bash
bundle exec jekyll serve
```

## Publishing Scripts

This repo includes helper scripts for the regular publishing workflow.

Build and publish to the configured local webroot:

```bash
bin/publish-local --skip-commit
```

Build, publish, commit and push:

```bash
bin/publish-local -m "Update personal site" --push
```

Build and push source changes without publishing to the local webroot:

```bash
bin/publish-local --skip-publish -m "Update site content" --push
```

Publish the current build directly to the `gh-pages` branch:

```bash
bin/publish-gh-pages "Publish current Jekyll build"
```

Trigger GitHub Actions / GitHub Pages even when there are no content changes:

```bash
bin/publish-local --skip-publish --trigger-pages
```

The local publishing script supports these environment variables:

```bash
NICKOSULLIVAN_WEBROOT
NICKOSULLIVAN_BACKUP_ROOT
```

See [docs/publishing.md](docs/publishing.md) for more workflow notes.

## GitHub Pages

The workflow in `.github/workflows/pages-deploy.yml` builds the Jekyll site on pushes to `main` and publishes the generated static site to the `gh-pages` branch.

Repository settings needed:

- **Settings > Actions > General > Workflow permissions**: read and write.
- **Settings > Pages**: deploy from branch `gh-pages`, folder `/`.

## Repository Structure

```text
_posts/       Articles
_tabs/        Main profile/navigation pages
assets/       Images and static assets
bin/          Local workflow helpers
docs/         Publishing notes
```

## License

Site content is copyright Nicholas O'Sullivan unless otherwise noted.

The Chirpy theme is distributed under its own upstream license.
