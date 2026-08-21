---
title: Integrations
description: Connecting Axis to the services and tools you already use.
---

Axis connects to your existing setup rather than replacing it.

## Model providers

Bring the subscriptions and API keys you already have. Hosted providers and local
runtimes both work. See [Model providers](/docs/model-providers/).

## Version control

Axis keeps source control next to the sessions doing the work — changed files, branch
state, and what concurrent work is touching.

Anything that leaves your machine, such as a push or a pull request, requires your
approval first.

## Password managers

Logins during browser automation can be filled from your password manager without the
credentials entering the transcript.

Where review or two-factor confirmation is appropriate, the agent stops and asks rather
than submitting automatically. See [Browser control](/docs/browser/#logins).

## The web

Agents can drive a real local browser: research, complete workflows, verify UI, capture
screenshots. See [Browser control](/docs/browser/).

## Your own services

Add [tools](/docs/skills-and-tools/) for the systems you use. A tool can read data,
fetch state, or perform an action, and its results render readably in the transcript.

## Inbound events

External systems can start Axis work through [triggers](/docs/triggers/), producing a
visible session rather than an opaque background job.

## Your own network

Reach Axis from other devices over Tailscale. See [Remote access](/docs/remote-access/).

## Scripting Axis

The CLI supports `--json` on every command, so Axis can be driven from scripts and
other tools:

```bash
axis pulse --json
axis sessions --active --json
axis tasks info task_123 --json
```

## Next

- [Skills and tools](/docs/skills-and-tools/)
- [Triggers](/docs/triggers/)
- [CLI reference](/docs/cli-reference/)
