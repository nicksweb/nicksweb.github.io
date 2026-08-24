---
title: "Secure by design: the principles behind every good cyber security decision"
description: "What secure by design means in practice: safer defaults, least privilege, layered defences, supported technology and Australian Government guidance."
keywords: [secure by design, secure by design Australia, secure by default, least privilege, defence in depth, fail securely, minimise attack surface, cyber security principles, small business cyber security Australia]
date: 2026-08-10 09:00:00 +1000
last_modified_at: 2026-08-24 21:44:00 +1000
categories: [Cyber Security]
tags: [cyber-security, fundamentals, secure-by-design, least-privilege]
image:
  path: /assets/images/zulfugar-karimov--nBClEqKKVM-unsplash.jpg
  alt: A security dashboard showing network, application and threat status indicators.
---

The [CIA Triad]({% post_url 2026-07-29-cia-triad-foundations-of-cyber-security %}) explains *what* good security is trying to protect: confidentiality, integrity and availability. It does not tell you *how* to get there day to day. That is where **secure by design** earns its keep.

One of the largest lessons I have taken from working across infrastructure, cloud platforms, networks and business systems is this: build it securely from the beginning. Retrofitting security after a system is live is usually more expensive, more disruptive and less complete than making the right design choices before anyone depends on it.

The second lesson is just as important: ask someone else who understands the technology, **“What are we missing?”** A fresh set of experienced eyes will often notice an exposed administration panel, an over-privileged account, an unsupported device or a recovery assumption that the original designer has stopped seeing.

*Photo by [Zulfugar Karimov](https://unsplash.com/@zulfugarkarimov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/a-security-and-privacy-dashboard-with-its-status--nBClEqKKVM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}.*

## What secure by design means in Australia

The Australian Signals Directorate's Australian Cyber Security Centre describes [Secure by Design](https://www.cyber.gov.au/business-government/secure-design/secure-by-design){:target="_blank" rel="noopener noreferrer"} as a proactive approach in which cyber threats are considered from the outset and mitigated through thoughtful design, architecture and security measures. Security then has to be maintained throughout the product's lifecycle.

That definition is broader than “developers should write safer code”. It applies to:

- manufacturers designing software and hardware;
- organisations selecting products and suppliers;
- technical teams configuring and integrating them;
- managers deciding how people will use them; and
- administrators maintaining, monitoring and eventually retiring them.

ASD's ACSC also distinguishes **secure by default**: a product should provide an adequate security baseline out of the box, with controls such as multi-factor authentication, auditing and event logging available without forcing customers to buy an additional security tier.

The Government's [Secure by Design foundations](https://www.cyber.gov.au/business-government/secure-design/secure-by-design/secure-by-design-foundations){:target="_blank" rel="noopener noreferrer"} make the shared responsibility clear. Customers should expect safer products, but they must still understand the risks of procuring, configuring and operating them. A secure product can be weakened by insecure deployment; careful configuration cannot permanently rescue a product whose manufacturer has stopped fixing vulnerabilities.

## The core principles

### Build security in from the beginning

A regional charity setting up a donor database, a school choosing an enrolment platform or a business commissioning a new website is making security decisions long before the system goes live.

The design stage is when to ask:

- What information will this system hold, and does it need all of it?
- Who will administer it, and from where?
- Can administration be separated from ordinary day-to-day use?
- What will be reachable from the public internet?
- What logs will exist, who will review them and how long will they be retained?
- How are security updates delivered, and how long will the product be supported?
- How will access be removed when a staff member, contractor or supplier leaves?
- Can the system be restored if an update, mistake or attack takes it offline?

Those questions cost little before purchase or development. They become change requests, outages and emergency projects afterwards.

### Secure by default

The safe path should also be the easiest path. New accounts should not begin with administrative rights. Multi-factor authentication should be enabled during setup, not left as an optional project. Logging should be on before an incident creates a reason to inspect it. Unused services and remote-management features should begin disabled.

Defaults matter because many organisations never substantially change them. If a product requires every customer to discover and correct the same dangerous configuration, the risk has been transferred to the least-prepared user.

### Least privilege

Least privilege means giving a person, program, device or integration only the access required for its role—and only for as long as that access is needed.

This should be built into the system's roles rather than managed through memory and goodwill. A useful business application might separate:

- a front-desk or service role that can create and update customer records;
- a finance role that can view invoices and payments;
- a manager role that can approve exceptional actions;
- a reporting role that can read information without changing it; and
- an administrator role that can change the system itself.

If everybody needs to be made an administrator for the product to work, that is not merely an operational inconvenience. It is a design or procurement risk.

The same principle applies to service accounts and integrations. A website integration that only sends a contact form should not have permission to read every mailbox. A backup service should not use the same all-powerful credentials as an everyday administrator. Temporary elevated access should expire rather than quietly becoming permanent.

Restricting administrative privileges is also included in ASD's ACSC [Essential Eight](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained){:target="_blank" rel="noopener noreferrer"} mitigation strategies, alongside patching, multi-factor authentication and regular backups.

### Defence in depth

No individual control is perfect. Defence in depth uses multiple, overlapping layers so one mistake or failure does not become the whole incident.

For an administration portal, that could mean:

1. it is not exposed directly to the whole internet;
2. access is limited to a private network, VPN or known source addresses;
3. administrators connect through a hardened jump box or dedicated administrative workstation;
4. each administrator uses a separate named account with strong multi-factor authentication;
5. privileged actions are logged and alerts are generated for unusual behaviour; and
6. tested backups exist if a legitimate but damaging change is made.

An IP allowlist can be a useful layer, but it is not authentication and should not be the only control. A compromised device on an allowed network, a badly managed VPN or an emergency rule left in place can still create a path in. The point of layers is that no single assumption has to be perfect.

For a small business website, a simpler version might be enough: restrict the administration path, require individual accounts and MFA, update through a controlled management host, remove unused plugins and accounts, and keep an independently restorable backup. The exact architecture should match the consequences and risk—not somebody's desire to make the diagram look impressive.

### Fail securely

No system runs perfectly forever. Connections drop, licences lapse, updates fail, dependencies disappear and people make mistakes. Good design asks in advance: when this fails, does it fail open or fail closed?

If an identity service cannot verify an administrator, the safe response is normally to block access rather than silently bypass authentication. If a security update fails integrity checking, it should not be installed. If monitoring stops receiving logs, somebody should be alerted rather than assuming silence means everything is fine.

Failing securely does not mean making a service unusable whenever anything unexpected occurs. Availability matters too. It means deliberately choosing the safe failure behaviour, documenting the trade-off and building a recovery path rather than discovering the behaviour during an incident.

### Minimise the attack surface and keep the design understandable

Every enabled service, plugin, integration, public port and privileged account creates something else to maintain and potentially defend. If a feature is not required, disabling or removing it is usually safer than leaving it available “just in case”.

Complexity carries a similar cost. A design that only one person understands is difficult to review, monitor and recover. Good security architecture should be explainable, documented and testable by someone other than its original designer.

## Ask another person: what are we missing?

Secure by design should include design review. That does not always require a formal penetration test or a large consulting project. It can begin by placing the proposed workflow and architecture in front of someone familiar with that class of system and asking them to challenge it.

Useful review questions include:

- What would you attack first?
- Which assumption are we making about staff, a supplier or the network?
- Is the administration path more exposed than the customer-facing service needs it to be?
- Does one account, device or integration have enough privilege to compromise everything?
- What happens if the cloud service, internet connection or identity provider is unavailable?
- Can we recover without relying on the same system that failed?
- Who will own patching, access reviews and logs six months after go-live?

The person who designed a system knows why every decision was made. That context is useful, but it can also make an unsafe assumption feel obvious and permanent. Independent review is a control in its own right.

## Choosing hardware and software that can stay secure

Secure by design continues into procurement. Joint guidance led by ASD's ACSC on [choosing secure and verifiable technologies](https://www.cyber.gov.au/business-government/secure-design/secure-by-design/choosing-secure-and-verifiable-technologies){:target="_blank" rel="noopener noreferrer"} recommends assessing both the product's baseline security and the likelihood that security will be maintained throughout its lifecycle.

Before choosing a firewall, access point, NAS, camera system, business application or cloud service, ask:

- Does the manufacturer publish release notes and security advisories?
- Is there a clear process for reporting vulnerabilities?
- Are security patches supplied without an additional fee?
- What is the promised support period for this exact model or version?
- Is end-of-support communicated early enough to plan a replacement?
- Can updates be tested, scheduled and rolled back if necessary?
- Does the product support MFA, individual administrator accounts, role-based access and useful audit logs?
- Can configurations and data be exported and restored without relying entirely on the vendor's cloud?

Manufacturers such as Ubiquiti and Synology are familiar examples in small-business infrastructure. Ubiquiti maintains an official [software and firmware releases catalogue](https://ui.com/download/releases){:target="_blank" rel="noopener noreferrer"}; Synology publishes [DSM release notes](https://www.synology.com/en-global/releaseNote/DSM){:target="_blank" rel="noopener noreferrer"} and a public [product security advisory](https://www.synology.com/en-global/security/advisory){:target="_blank" rel="noopener noreferrer"}. That visibility makes it possible to assess update activity and respond to known issues.

It is not a blanket endorsement, and frequent updates alone do not prove that a product is secure. The relevant questions concern the exact product, its configuration, its remaining support lifecycle and whether somebody in the organisation will actually monitor and apply those updates. A well-supported device left unpatched is still an unmanaged risk.

## A practical secure-by-design review

Before approving a system, website or device deployment, I would want the organisation to be able to answer five things:

1. **What are we protecting?** The important data, business process and consequences of compromise are understood.
2. **Who can do what?** Roles support least privilege, privileged access is separated and departures trigger access removal.
3. **What can reach it?** Public exposure, remote administration, integrations and unnecessary services are understood and minimised.
4. **How will it stay secure?** Ownership exists for updates, monitoring, vulnerability notices, access reviews and eventual replacement.
5. **How will it fail and recover?** Safe failure behaviour, business continuity and tested restoration are designed before go-live.

No system will ever be 100 per cent secure. Secure by design is not a promise of perfection; it is a way of avoiding preventable risk, making compromise harder and limiting the consequences when a control eventually fails.

Suburban Secure can act as an [independent partner and second set of eyes](https://suburbansecure.au/why-not-an-msp/){:target="_blank" rel="noopener noreferrer"} before a purchase, build or major configuration change. The aim is not to replace an organisation's existing MSP or internal team. It is to challenge assumptions, document risks and produce recommendations that the organisation can implement through whoever it chooses. This kind of review is available for organisations around [Townsville](https://suburbansecure.au/cyber-security-townsville/){:target="_blank" rel="noopener noreferrer"}, [Cairns](https://suburbansecure.au/cyber-security-cairns/){:target="_blank" rel="noopener noreferrer"} and elsewhere in Australia.

Secure by design begins with a deceptively simple question: **if we were starting again today, knowing what we know now, would we build it this way?** It is much cheaper to ask that before go-live than after an incident.
