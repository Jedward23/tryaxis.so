---
title: Remote access
summary: Reach the Axis node you own through user-installed Tailscale and your own network policy.
description: Reach the Axis node you own through user-installed Tailscale and your own network policy.
---

**Learn lane · Mission: connect another device to the same node**

Axis runs on a host you control. In the MVP networking model, you install and manage
Tailscale; Axis helps a client pair with the node reachable through that tailnet.

<!-- PROOF-ID: REMOTE-PAIRING-01 -->

![The real compact Axis workspace keeps project work, sessions, and judgment available on the go.](/docs/proof/mobile-workspace.webp)

*Real Axis UI with deliberately seeded, privacy-safe demonstration content.*

## Understand the trust boundary

Tailscale creates an encrypted network path between authenticated devices according to
your tailnet identity and policy. Whether a node is reachable depends on your Tailscale
configuration, ACLs/grants, sharing, DNS, host firewall, Axis binding, and device state.

Do not claim that "nothing else can reach it" as an absolute. Review your own tailnet
and host configuration. Avoid exposing Axis directly to the public internet unless a
separately supported and secured deployment explicitly requires it.

## Connect the devices

1. Install Tailscale on the machine running Axis.
2. Install it on the phone, tablet, or computer you want to use.
3. Authenticate both devices under the intended tailnet and policy.
4. Confirm the Axis host is running and reachable inside that network.
5. Open the Axis client and pair it with your node using the available pairing surface.

Shipped clients should not contain a personal hardcoded server address. Each user pairs
with their own node.

## Use the canonical node address

A Tailscale `*.ts.net` hostname is the preferred remote identity when available. Its
publicly trusted certificate can rotate, so it must not be treated like a permanent
fingerprint. Fingerprint pinning is appropriate only where a self-signed LAN certificate
is the explicit trust anchor.

## Keep the host available

Remote access cannot wake a powered-off or sleeping host by itself. For work to continue,
the machine must remain powered, awake enough to serve Axis, connected to the relevant
network, and running the Axis services.

## Pairing is sensitive

Do not publish node hostnames, tailnet names, IP addresses, pairing codes, QR codes, or
certificate fingerprints. Pair only the device and node you intend. Revoke lost or
untrusted devices through the relevant Axis and Tailscale controls.

## Diagnose in layers

1. Are both devices connected to the intended tailnet?
2. Does your policy allow the client to reach the host and Axis port?
3. Is the host awake and Axis healthy?
4. Is the client paired to the correct node?
5. Did the node hostname or local trust configuration change?

Use `axis peers`, `axis health`, and `axis service` only if those commands exist in your
installed version and do not expose sensitive output in shared transcripts.

## Mission complete when

Open the same seeded session from the second device, make one harmless change or answer,
and confirm it appears in the exact same session on the host.

## Next

- [Mobile work](/docs/mobile/)
- [Configuration](/docs/configuration/)
- [Troubleshooting](/docs/troubleshooting/)
