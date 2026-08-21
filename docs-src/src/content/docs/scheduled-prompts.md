---
title: Scheduled prompts
description: Send a prompt later, into the right session, without turning it into a reminder.
---

Sometimes the next action should happen later. A scheduled prompt preserves both the
text and its destination, so it arrives in the right workflow instead of becoming a
note you have to translate back into work.

## The difference from a reminder

A reminder tells *you* to do something. A scheduled prompt delivers work to the session
that should receive it.

When it fires, the prompt lands in its target session with that session's context
intact — the agent picks up where the work already is.

## Scheduling

Write the prompt, choose when. Delivery targets a specific session, so the destination
is explicit rather than inferred.

Write it as a fresh instruction, since it arrives as though you had just typed it.
Include what future-you needs to act on it:

```text
Check whether the migration finished cleanly. If it did, re-enable the
nightly export and confirm the first run succeeds.
```

## Check-ins

A common pattern is scheduling a check-in on your own work — start something long,
schedule a look-in later.

Agents coordinating sub-agents use the same mechanism to wake and collect results.

## Requirements

A scheduled prompt needs its target session to still exist when it fires. Axis resolves
the destination from the durable record, so a session that has been quiet is still a
valid target.

If the target genuinely cannot be resolved, the prompt reports rather than silently
going nowhere.

## Choosing the right tool

| You want | Use |
| --- | --- |
| Work on a repeating schedule | [Recurring tasks](/docs/recurring-tasks/) |
| One prompt, later, into a specific session | Scheduled prompts |
| A button you press on demand | [Quick actions](/docs/quick-actions/) |
| Work started by an external event | [Triggers](/docs/triggers/) |

## Next

- [Recurring tasks](/docs/recurring-tasks/)
- [Sessions](/docs/sessions/)
