---
title: Service shells
description: Long-running processes — dev servers, workers, imports — that stay visible.
---

A service shell is a long-running process Axis owns and keeps visible: a dev server, a
worker, a build watcher, a long import.

## Why not just run it in a terminal

A process buried in an ad-hoc terminal is invisible. Nobody knows it is running, its
logs are wherever it started, and it survives as a mystery CPU consumer.

A service shell appears in the project, can be read and restarted, and pairs with a
browser or preview pane.

Anything long-running belongs here rather than in a one-off terminal.

## Dev servers

Axis detects runnable servers in a project:

```bash
axis servers ~/myapp                 # detected servers and status
axis servers status ~/myapp          # detailed status
axis servers scripts ~/myapp         # available scripts
axis servers start myapp backend     # start one
axis servers stop myapp frontend     # stop one
```

Override a command when detection guesses wrong:

```bash
axis servers config myapp npm:dev "npm run dev -- --port 4000"
```

## One service per port

A project has one canonical service per runtime port. Different pages of the same app
are browser rows, not separate services.

:::caution
A service's command should be how you *start* it. Never save a cleanup command such as
a cache wipe as the launch command — it will run every time the service starts.
:::

## Reading output

Read a service's recent output without attaching to it. Check here before starting a
second copy of something already running.

## Pairing with a browser

A service shell can open a browser or preview pane pointed at it, so you get the server
and the running app side by side.

Pin the pane to keep it mounted across sessions in that project.

## Priority

Background and automated services run at lower priority than the session you are
actively using, so a busy build does not make the interface sluggish.

## Cleaning up

Kill a service when it is stale or wrong, optionally releasing its port. If a port is
already occupied, find what holds it rather than force-killing blindly — it may be
someone else's work.

## Next

- [Projects and workspaces](/docs/projects/#services)
- [Browser control](/docs/browser/#previews)
- [CLI reference](/docs/cli-reference/#dev-servers)
