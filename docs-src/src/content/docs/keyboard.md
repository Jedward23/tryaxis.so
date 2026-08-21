---
title: Keyboard
description: Shortcuts and composer keys for moving through Axis without the mouse.
sidebar:
  order: 4
---

## Global

| Keys | Action |
| --- | --- |
| `Cmd/Ctrl` + `K` | Open global search across projects and sessions |
| `Cmd/Ctrl` + `F` | Focus the sidebar session search |
| `Alt/Option` + `N` | Start a new session |

:::note
`Cmd/Ctrl` + `N` is reserved by most browsers for a new window, so Axis uses
`Alt/Option` + `N` as the reliable new-session shortcut.
:::

## Composer

The composer is where most keyboard time goes.

| Keys | Action |
| --- | --- |
| `Enter` | Send |
| `Shift` + `Enter` | New line |
| `Enter` on an empty composer | Steer the oldest queued message through immediately |
| `Up` | Step back through messages you have sent |
| `Down` | Step forward again |
| `Esc` | Leave history and restore your unsent draft |

History only opens from the first line, and steps forward only from the last line, so
arrow keys still move the cursor normally inside a multi-line draft.

## Composer palettes

Two characters open pickers, both of which appear inline as you type.

| Type | Opens |
| --- | --- |
| `/` | Axis commands |
| `@` | Projects, sessions, files in this project, and artifacts |

Inside either palette:

| Keys | Action |
| --- | --- |
| `Up` / `Down` | Move through results |
| `Enter` or `Tab` | Insert the selection |
| `Esc` | Dismiss |

An `@` selection inserts durable identity — a real path, session, or artifact reference
— rather than plain text, so the agent resolves exactly what you meant.

## Commands

| Command | Effect |
| --- | --- |
| `/btw` | Open a child session in this session's workspace |
| `/btw <text>` | Same, starting the child with `<text>` as its first prompt |

`/btw` is handled by Axis, not passed to the agent. Use it when a tangent deserves its
own thread but belongs to the current work.

## Transcript

| Action | Effect |
| --- | --- |
| Scroll up | Pause auto-follow and hold your position |
| Jump to latest | Resume following new output |
| Click a prompt in the turn rail | Jump straight to that prompt |

Scrolling up is treated as a deliberate choice. Axis stops pulling you to the bottom
until you return there or press the jump control — a new message arriving will not
yank you away from what you are reading.
