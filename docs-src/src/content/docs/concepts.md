---
title: Concepts
description: Projects, sessions, workspaces, panes, and the durable record underneath them.
sidebar:
  order: 3
---

Axis has a small number of ideas. Once they click, the rest of the product is
predictable.

## Projects

A **project** is a directory Axis watches, usually a repository. It owns:

- the sessions started inside it
- its panes, browsers, and running services
- its memory, work plans, and settings

Projects are how Axis keeps unrelated work apart. A session started in one project does
not inherit context from another.

## Sessions

A **session** is one continuous conversation with one agent, bound to one project.

A session holds its transcript, its panes, its place in your sidebar, and its status.
It survives closing the tab, closing the laptop, and restarting Axis. Reopening a
session resumes the same conversation rather than starting a new one.

Sessions are cheap. Start one per task rather than running one enormous thread — a
focused session produces better work than a session carrying twenty unrelated topics.

## The workspace

Each session can open a **workspace** on the right: a tabbed area holding the panes
that session owns.

| Pane | What it is |
| --- | --- |
| Browser | A real browser the agent drives, or that you take over |
| Preview | A running local app |
| Artifact | A file the session produced — report, image, document, mockup |
| Terminal | A live shell attached to this session |
| Service shell | A long-running process such as a dev server |
| Agent graph | The orchestration tree when a session has children |

Panes belong to the session that opened them. Closing one hides it without destroying
it; it can be reopened.

## Rendered and raw

Every session has two views of the same thing.

- **Rendered** is the human view: messages, folded work, evidence, artifacts.
- **Raw** is the terminal itself, exactly as the agent sees it.

Rendered is where you work. Raw is there when you need to see precisely what happened
at the terminal level.

## The durable record

Axis separates what is *live* from what is *true*.

Live things — terminals, websockets, browser panes — come and go. They drop on a flaky
network and reconnect. The durable record is a local database that holds your sessions,
projects, statuses, and history.

This is why a dropped connection does not lose your work, and why a session that was
running when you closed your laptop is still there when you open it.

## Status

A session carries a status that reflects its real state:

| Status | Meaning |
| --- | --- |
| Working | The agent is resolving a turn right now |
| Waiting on you | Blocked on an answer, approval, or credential |
| Done | Finished and reviewed |
| Idle | Open, nothing in flight |

"Waiting on you" and "done" are mutually exclusive. An agent that needs something from
you stays open and asks rather than closing itself out.

## Orchestration

A session can spawn **sub-agents** — child sessions that do a slice of a larger goal
in parallel, under a parent that keeps the whole thing coherent.

Children appear indented under their parent. The **agent graph** pane shows the whole
tree, and you can move between parent and child without losing your place.

See [Sub-agents](/docs/sub-agents/).

## Memory versus work plans

Two different kinds of persistence, easy to confuse:

- **[Memory](/docs/memory/)** holds *knowledge*: decisions, preferences, lessons,
  references. "We never mock the database in tests, because a mocked test hid a broken
  migration."
- **[Work plans](/docs/work-plans/)** hold *intent*: what is being worked toward, what
  is unfinished, what is deferred. "Rate limiting on the public API — not started."

Memory answers "what do we know?". Work plans answer "what is still open?".

## Next

- [How to work with Axis](/docs/how-to-work/)
- [Sessions](/docs/sessions/)
- [Projects and workspaces](/docs/projects/)
