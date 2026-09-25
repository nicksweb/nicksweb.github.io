---
title: "What school boards need to see: cyber governance, legal duties and evidence (Part 2)"
description: "How Australian school boards and councils can oversee cyber risk: which privacy and governance obligations apply, and the evidence worth asking for."
keywords: [school board cyber governance, APP 11 schools, notifiable data breaches schools, ACNC governance standard 5 cyber, Essential Eight schools, school council cyber risk oversight]
date: 2026-09-26 07:05:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, privacy]
wrap_tables: true
---

*This is Part 2 of* Cyber security audits vs managed security: what Australian school boards need to know. *[Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}) used a recent Perth school breach and the Friday afternoon incident to explain why assessment and response are different things.*

When a school discloses a breach, the technical questions come first. Governance questions follow soon after. What did the governing body know, what had it funded, and what evidence did it rely on?

I think the most useful question a board or council can ask is this:

> What evidence allows this governing body to conclude that material cyber risks are understood, appropriately funded and being managed?

An annual audit report is part of that evidence. It is not the whole of it.

## Start with who you actually are

School governance structures vary widely. A school board, a governing council, a diocesan financial council and an advisory committee can have quite different legal powers, even when their titles sound alike.

Before discussing duties, document:

- the operating entity and its legal form
- the governing body and its delegations
- advisory committees, including any audit, risk or ICT committee, and what they can actually decide
- who holds incident authority, including after hours and during holidays.

A council's title alone does not establish that its members are company directors. Getting this right matters because the obligations that follow depend on it.

## The obligations, stated carefully

Cyber governance articles often blur the rules that apply to schools. These are the distinctions I think a school needs to get right. This is general information, and schools should confirm their position with their own advisers.

| Issue | What it means for a school |
|---|---|
| **Privacy Act coverage** | Private educational institutions are usually covered by the Commonwealth *Privacy Act 1988*. Public schools generally sit within state or territory arrangements. Confirm the entity and jurisdiction. |
| **APP 11** | Covered entities must take reasonable steps to protect personal information, including technical and organisational measures. An audit report is evidence of an activity, not a statutory safe harbour. |
| **Notifiable Data Breaches** | Covered entities must assess a suspected eligible breach expeditiously and take reasonable steps to complete the assessment within 30 days. Where there are reasonable grounds to believe an eligible breach has occurred, notification is required as soon as practicable, subject to exceptions. |
| **Director and charity governance duties** | Duties depend on legal structure and registration. Ordinary company-director rules should not be applied to every school council or charity. |
| **Essential Eight** | A baseline of preventative controls, with an appropriate target maturity and supporting evidence. Detection, response, recovery and governance measures are still needed. |

Sources: [OAIC on children, young people and education](https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/children-and-young-people){:target="_blank" rel="noopener noreferrer"}, [APP 11 guidelines](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information){:target="_blank" rel="noopener noreferrer"}, [NDB assessment and notification](https://www.oaic.gov.au/privacy/notifiable-data-breaches/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response/part-4-notifiable-data-breach-ndb-scheme){:target="_blank" rel="noopener noreferrer"}.

The NDB timing links back to the Friday afternoon problem. The assessment clock is a reason to have a named assessor, a documented process and access to advice before the incident. Otherwise the school is working out the process while the clock is running.

For the broader privacy reform picture, see [Privacy Act reforms in 2026: what is changing]({% post_url 2026-09-12-privacy-act-reforms-2026-what-is-changing %}).

### A Queensland note

Many readers here are in Queensland, so this is worth stating plainly. Queensland government agencies, including state schools through the Department of Education, became subject to the state's **mandatory data breach notification scheme** on 1 July 2025 under the *Information Privacy Act 2009* (Qld). Commonwealth NDB obligations should not simply be copied into a state-school governance description; the scheme, regulator and processes differ. [Queensland OIC guidance](https://www.oic.qld.gov.au/government/privacy/mandatory-data-breach-scheme){:target="_blank" rel="noopener noreferrer"}.

### Charities and companies limited by guarantee

Many independent schools are companies limited by guarantee registered with the ACNC. For these entities, [ACNC guidance](https://www.acnc.gov.au/for-charities/manage-your-charity/other-regulators/companies-limited-guarantee){:target="_blank" rel="noopener noreferrer"} explains that certain civil statutory directors' duties under the Corporations Act are replaced by ACNC governance requirements, although some Corporations Act obligations remain. Governance Standard 5 covers the [duties of Responsible People](https://www.acnc.gov.au/for-charities/manage-your-charity/governance-hub/5-duties-responsible-people/duties-responsible-people){:target="_blank" rel="noopener noreferrer"}, including acting with reasonable care and diligence.

That does not lower the standard. It means the correct source of the duty should be cited when a board paper describes the governing body's responsibilities.

## Enforcement examples, used carefully

In February 2026, the Federal Court ordered FIIG Securities to pay a **$2.5 million penalty** over cyber security failures, following action by ASIC. ASIC's findings included failures to allocate adequate resources to qualified people, implement multi-factor authentication for remote access, keep key systems patched, have qualified personnel monitoring threat alerts, provide staff training, and maintain an incident response plan tested at least annually. [ASIC's media release](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-021mr-asic-action-sees-fiig-securities-ordered-to-pay-25-million-over-cyber-security-failures){:target="_blank" rel="noopener noreferrer"}.

Several of those findings describe operating failures, not policy gaps. Nobody was watching the alerts, and nobody had tested the response plan. This connects directly to the gap between audit and operation in Part 1.

The case concerned **financial services licensing obligations**. It was not a finding of personal liability against school directors, and it should not be presented that way. It is useful as an illustration of what regulators may treat as inadequate in practice.

Similarly, Essential Eight alignment is not the same as legal compliance, and ASD does not impose a universal requirement for independent Essential Eight certification. Particular government policies, funding arrangements, regulators or contracts may require assessment. [ASD Essential Eight maturity model](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model){:target="_blank" rel="noopener noreferrer"}.

## From receiving reports to overseeing outcomes

Many boards receive a cyber update that is either too technical to act on or too reassuring to test. A better approach is a small set of measures, each backed by evidence that shows whether the arrangement is working.

These are recommended governance measures, not prescribed statutory metrics:

| Board measure | Evidence that makes it useful |
|---|---|
| Security coverage | Percentage of in-scope devices and identities monitored; unsupported and disconnected assets shown separately. |
| Identity protection | MFA coverage, privileged-access exceptions and overdue account removals. |
| Vulnerability exposure | Material weaknesses overdue for remediation, affected services, owners and deadlines. |
| Detection and containment | Time from alert to investigation and containment, including after-hours performance and missed targets. |
| Recovery capability | Actual restoration results against approved recovery-time and data-loss tolerances. |
| Supplier risk | Critical suppliers with outstanding assessments, notification gaps or unresolved findings. |
| Independent assurance | Findings closed and retested, recurring failures, and accepted exceptions with expiry dates. |

A few practical notes:

- **Operational teams and boards need different views.** Operational staff need timely telemetry. Boards need concise trends, material exceptions and immediate escalation of significant incidents.
- **Live dashboards need honest labels.** Any dashboard should show when it was last refreshed and what it does not cover. It cannot give complete real-time visibility of risk.
- **"After hours" belongs on the dashboard.** If containment times are only measured during business hours, the Friday afternoon risk will not appear in the board report.
- **Accepted risks should expire.** Exceptions should have an owner and a review date, not remain accepted indefinitely.

## Insurance renewals need evidence too

Cyber insurance proposal forms increasingly ask detailed questions about MFA, endpoint protection, backups, patching, testing and incident response. [Chubb's published proposal material](https://www.chubb.com/content/dam/chubb-sites/chubb-com/au-en/business/technology-liability-insurance/documents/pdf/chubb-premiertech-proposal-form.pdf){:target="_blank" rel="noopener noreferrer"} shows the level of control questioning involved. That particular form targets technology businesses, not schools, but the questions are representative.

Two practical points follow:

- **Keep evidence that supports each declaration.** If the renewal says MFA is enforced for all staff, keep the report that shows it, and record the exceptions.
- **Do not assume managed security guarantees cover or lowers premiums.** Some insurers may view it favourably. That depends on the insurer and the policy, and suppliers who promise premium reductions deserve scepticism.

Check whether the policy requires a specific incident response panel or insurer notification before engaging a provider. That belongs on the Friday afternoon call list.

## What the board should ask for next

At the next meeting, a governing body could reasonably ask management for:

1. A one-page statement of the entity, the applicable privacy regime and who holds incident authority.
2. The measures in the table above, with gaps shown honestly.
3. The date the incident response plan was last exercised, and what changed as a result.
4. The status of findings from the last independent assessment: closed, retested, open or accepted.

None of these requires a new supplier. They do show whether current arrangements amount to an operating capability or only to a set of documents.

**[Part 3: Pricing cyber assurance and managed security](/posts/school-cyber-audits-vs-managed-security-part-three/) puts illustrative numbers on assessment and managed services and compares them over three years.**

---

*This post is general information about governance and privacy obligations, not legal advice. Schools should confirm how these obligations apply to their own entity and jurisdiction.*
