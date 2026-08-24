---
title: "Asset security and identity: know what you have, and who can reach it"
description: "You can't protect what you haven't accounted for, and you can't control access to something you haven't classified. A practical look at asset security and identity and access management."
keywords: [asset security, identity and access management, data classification, IAM lifecycle, access review, cyber security Australia]
date: 2026-08-03 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, fundamentals]
---

Two questions come before almost everything else in cyber security, and they're easy to skip past because they sound too basic to bother with: what do we actually have, and who can actually reach it?

I ask both of these early with every school, charity or small business I work with, because the answers are so often out of date. A system gets set up, the person who set it up moves on, and a year later nobody's entirely sure who has admin rights, what data lives where, or which of the three cloud subscriptions is actually still in use. That gap — between what an organisation *thinks* it has and what it *actually* has — is where a lot of avoidable incidents start.

## Asset security: know what you have, and what it's worth

Asset security starts with something unglamorous: an inventory. Not necessarily a formal register with a dedicated tool, though larger organisations benefit from one — for most small organisations, a maintained spreadsheet of domains, subscriptions, devices, key accounts and who owns each of them is enough to start.

The second part is classification. Not every piece of information deserves the same level of protection, and treating everything as equally sensitive usually means nothing gets treated as sensitive enough. A simple, practical scale works for most organisations:

- **Public** — the newsletter, the website content, the annual report.
- **Internal** — rosters, meeting minutes, internal procedures.
- **Confidential** — donor and member records, health information, financial details, anything with a name attached to personal circumstances.

A charity's donor database, a school's student health records and a small business's payroll file all sit in that confidential category, and all deserve a noticeably higher bar for who can see them than the staff social calendar does. The point of classification isn't paperwork for its own sake — it's so that when someone asks "should this go in the shared drive everyone can see," there's already an answer.

I touched on the ownership side of this — knowing who's responsible for domains, DNS, hosting and key subscriptions — in an [earlier post on practical cyber security for small organisations]({% post_url 2026-07-04-practical-cyber-security-for-small-organisations %}). Asset security is really the same discipline applied a layer deeper: not just who owns the system, but what's inside it and how sensitive that is.

## Identity and access management: access is a lifecycle, not a checkbox

Once you know what you have, the next question is who can reach it — and this is where most organisations' actual risk sits, because access tends to only move in one direction. Someone starts a role and gets access. They change roles and get more access, layered on top of what they already had. They leave, and the access often just... stays.

Identity and access management treats this properly, as a lifecycle rather than a one-off setup task:

- **Provisioning** — granting access when someone starts, matched to what their role actually requires.
- **Review** — periodically checking that existing access still makes sense, not just that it was appropriate when it was granted.
- **Deprovisioning** — removing access promptly when someone leaves, changes roles, or a contractor's engagement ends.

For cloud-first organisations — which is most schools, charities and small businesses now — identity has effectively become the real perimeter. There often isn't a traditional network edge to defend in the way there was twenty years ago; there's Microsoft 365, Google Workspace, a donor CRM, an accounting platform, and the identity layer sitting in front of all of them. Multi-factor authentication and conditional access — restricting sign-ins to expected devices, locations or conditions — do more practical work here than almost any other single control.

Picture a P&C treasurer at a Mackay primary school who resigns after two years. If the accounting platform login was never revoked, that's not a hypothetical risk sitting on a spreadsheet somewhere — it's a live door. The same pattern plays out with a departing volunteer at a Bundaberg charity who still has donor database access, or a former contractor at a Rockhampton small business who still has a login to the file server. None of these require a sophisticated attacker. They just require nobody to have closed the door.

## Bringing them together

Asset security tells you what deserves protecting and how much. Identity and access management controls who can actually reach it. Neither works well without the other — a perfectly classified asset with no access controls is just a well-labelled target, and tightly controlled access to a system nobody's properly inventoried just means you've secured the wrong list.

A reasonable starting point for most organisations:

- Maintain a simple, current list of key systems, domains and subscriptions, with an owner for each.
- Classify information into a small number of sensitivity levels people can actually remember.
- Review who has access to what on a regular schedule — not just when something goes wrong.
- Remove access immediately when someone leaves or changes roles, rather than "getting to it later."

Suburban Secure works through exactly this with businesses, schools and not-for-profits as part of its [managed IT services](https://suburbansecure.au/managed-it-services/){:target="_blank" rel="noopener noreferrer"} and [network security services](https://suburbansecure.au/network-security-services/){:target="_blank" rel="noopener noreferrer"}, including organisations around [Townsville and North Queensland](https://suburbansecure.au/locations/townsville-qld/managed-services/){:target="_blank" rel="noopener noreferrer"}. None of the examples above describe a specific organisation's actual security posture — they're illustrative of the kinds of gaps that show up in organisations of that type and size.
