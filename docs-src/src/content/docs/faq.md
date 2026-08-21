---
title: FAQ
description: Common questions about how Axis works.
---

## Does my code leave my machine?

No. Axis runs locally. Your projects, sessions, and transcripts stay on your machine.

Model providers receive what you send them in a conversation, as they would in any
agent tool. Axis itself does not upload your repositories.

## Do I need an Axis subscription for models?

No. Bring the provider subscriptions and API keys you already have. See
[Model providers](/docs/model-providers/).

## What happens if I close my laptop?

Sessions keep running on the machine hosting Axis. Closing a tab, closing the lid, or
losing connectivity does not stop work — you reconnect to it.

## Can I use my phone?

Yes, as a real client rather than a status view. See [Mobile](/docs/mobile/) and
[Remote access](/docs/remote-access/).

## How is memory different from work plans?

[Memory](/docs/memory/) holds knowledge — decisions, preferences, lessons.
[Work plans](/docs/work-plans/) hold intent — what is unfinished.

"We never mock the database" is memory. "Rate limiting is not started" is a work plan.

## Will an agent do something destructive?

Not without asking. Deletes, force pushes, pushes, messages, purchases, and changes to
shared systems all require your approval.

Approving once authorises that action in that scope, not permanently.

## Can I interrupt mid-task?

Yes. Send a follow-up and it joins the [steering queue](/docs/sessions/#the-steering-queue).
Press `Enter` on an empty composer to push it through immediately.

## Why did it start a sub-agent?

Because the work split into independent slices. See [Sub-agents](/docs/sub-agents/).

You can see every child in the agent graph, and open any of them.

## Can I run several agents on one project?

Yes, but they must not edit the same files simultaneously. Axis coordinates ownership
between children of the same parent; unrelated sessions editing the same files will
conflict as you would expect.

## Does Axis make noise?

No. There are no notification sounds or completion chimes. Browser push notifications
are available if you want them.

## What is the difference between rendered and raw?

**Rendered** is the human view — messages, folded work, evidence. **Raw** is the
terminal exactly as the agent sees it. Same session, two views.

## Why is a session still "working" with nothing visible?

It is likely mid-command or mid-tool-call. Open the working fold, or check Raw.

If it genuinely stalled, Axis notices and can wake it. See
[Troubleshooting](/docs/troubleshooting/#a-session-appears-stuck).

## Can Axis run scheduled work?

Yes — [recurring tasks](/docs/recurring-tasks/) on a cadence,
[scheduled prompts](/docs/scheduled-prompts/) for one-offs,
[quick actions](/docs/quick-actions/) for on-demand, and
[triggers](/docs/triggers/) for external events.

Scheduled work still stops for approval before external side effects.

## How do I stop repeating myself?

Save it to [memory](/docs/memory/) with the reason. Future sessions start knowing.

For a whole process, write a [skill](/docs/skills-and-tools/).

## Can I script Axis?

Yes. Every CLI command supports `--json`. See [CLI reference](/docs/cli-reference/).

## Next

- [Troubleshooting](/docs/troubleshooting/)
- [How to work with Axis](/docs/how-to-work/)
