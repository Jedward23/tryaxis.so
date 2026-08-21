---
title: Skills and tools
description: Extending Axis with your own capabilities, processes, and integrations.
---

Axis is designed to grow around your work. Skills capture how you do something; tools
give agents new abilities.

## Skills

A skill is a written process an agent loads when a task matches it — your steps, your
constraints, your quality bar.

Skills are how you stop re-explaining a workflow. Write down how you do a release, or a
weekly report, or a specific kind of review, and agents follow it.

### What makes a good skill

- **A clear trigger.** When should this load?
- **Concrete steps**, in order.
- **Real constraints** — what must never happen.
- **What done looks like**, so it can be verified.

Skills are prose, not code. If you can explain it to a new hire, you can write it as a
skill.

## Tools

A tool is something an agent can call: reading a system, fetching data, performing an
action in a service you use.

Axis ships with tools for its own surfaces — sessions, projects, panes, memory, work
plans, browsers, artifacts. You can add tools for your own services.

### Results must be readable

A tool is only finished when its result renders as something a human can read.

Returning a wall of JSON is not done. Results should present as a summary with useful
detail — the raw payload can stay available behind a disclosure, but it should not be
the primary thing you see.

## Loading

Skills and tools load when relevant rather than all at once. A session that needs none
of your custom capabilities does not pay for them.

## Importing

Skills and tools can be brought in from a repository, so a process you already wrote
down elsewhere does not need retyping.

## Sensible boundaries

- Keep tool results small. Large payloads crowd out the actual work.
- Never return secrets in a tool result — they end up in the transcript.
- Prefer a narrow follow-up call over re-fetching a large blob.
- Anything with external consequences should route through an approval.

## Next

- [Agent tools](/docs/agent-tools/) — the built-in tool surface.
- [Integrations](/docs/integrations/)
- [Quick actions](/docs/quick-actions/)
