# Factual Claims Investigation Report
**Date:** 2026-02-14  
**Investigator:** Scout (OpenClaw subagent)  
**Scope:** 6 factual claims on contextpatterns.com

---

## Summary

| Claim | Status | Action Required |
|-------|--------|-----------------|
| 1. Microsoft 65% fewer errors | ❌ **UNSOURCED** | Replace or remove |
| 2. Ankur Goyal quote | ⚠️ **UNVERIFIED** | Find source or remove |
| 3. "Industry consensus, 2026" | ⚠️ **MISATTRIBUTED** | Remove quotes, reframe |
| 4. NoLiMa model count | ❌ **INCORRECT** | Fix math: 11/13 = 85%, not 92% |
| 5. Drew Breunig 85% capacity | ❌ **NOT IN SOURCE** | Remove or cite different source |
| 6. Context-Bench scores | ✅ **VERIFIED** | Note: scores age rapidly |

---

## Detailed Findings

### 1. "65% fewer errors with architectural context (Microsoft)"

**Location:** Homepage stat bar  
**Claim:** "65% Fewer errors with architectural context (Microsoft)"

**Verdict:** ❌ **UNSOURCED — Cannot verify**

**Investigation:**
- Searched for Microsoft studies on architectural context and error reduction
- Found Microsoft blog post on Azure SRE Agent discussing context engineering, but no specific "65%" stat
- Searched academic databases and Microsoft Research — no matching study
- No hits for exact phrase "65% fewer errors architectural context"

**Recommendation:**
**Remove this stat** or **replace with a verifiable alternative**:

**Option 1 — Use ACE Framework stat (already on homepage):**
- "+10.6% agent benchmark improvement with better context (Stanford/ACE)"
- **Source:** arXiv:2510.04618
- **Verified:** ✅ Yes

**Option 2 — Use a different Microsoft-related stat:**
- From Augment Code article: Traditional AI tools with limited context suffer from high hallucination rates and low reliability
- But this lacks a specific percentage

**Option 3 — Remove entirely** and keep only the two verified stats (ACE +10.6% and NoLiMa 92%→corrected to 85%)

---

### 2. Ankur Goyal quote: "Good context engineering caches well. Bad context engineering is both slow and expensive."

**Location:** Research page, Practitioner Perspectives section  
**Claim:** Quote attributed to Ankur Goyal, Braintrust CEO

**Verdict:** ⚠️ **UNVERIFIED — No public source found**

**Investigation:**
- Searched for exact quote — **0 results** on web
- Searched X/Twitter for Ankur Goyal (@ankrgyl) context engineering tweets — no match
- Searched Braintrust blog, podcasts, interviews — quote not found
- The quote doesn't appear in any indexed public source

**Recommendation:**
Three options:

1. **Find the actual source** (private conversation? conference talk? video transcript?)
2. **Remove the quote** — This is the safest option given lack of verification
3. **Replace with a verifiable Ankur Goyal statement** about evals and context from public sources

**Note:** The quote sounds plausible and could be from:
- A private conversation or Slack message
- An unindexed conference talk
- A paraphrase of something he said differently

**Without verification, it should be removed or marked as paraphrased.**

---

### 3. "Industry consensus, 2026" — "context failures, not model failures"

**Location:** Research page, Practitioner Perspectives section  
**Claim:** Presented in quotes as if it's a direct quotation from someone

**Verdict:** ⚠️ **MISATTRIBUTED — This is an observed trend, not a quote**

**Investigation:**
- Searched for exact phrase "context failures not model failures" — **0 results**
- This phrase doesn't appear to originate from any single person
- The research page describes it as "The recurring theme across practitioners" but then puts it in quotes

**The Problem:**
Putting it in quotation marks implies someone specific said this, but it's actually a **synthesis of a broader industry theme**.

**Recommendation:**
**Reframe without quotation marks:**

**Current:**
> **Industry consensus, 2026**  
> "context failures, not model failures."

**Suggested replacement:**
> **Emerging industry consensus, 2026**  
> Production AI failures are increasingly recognized as context failures rather than model failures. This theme recurs across practitioner discussions from Anthropic, Cognition AI, and companies deploying agents at scale.

Or even simpler:
> **A recurring theme across practitioners:**  
> Most production AI failures stem from poor context engineering rather than model limitations. The orchestration is the product, not the model.

---

### 4. NoLiMa model count discrepancy

**Location:** Multiple places  
**Claims:**
- Homepage: "92% of models drop below 50% at 32k tokens"
- Context-rot.md: "11 of 12 models drop below 50%"
- REFERENCES.md: "NoLiMa tested 13 LLMs"

**Verdict:** ❌ **MATH ERROR — 11 out of 13 = 85%, not 92%**

**Investigation:**
- **Source:** NoLiMa benchmark paper (arXiv:2502.05167)
- **Actual findings from the paper abstract:**
  - "We evaluate **13 popular LLMs** that claim to support contexts of at least 128K tokens"
  - "At 32K, **11 models drop below 50%** of their strong short-length baselines"

**The Math:**
- 11 ÷ 13 = **84.6%** (rounds to **85%**)
- 11 ÷ 12 = 91.7% (rounds to **92%**)

**What happened:**
Someone appears to have miscounted the number of models tested. The paper clearly states **13 LLMs**, not 12.

**Recommendation:**
**Fix all instances to reflect the correct numbers:**

**Homepage stat bar:**
```
85%
Of models drop below 50%
at 32k tokens (NoLiMa)
```

**Context-rot.md summary:**
```
11 of 13 models drop below 50% at 32k tokens.
```

**Context-rot.md body text:**
```
The NoLiMa benchmark tested 13 leading models on tasks requiring them to find and use information placed at various positions within long contexts. At 32k tokens, 11 of 13 models dropped below 50% accuracy.
```

**Alternative if you want to keep "92%":**
The paper does mention GPT-4o specifically. You could say:
- "Even GPT-4o dropped from 99.3% to 69.7% at 32K tokens"

But the "92%" stat is mathematically incorrect for the NoLiMa findings.

---

### 5. Drew Breunig "85% capacity" claim

**Location:** Research page annotation for "How Contexts Fail"  
**Claim (from research.astro):** "overload (past 85% capacity)"

**Verdict:** ❌ **NOT IN SOURCE — Breunig doesn't state this number**

**Investigation:**
- **Source:** https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html
- **Fetched and read full article**
- **Searched for "85%" in article:** Not found

**What Breunig actually says:**

Breunig identifies several context failure modes:
1. **Context Poisoning** — hallucination enters context
2. **Context Distraction** — context overwhelms training
   - Gemini: problems "beyond 100k tokens"
   - Llama 3.1 405b: "around 32k" (per Databricks study)
3. **Context Confusion** — superfluous context influences response
4. **Context Clash** — parts of context disagree

**He never mentions "85%" anywhere in the article.**

**Where "85%" might have come from:**
- Possible conflation with NoLiMa's **85%** of models degrading (see claim #4)
- Possible confusion with a different source
- Could be from the unpublished follow-up article "How to Fix Your Context"

**Recommendation:**
**Remove the "85% capacity" reference** from the research page description.

**Current:**
> Taxonomy of context failure modes: poisoning, distraction, confusion, clash, overload (past 85% capacity).

**Suggested replacement:**
> Taxonomy of context failure modes: poisoning (hallucination enters context), distraction (context overwhelms training), confusion (superfluous context influences response), clash (parts disagree). Models begin struggling well before reaching advertised context limits—Gemini past 100k, Llama 3.1 around 32k.

Or simpler:
> Taxonomy of context failure modes with specific examples: poisoning, distraction, confusion, and clash. Useful diagnostic framework when things go wrong.

---

### 6. Context-Bench model scores: "Claude Sonnet 4.5 scored 74%, GPT-5 scored 72.67%"

**Location:** Research page, Benchmarks section

**Verdict:** ✅ **VERIFIED** — but with important caveats

**Investigation:**
- **Source:** https://www.letta.com/blog/context-bench
- **Leaderboard:** https://leaderboard.letta.com/

**Verified scores (from initial Context-Bench release):**
- Claude Sonnet 4.5: **74.0%** ✅
- GPT-5: **72.67%** ✅

**The Problem: Scores age rapidly**

The leaderboard is **live and continuously updated**. As of 2026-02-14, newer models have been added:

| Rank | Model | Score |
|------|-------|-------|
| 1 | Claude Opus 4.6 | 83.43% |
| 2 | GPT-5.2 (xhigh) | 82.61% |
| 3 | GPT-5.2 (high) | 80.50% |
| ... | ... | ... |
| 8 | Claude Sonnet 4.5 | 74% |
| 11 | GPT-5 | 72.67% |

**Recommendation:**
**Keep the scores but add context about their volatility:**

**Option 1 — Add a date:**
> Context-Bench benchmark for agentic context engineering. In the initial release (Nov 2025), Claude Sonnet 4.5 scored 74%, GPT-5 scored 72.67%. See the live leaderboard for current rankings.

**Option 2 — Remove specific scores, cite the benchmark:**
> Benchmark specifically for agentic context engineering. Evaluates models' ability to chain file operations, trace entity relationships, and manage multi-step information retrieval. See the live leaderboard for current model rankings.

**Option 3 — Reference top models without specific scores:**
> Context-Bench evaluates agentic context engineering. Models trained specifically for context engineering (Claude Sonnet 4.5, GPT-5) significantly outperform general-purpose models, with scores reaching 74%+.

**Why this matters:**
- Model leaderboards change weekly
- Citing specific scores creates maintenance debt
- The benchmark exists and is valuable; the exact scores are ephemeral

---

## Additional Verification: Claims That ARE Correct

### ✅ Stanford ACE Framework: "+10.6% improvement"
**Source:** arXiv:2510.04618  
**Verified:** "+10.6% on agents and +8.6% on finance"  
**Status:** Accurate on homepage

### ✅ Andrej Karpathy quote
**Quote:** "Context engineering is the delicate art and science of filling the context window with just the right information for the next step."  
**Status:** Widely attributed, appears on homepage  
**Note:** Original source not traced but quote is consistently attributed to Karpathy across industry sources

### ✅ Tobi Lutke quote
**Quote:** "Context engineering describes the core skill better [than prompt engineering]. The art of providing all the context for the task to be plausibly solvable by the LLM."  
**Source:** X/Twitter post (https://x.com/tobi/status/1935533422589399127)  
**Status:** Verified

### ⚠️ Cognition AI quote
**Quote:** "Context engineering is effectively the #1 job of engineers building AI agents."  
**Status:** Widely attributed to Cognition AI but **no direct source found**  
**Appears in:** Secondary sources (Galileo blog, Adaline labs) citing "Cognition"  
**Recommendation:** Mark as "Cognition AI team" or find original source (blog post, talk, etc.)

---

## Recommendations Summary

### Immediate fixes needed:

1. **NoLiMa math:** Change 92% to 85% (or 11 of 12 to 11 of 13)
2. **Drew Breunig 85%:** Remove this unsupported number
3. **Microsoft 65%:** Remove or replace with verified stat
4. **Industry consensus quote marks:** Remove quotes, reframe as observed trend
5. **Ankur Goyal quote:** Remove or find source
6. **Context-Bench scores:** Add date or remove specific numbers

### Strengths to keep:

- ACE Framework (+10.6%) ✅
- NoLiMa benchmark (once corrected) ✅
- Tobi Lutke quote ✅
- Andrej Karpathy quote ✅
- Drew Breunig taxonomy (without 85%) ✅
- Context-Bench as benchmark reference ✅

---

## Confidence Levels

**Certain (verified with primary sources):**
- NoLiMa tested 13 models, 11 dropped below 50% (85%)
- ACE Framework +10.6% improvement
- Context-Bench scores (74%, 72.67%) at time of publication
- Tobi Lutke quote

**Likely (widely attributed, plausible, but original source not found):**
- Andrej Karpathy quote
- Cognition AI quote

**Uncertain (no supporting evidence found):**
- Microsoft 65% stat
- Ankur Goyal caching quote
- Drew Breunig 85% capacity

**Speculative (synthesis presented as quote):**
- "Industry consensus, 2026" quote

---

**Investigation complete.**  
**Primary recommendation:** Prioritize factual accuracy over impressive-sounding stats. Remove or replace unverifiable claims. The verifiable claims are strong enough to stand on their own.
