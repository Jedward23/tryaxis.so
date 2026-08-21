---
title: Quick actions
description: One-click buttons for the prompts you run over and over.
---

A quick action is a button that launches a prepared prompt. No schedule — you press it
when you want it.

## When to use one

You have a prompt you retype constantly with minor variations:

- *Review my uncommitted changes and tell me what is risky.*
- *Check the dev server logs and summarise errors.*
- *Update the changelog from commits since the last tag.*
- *Find work in this project that has gone quiet.*

If you are retyping it weekly, it should be a button.

## Creating one

A quick action needs a short title and the full prompt to launch. It can be scoped to
one project or available everywhere.

Prompts can reference the project they run in, so one action works across projects
without rewriting it.

## Where they appear

Quick actions live in the actions panel. Pressing one starts a new session with that
prompt already delivered.

## Writing the prompt

Write it as a complete instruction, because it arrives with no conversation before it.

A weak action:

```text
check the code
```

A strong action:

```text
Review the uncommitted changes in this project. For each one, say whether
it is safe to commit, and flag anything that looks unfinished or
accidentally included.
```

## Quick action or recurring task?

| | Quick action | Recurring task |
| --- | --- | --- |
| Runs | When you press it | On a schedule |
| History | Just the session | Tracked run history |
| Best for | Frequent, unpredictable timing | Predictable cadence |

A recurring task set to manual is close to a quick action. Choose a quick action when
you want a button, and a manual recurring task when you want run history.

## Next

- [Recurring tasks](/docs/recurring-tasks/)
- [Triggers](/docs/triggers/)
- [Skills and tools](/docs/skills-and-tools/)
