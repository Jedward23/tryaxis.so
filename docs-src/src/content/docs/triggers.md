---
title: Event-triggered work
summary: Turn a supported external event into a visible, governed Axis session rather than an opaque background action.
description: Turn a supported external event into a visible, governed Axis session rather than an opaque background action.
---

**Reference lane · Job: route an event into governed work**

An event trigger is useful only when the installed Axis build exposes a supported,
authenticated activation path. The result should be a real Routine run/session you can
open, inspect, steer, and review.

<!-- PROOF-ID: EVENT-ROUTINE-01 -->

![Real Axis Routines: scheduled work, event-triggered work, and manual actions remain visible and inspectable.](/docs/proof/routines.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Do not promise a generic webhook by concept alone

A conceptual ability to reach the Axis node is not a public integration contract. Before
configuring an event, verify the current product exposes:

- the supported event source or endpoint,
- authentication and authorization,
- payload limits and schema,
- project/Routine destination,
- deduplication behavior,
- failure and retry visibility.

If those controls are absent, treat event triggering as unavailable or advanced—not a
finished customer feature.

## Shape the event into useful context

A good activation includes the safe minimum needed to investigate: what happened, when,
which project or resource it belongs to, a stable event identifier, and links or fields
the agent can verify.

Do not place credentials, raw customer secrets, or unnecessary payloads in the session.
The session should begin from a redacted summary and fetch authoritative detail through
an approved integration where possible.

## Deduplicate before doing work

External systems retry. A stable event identity should prevent two deliveries from
creating duplicate runs or duplicate side effects. Retrying transport is not permission
to perform the job twice.

## Preserve the same authority boundary

An event can start investigation. It does not automatically authorize a response,
deployment, deletion, message, purchase, or permission change. Those actions follow the
same project rules and human gates as interactive work.

## Prefer the simpler activation

Use a scheduled Routine for predictable cadence, a quick action for human-launched work,
and an event only when reacting to the external state materially improves the outcome.
Noise-heavy triggers produce sessions nobody reads.

## Complete reference only with live support

The final published version of this page should name the supported sources, exact setup
path, auth model, and current limitations from the installed release. Until proof exists,
keep those mechanics explicitly qualified.

## Related reference

- [Routines](/docs/recurring-tasks/)
- [Integrations](/docs/integrations/)
- [Inbox and approvals](/docs/inbox/)
