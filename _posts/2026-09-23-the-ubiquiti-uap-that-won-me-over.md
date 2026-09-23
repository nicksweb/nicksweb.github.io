---
title: "The Ubiquiti UAP that won me over"
description: "An ageing church network, an upgrade proposal and the original UniFi AP that showed me how practical networking could fit a not-for-profit budget."
keywords: [original Ubiquiti UAP, UniFi AP, EdgeSwitch, church network upgrade, not-for-profit Wi-Fi, 24V passive PoE]
date: 2026-09-23 22:15:00 +1000
categories: [Technology & Careers]
tags: [ubiquiti, unifi, networking, infrastructure, wi-fi, not-for-profit, church-technology]
permalink: /posts/the-ubiquiti-uap-that-won-me-over/
image:
  path: /assets/images/UAP-AP-1.png
  alt: "An original white Ubiquiti UniFi AP"
---

The original **Ubiquiti UniFi AP**, usually called the **UAP**, is the product that won me over to Ubiquiti. It was a modest white access point, but around 2015 and 2016 it helped me make a case for something much bigger: a network that a not-for-profit organisation could actually depend on and keep improving.

I recently dusted off the [network upgrade proposal I wrote at the time]({% post_url 2026-09-23-network-upgrade-proposal-from-the-archive %}). The writing is passionate, and I can still see why. For me, this was about more than buying new Wi-Fi equipment. People were trying to run a busy site on a network that had grown one device and one workaround at a time.

## The case for an upgrade

The organisation had a main building, a hall and other spaces that needed to work together. Its rack was untidy, with some cables never terminated into the installed patch panels. A router hung outside the rack near a walkway. The switches were a mixture of ageing equipment, including one limited to 100 Mbps. When a fault occurred, unlabelled ports and incomplete documentation made it harder to find the cause.

The wireless network had the same pattern. Different consumer access points had been added in different rooms, without central management or a consistent approach to coverage. In the foyer and children's area, the connection dropped often enough to disrupt the check-in system. Staff sometimes found a 4G mobile connection more dependable. At busy times, the ADSL service also struggled to carry the load.

![Image of the initial network that required the upgrade. ]({{ '/assets/images/NFP-Cabinet-Network.png' | relative_url }}){: width="999" height="852" }
_An image of the original network in-place before Ubiquiti and Edge Switching was deployed._


Those details mattered more to me than any specification sheet. If a child's check-in depended on mobile data because the site's Wi-Fi could not be trusted, the network needed a proper plan.

The proposal asked for consistent access points, separate staff and guest networks, managed switching, improved cabling and labelling, better documentation and a backup connection. It also considered storage, authentication and a way to log support requests. These were recommendations in the document, not a claim that every item was installed exactly as proposed.

## Why the UAP made sense

I had good recommendations for Ubiquiti, although I did not yet know the ecosystem as well as I do today. What I could see was a sensible way to replace a collection of unrelated access points with centrally managed Wi-Fi at a price the organisation could consider.

The original UAP was a **2.4 GHz 802.11 b/g/n** access point with a **300 Mbps maximum 802.11n radio rate** and **24V passive Power over Ethernet**. Those figures come from [Ubiquiti's original UniFi datasheet](https://dl.ui.com/guides/UniFi/UniFi_Datasheet.pdf); 300 Mbps was a radio specification, not a promise of that speed to every user. Its built-in 10/100 Ethernet port and single-band radio also show its age now. At the time, though, the combination of central management, guest traffic isolation, VLAN support and approachable pricing was compelling.

![Cover of the original UniFi access point datasheet, showing the controller interface and several AP models]({{ '/assets/images/UAP-DataSheet.png' | relative_url }}){: width="999" height="852" }
_The UniFi product family as shown in a period datasheet. The original UAP is one of the round access points pictured._

The proposal compared a managed access point option with a cheaper collection of consumer devices. The managed option listed nine APs and a controller among its proposed costs. The appeal was not simply the price of each unit. It was being able to configure, monitor and refresh the wireless network as one system, while planning separate access for staff and visitors.

At the time also, the NBN hadn't quite made it to Townsville and most organisations had only about 10 - 20 Mbps of connectivity with ADSL. 

## EdgeSwitches were part of the design

For the network underneath the Wi-Fi, I chose **Ubiquiti EdgeSwitches** for the core and building switches. Their graphical interface was a pleasure to configure, and the feature set gave us room to design a more organised network.

The power options were particularly useful. [Ubiquiti's EdgeSwitch datasheet](https://dl.ui.com/datasheets/edgemax/EdgeSwitch_DS.pdf) describes ports that can provide either standard 802.3af/at PoE or configurable 24V passive PoE. That made the switches a practical match for the original UAPs while allowing other PoE devices to be considered as the site changed. The 24V mode had to be selected for a compatible device; it was not the same as automatically negotiated standard PoE.

I would not pretend that every line of the old proposal became the final build. What stayed with me was the value of choosing components that worked together and could be supported. The EdgeSwitches went on to serve the project for many years, which is the sort of quiet reliability an organisation needs.

## A network that could keep changing

The UAP was not Ubiquiti's strongest product even then. It did not need to be. It gave us an affordable starting point for a managed network and a way out of the cycle of adding another consumer access point whenever coverage failed.

Since that original decision, the organisation has been able to replace access points with later generations roughly every five or six years. That is the result I value most: the first project did more than solve an immediate coverage problem. It gave the organisation a foundation it could refresh as needs and wireless technology changed.

Looking back at the proposal, I still recognise the passion behind it. I wanted the people using the building, and the volunteers supporting it, to have something dependable. The original UAP helped make that possible, and it started a relationship with Ubiquiti equipment that has carried through to my [recent UniFi Routing, Switching & Cybersecurity Admin training]({% post_url 2026-09-23-ubiquiti-routing-switching-and-cybersecurity-admin %}).
