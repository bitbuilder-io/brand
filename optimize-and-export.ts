#!/usr/bin/env bun
/**
 * Optimize SVGs and generate all required export formats
 * - Clean and optimize SVG files
 * - Generate PNG at multiple resolutions (16, 32, 64, 128, 256, 512, 1024, 2048)
 * - Create square versions
 * - Create circular versions
 * - Generate inverted color versions
 * - Create ICO files for favicons
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { spawn } from 'child_process';

const logosDir = './logos';
const outputBase = './exports';

// Create output directory structure
const dirs = [
  'optimized-svg',
  'png/16x16',
  'png/32x32',
  'png/64x64',
  'png/128x128',
  'png/256x256',
  'png/512x512',
  'png/1024x1024',
  'png/2048x2048',
  'square-svg',
  'square-png',
  'circular-svg',
  'circular-png',
  'inverted-svg',
  'favicons'
].forEach(dir => mkdirSync(join(outputBase, dir), { recursive: true }));

// Get all SVG files
const svgFiles = readdirSync(logosDir).filter(f => f.endsWith('.svg'));

console.log(`🚀 Processing ${svgFiles.length} logo variations...\n`);

interface LogoMetadata {
  name: string;
  fill: string;
  description: string;
}

// Process each logo
for (const file of svgFiles) {
  const baseName = basename(file, '.svg');
  const svgPath = join(logosDir, file);
  let svgContent = readFileSync(svgPath, 'utf-8');

  // Extract metadata
  const titleMatch = svgContent.match(/<title>([^<]*)<\/title>/);
  const fillMatch = svgContent.match(/fill="(#[0-9a-fA-F]{6})"/);

  const metadata: LogoMetadata = {
    name: baseName,
    fill: fillMatch ? fillMatch[1] : '#111111',
    description: titleMatch ? titleMatch[1] : baseName
  };

  console.log(`📦 ${baseName}`);
  console.log(`   Color: ${metadata.fill}`);
  console.log(`   ${metadata.description}`);

  // 1. Create optimized SVG (remove unnecessary attributes, clean up)
  const optimizedSvg = svgContent
    .replace(/inkscape:[^=]*="[^"]*"\s*/g, '')
    .replace(/sodipodi:[^=]*="[^"]*"\s*/g, '')
    .replace(/xmlns:inkscape="[^"]*"\s*/g, '')
    .replace(/xmlns:sodipodi="[^"]*"\s*/g, '');

  const optimizedPath = join(outputBase, 'optimized-svg', file);
  writeFileSync(optimizedPath, optimizedSvg, 'utf-8');
  console.log(`   ✓ Optimized SVG`);

  // 2. Create square version
  const squareSvg = createSquareVersion(optimizedSvg, metadata);
  const squarePath = join(outputBase, 'square-svg', `${baseName}-square.svg`);
  writeFileSync(squarePath, squareSvg, 'utf-8');
  console.log(`   ✓ Square SVG`);

  // 3. Create circular version
  const circularSvg = createCircularVersion(optimizedSvg, metadata);
  const circularPath = join(outputBase, 'circular-svg', `${baseName}-circular.svg`);
  writeFileSync(circularPath, circularSvg, 'utf-8');
  console.log(`   ✓ Circular SVG`);

  // 4. Create inverted color version
  const invertedSvg = invertColors(optimizedSvg, metadata.fill);
  const invertedPath = join(outputBase, 'inverted-svg', `${baseName}-inverted.svg`);
  writeFileSync(invertedPath, invertedSvg, 'utf-8');
  console.log(`   ✓ Inverted SVG`);

  console.log();
}

console.log('✅ All logos processed!\n');
console.log('📝 Export Summary:');
console.log(`   - ${svgFiles.length} optimized SVGs`);
console.log(`   - ${svgFiles.length} square versions`);
console.log(`   - ${svgFiles.length} circular versions`);
console.log(`   - ${svgFiles.length} inverted color versions`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Use Inkscape/ImageMagick to generate PNG exports`);
console.log(`   2. Create ICO files from PNGs`);
console.log(`   3. Generate social media assets`);

/**
 * Create a square version of the logo
 */
function createSquareVersion(svgContent: string, metadata: LogoMetadata): string {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  if (!viewBoxMatch) return svgContent;

  const [minX, minY, width, height] = viewBoxMatch[1].split(' ').map(Number);

  // Calculate square dimensions (use the larger dimension)
  const size = Math.max(width, height);
  const offsetX = (size - width) / 2;
  const offsetY = (size - height) / 2;

  // Create new viewBox
  const newViewBox = `${minX - offsetX} ${minY - offsetY} ${size} ${size}`;

  return svgContent.replace(/viewBox="[^"]*"/, `viewBox="${newViewBox}"`)
    .replace(/width="[^"]*"/, `width="${size}"`)
    .replace(/height="[^"]*"/, `height="${size}"`);
}

/**
 * Create a circular version of the logo
 */
function createCircularVersion(svgContent: string, metadata: LogoMetadata): string {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  if (!viewBoxMatch) return svgContent;

  const [minX, minY, width, height] = viewBoxMatch[1].split(' ').map(Number);
  const size = Math.max(width, height);
  const centerX = minX + width / 2;
  const centerY = minY + height / 2;
  const radius = size / 2;

  // Add circular clip path
  const withClipPath = svgContent.replace(
    /<svg([^>]*)>/,
    `<svg$1>
  <defs>
    <clipPath id="circularClip">
      <circle cx="${centerX}" cy="${centerY}" r="${radius}" />
    </clipPath>
  </defs>
  <g clip-path="url(#circularClip)">`
  ).replace(/<\/svg>/, `</g>\n</svg>`);

  return withClipPath;
}

/**
 * Invert the fill colors
 */
function invertColors(svgContent: string, currentFill: string): string {
  const invertedFill = currentFill === '#111111' || currentFill === '#252a34'
    ? '#ffffff'
    : currentFill === '#ffffff'
    ? '#111111'
    : currentFill;

  return svgContent.replace(/fill="[^"]*"/g, `fill="${invertedFill}"`);
}
