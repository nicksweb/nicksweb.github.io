# Townsville cyber security articles — editorial notes

Prepared 14 September 2026. Both articles were moved from drafts into `_posts/` for publication on the same day, then revised the same evening with a second research pass, then split the same night into three articles.

## Third-pass restructure (14 September 2026, night): split into three articles

Following editorial feedback (the piece was trying to be a historical record, an SEO landscape piece and an opinion piece at once), the personal-site article was split in two:

- `_posts/2026-09-14-townsville-cyber-security-hub-what-happened.md` (unchanged URL/title) — tightened to a strict primary-source standard, cut from ~2,750 to ~1,000 words of article text (excl. bibliography). Cryptoloc, Cyber Wardens, UniSC, TAFE/JCU training detail, ACS/jobs/commercial-market material and the AI-workshop mention were all removed and moved to the new article. Two new sources were added: AustCyber's own archived (Wayback Machine) job listing for the Townsville node manager role — a genuine two-year, $120–145k pro rata contract with explicit "evaluation and reporting requirements" — and Stone & Chalk's 2022 sector plan, which confirms Townsville was still listed as one of three Queensland nodes that year. An unverifiable ARM Hub "letter of support" citation suggested during planning was dropped: the source PDF no longer exists (ARM Hub rebuilt its site) and could not be confirmed via Wayback Machine (rate-limited during this session). "Promised" was changed to "announced" throughout.
- `_posts/2026-09-14-cyber-security-townsville-training-jobs-businesses.md` (new) — the current-landscape piece: training (TAFE, JCU, QFS/UniSC microcredentials), jobs and the professional community, the SPNQ/Cryptoloc/Cyber Wardens program-churn story in full, the commercial market (NQIT, Q10, TCC ransomware), and a Jenny Hill → Troy Thompson → Nick Dametto mayoral-transition frame (verified: Hill mayor 2012–Mar 2024; Thompson Mar 2024, resigned 26 Sep 2025 after a credentials review; Dametto won the by-election, sworn in 24 Nov 2025 as the city's 48th mayor). Includes a first-person disclosure that the author knows, through his professional network, North Queensland IT professionals who have completed TAFE Certificate IV cyber units at Pimlico — labelled explicitly as personal knowledge, not public documentation, consistent with the site's primary-source standard for everything else.

Suburban Secure's guide was trimmed to match: its "check older program names" section now summarises rather than re-documents the Cryptoloc/Cyber Wardens/SPNQ detail, linking to the new nick article for the full account, and its TAFE paragraph carries the same "known through the author's network" caveat. Both nick articles cross-link to each other and to the Suburban Secure guide; the guide links to both nick articles.

## Second-pass revision (14 September 2026, evening)

New evidence changed the SPNQ and Queensland-programs sections: AustCyber's 2021 Home Affairs submission (funding model), SPNQ's own LinkedIn updates (final event 24 June 2026, "public programs and events have now concluded"), the Cryptoloc contract's termination (Queensland Estimates, 8 August 2025), the Cyber Wardens program's closing notice (funding ended 31 July 2026, COSBOA delivery ceased 11 September 2026), the UniSC microcredential expansion ($11.5m, July 2026), and JCU's confirmation that its Bachelor of Cybersecurity is Singapore-only (the Townsville-relevant degree is the Bachelor of Information Technology). Both companion articles were updated with `last_modified_at` and an inline update note. All of the above were independently re-verified before republishing: the Cyber Wardens redirect, the SPNQ LinkedIn quotes (fetched verbatim), and the Cyber Wardens end dates (corroborated via Cyber Daily and SmartCompany reporting) all checked out unchanged.

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
