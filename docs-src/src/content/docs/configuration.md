---
title: Configuration
description: Settings, appearance, capacity, and where Axis keeps your data.
---

## Viewing configuration

```bash
axis config      # current configuration
axis version     # version and update status
axis health      # is the server running?
```

## Where things live

| What | Where |
| --- | --- |
| Sessions, projects, statuses, history | A local database in your home directory |
| Session transcripts | Local files, one per session |
| Provider credentials | Your operating system keychain |
| Project files | Wherever your code already lives |

Nothing here is uploaded to run Axis. Your code and conversations stay on your machine.

## Appearance

Themes and backgrounds can be set per project so you can tell them apart at a glance.
These persist across refreshes, restarts, and devices.

## Project instructions

A project can carry durable instructions that every session in it loads — conventions,
constraints, and rules specific to that codebase.

This is the right home for *how we work here*. Use [memory](/docs/memory/) for
learnings and history; use project instructions for standing rules.

## Capacity

Axis limits how much runs at once per project, so a burst of agent work cannot starve
your machine.

Background and automated sessions run at lower priority than the session you are
actively using. Foreground work stays responsive.

If a launch exceeds capacity it reports as waiting rather than spawning anyway.

## Session lifetime

Terminals that have had no client attached for a long period are cleaned up. Output
alone does not count as activity — a process printing to a terminal nobody is watching
is still abandoned.

Sessions with queued work, or that you have open, are not affected.

## Services

Axis runs two processes: the server, and a separate service that owns terminals.

```bash
axis service              # are they running?
axis service start        # start or restart
axis service stop
axis service logs --lines 100
```

They are separate so that restarting Axis does not kill your terminals.

## Remote access

Axis is reachable from your other devices over your private network. See
[Remote access](/docs/remote-access/).

```bash
axis peers   # devices on your network
```

## Pointing at another node

Commands target a specific Axis server with `--url`, or the `AXIS_URL` environment
variable:

```bash
AXIS_URL=http://other-machine:3000 axis pulse
```

## Next

- [Model providers](/docs/model-providers/)
- [Config reference](/docs/config-reference/)
- [Remote access](/docs/remote-access/)
