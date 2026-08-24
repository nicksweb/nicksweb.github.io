---
title: "The CIA Triad: the foundation every cyber security decision sits on"
description: "A plain-English guide to the CIA Triad — confidentiality, integrity and availability — and how Australian organisations, from schools to banks, balance all three."
keywords: [CIA triad, confidentiality integrity availability, cyber security fundamentals, information security basics, cyber security framework Australia]
date: 2026-07-29 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, fundamentals]
---

Almost every meaningful decision in cyber security eventually comes back to the same three words: confidentiality, integrity and availability. Together they form the **CIA Triad**, one of the oldest and still most useful models in information security.

It is not a product, a certification or a piece of software. It is a way of thinking. Whenever a business, school, hospital or government agency has to decide how to protect a system, it is really deciding how to balance these three properties against each other — and that balancing act is what separates a genuinely secure system from one that just looks secure on paper.

Fortinet's [cyber glossary entry on the CIA Triad](https://www.fortinet.com/resources/cyberglossary/cia-triad){:target="_blank" rel="noopener noreferrer"} describes it well: the model "forms the basis for the development of security systems," giving security teams a practical checklist for building policy, assessing incidents and training staff. I want to unpack what that looks like in practice for organisations here in Australia — including a few real cities and the kinds of organisations you'd find in them.

{% include embed/youtube.html id='kPPFNrlN3zo' %}

## Confidentiality — only the right people can see it

Confidentiality means sensitive information is only accessible to the people who are supposed to see it. That is enforced through encryption, access controls, multi-factor authentication and simply not granting more access than a role requires.

Picture a regional bank branch in **Adelaide**. Customer account balances, loan applications and identity documents are confidential by definition — a teller needs to see a customer's balance to process a transaction, but has no legitimate reason to browse every account in the branch. Role-based access control and audit logging are what keep that boundary in place, not good intentions.

## Integrity — the data can be trusted

Integrity means data has not been altered, whether by accident, a system fault or a malicious actor, and that any change can be detected. Hashing, digital signatures, version control and change logging all support integrity.

A large independent school — a system similar in scale to what you would find at a school like **Brisbane Girls Grammar School** in **Brisbane** — depends heavily on integrity in its student information system. Grades, attendance records and enrolment data all need to be exactly right, and any change needs to be traceable to a specific person and time. If a mark or an attendance record could be quietly altered with no trail, the whole system loses meaning, regardless of how confidential it is.

## Availability — it works when it's needed

Availability means systems and data are accessible when legitimate users need them. This is where redundancy, backups, disaster recovery planning and patched, well-maintained infrastructure earn their keep.

Think of a hospital network in **Melbourne** or a logistics operator in **Perth**: a patient record or a freight system that is perfectly confidential and perfectly accurate is still a failure if a clinician or dispatcher can't reach it during an outage. Ransomware attacks are, at their core, an attack on availability — data is usually still confidential and unaltered, it is simply locked away from the people who need it.

## Why balance matters more than any single pillar

The reason the CIA Triad has lasted as long as it has is that it forces trade-offs into the open. Lock a system down so tightly for confidentiality that staff can't do their jobs, and you've damaged availability. Make backups so freely available that anyone can restore or overwrite production data, and you've damaged integrity. Every control — an MFA policy in **Sydney**, a firewall rule in **Darwin**, a backup schedule in **Hobart**, a change-approval process in **Canberra** — is really a decision about where that organisation sits on the confidentiality/integrity/availability triangle.

This is exactly why the CIA Triad is used as the starting point for security frameworks, audits and incident reviews. When something goes wrong, the first useful question is which pillar failed: was data exposed (confidentiality), tampered with (integrity), or made unreachable (availability)? That question shapes everything that follows, from the technical response to what you tell customers, students or regulators.

## Putting it into practice

For most small and mid-sized organisations, the CIA Triad does not need to be a formal framework exercise. It needs to be a lens applied to ordinary decisions:

- Who actually needs access to this system, and can we prove it (confidentiality)?
- How would we know if this data had been quietly changed (integrity)?
- If this system went down tomorrow, how long could we survive, and what's our recovery plan (availability)?

Suburban Secure works through exactly these questions with businesses, schools and not-for-profits as part of its [managed IT services](https://suburbansecure.au/managed-it-services/){:target="_blank" rel="noopener noreferrer"} and [network security services](https://suburbansecure.au/network-security-services/){:target="_blank" rel="noopener noreferrer"}, tailoring the balance of confidentiality, integrity and availability to the organisation rather than applying a one-size-fits-all template. There are dedicated pages for organisations in [Brisbane](https://suburbansecure.au/locations/brisbane-qld/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Sydney](https://suburbansecure.au/locations/sydney-nsw/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Melbourne](https://suburbansecure.au/locations/melbourne-vic/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Perth](https://suburbansecure.au/locations/perth-wa/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Adelaide](https://suburbansecure.au/locations/adelaide-sa/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Darwin](https://suburbansecure.au/locations/darwin-nt/managed-services/){:target="_blank" rel="noopener noreferrer"}, [Hobart](https://suburbansecure.au/locations/hobart-tas/managed-services/){:target="_blank" rel="noopener noreferrer"} and [Canberra](https://suburbansecure.au/locations/canberra-act/managed-services/){:target="_blank" rel="noopener noreferrer"}.

The bank example, the school example and the hospital example above are illustrative — they describe the kind of decisions any organisation of that type and size typically has to make, not a claim about any specific organisation's actual security posture. But the underlying lesson holds everywhere: good security isn't about maximising any one of confidentiality, integrity or availability. It's about consciously balancing all three for what your organisation actually needs.

_Further reading: Fortinet's [CIA Triad cyber glossary entry](https://www.fortinet.com/resources/cyberglossary/cia-triad){:target="_blank" rel="noopener noreferrer"}._
