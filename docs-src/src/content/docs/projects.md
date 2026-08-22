---
title: Projects and workspaces
description: Give related work a durable home and keep each session's tools and evidence attached to it.
---

**Learn lane · Mission: establish the work boundary**

A project is the durable home for related work. A workspace is the session-owned view
of the conversation and the resources needed to complete that work.

<!-- PROOF-ID: PROJECT-WORKSPACE-01 -->

![A real Axis project Overview: working agreement, sessions, Routines, and project-owned context in one place.](/docs/proof/harness-overview.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## What a project carries

A project usually points at an existing directory and works with it in place. It scopes:

- sessions and workstream folders,
- the AGENTS.md working agreement,
- relevant memory and shared work plans,
- skills, services, Routines, and Collections,
- project settings, costs, and history.

The point is not only isolation. It is that a new session enters a stable operating
environment instead of an empty chat.

## Workstream folders preserve the objective

A folder can group sessions around a durable line of work. Useful folder context includes
purpose, current objective, decisions, blockers, linked resources, and next action.

That makes a folder workstream memory, not a decorative sidebar accordion.

## A workspace belongs to its session

Opening the workbench reveals tabs owned by the displayed session:

| Surface | Burden it removes |
| --- | --- |
| Browser | Keeps the live web state and visual proof with the work |
| Preview | Keeps the running app route beside the discussion |
| Collection item | Keeps a durable report, image, document, or tool accessible |
| Terminal | Exposes an exact live shell when human inspection is needed |
| Service shell | Keeps long-running processes named and visible |
| Agent Graph | Keeps the parent and child orchestration navigable |

Different resources open as sibling tabs. Closing a support tab changes visibility; it
does not necessarily delete the underlying saved resource or durable attachment.
Closing the last visible tab collapses the workbench.

## Ownership prevents workspace drift

Switching sessions swaps the supporting surfaces with the conversation. A background
session may attach a surface quietly, but should not steal focus from the workspace you
are using.

A browser or preview may be pinned as a reusable project resource. Reattaching a live
browser should reuse its identity rather than create a duplicate page with separate
history.

## Services are project resources

Long-running servers and workers belong in named service shells. A project should have
one canonical managed service per runtime port. Routes such as `/settings` are browser
destinations, not separate servers.

See [Service shells](/docs/service-shells/).

## Project attention is not backlog volume

Project badges should point to human-visible attention—such as unresolved approvals or
new actionable state—not count every open task. Open the Inbox or Plans view for the
full workload.

## Builder reference

Current CLI support can register, inspect, archive, unarchive, and rename projects. Use
`axis projects --help` from the installed version before scripting exact flags. Archiving
is a visibility/lifecycle action; it must not be described as deleting the directory.

## Mission complete when

A new session begins in the right project, follows its working agreement, and keeps its
browser, service, saved result, and evidence attached after you navigate away and back.

## Next

- [The project working agreement](/docs/working-agreement/)
- [Sessions and steering](/docs/sessions/)
- [Collections](/docs/artifacts/)
