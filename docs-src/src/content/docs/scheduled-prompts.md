---
title: Scheduled check-ins
summary: Deliver one future instruction to the exact continuing session instead of creating a disconnected reminder.
description: Deliver one future instruction to the exact continuing session instead of creating a disconnected reminder.
---

**Reference lane · Job: resume one thread later**

A scheduled check-in targets a specific existing session. It is an advanced continuity
primitive, not a general customer automation model and not a replacement for Routines.

<!-- PROOF-ID: SCHEDULED-CHECKIN-01 -->

![Two future messages scheduled directly above the Axis composer, each with its delivery time and a Send now action.](/docs/proof/scheduled-messages.webp)

*Scheduled messages remain attached to the exact session and can be sent immediately when plans change.*

## When to use it

Use a check-in when the next instruction belongs to the exact context already in one
session:

- inspect a long-running operation later,
- wake a coordinator after children are expected to finish,
- retry a bounded status check after backoff,
- return to a known external wait without starting a new thread.

Use a [Routine](/docs/recurring-tasks/) for repeatable project work with run history. Use
a reminder when the action belongs to you rather than an agent session.

## Write for future delivery

The instruction arrives as a new request later. Include the state to verify and the
action to take next:

```text
Check whether the import reached a terminal state. If it succeeded, validate the
persisted record and report the evidence. If it is still running, back off and check
again without launching another import.
```

Avoid vague prompts such as `check in`. Future execution should be able to distinguish
success, continued waiting, failure, and a human blocker.

## Exact destination matters

The target is the durable identity of one session. Delivery should not fall back to the
newest session in the same project or directory. If the exact target cannot be resolved,
the check-in should report failure rather than deliver into a different conversation.

## Keep retries bounded

A check-in can schedule another bounded check when a real process is still running.
Continuation should use backoff and stop when work completes, is cancelled, transfers
to another owner, or genuinely needs a person. It must not become an invisible infinite
poller.

## Availability

The installed Axis interface and agent capabilities are authoritative for whether a
user-facing schedule control is available. If no schedule UI is exposed in your build,
treat check-ins as an agent/reference capability rather than promising a customer setup
path that does not exist.

## Related reference

- [Routines](/docs/recurring-tasks/)
- [Sessions and steering](/docs/sessions/)
- [Agent tools](/docs/agent-tools/)
