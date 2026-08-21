---
title: How to work with Axis
description: Habits that make agents genuinely useful instead of merely busy.
---

Axis removes the friction of running agents. It does not remove the need to direct
them well. These are the habits that separate useful output from expensive noise.

## Give the agent a target, not a mood

The single biggest quality lever is how you open.

A weak prompt describes a feeling:

```text
the dashboard feels slow
```

A strong prompt describes a target and a proof:

```text
The dashboard takes ~4s to first paint on a cold load. Profile it, find the
top two costs, fix them, and show me before/after timings.
```

You do not need to know the answer. You need to name the symptom, the scope, and what
would convince you it is fixed.

## One session, one thread of work

Start a session per task. When the topic genuinely changes, start another.

Long sessions carrying many unrelated topics get worse over time — the agent is
carrying context that no longer helps. A focused session outperforms a sprawling one.

Use `/btw` when a tangent appears mid-task: it opens a child session in the same
workspace, so the tangent gets its own thread without derailing the main one.

## Interrupt early

If the agent is heading the wrong way, say so immediately. A follow-up mid-turn joins
the [steering queue](/docs/sessions/#the-steering-queue) and gets picked up.

Correcting at minute one costs a sentence. Correcting at minute twenty costs the whole
turn.

## Ask for evidence, not assurances

"Done" is not proof. Ask for the artifact that would convince you:

- For a bug fix: the failing case now passing.
- For UI work: a screenshot of the actual screen.
- For a refactor: the test suite green, and what you deliberately did not touch.

Axis is built to produce this — commands and their output, diffs, browser screenshots,
artifacts. Use it.

## Correct once, permanently

When you correct something that will recur, save it to [memory](/docs/memory/) with the
reason:

> Integration tests must hit a real database, not mocks. A mocked test once passed
> while the production migration was broken.

The reason matters as much as the rule. A future agent facing an edge case can reason
from "why" but can only obey "what".

## Capture what you are not doing

Every real task surfaces work you are not doing today. Left in prose, it evaporates.

Put it in the [work plan](/docs/work-plans/), with a note for whoever picks it up. It
stays findable across sessions and projects instead of living in your head.

## Let it run

Agents work while you are gone. That is the point.

Start something substantial, close the laptop, and check the [inbox](/docs/inbox/)
later. Axis holds the session, the panes, and anything waiting on your judgment.

What you should *not* do is babysit a long task keystroke by keystroke. If you find
yourself watching every action, the task was probably underspecified — stop, clarify,
and restart it properly.

## Escalate to parallel work deliberately

[Sub-agents](/docs/sub-agents/) are powerful and easy to overuse. Reach for them when a
goal genuinely splits into independent slices — not because a task is merely large.

Three agents editing the same files is slower than one, not faster.

## Next

- [Sessions](/docs/sessions/) — the mechanics underneath all of this.
- [Memory](/docs/memory/) — making corrections stick.
- [Work plans](/docs/work-plans/) — keeping unfinished work findable.
