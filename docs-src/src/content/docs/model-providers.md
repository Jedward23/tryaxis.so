---
title: Model providers
description: Bring the model subscriptions and credentials you already have.
---

Axis works across model providers. You connect the accounts you already pay for rather
than buying capacity again through Axis.

## Connecting a provider

Provider setup offers two paths:

- **Sign in with your account.** Opens the provider's own login. Use this when you have
  a subscription.
- **Use an API key.** Paste a key directly. Use this for pay-as-you-go access.

Credentials go into your operating system keychain, not into project files or the Axis
database.

## Switching models

Change the model from the composer's model control. The session continues — switching
does not restart the conversation or lose context.

Alongside the model you can set an effort level, which applies to the next message
rather than retroactively.

## Choosing a model

There is no single correct choice, but some rough guidance:

| Work | Lean toward |
| --- | --- |
| Long refactors, architecture, ambiguity | A stronger reasoning model |
| Mechanical edits, formatting, renames | A faster, cheaper model |
| Review and critique | A different model than wrote the code |
| Anything visual | A model that handles images |

Using a different model to review than to implement is genuinely useful — it catches
things a model tends not to notice in its own output.

## Per-slice selection

When spawning [sub-agents](/docs/sub-agents/), each slice can specify its own agent and
model. A research slice, an implementation slice, and a review slice can each use
something appropriate.

## Local models

Local runtimes are supported alongside hosted providers. Useful when work must not
leave the machine at all.

## Availability

If a provider is down, rate-limited, or your credentials have expired, Axis surfaces
that as an actionable failure rather than a stalled session.

Sending is gated on having working credentials, so you get told immediately rather than
watching a turn hang.

## Costs

```bash
axis stats                          # cost and token statistics
axis usage --plan max20 --hours 24  # usage with burn rate
axis session context <ref>          # usage for one session
```

## Next

- [Configuration](/docs/configuration/)
- [Sub-agents](/docs/sub-agents/#choosing-the-agent)
- [Troubleshooting](/docs/troubleshooting/)
