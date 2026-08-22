---
title: Model providers
summary: Connect approved model access and switch models without abandoning the session's durable identity.
description: Connect approved model access and switch models without abandoning the session's durable identity.
---

**Builder lane · Job: provide usable model access**

Axis orchestrates model access you connect. The exact provider catalog, authentication
method, model list, and effort levels come from the installed Axis/Pi runtime and current
provider capability state.

<!-- PROOF-ID: PROVIDER-STATES-01 -->

![A real Axis project Overview: working agreement, sessions, Routines, and project-owned context in one place.](/docs/proof/harness-overview.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Connect through the offered method

Depending on the provider, the current setup surface may offer account authorization,
API-key entry, a supported local/CLI bridge, or more than one path. Follow the provider-
specific instructions shown by Axis.

A separate provider CLI being logged in does not always mean Axis can use that login.
Treat Axis's verified connection state as authoritative.

Credentials belong in the supported secure credential store. Never put keys or tokens
in project files, AGENTS.md, Routines, screenshots, or transcript messages.

## Verify before relying on it

A saved credential is not proof that a model call works. Provider status should
separate configured, verified, expired, rate-limited, unavailable, and unsupported
states where the runtime can determine them.

The first-run wizard requires at least one verified core agent provider before setup can
complete.

## Switch without creating a new thread

The composer combines model selection and effort in one control. The model change uses
the exact canonical model reference exposed by the runtime; friendly labels are
presentation only. Effort is applied separately to the next work context.

Switching should preserve the exact session identity and conversation. Use a new session
only when the objective changes, not merely because the provider changes.

## Choose for the job

- Use stronger reasoning for ambiguity, architecture, and high-consequence review.
- Use faster options for bounded mechanical work.
- Use image-capable models for visual input.
- Consider an independent model for critique rather than asking the author to self-grade.

Availability, privacy, latency, context limits, and cost depend on the provider and
account. Axis should not present one universal model recommendation as permanent truth.

## Route sub-agent slices deliberately

Each child slice can use an appropriate available agent/model. The provider is metadata
on a normal child session in the same Agent Graph. The parent still owns context,
coordination, integration, and evidence.

## Handle failure explicitly

Expired credentials, rate limits, usage limits, and provider outages should surface as
actionable transcript states. Recovery must resume the exact session; it must not route
the continuation into the newest similar conversation.

## Related reference

- [Sub-agents](/docs/sub-agents/)
- [Configuration](/docs/configuration/)
- [Troubleshooting](/docs/troubleshooting/#provider-or-usage-failure)
