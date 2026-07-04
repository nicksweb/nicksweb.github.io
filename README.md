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
