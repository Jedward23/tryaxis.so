---
title: Browser control
description: Agents drive a real browser for research, workflows, and visual proof.
---

Axis gives agents a real browser — not a text fetch. They can navigate, click, fill
forms, read pages, and take screenshots, and you can watch or take over.

## What it is for

- **Research** that needs a page to actually render
- **Web workflows** an agent completes on your behalf
- **Visual proof** that a UI change looks right
- **Scraping** structured data from pages

The browser runs locally on your machine, using your local profile.

## Watching

An agent starting a browser attaches a live view to that session automatically. You do
not have to open anything.

The view can sit as a floating picture-in-picture over the transcript, or docked in the
session workspace.

- **Picture-in-picture** is a passive thumbnail. Drag it, resize it, and it stays visible
  while you use other tabs. You cannot click into it.
- **Docked** is the full pane — you can interact with the page directly.

Dock and undock move the same browser. They never clone it, so the page, history, and
scroll position stay put.

## Taking over

Dock the browser and you have the page. Useful when an agent hits something it should
not do alone — a login, a payment step, a judgment call about which result is right.

The agent picks up from wherever you leave it.

## Visual proof

For any browser-visible change, a screenshot is the evidence. Agents open the real
route, exercise the state, capture it, and inspect what they captured.

Screenshots appear inline in the transcript as thumbnails. Click to open full size.

:::note
An uninspected screenshot is not proof. Agents are expected to describe what is
actually visible and keep working if the image still shows the problem.
:::

## Logins

Authenticated browsing reuses a configured profile, so sessions do not start logged out
of everything.

Credentials are filled from your password manager without appearing in the transcript.
Where review or two-factor confirmation is appropriate, the agent stops and asks rather
than auto-submitting.

Ask for a clean, disposable browser when you specifically want one with no existing
identity.

## Privacy in the trace

Browser activity appears as a readable trace — *navigated*, *clicked*, *read page*,
*filled field* — grouped into one row per run and labelled with the hostname.

The trace deliberately omits what you typed, evaluated scripts, URL query strings,
tokens, and credentials.

## Previews

A preview pane points at a local app you are running. Combined with a service shell,
this gives you the dev server and its output side by side.

See [Service shells](/docs/service-shells/).

## Next

- [Projects and workspaces](/docs/projects/#browsers-as-project-resources)
- [Artifacts and collections](/docs/artifacts/)
- [Service shells](/docs/service-shells/)
