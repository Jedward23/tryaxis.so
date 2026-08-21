---
title: Inbox and approvals
description: One place for everything waiting on your judgment.
---

Agents work while you are away. The inbox is how you find the moments that actually
need you, without hunting through sessions.

## What lands here

| Kind | Meaning |
| --- | --- |
| Question | The agent needs an answer to continue |
| Approval | Something with real consequences needs your yes |
| Human action | A login, credential, or 2FA step only you can do |
| Finished work | A session completed and is ready to review |

Anything genuinely blocked appears here. Routine progress does not — the inbox is for
decisions, not activity.

## Working through it

Rows are dense and scannable, like an email client: read state, selection, bulk
controls. Opening a row takes you to the session behind it in the full interaction
surface, not a summary of it.

On mobile, tapping a row opens a drawer with the actions inside.

## Approvals

An approval gate asks one plain question and states three things:

- **Why I'm asking**
- **What's at stake**
- **What stays untouched**

Nothing is deleted by an approval decision. If a choice is impossible, Axis says so in
a sentence rather than showing you a dead control.

Approvals are turn-scoped. Once a session moves past the gate, stale approvals are
cleared rather than lingering.

### What requires approval

Agents ask before doing things that are hard to undo or visible to others:

- Deleting files or branches, dropping tables, force-pushing
- Pushing code, opening or commenting on pull requests
- Sending messages or email
- Spending money
- Changing shared infrastructure or permissions

Approving once authorizes that action, in that scope. It is not blanket permission.

## Questions

When an agent needs a decision it cannot make for you, it asks directly — with options
where the choice is bounded, and free text where it is not.

A session waiting on a question stays open. It does not mark itself done and it does not
guess.

## Notifications

Axis can send browser push notifications when something needs you, so you do not have to
keep the tab open.

Axis deliberately plays no sounds. There are no completion chimes.

## Filtering

The inbox filters by kind, project, and state. A saved filter becomes a view you can
return to — for example, *approvals in this project only*.

## Next

- [Sessions](/docs/sessions/)
- [Recurring tasks](/docs/recurring-tasks/) — scheduled work also reports here.
- [Sub-agents](/docs/sub-agents/) — orchestration collapses to one attention count.
