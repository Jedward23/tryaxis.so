---
title: Projects and workspaces
description: How projects scope your work, and how workspace panes attach to sessions.
---

## Projects

A project is a directory Axis watches — usually a repository. It scopes sessions,
panes, services, memory, work plans, and settings.

Add a project by pointing Axis at an existing directory. Axis reads it in place and
does not move or copy your files.

### Managing projects

From the CLI:

```bash
axis projects                       # list all projects
axis projects info ~/myapp          # detail: git state, agents, activity
axis projects create myapp          # create a new project directory
axis projects connect ~/existing    # register a directory you already have
axis projects archive ~/old         # hide without deleting
axis projects rename ~/myapp "New"  # change the display name
```

Archiving hides a project without touching its files or history. Unarchive to bring it
back.

### The project rail

The rail on the left switches projects. Badges show what needs you — unresolved
approvals and recent unacknowledged attention — not a backlog count. A project with
twenty open issues and nothing waiting on you shows no badge.

### Appearance

Each project can carry its own theme and background so you can tell them apart at a
glance. These persist across refreshes, restarts, and devices.

## Workspaces

Each session can open a workspace on the right: a tabbed area of panes that session
owns.

Open it from the session header. `+` adds another pane. Different resources open as
siblings rather than replacing each other.

### Pane types

| Pane | Use |
| --- | --- |
| Browser | A real browser the agent drives, or you take over |
| Preview | A running local app |
| Artifact | A file the session produced |
| Terminal | A live shell attached to this session |
| Service shell | A long-running process such as a dev server |
| Agent graph | The orchestration tree, when the session has children |

### Ownership

Panes belong to the session that opened them. Switching sessions swaps the visible set.

Closing a pane is a visibility choice, not a deletion — it stays attached and can be
reopened. Closing the last visible pane collapses the workspace.

Background sessions attach panes quietly. An agent working in another session will not
steal your screen.

### Layout

With the workspace open, the session fills the usable area: transcript on the left,
panes on the right, one draggable divider between them.

Only that divider adjusts. Moving between parent and child sessions, switching tabs, or
resizing the window preserves the layout.

### Pinning

Browser and preview panes can be pinned to a project so they stay mounted across every
session in it. Useful for a dev server you always want visible.

## Browsers as project resources

The browser picker offers already-open browsers, recent project browsers, and detected
runtime ports before it offers a blank URL field.

Reattaching a live browser reuses its existing pane rather than duplicating it.

## Services

A project has one managed service shell per runtime port. Page-specific destinations
like `/settings` are browser rows, not new services.

```bash
axis servers ~/myapp                    # detected dev servers and status
axis servers start myapp backend        # start one
axis servers stop myapp frontend        # stop one
```

See [Service shells](/docs/service-shells/).

## Folders

Sessions can be grouped into folders that act as workstream records — purpose, current
objective, linked sessions and files, decisions, blockers, next action.

A folder is durable project memory about a line of work, not just a UI grouping.

## Next

- [Sessions](/docs/sessions/)
- [Service shells](/docs/service-shells/)
- [Browser control](/docs/browser/)
