---
title: FAQ
description: Straight answers about trust, providers, host availability, approvals, continuity, Routines, and support boundaries.
---

<!-- PROOF-ID: FAQ-TRUST-01 -->

![A real Axis project Overview: working agreement, sessions, Routines, and project-owned context in one place.](/docs/proof/harness-overview.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## What is Axis in one sentence?

Axis is an agentic harness that turns ordinary requests into contextualized, visible,
governed, and durable work across projects and sessions.

## Do I need to learn prompt engineering?

No. State the outcome or problem in ordinary language. Axis supplies available project
rules, context, memory, tools, planning, and evidence around the request. Important
ambiguity may still require your judgment, and no harness guarantees a perfect result
from every vague request.

## Does my code leave my machine?

Your project files and Axis's durable project/session record remain on the node unless
you or an authorized workflow move them. A hosted model provider receives the prompt
and selected context sent for a request. Connected tools, browsers, remote devices, and
external systems receive the data required for authorized operations under their own
boundaries.

Use providers and scopes appropriate to the work. Do not put secrets in prompts,
AGENTS.md, screenshots, or project files.

## Do I need a separate Axis model subscription?

Axis connects to supported provider access you configure. Authentication methods,
models, limits, and costs depend on the provider and installed Axis version. At least
one verified core provider is required during first-run setup.

## What happens if I close the laptop?

Closing a browser tab or disconnecting a client does not erase the durable session. Work
can continue only while the host machine remains powered, awake enough to run Axis,
connected as required, and the relevant processes remain alive. Sleeping or shutting
down the host pauses that execution until the node is available again.

## Can I use a phone or tablet?

Yes. A mobile client can connect to the same Axis node to read sessions, steer work,
answer approvals, review saved material, and take over a browser. Remote access depends
on your host, Tailscale configuration/policy, and node pairing.

## What is AGENTS.md?

It is the project's working agreement: stable rules for how agents should work there.
Memory stores learned knowledge; a work plan stores unfinished intent; source files and
connected systems remain authoritative for current state.

## How is Memory different from a work plan?

Memory answers **what have we learned?** A work plan answers **what are we still trying
to complete?** Do not store current task state as memory or durable lessons only inside
a checklist.

## Will an agent do something destructive or public without asking?

The working agreement and product gates should require approval for consequential actions
such as deletion, sending, publishing, deployment, purchase, force push, or permission
change. Approving authorizes only the exact action and scope described. Review the gate;
do not treat it as blanket permission.

## Can I interrupt or redirect active work?

Yes. A normal follow-up during active work enters the steering queue. Stop the turn when
the goal or risk boundary is wrong; use an empty-composer `Enter` only when you intend
to steer the oldest queued instruction immediately.

## Why use sub-agents?

Use them when one goal splits into independent slices. The parent supplies shared context,
prevents ownership collisions, integrates evidence, and converges the branches into one
result. Large but sequential work should stay sequential.

## What are Routines?

Routines are reusable workflows. Scheduled, manual, or supported event-triggered runs
should remain visible as real sessions with history, evidence, capacity controls, and
the same approval boundaries as interactive work.

## What are Collections?

Collections is the project-scoped home for durable saved material. Documents, images,
data, and interactive artifacts are item types inside Collections. Small results can
remain inline in the session.

## What is Rendered versus Raw?

Rendered is the human conversation surface with Working folds, plans, gates, and
evidence. Raw is the exact agent terminal surface for diagnosis. They are views of the
same session, not separate agents.

## Can I script Axis?

Current builds include an `axis` CLI with machine-readable output for supported commands.
Run `axis --help` on the installed version and verify destination state after any write.

## Where do I start when something fails?

Preserve the exact session and project identity, use read-only health/status checks,
and follow [Troubleshooting](/docs/troubleshooting/). Avoid deleting local state,
restarting the terminal service, or creating replacement sessions until you know which
layer failed.

## Next

- [Why Axis](/docs/why-axis/)
- [Your first real task](/docs/quick-start/)
- [Troubleshooting](/docs/troubleshooting/)
