---
title: "The Friday afternoon call: why a school cyber audit is not a response plan (Part 1)"
description: "A recent Perth school breach shows why schools need independent assurance and someone able to act between audits, including after hours."
keywords: [school cyber security incident, school data breach Australia, managed detection and response schools, school cyber security audit, St James Anglican School cyber attack, education incident response]
date: 2026-09-26 07:00:00 +1000
last_modified_at: 2026-09-26 11:39:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, incident-response]
wrap_tables: true
---

In mid-September, St James Anglican School in Perth's north disclosed a cyber security incident involving unauthorised access to its computer systems. According to [reporting carried on MSN](https://www.msn.com/en-au/general/general/student-info-stolen-in-school-cyber-attack/ar-AA2cfZ0o){:target="_blank" rel="noopener noreferrer"}, the school said it had contained the incident and secured its systems, but that personal information relating to members of the school community was involved.

*The West Australian* reported that the information copied included names, addresses, emails, phone numbers, bank account details, student medical records and photographs of current and former students enrolled since 2015. The school said it had notified families, given them practical steps to protect their information, and reported the incident to the Australian Information Commissioner and other relevant authorities. It said it was continuing to work closely with its cyber security advisers. [Insurance Business](https://www.insurancebusinessmag.com/au/news/cyber/education-clients-face-broader-cyber-exposure-after-perth-school-breach-590098.aspx){:target="_blank" rel="noopener noreferrer"} has since covered what the breach means for education clients more broadly.

I have no inside knowledge of the incident, and this post does not speculate on how it happened. The school's public statements describe the steps you would hope to see: containment, notification, regulator reporting and ongoing specialist support. Schools that have not been through an incident can still learn from it.

It is also not an isolated case. Closer to home, this site has covered the [Canvas-related breach affecting Townsville schools]({% post_url 2026-05-13-nq-cyber-watch-townsville-schools-canvas-breach %}) and [Townsville Catholic Education's auto-forwarding breach]({% post_url 2026-07-03-nq-cyber-watch-tce-auto-forwarding-breach %}). Each incident had a different cause, but the question for school leaders is the same: **when something is found, who is able to act, and how quickly?**

This is the first part of a four-part series, *Cyber security audits vs managed security: what Australian school boards need to know*. It sets out the problem and the terms. [Part 2](/posts/school-cyber-audits-vs-managed-security-part-two/) covers board governance and legal obligations, [Part 3](/posts/school-cyber-audits-vs-managed-security-part-three/) looks at what schools should expect to get for their security spend, and [Part 4](/posts/school-cyber-audits-vs-managed-security-part-four/) looks at how Australian education systems are actually organising security operations.

## Incidents rarely arrive at a convenient time

The scenario most school IT leaders dread is not necessarily the most sophisticated attack. It is the one that surfaces at the worst possible moment.

I have heard more than one version of this story from people working in school IT. It is 3:30 on a Friday afternoon, often in the last week of term. Staff are packing up, the business manager has left for the weekend and the principal is at an event. Then something turns up:

- An EdTech supplier emails to say its platform has been accessed and the school's data may be involved.
- A parent forwards a screenshot of what looks like student information posted online.
- A staff account starts sending invoice-themed phishing emails to families.
- The managed service provider notices that an administrator account signed in from overseas overnight.

From that moment, the IT leader's job changes. They are no longer only a technical manager. They are trying to find someone who can support the school through a possible data breach or cyber incident, often by phone, before the weekend.

The questions come quickly:

- Does our managed service provider cover this, or only business-hours support?
- Do we have an incident response retainer, and what is the number?
- When did we last review our conditional access policies in M365? 
- Does our cyber insurance policy require us to use a particular panel firm, and have we notified the insurer?
- Who can authorise disabling the principal's account, isolating the finance system or taking the parent portal offline?
- Who decides whether this is a notifiable data breach, and when does that assessment start?
- Who talks to families, and who approves what they are told?

The timing is not just bad luck. In a [2025 survey by Semperis](https://www.semperis.com/press-release/semperis-study-reveals-majority-ransomware-attacks-continue-during-holidays-weekends/){:target="_blank" rel="noopener noreferrer"}, 52% of organisations surveyed across ten countries, including Australia, said they had been targeted by ransomware on holidays or weekends. In the same survey, 78% said they cut security operations staffing by half or more during those periods. Semperis sells identity recovery products, so read the figures as a vendor survey, but the pattern fits with the reduced staffing it describes.

Schools have a particular version of this problem: long holiday periods when key staff are away. A school that can only respond during business hours, and only when one or two key people are available, carries a gap that no annual report will close.

## A good audit can still leave that gap open

Here is the uncomfortable version:

> A school can complete its annual cyber security audit and still have nobody authorised to contain a compromised account during the holidays. The audit may have been valuable. The unanswered question is what happens between assessments.

This is not an argument against audits. Independent assessment tells a board what was examined, what failed and what needs fixing. Penetration testing shows whether weaknesses can actually be exploited. Without independent assurance, a school is mostly relying on its own view of itself.

An assessment is still evidence about a scope at a point in time. It does not watch the tenant at 2am on a Saturday. It does not revoke a session token when a teacher's password is phished. It does not decide whether to take a system offline during exams.

Assessment findings also only help if they are fixed. Western Australia's Auditor General makes this point bluntly. Its [2025 information systems audit of 53 state government entities](https://audit.wa.gov.au/reports-and-publications/reports/state-government-2025-information-systems-audit-results/){:target="_blank" rel="noopener noreferrer"} found that almost two thirds of findings were unresolved from previous years, including 57% of significant findings. Those entities were being audited every year. The gap was in what happened afterwards.

The [CIS Critical Security Controls](https://www.cisecurity.org/controls/cis-controls-list){:target="_blank" rel="noopener noreferrer"} are a practical way to see the difference. Of the 18 Controls in version 8.1, Penetration Testing is only one (Control 18). Others describe work that never finishes: Continuous Vulnerability Management (7), Audit Log Management (8), Network Monitoring and Defense (13) and Incident Response Management (17). CIS also groups its safeguards into [Implementation Groups](https://www.cisecurity.org/controls/implementation-groups){:target="_blank" rel="noopener noreferrer"}. IG1 is described as "essential cyber hygiene", which gives a school a realistic place to start.

Buying a managed service does not replace prevention, governance or assurance either. Assessment and ongoing operation answer different questions, and boards need evidence that both are working.

## The sector context

Aon's [*2026 Independent Schools Risk Report*](https://schoolsriskreport.aon.com.au/){:target="_blank" rel="noopener noreferrer"} ranked cyber risk first among participating schools, and 25% of participating schools reported cyber attacks, up from 20% in 2024. I covered the report in more detail in [What Aon's 2026 risk report tells independent schools about cyber resilience]({% post_url 2026-07-19-cyber-risk-independent-schools-australia %}).

The usual caution applies. The survey covered 306 independent schools, and Aon notes that the findings are not representative of every Australian independent school. It measures reported experience and priorities. It does not measure how many schools use managed detection and response, and it is not a school's probability of being breached.

Regulator data points the same way. The OAIC received **81 notifications from the education sector** under the Notifiable Data Breaches scheme in 2025, the fifth highest of any sector. Across all sectors, 716 of the 1,205 notifications were attributed to malicious or criminal attacks. [OAIC 2025 statistics](https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show){:target="_blank" rel="noopener noreferrer"}.

## Getting the terms straight

Board papers and supplier proposals sometimes use these terms interchangeably. They are not the same thing.

| Approach | Main question it answers | Principal limitation |
|---|---|---|
| Point-in-time audit or assessment | Are the controls appropriate and demonstrably operating within the assessed scope? | Conclusions depend on scope, sampling, evidence and timing. |
| Penetration testing | Can an authorised tester exploit weaknesses and reach something consequential? | Does not continuously monitor the environment. |
| Managed Detection and Response (MDR) | Can specialists detect, investigate and contain suspicious activity? | Coverage depends on telemetry, integrations, operating procedures and contractual authority. |
| Security Operations Centre (SOC) | Who operates detection and response, using which tools and processes? | A SOC can be internal, outsourced or hybrid; the label does not establish effectiveness. |
| Broader managed security | Who maintains configurations, vulnerabilities, identities and readiness? | These activities may be separate from an MDR subscription. |

Three further distinctions are worth holding onto:

- **EDR and XDR are technologies. MDR is a service.** Endpoint detection and response software raises alerts. MDR is people investigating those alerts and, where authorised, acting on them.
- **A SIEM collects and analyses security information.** Buying one does not provide the people needed to tune it, watch it and respond to it.
- **An alert is not a response.** A provider that emails the IT manager at 1am has detected something. It has not contained anything.

I wrote about the difference between scanning, penetration testing and tested readiness in [Testing your defences and preparing to fail safely]({% post_url 2026-08-31-testing-defences-failing-safely-ai-era %}). This series builds on that. Testing tells you where you stand; someone still has to be watching and able to act.

## Why schools are harder than they look

Schools are not uniquely vulnerable, but three things make detection and response harder to scope:

- **Identities change constantly.** New intakes, graduating cohorts, relief teachers, contractors and volunteers all come and go. Verizon's [2025 Data Breach Investigations Report](https://www.verizon.com/about/news/2025-data-breach-investigations-report){:target="_blank" rel="noopener noreferrer"} found credential abuse was the most common way in, at 22% of breaches.
- **Suppliers hold much of the data.** The same report found third-party involvement in breaches had doubled to 30%. [ST4S](https://st4s.edu.au/general-information/){:target="_blank" rel="noopener noreferrer"} assessments help, but the school still makes the decision. I covered that in [How independent schools should govern technology approvals]({% post_url 2026-09-12-privacy-act-reforms-independent-schools-governance %}).
- **The information is sensitive.** Health, safeguarding, family and financial records, sometimes going back many years, as the St James reporting shows.

### The device nobody manages

One scenario deserves particular attention because it sits in the gap between audit and monitoring.

A student's laptop or a staff member's phone joins the school Wi-Fi. The school doesn't manage it, and it doesn't run the school's endpoint agent. It may already be compromised, perhaps by a "free AI assistant" app that turned out to be malware. From inside the network, it starts scanning for file shares, printers, management interfaces and other internal services. It may also try the saved school credentials it has already harvested.

This is not far-fetched. ESET has [reported fake generative AI apps in mobile app stores](https://www.welivesecurity.com/en/cybersecurity/beware-fake-ai-tools-masking-very-real-malware-threat/){:target="_blank" rel="noopener noreferrer"}, many carrying malware designed to steal credentials and other data. Verizon's 2025 report found that [46% of systems compromised by infostealers that held corporate logins were non-managed devices](https://www.verizon.com/business/resources/infographics/2025-dbir-infographic.pdf){:target="_blank" rel="noopener noreferrer"}, most likely BYOD or personal devices.

Endpoint monitoring won't see that device, because there is no agent on it. What can help:

- **Segmentation**, so the BYOD network cannot reach internal services at all.
- **Network monitoring** on the segments where unmanaged devices connect.
- **Conditional access policies** that limit what an unmanaged device can do with a school account.
- **Identity alerts** for sign-ins from unfamiliar devices or locations.

An annual penetration test might find that the BYOD network can reach something it shouldn't. Only ongoing monitoring will notice the day a device actually starts trying. I wrote more about AI tools as a new attack surface in [Agentic AI and your attack surface]({% post_url 2026-08-24-agentic-ai-attack-surface-schools-nfps-businesses %}).

## Before the next Friday afternoon

You do not need a new contract to reduce the Friday afternoon risk. Most of these steps can be completed this term:

1. **Write down the call list.** Include the incident response provider, the insurer's incident line, the MSP's after-hours escalation, key EdTech suppliers' security contacts and legal or privacy advisers. Store it somewhere that remains available if email or the tenant is unavailable.
2. **Confirm what your current contracts actually cover.** Check hours, response times, whether containment is included, and whether the provider can act or can only notify.
3. **Pre-authorise specific actions.** Decide who can disable accounts, revoke sessions, isolate devices or take a service offline, and what they can do without waiting for approval.
4. **Name a decision-maker and a deputy for each holiday period.** Include someone who can make privacy and communication decisions, not only technical ones.
5. **Know how your breach assessment starts.** Know who begins the assessment, where it is recorded and who advises on notification.
6. **Run a one-hour tabletop exercise** using exactly the Friday afternoon scenario above. The gaps become obvious quickly.

That will not make a school secure on its own. It does mean the first hour of an incident is spent acting, not searching for phone numbers.

**[Part 2: What school boards need to see](/posts/school-cyber-audits-vs-managed-security-part-two/) looks at governance, legal obligations and the evidence a governing body should expect.**

---

*Incident details in this post come from the public reporting linked above. The Friday afternoon scenario is a composite of situations described to me by people working in school IT, not an account of any particular school. This is general information, not legal advice.*
