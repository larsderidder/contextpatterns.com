---
title: Write Outside the Window
summary: Persist important context to external storage; scratchpads, memory files, knowledge bases. The context window is working memory, not long-term memory. What matters should survive beyond a single session.
dot: gold
order: 5
category: pattern
sources:
  - label: "LangChain"
    url: "https://blog.langchain.dev/context-engineering-for-agents/"
  - label: "Letta (MemGPT)"
    url: "https://www.letta.com/blog/memgpt"
related:
  - compress
  - progressive-disclosure
---

## The Problem This Solves

The context window is volatile. When a conversation ends, everything in it is gone. When you compress and restart, details are lost. When you hit the window limit, old information gets pushed out.

For any non-trivial system, there's information that should persist across sessions: user preferences, established decisions, learned constraints, project knowledge. Keeping this in the context window means it competes with task-relevant information for attention. Losing it means starting from scratch every time.

## How It Works

Give access to external storage and teach reading from and writing to that storage as part of the workflow. The context window becomes working memory (what you're thinking about right now), while external storage becomes long-term memory (what you've learned).

**Storage patterns:**

1. **Scratchpads.** Temporary working files for the current task. Writes intermediate results, plans, and notes. Survives context compression within a session but not across sessions.
2. **Memory files.** Persistent structured notes about the project, user, or domain. Updated incrementally. Read at the start of each session. This is how coding agents maintain awareness of project conventions, architecture decisions, and past mistakes.
3. **Knowledge bases.** Indexed document stores that can be queried. RAG (retrieval-augmented generation) is the most common implementation. Pulls in relevant chunks rather than holding everything in context.

## Example: Coding Agent Memory

A coding agent working on a project maintains a `AGENTS.md` file:

```markdown
## Project
- Python 3.12, FastAPI, PostgreSQL
- Monorepo with shared libs in /packages
- Tests use pytest with factory_boy fixtures

## Conventions
- Type hints on all public functions
- Database queries go through the repository pattern
- Never use raw SQL outside /db/migrations

## Learned
- The auth module has a circular import if you import directly; use the interface
- Rate limiter tests are flaky on CI; needs Redis mock, not real connection
- User.email has a unique constraint that the ORM doesn't enforce at the model level
```

This file is read into context at the start of each session. Updates happen when new constraints are discovered or architectural decisions are made. The file persists across sessions while the context window resets.

## When to Use

- Multi-session work where continuity matters
- Projects with accumulated knowledge that would otherwise be re-discovered each session
- Agent systems that need to learn from past mistakes
- Any system where context compression would lose information you need later

## When Not to Use

- One-off tasks with no continuity requirement
- When the external storage itself becomes too large to manage (at that point, you need indexed search, not flat files)

## Related Patterns

- **[Compress & Restart](/patterns/compress)** triggers the need to write outside; compression decides what's important enough to persist
- **[Progressive Disclosure](/patterns/progressive-disclosure)** is how you read external storage back in: load what you need, when you need it
