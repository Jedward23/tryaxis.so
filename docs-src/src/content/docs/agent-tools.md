---
title: Agent capability reference
summary: Understand the user-visible jobs Axis capabilities perform without treating internal tool names as the product model.
description: Understand the user-visible jobs Axis capabilities perform without treating internal tool names as the product model.
---

**Reference lane · Job: understand what an agent can ask Axis to do**

Axis exposes harness capabilities to agents. Exact tool names and schemas can evolve;
the stable customer model is the job each capability performs and the evidence it must
return.

<!-- PROOF-ID: AGENT-CAPABILITIES-01 -->

![The same session retains validation and exact change evidence instead of asking you to trust a completion claim.](/docs/proof/mission-evidence.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Context and learning

Agents can recall relevant memory before rediscovering decisions and save a deliberate
lesson when it occurs. They should use AGENTS.md for standing rules, project/source
state for current truth, and Memory for learned knowledge.

A memory result should include provenance and confidence where useful; recalled mutable
facts still need live verification.

## Planning and unfinished work

Agents can discover or continue a shared work plan, add verifiable items, mark the active
leaf, record evidence, defer future work, and find due or forgotten items.

They should not create a duplicate plan merely because a new session began. Clearing one
local view must not silently destroy other sessions' shared items.

## Session continuity

Capabilities can title the current session, set its status, resume an exact existing
session, start a fresh independent session, or create focused child sessions.

These operations are different. Resume preserves exact durable identity. A new session
creates a separate thread. Sub-agents create children under a coordinating parent.

## Human judgment

Agents can present structured questions and request approval for consequential actions.
A gate should appear in the owning session and Inbox, state the exact blocker and scope,
and stop the action until the answer arrives.

A notification that input is needed is not itself the decision surface.

## Workspace and services

Agents can inspect the current workspace, reuse or open session-owned panes, register a
durable saved result, and launch a named long-running service.

Inspection comes first so the agent does not duplicate an authenticated browser, live
preview, or canonical service. Background work should attach quietly rather than steal
focus.

## Browser and visual proof

Local browser capabilities can navigate and interact with a real page, read state, and
capture screenshots. Sensitive typed values and credentials must not appear in the
human trace. Browser-visible work is complete only after the real state is opened,
captured, inspected, and compared with the claim.

## Routines and continuation

Agents can create/manage Routines or quick actions where supported and schedule bounded
check-ins for exact sessions. Long-running continuation must stop on completion,
cancellation, handoff, or a genuine human blocker; it is not an invisible infinite
loop.

## Results are part of the contract

Every capability needs a readable success, empty, loading, and error presentation.
Summary comes first; exact evidence is disclosed progressively; raw output is a final
fallback. Secrets and high-risk identifiers must be redacted.

A tool transport acknowledgement is not proof that the intended side effect occurred.
Verify writes through authoritative persisted or destination state.

## Related reference

- [Skills and tools](/docs/skills-and-tools/)
- [CLI reference](/docs/cli-reference/)
- [Inbox and approvals](/docs/inbox/)
