---
title: Install Axis
description: Set up the local Axis node, connect one model provider, and reach a ready workspace.
sidebar:
  order: 2
---

**Learn lane · Mission: reach a ready workspace**

Your job is not to understand the release pipeline. It is to install Axis confidently,
know where trust boundaries sit, and finish with one working model connection.

<!-- PROOF-ID: INSTALL-ONBOARDING-01 -->

![The packaged Axis bootstrap reaches a clear ready state before opening the main workspace.](/docs/proof/install-ready.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## What the installer does

The installer is a small bootstrap rather than every runtime component in one file. It:

1. verifies your account by email,
2. activates this installation,
3. downloads and verifies the runtime for your platform,
4. opens the setup wizard,
5. requires at least one working core agent provider before setup completes.

Optional browser components can download separately. Axis can reach its first usable
workspace before every optional capability is ready.

## What stays where

| Data | Boundary |
| --- | --- |
| Project files | Stay in the directories you choose; Axis does not relocate them |
| Axis project/session records | Stored on the machine running your Axis node |
| Session transcripts | Stored locally with the node |
| Provider credentials | Stored through the supported credential/keychain flow, not in project files |
| Model requests | The selected provider receives the prompt and context sent for that request |
| Remote-device traffic | Travels through the remote-access configuration you control |

Axis running locally does **not** mean a hosted model sees nothing. A hosted provider
receives the context required to answer, under that provider's terms. Use an appropriate
provider and scope for sensitive work.

## Install and activate

1. Download the currently available build from [tryaxis.so](https://tryaxis.so).
2. Launch it and enter the email associated with your Axis account.
3. Enter the fresh verification code from that email.
4. Let the bootstrap verify and activate the runtime.
5. Continue into provider setup.

Codes expire. If one is stale, request a new code rather than retrying the old one.
Platform availability is shown on the download page; an unavailable build is not a
local configuration problem.

## Connect one core provider

The setup wizard must verify at least one provider that can run an agent session. The
exact choices depend on the installed Axis version and provider availability.

- Use the provider's sign-in flow when offered.
- Use an API key only through the supported credential field.
- Keep secrets out of project files, AGENTS.md, prompts, and screenshots.

See [Model providers](/docs/model-providers/) for ongoing management.

## Add a project, not a copy

Choose an existing directory or create a new project. Axis works with that location in
place. A project becomes the durable home for its sessions, rules, plans, memory,
Routines, Collections, and evidence.

## Updates and recovery

Updates replace Axis runtime components without intentionally moving your project
files or resetting the durable project/session record. If an update is interrupted,
reopen Axis and follow the recovery state shown by the installer rather than deleting
runtime or data directories manually.

For exact platform support, current download status, and version-specific behavior,
use the release presented by the installer and the live download page.

## Mission complete when

- Axis opens without an activation prompt.
- At least one core provider shows as usable.
- You can add or open a project.
- No secret was copied into the project itself.

## Next

- [Run your first real task](/docs/quick-start/)
- [Understand data and provider boundaries](/docs/faq/#does-my-code-leave-my-machine)
- [Connect another device](/docs/remote-access/)
