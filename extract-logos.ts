#!/usr/bin/env bun
/**
 * Extract all unique logo variations from logos.svg
 * Each variation will be saved as a separate SVG file
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const sourceFile = '../logos.svg';
const outputDir = './logos';

// Create output directory
mkdirSync(outputDir, { recursive: true });

const svgContent = readFileSync(sourceFile, 'utf-8');

// Extract viewBox and dimensions
const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
const widthMatch = svgContent.match(/width="([^"]*)"/);
const heightMatch = svgContent.match(/height="([^"]*)"/);

const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 1920 2080';
const width = widthMatch ? widthMatch[1] : '1920';
const height = heightMatch ? heightMatch[1] : '2080';

// Define logo compositions based on y-position ranges
const compositions = [
  {
    name: '01-horizontal-black',
    yRange: [0, 100],
    description: 'Horizontal logo with terminal icon - Black',
    fill: '#111111'
  },
  {
    name: '02-horizontal-white',
    yRange: [100, 230],
    description: 'Horizontal logo with terminal icon - White',
    fill: '#ffffff'
  },
  {
    name: '03-large-black',
    yRange: [230, 370],
    description: 'Large scale logo - Black',
    fill: '#111111'
  },
  {
    name: '04-large-white',
    yRange: [370, 520],
    description: 'Large scale logo - White',
    fill: '#ffffff'
  },
  {
    name: '05-with-tagline-white',
    yRange: [520, 770],
    description: 'Full brand with tagline - White on dark',
    fill: '#ffffff'
  },
  {
    name: '06-with-tagline-black',
    yRange: [770, 1050],
    description: 'Full brand with tagline - Black on light',
    fill: '#111111'
  },
  {
    name: '07-compact-blue',
    yRange: [0, 650],
    xRange: [1080, 2000],
    description: 'Compact brand mark - Dark blue',
    fill: '#252a34'
  },
  {
    name: '08-horizontal-icon-black',
    yRange: [1080, 1240],
    description: 'Horizontal with boxed icon - Black',
    fill: '#111111'
  },
  {
    name: '09-compact-black',
    yRange: [1240, 1330],
    description: 'Compact horizontal - Black',
    fill: '#111111'
  },
  {
    name: '10-compact-icon-black',
    yRange: [1240, 1330],
    xRange: [1080, 1920],
    description: 'Compact with boxed icon - Black',
    fill: '#111111'
  },
  {
    name: '11-compact-icon-white',
    yRange: [1420, 1550],
    xRange: [1080, 1920],
    description: 'Compact with boxed icon - White',
    fill: '#ffffff'
  },
  {
    name: '12-full-brand-white',
    yRange: [1540, 1780],
    description: 'Complete brand package with tagline - White',
    fill: '#ffffff'
  }
];

// Extract groups for each composition
compositions.forEach(comp => {
  const groups: string[] = [];

  // Find all groups within the y-range
  const groupRegex = /<g\s+id="([^"]*)"[^>]*>/g;
  let match;

  let content = svgContent;
  let groupStack: string[] = [];
  let currentY = 0;

  // Parse and extract groups
  const lines = svgContent.split('\n');
  let capturing = false;
  let capturedContent: string[] = [];
  let depth = 0;

  lines.forEach(line => {
    // Check for transform with y-coordinate
    const transformMatch = line.match(/transform="[^"]*\(([^)]*)\)"/);
    if (transformMatch) {
      const coords = transformMatch[1].split(',');
      if (coords.length >= 6) {
        const y = parseFloat(coords[5]);
        if (comp.xRange) {
          const x = parseFloat(coords[4]);
          if (y >= comp.yRange[0] && y <= comp.yRange[1] &&
              x >= comp.xRange[0] && x <= comp.xRange[1]) {
            capturing = true;
          }
        } else if (y >= comp.yRange[0] && y <= comp.yRange[1]) {
          capturing = true;
        }
      }
    }

    if (capturing) {
      capturedContent.push(line);
      if (line.includes('<g')) depth++;
      if (line.includes('</g>')) {
        depth--;
        if (depth === 0) capturing = false;
      }
    }
  });

  if (capturedContent.length > 0) {
    const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="${width}"
   height="${height}"
   viewBox="${viewBox}"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg">
  <title>${comp.description}</title>
  ${capturedContent.join('\n')}
</svg>`;

    const outputPath = join(outputDir, `${comp.name}.svg`);
    writeFileSync(outputPath, svg, 'utf-8');
    console.log(`✓ Created: ${comp.name}.svg - ${comp.description}`);
  }
});

console.log('\n✅ Logo extraction complete!');
