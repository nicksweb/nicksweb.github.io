---
title: "From Trivy to GitHub: how the TeamPCP supply-chain attacks spread, and what we can do about it"
description: "How stolen developer credentials from the Trivy compromise cascaded into Bitwarden, TanStack, Nx, OpenAI, GitHub and the European Commission, and the controls the FBI and affected vendors recommend."
keywords: [TeamPCP supply chain attack, GitHub internal repositories breach, TanStack npm attack, Bitwarden CLI npm, Nx Console VS Code extension, European Commission cloud breach, minimum package age, pin GitHub Actions to commit SHA, CI/CD security, trusted publishing OIDC]
date: 2026-08-29 09:30:00 +1000
categories: [Cyber Security]
tags: [cyber-security, supply-chain, data-breach]
image:
  path: /assets/images/developer-workstation-supply-chain-attack-target.jpg
  alt: "Overhead view of a developer working at a desk with a laptop and two external monitors, the kind of workstation the TeamPCP supply-chain attacks targeted"
---

*This is Part 2 of a two-part investigation. [Part 1]({% post_url 2026-08-29-afp-teampcp-supply-chain-investigation %}) traces the AFP's vague announcement back to the compromised software: Trivy, Checkmarx KICS, LiteLLM, and the Telnyx Python SDK.*

In Part 1, I followed the trail from the AFP's deliberately vague announcement on 27 August 2026 to the software that was actually compromised: a vulnerability scanner called Trivy, from which stolen developer credentials enabled a cascade into Checkmarx KICS, LiteLLM, the Telnyx Python SDK, and dozens of npm packages.

But the March 2026 compromises were only the beginning.

The attackers were not simply compromising software. They were compromising the trust relationships that allow modern software development to work.

Here is what happened next, and why this campaign deserves much more attention than the phrase "malicious package" sometimes receives.

*Photo by [ThisisEngineering](https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/person-using-macbook-pro-on-white-table-uyfohHiTxho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}.*

## Bitwarden: an important distinction about what was compromised

On 22 April 2026, a malicious release of the Bitwarden CLI appeared on npm: `@bitwarden/cli@2026.4.0`. It was available for roughly an hour and a half before being removed.

Bitwarden responded publicly and published a clean 2026.4.1 release. Importantly, Bitwarden said it found no evidence that end-user vault data, Bitwarden production systems, or production data were compromised. The exposure concerned developers or systems that installed the affected CLI package via npm, and Bitwarden advised potentially affected users to rotate accessible system secrets.

That distinction matters. "Bitwarden compromised" sounds like a password-vault breach. That is not what the public evidence says happened. A software-distribution component carrying the Bitwarden name was compromised. That is serious, particularly for CI/CD environments, but it is not evidence that attackers obtained everybody's Bitwarden vault.

Trend Micro's analysis confirms the malicious Bitwarden CLI package used JavaScript/Bun runtime delivery with AES-256-GCM and RSA OAEP-SHA256 encryption, technically consistent with the broader TeamPCP toolchain.

## TanStack demonstrated an even more sophisticated route into trusted publishing

Then came TanStack.

On 11 May 2026, TanStack detected malicious releases affecting 42 packages and 84 versions. The attack window was remarkably brief: roughly six minutes between 7:20 and 7:26 p.m. UTC.

TanStack's post-incident analysis is worth reading because the attack did not simply involve somebody stealing a long-lived npm password.

The attacker exploited a dangerous interaction involving GitHub Actions, `pull_request_target`, shared workflow caches, and the trust boundary between a fork and the base repository. A poisoned Actions cache ultimately reached a privileged release workflow. The attacker was then able to obtain a short-lived OpenID Connect token from the runner and abuse the project's legitimate trusted-publishing path.

In other words, the project could have modern authentication, OIDC, and trusted publishing, and still have the pipeline itself manipulated into minting the credential the attacker needed. The malicious packages even generated valid SLSA Level 3 attestations, making them appear entirely legitimate to consuming systems.

That is a particularly important lesson. Provenance and trusted publishing are valuable controls, but they cannot prove that the workflow which requested the trusted credential was itself trustworthy. If an attacker controls the build before the identity is minted, the resulting malicious package can arrive through infrastructure that looks very legitimate indeed.

## Mistral AI, OpenSearch, and the expanding blast radius

Around the same period, other projects published advisories concerning malicious releases.

Mistral AI warned that `mistralai==2.4.6` on PyPI was malicious and did not correspond with a legitimate GitHub tag, commit, or release workflow. The legitimate project release remained 2.4.5 at the time of its warning.

OpenSearch published a critical GitHub security advisory covering malicious npm versions of `@opensearch-project/opensearch`, warning that machines which installed affected releases should be considered compromised.

The Open Source Security Foundation's malicious-packages database similarly recorded compromise involving UiPath's `@uipath/telemetry`, tying it to the Mini Shai-Hulud propagation activity.

By this stage, counting the campaign in terms of one compromised project no longer made much sense. It was becoming an ecosystem event.

## Then poisoned developer tooling reached GitHub itself

On 18 May 2026, the Nx project disclosed that version 18.95.0 of its Nx Console VS Code extension was malicious.

The exposure window was surprisingly short. The malicious extension was available in Microsoft's VS Code Marketplace for only around 18 minutes and in OpenVSX for roughly 36 minutes before it was removed. That was enough.

The extension looked and behaved like normal Nx Console, but on startup it silently ran a shell command that downloaded and executed a hidden package from a planted commit on the official nrwl/nx GitHub repository, disguised as a routine MCP setup task.

Two days later, GitHub disclosed a compromise involving one of its own employees.

![The GitHub home page, headed "Where the world builds software", displayed on an angled computer monitor](/assets/images/github-internal-repositories-teampcp-breach.jpg)
_A software supply-chain compromise reached a developer at GitHub, and their trusted tooling became the way into GitHub's own internal repositories. Photo by [Mohammad Rahmani](https://unsplash.com/@afgprogrammer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/q1p2DrLBtko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}._

GitHub said an employee device had installed a poisoned third-party VS Code extension. The attacker subsequently gained access to and exfiltrated internal GitHub source-code repositories. GitHub said the attacker's claim of having obtained approximately 3,800 internal repositories was "directionally consistent" with its own investigation.

Crucially, GitHub said it had found no evidence that customer information outside those internal repositories was accessed. TeamPCP reportedly offered the stolen data for sale on BreachForums for upwards of US$50,000.

Think about that attack path for a moment. A software supply-chain compromise eventually reaches a developer at GitHub, and the developer's trusted tooling becomes the way into GitHub's own internal repositories.

That is why this class of attack deserves much more attention than the phrase "malicious package" sometimes receives.

## The European Commission shows what stolen cloud credentials can become

The European Commission incident is perhaps the clearest demonstration of what happens after the software compromise succeeds.

CERT-EU says the European Commission's Security Operations Centre detected suspicious activity on 24 March 2026 and informed CERT-EU the following day.

Its investigation concluded with high confidence that initial access resulted from the Trivy supply-chain compromise. The Commission had not downloaded malware from a suspicious email or obscure website. It had used Trivy through ordinary software-update channels.

CERT-EU says attackers subsequently accessed an affected AWS account, used the compromised AWS secret to create and attach a new access key to an existing user, and launched TruffleHog to scan for additional secrets. Approximately 91.7 GB of compressed data (roughly 340 GB uncompressed) was exfiltrated, including personal data such as names, email addresses, and email content. Data pertaining to at least 29 other EU entities may also have been affected.

On 28 March, the extortion group ShinyHunters published the stolen dataset on its dark web leak site.

The affected account was part of the technical infrastructure driving multiple European Commission websites, hosting content for up to 71 clients: 42 internal European Commission entities and at least 29 other Union bodies.

That is the software supply-chain risk distilled into a single incident: trusted security scanner, cloud credential, cloud account, sensitive organisational data.

## OpenAI was caught in the May wave

OpenAI disclosed on 13 May 2026 that two employee devices in its corporate environment had been affected by the TanStack/npm supply-chain attack.

The company said the incident happened during a phased rollout of new supply-chain security controls, and the two affected employee devices had not yet received the updated configurations that would have prevented the download. OpenAI observed activity consistent with the malware's described behaviour, including unauthorised access and credential-focused exfiltration in a limited subset of internal source-code repositories to which the two impacted employees had access.

OpenAI said it found no evidence that user data, production systems, company intellectual property, or software had been altered or compromised. As a precaution, it rotated application-signing certificates across platforms and asked all macOS users to update ChatGPT, Codex, and Atlas by 12 June 2026.

Again, precision matters. This should not be described as "TeamPCP hacked ChatGPT" or "OpenAI user data was breached." That is not what OpenAI reported. What it does demonstrate is that even a sophisticated technology company can have developers exposed through dependencies they trust.

## Why software supply-chain compromise is so difficult to defend against

There is something fundamentally uncomfortable about this type of attack.

Cyber security is built on trust. We trust Microsoft Update to deliver Microsoft software. We trust an npm package bearing the same name we used yesterday. We trust PyPI. We trust a GitHub Action referenced by a familiar version tag. We trust a VS Code extension that has already been installed across developer machines. We trust the vulnerability scanner because its entire purpose is to tell us whether other things are safe.

Most of the time, we have to.

Modern software development would become almost impossible if every organisation independently audited every line of every library, action, container image, extension, and transitive dependency before each update. An average modern application can depend on hundreds or thousands of software components, many of which depend on still more components.

The compromise therefore attacks one of the assumptions on which the modern technology industry operates: that a trusted supplier today will still be a trusted supplier tomorrow.

The TeamPCP campaign repeatedly attacked that trust at its most powerful points: maintainers, build pipelines, package publishers, and developer workstations.

## Open source itself is not the vulnerability

It would be easy to draw the wrong conclusion and describe this as an "open-source problem."

I do not think that is supported by the evidence.

Many of the failures here occurred around credentials, CI/CD configuration, package publishing, mutable Git tags, automated updates, and developer access. Those are software-engineering and identity problems that can affect proprietary software too. The SolarWinds compromise remains the obvious historical example of attackers abusing a trusted commercial software update mechanism.

There is also another side to the openness of these projects: many of these compromises were identified very quickly precisely because researchers and community members could inspect package contents, compare Git tags, analyse release history, and publicly coordinate. TanStack's malicious publishing window lasted six minutes. Nx's malicious VS Code extension survived for only 18 minutes in the Marketplace.

The problem is not that we trust open-source software. The problem is unexamined and highly privileged trust in *any* software supply chain.

## What organisations should actually do

The FBI's July 2026 FLASH alert contains specific defensive recommendations. Here are the controls I think matter most, drawing on both that alert and the technical lessons from this campaign.

### Enforce a minimum package age

The FBI recommends organisations consider enforcing a minimum package age, giving the example of seven days, before newly published software is permitted into production environments.

That is a major cultural shift for development teams accustomed to immediately pulling the newest version. But look at this campaign: many malicious releases survived for minutes or hours before being detected. If an organisation does not genuinely need the latest package within minutes of publication, a delay gives maintainers, registries, security companies, and the broader community time to discover something is wrong before that package enters your environment.

Not every environment can tolerate seven days. Emergency security updates are an obvious exception. But organisations should at least be asking why an unattended build server needs to consume a package that was published six minutes ago.

OpenAI's own incident report confirms that, following the TanStack incident, it introduced `minimumReleaseAge` as one of its new supply-chain security controls.

### Pin GitHub Actions to commit SHAs

The FBI specifically recommends pinning GitHub Actions to verified commit SHA hashes rather than floating version tags or branch references.

The Trivy and KICS attacks show why. A workflow containing something like `uses: vendor/action@v1` looks sensible. But if an attacker can move `v1` to point at a malicious commit, your workflow has changed even though your repository has not.

Pinning the exact commit does not eliminate software supply-chain risk, but it changes the attacker's job. Replacing a tag is no longer enough to silently alter existing consumers. The trade-off is operational: somebody then needs to review and deliberately update those pinned versions. That friction is partly the point.

### Treat CI/CD as production infrastructure

A CI runner may have cloud deployment credentials, package-publishing permissions, container-registry credentials, access to source repositories, code-signing capability, Kubernetes service-account tokens, secrets passed as environment variables, and the ability to produce software that thousands of other machines will trust automatically.

That is extraordinarily privileged infrastructure.

The FBI's recommendations include rotating exposed CI/CD, publishing, and cloud credentials; enforcing least privilege on service accounts and registry tokens; using phishing-resistant MFA for repository and publishing accounts; monitoring CI/CD runner behaviour for unexpected outbound connections; and maintaining immutable backups of repositories and release artefacts.

### Rotate every secret, and mean it

Aqua's experience highlights an incident-response lesson that is easy to underestimate. After the first Trivy-related incident, credentials were rotated. But not every path to access was invalidated simultaneously. The attacker came back.

A compromised build environment needs to be treated differently from an ordinary password reset. You need to understand what the compromised identity could reach, what credentials it could mint, what other identities it could modify, and what persistence it could establish before considering the environment clean.

If one exposed token can obtain another token, rotating only the first may achieve very little.

### Classify developer endpoints as high-value assets

The GitHub and OpenAI incidents reinforce that developer workstations are high-value targets.

A developer may have fewer visible privileges than a domain administrator but have access to source code, GitHub organisations, cloud environments, package registries, signing processes, deployment pipelines, and internal documentation.

An IDE extension therefore deserves more scrutiny than the word "extension" suggests. Organisations that tightly control Microsoft Office macros while allowing hundreds of automatically updating VS Code extensions across privileged engineering workstations may need to reassess where their actual execution risk sits.

The same question applies to plugins, package managers, build tools, and AI coding agents.

### Monitor for mismatches between registries and source control

The Telnyx and Mistral incidents both exhibited a detectable signal: packages appeared on PyPI that did not correspond to any legitimate GitHub release, tag, or commit.

Tooling that compares registry publications against expected source-control artefacts can catch this. It is not a silver bullet (the TanStack attack went through legitimate trusted publishing), but it raises the bar meaningfully for less sophisticated supply-chain attacks.

### Audit npm maintainer accounts

The FBI specifically recommends auditing all npm package maintainer accounts for stale or expired recovery email domains, which TeamPCP exploits to take over publishing credentials. This is a straightforward hygiene measure that many projects have likely not performed.

## The AFP's vague statement makes a lot more sense now

Read in isolation, the AFP's statement about a criminal syndicate compromising a "small number of trusted software components" and somehow affecting more than a thousand organisations seems extraordinary.

After looking at the public technical record, it does not.

![The Australian Coat of Arms mounted above the entrance to Parliament House in Canberra, against a clear blue sky](/assets/images/afp-australian-federal-police-teampcp-investigation.jpg)
_A comparatively small number of highly trusted components can sit upstream of enormous numbers of organisations. Photo by [Marcus Reubenstein](https://unsplash.com/@reubenstein?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"} on [Unsplash](https://unsplash.com/photos/a-building-with-a-sign-on-top-of-it-5LtQelYxh_A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText){:target="_blank" rel="noopener noreferrer"}._

A comparatively small number of highly trusted components can sit upstream of enormous numbers of organisations. And if the objective is not simply to compromise those organisations but to steal the credentials that allow them to publish still more trusted components, the blast radius can increase very quickly.

That appears to be what makes the TeamPCP campaign different from an ordinary malicious npm package.

The software was not just the target. Software distribution was the attack infrastructure.

The FBI's warning describes TeamPCP as compromising trusted software distribution channels and introducing malicious code into legitimate packages so that apparently normal updates installed credential stealers and backdoors.

The Australian criminal case may eventually tell us more about who was responsible for which parts of this campaign. For now, the charges remain allegations.

But the compromises themselves are not hypothetical. Aqua, Checkmarx, TanStack, Bitwarden, Mistral, OpenSearch, Nx, OpenAI, GitHub, CERT-EU, and others have published enough primary-source material to establish that an unusually broad software supply-chain campaign really did unfold across the first half of 2026.

For organisations, the lesson is less about memorising the name TeamPCP than recognising what the campaign exploited. We spend a lot of time asking whether the software we deploy is *vulnerable*.

We also need to ask: what happens when the software we already trust is the thing that becomes malicious?

That is a much harder problem. And it is now a very real one.

---

## References

### Law enforcement and government sources

Australian Federal Police. (2026, August 27). *Two WA men charged following AFP, FBI, WAPF disruption of alleged global cybercrime syndicate* [Media release]. <https://www.afp.gov.au/news-centre/media-release/two-wa-men-charged-following-afp-fbi-wapf-disruption-alleged-global>

United States Department of Justice, Northern District of California. (2026, August 27). *Australian man indicted for "TeamPCP" cyberattacks on software supply chain* [Press release]. <https://www.justice.gov/usao-ndca/pr/australian-man-indicted-teampcp-cyberattacks-software-supply-chain>

Federal Bureau of Investigation. (2026, July 2). *Cyber criminal group TeamPCP* (FLASH-20260702-01). <https://www.ic3.gov/CSA/2026/260702.pdf>

CERT-EU. (2026, April 3). *European Commission cloud breach: A supply-chain compromise* [Blog post]. <https://cert.europa.eu/blog/european-commission-cloud-breach-trivy-supply-chain>

### Vendor incident reports and advisories

Aqua Security. (2026, March 20; updated April 3). *Update: Ongoing investigation and continued remediation* [Blog post]. <https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/>

Microsoft Security. (2026, March 24; updated May 4). *Guidance for detecting, investigating, and defending against the Trivy supply-chain compromise* [Blog post]. <https://www.microsoft.com/en-us/security/blog/2026/03/24/detecting-investigating-defending-against-trivy-supply-chain-compromise/>

Checkmarx. (2026, March 23; updated July 6). *Update: Ongoing Checkmarx supply chain security incident* [Blog post]. <https://checkmarx.com/blog/ongoing-security-updates/>

OpenAI. (2026, May 13). *Our response to the TanStack npm supply chain attack* [Blog post]. <https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack/>

GitHub. (2026, May 20). *Investigating unauthorized access to GitHub's internal repositories* [Statement via X/Twitter thread]. Referenced in Help Net Security report at <https://www.helpnetsecurity.com/2026/05/20/github-breached-teampcp/>

Wiz Research. (2026, March 20). *Trivy compromised by "TeamPCP"* [Blog post]. <https://www.wiz.io/blog/trivy-compromised-teampcp-supply-chain-attack>

Docker. (2026, April 23). *Trivy, KICS, and the shape of supply chain attacks so far in 2026* [Blog post]. <https://www.docker.com/blog/trivy-kics-and-the-shape-of-supply-chain-attacks-so-far-in-2026/>

### Security research and technical analysis

Palo Alto Networks Unit 42. (2026). *When security scanners become the weapon: Breaking down the Trivy supply chain attack* [Blog post]. <https://www.paloaltonetworks.com/blog/cloud-security/trivy-supply-chain-attack/>

Trend Micro. (2026, May 13). *Analyzing TeamPCP's supply chain attacks: Checkmarx KICS and elementary-data in CI/CD credential theft* [Research]. <https://www.trendmicro.com/en_us/research/26/e/analyzing-teampcp-supply-chain-attacks.html>

Arctic Wolf. (2026, March 25). *TeamPCP supply chain attack campaign targets Trivy, Checkmarx (KICS), and LiteLLM* [Blog post]. <https://arcticwolf.com/resources/blog/teampcp-supply-chain-attack-campaign-targets-trivy-checkmarx-kics-and-litellm-potential-downstream-impact-to-additional-projects/>

Cloud Security Alliance. (2026, May 20). *TeamPCP supply chain cascade: When security tools become attack infrastructure* [Research note]. <https://labs.cloudsecurityalliance.org/research/csa-research-note-teampcp-supply-chain-cascade-20260402-csa/>

Kudelski Security. (2026). *Investigating two variants of the Trivy supply-chain compromise* [Research]. <https://kudelskisecurity.com/research/investigating-two-variants-of-the-trivy-supply-chain-compromise>

SecurityWeek. (2026, April 4). *European Commission confirms data breach linked to Trivy supply chain attack*. <https://www.securityweek.com/european-commission-confirms-data-breach-linked-to-trivy-supply-chain-attack/>

### Journalism and reporting

Krebs, B. (2026, August 27). Two alleged 'TeamPCP' hackers arrested in Australia. *KrebsOnSecurity*. <https://krebsonsecurity.com/2026/08/two-alleged-teampcp-hackers-arrested-in-australia/>

Greenberg, A., & Hay, L. (2026, May 21). A hacker group is poisoning open source code at an unprecedented scale. *WIRED*. <https://www.wired.com/story/teampcp-supply-chain-attacks/>

The Hacker News. (2026, August 27). *Alleged TeamPCP hackers charged in Australia over major supply chain attacks*. <https://thehackernews.com/2026/08/alleged-teampcp-hackers-charged-in.html>

The Hacker News. (2026, May 28). *GitHub internal repositories breached via malicious Nx Console VS Code extension*. <https://thehackernews.com/2026/05/github-internal-repositories-breached.html>

BleepingComputer. (2026, August 27). *Australia arrests alleged TeamPCP hackers behind supply-chain attacks*. <https://www.bleepingcomputer.com/news/security/australia-arrests-alleged-teampcp-hackers-behind-supply-chain-attacks/>

CyberScoop. (2026, August 27). *Two alleged TeamPCP members arrested and charged after months of software supply-chain chaos*. <https://cyberscoop.com/teampcp-cybercrime-arrests-supply-chain-attacks/>

Help Net Security. (2026, May 20). *TeamPCP breached GitHub's internal codebase via poisoned VS Code extension*. <https://www.helpnetsecurity.com/2026/05/20/github-breached-teampcp/>

Help Net Security. (2026, April 3). *Trivy supply chain attack enabled European Commission cloud breach*. <https://www.helpnetsecurity.com/2026/04/03/european-commission-cloud-breach/>

CSO Online. (2026, April 3). *CERT-EU blames Trivy supply chain attack for Europa.eu data breach*. <https://www.csoonline.com/article/4154176/cert-eu-blames-trivy-supply-chain-attack-for-europa-eu-data-breach.html>

VentureBeat. (2026, May 20). *GitHub confirms 3,800 internal repos stolen through poisoned VS Code extension as supply chain worm hits Microsoft's Python SDK*. <https://venturebeat.com/security/github-confirms-3800-repos-stolen-poisoned-vs-code-extension-supply-chain-worm-microsoft-python-sdk>

TechCrunch. (2026, August 27). *Australian police arrest two over TeamPCP hacks targeting Mercor, OpenAI, and others*. <https://techcrunch.com/2026/08/27/australian-police-arrest-two-over-teampcp-hacks-targeting-mercor-openai-and-others/>
