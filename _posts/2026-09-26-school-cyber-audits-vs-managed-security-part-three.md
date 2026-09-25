---
title: "Pricing cyber assurance and managed security for a school: a three-year comparison (Part 3)"
description: "Australian school cyber assessment and managed detection costs built from published prices, with a three-year cost model and a break-even test."
keywords: [school cyber security audit cost, penetration testing cost Australia, MDR pricing Australia, managed SOC cost schools, SIEM costs education, cyber security budget schools]
date: 2026-09-26 07:10:00 +1000
last_modified_at: 2026-09-26 08:40:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, procurement]
wrap_tables: true
---

*This is Part 3 of* Cyber security audits vs managed security: what Australian school boards need to know. *[Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}) explained the gap between assessment and response. [Part 2]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) covered governance and legal obligations.*

Sooner or later a business manager will ask what all of this costs, and whether the school is paying twice for overlapping services.

Reliable figures are harder to find than they should be. Many providers quote only after scoping, and published prices cover different scopes. So this post keeps two things separate:

- **Published evidence:** prices that suppliers and Microsoft publish, and cost data from ASD, IBM and the OAIC. Each one is linked.
- **My assumptions:** effort-day estimates and model inputs, labelled so you can replace them with your own numbers or with quotes.

All figures are **Australian dollars, excluding GST**, unless stated otherwise. Where a source publishes prices in US dollars, I have converted them at the [Reserve Bank of Australia rate](https://www.rba.gov.au/statistics/frequency/exchange-rates.html){:target="_blank" rel="noopener noreferrer"} for 25 September 2026: **A$1 = US$0.7019**.

## The example school

To keep the comparison meaningful, assume:

- a multi-campus school with approximately **1,000 managed endpoints**
- shared identity services, such as Microsoft 365 or Google Workspace
- a defined sample of campuses and cloud environments for assessment.

A department-wide or diocesan-wide engagement is a different exercise and needs separate scoping.

## Point-in-time assessment

### What published prices tell us

Assessment is mostly priced by effort. Two published Australian price points let us estimate a day rate:

- One Australian penetration testing firm [publishes fixed-fee packages](https://www.cliffside.com.au/testing-assurance/penetration-testing/pricing/){:target="_blank" rel="noopener noreferrer"} of $5,900 for three testing days, $9,500 for five and $18,500 for ten, ex GST, with retesting of critical and high findings within 90 days included. That works out to roughly **$1,850–1,970 per testing day**.
- Another Australian provider's [published pricing guide](https://vapt.com.au/blog/penetration-test-cost-australia/){:target="_blank" rel="noopener noreferrer"} gives an indicative **$8,000–18,000 for a cloud security review of one platform, based on 4–8 days of effort**. That implies about **$2,000–2,250 per day**.

So in the budget below I use a band of **$1,850–2,250 per day**. The day counts are **my planning assumptions** for a school of this size, not supplier figures. Ask each supplier to state its own day count for every component, which also makes proposals easier to compare.

| Component and assumed scope | Assumed days | At $1,850–2,250/day |
|---|---:|---:|
| Physical-access and wireless testing across two sampled campuses | 5–12 | $9,250–27,000 |
| Internal/external network and identity attack-path testing | 4–9 | $7,400–20,250 |
| Cloud posture review: one AWS, Azure **or** GCP environment | 4–8 | $7,400–18,000 |
| Microsoft 365 or Google Workspace tenant review | 3–5 | $5,550–11,250 |
| Governance, policies, privacy, supplier processes and maturity assessment | 5–11 | $9,250–24,750 |
| Consolidated reporting, board briefing and bounded retesting | 2–4 | $3,700–9,000 |
| **Total: one cloud platform plus core SaaS tenant** | **23–49** | **about $43,000–110,000** |
| **Total: AWS, Azure and GCP, plus core SaaS tenant** | **31–65** | **about $57,000–146,000** |

The cloud review row can be checked against the published $8,000–18,000 range above, and it lands close to it. The other rows depend on my day estimates, so treat them as a starting point for scoping, not a benchmark.

A few things to watch when comparing proposals:

- **Reporting and retesting may already be included.** The first published package above includes retesting, for example. Remove any overlap before adding component prices together.
- **Azure infrastructure and Microsoft 365 are different scopes.** So are Google Cloud and Google Workspace. A proposal that says "cloud review" should say which.
- **"Physical testing" needs a definition.** Inspecting access controls and attempting a physical intrusion require very different effort and approvals.
- **Sampling two campuses does not mean every campus was tested.** The report should say what was not examined.
- **Some costs sit outside this budget.** Travel, extensive application testing, large cloud estates, certification and remediation projects all add to it.

## Managed security services

### What published prices tell us

Managed detection and response pricing is less transparent than testing. Many providers only quote after scoping. One MDR vendor [publishes list prices](https://www.huntress.com/pricing){:target="_blank" rel="noopener noreferrer"} at a 100-unit example volume, with volume discounts above that:

| Published service (US list price, 100-unit example) | USD per month | AUD per month at RBA rate |
|---|---:|---:|
| Managed EDR, per endpoint | US$7.99 | about A$11.38 |
| Managed identity threat detection and response, per identity | US$3.60 | about A$5.13 |
| Managed SIEM, per log source | US$3.50 | about A$4.99 |

The same page says the price includes the vendor's 24/7 SOC, but **not deployment, integration or day-to-day operational management**, which partners provide.

Applied to the example school, managed EDR alone would cost about **A$11,400 a month** for 1,000 endpoints at the 100-endpoint rate, before volume discounts. That figure excludes identity monitoring, log sources, deployment and partner management.

Two school-specific points follow from how this is priced:

- **Identity pricing may count students.** A school can have far more student accounts than staff accounts. Ask whether per-identity pricing covers every account or only staff, and which accounts are actually monitored.
- **The cheapest visible endpoint price is not the operating budget.** Integration, partner management and response authority are often priced separately.

### SIEM costs need particular scrutiny

Log-based services can grow expensive quietly. Microsoft's [Sentinel billing documentation](https://learn.microsoft.com/en-us/azure/sentinel/billing){:target="_blank" rel="noopener noreferrer"} describes ingestion-based charging, commitment tiers, retention charges and additional infrastructure costs. Its [pricing page](https://www.microsoft.com/en-au/security/pricing/microsoft-sentinel/){:target="_blank" rel="noopener noreferrer"} describes commitment tiers from 100 GB a day, with savings of up to 52% compared with pay-as-you-go rates. It also describes a free ingestion allowance of up to 5 MB per user per day for certain Microsoft 365 security logs with eligible licences.

Before signing, ask for:

- the ingestion allowance included, and the overage rate
- the searchable retention period and archive access costs
- who pays for Azure or cloud consumption, and whether a forecast is provided
- exit and export costs if the school changes provider.

### What is rarely published

I could not find published Australian prices for incident response retainers or virtual CISO services. Providers generally quote these based on response times, prepaid hours and organisation size. They need a quote, and the retainer terms matter as much as the price. Check the response time, the hours included, the rate for additional work, and whether the insurer must approve the provider.

### Five distinctions to check in every proposal

Proposals are much easier to compare when these are checked explicitly:

1. **Finding a vulnerability is not patching it.**
2. **Containing an endpoint is not rebuilding it.**
3. **An incident retainer is not unlimited forensic work.**
4. **Endpoint monitoring is not identity, SaaS and cloud coverage.**
5. **Alert notification is not authority to act.**

The last point matters most for the Friday afternoon scenario. If the contract only allows the provider to email the IT manager, the school has bought detection, not response.

## A three-year comparison

This is an **explicitly hypothetical** comparison. Both options keep the same annual independent assessment. The difference is who operates detection and response between assessments.

**Assumptions** (replace these with your own figures or quotes):

- **1,000 managed endpoints**, with scope and prices fixed for three years.
- **$60,000 a year for independent assessment** in both options. That is about 27–32 testing days at the published day rates above, within the budget range.
- **$60,000 a year of internal staff time** for security coordination in both options. This is my assumption. Use your school's actual allocation.
- **$36,000 a year for standalone endpoint protection** (about $3 per endpoint per month) in the internal option. Check whether your existing Microsoft or Google education licences already include it.
- **$18,000 a month for the managed bundle.** This is about A$11,400 for published managed EDR list pricing plus about $6,600 for identity monitoring, log sources and partner management. The bundle replaces the standalone endpoint protection.
- **$30,000 for onboarding.** This is my assumption, reflecting that published list prices exclude deployment and integration.

| Cost over three years | Assessment + business-hours internal operation | Assessment + managed operation |
|---|---:|---:|
| Independent assessments: $60,000 × 3 | $180,000 | $180,000 |
| Standalone endpoint protection: $36,000 × 3 | $108,000 | Included below |
| Managed service: $18,000 × 36 months | — | $648,000 |
| Internal coordination: $60,000 × 3 | $180,000 | $180,000 |
| Onboarding | — | $30,000 |
| **Scoped three-year programme cost** | **$468,000** | **$1,038,000** |

The managed option costs an additional **$570,000 over three years**, or **$190,000 a year**.

Internal coordination does not disappear under a managed model. Someone still needs to own the risk, manage the provider, approve changes and make decisions during an incident. That is why the line appears in both columns.

This is a scoped programme comparison, not whole-of-organisation total cost of ownership. A full TCO would also include shared infrastructure, backup services, remediation projects, training, procurement effort, insurance, incident costs and transition costs. Licence price changes, enrolment growth and log-volume growth should be modelled separately.

## Is it worth it? Testing the break-even

A board should not accept "cyber is important" as a financial justification. It also should not reject a proposal because the benefit is harder to count than the cost.

A simple framework:

> **Expected annual loss** = the sum of each incident scenario's annual frequency × its expected financial impact.

Estimate expected loss before and after the proposed controls. The difference is the annual benefit.

Using the example above, here is how the result changes with different assumptions:

| Assumed annual reduction in expected loss | Three-year benefit | Benefit less additional programme cost |
|---|---:|---:|
| $100,000 | $300,000 | **–$270,000** |
| $200,000 | $600,000 | **$30,000** |
| $400,000 | $1,200,000 | **$630,000** |

The model breaks even at an **annual expected-loss reduction of $190,000**. If quotes come in at $30,000 a month instead of $18,000, the additional three-year cost becomes $1,002,000 and break-even rises to about **$334,000 a year**. These are arithmetic on assumptions, not measured MDR outcomes.

### What the published cost data says

No published source gives a reliable cost for a school incident, but three Australian data points help test whether a scenario is realistic:

- **ASD's reported costs:** in [ASD's Annual Cyber Threat Report 2024–25 fact sheet for businesses](https://www.cyber.gov.au/sites/default/files/2025-10/Annual%20Cyber%20Threat%20Report%202024-25%20factsheet%20for%20businesses%20and%20organisations.pdf){:target="_blank" rel="noopener noreferrer"}, the average self-reported cost per cybercrime report was **$80,850**. By business size it was $56,600 for small businesses, $97,200 for medium businesses and $202,700 for large businesses. These are costs reported to ReportCyber, which covers everything from fraud to major compromise.
- **IBM's breach study:** IBM's 2026 *Cost of a Data Breach* study put the average Australian breach at **AUD 4.22 million**, [as reported by SecurityBrief](https://securitybrief.com.au/story/australia-breach-costs-hit-aud-4-22-million-ibm-says){:target="_blank" rel="noopener noreferrer"}. The study measures organisations' full breach costs and is not specific to schools.
- **OAIC notifications:** the education sector made **81 notifications** under the Notifiable Data Breaches scheme in 2025, the fifth highest of any sector, out of 1,205 notifications overall. [OAIC 2025 statistics](https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show){:target="_blank" rel="noopener noreferrer"}.

Set against the break-even, the $190,000 a year in this model is more than twice ASD's average cost per business report. It is far below IBM's average breach. Which reference is closer depends on the school's scenarios. A breach exposing medical records, bank details and photographs of students going back a decade, like the incident discussed in [Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}), is not a typical ReportCyber report. That is why the scenarios need to be the school's own.

IBM's Australian figures also bear on detection speed. Breaches that took more than 200 days to identify and contain averaged AUD 5.17 million, compared with AUD 3.26 million for those handled within 200 days. That is an association, not proof that any particular service will reduce costs. It does support asking how quickly a school would notice a problem.

Do not read a school's breach probability directly from a survey. Aon's "one in four" figure describes what participating independent schools reported. It is not the probability for any particular school.

Some consequences matter even where they are hard to price reliably:

- harm to students and families whose information is exposed
- disruption to teaching, assessment and examinations
- loss of access to safeguarding and wellbeing information when it is needed
- loss of community confidence.

A board can weigh those consequences openly alongside the financial model. They do not need to be forced into a precise dollar figure.

## What this means in practice

The comparison is not really "audit or managed security." Both columns above keep the audit. The real question is whether the school's current internal arrangements can detect and contain an incident outside business hours, and what it would cost to change that.

For some schools, a full managed programme will be justified. For others, a narrower arrangement may close much of the gap for less. That could be identity monitoring, an incident retainer with pre-authorised actions and a tested after-hours escalation. The published unit prices above make it possible to price those options separately rather than only as a bundle.

**[Part 4: How Australian education systems run security operations](/posts/school-cyber-audits-vs-managed-security-part-four/) looks at real operating models, what each leaves the school to handle, and a concrete action for the next board meeting.**

---

*Published prices are as displayed on the linked pages when checked on 26 September 2026 and may change. Links to suppliers are included as evidence of published pricing, not as recommendations. Effort-day counts and model inputs are my own planning assumptions. This is general information, not financial advice.*
