---
title: "UTS’s network upgrade: the decisions that outlast the rollout (Part 1)"
description: "UTS’s $20m-plus network renewal shows why procurement, testing and staff capability shape years of service after the equipment is installed."
keywords: [UTS network modernisation, UTS network upgrade, network procurement, Nexon Asia Pacific, Extreme Networks, education IT, infrastructure planning]
date: 2026-09-17 22:00:00 +1000
last_modified_at: 2026-09-17 23:01:53 +1000
categories: [Technology & Careers]
tags: [networking, infrastructure, education, procurement, it-leadership]
permalink: /posts/uts-network-modernisation-part-one/
wrap_tables: true
image:
  path: /assets/images/UTS-More-than-wifi7-from-strategy-to-selection-a-modern-campus-for-whats-next.png
  width: 1536
  height: 1024
  natural_ratio: true
  alt: "More than Wi-Fi 7: from strategy to selection, and a modern campus for what's next. Conceptual series artwork connecting planning, people and campus technology."
---

The University of Technology Sydney has committed to a **$20 million-plus network modernisation** with Nexon Asia Pacific and Extreme Networks. The university’s announcement describes campus-wide renewal, Wi-Fi 7 and an 18-month build following design and proof-of-concept work. It is a substantial investment in the infrastructure behind teaching, research and everyday university life. [UTS announcement, published by iTWire](https://itwire.com/it-industry-news/deals/uts-partners-with-nexon-asia-pacific-on-20-million-plus-network-modernisation){:target="_blank" rel="noopener noreferrer"}.

What interests me is how much of its eventual success will depend on decisions made before installation: whose requirements shaped the design, what was tested, and whether the people inheriting the network can support it.

During my time in statewide systems support for Queensland state education, I was involved in projects deploying equipment across large numbers of schools. That experience shapes how I read an announcement like this. A rollout hands the support team a set of decisions they will live with long after the project has finished.

**The investment should leave the institution better able to operate and change its infrastructure.** UTS’s public procurement trail gives us a useful way to examine how that outcome starts taking shape.

*More than Wi-Fi 7, Part 1: **From strategy to selection**. [Part 2: A modern campus for what’s next](/posts/uts-network-modernisation-part-two/) examines what an integrated networking platform changes for the institution and its staff.*

## In 2023, UTS was defining the service it wanted

The [strategy-services tender listed on 2 February 2023](https://www.australiantenders.com.au/tenders/516327/rft-uts-network-strategic-direction-professional-services/){:target="_blank" rel="noopener noreferrer"} sought a vendor-neutral direction for the university’s future network. It described a multi-site environment, growing use of cloud services and support for hybrid teaching.

Its organising principle was **“Wireless by default, Wired by exception”**. Suitable endpoints would move to Wi-Fi, with wired connections retained for demanding uses and systems including IoT, security and audiovisual equipment. Maintaining service levels and training UTS network staff were explicit requirements.

The training requirement is easy to overlook alongside the technology. Yet it recognises that the university is buying a service its people must be able to operate. A design has to make sense both to the person using a learning space and to the person diagnosing a fault in it.

For me, the value of defining that future state is that it gives the institution something against which to judge suppliers. “We want newer equipment” leaves a great deal for a vendor to interpret. Requirements about mobility, service continuity and staff capability create a more useful basis for a decision.

## The procurement process protected a separate role for advice

A [second notice, listed on 27 February 2023](https://www.australiantenders.com.au/tenders/519831/rft-uts-network-replacement-procurement-consultancy-services/){:target="_blank" rel="noopener noreferrer"}, sought a consultancy to help with industry engagement and procurement. Its successful respondent would be prohibited from participating in the resulting enterprise-network tenders, as a condition of probity.

That is a concrete boundary: the adviser helping the university approach the market could not then compete to supply the resulting network. It gives the planning story substance beyond the familiar claim that a project followed a competitive process.

The public record then jumps forward. Extreme [identified UTS as a win in August 2026](https://investor.extremenetworks.com/news/news-details/2026/Extreme-Networks-Reports-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results/default.aspx){:target="_blank" rel="noopener noreferrer"}, naming Nexon and Extreme Platform ONE. September’s UTS announcement describes selection through an open tender and the move into the build.

Those documents provide a partial history. They do not establish that every element of the 2023 work continued unchanged into the final contract. What they do show is that requirements and procurement arrangements were receiving public attention years before the rollout announcement.

## Every exception becomes somebody’s job

My education IT background makes me particularly interested in repeatability. Across many sites, a small configuration difference can become something a technician has to rediscover each time there is a fault. The cost appears later, in slower diagnosis, extra escalation and dependence on whichever person remembers why that site is different.

That is why I would bring the support team into requirements and evaluation early. They can ask whether a replacement device can be configured consistently, whether a remote technician can see enough to diagnose a problem, and whether the documentation explains the exceptions as well as the standard design.

Standardisation needs room for actual educational requirements. A research facility, an audiovisual system and a student laptop may need different treatment. The useful distinction is between an exception with a documented reason and an exception that exists because nobody had time to resolve it.

At procurement scale, these details influence the service the organisation is committing to fund. Installation effort is visible in the project plan. Years of avoidable support work can be much harder to see in the initial comparison.

## A proof of concept should expose the difficult work

UTS says design and proof-of-concept work preceded the build, although its test plan is not public. For an evaluation of this kind, I would want to see the proposed system used by the people expected to support it.

Consider an illustrative test: a student’s device joins Wi-Fi but cannot reach a teaching resource. The administrator needs to establish whether the fault involves authentication, access policy, name resolution, an upstream connection or the application. A dashboard showing that the access point is healthy only answers part of the question.

I would ask the support team to work through that scenario with the proposed tools, permissions and documentation. Then I would change something: remove a component, introduce a configuration error, or require a rollback. The exercise should reveal how the team recognises a failure and restores the service.

That also gives training a concrete purpose. Staff need time to understand unfamiliar behaviour, challenge the design and practise recovery while errors are contained. Leaving that learning until production moves the cost onto the people trying to teach and study.

These are the kinds of tests I would value, rather than a description of UTS’s unpublished evaluation. They turn an attractive feature into evidence about whether the institution can use it.

## The handover starts before the project finishes

The announced scope includes wired and wireless access, core and edge infrastructure, data-centre connectivity and security controls, followed by managed services and support over a multi-year term. That makes the operating relationship part of the purchase. [UTS announcement](https://itwire.com/it-industry-news/deals/uts-partners-with-nexon-asia-pacific-on-20-million-plus-network-modernisation){:target="_blank" rel="noopener noreferrer"}.

For a university, I would want responsibility to remain clear through migration and into normal service. When a teaching space cannot connect, who investigates first? What can the university’s own team inspect or change? Who approves a change that affects several buildings? How does knowledge move from the implementation team to the people taking the next support call?

These decisions need to fit around an institution that keeps operating throughout the build. Migration windows, acceptance criteria, recovery plans and staff availability belong in the delivery plan alongside the equipment schedule.

## What should remain when the rollout is over?

The people using the network will experience the investment through ordinary moments: a class starting on time, a researcher reaching the resources they need, a fault resolved without repeated calls. The people supporting it will experience the quality of the decisions made much earlier.

That is where I think this story leads. Requirements, independent advice, testing and training are investments in the institution’s ability to run the service. Their value lasts beyond the installation date.

For any organisation planning a renewal, I would put those outcomes into the brief and make the supplier demonstrate how they will be delivered. The handover should leave behind a network the organisation understands, people equipped to support it and a practical path for making the next change.

**[Part 2: A modern campus for what’s next](/posts/uts-network-modernisation-part-two/) explores what happens when more of that operational knowledge and control sits inside a supplier’s platform.**

---

*This is analysis of the linked public material, informed by my education IT experience. I was not involved in the UTS project; the support scenarios describe how I would evaluate a deployment.*
