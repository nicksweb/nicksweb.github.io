---
title: "Secure by design: the principles behind every good cyber security decision"
description: "Secure by design, least privilege, defence in depth and failing safely — the operating principles schools, charities and small businesses can use to make sensible security decisions."
keywords: [secure by design, least privilege, defence in depth, fail securely, cyber security principles, small business cyber security Australia]
date: 2026-08-10 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, fundamentals]
---

The [CIA Triad]({% post_url 2026-07-29-cia-triad-foundations-of-cyber-security %}) explains *what* good security is trying to protect: confidentiality, integrity and availability. It doesn't tell you *how* to get there day to day. That's where a small set of operating principles earns its keep — ideas simple enough to explain to a school board or a charity committee, but rigorous enough to guide a technical build.

I use the same handful of principles whether I'm talking to a P&C committee, a not-for-profit board or a small business owner. None of them require a large budget. They require a decision to think about security before something is built, rather than after it breaks.

## Secure by design — build it in, don't bolt it on

A security control added after a system is already live is always more expensive, more disruptive and less complete than one designed in from the start. Retrofitting multi-factor authentication onto a system that thousands of people already use badly is a much bigger project than requiring it on day one.

A regional charity setting up a new donor database, or a school choosing a new enrolment system, is in exactly this position. The vendor selection meeting — not the go-live date — is the moment to ask who can see what, how access is removed when someone leaves, and what happens if the system fails. Those questions are cheap to ask early and expensive to answer late.

## Least privilege — access is not a convenience

The principle of least privilege is simple: give people, systems and integrations only the access they need to do their specific job, and nothing more.

In practice this is usually a hygiene problem rather than a technical one. A bookkeeper at a Cairns real estate agency needs access to the trust account software, not to every staff member's email. A volunteer coordinator at a Toowoomba charity needs the roster, not the full donor and finance system. Access accumulates over time as people change roles or "just need it for one thing" — and rarely gets removed again. Reviewing who actually has access to what, on a regular schedule, is one of the highest-value, lowest-cost habits an organisation can build.

## Defence in depth — no single lock does the job

No individual control is perfect, so good security uses multiple, overlapping layers rather than relying on any one of them.

Think of it the way you'd think about physically securing a building: a lock on the front door is a start, but a well-protected building also has internal access controls, motion sensors and a way of noticing when something unusual happens after hours. The same logic applies digitally — a firewall, multi-factor authentication, endpoint protection, backups and monitoring are each individually beatable, but an attacker who gets past one still has to get past the next. For a Townsville accounting firm or a suburban primary school, this is the difference between one bad click leading to a shrug and one bad click leading to a genuine incident.

## Fail securely — assume something will break

No system runs perfectly forever. Connections drop, licences lapse, integrations break, staff mistype configuration. The question worth asking in advance is: when this fails, does it fail open or fail closed?

A door that unlocks itself during a power failure has failed open. A payment terminal that quietly accepts transactions when it can't check the card is failed open. Good design assumes failure and chooses, deliberately, to fail in the safer direction — block access rather than grant it, alert someone rather than stay silent, and keep a record of what happened so it can be reviewed afterwards.

## No system is ever 100 percent secure

It's worth saying plainly: no organisation, no matter how well resourced, reaches a state of being "done" with security. Some of the world's largest technology and financial services companies run ongoing bug bounty programs, paying independent researchers to find weaknesses in their own systems before someone with worse intentions does. If organisations with that scale of investment still treat security as an ongoing process rather than a finished project, it's a reasonable expectation for the rest of us too.

## Bringing it back to your organisation

Applied together, these principles turn into a short set of questions worth asking about any system your organisation depends on:

- Was security considered when this was chosen or built, or only after something went wrong?
- Does everyone who has access actually still need it?
- If one control failed tonight, what's the next layer behind it?
- When this system breaks, does it fail toward safety or toward exposure?

Suburban Secure works through exactly these questions with businesses, schools and not-for-profits as part of its [managed IT services](https://suburbansecure.au/managed-it-services/){:target="_blank" rel="noopener noreferrer"} and [network security services](https://suburbansecure.au/network-security-services/){:target="_blank" rel="noopener noreferrer"}, including organisations around [Townsville and North Queensland](https://suburbansecure.au/locations/townsville-qld/managed-services/){:target="_blank" rel="noopener noreferrer"}. None of the examples above describe a specific organisation's actual security posture — they're illustrative of the kinds of decisions any organisation of that type and size typically has to make.

The next post in this series looks at how artificial intelligence is changing both sides of this equation — and why these same principles matter more, not less, once AI is in the mix.
