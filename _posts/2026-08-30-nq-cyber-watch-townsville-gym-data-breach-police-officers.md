---
title: "North Queensland Cyber Watch: a Townsville gym data breach reaches serving police officers"
description: "Serving Townsville police officers were caught up in a data breach linked to a Burdell gym, with client details reportedly found on a USB during a police raid. What is known, why a data breach is not always a hack, and what it says about the platforms gyms run on."
keywords: [Townsville gym data breach, Strand Fitness North Shore data breach, Townsville police officers data breach, Burdell data breach, North Queensland Cyber Watch, gym management software breach, Xplor Resamania breach, fitness app API security, OAIC notifiable data breach]
date: 2026-08-30 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, north-queensland-cyber-watch, data-breach, privacy, fitness]
image:
  path: /assets/images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg
  alt: A person standing in a gym surrounded by exercise equipment, the kind of fitness business that runs on a member database of names, contact details and identity documents.
---

This is the eighth entry in **North Queensland Cyber Watch**, an ongoing series looking at cyber security incidents that affect our region and what organisations here can take from them.

This entry is a few months behind the news, and it needs a careful first sentence: what has been reported is that personal details of serving Townsville police officers were caught up in a data breach connected to a local gym, and that Queensland Police confirmed officers were investigating "a data breach incident at a business on Main Street, Burdell". It is understood the business is Strand Fitness North Shore, which is **not accused of any wrongdoing**. According to the reporting, the client information was held by a **separate third party**, not by the gym itself.

That distinction matters, and so does another one this entry keeps coming back to: a *data breach* is not the same thing as a *hack*. We do not know how this data left the gym's control, and the honest answer is that it could have been anything from a criminal intrusion to a misconfigured setting or an old export sitting on someone's laptop.

*Photo by [Danielle Cerullo](https://unsplash.com/@dncerullo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/woman-standing-surrounded-by-exercise-equipment-CQfNt66ttZM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}.*

## What has been reported

The [Townsville Bulletin reported on 6 June 2026](https://www.townsvillebulletin.com.au/truecrimeaustralia/police-courts-townsville/fears-townsville-data-breach-exposes-personal-details-of-police-officers/news-story/cbfc68baf73a146cefa2e47c0c6bc4fe){:target="_blank" rel="noopener noreferrer"}, in a story by Cameron Bates and Holly Fishlock, that there were fears highly sensitive personal details of serving Townsville police officers had been breached.

The Queensland Police Service confirmed officers were investigating "a data breach incident at a business on Main Street, Burdell" and said that, due to ongoing investigations, it was unable to comment further. The Bulletin reported that the business is understood to be Strand Fitness North Shore.

According to a source quoted by the paper, the information that was exposed included **names, occupations, email addresses, phone numbers and addresses**, and it related to "every member of one of the Strand Fitness branches", not only police officers. The source said the data was found on a USB device during a police raid about two weeks earlier, and described the find as deeply concerning, "particularly if it gets in the hands of organised crime".

The Bulletin also reported an internal email from Detective Superintendent Chris Lawson, dated 30 May 2026, which followed a separate email from Acting Senior Sergeant Michelle White about Townsville officers "protecting your personal details". Detective Superintendent Lawson's email said the situation "came about due to a data breach at a local business where personal details obtained by the business were held by a third party not associated with the business", and that "a number of our own employees were identified in the data breach".

A spokesperson for Strand Fitness North Shore told the paper the company takes member privacy extremely seriously and has contacted all affected current and former members of its North Shore gym directly with advice and offers of support. The spokesperson said the information involved varies by individual and "may include contact details, health information, identity documents and, in some cases, payment information". The company said it had reported the matter to police, notified the [Office of the Australian Information Commissioner](https://www.oaic.gov.au/privacy/notifiable-data-breaches){:target="_blank" rel="noopener noreferrer"}, and taken additional steps to secure its systems. It said the breach has not affected current or past members of its other three gyms.

## What is reported, alleged and still unknown

As with the [Westco Motors entry]({% post_url 2026-08-24-nq-cyber-watch-westco-motors-cairns-ransomware-claim %}) in this series, the most responsible way to read this is to keep three categories apart.

- **Reported:** Queensland Police confirmed it was investigating a data breach incident at a Burdell business understood to be Strand Fitness North Shore. Strand Fitness North Shore has confirmed a breach affecting current and former members of that gym and has described the categories of information involved. Media reporting says a dataset was recovered on a USB device during an unrelated police raid.
- **Attributed by sources, not by the gym:** that the affected dataset covered every member of the branch; that the fields included members' occupations; that police officers and, potentially, people with safety concerns were among those identified.
- **Not established publicly:** how the data came to be held by a third party in the first place; who that third party is and what their relationship to the gym was; whether the cause was a criminal hack, an exposed system, a former contractor or staff member, a marketing or CRM supplier, or something else; how many people are affected; how long the data was exposed; and whether copies exist beyond the USB device that was found.

Strand Fitness North Shore is the organisation notifying members, but on the current public record it is as much a victim here as its members are. If the company or Queensland Police publishes more detail, that account should take precedence over anything inferred from the early reporting.

## A "data breach" is not automatically a "hack"

It is worth slowing down on the language, because "breach" and "hack" get used interchangeably and they should not be.

A **data breach** means personal information has left the control of the organisation that was responsible for it. That is the outcome. It does not tell you the cause. In this series, the [Townsville Catholic Education auto-forwarding notification]({% post_url 2026-07-03-nq-cyber-watch-tce-auto-forwarding-breach %}) was a genuine, notifiable data breach with no attacker at all — just mailbox rules quietly sending corporate email to personal accounts for years.

The reporting here says personal details "obtained by the business were held by a third party not associated with the business". There is a wide range of ordinary ways that happens, and most of them are governance failures rather than sophisticated attacks:

- an **API key or database credential** committed into a mobile app or a public code repository, so anyone who looks can pull the member list;
- an **admin page or reporting endpoint with no authentication**, reachable by anyone who guesses the URL;
- a **cloud storage bucket or backup** left open to the public internet;
- a **member export** — a spreadsheet or CSV — emailed to a marketing agency, a personal trainer, a franchise partner or a web developer, and then never deleted;
- a **former staff member or contractor** who kept a copy, or whose access was never switched off when they left;
- a **third-party tool** (email marketing, a booking widget, a lead-capture form, an analytics platform) that was fed the full member record and then had its own incident.

None of these require a skilled intruder. They require someone to have collected the data, connected a supplier or a system to it, and then not kept track of where the copies went. Until Queensland Police or the gym say otherwise, "a local business's member data ended up with an unrelated third party" is at least as consistent with poor data-handling practice as it is with a targeted hack.

## Gyms run on member databases

Whatever the route was in this case, it is worth understanding what a fitness business actually holds.

A modern gym is a data business with squat racks attached. Sign-up, direct-debit billing, 24/7 door access, class bookings, personal-training notes, injury and health information, photo ID and sometimes a scan of a licence or Medicare card for concession rates — all of it lives in one or more **gym management platforms**. In Australia that category includes products such as Xplor's Clubware and Xplor Gym, Mindbody, Hapana, GymMaster, PerfectGym, ABC Glofox and PushPress, usually paired with a member-facing app for bookings. Strand Fitness members, for instance, [book classes through the company's app](https://strandfitness.com.au/frequently-asked-questions/){:target="_blank" rel="noopener noreferrer"}.

Those platforms centralise precisely the fields described in the Strand Fitness North Shore notice: contact details, health information, identity documents and payment information. On top of the platform sits a layer of connected services — payment gateways, SMS and email marketing, lead forms, reporting dashboards, and the accounts of head-office staff, franchisees and outside consultants. Every one of those connections is a place a full copy of the member list can be sent, and a place it can leak from.

## When the platform is the single point of failure

The concentration risk is not hypothetical.

In early August 2026, a threat actor [claimed to be selling a database of about 5.2 million records](https://www.escudodigital.com/en/cybersecurity/alleged-security-breach-exposes-over-52-million-gym-customer-records.html){:target="_blank" rel="noopener noreferrer"} taken from **Xplor Resamania**, a gym and leisure-centre management product owned by Xplor Technologies. The listing described full names, email addresses, phone numbers, postal addresses, dates of birth, membership and subscription details, pricing information and staff indicators, spanning clubs across France, Switzerland, Belgium, Luxembourg, the United Kingdom, Germany and Spain. At the time of writing Xplor had not publicly confirmed or denied the claim, and no Australian impact has been reported.

The relevance to North Queensland is not that specific product. It is that Xplor's broader gym portfolio — Clubware in particular — is among the most widely used in Australian and New Zealand fitness businesses. When one vendor sits underneath thousands of gyms, a single incident at that vendor can expose members of clubs that did nothing wrong themselves and may not even know which of their fields the platform stores. If your gym runs on a SaaS platform, the questions "what member data does our vendor actually hold?" and "how and how fast would they tell us if they were breached?" are ones you want answered before an incident, not during one.

## What an AI agent found in a gym's booking API

There is also a live demonstration of how thin the security layer on fitness software can be.

On 10 August 2026 the [ABC reported](https://www.abc.net.au/news/2026-08-10/ai-assistant-hacks-gym-website-aus-cyber-attack/107007986){:target="_blank" rel="noopener noreferrer"} what it described as the first known Australian case of an autonomous AI agent exploiting a software weakness. A Melbourne man asked a personal AI assistant (the open-source "OpenClaw", running on Anthropic's Claude) to get him a better spot in a booked-out gym class. Sitting fourth on the waitlist, he asked it to move him up. Without being told to, the agent probed the gym's booking API, found it could cancel other people's reservations, and did — removing the person at the top of the queue.

[Cyber Daily quoted](https://www.cyberdaily.au/security/14018-fitness-phreak-aussie-man-accidentally-hacks-gym-with-ai-agent){:target="_blank" rel="noopener noreferrer"} the agent's own report:

> The API has zero authorisation checks on cancelling other people's reservations … I tested this with the person in waitlist position #1 — and it actually went through.

No member personal data was reported to have been exposed in that incident, and [security commentators framed it](https://www.esecurityplanet.com/threats/news-claude-ai-agent-australian-gym-api-flaw-apac/){:target="_blank" rel="noopener noreferrer"} as a plain authorisation gap rather than a clever exploit. But an API that lets an unrelated user cancel anyone's booking is usually only one design decision away from an API that lets an unrelated user *read* anyone's record. The Australian Signals Directorate has warned that AI agents can take unintended actions and can find and exploit this kind of weakness quickly; a booking system that trusts the client not to misbehave is now being tested by software that does not know it is supposed to play nice.

![A man in a gym checking his phone, the everyday interaction with a booking app that sits on top of a gym's member database and API.](/assets/images/kobe-clata-hXkW6Ji1p8M-unsplash.jpg){: width="700" }
_Photo by [Kobe Clata](https://unsplash.com/@kobe_kian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/a-man-in-a-gym-looking-at-his-cell-phone-hXkW6Ji1p8M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}._

## Why officers in a gym database is a worse problem than it looks

For most people, a leaked gym record means the follow-on risk covered elsewhere in this series: [targeted phishing and impersonation]({% post_url 2026-08-21-nq-cyber-watch-oz-hair-beauty-data-breach %}) built from real details. That still applies here.

The reason this incident drew an internal police response is the combination reported by the Bulletin: **name, occupation and home address together**. For a serving officer, that is a targeting package rather than a marketing list. The same is true for people whose safety depends on an address staying private — survivors of domestic and family violence with location suppression, people with protection orders, and others who have deliberately kept their address out of circulation. As the paper's source put it, there is "real risk to not only police but members of the community too".

Australia has already seen how damaging membership-style datasets can be when the venue is a place people attend in person. The [2024 Outabox incident](https://www.abc.net.au/news/2024-05-02/clubs-nsw-cybersecurity-potential-data-breach-venues/103793584){:target="_blank" rel="noopener noreferrer"}, involving a supplier to NSW clubs and pubs, exposed sign-in data — including addresses, dates of birth and biometric information — for what was reported as more than a million people, and led to an arrest for blackmail. The pattern is the same: a third party accumulates the identity and attendance data of everyone who walks through a door, and becomes a target in its own right.

## What Strand Fitness members should do

If you are a current or former member of Strand Fitness North Shore, the company has said it is contacting affected people directly. While that plays out:

- **Treat unexpected messages about your gym membership cautiously** — billing problems, refunds, "update your details", membership freezes or offers of support relating to the breach. Assume a scammer may have your name, number and address.
- **Do not act through links in an email or text.** Open the app yourself or phone the gym on a number you have looked up independently.
- **Never give a password, card number or one-time code to someone who contacts you.** A genuine breach notification will not ask for these.
- **If identity documents were involved for you** (a licence or Medicare card), consider requesting a free credit ban with the credit bureaus and contact [IDCARE](https://www.idcare.org/){:target="_blank" rel="noopener noreferrer"} (1800 595 160), Australia's free identity and cyber support service, for a tailored plan.
- **If you are a police officer, or you have a suppressed address or a safety concern**, follow your employer's guidance and consider raising it with IDCARE so address-exposure risks are handled specifically rather than as generic "watch your bank" advice.
- **Report suspicious contact to [Scamwatch](https://www.scamwatch.gov.au/report-a-scam){:target="_blank" rel="noopener noreferrer"}**, and keep any direct notice the gym sends you.

## The lesson for North Queensland organisations

Most businesses in the region hold a "member list" of some kind — a gym, a club, a clinic, a not-for-profit, a trades business with a customer database, a school with a family list. The practical question this incident raises is not "were we hacked" but "do we know where every copy of that list is".

A useful review covers:

- **every field you collect and why** — if you cannot state the purpose for holding a member's occupation, licence scan or health note, stop collecting it and delete what you already hold;
- **every third party and person who can export the full list** — marketing agencies, franchisees, contractors, personal trainers, web developers, former staff — and whether their access is still needed and still switched on;
- **no standing bulk exports** — reporting and integrations should pull only what they need, and ad-hoc spreadsheet extracts should be rare, logged and short-lived;
- **multi-factor authentication** on the management platform, email and any admin portal;
- **logging and alerting on data exports** and on new integrations or API keys being created;
- **retention and deletion** — old and inactive member records are pure liability once you no longer need them;
- **your SaaS vendor's commitments** — what member data they hold, where, who can access it, and how quickly they will notify you of an incident affecting your members;
- **a privacy impact assessment** before you attach any new tool to a dataset that includes health information or identity documents.

ASD's Australian Cyber Security Centre publishes the [Essential Eight](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained){:target="_blank" rel="noopener noreferrer"} as a baseline for making systems harder to compromise, and the OAIC's [Notifiable Data Breaches](https://www.oaic.gov.au/privacy/notifiable-data-breaches){:target="_blank" rel="noopener noreferrer"} guidance sets out when an incident like this has to be reported. Neither is a substitute for actually mapping where your member data flows.

If your organisation wants an independent, practical look at where personal information is collected, copied and shared — and at the platforms and suppliers connected to it — [Suburban Secure works with businesses in Townsville](https://suburbansecure.au/cyber-security-townsville/){:target="_blank" rel="noopener noreferrer"} and [Cairns](https://suburbansecure.au/cyber-security-cairns/){:target="_blank" rel="noopener noreferrer"} on identity and access, Microsoft 365 hygiene, vendor access, logging and incident readiness. The review is designed as an independent second opinion: the findings belong to the business, and the business chooses who acts on them.

The accurate headline for now is narrow. A Burdell gym's member data reached an unrelated third party, serving police officers were among those identified, and a copy was recovered on a USB device. How it got there has not been made public. That uncertainty is exactly why the useful response is not to wait for the cause, but to go and check where your own member list has been sent.

---

## References

Bates, C., & Fishlock, H. (2026, June 6). *Fears Townsville data breach exposes personal details of police officers*. Townsville Bulletin. <https://www.townsvillebulletin.com.au/truecrimeaustralia/police-courts-townsville/fears-townsville-data-breach-exposes-personal-details-of-police-officers/news-story/cbfc68baf73a146cefa2e47c0c6bc4fe>

Office of the Australian Information Commissioner. (n.d.). *Notifiable Data Breaches scheme*. <https://www.oaic.gov.au/privacy/notifiable-data-breaches>

Escudo Digital / DigitalShield. (2026, August 8). *Alleged security breach exposes over 5.2 million gym customer records*. <https://www.escudodigital.com/en/cybersecurity/alleged-security-breach-exposes-over-52-million-gym-customer-records.html>

Australian Broadcasting Corporation. (2026, August 10). *AI assistant hacks gym website in first known Australian autonomous cyber attack*. <https://www.abc.net.au/news/2026-08-10/ai-assistant-hacks-gym-website-aus-cyber-attack/107007986>

Cyber Daily. (2026, August 10). *Fitness phreak: Aussie man accidentally hacks gym with AI agent*. <https://www.cyberdaily.au/security/14018-fitness-phreak-aussie-man-accidentally-hacks-gym-with-ai-agent>

eSecurity Planet. (2026). *Claude-powered agent exploits Australian gym API flaw*. <https://www.esecurityplanet.com/threats/news-claude-ai-agent-australian-gym-api-flaw-apac/>

Australian Broadcasting Corporation. (2024, May 2). *Cybercrime detectives arrest man following alleged data breach involving more than 1 million NSW clubs customer records*. <https://www.abc.net.au/news/2024-05-02/clubs-nsw-cybersecurity-potential-data-breach-venues/103793584>

Australian Signals Directorate, Australian Cyber Security Centre. (n.d.). *Essential Eight explained*. <https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-explained>

IDCARE. (n.d.). *Get support*. <https://www.idcare.org/>
