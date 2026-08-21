---
title: CLI reference
description: Every axis command, flag, and example.
---

The `axis` command controls Axis from a terminal. Every command supports `--json` for
machine-readable output.

```bash
axis <command> [subcommand] [options]
```

## Global options

| Flag | Effect |
| --- | --- |
| `--json`, `-j` | Output JSON |
| `--url <url>` | Target a specific Axis server |
| `--help`, `-h` | Show help |

The server defaults to `AXIS_URL`, or `http://localhost:3000`.

## System

```bash
axis pulse      # global heartbeat — all projects, tasks, agents
axis health     # is the Axis server running?
axis agents     # running agents and status
axis stats      # cost and token statistics
axis usage      # usage monitor with burn rate
```

`axis usage` takes `--plan <pro|max5|max20>` and `--hours <n>`.

## Search

```bash
axis search "fix the login bug"
axis search "project:my-app cost:>0.50 OAuth"
axis search "model:claude from:2024-01-15"
```

Operators: `project:` `model:` `role:` `cost:>` `cost:<` `from:` `to:` `tokens:>`

Flags: `--limit <n>` (default 20), `--snippet-chars <n>` (default 200)

## Tasks

```bash
axis tasks                          # across all projects
axis tasks <project-path>           # for one project
axis tasks info <task-id>
axis tasks move <task-id> <status>
axis tasks delete <task-id>
```

Filter with `--status <status>`.

## Sessions

```bash
axis sessions                       # all sessions
axis sessions info <id>             # detail with costs and messages
axis sessions search <query>
axis sessions send <id> "message"
axis sessions pause <id>
axis sessions resume <id>
axis sessions stop <id>
```

| Flag | Effect |
| --- | --- |
| `--project <path>` | Filter by project |
| `--active` | Active in the last 5 minutes |
| `--idle` | 5 minutes to 1 hour |
| `--inactive` | Over an hour |
| `--limit <n>` | Max results (default 30) |
| `--behavior <steer\|followUp>` | How `send` delivers |

## Projects

```bash
axis projects                       # list
axis projects info <path>
axis projects create <name>         # --dir <parent>
axis projects connect <path>
axis projects archive <path>
axis projects unarchive <path>
axis projects rename <path> <name>
```

Add `--archived` to include archived projects in the list.

## Session control

Lower-level access to session transcripts and live terminals.

```bash
axis session current                # from environment
axis session show <id|file|current>
axis session messages <ref>         # --role, --limit, --compact
axis session tree <ref>
axis session context <ref>          # token and cost usage
axis session fork-candidates <ref>  # --query <text>
axis session pty <ref>              # find the live terminal
axis session send <ref|pty> "text"  # --no-newline
axis session scrollback <ref|pty>
axis session agent-context          # capability discovery
```

## Terminals

```bash
axis terminal spawn                 # --cwd, --command, --project
axis terminal list
axis terminal write <id> "text"     # --no-newline
axis terminal read <id>             # --tail <chars>, --lines <n>
axis terminal open <session-id>     # --message "..."
axis terminal kill <id>
```

## Dev servers

```bash
axis servers <project>
axis servers status <project>
axis servers scripts <project>
axis servers start <project> <id>
axis servers stop <project> <id>
axis servers config <project> <id> "cmd"   # --update-ecosystem
```

## Services

```bash
axis service                        # are Axis and the terminal service running?
axis service start [all|axis|pty]
axis service stop  [all|axis|pty]
axis service logs  [all|axis|pty]   # --lines <n>
```

## System and config

```bash
axis peers      # Tailscale peers
axis config     # configuration
axis version    # version and update status
```

## Examples

```bash
# What is happening right now
axis pulse
axis sessions --active

# Interact with a session
axis sessions info abc123
axis sessions send abc123 "What's your status?"

# Drive a terminal
axis terminal list
axis terminal write 3 "npm test"
axis terminal read 3 --lines 20

# Dev servers
axis servers ~/myapp
axis servers start myapp backend

# For scripts and agents
axis pulse --json
axis tasks info task_123 --json

# A different Axis node
AXIS_URL=http://remote:3000 axis pulse
```

:::note
`mc` remains as a deprecated alias for `axis`. Prefer `axis` in anything new.
:::

## Next

- [Agent tools](/docs/agent-tools/)
- [Configuration](/docs/configuration/)
