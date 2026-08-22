import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const contentDir = join(root, 'src/content/docs');
const publicDir = join(root, 'public');
const files = readdirSync(contentDir)
  .filter((name) => ['.md', '.mdx'].includes(extname(name)))
  .sort();
const errors = [];
const slugs = new Set(files.map((name) => name.replace(/\.mdx?$/, '')));
slugs.add('');

if (files.length !== 32) errors.push(`Expected 32 docs pages, found ${files.length}.`);

for (const name of files) {
  const text = readFileSync(join(contentDir, name), 'utf8');
  if (!/^---\n[\s\S]*?\ntitle:/m.test(text) && !/^---\n[\s\S]*?title:/m.test(text)) {
    errors.push(`${name}: missing title frontmatter.`);
  }

  const hasProof = /\/docs\/proof\//.test(text) || /<(ProofFigure|ProofSequence|HotspotFigure)\b/.test(text);
  if (!hasProof) errors.push(`${name}: missing real product proof.`);

  for (const match of text.matchAll(/\/docs\/proof\/([A-Za-z0-9._-]+)/g)) {
    const asset = join(publicDir, 'proof', match[1]);
    if (!existsSync(asset)) errors.push(`${name}: missing proof asset ${match[1]}.`);
  }

  for (const match of text.matchAll(/\]\(\/docs\/([A-Za-z0-9/_-]*)\/?(?:#[^)]+)?\)/g)) {
    const target = match[1].replace(/\/$/, '');
    if (target.startsWith('proof/')) continue;
    if (target && !slugs.has(target)) errors.push(`${name}: broken local docs link /docs/${target}/.`);
  }

  const banned = [
    ['write stronger prompts', /write stronger prompts/i],
    ['weak prompt', /weak prompt/i],
    ['perfect prompt template', /perfect prompt template/i],
    ['Artifacts as a destination', /Artifacts and collections/i],
    ['Automate sidebar-era wording', /^##? Automate$/im],
  ];
  for (const [label, pattern] of banned) if (pattern.test(text)) errors.push(`${name}: contains banned ${label} language.`);
}

const manifestPath = join(publicDir, 'proof/manifest.json');
if (!existsSync(manifestPath)) errors.push('Missing proof/manifest.json.');
else {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (!manifest.disclosure?.includes('Real Axis UI')) errors.push('Proof manifest lacks the real-UI disclosure.');
  for (const [asset, meta] of Object.entries(manifest.assets ?? {})) {
    if (!existsSync(join(publicDir, 'proof', asset))) errors.push(`Manifest asset missing: ${asset}.`);
    if (meta.privateData !== false) errors.push(`Manifest asset not privacy-cleared: ${asset}.`);
  }
}

if (errors.length) {
  console.error(`Axis docs validation failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${files.length} docs pages: every page has proof, local links resolve, proof assets exist, and generic prompt-training language is absent.`);
