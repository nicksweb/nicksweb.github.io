---
title: "ASD’s 2025–26 Cyber Threat Report: what schools should take from the numbers"
description: "Education and Training accounts for 4% of reported incidents in ASD’s new report. What that means for schools, and where leaders should focus next."
date: 2026-10-28 19:50:00 +1000
published: true
categories: [Cyber Security]
tags: ["cyber-security", "annual-cyber-threat-report-2025-26", "education", "governance"]
wrap_tables: true
image:
  contain: true
  path: /assets/images/Cybersecurity_Severity_2026_CyberGovAU.png
  alt: "ASD’s incident severity matrix for 1,524 incidents in FY2025–26. Categories combine impact and organisational significance; the categorisation method changed this year."
  width: 879
  height: 609
---

Education and Training appears seventh in the top-ten reporting sectors in ASD’s newly released [Annual Cyber Threat Report 2025–26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-26), accounting for **4% of incidents reported to ASD’s ACSC**. It is below government, health and several other sectors, and shares the same rounded percentage as manufacturing.

That is useful context for a school leadership discussion. It is not a measure of the chance that your school will be attacked. The report describes incidents reported to the national agency, across the broader Education and Training sector. It does not count every attack on every school, or provide a school-by-school risk rate.

*Chart: © Commonwealth of Australia 2026, Australian Signals Directorate’s Australian Cyber Security Centre, Annual Cyber Threat Report 2025–26, Figure 1 (printed page 12), reproduced under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). [Open the full-size matrix](/assets/images/Cybersecurity_Severity_2026_CyberGovAU.png).*

## Read the numbers before ranking the risk

The report was published on **26 October 2026** and covers the financial year ending 30 June. Three findings are particularly useful for schools:

| Finding | What it means for a school discussion |
| --- | --- |
| Education and Training represents 4% of reported incidents | This is a reporting share, not an attack probability or a measure of harm to students. |
| ACSC responded to 1,524 incidents across all sectors | The national response workload is broader than education and includes unsuccessful incidents. |
| 362 incidents were identified following proactive ACSC notifications | A warning from outside the organisation can reveal a problem that internal monitoring has missed. |

Sources: the report’s **Year in Review**, printed pages 12–14. ASD also notes that government reporting obligations likely help explain government’s high share. Differences in reporting behaviour matter when comparing sectors.

The severity matrix needs equal care. ACSC categories run from C1, the most severe, to C6, the least severe, and combine the effect of an incident with the significance of the organisation’s impact to Australia. Schools sit in a column alongside medium-sized organisations and local government. **The 17 extensive incidents in that column are not 17 school incidents**; the figure does not separate the three groups.

ASD changed its categorisation method in FY2025–26. Some categories therefore cannot be compared directly with last year. A lower national category also does not make an incident minor for the school whose attendance records, parent communications or boarding operations are affected.

## Start with the systems a stranger can reach

The report describes continuing compromises through unpatched systems and social engineering. It even records exploitation of a vulnerability identified in 2008. That is a useful challenge to the assumption that only a newly discovered flaw deserves attention.

For a school, I would turn this into a review of public websites, remote-access gateways, forgotten test sites and administrative interfaces. Ask the IT team and service providers to identify the business purpose, owner and support status of each service. Remove unnecessary exposure and agree how quickly the remaining systems can be patched.

A parent portal may need public access. A server management interface usually needs a much narrower audience. The decision should follow how people actually use the service, with changes tested so that improving security does not unexpectedly interrupt teaching or family access. The companion [internet-exposure article]({% post_url 2026-10-28-reduce-internet-exposure-asd-ai-cyber-guidance %}) works through that process.

## Treat suppliers and recovery as school responsibilities

ASD highlights how interconnected systems and suppliers make incidents more complex. My practical interpretation for schools is to map the services that teaching, safeguarding and administration depend on, including the ones hosted elsewhere.

For each essential provider, establish who investigates suspicious activity, who can supply logs, how the school receives incident updates and how records can be recovered. A supplier running the platform does not answer the school’s separate question: how do we continue operating while it is unavailable?

A useful exercise is to work through one morning without the student management system or normal email. Can staff obtain the minimum information needed for attendance, emergency contacts and safe supervision through an authorised fallback? Can leadership reach families? Test access to the fallback and its security, not just the existence of a document saying it is available.

## Give the board evidence it can act on

For the next leadership meeting, I would ask for four concrete items:

- An inventory of internet-facing services, including the owner of each and any unsupported technology.
- The date and outcome of the last restore test for a critical service.
- The incident contacts and notification arrangements for key suppliers.
- A short exercise showing how teaching, administration and family communications continue during an outage.

These are practical applications of the report, rather than a new ASD compliance checklist. They complement the [school governance discussion]({% post_url 2026-10-04-beyond-essential-eight-school-cybersecurity-governance %}) and [ASD’s refreshed Essentials]({% post_url 2026-10-16-asd-essentials-welcome-refresh %}).

Education’s position in the national table gives us perspective. The decisions that protect a particular school still depend on its systems, people, records and ability to recover.

## Sources

- [ASD Annual Cyber Threat Report 2025–26](https://www.cyber.gov.au/publication/annual-cyber-threat-report-2025-26), published 26 October 2026; Year in Review, printed pages 12–14, and AI resilience discussion, pages 47–48.
- [ASD guidance for medium-sized businesses](https://www.cyber.gov.au/publication/defending-against-ai-enabled-cyber-attacks-guidance-for-medium-sized-businesses), published 6 July 2026; relevant technical actions applied here to school environments.

## More in this series

- [The 2025–26 Cyber Threat Report: practical priorities for charities and small businesses]({% post_url 2026-10-28-annual-cyber-threat-report-2025-26-charities-small-business %})
- [Reduce what the internet can reach: a practical response to ASD’s AI guidance]({% post_url 2026-10-28-reduce-internet-exposure-asd-ai-cyber-guidance %})
- [Using AI with Graylog and Wazuh: better questions, tested alerts and useful reports]({% post_url 2026-10-28-ai-security-log-analysis-graylog-wazuh %})
