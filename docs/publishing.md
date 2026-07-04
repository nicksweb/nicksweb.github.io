# Publishing www.nickosullivan.id.au

This repository is the source for `www.nickosullivan.id.au`.

The live Apache site is served from:

```bash
/var/www/html/nickosullivan.id.au
```

The Jekyll source is kept at:

```bash
/home/localadmin/src/nicksweb.github.io
```

## Update the About or Skills Page

Edit:

```bash
_tabs/about.md
_tabs/skills.md
```

Then run:

```bash
cd /home/localadmin/src/nicksweb.github.io
bin/publish-local -m "Update about and skills" --push
```

If GitHub credentials are not available on the server, omit `--push` and push later from a machine that has access:

```bash
git push origin main
```

## Add a New Article

Create a draft post:

```bash
cd /home/localadmin/src/nicksweb.github.io
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

The local Apache publish script is still useful because this server serves the site directly from `/var/www/html/nickosullivan.id.au`.
