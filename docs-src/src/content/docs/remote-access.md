---
title: Remote access
description: Reach the Axis on your machine from your phone, tablet, or another computer.
---

Axis runs on your machine. Remote access is how your other devices reach *that* machine
— not a copy of your work in someone else's cloud.

## How it works

Axis uses [Tailscale](https://tailscale.com), which you install yourself. It creates a
private network between your own devices.

Your machine gets a stable private hostname. Devices on your network reach Axis at that
hostname; nothing else can.

:::note
Axis deliberately does not implement its own network mesh. Tailscale is smaller,
better tested, and more secure than a bespoke alternative — so Axis guides you to it
rather than reinventing it.
:::

## Setting it up

1. Install Tailscale on the machine running Axis.
2. Install Tailscale on your phone or other device.
3. Sign both into the same Tailscale account.
4. Open Axis on the second device and pair with your node.

List the devices Axis can see:

```bash
axis peers
```

## Pairing

Mobile asks which node to connect to on first launch. Once paired it remembers.

Shipped builds contain no hardcoded address — every install pairs with your own node.

## Security

- Traffic between your devices is encrypted end to end.
- Your node is not exposed to the public internet.
- Certificates are handled for you and rotate automatically.

## Working remotely

Once connected, a phone or tablet is a real client. Everything in [Mobile](/docs/mobile/)
applies — read sessions, steer agents, answer approvals, take over browsers.

Sessions keep running on your machine whether or not a device is watching.

## Troubleshooting

**The device cannot see the node.** Confirm both are signed into the same Tailscale
account and both show as connected.

**Connected but Axis will not load.** Check Axis is actually running on the host:

```bash
axis health
axis service
```

**It worked yesterday.** If the host machine restarted, confirm Axis came back up.

## Next

- [Mobile](/docs/mobile/)
- [Configuration](/docs/configuration/)
- [Troubleshooting](/docs/troubleshooting/)
