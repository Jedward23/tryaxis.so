---
title: Triggers
description: Start focused Axis work from external events, as a visible session.
---

A trigger starts an Axis session in response to something that happens outside Axis.

## The principle

The result of a trigger is a real session you can open, read, and steer — not an opaque
automation running somewhere you cannot see.

That is the whole point. Automation you cannot inspect is automation you cannot trust.

## What can start work

Anything that can reach your Axis node:

- A webhook from a service you use
- A CI or deployment event
- A monitoring alert
- A scheduled job on another machine

## Shaping the work

A trigger carries context into the session it starts. An alert that fires should arrive
with what fired, when, and the relevant identifiers — so the agent starts from evidence
rather than a bare notification.

Point each trigger at the project the work belongs to.

## Safety

Triggered sessions follow the same rules as everything else:

- Approval gates still apply
- External side effects still need your yes
- Project capacity still limits how much runs at once

A trigger cannot grant an agent permission it would not otherwise have.

## Keeping it useful

The failure mode is noise. A trigger that fires constantly produces sessions nobody
reads, and real signals get buried.

Trigger on things that genuinely warrant an agent looking. For anything you check on a
predictable rhythm, a [recurring task](/docs/recurring-tasks/) is usually better.

## Next

- [Recurring tasks](/docs/recurring-tasks/)
- [Remote access](/docs/remote-access/) — reaching your node from outside.
- [Integrations](/docs/integrations/)
