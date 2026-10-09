# Regional cyber security rollout — 9 October 2026

## Implemented in source

- Homepage: personal identity, Townsville, IT leadership and regional writing.
- `/consulting/`: commercial title, distinct H1, scope and provider questions, links to evidence and Suburban Secure.
- `/cyber-security/`: curated hub in the main navigation.
- Existing Townsville landscape article: original URL retained, links to incidents, careers, hub and regional guides added. Its original September source review is not represented as an October recheck.
- `/cyber-security/cairns/`, `/cyber-security/mackay/`, `/cyber-security/rockhampton/`: distinct editorial guides with dated public sources and explicit limits on the incident evidence.
- `/cyber-security/incident-tracker/`: eight Cyber Watch entries with stable row anchors, dates and date meanings, evidence status, original sources and article links. CSV generated from the same data at `/cyber-security/incidents.csv`.
- `/media/`: photograph, 100-word biography, longer biography, topics, research and contact route. No invented interviews, endorsements or clients.
- Cyber articles: links to the hub, tag/metadata-selected regional guides and tracker. Profile, homepage and consulting links connect the research to the person and services.
- Existing `https://www.nickosullivan.id.au/#nick` identity preserved. ProfilePage now connects homepage, About and Media to it, with supported credentials. The existing plugin already attaches it to article authors; Service markup already names the business and founder.

## index.html investigation

Before changes, direct HTTP checks on 9 October 2026 found:

| URL | HTTP result | Canonical |
| --- | --- | --- |
| `https://www.nickosullivan.id.au/` | 200 | `https://www.nickosullivan.id.au/` |
| `https://www.nickosullivan.id.au/index.html` | 200 | `https://www.nickosullivan.id.au/` |

The duplicate was accessible, but the canonical was already correct. This does not establish whether Google indexed both separately. Authenticated Search Console URL Inspection is required to see Google's selected canonical.

`webroot-htaccess` now redirects an explicit client request for `/index.html` to the HTTPS www root with HTTP 301, preserving query parameters. The `THE_REQUEST` condition avoids redirecting Apache's internal DirectoryIndex lookup, which would loop. `index.html` also explicitly declares `permalink: /`.

The rule is for the Apache deployment behind the site's proxy. GitHub Pages does not execute `.htaccess`; if hosting moves entirely to GitHub Pages, configure the equivalent redirect at the proxy/CDN. Do not replace the physical index file with a redirect page or block `/index.html` in robots.txt.

References: [Google canonicalisation guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [URL Inspection](https://support.google.com/webmasters/answer/9012289), [Apache rewrite guidance](https://httpd.apache.org/docs/2.4/rewrite/remapping.html).

## Build, validate and publish

```bash
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
bundle exec ruby bin/check-regional-seo
python3 bin/check-home-redirect
```

Publish through the existing documented workflow when ready:

```bash
bin/publish-local --skip-commit
```

Then check the live root, `/index.html`, `/index.html?utm_source=redirect-check`, the new hub and sitemap. Expect 200 for the root and new pages, 301 to the root for the explicit index path, and the query preserved. Inspect both homepage variants in Search Console, record Google's selected canonical and request indexing of the canonical homepage and new hub. A live HTTP check cannot reveal Google's chosen canonical or promise when recrawling will happen.

## Maintaining the research

The tracker is an index of dated reporting, not a live incident feed. Edit `_data/cyber_incidents.yml` when adding or updating a Cyber Watch article. Use one entry per incident. Preserve partial dates and date meanings, distinguish an incident from attribution/data-theft claims, and separate local organisations from national services with regional relevance. When rechecking an entry, update its `as_of` date only after reviewing the evidence and update the linked article where needed. Keep a correction note for material changes.

Use `cyber_regions: [townsville, cairns, mackay, rockhampton]` selectively in post front matter. The shared include also recognises matching region tags. Do not assign every region just to generate links.

The regional guides cite primary economy and training sources. They are not interviews, local audits or measurements of city security. Revisit course delivery before describing an intake as open. Keep Rockhampton labelled Central Queensland.

## Monthly scorecard

Use `docs/regional-seo-scorecard.csv` as a blank template, one row per query and observed page. Keep raw exports under the already-excluded `assets/data/blog-stats/` directory. Do not publish personal enquiry data.

1. Choose complete calendar months (or equal 28-day periods) and record exact start/end dates, property, search type, country and device filters. Keep filters consistent. Record export date because recent data may be incomplete.
2. For each query, apply an exact query filter in Search Console, then export its Pages table. Separate Queries.csv and Pages.csv totals do not establish a query-to-URL relationship.
3. Record clicks, impressions, CTR and average position for each observed URL. Calculate CTR from clicks/impressions. Do not average percentages or position rows without their appropriate weighting.
4. Compare the observed URL with the intended page. More than one URL for a query is a prompt to investigate intent and movement over time, not automatic proof of cannibalisation. Keep strengthening a page whose visibility is improving.
5. Record qualified enquiries separately as an outcome; rankings alone are not consulting results. No analytics conversion event or account integration has been created by this rollout.

The earlier 28-day export is documented in `docs/search-performance-2026-09-27.md`. It is not a current monthly scorecard. Blank cells in the new template mean unmeasured, not zero.

## Next 90 days

- After publication: complete URL Inspection and record a fresh query/page baseline. Review new pages for reader feedback and factual corrections.
- First month: recheck incident notices, invite public-source contributions, and use the Media page and tracker for relevant editorial pitches. Drafts are in `docs/regional-cyber-outreach.md`; none have been sent or posted.
- Second month: seek substantive conversations with regional practitioners, training providers and employers. Ask ACS chapter/event organisers and university alumni teams whether a regional research talk or profile is useful. Any biography should link to the personal profile; services belong on Suburban Secure. Record permission before quoting interviews.
- Third month: compare equal Search Console periods, improve the pages readers use and plan the year-end review. Seek earned citations to useful research, not reciprocal-link schemes or purchased bulk links.

## Annual assets

- **Regional Queensland Cyber Security Review 2026:** prepare after the year closes. Explain collection scope and missing data; do not extrapolate the tracker into attack rates or total losses. Separate changes in coverage from changes in incidents.
- **North Queensland Cyber Jobs Report 2026:** build on the existing 2025–26 research with a stated observation period, deduplication method and role/location definitions. Archived ads are not live vacancies.
- **Townsville Cyber Security Landscape 2027:** refresh the existing cornerstone URL with verified course, employer and coordination information. Preserve dated history where it explains a change.

These require future evidence. They have not been fabricated or published early as completed annual reports.

## Validation completed

- Production Jekyll build with strict front matter parsing.
- Core-page canonical URLs, descriptions, single H1, local links and fragments, sitemap entries and indexability checked by `bin/check-regional-seo`.
- All 62 article author entities point to the existing Person ID; the homepage, About and Media profiles and consulting founder use the same identity.
- Eight tracker rows and CSV entries match, including evidence labels, account dates and stable citation anchors.
- Ten requests against an isolated Apache instance pass, covering the index redirect, query preservation, internal DirectoryIndex handling, canonical host/scheme and the existing article redirect. No production server configuration was changed by this test.
- Chromium checks on eight pages at 390px and 1440px pass: visible page headings, no page-wide horizontal overflow, and a keyboard-scrollable incident table. Homepage and tracker screenshots were visually reviewed.
- `git diff --check` passes.

These are local validation results. They do not mean the site has been deployed or that Google has crawled or selected a canonical after publication.
