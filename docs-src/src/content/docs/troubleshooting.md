---
title: Troubleshooting
description: When something is stuck, start here.
---

## First checks

```bash
axis health     # is the server running?
axis service    # are both processes up?
axis version    # version and update status
```

Most problems are one of these three being unhappy.

## A session appears stuck

A session showing **Working** for far longer than the task warrants.

Axis detects genuinely stalled sessions and can wake them. It backs off between
attempts and escalates to you rather than retrying forever.

If it has been a long time with nothing happening:

1. Check the working fold — is it mid-command, or genuinely idle?
2. Check Raw to see the terminal directly.
3. Look for an unanswered question in your [inbox](/docs/inbox/).

A session waiting on you is not stuck; it is waiting.

## A message did not send

Sending shows local state immediately, then confirms once accepted.

- **Stuck sending, connection healthy.** The agent is mid-turn — your message is in the
  [steering queue](/docs/sessions/#the-steering-queue). Press `Enter` on the empty
  composer to push it through.
- **Reconnecting shown.** The connection dropped. Your message is preserved and delivers
  on reconnect.

Refreshing does not lose a queued message.

## Nothing loads / the interface looks broken

Usually a partially updated client.

1. Reload the page.
2. If it persists, hard reload.

Axis recovers from server restarts and network drops without a hard refresh, so
repeated need for one is worth reporting.

## The machine is sluggish

Usually too much running at once.

```bash
axis agents      # what is running
axis sessions    # how many sessions exist
```

Background work runs at lower priority than your active session, and abandoned
terminals are cleaned up automatically. If there are dozens of live sessions, close
what you are not using.

If everything restarted recently, give it a few minutes — a machine coming back up is
briefly busy.

## A dev server will not start

```bash
axis servers status ~/myapp
```

- **Port already in use.** Find what holds it before killing anything — it may be work
  you want.
- **Wrong command.** Override it:
  ```bash
  axis servers config myapp npm:dev "npm run dev -- --port 4000"
  ```
- **Starts then dies.** Read its output rather than restarting repeatedly.

## A browser pane is blank

1. Confirm the underlying service is actually running.
2. Check the URL is what you expect.
3. Close and reopen the pane.

If the page failed to load, the pane keeps showing the URL you asked for rather than an
internal error address.

## Provider errors

Rate limits, expired credentials, and outages surface as actionable failures rather
than silent hangs.

- **Credentials expired.** Reconnect the provider.
- **Rate limited.** Wait, or switch models for the session.
- **Provider down.** Switch providers; the session continues.

See [Model providers](/docs/model-providers/).

## A phone cannot reach Axis

1. Both devices signed into the same Tailscale account?
2. Both showing connected?
3. Is Axis actually running on the host — `axis health`?
4. Did the host restart without Axis coming back?

See [Remote access](/docs/remote-access/#troubleshooting).

## Terminals disappeared

Restarting the Axis server does not kill terminals — they are owned by a separate
process. Restarting *that* process does.

```bash
axis service start pty
```

## Reading logs

```bash
axis service logs --lines 100
axis service logs axis --lines 100
```

## Next

- [FAQ](/docs/faq/)
- [Configuration](/docs/configuration/)
