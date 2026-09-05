---
title: "The latest Plex security update is a reminder to check what's installed at work"
description: "An overdue Plex update at home recalls the LastPass breach and a practical lesson: inventory software, protect admin devices and keep media servers private."
keywords: [Plex security update, Plex Media Server 1.43.3, LastPass breach, software inventory, patch management, privileged access, Tactical RMM, Action1, Tailscale, UniFi Teleport]
date: 2026-09-05 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, homelab, plex, patch-management, asset-management]
image:
  path: /assets/images/plex-logo-feature.png
  alt: "The Plex logo in white and yellow on a black background"
toc: false
---

I use Plex at home to manage electronic copies of some of my DVD collection and distribute free-to-air digital television across the network. It is useful software, and like a lot of things in a home lab, it can quietly keep working while maintenance slips down the list.

This week, a security update prompted me to check mine. It had been about three months since I last updated it.

On 1 September 2026, [Plex published a security notice](https://forums.plex.tv/t/important-security-update-for-plex-media-server-v1-43-2-and-earlier/942319) recommending that server owners update to **Plex Media Server 1.43.3 or newer** as soon as possible. The notice also covers **Plex Desktop 1.115.0**. Plex says these releases address several security issues; at the time of writing, the notice says CVEs have been requested, with more details to follow.

My server runs in Docker using the LinuxServer image. I backed up the important data, updated from `1.43.1.10611` to `1.43.3.10896`, and checked that Plex and the database were healthy afterwards. The [LinuxServer update instructions](https://github.com/linuxserver/docker-plex#updating-info) cover the container process. It was straightforward once I actually did it.

The uncomfortable part was how easily three months had passed.

![Plex's web interface showing the Home navigation and Continue Watching heading](/assets/images/plex-website-screenshot-homelab.png)
_The familiar Plex interface on my home setup. A service continuing to work tells us very little about whether it is up to date._

This is on my own infrastructure. Even so, “it is only at home” needs a qualification: **what work accounts, credentials or systems can that device reach?** That question brings me back to LastPass.

My recollection was broadly right, but the details matter. The Plex connection was part of the second stage of the **2022 LastPass breach**. A separate, earlier compromise had already exposed development material. [LastPass's March 2023 incident update](https://blog.lastpass.com/posts/security-incident-update-recommended-actions) describes how attackers subsequently targeted a senior DevOps engineer through vulnerable third-party software and gained access to cloud backups, including encrypted customer vault data and some unencrypted customer information.

The [UK Information Commissioner's penalty notice, paragraphs 46–49](https://ico.org.uk/media2/xfbl1uaa/lastpass-uk-ltd-penalty-notice.pdf#page=19), explicitly identifies Plex Media Server on the engineer's **personal computer**, running a version with a known vulnerability. Attackers installed a keylogger, captured the engineer's master password and used a stolen trusted-device cookie to bypass MFA. Access to the engineer's business vault exposed keys which, combined with material from the earlier compromise, enabled the theft of backups.

Plex was there for personal use. The organisational failure was allowing sensitive work credentials to be accessed from that unmanaged device. The regulator makes that point directly in paragraphs 84–85 of the same notice.

The consequences extended well beyond the initial response. In November 2025, the ICO imposed a **£1.23 million penalty**. Its notice also records a later rollout of company-owned mobile devices and restrictions on mixing personal and business device use. [LastPass reported](https://blog.lastpass.com/posts/security-incident-update-recommended-actions) changes to privileged access controls, additional cloud-storage controls and rotation of exposed secrets in 2023. Those are documented improvements; they do not establish how many customers left or when trust recovered.

For an organisation, this is a useful reason to look closely at the workstations used by people with powerful access. A systems administrator, infrastructure engineer or developer might be able to reach backups, production systems, cloud administration or deployment credentials. Unnecessary software on that person's device adds another possible route to those privileges.

Plex is one example. The same review should include old remote-access utilities, browser extensions, abandoned development tools and applications installed for a one-off task years ago.

I would start with a few practical checks:

- **Inventory the software actually installed.** Record the device, application, version, owner and business purpose. Review changes regularly and investigate unexpected installations.
- **Give updates an owner and a deadline.** Include third-party applications, servers, NAS packages and containers. Check that an update completed successfully; a scheduled job alone does not prove it happened.
- **Keep privileged work on managed devices.** Use separate administration accounts, restrict the software permitted on administration workstations, and prevent sensitive access from unmanaged personal computers.
- **Remove software that has no business purpose.** An unused application still needs maintaining while it remains installed.

The administration recommendations align with the Australian Signals Directorate's guidance on [restricting administrative privileges](https://www.cyber.gov.au/business-government/protecting-devices-systems/system-administration/restricting-administrative-privileges) and [secure administration](https://www.cyber.gov.au/business-government/protecting-devices-systems/system-administration/secure-administration). They also build on the [asset security and access management principles]({% post_url 2026-08-03-asset-security-identity-access-management %}) I have written about previously.

There are free and paid tools that can help put this into practice. Remote monitoring and management (RMM) and endpoint management platforms can make software inventory and routine maintenance much more manageable.

| Tool | Where it can help | What to account for |
| --- | --- | --- |
| [Tactical RMM](https://docs.tacticalrmm.com/) | Software and hardware inventory, Windows patch management, monitoring and scheduled scripts. | A self-hosted option with sponsorship features, including signed Windows agents and Linux/macOS agents. Budget for maintaining and securing the management server. |
| [Action1](https://www.action1.com/documentation/software-inventory/) | Software inventory, patch management and vulnerability management. | Its [current licensing documentation](https://www.action1.com/documentation/licensing-and-subscription-allowance/) confirms the first **200 endpoints are free**, without feature limits. Additional endpoints require a subscription; support is an additional consideration on the free tier. |

Check coverage for your operating systems and applications before choosing. A workstation inventory does not automatically tell you which Plex version is running inside a Docker container or on a NAS. Those services need to be included in the maintenance process too. Secure the management platform itself with MFA, limited administrator access and updates: it has considerable power over the devices it manages.

For Plex at home, my recommendation is to **keep the server off the public internet and use carefully configured private access when away**. A VPN may suit that purpose, provided its security implications have been reviewed. Family members should each have individually controlled access that can be revoked when no longer needed.

I would only recommend implementing an overlay network such as Tailscale **after carefully reviewing the security considerations for the particular environment**. That review should cover trust in the provider and its control infrastructure, account security, device enrolment, access rules, logging, and how access will be revoked if an account or device is compromised. For an organisation, it should also go through the usual security review and approval process before being connected to corporate systems.

Tailscale is one of many remote-access solutions to evaluate. Its [device sharing](https://tailscale.com/kb/1084/sharing) allows access to a specific machine without exposing it publicly. For a compatible UniFi setup, [Teleport](https://help.ui.com/hc/en-us/articles/5246403561495-UniFi-Gateway-Teleport-VPN) provides an invitation-based VPN through WiFiman. An existing, appropriately secured VPN may also meet the need. Choose according to the environment's security requirements and the devices your family uses. Whichever solution you select, configure and verify access rules so a streaming connection reaches only the intended Plex service.

That also means checking the existing exposure. Disable Plex's public Remote Access feature, remove any Plex port forwards and check automatic router mappings: [Plex documents its use of UPnP and NAT-PMP](https://support.plex.tv/articles/200931138-troubleshooting-remote-access/) to configure remote access. Check IPv6 firewall rules as well, and verify from outside the home network that direct public access is closed. Keep Plex authentication enabled over the VPN.

A VPN reduces who can reach the service. Plex, the host and the VPN still need patching, and personal media infrastructure should remain separate from privileged work access.

My update was a small home-lab maintenance job. It was also a prompt to ask a useful question at work: **could we identify every device running an affected application today, and who would be responsible for fixing each one?**
