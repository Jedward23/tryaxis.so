---
title: Integrations
summary: Connect Axis to existing models, source control, browsers, credentials, and services without hiding ownership or authority.
description: Connect Axis to existing models, source control, browsers, credentials, and services without hiding ownership or authority.
---

**Reference lane · Job: extend the harness safely**

An integration is useful when it gives a session authoritative context or narrow
capability while preserving provenance, credential boundaries, readable evidence, and
human approval for consequential actions.

<!-- PROOF-ID: INTEGRATIONS-01 -->

![A real browser-inspected result created by an Axis session inside the privacy-safe demo project.](/docs/proof/browser-result.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Support status comes before setup

The published integration catalog should distinguish:

- built in and available,
- available after provider/account connection,
- user-created through a skill/tool,
- advanced or experimental,
- planned or not currently supported.

Do not turn a conceptual ability to call an API or webhook into a claim that a finished
customer integration exists.

## Model providers

Connect model access through the current Axis provider surface. Provider credentials and
limits remain provider-specific; an unrelated CLI login may not authorize Axis.

See [Model providers](/docs/model-providers/).

## Version control and project source

Axis can inspect project and version-control state in the context of the session doing
the work. Repository writes, pushes, pull requests, comments, releases, and deployments
must follow the project's working agreement and approval policy.

A local commit or successful command does not prove a remote change. Verify the remote
destination when an external side effect is authorized.

## Password managers and authentication

Supported credential helpers can fill browser login fields without placing secrets in
the transcript. Review, MFA, and ambiguous account selection should stop for the user.

A password-manager connection is a capability boundary, not permission to submit every
form or reuse credentials in unrelated projects.

## Browser and web systems

Use the local browser for rendered pages, authenticated workflows, and visual proof. Use
narrow read/scrape tools when a browser is unnecessary. Browser traces should omit typed
values, scripts, query secrets, and tokens.

## Your own services

Use a [skill](/docs/skills-and-tools/) to encode the process and a narrow tool to grant
capability. A public integration guide should document authentication, scope, supported
operations, rate/error behavior, and which actions require approval.

## Inbound events

Event-triggered work is publishable only when the current release exposes a supported,
authenticated, deduplicated activation contract. See [Event-triggered work](/docs/triggers/).

## Scripts and CLI

The Axis CLI can expose JSON output for supported commands. Inspect `axis --help` from
the installed version and treat returned identifiers and write acknowledgements
carefully. Verify any intended side effect through authoritative state.

## Complete an integration when

You can identify the account and scope, perform a safe read, show a human-readable
result, request approval for a write, execute only the approved action, and prove the
actual destination state.

## Related reference

- [Skills and tools](/docs/skills-and-tools/)
- [Agent capability reference](/docs/agent-tools/)
- [Browser control](/docs/browser/)
