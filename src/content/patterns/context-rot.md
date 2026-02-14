---
title: Context Rot
summary: Model quality degrades as context gets longer, even well within the window limit. 11 of 13 models drop to half their baseline at 32k tokens. The window size on the box is not the window size you get. Every pattern below exists because of this.
dot: gold
order: 0
category: problem
sources:
  - label: "NoLiMa Benchmark"
    url: "https://arxiv.org/abs/2502.05167"
  - label: "Lost in the Middle"
    url: "https://arxiv.org/abs/2307.03172"
related:
  - select
  - compress
---

## The problem

Every major model advertises a context window measured in hundreds of thousands of tokens. GPT-4o claims 128k. Claude offers 200k. Gemini goes up to 2 million. These numbers suggest you can throw in an entire codebase, a full document library, or months of conversation history and the model will handle it.

It won't.

The NoLiMa benchmark tested 13 leading models on tasks requiring them to find and use information placed at various positions within long contexts. At 32k tokens, 11 of 13 models dropped to half their short-context performance. Not at 128k. Not at the edge of their window. At 32k, a fraction of what they claim to support.

The degradation isn't a cliff, it's a slope that starts early and steepens as context grows.

## Why It Happens

Three factors compound:

**Attention dilution.** Transformer attention spreads across all tokens. As context grows, the attention each token receives thins out. Important information competes with noise for focus.

**Position effects.** Models tend to over-weight information at the beginning and end of context, the "lost in the middle" phenomenon documented by Liu et al. (2023). Critical facts buried in the middle of a long context are systematically under-attended.

**Reasoning chain degradation.** Longer contexts mean more state to maintain while reasoning. Each additional step in a reasoning chain compounds error probability. Context length doesn't just dilute retrieval, it degrades the quality of thought.

## What This Means

The practical window, the context size where quality remains reliable, is significantly smaller than the advertised window. For complex reasoning tasks, it may be as low as 16k-32k tokens depending on the model and task.

Every pattern on this site exists because of this gap between advertised and effective context. If context windows worked as advertised, you could dump everything in and be done. They don't, so you need strategies for deciding what goes in, when, and how.

## When to Use This Framing

Context rot is not a pattern to apply. It's the constraint that motivates all the other patterns. Reference it when:

- Stakeholders assume "just use a bigger context window" solves their problem
- You're deciding whether to stuff more information in or restructure your context strategy
- You need to justify the engineering investment in context management
