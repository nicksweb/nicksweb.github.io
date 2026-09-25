---
title: "The Friday afternoon call: why a school cyber audit is not a response plan (Part 1)"
description: "A recent Perth school breach shows why schools need independent assurance and someone able to act between audits, including after hours."
keywords: [school cyber security incident, school data breach Australia, managed detection and response schools, school cyber security audit, St James Anglican School cyber attack, education incident response]
date: 2026-09-26 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, education, governance, incident-response]
wrap_tables: true
---

In mid-September, St James Anglican School in Perth's north disclosed a cyber security incident involving unauthorised access to its computer systems. According to [reporting carried on MSN](https://www.msn.com/en-au/general/general/student-info-stolen-in-school-cyber-attack/ar-AA2cfZ0o){:target="_blank" rel="noopener noreferrer"}, the school said it had contained the incident and secured its systems, but that personal information relating to members of the school community was involved.

*The West Australian* reported that the information copied included names, addresses, emails, phone numbers, bank account details, student medical records and photographs of current and former students enrolled since 2015. The school said it had notified families, given them practical steps to protect their information, and reported the incident to the Australian Information Commissioner and other relevant authorities. It said it was continuing to work closely with its cyber security advisers. [Insurance Business](https://www.insurancebusinessmag.com/au/news/cyber/education-clients-face-broader-cyber-exposure-after-perth-school-breach-590098.aspx){:target="_blank" rel="noopener noreferrer"} has since covered what the breach means for education clients more broadly.

I have no inside knowledge of the incident, and this post does not speculate on how it happened. The school's public statements describe the steps you would hope to see: containment, notification, regulator reporting and ongoing specialist support. Schools that have not been through an incident can still learn from it.

It is also not an isolated case. Closer to home, this site has covered the [Canvas-related breach affecting Townsville schools]({% post_url 2026-05-13-nq-cyber-watch-townsville-schools-canvas-breach %}) and [Townsville Catholic Education's auto-forwarding breach]({% post_url 2026-07-03-nq-cyber-watch-tce-auto-forwarding-breach %}). Each incident had a different cause, but the question for school leaders is the same: **when something is found, who is able to act, and how quickly?**

This is the first part of a four-part series, *Cyber security audits vs managed security: what Australian school boards need to know*. It sets out the problem and the terms. [Part 2]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) covers board governance and legal obligations, [Part 3]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-three %}) compares costs over three years, and [Part 4]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-four %}) looks at how Australian education systems are actually organising security operations.

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
- Does our cyber insurance policy require us to use a particular panel firm, and have we notified the insurer?
- Who can authorise disabling the principal's account, isolating the finance system or taking the parent portal offline?
- Who decides whether this is a notifiable data breach, and when does that assessment start?
- Who talks to families, and who approves what they are told?

None of this is unusual. Attackers have long favoured weekends and holidays because fewer people are watching. Suppliers can discover a problem at any hour, and school timetables do not stop incidents from starting in the holidays. A school that can only respond during business hours, and only when one or two key people are available, carries a gap that no annual report will close.

## A good audit can still leave that gap open

Here is the uncomfortable version:

> A school can complete its annual cyber security audit and still have nobody authorised to contain a compromised account during the holidays. The audit may have been valuable. The unanswered question is what happens between assessments.

This is not an argument against audits. Independent assessment tells a board what was examined, what failed and what needs fixing. Penetration testing shows whether weaknesses can actually be exploited. Without independent assurance, a school is mostly relying on its own view of itself.

An assessment is still evidence about a scope at a point in time. It does not watch the tenant at 2am on a Saturday. It does not revoke a session token when a teacher's password is phished. It does not decide whether to take a system offline during exams.

The direction across the industry is towards **continuous risk management, supported by periodic independent testing**. Buying a managed service does not replace prevention, governance or assurance either. The two answer different questions, and boards need evidence that both are working.

## The sector context

Aon's *2026 Independent Schools Risk Report* ranked cyber risk first among participating schools, and one in four participating schools reported experiencing a cyber attack. I covered the report in more detail in [What Aon's 2026 risk report tells independent schools about cyber resilience]({% post_url 2026-07-19-cyber-risk-independent-schools-australia %}).

The usual caution applies. The survey covered 306 independent schools, and Aon notes that the findings are not representative of every Australian independent school. It measures reported experience and priorities. It does not measure how many schools use managed detection and response, and it is not a school's probability of being breached. What it does do is confirm that cyber risk is a leading concern in the sector.

## Getting the terms straight

Much of the confusion in board papers and supplier proposals comes from terms being used interchangeably. They are not the same thing.

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

Schools are not uniquely vulnerable, but several features make detection and response harder to scope than in a typical small business. These are practical scoping considerations, not a claim that every school has the same risk profile.

**Identity turnover.** Every year brings a new intake and a graduating cohort. Add relief teachers, contractors, volunteers, coaches, role changes and accounts that quietly survive after someone leaves. Identity is often where incidents start, and it changes constantly.

**BYOD and mixed devices.** Personal laptops, shared classroom devices, Chromebooks, tablets and specialist equipment often cannot run the chosen endpoint agent. Whatever cannot be monitored needs to be documented as a blind spot, not assumed to be covered.

**EdTech dependencies.** Learning platforms, student information systems, parent portals, payment services, wellbeing applications and their integrations all hold or move school data. Some incidents begin inside a supplier's environment, not the school's.

**Consequential information.** Schools hold health information, safeguarding records, disability and learning-support information, family circumstances, financial details and government identifiers. The St James reporting is a reminder that this can include medical records and photographs going back many years.

**Continuity.** Attendance, emergency communications, payroll, teaching, examinations and boarding must keep working during an incident. Containment decisions have real consequences for students and staff, which is why someone needs pre-agreed authority to make them.

Supplier assessments help with the EdTech problem. [Safer Technologies 4 Schools (ST4S)](https://st4s.edu.au/general-information/){:target="_blank" rel="noopener noreferrer"} provides assessment evidence used across government, Catholic and independent education. Its findings should inform a school's decision about a particular product, configuration and use. They do not replace that decision. I covered how to turn that evidence into an accountable approval in [How independent schools should govern technology approvals]({% post_url 2026-09-12-privacy-act-reforms-independent-schools-governance %}).

## Before the next Friday afternoon

You do not need a new contract to reduce the Friday afternoon risk. Most of these steps can be completed this term:

1. **Write down the call list.** Include the incident response provider, the insurer's incident line, the MSP's after-hours escalation, key EdTech suppliers' security contacts and legal or privacy advisers. Store it somewhere that remains available if email or the tenant is unavailable.
2. **Confirm what your current contracts actually cover.** Check hours, response times, whether containment is included, and whether the provider can act or can only notify.
3. **Pre-authorise specific actions.** Decide who can disable accounts, revoke sessions, isolate devices or take a service offline, and what they can do without waiting for approval.
4. **Name a decision-maker and a deputy for each holiday period.** Include someone who can make privacy and communication decisions, not only technical ones.
5. **Know how your breach assessment starts.** Know who begins the assessment, where it is recorded and who advises on notification.
6. **Run a one-hour tabletop exercise** using exactly the Friday afternoon scenario above. The gaps become obvious quickly.

That will not make a school secure on its own. It does mean the first hour of an incident is spent acting, not searching for phone numbers.

**[Part 2: What school boards need to see]({% post_url 2026-09-26-school-cyber-audits-vs-managed-security-part-two %}) looks at governance, legal obligations and the evidence a governing body should expect.**

---

*Incident details in this post come from the public reporting linked above. The Friday afternoon scenario is a composite of situations described to me by people working in school IT, not an account of any particular school. This is general information, not legal advice.*
