<div align="center">

<br/>

# **House of Asher**

### **#HouseOfAsher**

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=IBM+Plex+Sans&weight=600&size=22&duration=3000&pause=800&color=E8E8E8&center=true&vCenter=true&width=600&lines=Intelligence-grade+workflows.;Durable+tasks.+Zero+excuses.;Ship+background+jobs+that+scale.">
  <img alt="House of Asher tagline" src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Sans&weight=600&size=22&duration=3000&pause=800&color=1a1a1a&center=true&vCenter=true&width=600&lines=Intelligence-grade+workflows.;Durable+tasks.+Zero+excuses.;Ship+background+jobs+that+scale.">
</picture>

<br/><br/>

[![#HouseOfAsher](https://img.shields.io/badge/%23HouseOfAsher-f59e0b?style=for-the-badge&logoColor=0a0a0a)](https://github.com/ZorakCorp/project---zahten-)
[![House of Asher](https://img.shields.io/badge/House%20of%20Asher-0a0a0a?style=for-the-badge&logoColor=d4d4d4)](https://github.com/ZorakCorp/project---zahten-)
[![Engine](https://img.shields.io/badge/engine-Trigger.dev%20OSS-6366f1?style=for-the-badge)](https://trigger.dev)
[![License](https://img.shields.io/badge/license-Apache%202.0-22c55e?style=for-the-badge)](./LICENSE)

<br/>

[Documentation](https://trigger.dev/docs) · [Quick start](https://trigger.dev/docs/quick-start) · [Self-hosting](https://trigger.dev/docs/self-hosting/overview) · [Discord](https://discord.gg/nkqV9xBYWy)

<hr/>

</div>

<br/>

## · Overview

**House of Asher** is how we brand our hardened, operator-focused fork of the **[Trigger.dev](https://trigger.dev)** open-source platform — durable TypeScript workflows, queues, realtime runs, and observability without babysitting brittle serverless timeouts.

We ship **defense-in-depth defaults** (security headers, request correlation, structured audit signals) while staying compatible with the upstream SDK and docs ecosystem.

> **#HouseOfAsher** — same DNA as Trigger.dev OSS, tuned for teams who care how production **feels** under pressure.

<br/>

## · Why this fork

| Pillar | What you get |
|--------|----------------|
| **Durability** | Long-running tasks, retries, idempotency, checkpointing — built for agents & pipelines that cannot vanish mid-flight. |
| **Observability** | Traces, logs, and run metadata surfaced like you actually operate the thing. |
| **Operator posture** | Baseline HTTP hardening, `X-Request-Id` correlation, optional `TRUST_PROXY` behind TLS terminators, structured security audit hooks. |
| **Freedom** | Self-host, extend the webapp & workers, keep your stack on your metal. |

<br/>

## · Platform snapshot

- **AI agents & workflows** — compose LLM steps, tools, and human-in-the-loop pauses without reinventing orchestration.
- **Queues & concurrency** — rules that match how your org actually runs work.
- **Realtime** — subscribe to runs, stream outputs, wire dashboards without polling yourself to death.
- **Cron & schedules** — durable schedules that survive deploys and reality.
- **Build extensions** — browsers, FFmpeg, Python sidecars — the boring stuff that becomes urgent at 3am.

<details>
<summary><strong>Expand — full upstream feature index</strong></summary>

- [SDK overview](https://trigger.dev/docs/tasks/overview) · [Long-running tasks](https://trigger.dev/docs/runs/max-duration) · [Cron](https://trigger.dev/docs/tasks/scheduled#scheduled-tasks-cron)
- [Realtime](https://trigger.dev/docs/realtime/overview) · [React hooks](https://trigger.dev/docs/frontend/react-hooks#react-hooks) · [Batch triggers](https://trigger.dev/docs/triggering#tasks-batchtrigger)
- [Schema tasks](https://trigger.dev/docs/tasks/schemaTask#schematask) · [Waits](https://trigger.dev/docs/wait) · [Waitpoints](https://trigger.dev/docs/wait-for-token#wait-for-token)
- [Queues & concurrency](https://trigger.dev/docs/queue-concurrency#concurrency-and-queues) · [Environments](https://trigger.dev/docs/how-it-works#dev-mode) · [Machines](https://trigger.dev/docs/machines)
- [Logging & tracing](https://trigger.dev/docs/logging) · [Bulk actions](https://trigger.dev/docs/bulk-actions) · [Alerts](https://trigger.dev/docs/troubleshooting-alerts#alerts)

</details>

<br/>

## · Write tasks in your repo

Tasks live in **your** codebase — reviewable, testable, boring in the good way.

```ts
import { task } from "@trigger.dev/sdk";

export const helloWorld = task({
  id: "hello-world",
  run: async (payload: { message: string }) => {
    console.log(payload.message);
  },
});
```

<br/>

## · Getting started

1. Create a project in **[Trigger.dev Cloud](https://cloud.trigger.dev)** *or* follow **[self-hosting](https://trigger.dev/docs/self-hosting/overview)**.
2. Walk through the **[quick start](https://trigger.dev/docs/quick-start)** — first task in minutes.
3. Read **[how it works](https://trigger.dev/docs/how-it-works)** when you are ready to stop guessing.

**Self-host recipes:** [Docker](https://trigger.dev/docs/self-hosting/docker) · [Kubernetes / Helm](https://trigger.dev/docs/self-hosting/kubernetes)

<br/>

## · Trace view

<p align="center">
  <img alt="Trace view" src="https://content.trigger.dev/trace-view.png" width="85%" />
</p>

<br/>

## · Development & contribution

Local setup and contribution flow live in **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

Upstream OSS contributors:

<a href="https://github.com/triggerdotdev/trigger.dev/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=triggerdotdev/trigger.dev" alt="Contributors" />
</a>

<br/>

---

<div align="center">

**#HouseOfAsher** · *House of Asher*

<br/>

<sub>This repository extends <a href="https://github.com/triggerdotdev/trigger.dev">triggerdotdev/trigger.dev</a>. SDK & docs references point to the Trigger.dev project unless noted otherwise.</sub>

</div>
