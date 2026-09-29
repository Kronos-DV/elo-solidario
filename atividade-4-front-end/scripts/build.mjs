import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.resolve(root, 'dist');
if (!out.startsWith(`${root}${path.sep}`)) throw new Error('Destino de build fora da pasta do projeto.');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, 'html', 'index.html'), path.join(out, 'index.html'));
await cp(path.join(root, 'imagens'), path.join(out, 'imagens'), { recursive: true });
await cp(path.join(root, 'css'), path.join(out, 'css'), { recursive: true });
await cp(path.join(root, 'js'), path.join(out, 'js'), { recursive: true });

const cssPath = path.join(out, 'css', 'styles.css');
const css = await readFile(cssPath, 'utf8');
await writeFile(cssPath, minifyCss(css));
for (const file of await walk(path.join(out, 'js'))) {
  if (file.endsWith('.js')) await writeFile(file, minifyJavaScript(await readFile(file, 'utf8')));
}
const htmlPath = path.join(out, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const productionHtml = html.replace(/\.\.\/(css|js|imagens)\//g, './$1/').replace(/>\s+</g, '><').trim();
await writeFile(htmlPath, productionHtml);
await writeFile(path.join(out, '.nojekyll'), '');
const assetFiles = (await walk(out)).filter(file => !file.endsWith('build-manifest.json'));
const totalBytes = (await Promise.all(assetFiles.map(file => readFile(file)))).reduce((sum, buffer) => sum + buffer.byteLength, 0);
await writeFile(path.join(out, 'build-manifest.json'), JSON.stringify({ version: '1.0.0', files: assetFiles.length, totalBytes }, null, 2) + '\n');
console.log(`Build de produção criado em dist/ (${assetFiles.length} arquivos, ${totalBytes} bytes).`);

function minifyCss(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').trim();
}

function minifyJavaScript(source) {
  let output = '', quote = '', escaped = false;
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      output += char;
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'" || char === '`') { quote = char; output += char; continue; }
    if (char === '/' && source[i + 1] === '/') {
      i += 2; while (i < source.length && source[i] !== '\n') i++;
      continue;
    }
    if (char === '/' && source[i + 1] === '*') {
      i += 2; while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) i++;
      i++; continue;
    }
    if (/\s/.test(char)) {
      while (i + 1 < source.length && /\s/.test(source[i + 1])) i++;
      const previous = output.at(-1) || '', next = source[i + 1] || '';
      if (isWord(previous) && isWord(next)) output += ' ';
      else if (isPunctuation(previous) && isPunctuation(next)) output += ' ';
      continue;
    }
    output += char;
  }
  return output.trim();
}

function isWord(char) { return /[A-Za-z0-9_$]/.test(char); }
function isPunctuation(char) { return Boolean(char) && !isWord(char) && !/["'`]/.test(char); }
async function walk(directory) {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file)); else files.push(file);
  }
  return files;
}
