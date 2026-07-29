---
title: "North Queensland Cyber Watch: a quiet auto-forwarding rule becomes a notifiable data breach"
description: "Townsville Catholic Education's 2026 data breach notification shows how ordinary email auto-forwarding rules can expose sensitive data — and the Microsoft 365 and Google Workspace controls that prevent it."
keywords: [auto forwarding data breach, Microsoft 365 mail flow rules, Google Workspace forwarding controls, notifiable data breach Australia, email security controls, Townsville Catholic Education]
date: 2026-07-29 09:45:00 +1000
categories: [General]
tags: [general, cyber-security, north-queensland-cyber-watch, data-breach, microsoft-365, email-security]
---

The third entry in **North Queensland Cyber Watch** is a useful counterweight to the previous two. There was no ransomware group, no dark web leak site, and no headline-grabbing attack here — just an everyday email setting that quietly turned into a notifiable data breach.

## What was reported

In June 2026, [Townsville Catholic Education (TCE) published an eligible data breach notification](https://www.tsv.catholic.edu.au/about/eligible-data-breach-notification/){:target="_blank" rel="noopener noreferrer"} disclosing that a limited number of staff had been auto-forwarding corporate emails to personal email accounts, creating a risk of unauthorised disclosure. TCE reported the matter to the Office of the Australian Information Commissioner (OAIC) under the Notifiable Data Breach scheme.

By TCE's own account, the organisation could not identify all of the staff or student information involved, and does not believe there was malicious intent behind the forwarding rules. Some of the staff members involved no longer work for TCE, meaning the organisation is now trying to track down former employees to confirm data has been deleted from personal accounts they may no longer routinely access. The information potentially exposed included government identifiers (passport numbers, birth certificates, Medicare numbers, driver's licences), sensitive information (medical reports and religious affiliation), and personal information (home addresses, phone numbers and email addresses).

TCE's response — reviewing auto-forwarding protocols and strengthening technical controls — is exactly the right instinct. It's also a control that is genuinely straightforward to enforce at the tenant level, which is what makes this incident worth dwelling on.

## Why this is worse than it looks

In CIA Triad terms (see our [earlier piece on that framework]({% post_url 2026-07-29-cia-triad-foundations-of-cyber-security %})), this is a pure **confidentiality** failure — nothing was altered, nothing was made unavailable, but sensitive data left the organisation's control and visibility entirely. That's what makes auto-forwarding rules so dangerous: they don't trigger an outage, they don't show up as an alert on a dashboard by default, and they can sit quietly active for years, including after the staff member who created them has left the organisation. TCE explicitly flagged this — some forwarding rules were still sending data to accounts belonging to former staff.

This is also not a rare or unusual setup. Auto-forwarding to a personal account is a common, well-intentioned habit — checking work email from a personal phone, working around access issues, or simply convenience — and in most Microsoft 365 and Google Workspace tenants, nothing stops a staff member from creating one.

## Microsoft 365 controls that prevent this

For organisations on Microsoft 365 / Exchange Online, several controls directly address this exact scenario:

- **Disable automatic external forwarding at the tenant level.** The outbound spam filter policy has an "Automatic forwarding" setting that should be set to **Off** or **System-controlled** rather than **On** for the vast majority of organisations. This is the single highest-value control here — it stops both client-side rules (set up in Outlook) and server-side rules (set up via OWA or PowerShell) from silently forwarding externally.
- **Use a mail flow rule to catch what slips through.** A transport rule can be configured to detect messages carrying the `X-MS-Exchange-Organization-AutoForwarded` header and either reject them, redirect them for review, or add a warning banner — giving visibility even where forwarding hasn't been fully disabled for a legitimate business reason.
- **Turn on alerting for forwarding rule creation.** Microsoft Purview / Defender for Office 365 has a built-in alert policy for the creation of forwarding or redirect rules on a mailbox. This should be enabled and actually monitored, not just switched on and forgotten.
- **Review existing rules regularly, not just at rollout.** `Get-Mailbox -ResultSize Unlimited | Get-InboxRule` (or the equivalent Exchange admin centre report) surfaces existing forwarding rules across the tenant — worth running as a scheduled review, not a one-off audit.
- **Bake this into offboarding.** A leaver's mailbox rules and any forwarding configuration should be reviewed and removed as a standard step, not an afterthought — this is precisely where TCE's incident became harder to contain.

## Google Workspace controls that prevent this

For organisations on Google Workspace, the equivalent controls exist and are similarly straightforward to apply:

- **Restrict automatic forwarding at the domain or organisational unit level.** Under Apps > Google Workspace > Gmail > User settings, admins can disable users' ability to configure automatic forwarding entirely, rather than leaving it as an individual per-mailbox choice.
- **Use content compliance / routing rules for anything that must remain enabled.** Where some forwarding is genuinely required, Gmail's compliance rules can restrict forwarding to approved domains, or apply data-loss-prevention rules to specific categories of sensitive content (government identifiers, health information) so they can't leave the domain regardless of a user's personal forwarding settings.
- **Turn on and monitor Alert Center notifications for forwarding changes.** Google Workspace has a default alert for changes to a user's forwarding settings — this should feed into whatever your team actually monitors, not just sit in a console nobody checks.
- **Apply DLP rules to the categories of data involved here specifically.** Passport numbers, Medicare numbers and driver's licence numbers all match standard predefined DLP detectors in Google Workspace — a rule blocking these categories from leaving the domain would have directly prevented this style of exposure.
- **Include forwarding rule review in offboarding**, for exactly the reason TCE encountered: rules quietly outlive the employee who created them.

## The broader lesson

None of these controls are exotic, expensive, or require replacing existing infrastructure — they are configuration choices sitting inside licences most organisations already pay for. The gap is rarely capability; it's whether anyone has gone through and deliberately turned these settings on, and whether they're reviewed on an ongoing basis rather than configured once during a migration years ago.

TCE's transparency in publishing this notice, naming the categories of data involved and explaining what it's doing in response, is worth acknowledging — that kind of candour is exactly what should happen after an incident like this, and mirrors the same instinct we noted in the [Townsville schools Canvas breach post]({% post_url 2026-07-29-nq-cyber-watch-townsville-schools-canvas-breach %}) in this series.

If you manage a Microsoft 365 or Google Workspace tenant and aren't certain what your current auto-forwarding posture is, that's a same-day question to answer, not a project to schedule for next quarter. [Suburban Secure's managed IT services](https://suburbansecure.au/managed-it-services/){:target="_blank" rel="noopener noreferrer"} include exactly this kind of tenant configuration review for organisations around [Townsville](https://suburbansecure.au/locations/townsville-qld/managed-services/){:target="_blank" rel="noopener noreferrer"} and North Queensland.

A single overlooked setting shouldn't be what turns an ordinary Tuesday into a notifiable data breach.
