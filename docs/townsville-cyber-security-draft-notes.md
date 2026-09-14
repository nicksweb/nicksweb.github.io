# Townsville cyber security articles — editorial notes

Prepared 14 September 2026. Both articles were moved from drafts into `_posts/` for publication on the same day.

- Personal site: `_posts/2026-09-14-townsville-cyber-security-hub-what-happened.md` — approximately 2,000 words plus a 20-entry bibliography, following the site's author/date reference style.
- Suburban Secure (relative to the personal-site repository root): `../suburbansecure.au/_posts/2026-09-14-cyber-security-help-townsville-small-business.md` — approximately 1,400 words, with sources linked throughout and the existing `body:` front-matter format required by its post layout.
- Images reuse existing assets: Castle Hill and the city for the personal article; the illustrative workshop/laptop image for Suburban Secure.

## Editorial decisions

The material supports the end of AustCyber's Commonwealth contract in June 2024 and the wider Industry Growth Centres program in December 2024. It does not establish a precise Townsville-node closure date, the termination of every node nationwide, or a formal local successor.

The SPNQ funding passage attributes the announced scaling-down to former CEO Cassandra Cazzulino's public statement. The drafts do not describe SPNQ as completely closed. A live website and advertised 2026 projects do not establish current staffing, completed delivery or ongoing service availability.

The $1.5 million City Deal figure is a Council commitment to SPNQ; the $298,986 Regional Enablers figure is an award for a defined sustainability/circular-economy program. They are not added together or attributed to the cyber node. Unverified Townsville-specific totals and the pasted material's media-reported recurrent funding totals were omitted.

TAFE's current domestic Certificate IV course page still mentions Townsville (Pimlico) in campus-selection information. No dated Pimlico classroom intake was identified in the offerings reviewed. The drafts describe that uncertainty and link to the course directly; the international timetable and third-party registration listings are not used to infer withdrawal. Online options are advertised. The QFS microcredential is described as an EOI-based opportunity with selection and delivery conditions, not an unconditional enrolment offer.

The ACS event took place on 1 October 2025. The previously promoted small-business workshop was scheduled for 8 September 2026, a past date. No claim is made to have attended the September event or confirmed its delivery.

## Questions that could strengthen a later revision

No organisations were contacted and no interview responses are implied.

1. Council / Queensland Government / AustCyber: What agreement covered the Townsville node, when did it end or change, and who assumed its functions?
2. Council / Queensland Government: What node-specific funding and expenditure, outputs and outcome reports can be released?
3. SPNQ: What is the current operating position, and which programs, staff and services continue through the transition?
4. TAFE Queensland: Is there a confirmed face-to-face Pimlico intake, how many local cyber cohorts have run since 2020, and what future delivery is planned?

## Preview and publication

Run these commands from their respective repositories:

```bash
JEKYLL_ENV=production bundle exec jekyll build --destination /tmp/townsville-cyber-drafts-preview/nick
JEKYLL_ENV=production bundle exec jekyll build --destination /tmp/townsville-cyber-drafts-preview/secure
```

The articles have explicit permalinks and reciprocal links to their public URLs. Keep those permalinks to preserve the reciprocal links. The publication filenames and front-matter dates are 14 September 2026. Recheck time-sensitive service and course information when revising the articles later, and update access dates as appropriate. Each site's `bin/publish-local` helper handles production builds, webroot backups and local publication.

The builds above are local previews. They do not publish to either webroot.

## Validation completed

Both Jekyll preview builds passed. The rendered articles' 44 internal links, anchors and image references resolved, including both reciprocal links. Desktop and 390-pixel mobile previews were inspected; the Suburban Secure quick-reference section uses a list to avoid the overflow caused by a three-column table. During drafting, normal Jekyll processing was verified to exclude the unpublished drafts.

External sources were checked through web retrieval and an HTTP pass. Five source URLs returned HTTP 403 to the automated HTTP check (the two Queensland innovation pages, JCU's course page and the two Council announcements); their relevant text was available through the web research tool. Those responses are access restrictions, not verified missing pages. Do not describe the external-link check as an unconditional pass.
