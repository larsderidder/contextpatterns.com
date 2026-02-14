---
title: "Select, Don't Dump"
summary: The smallest set of high-signal tokens that maximize the desired outcome. More context isn't better context. Surgical selection beats comprehensive inclusion. Treat every token as a cost, not a freebie.
dot: blue
order: 2
category: pattern
sources:
  - label: "NoLiMa Benchmark"
    url: "https://arxiv.org/abs/2502.05167"
  - label: "Chroma Research"
    url: "https://research.trychroma.com/evaluating-chunking"
related:
  - context-rot
  - pyramid
  - compress
---

## The Problem This Solves

The instinct when working with large context windows is to include more. More files, more documentation, more history. If the model can handle 200k tokens, why not use them?

Because context rot means every token you add degrades attention on every other token. Including a file "just in case" isn't free. It actively competes with the information actually needed.

## How It Works

For every piece of context you're considering, ask: does this directly help the model complete this specific task? If the answer is "maybe" or "it might be useful," leave it out.

**The selection criteria:**

1. **Relevance.** Does this information directly relate to what the model needs to do right now?
2. **Signal density.** Does this chunk contain mostly useful information, or is it mostly boilerplate/noise with a few useful lines?
3. **Non-redundancy.** Is this information already represented elsewhere in the context?
4. **Actionability.** Will the model use this to make a decision or produce output, or is it just background?

## Example

Fixing a bug in a function that processes user uploads.

**Dumping approach:** include the entire file (500 lines), the test file (300 lines), the data model (200 lines), the API route file (400 lines), and the README (800 lines). Total: 2,200 lines.

**Selection approach:** include the broken function (40 lines), the relevant test that fails (15 lines), the data model for uploads only (30 lines), and the error message from logs (5 lines). Total: 90 lines.

The selection approach gives 96% less context and a much higher signal-to-noise ratio. Focus stays on what matters instead of wading through unrelated code.

## Techniques

- **Extract, don't include.** Pull out the relevant function, class, or section rather than including the whole file. Add a comment noting where it came from.
- **Summarize adjacent context.** Instead of including a full dependency, write a one-line description of what it does and what interface it exposes.
- **Cut boilerplate.** Imports, license headers, standard config: strip anything that can be inferred.
- **Use markers.** When you must include a long file, add comments like `// RELEVANT SECTION BELOW` to direct attention.

## When to Use

- Always. This is the default stance. Every context assembly decision should start from "what's the minimum?" and add from there.

## When Not to Use

- Exploratory sessions where you genuinely don't know what's relevant yet (use [Progressive Disclosure](/patterns/progressive-disclosure) instead)
- When the task requires understanding the full system (use [The Pyramid](/patterns/pyramid) to structure the inclusion)

## Related Patterns

- **[Context Rot](/patterns/context-rot)** is why selection matters: every extra token degrades quality
- **[The Pyramid](/patterns/pyramid)** structures what you do include
- **[Compress & Restart](/patterns/compress)** applies selection retroactively to accumulated context
