---
author: Durmuş Efe Özhan
pubDatetime: 2026-08-01T12:00:00Z
title: "gmAI: Intent-Driven Email Draft & Dispatch Platform"
featured: false
draft: false
tags:
  - ruby-on-rails
  - ai
  - llm
  - product-architecture
  - case-study
description: A full-stack Ruby on Rails application designed to transform raw, unformatted user thoughts into context-aware professional emails with human-in-the-loop dispatch.
---

> **Project Status:** Architectural Prototype / Archived Rails Application

**gmAI** is a productivity-focused web application engineered to remove the friction of professional email communication. The platform allows users to input unformatted, shorthand thoughts without worrying about grammar or tone, transforming them into structured, recipient-tailored drafts with mandatory pre-send approval.

---

## Technical Stack & Architecture

Built as a lightweight, modern full-stack web application using the Ruby on Rails ecosystem:

- **Backend Framework:** Ruby on Rails 8 (MVC architecture, ActiveJob pipelines)
- **Delivery Engine:** ActionMailer integration (`MailerMailer`) with transactional SMTP dispatch
- **Deployment & Infrastructure:** Dockerized container workflow ready for Kamal deployment
- **Frontend / UX:** Server-rendered ERB views (`new` -> `result` preview cycle) with dynamic styling

[ Raw User Input & Context ]
│  (Target recipient role, intent, tone selector)
▼
[ LLM Refinement & Parameter Mapping ]
│  (Context-aware transformation, structural polishing)
▼
[ Interactive Review & Approval (mails#result) ]
│  (Human-in-the-loop inspection & draft editing)
▼
[ ActionMailer Transactional Dispatch ]

---

## Core Product Workflow

1. **Context & Intent Input (`mails#new`):** The user provides raw thoughts alongside explicit metadata (e.g., target role: Academic Professor vs. Enterprise Client; urgency: High vs. Routine).
2. **Dynamic Tone Calibration:** Prompt templates adapt formatting, formal openings, and phrasing to eliminate domain-specific etiquette overhead.
3. **Human-in-the-Loop Safety Gate (`mails#result`):** Generated drafts are previewed with full manual override capabilities, ensuring AI never dispatches communications autonomously.
4. **Direct Delivery:** Once approved, the message is dispatched through configured mailer pipelines.

---

## Product Post-Mortem & Strategic Pauses

Development was archived after analyzing ecosystem trends and infrastructural constraints:

### 1. Native Workspace Commoditization
Major productivity ecosystems (such as Google Workspace with Gemini and Microsoft 365 Copilot) rapidly integrated native LLM composition bars directly inside web clients, reducing the necessity for external composition dashboards.

### 2. OAuth & Enterprise Compliance Boundaries
Moving from internal SMTP mailers to third-party Gmail API OAuth integration requires extensive security audits (CASA Tier 2/3 verification) and restricted-scope approvals, shifting project focus from core product development to compliance maintenance.

---

## Key Learnings

- **Rails 8 Full-Stack Paradigms:** Hands-on experience building MVC flows, ActionMailer mailers, and containerized Docker/Kamal setups.
- **Human-in-the-Loop UX:** Designing safety checkpoints for AI systems taking irreversible real-world actions.
- **Prompt Parameterization:** Engineering dynamic prompt structures that bind raw intent with recipient hierarchy and professional etiquette.

---

## 🔒 Source Code & Inquiries

The codebase for this prototype is kept private as an internal case study. If you would like to discuss the Rails mailer architecture, Docker/Kamal configuration, or prompt engineering pipelines in detail, feel free to reach out:

📫 **Contact:** [ozhanefe33@gmail.com](mailto:ozhanefe33@gmail.com)