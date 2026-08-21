---
title: Install Axis
description: How the Axis installer works, what it downloads, and what stays on your machine.
sidebar:
  order: 1
---

Axis runs on your own machine. Your projects, sessions, transcripts, and credentials
stay local — Axis does not upload your code or conversations to run them.

## What you download

The installer is a small bootstrapper rather than the whole product. It does three
things in order:

1. **Signs you in.** You enter your email and confirm a six-digit code.
2. **Activates your install.** Activation ties the runtime download to your account.
3. **Fetches the runtime.** Axis downloads the components that match your operating
   system and processor, verifies them, and installs them locally.

This keeps the download you click small, and means the runtime you receive is built
for your exact platform instead of bundling every platform at once.

:::note
The browser components that let agents control a real browser are fetched separately
and are not on the critical path for first launch. Axis starts without them and picks
them up in the background.
:::

## Availability

Download links for each platform appear on [tryaxis.so](https://tryaxis.so) when that
platform is ready. If a platform shows as unavailable, there is nothing to configure
on your side — it simply is not open yet.

## Signing in

The first screen after launch asks for an email address.

- **New account.** Enter your email, accept the terms, and confirm the code.
- **Existing account.** Choose *Welcome back* and confirm the code for the email you
  already use.

Codes arrive by email and expire quickly. If one lapses, request another from the same
screen rather than reusing the old message.

:::caution
Signing in is required before the runtime downloads. An installed set of runtime files
is not the same thing as an authenticated session, so a machine that has the files but
no valid sign-in will return you to the sign-in screen rather than opening.
:::

## After activation

Once activation completes, Axis opens into an empty workspace. Nothing is configured
yet — you have no projects and no model access.

Two things are worth doing immediately:

1. **Connect a model provider.** See [Model providers](/docs/model-providers/). You can
   bring subscriptions and credentials you already have.
2. **Add your first project.** See [Quick start](/docs/quick-start/).

## Where Axis keeps things

| What | Where |
| --- | --- |
| Session and project records | A local database in your home directory |
| Session transcripts | Local files on disk, one per session |
| Provider credentials | Your operating system keychain |
| Project files | Wherever your code already lives — Axis does not move it |

Axis reads the directories you point it at. It does not relocate your repositories or
copy them somewhere else.

## Updating

Axis updates itself in place. When a new version is available it downloads and verifies
the replacement components, then applies them. Your projects, sessions, and history are
untouched by an update.

## Next

- [Quick start](/docs/quick-start/) — finish one real task end to end.
- [Concepts](/docs/concepts/) — the model behind projects, sessions, and panes.
- [Remote access](/docs/remote-access/) — reach this machine from your phone or another computer.
