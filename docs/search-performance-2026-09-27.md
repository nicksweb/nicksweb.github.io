# Search performance baseline for the 27 September 2026 article

Source: the user-supplied CSVs in `assets/data/blog-stats/`, analysed on 27 September 2026. `Filters.csv` specifies Web / Last 28 days; the actual dates in `Chart.csv` are 28 August–24 September 2026 inclusive. Daily date labels are Search Console's Pacific Time dates. The page export includes both `www.nickosullivan.id.au` and `blog.nickosullivan.id.au`.

Article: `_posts/2026-09-27-nick-nicholas-townsville-google-search-progress.md`.

## Calculations

Use `Chart.csv` for property totals, summing clicks and impressions. Calculate CTR as total clicks / total impressions, not an average of daily percentages. Calculate growth as (later / earlier - 1) × 100.

| Period | Clicks | Impressions | Recalculated CTR |
| --- | ---: | ---: | ---: |
| Full 28 days | 139 | 10,133 | 1.37% |
| 28 August–10 September | 42 | 1,603 | 2.62% |
| 11–24 September | 97 | 8,530 | 1.14% |
| 28 August–3 September | 20 | 783 | 2.55% |
| 4–10 September | 22 | 820 | 2.68% |
| 11–17 September | 73 | 7,518 | 0.97% |
| 18–24 September | 24 | 1,012 | 2.37% |

Second half versus first: clicks +130.95%; impressions +432.13%. Final week versus first: clicks +20%; impressions +29.25%. Maximum daily impressions: 2,679 on the export's 12 September row.

## Evidence and limits

- The Great Northern Hotel article has 6,849 page impressions and 55 clicks (39.57% of the 139 clicks). The timing and totals support discussing a news-related spike, but the files have no page-by-day breakdown.
- Neither exact `nick townsville` nor `nicholas townsville` appears in `Queries.csv`. Do not invent average positions, growth rates or click counts for them.
- The user reports Nicholas on page one and Nick on page two. The Nicholas screenshot shows the original August article directly below the brewery among the visible organic results. The Nick screenshot is cropped and does not display pagination; its page-two placement comes from the user's report.
- The AI Overview screenshot includes Nicholas O'Sullivan and cites this website. It demonstrates an observed appearance, not a permanent rank or independent endorsement. `Search appearance.csv` contains a header only, so no AI-specific traffic can be calculated.
- Query/page tables contain whole-period totals. They cannot establish per-query trends or map each query to a particular page.
- Query rows total 39 clicks / 4,663 impressions. They are not a substitute for the daily chart totals; omitted queries prevent a complete query accounting.
- Page rows total 139 clicks / 10,437 impressions. Page impressions are counted differently from property impressions. Do not claim the hotel has 6,849 / 10,133 of property impressions.
- The user supplied and confirmed `https://about.me/nicholasosullivan`. The web tool could not retrieve the profile, so the article does not quote its contents. The recent update cannot be credited with causing the reported gains.
- Raw CSVs remain local working inputs and are excluded from Jekyll output by `_config.yml`; the article presents selected aggregates.

## Next comparison

Compare another full 28-day Web export, retaining its actual date range and scope. Look separately at site-wide growth, the hotel story's news spike, relevant technology articles and name-query evidence. Record search screenshots as dated observations, not population-wide rankings.

Google references: [report overview](https://support.google.com/webmasters/answer/7576553), [position and impressions](https://support.google.com/webmasters/answer/7042828), [discrepancies and time zones](https://support.google.com/webmasters/answer/17010575), [AI features](https://developers.google.com/search/docs/appearance/ai-features).
