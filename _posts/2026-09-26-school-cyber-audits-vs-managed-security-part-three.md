---
title: "Paying for improvement, not another report: getting results from school cyber security spend (Part 3)"
description: "Why schools should judge cyber security spending by what measurably improves between audits, with indicative costs for testing, workshops and managed support."
keywords: [school cyber security audit cost, penetration testing cost Australia, school cyber security improvement, conditional access schools, cyber tabletop exercise schools, managed security schools]
date: 2026-09-26 07:10:00 +1000
last_modified_at: 2026-09-26 11:39:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, procurement]
wrap_tables: true
---

*This is Part 3 of* Cyber security audits vs managed security: what Australian school boards need to know. *[Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}) explained the gap between assessment and response. [Part 2]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) covered governance, legal obligations and the evidence a board should expect.*

Sooner or later a business manager will ask what all of this costs. It is a fair question, but I think there is a better one to ask alongside it:

> **What will be measurably better at our next audit because of this spend?**

A cyber security audit is a snapshot. It is useful because it tells you where you stand. But an organisation that commissions the same audit every year and gets much the same findings back is not showing that it is improving. It is showing that it can afford an audit.

## When the audit says the same thing every year

This is not a hypothetical problem. Western Australia's Auditor General reviews the information systems of state government entities every year. In its [2025 results](https://audit.wa.gov.au/reports-and-publications/reports/state-government-2025-information-systems-audit-results/){:target="_blank" rel="noopener noreferrer"}, almost two thirds of findings across 53 entities were unresolved from previous years, including 57% of significant findings. Access management and endpoint security were the weakest areas, with fewer than a quarter of entities meeting the benchmark in each.

Those entities were audited every year. The audits did their job: they found the problems. What was missing was the capacity, ownership and follow-through to fix them.

In my experience, schools are no different. The findings that recur are usually the unglamorous ones: MFA gaps, too many standing administrator accounts, legacy sign-in methods still allowed, devices that don't meet policy, and email settings nobody has reviewed. Each one needs someone to plan the change, work through the exceptions, communicate with staff and see it through. That is project work, and a report alone does not deliver it.

## Schools want to improve

Schools do want to improve. Aon's [*2026 Independent Schools Risk Report*](https://schoolsriskreport.aon.com.au/){:target="_blank" rel="noopener noreferrer"} found 76% of participating schools had documented preventative cyber measures in place, up from 66% in 2024.

Sector bodies are responding too. Independent Schools NSW (ISNSW) offers [cyber security services for independent schools](https://www.isnsw.edu.au/services/technology-services/cyber-security-services-for-independent-schools/tabletop-workshop){:target="_blank" rel="noopener noreferrer"}, including a Cyber Security Tabletop Workshop. It is pitched at helping schools:

- experience real-world challenges in a safe environment
- identify and mitigate risks
- help leaders act decisively during a crisis
- build collaboration and confidence across teams
- show their community a commitment to security.

That is exactly the Friday afternoon scenario from Part 1, practised before it happens.

The question for a board is whether its spending turns that appetite into change it can see.

## What an engaged partner should deliver between audits

In my view, the most valuable arrangement is not a bigger audit. It is a provider, or an internal team with enough capacity, that stays engaged through the year. That means two things.

**Reviewing issues as they arrive.** New alerts, new suppliers, a staff member who has set up mail forwarding, a BYOD device behaving strangely on the network. These get looked at when they happen, not saved up for the next audit.

**Driving the improvement projects.** Someone owns the plan for fixing last year's findings, manages the change with staff, and reports progress. Typical projects in a Microsoft 365 or Google Workspace school include:

| Project | What "done" looks like | Evidence at the next audit |
|---|---|---|
| MFA for all staff, and students where appropriate | Near-complete coverage, with named exceptions that expire | MFA registration and enforcement reports |
| Modern conditional access policies | Legacy authentication blocked; admin and sensitive apps require a compliant device; unmanaged devices limited | Policy export and sign-in logs showing policies applying |
| Role-based access control for administrators | Fewer standing global admins; roles matched to tasks; just-in-time elevation where licensed | Before-and-after role assignment reports |
| Tenant hygiene | External auto-forwarding disabled, alerts on forwarding rules, offboarding checks | Tenant configuration report |
| BYOD and network segmentation | Unmanaged devices cannot reach internal services | Retest result from the next assessment |
| Monitoring and response | Alerts triaged, including after hours, with defined authority to act | Monthly report of alerts, containment times and actions taken |

Every row produces evidence. That is the point. At the next audit, the board should be able to see which findings closed, which were retested, and which recurred. If a provider can't describe what it will change in your environment before the next audit, and how you will measure it, keep looking.

The tenant hygiene row is not theoretical. Townsville Catholic Education's [auto-forwarding breach]({% post_url 2026-07-03-nq-cyber-watch-tce-auto-forwarding-breach %}) came down to email forwarding settings that can be controlled at the tenant level.

## What it costs, roughly

I don't want to turn this into a pricing exercise, because the right figure depends heavily on scope. A few reference points help set expectations (ex GST):

| Service | Indicative cost | Source |
|---|---|---|
| Fixed-scope penetration test | $5,900 for 3 testing days to $18,500 for 10 | [One Australian firm's published packages](https://www.cliffside.com.au/testing-assurance/penetration-testing/pricing/){:target="_blank" rel="noopener noreferrer"} |
| Comprehensive, multi-area assessment programme | Around $120,000 | Industry estimate for a premium engagement; these are rarely publicly priced |
| Cyber tabletop workshop for school leadership | About $10,000, less for NSW member schools | [ISNSW tabletop workshop](https://www.isnsw.edu.au/services/technology-services/cyber-security-services-for-independent-schools/tabletop-workshop){:target="_blank" rel="noopener noreferrer"} |
| Managed endpoint detection and response | US$7.99 per endpoint per month (about A$11.38) at a 100-endpoint example, excluding deployment and partner management | [One vendor's published list price](https://www.huntress.com/pricing){:target="_blank" rel="noopener noreferrer"} |

*The AUD conversion uses the [RBA rate](https://www.rba.gov.au/statistics/frequency/exchange-rates.html){:target="_blank" rel="noopener noreferrer"} for 25 September 2026 (A$1 = US$0.7019).*

The spread between the first two rows is the main thing to notice. A $120,000 assessment that produces much the same report next year is expensive. A smaller assessment, paired with a partner who spends the year closing its findings, may deliver far more for the same money.

A tabletop workshop is also one of the cheapest ways to find out whether the Friday afternoon plan actually works.

## Questions to ask before you sign

Whether you're buying an audit, a managed service or both, these questions get to what you're actually paying for:

1. **What will you have changed in our environment by the next audit, and how will we measure it?**
2. **Who drives the remediation projects: you, our IT team or our MSP?** And who is accountable if they stall?
3. **Will you report on findings closed and retested, not only findings raised?**
4. **Can you act, or only notify?** Alert notification is not authority to act. If the contract only allows the provider to email the IT manager, the school has bought detection, not response.
5. **What is outside scope?** Finding a vulnerability is not patching it, an incident retainer is not unlimited forensic work, and endpoint monitoring is not identity, SaaS and cloud coverage.

A provider with good answers to the first three is selling improvement. One that can only answer the last two is selling a service. Both have their place, but a school should know which one it is buying.

**[Part 4: How Australian education systems run security operations](/posts/school-cyber-audits-vs-managed-security-part-four/) looks at real operating models, what each leaves the school to handle, and a concrete action for the next board meeting.**

---

*Published prices are as displayed on the linked pages when checked on 26 September 2026 and may change. Links to suppliers are included as reference points, not recommendations. This is general information, not financial advice.*
