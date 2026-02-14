---
title: The Pyramid
summary: Start with general background, progressively add specific details. Give the model altitude before asking it to land. Mirrors how experts brief each other; context first, task second.
dot: gold
order: 1
category: pattern
sources:
  - label: "Anthropic: Effective Context Engineering for AI Agents"
    url: "https://www.anthropic.com/engineering/context-engineering"
related:
  - select
  - progressive-disclosure
---

## The Problem This Solves

When you give a model a specific task without framing, it lacks the context to make good decisions. It fills in the gaps with assumptions, often wrong ones. You get technically correct output that misses the point entirely.

The opposite failure is equally common: dumping every piece of relevant information without structure. Drowning in detail before understanding what it's looking at.

## How It Works

Structure your context as a pyramid, from general to specific:

1. **Domain and purpose.** What system is this? What does it do? Who uses it? (2-3 sentences)
2. **Architecture and conventions.** How is the codebase organized? What patterns does it follow? What are the key abstractions? (A paragraph or short list)
3. **Specific context.** The files, functions, data, and constraints relevant to this particular task. (The bulk of your context)
4. **The task itself.** What you want done, with any constraints on approach.

By the time the model reaches the specific code, it already understands what the system does, how it's organized, and what conventions to follow.

## Example

**Without the pyramid:**
> Here's `auth.py`. Add rate limiting to the login endpoint.

**With the pyramid:**
> This is a B2B SaaS platform handling sensitive financial data. Security and audit logging are non-negotiable.
>
> The backend is Python/FastAPI. Authentication uses JWT tokens with refresh rotation. Rate limiting elsewhere in the app uses a Redis-backed sliding window. All security events are logged to the `audit_events` table.
>
> Here's `auth.py` [file contents]. The login endpoint is `POST /auth/login` at line 47.
>
> Add rate limiting to the login endpoint. Use the existing Redis sliding window pattern. Log failed attempts as security events.

The second version gives altitude. It knows the domain (financial, security-sensitive), the conventions (Redis sliding window, audit logging), and then the specifics. You'll get code that fits the system rather than generic rate limiting.

## When to Use

- Starting a new conversation or task
- Building system prompts for agents
- Preparing context for code generation, review, or refactoring
- Any situation where domain knowledge affects the quality of output

## When Not to Use

- Quick, self-contained questions that need no domain framing ("What does `Array.prototype.flat()` do?")
- When there's already context from earlier in the conversation
- When you're exploring and don't yet know what the task is

## Related Patterns

- **[Select, Don't Dump](/patterns/select)** constrains what goes into each layer of the pyramid
- **[Progressive Disclosure](/patterns/progressive-disclosure)** extends the pyramid concept across multiple turns rather than one prompt
