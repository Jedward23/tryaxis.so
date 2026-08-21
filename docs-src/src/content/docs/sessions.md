---
title: Sessions
description: The unit of work in Axis — transcripts, the working fold, steering, and recovery.
---

A session is one continuous conversation with one agent, bound to one project. It is
the unit you start, resume, review, and finish.

## Starting one

New sessions begin empty and stay that way until you send something. A blank session is
*ready*, not *connecting* — nothing is running and nothing is queued.

Your first message defines the session's scope. Axis titles it from what you actually
asked for.

## The transcript

The transcript alternates between what you asked and what the agent did.

- **Your messages** appear as sent, with any images you attached shown above them.
- **The agent's work** collapses into a single fold per turn.
- **The final answer** sits outside that fold, as plain readable text.

Opening a session loads the whole conversation, not just the recent tail, so you can
scroll to the beginning without paging.

## The working fold

While the agent is working you see one summary: **Working for 2m**.

Open it and you get the complete timeline for that turn — reasoning, commands, file
reads, edits, browser steps — in the order they happened, each with the time it took.

Every action inside is a disclosure. Click one to see its evidence:

| Action | Evidence when opened |
| --- | --- |
| Edited a file | The changed lines, red and green |
| Ran a command | The command and its output |
| Read files | A preview, plus a link to open the file |
| Browsed | The steps taken, without exposing typed values |
| Viewed images | The images themselves |

Consecutive actions of the same kind group together — *Ran commands*, *Read files* —
so a long turn stays scannable.

When the turn ends, the fold collapses to **Worked for 6m**. The detail stays.

:::tip
Actions start closed on purpose, including the one running right now. Axis shows you
that work is happening without flooding the transcript with output you did not ask for.
:::

## The steering queue

Send something while the agent is mid-turn and it joins the steering queue rather than
interrupting.

The queue shows one row per pending message. You can reorder by dragging, and edit or
delete from the overflow menu. Editing returns your text and any attachments to the
composer and cancels the queued row, so a refresh cannot deliver the version you
withdrew.

To push something through immediately, press `Enter` on an empty composer. That steers
the oldest queued item straight into the agent's current work.

## Plans

When an agent is following a multi-step plan, a compact **Step 3 / 7** indicator appears
above the composer. Hover or click it for the full list.

Unfinished plans persist across turns, so you can always see where a long task actually
is.

## Interrupting

The composer's right-hand control is **Stop** while the agent is working and there is
nothing to send. Type anything and it becomes **Send** — your message queues, and the
control returns to Stop once the composer is empty again.

## Rendered and raw

**Rendered** is the human view described above. **Raw** shows the terminal exactly as
the agent sees it.

Raw is the ground truth when you need to know precisely what happened at the terminal
level. Rendered is where you work.

Your choice of view is remembered per pane and survives refreshes.

## Recovery

Sessions survive things that would normally lose work:

- **Connection drops.** Axis shows a reconnection indicator and keeps your message.
  Nothing is lost.
- **Closing the tab.** The session keeps running server-side.
- **Restarting Axis.** Sessions, panes, and drafts come back.
- **A stuck session.** If a session stalls without finishing, Axis notices and can wake
  it. If it cannot recover it safely, it escalates to you rather than retrying forever.

An unsent draft is preserved too, including attachments, and follows you between devices.

## Status

Set a session's status from its row or header. Marking it **done** closes out any stale
running state.

An agent that needs your input stays open and asks — it will not mark itself done while
waiting on you.

## Next

- [Inbox and approvals](/docs/inbox/) — where sessions surface when they need you.
- [Sub-agents](/docs/sub-agents/) — splitting a session into parallel work.
- [Artifacts and collections](/docs/artifacts/) — keeping what a session produced.
