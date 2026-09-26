---
title: "Three days of Ubiquiti training in Townsville: completing URSCA"
description: "My reflections on completing Leader's UniFi Routing, Switching & Cybersecurity Admin course in Townsville, from practical networking skills to the value of local professional development."
keywords: [Ubiquiti training Townsville, UniFi URSCA, Leader Academy, networking certification, professional development, cyber security]
date: 2026-09-23 19:45:00 +1000
categories: [North Queensland]
tags: [ubiquiti, unifi, networking, townsville, north-queensland, it-training, cyber-security]
permalink: /posts/ubiquiti-routing-switching-and-cybersecurity-admin/
image:
  path: /assets/images/Ubiquiti-Switch-Router-HeaderImage.png
  alt: "Network patch cable connecting ports on a Ubiquiti switch"
---

I've just finished three days of Ubiquiti training here in Townsville, completing the **UniFi Routing, Switching & Cybersecurity Admin (URSCA)** course delivered by Leader, an Australian IT distributor.

It was a worthwhile few days of professional development. While this sort of training has obvious value for managed service providers (MSPs), I found it equally relevant to people managing networks within schools, businesses and other organisations.

## Where my Ubiquiti story began

My experience with Ubiquiti goes back around a decade, to a church network upgrade built around the original **UniFi AP (UAP)**. According to [Ubiquiti's original datasheet](https://dl.ui.com/guides/UniFi/UniFi_Datasheet.pdf), it was a 2.4 GHz, 802.11 b/g/n access point with a radio rate of up to 300 Mbps and 24V passive PoE. It was a robust and affordable option for the time, and it became the product that made me appreciate what Ubiquiti could offer an organisation with a limited budget. I've written more about [that first UAP deployment and the network proposal behind it]({% post_url 2026-09-23-the-ubiquiti-uap-that-won-me-over %}).

Since then, I've worked with the EdgeRouter Lite-3 and, more recently, the UDM Pro Max.

I've also used plenty of other systems along the way, including pfSense and OPNsense. Those platforms have been a significant part of my networking experience, but Ubiquiti is a system I've increasingly landed on for its reliability in my own use, its feature set and the convenience of managing networking through one platform.

Having used the equipment for years, I still found value in setting aside time to learn it more thoroughly. There is a difference between getting a network running and understanding the options well enough to design, secure and troubleshoot it confidently.

## What the course covers

URSCA combines classroom theory with practical labs using UniFi Cloud Gateways and related hardware. [Leader's course outline](https://leader-academy.com.au/courses/unifi-routing-switching-cybersecurity-admin) covers six main areas:

- **Network foundations:** OSI and TCP/IP models, IPv4 and IPv6, and how devices communicate.
- **Network design:** subnetting, VLANs, network hierarchy, WAN failover and load balancing.
- **Switching:** MAC tables, spanning tree, link aggregation, port security, access control lists and 802.1X authentication.
- **Routing:** static and dynamic routing, including OSPF, plus policy-based routing.
- **Network services:** DHCP, DNS, NAT, firewalls, traffic shaping, and remote access and site-to-site VPNs.
- **Cyber security:** secure management access, threat detection, IDS/IPS, cryptography, device and traffic identification, and remote logging.

The course assumes some familiarity with IP addressing, subnetting, DHCP and DNS. It is a substantial three days, with an exam at the end. For the wider certification pathway and official course information, see [Ubiquiti's training and certification page](https://www.ui.com/training).

## Why the platform interests me

For business and enterprise networks, UniFi has a lot going for it. Its [firewall and application filtering capabilities](https://help.ui.com/hc/en-us/articles/5546542486551-Traffic-Policy-Management-in-UniFi) provide control over traffic between networks and the applications people use. That application-level control is the Layer 7 side of the picture.

Its intrusion detection and prevention system also draws on the open source Suricata engine, reflected in Ubiquiti's [threat management logging documentation](https://help.ui.com/hc/en-us/articles/204959834-Advanced-Logging-Information). Alongside that, UniFi offers [DNS-based content and domain filtering](https://help.ui.com/hc/en-us/articles/12568927589143-Content-and-Domain-Filtering-in-UniFi).

The ability to bring network events into wider security monitoring is another useful part of the platform. UniFi supports [exporting system logs in Common Event Format for SIEM integration](https://help.ui.com/hc/en-us/articles/33349041044119-UniFi-System-Logs-SIEM-Integration), providing a route into tools such as Splunk when the receiving system is configured to ingest those logs.

Those capabilities tick a lot of the boxes I look for. As I look towards integrating one of Ubiquiti's flagship products, the training has helped me build confidence in how the pieces fit together and how to make better use of them.

## My URSCA certification

I'm pleased to have completed the certification. Here are my URSCA badge and certificate.

![Ubiquiti URSCA Routing, Switching and Cybersecurity badge]({{ '/assets/images/NOS-URSCA-badge.png' | relative_url }}){: width="220" height="220" }

![Ubiquiti Academy certificate recognising Nicholas O'Sullivan as a UniFi Routing, Switching and Cybersecurity Admin]({{ '/assets/data/NOS-URSCA-Certificate.png' | relative_url }}){: width="947" height="726" }

[View the full-size URSCA certificate]({{ '/assets/data/NOS-URSCA-Certificate.png' | relative_url }}). I've also added the badge alongside my ACS Certified Technologist credential on my [Skills page]({{ '/skills/' | relative_url }}).

## More of this in Townsville, please

Among the people I know who completed the course, a common takeaway was greater confidence in the system and its capabilities. I would recommend it to people considering UniFi for an enterprise environment, as well as those already using it who want to deepen their understanding.

I'm especially pleased that we could do this in Townsville. As I wrote in [the backstory to this training week]({% post_url 2026-09-14-ubiquiti-training-townsville-tecnq-leader %}), local interest and support helped bring the opportunity to North Queensland.

Thank you to Leader for delivering the training, and to the Townsville IT community for helping bring it here. Being able to invest in proper professional development locally makes a real difference. I'd love to see more of it.

If you're planning a UniFi network or weighing up a quote, I now offer [independent UniFi network design and quote reviews]({{ '/consulting/unifi-network-design/' | relative_url }}).
