---
title: Config reference
description: Environment variables, ports, paths, and status values.
---

## Environment variables

| Variable | Effect |
| --- | --- |
| `AXIS_URL` | Axis server the CLI targets. Default `http://localhost:3000` |

```bash
AXIS_URL=http://other-machine:3000 axis pulse
```

Per-command, `--url` overrides both.

## Ports

| Port | Process |
| --- | --- |
| `3000` | Axis server |
| `3001` | Terminal service |

The terminal service is separate so restarting Axis does not kill your terminals.

Axis may redirect to HTTPS on a secure port depending on configuration.

## Paths

| Path | Contents |
| --- | --- |
| Home directory database | Sessions, projects, statuses, history |
| Session files | One transcript per session |
| OS keychain | Provider credentials |

Project files stay wherever they already are.

## Session status

| Status | Meaning |
| --- | --- |
| `backlog` | Not started |
| `todo` | Queued |
| `in_progress` | Active |
| `in_review` | Awaiting review |
| `done` | Complete |
| `cancelled` | Abandoned |

`done`, `in_review`, and `cancelled` are terminal — they close out stale running state.

## Session activity

Used by `axis sessions` filters.

| Filter | Window |
| --- | --- |
| `--active` | Under 5 minutes |
| `--idle` | 5 minutes to 1 hour |
| `--inactive` | Over 1 hour |

## Search operators

| Operator | Example |
| --- | --- |
| `project:` | `project:my-app` |
| `model:` | `model:claude` |
| `role:` | `role:user` |
| `cost:>` `cost:<` | `cost:>0.50` |
| `from:` `to:` | `from:2024-01-15` |
| `tokens:>` | `tokens:>10000` |

## Schedules

| Kind | Behaviour |
| --- | --- |
| `daily` | One or more times per day |
| `weekly` | A chosen weekday |
| `manual` | No schedule; run on demand |

## Priority

Background and automated processes run at lower priority than the session you are
actively using.

Capacity limits apply per project. Work over the limit reports as waiting rather than
launching anyway.

## Next

- [Configuration](/docs/configuration/)
- [CLI reference](/docs/cli-reference/)
