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
        'Axis keeps your agents, work, and context in one place. Install it, learn the model, and automate the work you repeat.',
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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Jedward23/axis' },
      ],
      editLink: {
        baseUrl: 'https://github.com/Jedward23/axis/edit/main/docs/content/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Install Axis', slug: 'install' },
            { label: 'Quick start', slug: 'quick-start' },
            { label: 'Concepts', slug: 'concepts' },
            { label: 'Keyboard', slug: 'keyboard' },
          ],
        },
        {
          label: 'Using Axis',
          items: [
            { label: 'How to work with Axis', slug: 'how-to-work' },
            { label: 'Sessions', slug: 'sessions' },
            { label: 'Projects and workspaces', slug: 'projects' },
            { label: 'Inbox and approvals', slug: 'inbox' },
            { label: 'Memory', slug: 'memory' },
            { label: 'Work plans', slug: 'work-plans' },
            { label: 'Sub-agents', slug: 'sub-agents' },
            { label: 'Browser control', slug: 'browser' },
            { label: 'Artifacts and collections', slug: 'artifacts' },
            { label: 'Mobile', slug: 'mobile' },
          ],
        },
        {
          label: 'Automate',
          items: [
            { label: 'Recurring tasks', slug: 'recurring-tasks' },
            { label: 'Scheduled prompts', slug: 'scheduled-prompts' },
            { label: 'Quick actions', slug: 'quick-actions' },
            { label: 'Triggers', slug: 'triggers' },
          ],
        },
        {
          label: 'Configure',
          items: [
            { label: 'Configuration', slug: 'configuration' },
            { label: 'Model providers', slug: 'model-providers' },
            { label: 'Skills and tools', slug: 'skills-and-tools' },
            { label: 'Service shells', slug: 'service-shells' },
            { label: 'Remote access', slug: 'remote-access' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI reference', slug: 'cli-reference' },
            { label: 'Agent tools', slug: 'agent-tools' },
            { label: 'Config reference', slug: 'config-reference' },
            { label: 'Integrations', slug: 'integrations' },
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
