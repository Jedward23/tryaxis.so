// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tryaxis.so',
  base: '/docs',
  trailingSlash: 'always',
  outDir: '../docs',
  build: { format: 'directory' },
  integrations: [
    starlight({
      title: 'Axis docs',
      description:
        'Learn how Axis turns ordinary requests into contextualized, visible, durable agent work.',
      logo: {
        src: './src/assets/axis-icon.svg',
        alt: 'Axis',
        replacesTitle: false,
      },
      favicon: '/axis-icon.svg',
      customCss: ['./src/styles/axis.css'],
      head: [
        {
          // Axis presents dark by default. Treat an unset preference as dark rather
          // than following the OS, so the docs match the marketing pages. An explicit
          // choice made by the reader still wins.
          tag: 'script',
          content:
            "(()=>{var d=document.documentElement;try{var s=localStorage.getItem('starlight-theme');if(!s||s==='auto'){localStorage.setItem('starlight-theme','dark');d.dataset.theme='dark'}}catch(e){d.dataset.theme='dark'}})();",
        },
      ],
      // The Axis repository is private, so no GitHub social icon or "Edit page"
      // link is exposed here — both would 404 for readers and advertise a
      // private repository path.
      social: [
        { icon: 'external', label: 'tryaxis.so', href: 'https://tryaxis.so/' },
      ],
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: 'Learn Axis',
          items: [
            { label: 'Why Axis', slug: 'why-axis' },
            { label: 'Install Axis', slug: 'install' },
            { label: 'Your first real task', slug: 'quick-start' },
            { label: 'How the harness works', slug: 'concepts' },
            { label: 'The working agreement', slug: 'working-agreement' },
            { label: 'How to work with Axis', slug: 'how-to-work' },
          ],
        },
        {
          label: 'Do real work',
          items: [
            { label: 'Sessions and steering', slug: 'sessions' },
            { label: 'Projects and workspaces', slug: 'projects' },
            { label: 'Inbox and approvals', slug: 'inbox' },
            { label: 'Memory', slug: 'memory' },
            { label: 'Work plans', slug: 'work-plans' },
            { label: 'Sub-agents', slug: 'sub-agents' },
            { label: 'Browser and proof', slug: 'browser' },
            { label: 'Collections', slug: 'artifacts' },
            { label: 'Service shells', slug: 'service-shells' },
            { label: 'Mobile', slug: 'mobile' },
          ],
        },
        {
          label: 'Routines',
          items: [
            { label: 'Routines overview', slug: 'recurring-tasks' },
            { label: 'Scheduled check-ins', slug: 'scheduled-prompts' },
            { label: 'Quick actions', slug: 'quick-actions' },
            { label: 'Event-triggered work', slug: 'triggers' },
          ],
        },
        {
          label: 'Customize',
          items: [
            { label: 'Configuration', slug: 'configuration' },
            { label: 'Model providers', slug: 'model-providers' },
            { label: 'Skills and tools', slug: 'skills-and-tools' },
            { label: 'Integrations', slug: 'integrations' },
            { label: 'Remote access', slug: 'remote-access' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Keyboard', slug: 'keyboard' },
            { label: 'CLI reference', slug: 'cli-reference' },
            { label: 'Agent capabilities', slug: 'agent-tools' },
            { label: 'Config reference', slug: 'config-reference' },
          ],
        },
        {
          label: 'Help',
          items: [
            { label: 'Troubleshooting', slug: 'troubleshooting' },
            { label: 'FAQ', slug: 'faq' },
          ],
        },
      ],
    }),
  ],
});
