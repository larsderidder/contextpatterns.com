# Context Patterns: Academic & Industry References

This document provides verified academic and industry sources for each context engineering pattern on contextpatterns.com. Citations are organized by pattern with specific claims, supporting research, and corrections where needed.

---

## Pattern 1: Context Rot

### Claims & Supporting Research

**Claim: "11 of 12 models drop below 50% at 32k tokens"**
- **Source:** Modarressi, A., Deilamsalehy, H., Dernoncourt, F., Bui, T., Rossi, R. A., Yoon, S., & Schütze, H. (2025). *NoLiMa: Long-Context Evaluation Beyond Literal Matching*. Proceedings of the Forty-second International Conference on Machine Learning (ICML 2025). arXiv:2502.05167
- **URL:** https://arxiv.org/abs/2502.05167
- **What it shows:** Tests 13 LLMs claiming 128K+ token support on needle-in-haystack tasks without literal matching. At 32K tokens, 11 models dropped below 50% of their short-context baseline performance. GPT-4o dropped from 99.3% to 69.7%.
- **Status:** ✅ VERIFIED - Claim is accurate

**Claim: "GPT-5 fails on reasoning tasks long before hitting its 272k limit" (cited as Hong et al. 2025, arxiv:2503.14070)**
- **Status:** ❌ INCORRECT CITATION
- **Issue:** arxiv:2503.14070 is "Fast Autoregressive Video Generation with Diagonal Decoding" by Ye et al. (2025), which has nothing to do with GPT-5 or context windows.
- **Correction Needed:** This claim appears unsupported. While GPT-5 does exist with a 272k input context window, no peer-reviewed research was found documenting specific performance degradation patterns. The claim should either be:
  1. Removed entirely
  2. Replaced with a citation to internal testing/evaluation if available
  3. Rephrased as a general observation without specific model attribution

**Claim: "Lost in the middle" phenomenon - position effects in long contexts**
- **Source:** Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2023). *Lost in the Middle: How Language Models Use Long Contexts*. Transactions of the Association for Computational Linguistics (TACL). arXiv:2307.03172
- **URL:** https://arxiv.org/abs/2307.03172
- **What it shows:** Performance degrades significantly when relevant information appears in the middle of long contexts. Models perform best when information is at the beginning or end. This holds even for models explicitly designed for long contexts.
- **Status:** ✅ Should be added as a citation

**Claim: "Attention dilution" - attention spreads across all tokens**
- **Recommended Source:** Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). *Attention is all you need*. Advances in Neural Information Processing Systems, 30. arXiv:1706.03762
- **URL:** https://arxiv.org/abs/1706.03762
- **What it shows:** Original transformer paper describing scaled dot-product attention mechanism where attention distributes across sequence length.
- **Status:** ✅ Should be added for foundational understanding

### Additional Supporting Research

- **Long-Context Generalization with Sparse Attention**
  - Source: arXiv:2506.16640 (2025)
  - Shows attention dispersion, representational collapse, and over-squashing as obstacles to long-sequence modeling

---

## Pattern 2: The Pyramid

### Claims & Supporting Research

**Claim: Hierarchical context structure (domain → architecture → specifics → task)**
- **Source:** Anthropic. (2025). *Effective Context Engineering for AI Agents*. Anthropic Engineering Blog.
- **URL:** https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- **What it shows:** Discusses strategies for curating and managing context for AI agents, including hierarchical structuring from general to specific.
- **Status:** ✅ VERIFIED - Industry best practice documentation

**Additional Supporting Research:**

- **Instruction Hierarchy**
  - Wallace, E., Xiao, K., Leike, R., Weng, L., Heidecke, J., & Beutel, A. (2024). *The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions*. arXiv:2404.13208
  - URL: https://arxiv.org/abs/2404.13208
  - What it shows: Demonstrates that LLMs can learn to prioritize instructions at different hierarchical levels, with compositional requests decomposed into smaller pieces at different levels
  - Status: ✅ Supports hierarchical instruction structuring

**Claim: "Inverted pyramid" structure from journalism**
- **Note:** The pattern references journalism's inverted pyramid (key info first, details later). This is a well-established journalism practice but doesn't require academic citation as it's used metaphorically.
- **Status:** ✅ Acceptable as common knowledge reference

---

## Pattern 3: Select, Don't Dump

### Claims & Supporting Research

**Claim: Context quality degrades with unnecessary information**
- **Source:** Modarressi et al. (2025). *NoLiMa* (see Pattern 1 above)
- **Status:** ✅ VERIFIED - Shows degradation with longer contexts

**Claim: Chunking strategy impacts retrieval performance**
- **Source:** Smith, B. & Troynikov, A. (2024). *Evaluating Chunking Strategies for Retrieval*. Chroma Research.
- **URL:** https://research.trychroma.com/evaluating-chunking
- **What it shows:** Choice of chunking strategy can impact retrieval performance by up to 9% in recall. Demonstrates importance of careful selection vs. dumping full documents.
- **Status:** ✅ VERIFIED - Industry research supporting selective inclusion

**Additional Supporting Research:**

- **Prompt Compression for Long Context**
  - Jha, S., Erdogan, L. E., Kim, S., Keutzer, K., & Gholami, A. (2024). *Characterizing Prompt Compression Methods for Long Context Inference*. ICML 2024. arXiv:2407.08892
  - URL: https://arxiv.org/abs/2407.08892
  - What it shows: Analyzes various methods for compressing prompts to fit within context windows while preserving task performance
  - Status: ✅ Supports selective inclusion principle

---

## Pattern 4: Isolate

### Claims & Supporting Research

**Claim: "Anthropic's multi-agent system uses 15x more tokens total but gets better results"**
- **Source:** Hadfield, J., Zhang, B., Lien, K., Scholz, F., Fox, J., & Ford, D. (2025). *How we built our multi-agent research system*. Anthropic Engineering Blog.
- **URL:** https://www.anthropic.com/engineering/multi-agent-research-system
- **What it shows:** "In our data, agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats." Multi-agent system with Claude Opus 4 and Sonnet 4 subagents outperformed single-agent Claude Opus 4 by 90.2% on internal research eval.
- **Status:** ✅ VERIFIED - Exact claim confirmed

**Additional Context from Source:**
- Token usage alone explains 80% of performance variance in BrowseComp evaluation
- Multi-agent architectures effectively scale token usage for tasks exceeding single agent limits
- Each subagent operates with its own context window, preventing context pollution

---

## Pattern 5: Compress & Restart

### Claims & Supporting Research

**Claim: "Context quality degrades past 85% window capacity"**
- **Status:** ⚠️ UNSUPPORTED - No specific source found for the 85% threshold
- **Correction Needed:** This specific percentage claim lacks citation. Should either:
  1. Be removed or rephrased as "degradation occurs well before reaching advertised limits"
  2. Cited to internal testing if available
  3. Linked to NoLiMa findings showing degradation at 32k (which could be ~25-30% of advertised windows)

**Claim: Context compression improves long-running agent performance**
- **Source:** LangChain. (2025). *Context Engineering for Agents*. LangChain Blog.
- **URL:** https://blog.langchain.com/context-engineering-for-agents/
- **What it shows:** Discusses strategies for managing agent context, including compression and restart approaches
- **Status:** ✅ VERIFIED - Industry best practice

**Additional Supporting Research:**

- **ACON: Agent Context Optimization**
  - Kang, M. et al. (2025). *ACON: Optimizing Context Compression for Long-Horizon LLM Agents*. arXiv:2510.00615
  - URL: https://arxiv.org/abs/2510.00615
  - What it shows: As agents interact with environments, contexts continuously grow, leading to high memory usage. ACON optimally compresses histories and observations into concise summaries.
  - Status: ✅ Strong support for compression strategy

- **LoCoBench-Agent**
  - arXiv:2511.13998 (2025)
  - What it shows: Uses LLM-generated summaries of compressed conversation segments, preserving variable/function names, error messages, design decisions, and task progress
  - Status: ✅ Demonstrates practical compression implementation

---

## Pattern 6: Write Outside the Window

### Claims & Supporting Research

**Claim: External memory enables persistence across sessions**
- **Source:** LangChain. (2025). *Context Engineering for Agents* (see Pattern 5)
- **Status:** ✅ Industry practice documentation

**Claim: Memory systems allow agents to maintain long-term state**
- **Source:** Packer, C., Wooders, S., Lin, K., Fang, V., Patil, S. G., Stoica, I., & Gonzalez, J. E. (2023). *MemGPT: Towards LLMs as Operating Systems*. arXiv:2310.08560
- **URL:** https://arxiv.org/abs/2310.08560
- **What it shows:** Presents OS-inspired design for managing LLM context like virtual memory, paging between main context and external storage. Evaluated on document analysis (processing docs far exceeding context window) and multi-session chat (agents that remember and evolve across conversations).
- **Status:** ✅ VERIFIED - Strong academic foundation

**Additional Context:**
- MemGPT (now called Letta) treats context window as working memory and external storage as long-term memory
- Enables analysis of documents far exceeding context window limits
- Creates conversational agents that remember and evolve through long-term interactions

---

## Pattern 7: Progressive Disclosure

### Claims & Supporting Research

**Claim: Load context on demand rather than pre-loading everything**
- **Source:** Anthropic. (2024). *Contextual Retrieval*. Anthropic Engineering Blog.
- **URL:** https://www.anthropic.com/news/contextual-retrieval
- **What it shows:** Introduces contextual retrieval approach where chunks are enriched with context before embedding, enabling better on-demand retrieval rather than pre-loading all information
- **Status:** ✅ VERIFIED - Industry implementation

**Claim: RAG enables dynamic information retrieval**
- **Source:** Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... & Kiela, D. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. arXiv:2005.11401
- **URL:** https://arxiv.org/abs/2005.11401
- **What it shows:** Foundational paper introducing RAG - combining pre-trained parametric and non-parametric (retrieved) memory for language generation. Enables models to access external knowledge on-demand rather than storing everything in parameters.
- **Status:** ✅ VERIFIED - Foundational research for progressive disclosure

**Additional Context:**
- Progressive disclosure mirrors expert behavior: explore landscape, then drill into specifics
- Enables comprehensive coverage without bloated context windows
- Particularly effective when combined with structured indices (file trees, schemas, summaries)

---

## Pattern 8: Recursive Delegation

### Claims & Supporting Research

**Claim: Recursive agent spawning enables processing beyond single context windows**
- **Source:** Zhang, A. L., Kraska, T., & Khattab, O. (2025). *Recursive Language Models*. arXiv:2512.24601
- **URL:** https://arxiv.org/abs/2512.24601
- **What it shows:** Proposes Recursive Language Models (RLMs) where LLMs treat long prompts as external environment and recursively call themselves over snippets. RLMs successfully process inputs up to two orders of magnitude beyond model context windows. RLM-Qwen3-8B outperforms base Qwen3-8B by 28.3% on average and approaches GPT-5 quality on long-context tasks.
- **Status:** ✅ VERIFIED - Strong academic support

**Additional Context from Source:**
- Allows programmatic examination, decomposition, and recursive processing of prompts
- Even for shorter prompts, dramatically outperforms vanilla frontier LLMs
- Demonstrates that context can become a tree structure rather than monolithic window

---

## Cross-Cutting Research

### Token Efficiency vs. Performance

- **BrowseComp Evaluation Findings** (from Anthropic multi-agent research):
  - Token usage alone explains 80% of performance variance
  - Number of tool calls and model choice explain remaining 15%
  - Latest Claude models act as efficiency multipliers on token use
  - Multi-agent architectures effectively distribute work to scale token usage

### Context Window Utilization

- **On Context Utilization in Summarization** (arXiv:2310.10570, 2024):
  - Investigates how LLMs use context windows in abstractive summarization
  - Shows challenges in mapping facts to sources due to re-phrasing and compression
  - Demonstrates importance of understanding context utilization patterns

---

## Summary of Corrections Needed

1. **context-rot.md**: 
   - ❌ Remove or replace Hong et al. (2025) citation - arxiv:2503.14070 is about video generation, not GPT-5 context
   - ✅ Add Liu et al. (2023) "Lost in the Middle" citation for position effects
   - ✅ Consider adding Vaswani et al. (2017) "Attention is All You Need" for attention mechanism fundamentals

2. **compress.md**:
   - ⚠️ Remove or rephrase "85% window capacity" claim - no source found
   - ✅ Add ACON (arXiv:2510.00615) as additional strong reference

3. **All patterns**: Generally well-sourced. Most claims are backed by either peer-reviewed research or credible industry engineering documentation from Anthropic and LangChain.

---

## Reference Quality Assessment

**Strong Academic Support:**
- Context Rot (NoLiMa, Lost in the Middle)
- Write Outside (MemGPT)
- Progressive Disclosure (RAG foundational paper)
- Recursive Delegation (Zhang et al. RLM paper)

**Strong Industry/Engineering Support:**
- Pyramid (Anthropic context engineering)
- Isolate (Anthropic multi-agent research with specific metrics)
- Compress (LangChain + ACON paper)
- Select (Chroma research + NoLiMa)

**Needs Attention:**
- Context Rot: GPT-5 claim citation is incorrect
- Compress: 85% threshold unsupported

---

*Document compiled: 2026-02-14*  
*Research conducted by: Scout (OpenClaw subagent)*  
*Verification status: All URLs and arXiv IDs verified as of compilation date*
