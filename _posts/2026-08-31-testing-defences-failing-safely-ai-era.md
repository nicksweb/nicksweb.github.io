---
title: "Testing your defences and preparing to fail safely, AI included"
description: "Vulnerability scanning, penetration testing, human factors and a simple framework for pulling it all together — practical readiness steps for schools, charities and small businesses in the age of AI."
keywords: [vulnerability scanning, penetration testing, NIST cybersecurity framework, AI red teaming, ASD annual cyber threat report, cyber security checklist]
date: 2026-08-31 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, artificial-intelligence]
---

This is the last post in a short series that started with the [operating principles behind good security decisions]({% post_url 2026-08-10-secure-by-design-least-privilege-defence-in-depth %}), then looked at how [AI is accelerating both attackers and defenders]({% post_url 2026-08-17-ai-changing-cyber-security-fundamentals-still-matter %}) and what to ask before [connecting an AI agent]({% post_url 2026-08-24-agentic-ai-attack-surface-schools-nfps-businesses %}) to anything that matters. This one is about how you actually find out whether any of it is working.

## You have to test it, not just build it

A control that exists on paper isn't the same as a control that works under pressure. Two activities do most of the heavy lifting here.

**Vulnerability scanning** uses automated tools to check systems, devices and configurations against known weaknesses — missing updates, unsupported software, exposed services, default credentials. It's relatively cheap, can run regularly, and gives you a prioritised list of what to fix first.

**Penetration testing** goes further: authorised security professionals actually attempt to exploit weaknesses in a controlled way, to find out whether a theoretical vulnerability is actually reachable, how far an attacker could get, and whether anyone would notice while it was happening.

For organisations experimenting with AI tools, it's worth extending this thinking to AI specifically. Testing an AI-connected system can mean checking whether it can be manipulated through untrusted input, whether it discloses information outside its intended scope, or whether it keeps behaving safely when a connected service fails. This doesn't need to be exotic — a lot of it is the same discipline applied to a newer kind of system.

## Assume something will still fail

We covered [failing securely]({% post_url 2026-08-10-secure-by-design-least-privilege-defence-in-depth %}) as a general principle earlier in this series — the idea that when a system breaks, it should fail toward safety, not exposure. It's worth restating for AI specifically: an AI agent shouldn't receive *broader* access because the service it normally checks with is unavailable, and a failed automated action should be logged and flagged for a person, not silently retried with fewer safeguards.

## People are still part of the system

The human element gets called the weakest link in cyber security often enough that it's become a cliché — and I think it oversimplifies the problem. People generally make the mistakes that the systems around them made easy to make.

If staff or volunteers are using AI tools you haven't approved, telling them to stop is rarely the whole answer. It's usually more effective to understand why the tool is attractive, provide an approved alternative, and be specific about what information can and can't go into it. If people are using personal devices to reach sensitive systems because it's the only practical option, a policy document alone won't change that — multi-factor authentication, device compliance requirements and clear technical boundaries will do more of the actual work.

## A simple framework to organise it all

You don't need to invent your own approach from scratch. The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework){:target="_blank" rel="noopener noreferrer"} organises this into six functions that apply just as well to a new AI tool as to a traditional system: **Govern** (decide what's allowed and who's responsible), **Identify** (know what you have and what it can access), **Protect** (apply the controls), **Detect** (notice when something unusual happens), **Respond** (act on it) and **Recover** (restore and improve).

It's a checklist for asking the right questions, not a substitute for making the decisions yourself.

## A practical starting point

For most small organisations, this doesn't need to become a formal program. It needs to extend habits you likely already have:

1. **Know what's connected.** Keep a simple inventory of the AI services, cloud platforms and integrations in use — approved and otherwise.
2. **Classify what matters.** Make clear what counts as confidential, personal or financially sensitive, with real examples people can recognise.
3. **Manage identities and devices.** Multi-factor authentication and clear boundaries on what unmanaged personal devices can reach.
4. **Assess before connecting.** Ask the questions from the [previous post]({% post_url 2026-08-24-agentic-ai-attack-surface-schools-nfps-businesses %}) before an AI tool goes anywhere near real data.
5. **Apply least privilege.** Give every tool, integration and agent the minimum it needs — nothing more, because it's convenient.
6. **Test it, regularly.** Scanning, reviews and, where it's warranted, professional penetration testing.
7. **Keep a human in the loop** for anything with a real consequence if it goes wrong.
8. **Have an incident plan** — who's called, who talks to your community, and how access gets revoked quickly.

## Why this still matters in North Queensland

The [ASD Annual Cyber Threat Report 2024–25](https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics/annual-cyber-threat-report-2024-2025){:target="_blank" rel="noopener noreferrer"} recorded more than 1,700 proactive notifications to organisations about potentially malicious activity — an 83 per cent increase on the year before, with more than 12 per cent of those confirmed as involving an actual network compromise. That's a national figure, but it lines up with what we've been tracking closer to home in the [North Queensland Cyber Watch series]({% post_url 2026-08-02-nq-cyber-watch-tcc-ransomware-attack %}): the threat isn't abstract, and it isn't limited to large enterprises with dedicated security teams.

AI is genuinely changing how quickly some of this moves. It isn't changing what actually works: know what you have, limit access, test your controls, and be ready to respond. If your school, charity or business wants an outside, practical view on any of this — including where AI tools fit into it — Suburban Secure's [managed IT services](https://suburbansecure.au/managed-it-services/){:target="_blank" rel="noopener noreferrer"} and [network security services](https://suburbansecure.au/network-security-services/){:target="_blank" rel="noopener noreferrer"} are built around exactly this kind of conversation, including for organisations around [Townsville and North Queensland](https://suburbansecure.au/locations/townsville-qld/managed-services/){:target="_blank" rel="noopener noreferrer"}.
