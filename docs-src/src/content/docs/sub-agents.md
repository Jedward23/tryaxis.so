---
title: Sub-agents
description: Splitting a large goal across parallel agents while keeping it coherent.
---

A session can spawn child sessions that work in parallel on slices of a larger goal,
coordinated by the parent.

## When to use them

Sub-agents help when a goal genuinely splits into **independent** slices:

- Research across several unrelated sources
- Changes to separate subsystems that do not share files
- A build plus an independent review of that build
- Generating several options to compare

They hurt when work is sequential or shares files. Three agents editing the same module
is slower than one, and produces conflicts you then have to untangle.

:::caution
Being *large* is not the same as being *parallelizable*. Split by independence, not by
size.
:::

## How it works

The parent describes each slice and spawns children. Each child is a real session with
its own transcript, panes, and status — visible in the sidebar indented under its
parent.

Children appear immediately as queued rows, before they have started, so you can see
what was requested. They reconcile in place into live sessions once running.

## The agent graph

The graph pane shows the orchestration tree: the root, every child, and nesting.

Clicking a node switches the transcript on the left while the graph stays mounted on
the right. Moving between parent and child never loses your place, and every child has
a direct way back to its parent.

The overview counts children, not the root.

## Choosing the agent

Each slice can specify which agent and model handles it. A review slice might use a
different model than the implementation slice.

Provider choice is metadata on a child, not a separate kind of thing — every child is a
normal session in the same tree.

## Keeping it coherent

The parent owns coherence. It:

- gives each child the shared goal, constraints, and its specific deliverable
- tells each child which files it owns, so children do not collide
- collects results and integrates them
- validates across slices, not just within one

A child that finishes is not the goal. An integrated, validated result is.

### File ownership

Agents working in the same tree must not race on the same files. Slices declare what
they own; overlaps get coordinated through the parent rather than fought out in the
working tree.

## Reviewers

For subjective or high-risk work — UI, architecture, data correctness, migrations — a
reviewer child can evaluate the work against a rubric before the parent moves on.

This catches "technically complete but wrong" before it compounds.

## Continuation

Long orchestrations use a continuation loop so the parent wakes when children finish
rather than relying on you to prompt it.

The agent that starts a loop turns it off when the work is complete, blocked on you, or
handed to another owner.

## Watching progress

The parent stays in progress while children are queued or running. A single spawned
child does not mean the group is done.

Attention collapses to one count at the orchestration root, so a ten-child run does not
produce ten separate notifications.

## Next

- [Work plans](/docs/work-plans/) — where parallel work reports.
- [Sessions](/docs/sessions/)
- [Inbox and approvals](/docs/inbox/)
