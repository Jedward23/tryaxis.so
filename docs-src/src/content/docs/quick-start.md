---
title: Quick start
description: Create a project, run your first session, and finish one real task in Axis.
sidebar:
  order: 2
---

This walks through one complete loop: add a project, start a session, give it work,
review what it did, and keep the result. Fifteen minutes, one real change.

## 1. Add a project

A project is a directory Axis watches — usually a repository.

Point Axis at a directory you already have. Axis reads it in place; it does not copy
or move your files.

Pick something real but low-stakes for this first run. A side project or a repo where
an unreviewed commit costs you nothing is ideal.

## 2. Start a session

Open the project and start a new session. You get a composer and an empty transcript.

A session is one continuous conversation with one agent, bound to one project. It keeps
its own history, its own panes, and its own place in your sidebar.

## 3. Give it something concrete

Vague prompts produce vague work. Compare:

```text
clean up the auth code
```

against:

```text
In src/auth/, the session token refresh runs on every request instead of
only when the token is near expiry. Fix that and add a test proving a
fresh token does not trigger a refresh.
```

The second names the location, the actual defect, and what proof you expect. That is
the difference between an agent guessing and an agent working.

## 4. Watch the work fold

While the agent runs you get a **Working** summary. Open it to see reasoning, commands,
file reads, and edits in the order they happened. Each action expands to its evidence —
a diff for an edit, output for a command, contents for a read.

You do not have to watch. The fold collapses to **Worked for 4m** when the turn ends
and the detail stays available.

:::tip
Anything you can see, you can interrupt. Send a follow-up mid-turn and it joins the
steering queue; the agent picks it up rather than losing it.
:::

## 5. Review before you keep it

When the agent reports back, check the work rather than the summary.

- Open the changed files from the transcript.
- Read the diff, not the description of the diff.
- Run the test it claims passes.

Axis keeps source control next to the session, so you can see exactly what changed
before anything leaves your machine.

## 6. Keep what is worth keeping

Two things are worth capturing now:

- **A correction.** If you told the agent "don't do X" and meant it generally, save it
  to [memory](/docs/memory/) so the next session starts knowing.
- **Leftover work.** If you spotted something you are not doing today, put it in the
  [work plan](/docs/work-plans/) rather than a mental note.

## What you just used

| Step | Concept |
| --- | --- |
| Adding a directory | [Projects](/docs/projects/) |
| The conversation | [Sessions](/docs/sessions/) |
| The Working fold | [Sessions](/docs/sessions/#the-working-fold) |
| Follow-up mid-turn | [Sessions](/docs/sessions/#the-steering-queue) |
| Saving a correction | [Memory](/docs/memory/) |
| Capturing leftovers | [Work plans](/docs/work-plans/) |

## Next

- [Concepts](/docs/concepts/) — the model underneath all of this.
- [How to work with Axis](/docs/how-to-work/) — habits that make agents useful rather than noisy.
- [Sub-agents](/docs/sub-agents/) — when one session is not enough.
