#!/usr/bin/env bun
/**
 * Extract the BitBuilder logo set from the Inkscape master sheet as clean, valid SVGs.
 *
 * Usage: bun extract-logos.ts [master.svg] [out-dir]
 *   master.svg  default ../bitbuilder.cloud/logos.svg
 *   out-dir     default ./logos
 *
 * Each composition below names the master's top-level groups it is made of. The script keeps
 * those whole elements (never slicing markup), crops to the drawing with Inkscape, optimizes
 * with scour, and writes colourways:
 *   <name>-ink.svg      #111111 (Terminal Black), for light grounds
 *   <name>-paper.svg    #ffffff, for dark grounds
 *   <name>.svg          currentColor, for inlining (single-ink compositions only)
 * Boxed compositions (a filled box with the mark knocked out) get ink and paper only:
 * the knockout needs a real second colour, which currentColor can't supply.
 * A contact sheet (contact-sheet.png) is written next to them for review.
 *
 * Needs inkscape, scour, rsvg-convert and magick on PATH. Writes only under out-dir.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const MASTER = resolve(process.argv[2] ?? join(import.meta.dir, '../bitbuilder.cloud/logos.svg'))
const OUT = resolve(process.argv[3] ?? join(import.meta.dir, 'logos'))
const WORK = join(OUT, '.work')

type Comp = { name: string; ids: Array<string>; knockout?: boolean; note: string }
const COMPOSITIONS: Array<Comp> = [
  { name: 'lockup', ids: ['SvgjsG1014', 'SvgjsG1015', 'SvgjsG1016'], note: 'BITBUILDER >_ CLOUD, the primary lockup' },
  { name: 'lockup-wide', ids: ['SvgjsG1550', 'SvgjsG1551', 'SvgjsG1552'], note: 'Primary lockup with wider letter spacing' },
  { name: 'lockup-terminal', ids: ['SvgjsG1131', 'SvgjsG1132', 'SvgjsG1133'], knockout: true, note: 'Lockup with the prompt in a filled terminal box' },
  { name: 'wordmark', ids: ['SvgjsG1014', 'SvgjsG1015'], note: 'BITBUILDER >_, for narrow headers' },
  { name: 'prompt', ids: ['SvgjsG1015'], note: 'The >_ prompt alone: favicons, avatars, app icons' },
  { name: 'prompt-lead', ids: ['SvgjsG1558', 'SvgjsG1559'], note: '>_ BITBUILDER CLOUD, prompt first' },
  { name: 'prompt-divider', ids: ['SvgjsG1629', 'SvgjsG1630', 'SvgjsG1631'], note: '>_ | BITBUILDER CLOUD' },
  { name: 'stacked-tagline', ids: ['SvgjsG1016-8', 'SvgjsG1017', 'SvgjsG1018', 'SvgjsG1019'], note: '>_ | BITBUILDER CLOUD over the tagline' },
  { name: 'badge-tagline', ids: ['SvgjsG1622', 'SvgjsG1623', 'SvgjsG1624'], knockout: true, note: 'BITBUILDER CLOUD knocked out of a filled badge, tagline below' },
  { name: 'framed', ids: ['SvgjsG2474', 'SvgjsG2475', 'SvgjsG2476', 'SvgjsG2477'], note: 'Lockup in a single rule frame' },
  { name: 'framed-double', ids: ['SvgjsG2872', 'SvgjsG2873', 'SvgjsG2874', 'SvgjsG2875'], note: 'Lockup in a double rule frame' },
  { name: 'framed-bold', ids: ['SvgjsG3003', 'SvgjsG3004', 'SvgjsG3005', 'SvgjsG3006'], note: 'Lockup in a heavy frame' },
  { name: 'framed-tagline', ids: ['SvgjsG4933', 'SvgjsG4934', 'SvgjsG4935', 'SvgjsG4936'], note: 'Prompt and lockup with tagline in a heavy frame' },
]

const INK = '#111111'
const PAPER = '#ffffff'
// Master fills: #111111 and #252a34 are the dark ink; #ffffff is the knockout inside boxes.
const DARK = /^#(111111|111|252a34)$/i
const LIGHT = /^#(ffffff|fff)$/i

function run(cmd: Array<string>) {
  const p = Bun.spawnSync(cmd, { stderr: 'pipe', stdout: 'pipe' })
  if (p.exitCode !== 0) throw new Error(`${cmd[0]} failed: ${p.stderr.toString().slice(0, 400)}`)
  return p.stdout.toString()
}

function recolour(svg: string, ink: string, knock: string, single: boolean) {
  return svg.replace(/(fill|stroke)="(#[0-9a-fA-F]{3,6})"/g, (_m, attr: string, hex: string) => {
    if (single || DARK.test(hex)) return `${attr}="${ink}"`
    if (LIGHT.test(hex)) return `${attr}="${knock}"`
    return `${attr}="${ink}"`
  })
}

const src = readFileSync(MASTER, 'utf8')
rmSync(WORK, { recursive: true, force: true })
mkdirSync(WORK, { recursive: true })

const pngs: Array<string> = []
for (const c of COMPOSITIONS) {
  const keep = new Set(c.ids)
  let found = 0
  const only = new HTMLRewriter()
    .on('#layer1 > *', {
      element: (e) => {
        if (keep.has(e.getAttribute('id') ?? '')) found++
        else e.remove()
      },
    })
    .transform(src)
  if (found !== c.ids.length) throw new Error(`${c.name}: found ${found} of ${c.ids.length} groups in ${MASTER}`)

  const a = join(WORK, `${c.name}.svg`)
  const b = join(WORK, `${c.name}.cropped.svg`)
  const m = join(WORK, `${c.name}.min.svg`)
  writeFileSync(a, only)
  run(['inkscape', a, '--export-area-drawing', '--export-plain-svg', `--export-filename=${b}`])
  run(['scour', '-i', b, '-o', m, '--enable-viewboxing', '--enable-id-stripping', '--shorten-ids',
    '--remove-metadata', '--strip-xml-prolog', '--set-precision=5', '--indent=none', '--no-line-breaks'])
  const min = readFileSync(m, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/ featurekey="[^"]*"/g, '')
    .replace(/<svg /, `<svg role="img" aria-label="BitBuilder Cloud" `)
    .trim()

  writeFileSync(join(OUT, `${c.name}-ink.svg`), recolour(min, INK, PAPER, !c.knockout) + '\n')
  writeFileSync(join(OUT, `${c.name}-paper.svg`), recolour(min, PAPER, INK, !c.knockout) + '\n')
  if (!c.knockout) writeFileSync(join(OUT, `${c.name}.svg`), recolour(min, 'currentColor', '', true) + '\n')

  for (const [tone, bg] of [['ink', '#e5e7eb'], ['paper', '#14171f']] as const) {
    const png = join(WORK, `${c.name}-${tone}.png`)
    run(['rsvg-convert', '-h', '120', '-b', bg, join(OUT, `${c.name}-${tone}.svg`), '-o', png])
    pngs.push(png)
  }
}

run(['magick', 'montage', ...pngs, '-tile', '2x', '-geometry', '+12+12', '-background', '#9ca3af',
  '-title', 'BitBuilder logo set (ink | paper)', join(OUT, 'contact-sheet.png')])
rmSync(WORK, { recursive: true, force: true })

const index = COMPOSITIONS.map((c) => `| \`${c.name}\` | ${c.note} | ${c.knockout ? 'ink, paper' : 'ink, paper, currentColor'} |`)
writeFileSync(
  join(OUT, 'INDEX.md'),
  `# Logo files\n\nGenerated by \`extract-logos.ts\` from \`bitbuilder.cloud/logos.svg\`. Don't edit by hand; edit the master and rerun.\n\n` +
    `| Name | What | Colourways |\n| --- | --- | --- |\n${index.join('\n')}\n\n` +
    `Files: \`<name>-ink.svg\` (#111111, light grounds), \`<name>-paper.svg\` (#ffffff, dark grounds), \`<name>.svg\` (currentColor, for inlining).\n`,
)
console.log(`${COMPOSITIONS.length} compositions written to ${OUT}`)
