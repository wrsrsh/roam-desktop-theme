import { readFile, mkdir, writeFile } from 'node:fs/promises';
const files = [
  'src/RoamStudio/system/system.css',
  'src/RoamStudio/common/colors.css',
  'src/RoamStudio/common/fixes.css',
  'src/RoamStudio/inline/craft-common.css',
  'src/RoamStudio/inline/craft-auto.css',
  'src/RoamStudio/modules/icons-feather.css',
  'desktop.css',
];
const css = (await Promise.all(files.map(file => readFile(new URL(file, import.meta.url), 'utf8'))))
  .map(text => text.replaceAll('@charset "UTF-8";', '')).join('\n');
await mkdir(new URL('dist/', import.meta.url), { recursive: true });
await writeFile(new URL('dist/roam-desktop.css', import.meta.url), css);
