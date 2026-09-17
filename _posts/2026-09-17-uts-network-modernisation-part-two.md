---
title: "UTS's network modernisation: from switches to automated platforms (Part 2)"
description: "What UTS's earlier network and its planned Extreme deployment reveal about Wi-Fi 7, integrated management, automation and the limits of AI networking claims."
keywords: [UTS network modernisation, campus networking, Extreme Platform ONE, Wi-Fi 7, network automation, Alcatel-Lucent Enterprise, Shortest Path Bridging]
date: 2026-09-17 22:01:00 +1000
categories: [Technology & Careers]
tags: [networking, infrastructure, education, wi-fi, automation, artificial-intelligence]
permalink: /posts/uts-network-modernisation-part-two/
wrap_tables: true
image:
  path: /assets/images/Nabil-Bukhari-Extreme-Networks-Extreme-Connect-2026.png
  width: 848
  height: 475
  natural_ratio: true
  alt: "Extreme Networks CTO Nabil Bukhari makes the case that the company builds the full networking stack, from hardware to AI, at Extreme Connect 2026. Photo: Mitch Wagner for Fierce Network."
---

*Header image: Mitch Wagner for [Fierce Network's coverage of Extreme Connect 2026](https://www.fierce-network.com/cloud/extreme-unveils-its-full-stack-ai-networking-vision-and-broad-wi-fi-7-lineup){:target="_blank" rel="noopener noreferrer"}. The photograph shows Extreme's conference presentation.*

UTS's planned network renewal puts a broader question in view: how much has campus networking changed over the past decade? Wi-Fi 7 is an obvious development, but the way a network is managed, secured and supported deserves just as much attention.

**My reading is that the significant shift is towards bringing more operational work into a shared platform:** seeing what is connected, investigating faults, applying policy and managing changes across the environment. UTS's public announcements give us a starting point for that discussion, with some important gaps in the technical detail.

*This is part two of a two-part series. [Part one traces the planning and procurement behind UTS's $20m-plus modernisation](/posts/uts-network-modernisation-part-one/).*

## The earlier network already had serious capabilities

Alcatel-Lucent Enterprise's [2015 UTS case study](https://www.al-enterprise.com/-/media/assets/internet/documents/university-of-technology-sidney-short-case-study-en.pdf){:target="_blank" rel="noopener noreferrer"} records a January 2015 implementation supporting more than 37,000 users. It describes the demands of campus expansion, students carrying multiple devices and wireless interference in a dense urban setting.

The documented equipment included OmniSwitch 10K core switching, other OmniSwitch models, OmniAccess AP135, AP175 and AP225 access points, and OmniVista 2500 and 3600 AirManager management tools. Central management was already part of the design.

ALE's [separate UTS customer page](https://www.al-enterprise.com/en/company/customers/university-of-technology-sydney){:target="_blank" rel="noopener noreferrer"} discusses automation, faster guest access and resilience using **Shortest Path Bridging (SPB)**. It also lists additional products, including OmniSwitch 6860 and AP345 access points. That suggests the environment evolved beyond the snapshot in the 2015 PDF.

Both are vendor case studies. They establish what ALE documented, rather than a current inventory of every device UTS is replacing. They also show why it would be misleading to present this as a university discovering central management or automation for the first time.

## What is confirmed for the new environment

The [September announcement attributed to UTS](https://itwire.com/it-industry-news/deals/uts-partners-with-nexon-asia-pacific-on-20-million-plus-network-modernisation){:target="_blank" rel="noopener noreferrer"} identifies Nexon, Extreme Platform ONE, Wi-Fi 7, campus-wide wired and wireless renewal, and security controls informed by zero-trust principles. It describes an upcoming build, so the intended benefits still need to be demonstrated in operation.

The public sources reviewed do not disclose the selected switch and access-point models, quantities, detailed topology, authentication design or which AI functions UTS will enable. They do not provide a breakdown of the contract value between equipment, subscriptions and services.

Those gaps limit the comparison. We can discuss the direction of the platform and the operational questions it raises; a product catalogue cannot fill in UTS's unpublished design.

## Wi-Fi 7 brings options that still need a campus design

The Wi-Fi Alliance's [Wi-Fi CERTIFIED 7 announcement](https://www.globenewswire.com/news-release/2024/01/08/2805409/0/en/Wi-Fi-Alliance-introduces-Wi-Fi-CERTIFIED-7.html){:target="_blank" rel="noopener noreferrer"} describes features including Multi-Link Operation, wider channels up to 320 MHz where suitable 6 GHz spectrum is available, and 4K QAM modulation. These provide ways to improve throughput, latency and reliability with compatible equipment and suitable conditions.

For a campus, I would assess those capabilities against actual rooms, applications and client devices. A busy teaching space needs dependable service when everyone arrives, joins the network and opens the same learning resource. Peak throughput from an individual device is only one part of that experience.

The practical design questions include access-point placement, interference, client compatibility, wired uplinks and power. The UTS announcement does not answer those questions in detail or promise that every device will obtain the headline performance associated with Wi-Fi 7.

I would also keep two AI questions separate. One is what students and researchers need from the network when using AI applications. The other is whether AI helps the operations team manage that network. The fact that an application uses AI does not, by itself, establish a requirement for a particular wireless generation; its traffic, location and responsiveness requirements need to be assessed.

## More of the operating workflow sits inside the platform

Extreme's [current Platform ONE product description](https://www.extremenetworks.com/platform-one/extreme-platform-one-secure-connectivity-made-simple){:target="_blank" rel="noopener noreferrer"} brings network management, security and AI assistance together. It describes Agent ONE Coworker analysing operational information, highlighting emerging issues, recommending next steps and guiding investigations. The same material describes fabric automation and views spanning multiple parts of the network.

There is a licensing distinction worth retaining: Extreme says Platform ONE Security adds Universal ZTNA, cloud public-key infrastructure and certificate lifecycle management through an additional subscription. Selecting Platform ONE does not establish that UTS has purchased or enabled every security capability.

The operational promise is appealing. Consider a student who can join Wi-Fi but cannot reach a learning service. An administrator needs to work out whether the problem is radio coverage, authentication, access policy, an upstream connection or the application itself. Bringing relevant evidence together could reduce the time spent switching between systems and reconstructing the sequence of events.

That is an illustrative support scenario, not a reported UTS result. The useful measure would be whether the team reaches a reliable diagnosis faster and can explain the evidence behind it.

AI recommendations introduce another question: what authority does the system have to act? For a campus deployment, I would want explicit permissions, review points, change records and recovery procedures. A suggestion to inspect a congested access point and permission to change access policy across a campus have very different consequences.

## There is continuity beneath the new platform

The earlier ALE customer material identifies SPB in the UTS environment. Extreme also says its [Fabric product is built on SPB](https://www.extremenetworks.com/resources/at-a-glance/extreme-fabric){:target="_blank" rel="noopener noreferrer"}. That is an interesting reminder that established networking concepts can underpin successive generations of products and management software.

It does **not** establish that UTS has selected Extreme Fabric for the new production design. The UTS-specific announcements confirm Platform ONE, while the fabric discussion comes from Extreme's general product material. Nor does a shared underlying standard establish how two particular deployments would interoperate during migration.

The comparison is therefore about what suppliers document and package, with the final UTS architecture still only partly visible.

## What I would measure after migration

For the team supporting the university, I would judge the result through everyday work. Can staff identify a fault more quickly? Can they make a routine change consistently? Can a replacement device be brought into service without someone rebuilding its configuration from memory?

These are the measures I would want agreed before migration:

| Operational question | Evidence I would look for |
| --- | --- |
| Can users connect dependably? | Connection and authentication success, service interruptions and experience in busy teaching spaces. |
| Can support locate problems faster? | Time to diagnose incidents, escalations and repeat faults. |
| Are changes more predictable? | Change success, configuration consistency and tested recovery procedures. |
| Is access policy manageable? | Reviewable permissions, device visibility and a process for removing obsolete access. |
| Can the university sustain the service? | Staff capability, documentation, renewal costs and clear responsibility for support. |

These are suggested evaluation criteria, rather than UTS's published acceptance measures. A baseline from the existing service would make the comparison much more useful than a demonstration of the new dashboard alone.

The 2015 case study also presented its network as an investment in the future. Every generation eventually reaches a point where replacement becomes necessary. This one will too.

The lasting benefit I would look for is an environment the university can understand and change: documented decisions, supportable configurations, staff who know how it works, and a practical path through the next upgrade. That is where today's investment can make the next modernisation easier.

**Read [Part 1: Before the rollout, the planning behind UTS's network modernisation](/posts/uts-network-modernisation-part-one/).**

---

*Source note: The historical comparison uses ALE's vendor case studies; the new deployment details come from the UTS-attributed announcement. Extreme's product material describes general capabilities, not proof of UTS's purchased licences or production settings. The operational examples and evaluation criteria are my analysis.*
