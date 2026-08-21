---
title: Recurring tasks
description: Turn a prompt you keep retyping into a real scheduled session with run history.
---

A recurring task runs work on a schedule. Each run starts a real session — with a
transcript, evidence, and approval gates — rather than firing a prompt into the dark.

## What it is not

A recurring task is not a reminder and not a timer that pokes an agent. Each run is a
tracked execution with its own history and result.

That distinction matters: you can go back and see what the Tuesday run actually did.

## Creating one

Describe the work and the cadence. A task can run:

- daily, at one or several times of day
- weekly, on a chosen day
- manually, with no schedule at all

A manual task is a button you press rather than a clock. Useful when the work is
repeatable but the timing is not.

## Anatomy of a run

Each run:

1. Claims the work, so two runs never double-fire
2. Respects project capacity, waiting rather than overloading the machine
3. Starts a real session
4. Delivers the prompt and records that delivery
5. Records status and evidence
6. Pauses for approval before anything with external consequences

## Run history

Opening a task shows its recent runs and the sessions behind them. That is the primary
view — what happened, and what it produced.

Editing the prompt, schedule, or icon lives behind the gear or context menu, so reading
history is never one misclick from rewriting the task.

## Approvals

Scheduled work follows the same rules as anything else. If a run wants to send an
email, push code, or spend money, it stops and asks.

An unattended run that needs you waits in the [inbox](/docs/inbox/) rather than acting
on its own judgment.

## Good candidates

- A morning digest of what changed overnight
- A weekly check across projects for stale work
- A recurring report that needs live data
- A periodic health or dependency check

## Poor candidates

- Anything needing your judgment mid-run every time
- Work whose inputs change so much the prompt is wrong by the second run

If you find yourself rewriting the prompt before every run, it wants to be a
[quick action](/docs/quick-actions/) instead.

## Capacity

Runs respect project capacity limits. A busy project queues rather than spawning
unlimited parallel agents, and a queued run reports as waiting rather than failing.

## Next

- [Scheduled prompts](/docs/scheduled-prompts/) — one-off, not recurring.
- [Quick actions](/docs/quick-actions/) — on-demand buttons.
- [Triggers](/docs/triggers/) — starting work from external events.
