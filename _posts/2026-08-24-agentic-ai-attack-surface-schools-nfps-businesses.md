---
title: "Agentic AI and your attack surface: what to ask before connecting one"
description: "Before connecting an AI agent to email, files or business systems, schools, charities and small businesses should ask what it can see, what it can do, and what happens when it gets something wrong."
keywords: [agentic AI risk, prompt injection, AI least privilege, ASD agentic AI guidance, OWASP LLM top 10, AI security schools charities]
date: 2026-08-24 09:00:00 +1000
categories: [General]
tags: [general, cyber-security, artificial-intelligence]
---

The [last post in this series]({% post_url 2026-08-17-ai-changing-cyber-security-fundamentals-still-matter %}) made the case that AI tools quietly become part of an organisation's attack surface the moment they're connected to real data. Nowhere is that truer than with **agentic AI** — AI systems that don't just answer a question, but can take action on their own.

A basic AI chatbot that helps rewrite a public newsletter carries one level of risk. An AI agent with access to email, internal files, a donor or student database, and the ability to send messages or update records on your behalf, is a very different proposition. The Australian Signals Directorate and its international partners have published specific guidance on the [careful adoption of agentic AI services](https://www.cyber.gov.au/business-government/secure-design/artificial-intelligence/careful-adoption-of-agentic-ai-services){:target="_blank" rel="noopener noreferrer"}, and its central warning is straightforward: don't hand an agent broad or unrestricted access to sensitive data and critical systems. Every tool and data source it's connected to widens what an attacker — or a simple mistake — can reach.

## A risk that's specific to AI: prompt injection

One risk worth understanding on its own terms is **prompt injection** — an attempt to manipulate an AI system's behaviour through the information it processes, rather than through the person using it.

Imagine a charity's AI assistant that can read incoming email and draft replies on a staff member's behalf. A message arrives — perhaps from what looks like a legitimate donor enquiry — containing hidden instructions telling the assistant to ignore its normal task, search the inbox for banking details, and forward them elsewhere. The staff member never typed anything risky. The instruction came from content the AI was simply asked to process.

Whether an attack like that succeeds depends almost entirely on how the system was designed: what it's allowed to access, what actions it can take without a human checking first, and whether anything is watching for unusual behaviour. The [OWASP Top 10 for Large Language Model Applications](https://genai.owasp.org/llm-top-10/){:target="_blank" rel="noopener noreferrer"} is a useful, practical reference here, covering [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/){:target="_blank" rel="noopener noreferrer"}, [sensitive information disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/){:target="_blank" rel="noopener noreferrer"} and [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/){:target="_blank" rel="noopener noreferrer"} — an AI system being given more independent authority to act than the situation actually warrants.

## Secure by design, applied to AI

Before an AI service is connected to anything that matters, it's worth answering the same kind of questions we apply to any new system:

- What problem is it actually solving?
- What information will it receive, and where is that information processed?
- Is anything submitted to it retained, or used to train a model?
- What is it allowed to do — read only, or also send, delete or change records?
- How is its access removed if something goes wrong?
- What happens to its output when it gets something wrong — does anyone check before it's acted on?

A school evaluating an AI tool for drafting parent communications, or a small business considering an AI assistant connected to its accounting system, should be asking these questions during the sales conversation — not after the tool has already been embedded into everyone's daily workflow. That's much harder to unwind later.

## Least privilege still applies

The principle of least privilege from [earlier in this series]({% post_url 2026-08-10-secure-by-design-least-privilege-defence-in-depth %}) applies just as directly to AI as it does to a staff account. An AI service that summarises publicly available documents doesn't need access to your entire file repository. An assistant that helps draft emails doesn't necessarily need permission to send them without review. A monitoring agent doesn't need permission to make changes to what it's monitoring.

This matters more, not less, once an agent is connected to several systems at once. Giving one AI agent access to email, file storage, donor or student records and a finance platform is convenient — right up until a compromised account, a misconfiguration or a successful prompt injection has consequences across everything it touches at once, instead of being contained to one system.

The more useful question isn't *what could we connect this to?* It's *what's the minimum access it actually needs to do this specific job?*

## Human oversight is still the backstop

None of this means AI has to be kept at arm's length. It means the level of human oversight should match the consequence of the AI getting something wrong. A tool that suggests a first draft is low stakes. A tool that can send money, release records or change access permissions on its own is not — and deserves a human in the loop until the organisation has real confidence in how it behaves.

The final post in this series looks at how to actually test whether these controls hold up — and what to do when, inevitably, something still fails.
