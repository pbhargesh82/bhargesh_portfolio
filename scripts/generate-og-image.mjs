import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import satori from 'satori';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const profile = JSON.parse(readFileSync(join(root, 'src/content/profile.json'), 'utf8'));

const { heroCard, socialPreview } = profile;
const terminalPath = socialPreview?.terminalPath ?? '~/portfolio';
const whoami = socialPreview?.whoami ?? 'bhargesh — full-stack engineer';
const status = heroCard.status.toLowerCase();
const focus = heroCard.focus.toLowerCase();
const openTo = heroCard.availability.toLowerCase();

const INK = '#0a0a0a';
const ACCENT = '#ffe600';
const MUTED = 'rgba(255,255,255,0.4)';
const MUTED_KEY = 'rgba(255,255,255,0.7)';
const mono = { fontFamily: 'JetBrains Mono' };

const fontPath = join(root, 'scripts/fonts/JetBrainsMono-Regular.ttf');
const fontData = readFileSync(fontPath);

const markup = h(
  'div',
  {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      background: INK,
      padding: 48,
      ...mono,
    },
  },
  h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: 920,
        border: `3px solid ${INK}`,
        background: INK,
        boxShadow: `6px 6px 0 0 ${ACCENT}`,
        padding: 12,
        ...mono,
      },
    },
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 8px 4px',
          ...mono,
        },
      },
      h('div', { style: { width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' } }),
      h('div', { style: { width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' } }),
      h('div', { style: { width: 12, height: 12, borderRadius: '50%', background: '#27c93f' } }),
      h('span', { style: { marginLeft: 8, fontSize: 14, color: MUTED, ...mono } }, terminalPath),
    ),
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: '12px 16px 20px',
          fontSize: 22,
          lineHeight: 1.5,
          ...mono,
        },
      },
      h('div', { style: { display: 'flex', color: MUTED, ...mono } }, '$ whoami'),
      h('div', { style: { display: 'flex', color: ACCENT, ...mono } }, whoami),
      h('div', { style: { display: 'flex', color: MUTED, ...mono } }, '$ cat status.json'),
      h(
        'div',
        { style: { display: 'flex', flexDirection: 'column', color: 'white', ...mono } },
        h('div', { style: { display: 'flex', ...mono } }, '{'),
        h(
          'div',
          { style: { display: 'flex', paddingLeft: 28, ...mono } },
          h('span', { style: { color: MUTED_KEY, ...mono } }, '"status":'),
          h('span', { style: { color: ACCENT, ...mono } }, ` "${status}"`),
          ',',
        ),
        h(
          'div',
          { style: { display: 'flex', paddingLeft: 28, ...mono } },
          h('span', { style: { color: MUTED_KEY, ...mono } }, '"focus":'),
          h('span', { style: { color: 'white', ...mono } }, ` "${focus}"`),
          ',',
        ),
        h(
          'div',
          { style: { display: 'flex', paddingLeft: 28, ...mono } },
          h('span', { style: { color: MUTED_KEY, ...mono } }, '"open_to":'),
          h('span', { style: { color: 'white', ...mono } }, ` "${openTo}"`),
        ),
        h('div', { style: { display: 'flex', ...mono } }, '}'),
      ),
      h('div', { style: { display: 'flex', color: MUTED, ...mono } }, '$ ▋'),
    ),
  ),
);

const svg = await satori(markup, {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: 'JetBrains Mono',
      data: fontData,
      weight: 400,
      style: 'normal',
    },
    {
      name: 'JetBrains Mono',
      data: fontData,
      weight: 700,
      style: 'normal',
    },
  ],
});

const outDir = join(root, 'public/og');
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'terminal.png');

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, png);
console.log(`Generated ${outPath}`);
