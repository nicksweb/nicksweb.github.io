---
title: "AI is changing cyber security — but the fundamentals still matter"
description: "Artificial intelligence is speeding up both attackers and defenders, and quietly expanding what counts as an organisation's attack surface. Schools, charities and small businesses are not exempt."
keywords: [AI cyber security, artificial intelligence attack surface, AI phishing, ASD AI guidance, cyber risk schools charities]
date: 2026-08-17 09:00:00 +1000
categories: [General]
tags: [general, cyber-security, artificial-intelligence]
---

Artificial intelligence is changing cyber security from both directions at once.

It's helping defenders make sense of large amounts of security information, spot suspicious behaviour and respond to incidents faster. It's also helping attackers research targets, write more convincing phishing emails, find vulnerabilities and automate parts of an attack that used to take real skill and time.

It would be easy to conclude that organisations need an entirely new security playbook. I don't think that's quite right. AI does introduce some genuinely new risks, but for most schools, charities and small businesses, it mostly magnifies weaknesses that were already there: too much access granted by default, unmanaged devices, poor visibility over what's connected to what, and processes that were never designed with security in mind. The tools attackers use are changing quickly. The value of the fundamentals covered in the [previous post in this series]({% post_url 2026-08-10-secure-by-design-least-privilege-defence-in-depth %}) isn't going anywhere.

## AI is accelerating both sides

In mid-2026, the leaders of the Five Eyes cyber security agencies issued a [joint statement on the effect of AI on cyber risk](https://www.cyber.gov.au/about-us/view-all-content/news/five-eyes-cyber-security-agencies-statement){:target="_blank" rel="noopener noreferrer"}. Their central point: AI is increasing the speed, scale and sophistication of cyber threats, and shrinking the window organisations have between a vulnerability being discovered and it being exploited.

That's not just a problem for large enterprises with dedicated security teams. A smaller organisation's advantage has often been that it simply wasn't worth an attacker's time to target individually — broad, automated campaigns were the real risk. AI erodes that advantage by making convincing, individually-tailored attacks cheap to produce at scale. A phishing email referencing a school's actual enrolment cycle, or a charity's actual grant round, is no longer something that requires an attacker to do real homework.

The Australian Signals Directorate has also published guidance on the [opportunities for using AI in cyber defence](https://www.cyber.gov.au/business-government/secure-design/artificial-intelligence/opportunities-for-ai-in-cyber-defence){:target="_blank" rel="noopener noreferrer"} — and the opportunities are genuine. AI can help smaller organisations do things that used to require a security team they can't afford: triaging alerts, prioritising which vulnerability to patch first, and drafting the first version of an incident response note. Suburban Secure's own [free cyber security check](https://suburbansecure.au/free-cyber-security-check/){:target="_blank" rel="noopener noreferrer"} exists in that same spirit — giving smaller organisations a fast, plain-English starting point without needing an in-house specialist.

The [MITRE ATT&CK framework](https://attack.mitre.org/techniques/T1588/007/){:target="_blank" rel="noopener noreferrer"} now includes a specific technique for adversaries acquiring and using generative AI capabilities — for reconnaissance, scripting, social engineering and building malicious payloads. This isn't hypothetical or future-tense. It's already how some attacks are built.

## The attack surface keeps expanding

A useful concept here is the **attack surface**: every pathway an attacker could use to reach an organisation's systems, people or information. It includes obvious things like internet-facing applications and email, and less obvious ones — personal devices used for work, cloud platforms, third-party suppliers, and now, increasingly, AI tools and the systems they're connected to.

The important part is that an attack surface isn't static. It grows as an organisation adopts new tools, connects new services, and lets information move in new ways — often faster than anyone formally reviews it.

Picture a mid-sized independent school that adopts a new learning platform, a parent-communication app and a staff AI assistant over the course of a single term. Each one is a reasonable decision on its own. Together, they've quietly added dozens of new integrations, accounts and data flows around a student information system that was, on its own, well protected. The database didn't get any less secure. The number of doors around it multiplied.

That's the pattern worth internalising:

> **Attack surfaces are dynamic. They expand as an organisation grows and adopts new tools — AI included — and have to be actively managed, not set and forgotten.**

## Where this leaves AI adoption

None of this is an argument against using AI. It's an argument for treating AI adoption the same way you'd treat any other new system with access to your data: understand what it can see, what it can do, and what happens if it gets something wrong.

That question gets more pointed once an AI tool isn't just answering questions, but is connected to your email, your files or your systems and can take action on its own. The next post in this series looks at exactly that — what to ask before connecting an AI agent to anything that matters.

The [2026 Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/){:target="_blank" rel="noopener noreferrer"} makes a similar point: AI is an emerging factor in how fast attacks move, but the organisations that hold up best are still the ones with the basic resilience fundamentals in place. Speed favours whoever was already prepared.
