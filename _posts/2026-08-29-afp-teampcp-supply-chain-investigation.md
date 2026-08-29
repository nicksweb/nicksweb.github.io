---
title: "The AFP didn't name the software: what was behind the TeamPCP supply-chain attacks"
description: "The AFP charged two men over a global cybercrime syndicate but never named the compromised software. Lined up against months of public incident reports, the mystery is Trivy, Checkmarx KICS, LiteLLM and the Telnyx Python SDK."
keywords: [TeamPCP, software supply chain attack, Trivy supply chain attack, AFP cybercrime arrests, Checkmarx KICS, LiteLLM malicious package, Telnyx Python SDK, open source security, CVE-2026-33634, credential theft]
date: 2026-08-29 09:00:00 +1000
categories: [Cyber Security]
tags: [cyber-security, supply-chain, open-source, data-breach]
image:
  path: /assets/images/teampcp-software-supply-chain-attack-git-commit-history.jpg
  alt: "A code editor showing a Git commit and version-tag history, the kind of release infrastructure the TeamPCP supply-chain attacks abused"
---

On 27 August 2026, the Australian Federal Police announced that two Western Australian men had been charged following what it described as the disruption of an alleged global cybercrime syndicate.

The wording was deliberately vague.

The AFP said its investigation began after cyber threat intelligence companies provided information about a group allegedly inserting malicious code into software on an open-source repository. That software was then consumed by developers and distributed further into government, academic and private-sector environments.

According to the AFP, more than 1,000 organisations may have been affected, more than 500,000 credentials allegedly stolen, and at least 300 GB of data exfiltrated. The estimated remediation cost across affected organisations runs into the hundreds of millions of dollars.

What the AFP did not explain was perhaps the most interesting part: *what open-source software had actually been compromised?*

Once you start lining the announcement up against several months of public incident reports, the mystery becomes considerably less mysterious.

*Photo by [Yancy Min](https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/a-close-up-of-a-text-description-on-a-computer-screen-842ofHC6MaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}.*

## The US indictment names TeamPCP

On the same day the AFP announced the arrests, the US Department of Justice unsealed an indictment against 21-year-old Australian Ruben Ian Thomson, alleging that he participated in the cybercriminal group known as TeamPCP. The indictment describes a conspiracy to exploit trusted software supply-chain security tools by injecting malicious code that cascaded into downstream customers.

The DOJ says the malicious code scanned victim environments for sensitive data, attempted to exfiltrate it, and enabled persistent access. Thomson and his alleged co-conspirators also allegedly extorted ransom payments in exchange for a promise not to release stolen data.

Australian media identified the second arrested man as Louis Michael Gaebler, 23. Prosecutors described both men as alleged "masterminds" of the operation during a bail application.

![Screenshot of the AFP media release headed "Two WA men charged following AFP-FBI-WAPF disruption of alleged global cybercrime syndicate", dated 27 August 2026](/assets/images/afp-media-release-teampcp-cybercrime-syndicate-charges.png)
_The joint AFP, FBI and Western Australia Police Force media release announcing the charges. Source: [Australian Federal Police](https://www.afp.gov.au/news-centre/media-release/two-wa-men-charged-following-afp-fbi-wapf-disruption-alleged-global){:target="_blank" rel="noopener noreferrer"}._

The FBI had already issued a FLASH alert on 2 July 2026 specifically warning about TeamPCP. That alert named four compromised tools directly: Trivy, KICS, LiteLLM, and the Telnyx Python SDK.

Those were only part of the story.

## An important qualification

Before going further: the Australian and United States criminal proceedings concern allegations that have not yet been tested at trial. Similarly, while some incidents described below have been directly attributed to TeamPCP by law enforcement or vendors, others are linked by security researchers rather than by the affected company itself. I have tried to keep those distinctions clear throughout.

## The first big domino: Trivy

If there is one piece of software that explains how this campaign became so consequential, it is Trivy.

Trivy is an open-source vulnerability scanner maintained by Aqua Security. It is exactly the sort of tool organisations deliberately put into sensitive places: CI/CD pipelines, container workflows, cloud environments, and software builds.

That is what made compromising it so valuable.

Aqua Security's own post-incident analysis says the story began with a GitHub Actions misconfiguration in late February 2026. An attacker obtained privileged credentials. Aqua detected the incident, disclosed it on 1 March, and began rotating credentials.

But the credential rotation was not sufficiently complete.

Residual access remained.

That matters enormously because on 19 March, the attacker returned.

Microsoft's investigation documented that the attacker force-pushed malicious commits across 76 of 77 version tags for `aquasecurity/trivy-action` and all seven tags for `aquasecurity/setup-trivy`. A malicious Trivy release numbered 0.69.4 was also distributed, followed by malicious container images using version numbers 0.69.5 and 0.69.6 on 22 March.

Aqua subsequently warned that it had never legitimately released Trivy 0.69.4. If anyone encountered that version, it was malicious. The vulnerability was assigned CVE-2026-33634.

This was not a conventional vulnerability where someone sent a specially crafted packet to Trivy and gained access.

The distribution mechanism itself had become hostile.

That is a very different security problem.

## The malware wanted the keys to everything else

The malicious Trivy did not simply damage the machine on which it ran.

Its real purpose was credential collection.

Microsoft documented attempts to harvest credentials and secrets associated with AWS, Azure, and Google Cloud, Kubernetes, CI/CD environments, databases, SSH, WireGuard, cryptocurrency wallets, and other services. Sensitive files and environment variables were collected, packaged, and encrypted for exfiltration.

Even more cleverly, after doing that work, the malicious component could continue with the legitimate Trivy scan.

From the developer's perspective, the pipeline might still turn green.

The security scanner appeared to have done exactly what it was supposed to do.

That is worth thinking about. Most defenders are conditioned to look for something *failing* when an attack happens. In a software supply-chain attack, success can be part of the camouflage. The compromised security tool steals your credentials and then gives you the vulnerability report you expected.

## From one compromise to the next

The significance of stealing developer credentials becomes apparent when you consider what those credentials can control.

![A stylised 3D illustration of a desktop computer running a code editor, surrounded by floating HTML, PHP, JavaScript and CSS icons and a stream of binary](/assets/images/open-source-package-supply-chain-malicious-code.jpg)
_A single set of developer credentials can often publish packages, move Git tags and reach cloud environments. Photo by [Growtika](https://unsplash.com/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/a-computer-with-a-keyboard-and-mouse-yGQmjh2uOTg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}._

A GitHub token can potentially modify another repository. A package-registry token can publish another npm or PyPI package. A cloud credential can open a production environment. A CI/CD token can reach artefacts or deployments. A developer's authenticated workstation may have access to several of those things simultaneously.

That creates a feedback loop:

> Compromise trusted package, steal developer credentials, compromise another trusted project, publish another malicious package, steal more credentials, repeat.

This is what WIRED later described as a "flywheel" of software supply-chain compromise. By May 2026, WIRED's investigation reported hundreds of affected software components and more than 1,000 poisoned versions during the wider campaign.

## Checkmarx: when a security company becomes part of the chain

On 23 March 2026, Checkmarx identified a cybersecurity incident originating from the Trivy supply-chain attack. Checkmarx develops software specifically designed to help organisations secure their application-development process.

Checkmarx says it believes the Trivy compromise was the likely vector that enabled attackers to obtain credentials and gain unauthorised access to its GitHub repositories. As a result, the attackers were able to publish malicious code to certain externally distributed artefacts.

Wiz documented that all 35 version tags for the Checkmarx KICS (Keeping Infrastructure as Code Secure) GitHub Action were force-pushed to malicious commits during the exposure window. Version 2.3.28 of the `checkmarx/ast-github-action` was also confirmed as compromised.

The attack extended further. On 22 April, TeamPCP pushed malicious images to the official `checkmarx/kics` Docker Hub repository and simultaneously poisoned VS Code and OpenVSX extensions. On 9 May, a malicious Checkmarx Jenkins AST plugin was distributed using access Checkmarx says originated from the March incident.

That is almost a textbook example of the cascade: a security company uses a security tool, the security tool is compromised, and credentials obtained through that compromise are then used to compromise the security company's own products. Customers downstream trust both.

## LiteLLM: a poisoned Python package with enormous reach

LiteLLM, widely used to provide a common interface to different AI and large-language-model APIs, was another significant target.

On 23 and 24 March 2026, malicious versions 1.82.7 and 1.82.8 appeared on PyPI. The project's own GitHub security discussion confirms those versions were uploaded directly into the package-distribution channel. Version 1.82.8 included a Python `.pth` mechanism capable of causing malicious code to execute when Python started.

The payload searched for SSH material, cloud credentials, API keys, Kubernetes credentials, and other secrets.

A library does not have to be an application that employees consciously launch. It may execute because another application imports it, because a CI job builds something, because Python starts, or because an automated dependency process pulled the latest accepted version. The developer may never have made a conscious decision on the day of compromise to install malware. They installed software they already trusted.

## Telnyx: the GitHub release and PyPI package did not match

The Telnyx Python SDK provides a useful detection lesson. Malicious PyPI versions 4.87.1 and 4.87.2 did not correspond with legitimate GitHub releases or tags. The last legitimate release was 4.87.0.

The project's GitHub security advisory records those two PyPI versions as compromised. That mismatch, a registry package appearing without the expected source-control release, is exactly the sort of signal software-security tooling should be able to detect.

The FBI later explicitly included the Telnyx Python SDK among tools modified by TeamPCP.

## CanisterWorm showed how quickly this could spread

The Trivy compromise was rapidly followed by malicious npm activity.

Security company Aikido reported detecting CanisterWorm on 20 March 2026. Rather than compromising packages one by one manually, the malware looked for npm credentials, determined which packages those credentials could publish, and attempted to propagate itself into them.

Within a very short period, dozens of packages had been affected. Socket subsequently reported more than 135 malicious artefacts across more than 64 packages.

This is another uncomfortable change in the supply-chain threat model. A compromised package maintainer is bad. Malware capable of asking *"what other packages can this account publish?"* and automatically poisoning them is worse. Software distribution becomes the propagation mechanism.

Notably, CanisterWorm used an Internet Computer Protocol blockchain canister as a command-and-control resolver, a novel evasion technique that resists conventional infrastructure takedowns because the canister cannot be deprovisioned via abuse notices or registrar action.

## The chain had only just begun

By late March 2026, the public record already showed Trivy, Checkmarx KICS, LiteLLM, the Telnyx Python SDK, and dozens of npm packages as compromised, with stolen developer credentials enabling each successive attack.

And this is where the story gets much larger. Those stolen credentials did not simply expose individual organisations. In several cases, they gave the attackers access to organisations that themselves published software trusted by thousands or millions of other users.

In [Part 2]({% post_url 2026-08-29-from-trivy-to-github-teampcp-blast-radius %}): how the chain reached the European Commission, Bitwarden, TanStack, OpenAI, GitHub, and others, and what organisations can actually do about it.

---

## References

Australian Federal Police. (2026, August 27). *Two WA men charged following AFP, FBI, WAPF disruption of alleged global cybercrime syndicate* [Media release]. <https://www.afp.gov.au/news-centre/media-release/two-wa-men-charged-following-afp-fbi-wapf-disruption-alleged-global>

United States Department of Justice, Northern District of California. (2026, August 27). *Australian man indicted for "TeamPCP" cyberattacks on software supply chain* [Press release]. <https://www.justice.gov/usao-ndca/pr/australian-man-indicted-teampcp-cyberattacks-software-supply-chain>

Federal Bureau of Investigation. (2026, July 2). *Cyber criminal group TeamPCP* (FLASH-20260702-01). <https://www.ic3.gov/CSA/2026/260702.pdf>

Aqua Security. (2026, March 20; updated April 3). *Update: Ongoing investigation and continued remediation* [Blog post]. <https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/>

Microsoft Security. (2026, March 24; updated May 4). *Guidance for detecting, investigating, and defending against the Trivy supply-chain compromise* [Blog post]. <https://www.microsoft.com/en-us/security/blog/2026/03/24/detecting-investigating-defending-against-trivy-supply-chain-compromise/>

Wiz Research. (2026, March 20). *Trivy compromised by "TeamPCP"* [Blog post]. <https://www.wiz.io/blog/trivy-compromised-teampcp-supply-chain-attack>

Checkmarx. (2026, March 23; updated July 6). *Update: Ongoing Checkmarx supply chain security incident* [Blog post]. <https://checkmarx.com/blog/ongoing-security-updates/>

Palo Alto Networks Unit 42. (2026). *When security scanners become the weapon: Breaking down the Trivy supply chain attack* [Blog post]. <https://www.paloaltonetworks.com/blog/cloud-security/trivy-supply-chain-attack/>

Trend Micro. (2026, May 13). *Analyzing TeamPCP's supply chain attacks: Checkmarx KICS and elementary-data in CI/CD credential theft* [Research]. <https://www.trendmicro.com/en_us/research/26/e/analyzing-teampcp-supply-chain-attacks.html>

Arctic Wolf. (2026, March 25). *TeamPCP supply chain attack campaign targets Trivy, Checkmarx (KICS), and LiteLLM* [Blog post]. <https://arcticwolf.com/resources/blog/teampcp-supply-chain-attack-campaign-targets-trivy-checkmarx-kics-and-litellm-potential-downstream-impact-to-additional-projects/>

Cloud Security Alliance. (2026, May 20). *TeamPCP supply chain cascade: When security tools become attack infrastructure* [Research note]. <https://labs.cloudsecurityalliance.org/research/csa-research-note-teampcp-supply-chain-cascade-20260402-csa/>

Docker. (2026, April 23). *Trivy, KICS, and the shape of supply chain attacks so far in 2026* [Blog post]. <https://www.docker.com/blog/trivy-kics-and-the-shape-of-supply-chain-attacks-so-far-in-2026/>

Kudelski Security. (2026). *Investigating two variants of the Trivy supply-chain compromise* [Research]. <https://kudelskisecurity.com/research/investigating-two-variants-of-the-trivy-supply-chain-compromise>

Greenberg, A., & Hay, L. (2026, May 21). A hacker group is poisoning open source code at an unprecedented scale. *WIRED*. <https://www.wired.com/story/teampcp-supply-chain-attacks/>

Krebs, B. (2026, August 27). Two alleged 'TeamPCP' hackers arrested in Australia. *KrebsOnSecurity*. <https://krebsonsecurity.com/2026/08/two-alleged-teampcp-hackers-arrested-in-australia/>

The Hacker News. (2026, August 27). *Alleged TeamPCP hackers charged in Australia over major supply chain attacks*. <https://thehackernews.com/2026/08/alleged-teampcp-hackers-charged-in.html>

BleepingComputer. (2026, August 27). *Australia arrests alleged TeamPCP hackers behind supply-chain attacks*. <https://www.bleepingcomputer.com/news/security/australia-arrests-alleged-teampcp-hackers-behind-supply-chain-attacks/>

CyberScoop. (2026, August 27). *Two alleged TeamPCP members arrested and charged after months of software supply-chain chaos*. <https://cyberscoop.com/teampcp-cybercrime-arrests-supply-chain-attacks/>

Help Net Security. (2026, August 27). *Two alleged TeamPCP hackers arrested over global supply chain attacks*. <https://www.helpnetsecurity.com/2026/08/27/alleged-teampcp-hackers-arrested-australia/>
