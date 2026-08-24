---
title: "North Queensland Cyber Watch: Nick Scali takes systems offline after cyber incident"
description: "Nick Scali has disclosed a cyber security incident that disrupted systems and slowed customer service nationally, including around its Townsville, Mackay and Cairns stores."
keywords: [Nick Scali cyber incident, Nick Scali data breach, North Queensland cyber security, Townsville cyber incident, Mackay cyber security, Cairns cyber security, retail cyber attack Australia]
date: 2026-08-14 12:30:00 +1000
categories: [Cyber Security]
tags: [cyber-security, north-queensland-cyber-watch, retail, business-continuity, data-breach]
---

This is the fifth entry in **North Queensland Cyber Watch**, an ongoing series looking at cyber security incidents that affect our region and what organisations here can take from them.

This one is national in scale rather than originating in North Queensland, but it is still local in a very practical sense. Nick Scali has stores in [Townsville, Mackay and Cairns](https://www.nickscali.com.au/showrooms){:target="_blank" rel="noopener noreferrer"}. Customers around the region may have orders, deliveries and personal information sitting in the same national systems the company has now taken offline and is working to restore.

It is also a useful incident to look at while the facts are still developing, because there is a real gap between what Nick Scali has confirmed and what media reporting says may have happened.

## What Nick Scali has confirmed

On 13 August 2026, Nick Scali Limited lodged a [security incident announcement with the ASX](https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/2924-03120911-2A1689381&v=undefined){:target="_blank" rel="noopener noreferrer"}.

The company said it was investigating a security incident and had elected to take certain systems offline. It acknowledged that this caused delays and uncertainty for customers, although sales orders and deliveries continued. At the time of the announcement, some systems were being brought back online and customer response times remained slower than normal.

Nick Scali also said:

> At this time, the Company does not have any evidence of unauthorised access to our customer data.

The company notified the Australian Cyber Security Centre and the Australian Federal Police, and said it would provide further updates as appropriate.

![Nick Scali Limited's ASX security incident announcement dated 13 August 2026, confirming systems were taken offline and that the ACSC and AFP had been notified.](/assets/images/NickScali_Letter_ASX.png){: width="700" }
_Nick Scali Limited's ASX announcement, 13 August 2026. Screenshot retained for reporting and commentary._

That is the confirmed position from the company. It tells us there was a sufficiently serious incident to justify taking systems offline, that normal customer service was disrupted, and that federal cyber security and law-enforcement agencies were notified. It does not tell us how the attacker gained access, which systems were affected, how long the attacker may have been present, or whether customer information was viewed or removed.

## What has been reported, but not yet confirmed by the company

[Cyber Daily reported](https://www.cyberdaily.au/security/14046-hacked-aussie-furniture-company-nick-scali-discloses-cyber-incident){:target="_blank" rel="noopener noreferrer"} that information relating to thousands of customers may have been compromised, including names, contact details and addresses. The publication attributed the apparent intrusion to a threat group reported to have demanded a ransom.

*The Australian* similarly reported that an organised cyber-crime group had obtained customer details, including residential addresses, and issued a ransom demand.

![Facebook post from The Australian reporting that cyber criminals obtained Nick Scali customer details and made a ransom demand.](/assets/images/NickScali_FacebookPost_TheAustralian.png){: width="520" }
_*The Australian* promoting its reporting on Facebook. The claims go beyond what Nick Scali had confirmed publicly in its ASX announcement._

[SmartCompany's reporting](https://www.smartcompany.com.au/retail/nick-scali-manually-processes-orders-cyber-breach-forced-systems-offline/){:target="_blank" rel="noopener noreferrer"} focused on the operational disruption: orders and deliveries were being processed manually after systems were taken offline, creating delays and slower customer response times. It also repeated *The Australian*'s reporting that customer information may have been accessed and that a ransom was demanded.

Those reports are important, but the distinction matters. “We do not have evidence” is not the same thing as “we have proved it did not happen”, particularly early in an investigation. At the same time, an attributed media report is not a completed forensic finding.

The responsible position for now is therefore straightforward:

- **Confirmed by Nick Scali:** a security incident occurred; systems were taken offline; customer service was disrupted; systems were being restored; the ACSC and AFP were notified; and the company said it had no evidence of unauthorised access to customer data at the time of its announcement.

- **Reported by media:** criminals obtained customer names, contact details and residential addresses, and demanded a ransom.

- **Still unknown publicly:** the initial access method, the affected systems, the number of customers potentially involved, whether data was actually exfiltrated, and whether any ransom was paid.

That position may change quickly as the investigation continues.

## Why this belongs in North Queensland Cyber Watch

Nick Scali's footprint across Townsville, Mackay and Cairns makes the incident relevant here even though its head office and technology systems are national.

This is how many regional cyber incidents will reach us. The affected infrastructure does not have to be physically located in Townsville for a Townsville customer to experience the delay, receive a breach notification or have their residential address exposed. The same applies in Mackay and Cairns.

Retailers hold more useful information than people sometimes realise. A furniture order can connect a person's name, phone number, email address, delivery address, purchase history and expected delivery window. Depending on how payment and finance arrangements are handled, other service providers may also sit in that process.

A delivery address is not merely a mailing-list field. Combined with a phone number, purchase details and timing information, it can make later phishing or impersonation much more convincing. A scammer who knows that someone recently ordered a sofa does not need to invent much of a story to send a believable “delivery rescheduling” message or request an additional payment.

There is no evidence in Nick Scali's announcement that this kind of follow-on activity has occurred. It is simply the practical reason customers should pay attention if the company later confirms that contact and address information was involved.

## Taking systems offline can be the right decision

From the outside, taking retail systems offline looks like the failure. During an active incident, it can actually be the containment measure doing its job.

An organisation may deliberately trade some availability for confidentiality and integrity: stop the attacker moving further, preserve evidence and prevent compromised systems from continuing to process or expose information. That can mean slower phones, manual order processing and delayed deliveries while specialists work out what is safe to restore.

The important question is whether the business can continue operating at a reduced level while that happens. Nick Scali said sales orders and deliveries were still being completed. SmartCompany reported that manual processing was being used. That is business continuity in its least glamorous and most useful form: people, paper and alternative procedures keeping the organisation moving when the normal platform is unavailable.

For another retailer, school, charity or regional business, the useful questions are:

- Can staff find existing orders, bookings or essential contact details if the main system is unavailable?
- Is there a documented manual process, or would everyone be inventing one during the incident?
- Which systems need to return first, and who has authority to decide they are safe?
- Can customers still reach the organisation, and can staff give them consistent information?
- Are backups isolated, tested and able to support a controlled restoration?
- Are the ACSC, police, insurer, incident-response provider and privacy advisers already listed in the response plan?

Taking systems offline is disruptive. Taking compromised systems offline without any workable continuity plan is much worse.

## The customer communication gap

At the time of writing, the detailed public statement I could locate was the ASX announcement. I could not find an equivalent customer-facing notice on Nick Scali's website or a substantive incident update across its visible social channels.

That may change, and it may be that affected customers are contacted directly once the forensic work identifies who is involved. Nick Scali's ASX filing also specifically says that further updates will be provided as appropriate.

Still, there is a difference between communicating with the market and communicating with the people waiting for a delivery. An ASX announcement meets an important investor obligation, but most customers will not monitor company filings. When systems are offline and media outlets are reporting possible access to names and residential addresses, a short customer-facing update can reduce uncertainty even before every technical fact is known.

It does not need to speculate. A useful early notice can simply explain:

- what service disruption customers may experience;
- what the company has and has not established;
- whether customers need to take any action now;
- where authoritative updates will appear; and
- how customers can ask questions without adding pressure to ordinary store staff.

The absence of a public customer notice does not prove that no customers have been contacted privately. It is simply an area worth watching as the investigation develops.

## What customers should do now

There is not enough confirmed information to justify panic, replacing payment cards or assuming every Nick Scali customer has been affected.

There are, however, some sensible low-cost precautions:

- Treat unexpected calls, emails or text messages about Nick Scali orders and deliveries cautiously.
- Do not make an additional payment through a link sent by text or email; contact the store through a number sourced independently from the official website.
- Be suspicious of anyone who creates urgency by claiming an order will be cancelled or a delivery lost unless payment is made immediately.
- Use a unique password for any online retail account, and change it anywhere else if it has been reused.
- Watch for an official customer notice that identifies what information, if any, was involved and what action the company recommends.

The Australian Government's guidance remains that organisations should not pay cyber ransoms. Payment does not guarantee systems will be restored, stolen information deleted or the same organisation left alone in future.

## What I will be watching next

There is still very little technical detail available, which is normal this early in a serious incident. The next useful update should clarify whether the company has found evidence of customer-data access, how many people may be involved, what categories of information were held in the affected systems, and whether direct notifications or support will be provided.

Until then, the most important part of this story is the distinction between what is known and what is reported. Nick Scali has confirmed a material operational incident. Several media outlets are reporting customer-data theft and a ransom demand. Those two accounts may converge as the investigation progresses, but they have not yet done so publicly.

For North Queensland customers, the practical connection is already here: Townsville, Mackay and Cairns all have Nick Scali stores, and national systems can create local disruption and local risk. That is exactly why this belongs in North Queensland Cyber Watch.
