---
title: "Reduce what the internet can reach: a practical response to ASD’s AI guidance"
description: "Inventory, remove, restrict, patch and monitor internet-facing services. A practical way to apply ASD’s guidance against AI-enabled cyber attacks."
date: 2026-10-28 19:52:00 +1000
published: true
categories: [Cyber Security]
tags: ["cyber-security", "annual-cyber-threat-report-2025-26", "attack-surface", "patching", "artificial-intelligence"]
wrap_tables: true
image:
  contain: true
  path: /assets/images/reduce-internet-exposure-2026.svg
  alt: "A service review starts with its purpose, then decides whether to remove it, restrict access or retain public access with security controls."
  width: 1200
  height: 630
---

One of the most useful actions in ASD’s advice on AI-enabled cyber attacks is straightforward: identify the services reachable from the internet and remove the ones the organisation no longer needs.

The [Annual Cyber Threat Report 2025–26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-26) makes the reason clear. Unpatched systems remain a source of compromise, while AI is reducing the effort needed to find and exploit weaknesses. The report records successful exploitation of a vulnerability first identified in 2008. Both new vulnerabilities and old, neglected systems deserve attention.

The diagram above is my implementation guide, informed by [ASD’s guidance for medium-sized businesses](https://www.cyber.gov.au/publication/defending-against-ai-enabled-cyber-attacks-guidance-for-medium-sized-businesses). That guidance was released on **6 July 2026**, before the annual report; it is useful companion advice rather than a new October publication.

## Begin with a service inventory

“Internet-facing” means a service can be reached from outside the organisation. It can include a public website, an email service, a remote-access gateway or an administrative interface. A login screen does not make the underlying software unreachable.

Build the inventory with the people who own the network, cloud accounts, domains and hosted services. Include outsourced systems and forgotten project environments. Use authorised external checks to confirm what is reachable, including IPv6 and alternate hostnames where relevant, rather than relying solely on a firewall diagram.

For each service, record its purpose, owner, provider, supported version, access requirements and patching responsibility. Then make a decision:

| Situation | Practical response |
| --- | --- |
| No current business purpose | Arrange retirement, preserve required records and remove the exposure. |
| Only staff or administrators need access | Restrict it through a maintained, authenticated access method appropriate to the users and devices. |
| The public genuinely needs access | Keep it supported, promptly patched, securely configured and monitored. |
| The vendor no longer supplies fixes | Replace or retire it; if immediate removal is impossible, document temporary restrictions, ownership and a replacement deadline. |

These are implementation choices, not a claim that one access technology solves every problem. A VPN or access proxy becomes part of the security boundary and needs its own patching, authentication and monitoring.

## Remove exposure with a change plan

Start with a low-value service whose owner confirms it can be retired. Check dependencies, capture the necessary configuration and records, choose an appropriate change window and define rollback conditions.

After changing access, test the public path and the legitimate user workflow. Removing a DNS entry alone is not sufficient if the service remains reachable by IP address or another hostname. Equally, moving an administrative interface to a different port leaves it exposed.

For an application that must stay public, separate the public function from administration where the product supports it. A public donation form or parent portal may need wide access; the management console and database do not necessarily need the same exposure.

## Patch what remains, and check whether it was compromised

ASD recommends rapidly applying updates to internet-facing services, using automatic deployment where the risk of a faulty update is low. It also recommends automatic browser and operating-system updates on user devices.

Translate that into a named patch owner, a way to receive vendor alerts and an emergency process that can operate outside the normal maintenance cycle. Track unsupported systems explicitly so that an absence of available patches is not mistaken for an absence of risk.

The report describes a May 2026 notification to **340 entities** about cPanel vulnerabilities that resulted in **more than 60 confirmed incidents**. That is an example of the value of acting on an alert, not an estimated compromise rate for every cPanel installation.

Where exploitation is suspected, patching is one part of the response. Preserve relevant evidence and investigate whether access, credentials or persistence mechanisms need remediation. A software update does not by itself establish that a previously compromised system is clean.

## Limit the reach of a compromised service

ASD’s short-term advice includes restricting unnecessary communication between internet-facing systems and the rest of the organisation, using minimally privileged service accounts and reviewing security logs promptly.

In practice, define the connections an application actually needs. A web server may need a specific database connection; that does not justify unrestricted access to the staff network or backup administration. Record exceptions and test that restrictions still allow the application to work.

Exercise recovery as well. Can the team isolate an affected service, restore from a protected backup and communicate with users? Decisions about broad traffic blocks or credential resets need an agreed incident process because they can interrupt essential work.

## Choose a smaller, maintainable public footprint

ASD suggests considering software-as-a-service providers that patch rapidly. That can reduce local maintenance, but procurement should establish what the provider fixes, what the customer configures and what evidence is available after an incident.

For the next review, bring a list of exposed services and finish with a decision for each: retire, restrict, retain or replace. Give each action an owner and verify the result from outside the network. That is a practical way to turn a national threat report into fewer opportunities for compromise.

## Sources

- [ASD Annual Cyber Threat Report 2025–26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-26), printed pages 12–13 and 47–48.
- [Defending against AI-enabled cyber attacks: guidance for medium-sized businesses](https://www.cyber.gov.au/publication/defending-against-ai-enabled-cyber-attacks-guidance-for-medium-sized-businesses), 6 July 2026.

## More in this series

- [ASD’s 2025–26 Cyber Threat Report: what schools should take from the numbers]({% post_url 2026-10-28-annual-cyber-threat-report-2025-26-schools %})
- [The 2025–26 Cyber Threat Report: practical priorities for charities and small businesses]({% post_url 2026-10-28-annual-cyber-threat-report-2025-26-charities-small-business %})
- [Using AI with Graylog and Wazuh: better questions, tested alerts and useful reports]({% post_url 2026-10-28-ai-security-log-analysis-graylog-wazuh %})
