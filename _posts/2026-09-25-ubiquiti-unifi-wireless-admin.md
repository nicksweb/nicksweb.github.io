---
title: "Completing Ubiquiti's UniFi Wireless Admin course"
description: "What two days of Ubiquiti Wireless Admin training in Townsville reinforced about planning Wi-Fi around the people and devices using it."
keywords: [UniFi Wireless Admin, UWA certification, Ubiquiti training Townsville, Wi-Fi design, WiFiman, UniFi Design Center]
date: 2026-09-25 12:00:00 +1000
categories: [North Queensland]
tags: [ubiquiti, unifi, networking, wi-fi, townsville, it-training]
permalink: /posts/ubiquiti-unifi-wireless-admin/
image:
  path: /assets/images/NOS-UWA-badge.png
  alt: "Ubiquiti Academy UniFi Wireless Admin badge"
---

I've completed **UniFi Wireless Admin (UWA)**, a two-day Ubiquiti course delivered by Leader in Townsville. After the three days I spent on [routing, switching and cyber security]({% post_url 2026-09-23-ubiquiti-routing-switching-and-cybersecurity-admin %}), it was good to get back into a classroom and spend time on wireless design.

The lesson I took away is straightforward: **design Wi-Fi around the experience of the people and devices using it**. A phone needs to keep working as someone walks between rooms. A check-in tablet needs a reliable connection at the front desk. A room full of people needs enough capacity, not just a strong signal icon.

## What the two days covered

[Leader's UWA course outline](https://leader-academy.com.au/courses/unifi-wireless-admin) moves from radio-frequency fundamentals and 802.11 networking into wireless LAN planning and deployment. It covers propagation, attenuation, channels, channel widths, interference, signal-to-noise ratio, site surveys, airtime and capacity. There is also practical work with UniFi controllers and access points, followed by an exam.

That theory matters when planning Wi-Fi at scale. Adding access points wherever a floor plan has a blank space might provide coverage, but it does not tell you whether clients can send data back, whether neighbouring APs interfere with one another, or how devices behave as they move.

## Auto settings are a starting point

Leaving every access point on Auto can work well in some environments. UniFi's [Channel AI](https://help.ui.com/hc/en-us/articles/37367741854743-UniFi-Channel-AI-and-Automated-WiFi-Optimization) can analyse the surrounding network and recommend channels, and some newer models, including the [U7 Pro Max](https://techspecs.ui.com/unifi/wifi/u7-pro-max) and [U7 Pro XGS](https://techspecs.ui.com/unifi/wifi/u7-pro-xgs), have dedicated spectral scanning hardware. Those are useful tools, but a larger deployment still needs a plan for placement, channel width, transmit power, overlap and the mix of client devices.

We also spent time thinking about settings that affect roaming and airtime. [Minimum Data Rate Control](https://help.ui.com/hc/en-us/articles/32065480092951-UniFi-WiFi-SSID-and-AP-Settings-Overview) can reduce the time slow transmissions occupy a channel, but setting it too high can exclude older or distant devices. Minimum RSSI can disconnect a client whose signal has fallen below a chosen threshold, but it cannot force that client to join a better AP. If the threshold is too aggressive, it can make the connection worse. These are settings to test with real devices at the edges of the intended coverage area, not numbers to copy into every site.

## Plan, measure and adjust

Ubiquiti has a useful set of tools for that cycle. [UniFi Design Center](https://design.ui.com/) lets you upload or draw a floor plan, place access points and estimate coverage before installation. [WiFiman](https://help.ui.com/hc/en-us/articles/205204150-Using-WiFiman) then helps check the network on site with signal, latency and roaming measurements. Its Floorplan Mapper can show measured coverage on a supported LiDAR-equipped phone. I see those as complementary views: a proposed design and the behaviour people actually experience after deployment.

For hardware choices, [Ubiquiti's Tech Specs site](https://techspecs.ui.com/) makes it easier to compare access points, switches, gateways and the wider product range. I would still check the requirements of the room and its clients before choosing the model with the largest headline coverage figure.

## Another worthwhile week of learning

The course gave me more confidence in designing and reviewing wireless networks, especially where several access points and many different devices need to work together. I'm pleased to have completed the UWA certification, and I'm grateful that this classroom training was available in Townsville.

![Ubiquiti Academy UniFi Wireless Admin badge]({{ '/assets/images/NOS-UWA-badge.png' | relative_url }}){: width="220" height="220" }

![Ubiquiti Academy certificate recognising Nicholas O'Sullivan as a UniFi Wireless Admin]({{ '/assets/data/NOS-UWA-Certificate.png' | relative_url }}){: width="948" height="728" }

[View the full-size UWA certificate]({{ '/assets/data/NOS-UWA-Certificate.png' | relative_url }}). I've also added the badge to my [Skills page]({{ '/skills/' | relative_url }}). For the wider certification pathway, see [Ubiquiti's official training page](https://www.ui.com/training).
