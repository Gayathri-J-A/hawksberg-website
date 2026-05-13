#!/usr/bin/env node
// Simple background remover using sharp by thresholding near-black pixels.
// Usage: node scripts/remove-bg.js [inputPath] [outputPath] [threshold]

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const argv = process.argv.slice(2);
const input = argv[0] || path.resolve('src/assets/main-logo.jpg');
const output = argv[1] || path.resolve('src/assets/main-logo-transparent.png');
const threshold = Number(argv[2] ?? 40); // pixels with all channels <= threshold considered background

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Input file not found:', input);
      process.exit(1);
    }

    const image = sharp(input);
    const meta = await image.metadata();
    const { width, height } = meta;
    if (!width || !height) throw new Error('Could not determine image dimensions');

    const { data } = await image.raw().toBuffer({ resolveWithObject: true });
    const channels = meta.channels || 3;

    // build RGBA buffer
    const outBuffer = Buffer.alloc(width * height * 4);
    for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      outBuffer[j] = r;
      outBuffer[j + 1] = g;
      outBuffer[j + 2] = b;
      // mark transparent if near-black (all channels <= threshold)
      if (r <= threshold && g <= threshold && b <= threshold) {
        outBuffer[j + 3] = 0;
      } else {
        outBuffer[j + 3] = 255;
      }
    }

    await sharp(outBuffer, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(output);

    console.log('Saved transparent image to', output);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
