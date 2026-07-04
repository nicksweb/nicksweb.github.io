# Publishing www.nickosullivan.id.au

This repository is the source for `www.nickosullivan.id.au`.

The local publishing helper can copy the generated `_site` directory to a configured webroot. By default this is set for the current server, but it can be overridden with:

```bash
NICKOSULLIVAN_WEBROOT=/path/to/webroot
NICKOSULLIVAN_BACKUP_ROOT=/path/to/backups
```

Example:

```bash
NICKOSULLIVAN_WEBROOT=/srv/www/example bin/publish-local --skip-commit
```

## Update the About or Skills Page

Edit:

```bash
_tabs/about.md
_tabs/skills.md
```

Then run:

```bash
cd /path/to/nicksweb.github.io
bin/publish-local -m "Update about and skills" --push
```

If GitHub credentials are not available on the server, omit `--push` and push later from a machine that has access:

```bash
git push origin main
```

## Add a New Article

Create a draft post:

```bash
cd /path/to/nicksweb.github.io
bin/new-post "Practical cyber security notes for small organisations"
```

Edit the generated file in `_posts/`, then publish:

```bash
bin/publish-local -m "Add cyber security article" --push
```

## Local Publish Only

Build and publish to Apache without committing:

```bash
bin/publish-local --skip-commit
```

Build and commit/push without publishing to Apache:

```bash
bin/publish-local --skip-publish -m "Update site content" --push
```

Trigger GitHub Actions even when there are no content changes:

```bash
bin/publish-local --skip-publish --trigger-pages
```

## GitHub Pages Build

This repository also has a GitHub Actions workflow at:

```bash
.github/workflows/pages-deploy.yml
```

When changes are pushed to `main`, GitHub Actions builds the Jekyll site and pushes the generated static site to the `gh-pages` branch.

To use GitHub Pages:

1. In GitHub, open `nicksweb/nicksweb.github.io`.
2. Go to **Settings > Actions > General**.
3. Under **Workflow permissions**, allow **Read and write permissions**.
4. Go to **Settings > Pages**.
5. Set **Build and deployment** to deploy from a branch.
6. Select branch `gh-pages` and folder `/ (root)`.
7. Push to `main` and check the workflow under **Actions**.

If you need to manually trigger the GitHub Pages workflow without changing content:

```bash
bin/publish-local --skip-publish --trigger-pages
```

The local publish script is still useful when the site is served directly by a web server rather than only by GitHub Pages.
