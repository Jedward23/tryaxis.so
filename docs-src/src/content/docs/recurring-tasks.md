---
title: Routines
summary: Turn repeatable work into visible, reviewable sessions with history and the same human checkpoints as interactive work.
description: Turn repeatable work into visible, reviewable sessions with history and the same human checkpoints as interactive work.
---

**Learn lane · Mission: repeat the work without hiding it**

A Routine is a reusable workflow whose runs create or resume real Axis sessions. Each
run should have a prompt-delivery record, status, evidence, and scoped approval gates—not
be a timer that fires text into the dark.

<!-- PROOF-ID: ROUTINE-RUN-01 -->

![Real Axis Routines: scheduled work, event-triggered work, and manual actions remain visible and inspectable.](/docs/proof/routines.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Choose the activation

| Need | Use |
| --- | --- |
| Repeat on a known cadence | Scheduled Routine |
| Run the same workflow whenever you choose | Manual Routine |
| Launch a lightweight prepared request | Quick action |
| Respond to a supported external event | Event-triggered Routine |
| Wake one exact continuing session later | Scheduled check-in |

These are activation choices around visible work, not separate automation philosophies.

## Define the job, not only the prompt

A useful Routine states:

- the outcome of each run,
- the project and source context it should inspect,
- what changed since the last successful run when relevant,
- the evidence expected,
- which side effects must pause for approval.

Example:

```text
Review client health changes since the last successful run. Prepare a concise report
with source links and proposed actions. Do not send messages; ask before any external
update.
```

## Each run is a real execution

A scheduled run must claim the due work once, respect project capacity, start or bind a
session, prove prompt delivery, and record status/evidence. If the project is busy, the
run can wait instead of spawning unlimited work.

The session is the audit trail. Open it to see what the run actually inspected and
produced.

## Read history before editing the recipe

The primary Routine view should answer: what ran, what happened, what needs attention,
and which session proves it. Prompt, schedule, icon, enable/disable, and deletion belong
in the manage surface so reviewing history cannot accidentally rewrite the workflow.

## Keep human authority in the loop

A Routine may research, reconcile, and prepare a draft unattended. It should stop before
sending, deleting, purchasing, publishing, deploying, or performing another external
side effect unless that exact action was already authorized by the workflow's current
policy and product surface.

Approval waits appear in the Inbox and remain linked to the run session.

## Good candidates

- A daily digest from live sources.
- A weekly review of stale work across projects.
- A recurring health or dependency check.
- A report with stable inputs and a stable evidence standard.

If you rewrite the request every run, use an ordinary session or quick action. If the
central judgment must happen halfway through every time, automate preparation rather
than pretending the whole workflow is unattended.

## Mission complete when

You can run the workflow twice, open both run sessions, compare their evidence, and see
a consequential action pause at the same clear human boundary.

## Next

- [Scheduled check-ins](/docs/scheduled-prompts/)
- [Quick actions](/docs/quick-actions/)
- [Event-triggered work](/docs/triggers/)
