# Axis Docs v2 components

Reusable Astro/MDX building blocks for the Guided Hybrid docs system. All visible copy is supplied by the page; the components only own structure, proof disclosure, accessibility, and responsive presentation.

## Import

From a file in `src/content/docs/`:

```mdx
import AudienceLanes from '../../components/AudienceLanes.astro';
import MissionFlow from '../../components/MissionFlow.astro';
import ConceptBoundary from '../../components/ConceptBoundary.astro';
import ConceptGrid from '../../components/ConceptGrid.astro';
import ProofFigure from '../../components/ProofFigure.astro';
import ProofSequence from '../../components/ProofSequence.astro';
import HotspotFigure from '../../components/HotspotFigure.astro';
```

## Guided mission

```mdx
<AudienceLanes
  description="Use the same harness for work and life without making either lane secondary."
  lanes={[
    { title: 'Business', description: 'Ship and operate durable work.', icon: 'briefcase', examples: ['Launch a site', 'Run client reporting'] },
    { title: 'Personal', description: 'Carry complex personal outcomes through.', icon: 'user-round', examples: ['Plan a move', 'Research a purchase'] },
  ]}
/>

<MissionFlow
  steps={[
    { label: 'You ask', title: 'State the outcome', description: 'Speak normally.', icon: 'message-circle' },
    { label: 'Axis prepares', title: 'Supply the harness', description: 'Context, rules, tools, and a plan.', icon: 'layers' },
    { label: 'Agent works', title: 'Execute visibly', description: 'Work continues inside one durable thread.', icon: 'bot' },
    { label: 'You judge', title: 'Review the proof', description: 'Inspect evidence and approve consequential steps.', icon: 'shield-check' },
    { label: 'Axis remembers', title: 'Keep the learning', description: 'Decisions remain available next time.', icon: 'brain' },
  ]}
/>
```

## Concept boundaries

Use `ConceptGrid` with a `concepts` array for most pages. `ConceptBoundary` is also available for a single full-width card or can be placed in the grid slot.

```mdx
<ConceptGrid
  title="Know what each layer owns"
  concepts={[
    {
      title: 'Memory',
      definition: 'Durable knowledge that should change future work.',
      icon: 'brain',
      is: ['Decisions', 'Preferences', 'Hard-won lessons'],
      isNot: ['A task list', 'A transcript dump'],
      href: '/docs/memory/',
    },
    {
      title: 'Work plans',
      definition: 'Shared intent about what is open, active, or deferred.',
      icon: 'list-checks',
      is: ['Current scope', 'Verifiable next actions'],
      isNot: ['Long-term knowledge', 'Private scratch notes'],
      href: '/docs/work-plans/',
    },
  ]}
/>
```

## Proof

`alt` and `caption` are required. Proof defaults to `kind="seeded"`, which renders **Seeded demo · Real Axis UI**. Use `kind="live"` only for non-seeded product evidence and `kind="diagram"` for explanatory illustrations.

```mdx
<ProofFigure
  src="/docs/proof/mission-plan.webp"
  alt="Axis work plan with three completed steps and one approval checkpoint"
  caption="The work plan stays visible while the agent executes the mission."
  width={1440}
  height={900}
/>

<ProofSequence
  items={[
    { title: 'Ask', src: '/docs/proof/ask.webp', alt: '...', caption: 'The user states the outcome.' },
    { title: 'Inspect', src: '/docs/proof/evidence.webp', alt: '...', caption: 'Axis keeps the evidence beside the session.' },
  ]}
/>

<HotspotFigure
  id="session-proof"
  src="/docs/proof/session.webp"
  alt="Seeded Axis session with transcript, plan, and browser evidence"
  caption="One session keeps intent, execution, and proof together."
  hotspots={[
    { x: 24, y: 32, title: 'Ordinary request', description: 'The mission begins in the user’s own words.' },
    { x: 78, y: 54, title: 'Owned evidence', description: 'The browser remains attached to the session that produced it.' },
  ]}
/>
```

Hotspot coordinates are percentages from the image’s top-left corner and are clamped to `0–100`. Every marker links to a keyboard-readable annotation below the image, so the meaning never depends on hover.

## Static icon vocabulary

`DocsIcon.astro` uses local, non-animated Lucide-style line paths. Supported names: `arrow-right`, `badge-check`, `bot`, `brain`, `briefcase`, `calendar-clock`, `circle`, `folder`, `history`, `image`, `layers`, `library`, `list-checks`, `message-circle`, `shield-check`, `sparkles`, `target`, `user-round`, and `wrench`.

Use product-concept icons only. Project identity art and user-generated Skill/Routine icons are not generic documentation glyphs.
