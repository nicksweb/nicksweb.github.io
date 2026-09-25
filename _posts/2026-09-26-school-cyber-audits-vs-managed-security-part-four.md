---
title: "How Australian education runs security operations, and what boards should ask next (Part 4)"
description: "WA Education, Brisbane Catholic Education and independent schools show different ways to combine assessment, a SOC and managed response, and what schools still own."
keywords: [education security operations centre, Brisbane Catholic Education Sentinel SOC, school managed detection and response, independent school cyber security model, school MSP incident response, school board cyber questions]
date: 2026-09-26 09:30:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, incident-response]
wrap_tables: true
---

*This is the final part of* Cyber security audits vs managed security: what Australian school boards need to know. *[Part 1]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-one %}) set out the gap between assessment and response, [Part 2]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) covered governance and legal obligations, and [Part 3]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-three %}) compared costs over three years.*

The earlier parts were mostly about principles and numbers. This one looks at how Australian education organisations actually organise security operations, and what each model still leaves the school to handle.

There is no single right model. A state department, a Catholic system and a single independent school start from very different places. The common thread is that every working arrangement answers the same question from Part 1: **who can act when the usual IT manager is unavailable?**

## State departments: central capability, local responsibilities

Western Australia provides a documented example. A Department of Education [role advertisement](https://search.jobs.wa.gov.au/index.php?AdvertID=384350){:target="_blank" rel="noopener noreferrer"} describes a departmental Security Operations Centre supporting cyber security controls. It includes operations roles responsible for identifying, assessing, mitigating and monitoring incidents.

That establishes an internal SOC capability in one jurisdiction. It does not establish identical arrangements, or 24/7 coverage, in every Australian education department.

A central model typically works like this:

- **Central security leadership** owns standards, risk, detection engineering and major-incident coordination.
- **A departmental or contracted SOC** monitors shared identity, endpoints, networks and cloud services.
- **School teams** keep responsibility for local assets, implementation, reporting and teaching continuity.
- **Independent assessments** test the central controls and the variation between sites.

The main governance risk here is **incomplete coverage**. Centrally managed systems can be well protected while a locally procured app, a faculty's cloud subscription or a device bought through a school's own budget sits entirely outside monitoring. Nobody may notice until something goes wrong.

## Catholic systems: shared services and hybrid capability

Brisbane Catholic Education is a useful case study because it shows assessment leading to an operating decision.

According to a [case study published by Brennan](https://www.brennanit.com.au/wp-content/uploads/2024/12/brennan_casestudy-brisbane_catholic_education_BCE.pdf){:target="_blank" rel="noopener noreferrer"}, BCE runs regular cybersecurity reviews to identify risks and gaps and to make better use of its existing Microsoft 365 and Azure investment. One of those reviews found that the frequency and volume of attacks on accounts and identities was **overwhelming BCE's internal operations team** and leaving it at high risk of compromise.

BCE identified the need for a dedicated SOC that could monitor and respond around the clock. After a discovery process, MOQdigital (a Brennan company) recommended Microsoft Sentinel through its managed service. That included log sources from outside the Microsoft environment and a dedicated 24/7 SOC team providing:

- **incident response**, including post-incident reports for significant incidents
- **threat hunting** for new or unknown suspicious activity
- **ongoing posture review** to keep protections current
- **regular security and cost reporting**, including a forecast of Azure spend.

The case study quotes BCE's Manager, Information Systems, saying the organisation can now respond quickly to security alerts. It also reports reduced time and cost in responding to threats and more accurate event information.

This is a **supplier-published case study**. It shows an operating approach, but it does not independently quantify return on investment or prove current coverage. Its value for this series is the sequence. **A review found a problem that another review could not fix. The organisation needed ongoing capacity to deal with identity events as they happened.** The regular cost reporting also reflects the SIEM cost concerns raised in Part 3.

For diocesan and system-level governance, the important thing is explicit ownership of:

- risk acceptance and expenditure
- shared identity and administrative access
- authority to isolate a campus or disable an account
- privacy assessment and community communications
- coordination between education leadership, governing bodies and diocesan financial oversight.

When a system provides shared services to many schools, an incident can cross those boundaries quickly. The decision rights need to be settled before one does.

## Independent and multi-campus schools: keep ownership, buy specialist capacity

Most independent schools do not have a security team. They may have a small IT team, an MSP, or both. For these schools, I think a **hybrid arrangement** is usually worth evaluating:

- **An internal executive owns cyber risk.** This is often the business manager or a deputy principal, supported by the IT leader.
- **Existing IT staff or an MSP** implement changes and maintain services.
- **An MDR provider** supplies specialist monitoring and defined after-hours response.
- **Independent assessors** test the resulting controls.
- **Leadership practises decisions** involving disruption, privacy, parents and insurers.

The contract then needs to answer the Friday afternoon question in writing: what can the provider do on its own authority, what needs a call first, and who takes that call when the IT manager is on leave?

## Where each part of the arrangement helps

The table below makes the trade-offs concrete. The final column matters most, because it lists what remains the school's responsibility whichever services it buys.

| Education situation | Assessment contribution | Managed-service contribution | Remaining school responsibility |
|---|---|---|---|
| Compromised staff account during the holidays | Tests authentication and access design. | Detects suspicious activity and may revoke sessions or disable access. | Pre-authorised action, escalation and continuity arrangements. |
| Student BYOD outside endpoint-agent coverage | Tests segmentation and access boundaries. | Monitors available identity, network and SaaS signals. | Device policy, privacy boundaries and documented blind spots. |
| Vulnerable classroom software during exams | Identifies exposure and attack paths. | Tracks exposure and suspicious activity. | A named owner decides remediation timing and interim controls. |
| Breach inside an EdTech supplier | Reviews supplier evidence and contracts. | May detect related account misuse or ingest supplier alerts. | Supplier cooperation, data mapping, breach assessment and notifications. |
| Ransomware affecting shared services | Tests controls and recovery assumptions. | Attempts early detection and containment. | Tested backups, restoration capacity and incident leadership. |

The EdTech row is a common way for the Friday afternoon call to begin. The school learns about the incident from a supplier email, not its own monitoring. No provider can tell the school which of its data sat in that platform unless the school has already mapped it. My earlier post on [governing technology approvals]({% post_url 2026-09-12-privacy-act-reforms-independent-schools-governance %}) covers keeping a service register that makes this possible.

## Not every breach is an attack

It would be easy to read this series as "buy MDR and you are covered." The Townsville Catholic Education incident is a useful corrective.

In June 2026, [TCE published an eligible data breach notification](https://www.tsv.catholic.edu.au/about/eligible-data-breach-notification/){:target="_blank" rel="noopener noreferrer"} after finding that a limited number of staff had been auto-forwarding corporate email to personal accounts. TCE reported the matter to the OAIC and said it did not believe there was malicious intent. I covered the incident and the tenant controls that prevent it in [A quiet auto-forwarding rule becomes a notifiable data breach]({% post_url 2026-07-03-nq-cyber-watch-tce-auto-forwarding-breach %}).

Endpoint MDR would not necessarily have caught that. There was no malware and no intruder, only a mail setting that stayed on for too long. The lessons are about **ongoing configuration, access and information governance**. Someone has to review tenant settings, offboarding and data flows continually, as well as watch for attacks. That work might sit with the MSP, the internal team or a broader managed security service. It needs an owner either way.

## Key takeaways from the series

- **Independent assessment remains valuable** when findings lead to funded, verified remediation.
- **Managed security must include measurable coverage** and clearly defined authority to respond.
- **Outsourcing needs active oversight.** The school still owns the risk and retains responsibilities the provider cannot carry.
- **Identity, SaaS and student information deserve attention** alongside endpoints.
- **Legal obligations depend on the entity and jurisdiction.** Check what applies to your school.
- **Financial comparisons should be complete.** Include internal effort, integration, logs, remediation and the risk that remains.
- **Incidents do not keep school hours.** Plan for the Friday afternoon and the school holidays, not only for the working week.

## One action for the next board meeting

If a governing body takes only one thing from this series, I would suggest this request:

> At the next governing-body meeting, ask management to show which critical services are monitored, who can contain an incident after hours, and when those arrangements were last tested.

The answer should be a coverage map, a named person or provider with documented authority, and a date. If any of those are missing, the board has found something worth funding before the next Friday afternoon call.

If your school, not-for-profit or business in North Queensland wants a second opinion on its current arrangements, you can [get in touch through my consulting page](/consulting/).

---

*This series reflects my own views, informed by public sources and my experience in school IT. It does not describe my employer's arrangements. Case study details come from the linked public material, including a supplier-published case study. This is general information, not legal or financial advice.*
