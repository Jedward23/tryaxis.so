---
title: Skills and tools
summary: Encode repeatable judgment in skills and grant narrow capabilities through readable, approval-aware tools.
description: Encode repeatable judgment in skills and grant narrow capabilities through readable, approval-aware tools.
---

**Builder lane · Mission: teach the harness how your work is done**

A **skill** captures a reusable process and quality bar. A **tool** gives an agent a
specific capability to read or change a system. Together they remove repeated workflow
explanation without placing every integration in every session's context.

<!-- PROOF-ID: SKILL-TOOL-01 -->

![A real browser-inspected result created by an Axis session inside the privacy-safe demo project.](/docs/proof/browser-result.png)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Write a skill when judgment repeats

A useful skill includes:

- a clear trigger—when it applies,
- ordered steps,
- constraints and approval boundaries,
- authoritative sources to inspect,
- completion criteria and required evidence.

Skills are written operating processes. If the stable rule applies to every task in the
project, keep the concise rule in AGENTS.md and let the skill hold the deeper specialized
workflow.

## Add a tool when an agent needs capability

Tools can read data, inspect state, create an Axis surface, or perform an authorized
action. Keep each contract narrow and typed. Prefer authoritative identifiers and
structured state over brittle keyword guessing.

A tool that can change an external system must preserve the project's human checkpoint
policy. Capability is not authorization.

## Make results readable

A tool is incomplete if its primary human presentation is a wall of JSON. A useful
result leads with status and summary, then offers records, fields, tables, media,
actions, or evidence behind progressive disclosure. Exact raw payload can remain a
last-resort detail.

Success, empty, loading, and error states all need a clear human rendering. Secrets and
sensitive input must be redacted before the result enters the transcript.

## Load only what matches

Relevant skills and tools should load when a task needs them rather than filling every
session with every capability. Keep descriptions specific enough that the harness can
choose correctly.

## Import cautiously

Before importing a skill, extension, or tool from another repository, inspect its
source, capability boundary, dependencies, secret handling, and side effects. Imported
instructions do not outrank your working agreement or safety policy.

## Connect the surrounding system

- AGENTS.md supplies standing rules.
- Memory supplies learned knowledge.
- Skills supply specialized process.
- Tools supply capability.
- Routines supply repeatable activation and run history.
- Sessions and evidence show what actually happened.

## Mission complete when

A fresh session recognizes the workflow, loads the skill, uses only the necessary tool,
renders its result readably, and stops before an unapproved external side effect.

## Next

- [Agent tools](/docs/agent-tools/)
- [Integrations](/docs/integrations/)
- [Routines](/docs/recurring-tasks/)
