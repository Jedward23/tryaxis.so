---
title: Agent tools
description: What agents can do inside Axis, and what each capability is for.
---

Agents working in Axis have tools for the product's own surfaces. This is a guide to
what exists and when each is appropriate — useful for understanding what an agent is
doing, and for writing your own [skills](/docs/skills-and-tools/).

## Memory

Agents read memory before rediscovering something, and save when they learn something
durable.

| Capability | Use |
| --- | --- |
| Recall | Look up decisions, preferences, lessons, references |
| Save | Record a learning, correction, or reference |

Memory is written through the save capability only — never by editing files by hand.
See [Memory](/docs/memory/).

## Work plans

| Capability | Use |
| --- | --- |
| List and add | Read and extend the shared project plan |
| Continue or create | Join an existing plan, or open a new one |
| Defer | Record work for later, with an optional date and note |
| Backlog | Find work that is due, blocked, or has gone quiet |

Removal is soft. Clearing detaches a local view rather than destroying another
session's items. See [Work plans](/docs/work-plans/).

## Sessions

| Capability | Use |
| --- | --- |
| Title | Name the session once, early |
| Set status | Move between in progress, review, done |
| Resume | Continue a specific existing session by id |
| New session | Start a fresh independent session |

Resuming targets an exact session. Agents do not route work by "most recent session in
this directory".

## Orchestration

| Capability | Use |
| --- | --- |
| Spawn sub-agents | Split a goal into parallel child sessions |
| Get children | Check status of spawned children |
| Continuation loop | Wake the parent when children finish |

See [Sub-agents](/docs/sub-agents/).

## Human gates

| Capability | Use |
| --- | --- |
| Ask | Put a real question to you, with options |
| Request approval | Flag that work is blocked pending your decision |

An agent that needs you stays open and asks. These appear in your
[inbox](/docs/inbox/).

## Workspace

| Capability | Use |
| --- | --- |
| Inspect workspace | See existing panes before creating new ones |
| Open panes | Materialise a browser, preview, or artifact pane |
| Render artifact | Turn a file into something you can open |
| Launch service shell | Start a long-running process visibly |

Agents check for an existing pane before opening another, so you do not accumulate
duplicates. See [Projects and workspaces](/docs/projects/#workspaces).

## Browser

| Capability | Use |
| --- | --- |
| Navigate, click, fill, type | Drive a page |
| Screenshot | Capture visual proof |
| Read page | Extract content |
| Fill from password manager | Log in without exposing credentials |

Browser control is local. See [Browser control](/docs/browser/).

## Scheduling

| Capability | Use |
| --- | --- |
| Schedule task | Create a recurring task |
| Schedule check-in | Deliver a prompt to a session later |
| Create quick action | Add an on-demand button |

See [Recurring tasks](/docs/recurring-tasks/).

## Result presentation

Every tool is expected to render its result readably — summary first, detail available,
raw payload behind a disclosure rather than in your face.

A tool that returns unformatted JSON as its primary output is incomplete.

## Next

- [Skills and tools](/docs/skills-and-tools/)
- [CLI reference](/docs/cli-reference/)
