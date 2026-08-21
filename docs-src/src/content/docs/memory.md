---
title: Memory
description: How Axis remembers decisions, preferences, and lessons so you stop repeating yourself.
---

Memory is why the tenth session in a project is better than the first. It holds the
decisions and preferences that would otherwise live only in your head — or in a
conversation you have already closed.

## What belongs in memory

| Kind | Example |
| --- | --- |
| Preference | "Terse responses. No trailing summaries." |
| Lesson | "Tests must hit a real database — a mocked test hid a broken migration." |
| Project context | "The auth rewrite is driven by compliance, not tech debt." |
| Reference | "Pipeline bugs are tracked in the INGEST project." |

The common thread: things that are true beyond this conversation and are not
recoverable by reading the code.

## What does not

Memory is not a second copy of your repository. Skip anything the code or git history
already answers:

- Architecture, file layout, naming conventions
- Who changed what, and when
- The fix for a bug — the fix is in the code
- Current task state

If `git log` or opening a file answers it, it does not belong in memory.

## How it gets written

Agents save memory as they learn. When you correct something, confirm a non-obvious
approach, or explain a constraint, that is the moment worth capturing.

Good memory records the reason, not just the rule:

> Integration tests must hit a real database, not mocks.
> **Why:** a mocked test passed while the production migration was broken.
> **When it applies:** any test touching persistence.

The reason is what lets a future agent handle an edge case instead of following a rule
off a cliff.

You can also just say *remember this* and it will be saved.

## How it gets used

New sessions start with the relevant memories already loaded — the project's durable
ones, plus any that match what you are asking about.

That is why you do not re-explain your preferences every time.

## Memory ages

A memory is true as of when it was written. Things get renamed, removed, or superseded.

Axis treats memory as historical guidance rather than current fact. Before acting on
something recalled — especially a file path, flag, or external system — it verifies
the thing still exists. If reality disagrees with memory, reality wins and the memory
gets corrected.

## Memory versus work plans

Easy to conflate, genuinely different:

- **Memory** holds knowledge. *"We decided X, because Y."*
- **[Work plans](/docs/work-plans/)** hold intent. *"X is unfinished."*

Memory answers "what do we know?". Work plans answer "what is still open?".

## Forgetting

Ask to forget something and it is removed. Memory that turns out to be wrong should be
corrected rather than left to mislead later sessions.

## Next

- [Work plans](/docs/work-plans/)
- [How to work with Axis](/docs/how-to-work/#correct-once-permanently)
