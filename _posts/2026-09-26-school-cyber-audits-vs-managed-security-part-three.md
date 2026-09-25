---
title: "Pricing cyber assurance and managed security for a school: a three-year comparison (Part 3)"
description: "Illustrative Australian budgets for school cyber assessments and managed detection and response, with a three-year cost model and break-even test."
keywords: [school cyber security audit cost, penetration testing cost Australia, MDR pricing Australia, managed SOC cost schools, SIEM costs education, cyber security budget schools]
date: 2026-09-26 09:20:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, procurement]
wrap_tables: true
---

*This is Part 3 of* Cyber security audits vs managed security: what Australian school boards need to know. *[Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}) explained the gap between assessment and response. [Part 2]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) covered governance and legal obligations.*

Sooner or later a business manager will ask what all of this costs, and whether the school is paying twice for overlapping services.

This post puts numbers on both sides. Please read them as **planning allowances**, not quotes or surveyed market averages. Where a supplier publishes a price, I say so and link to it. The totals are my own illustrative budgets, built so the comparison can be tested.

All figures are **in Australian dollars, excluding GST**. USD equivalents use an illustrative rate of **A$1 = US$0.65**. That rate is only for comparison, not a claim about the current exchange rate.

## The example school

To keep the comparison meaningful, assume:

- a multi-campus school with approximately **1,000 managed endpoints**
- shared identity services, such as Microsoft 365 or Google Workspace
- a defined sample of campuses and cloud environments for assessment.

A department-wide or diocesan-wide engagement is a different exercise and needs separate scoping.

## Point-in-time assessment

Some Australian suppliers publish prices, which helps establish the order of magnitude:

- [Cliffside](https://www.cliffside.com.au/testing-assurance/penetration-testing/pricing/){:target="_blank" rel="noopener noreferrer"} lists fixed-fee penetration testing at $5,900 for three testing days, $9,500 for five and $18,500 for ten, subject to scope. Its page states that retesting of critical and high findings within 90 days is included.
- [IronSights](https://ironsights.com.au/penetration-testing-cost-australia){:target="_blank" rel="noopener noreferrer"} publishes indicative wireless testing of $2,500–6,000 and internal network testing of $5,000–15,000.
- [VAPT](https://vapt.com.au/blog/penetration-test-cost-australia/){:target="_blank" rel="noopener noreferrer"} publishes $8,000–18,000 for a cloud security review of one platform.

These are different suppliers' offerings, not interchangeable packages. A broader education assessment could be budgeted like this:

| Component and assumed scope | Estimated AUD | Illustrative USD |
|---|---:|---:|
| Physical-access and wireless testing across two sampled campuses | $10,000–25,000 | $6,500–16,250 |
| Internal/external network and identity attack-path testing | $8,000–20,000 | $5,200–13,000 |
| Cloud posture review: one modest AWS, Azure **or** GCP environment | $8,000–18,000 | $5,200–11,700 |
| Core Microsoft 365 or Google Workspace tenant review | $5,000–12,000 | $3,250–7,800 |
| Governance, policies, privacy, supplier processes and maturity assessment | $10,000–25,000 | $6,500–16,250 |
| Consolidated reporting, board briefing and bounded retesting allowance | $5,000–10,000 | $3,250–6,500 |
| **Illustrative total: one infrastructure cloud plus core SaaS tenant** | **$46,000–110,000** | **$29,900–71,500** |
| **Illustrative total: AWS, Azure and GCP, plus core SaaS tenant** | **$62,000–146,000** | **$40,300–94,900** |

A few things to watch when comparing proposals:

- **Reporting and retesting are often already included** in component quotes. Remove any overlap before adding supplier prices together.
- **Azure infrastructure and Microsoft 365 are different scopes.** So are Google Cloud and Google Workspace. A proposal that says "cloud review" should say which.
- **"Physical testing" needs a definition.** Inspecting access controls and attempting a physical intrusion require very different effort and approvals.
- **Sampling two campuses does not mean every campus was tested.** The report should say what was not examined.
- **Some costs sit outside the budget above.** Travel, extensive application testing, large cloud estates, certification and remediation projects can add materially.

## Managed security services

A useful published anchor is [Huntress](https://www.huntress.com/pricing){:target="_blank" rel="noopener noreferrer"}, which lists managed EDR at **US$7.99 per endpoint per month** in its 100-endpoint example. Managed identity protection and managed SIEM are priced separately. The page also notes that the price includes its 24/7 SOC but not deployment, integration or the day-to-day operational management that partners provide.

That is a good illustration of why the cheapest visible endpoint price is not the whole operating budget.

| Service | Illustrative AUD allowance | Illustrative USD |
|---|---:|---:|
| Managed EDR with 24/7 investigation and defined response | $12–30/endpoint/month | $7.80–19.50 |
| Managed SIEM, detection engineering and hunting for a bounded small-to-medium scope | $3,000–15,000/month | $1,950–9,750 |
| Recurring vulnerability discovery, prioritisation and tracking | $1,000–5,000/month | $650–3,250 |
| Incident-readiness retainer and exercises | $10,000–40,000/year | $6,500–26,000 |
| Optional governance/vCISO support and board reporting | $1,500–5,000/month | $975–3,250 |
| Initial onboarding and integration | $10,000–40,000 once | $6,500–26,000 |

These are procurement planning ranges informed by published anchors and service effort. At roughly 1,000 endpoints, a broader managed programme might justify a **planning envelope of $15,000–50,000 a month**. Identities, integrations, log volumes, service boundaries and existing licences will drive the final figure.

Do not simply add every row. Bundles overlap, and some exclude licence and log-storage costs.

### SIEM costs need particular scrutiny

Log-based services can grow expensive quietly. Microsoft documents [ingestion-based charging, commitment tiers, retention charges and additional infrastructure costs for Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/billing){:target="_blank" rel="noopener noreferrer"}. Before signing, ask for:

- the ingestion allowance included, and the overage rate
- searchable retention period and archive access costs
- who pays for Azure or cloud consumption, and whether a forecast is provided
- exit and export costs if the school changes provider.

### Five distinctions that change the price

Most disappointment with managed security comes from assuming something is included when it is not. Check each of these explicitly:

1. **Finding a vulnerability is not patching it.**
2. **Containing an endpoint is not rebuilding it.**
3. **An incident retainer is not unlimited forensic work.**
4. **Endpoint monitoring is not identity, SaaS and cloud coverage.**
5. **Alert notification is not authority to act.**

The last point matters most for the Friday afternoon scenario. If the contract only allows the provider to email the IT manager, the school has bought detection, not response.

## A three-year comparison

This is an **explicitly hypothetical** comparison. Both options keep the same annual independent assessment. The difference is who operates detection and response between assessments.

**Assumptions:**

- 1,000 managed endpoints, fixed scope and prices for three years
- $60,000 annual independent assessment in both options
- $60,000 a year of internal staff time allocated to security coordination in both options
- the managed bundle replaces separately purchased endpoint protection and includes agreed identity monitoring, SIEM allowances, vulnerability tracking and readiness exercises
- the managed bundle is priced at $18,000 a month, which sits at the lower end of the planning envelope above.

| Cost over three years | Assessment + business-hours internal operation | Assessment + managed operation |
|---|---:|---:|
| Independent assessments: $60,000 × 3 | $180,000 | $180,000 |
| Standalone endpoint licences: $36,000 × 3 | $108,000 | Included below |
| Managed service: $18,000 × 36 months | — | $648,000 |
| Internal coordination: $60,000 × 3 | $180,000 | $180,000 |
| Onboarding | — | $30,000 |
| **Scoped three-year programme cost** | **A$468,000** | **A$1,038,000** |
| **Illustrative USD equivalent** | **US$304,200** | **US$674,700** |

The managed option costs an additional **$570,000 over three years**, or **$190,000 a year**.

Internal coordination does not disappear under a managed model. Someone still needs to own the risk, manage the provider, approve changes and make decisions during an incident. That is why the line appears in both columns.

This is a scoped programme comparison, not whole-of-organisation total cost of ownership. A full TCO would also include shared infrastructure, backup services, remediation projects, training, procurement effort, insurance, incident costs and transition costs. Licence inflation, enrolment growth and log-volume growth should be modelled separately.

## Is it worth it? Testing the break-even

A board should not accept "cyber is important" as a financial justification. It also should not reject a proposal because the benefit is harder to count than the cost.

A simple framework:

> **Expected annual loss** = the sum of each incident scenario's annual frequency × its expected financial impact.

Estimate expected loss before and after the proposed controls. The difference is the annual benefit. Don't read a school's breach probability directly from a survey's reported incident percentage. Aon's "one in four" describes what participating schools reported. It is not the probability for any particular school.

Using the example above, here is how the result changes with different assumptions:

| Assumed annual reduction in expected loss | Three-year benefit | Benefit less additional programme cost |
|---|---:|---:|
| $100,000 | $300,000 | **–$270,000** |
| $200,000 | $600,000 | **$30,000** |
| $400,000 | $1,200,000 | **$630,000** |

The model breaks even at an **annual expected-loss reduction of $190,000**, before any other quantified benefits. At a higher managed-service price of $30,000 a month, the additional three-year cost becomes $1,002,000 and break-even rises to about **$334,000 a year**. These are assumptions to test, not measured MDR outcomes.

Some consequences matter even where they are hard to price reliably:

- harm to students and families whose information is exposed
- disruption to teaching, assessment and examinations
- loss of access to safeguarding and wellbeing information when it is needed
- loss of community confidence and the effect on enrolments.

A board can weigh those consequences openly alongside the financial model. They do not need to be forced into a precise dollar figure.

## What this means in practice

The comparison is not really "audit or managed security." Both columns above keep the audit. The real question is whether the school's current internal arrangements can detect and contain an incident outside business hours, and what it would cost to change that.

For some schools, a full managed programme will be justified. For others, a narrower service such as identity monitoring, an incident retainer with pre-authorised actions and a tested after-hours escalation may close most of the gap at a fraction of the cost. The right answer depends on the school's exposure, existing licences and internal capability.

**[Part 4: How Australian education systems run security operations]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-four %}) looks at real operating models, what each leaves the school to handle, and a concrete action for the next board meeting.**

---

*Published supplier prices are as displayed on the linked pages when checked on 26 September 2026 and may change. All other figures are illustrative planning estimates, not quotes, and are not financial advice.*
