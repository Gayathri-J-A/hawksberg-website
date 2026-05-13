#!/usr/bin/env node
// Advanced background remover using sharp + flood-fill from edges.
// Usage: node scripts/remove-bg-advanced.js input.jpg output.png [tolerance]

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const argv = process.argv.slice(2);
const input = argv[0] || path.resolve('public/images/secondarylogo.jpg');
const output = argv[1] || path.resolve('public/images/secondarylogo-transparent.png');
const tol = Number(argv[2] ?? 60); // color distance tolerance

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Input file not found:', input);
      process.exit(1);
    }

    const img = sharp(input);
    const metadata = await img.metadata();
    const width = metadata.width;
    const height = metadata.height;
    if (!width || !height) throw new Error('Could not determine image dimensions');

    // Resize larger side to 1200 for high-res output while preserving aspect
    const maxSide = 1200;
    const scale = Math.max(1, Math.min(maxSide / width, maxSide / height));
    const outW = Math.round(width * scale);
    const outH = Math.round(height * scale);

    const { data } = await img
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    // data is raw with channels = metadata.channels (probably 4)
    const channels = metadata.channels || 4;

    // Create a working buffer with RGBA channels
    const total = width * height;
    const rgba = new Uint8ClampedArray(total * 4);
    for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
      rgba[j] = data[i];
      rgba[j + 1] = data[i + 1];
      rgba[j + 2] = data[i + 2];
      rgba[j + 3] = channels === 4 ? data[i + 3] : 255;
    }

    // sample edge pixels to estimate background color
    let sx = 0, sy = 0, sb = 0, count = 0;
    const step = Math.max(1, Math.floor(Math.min(width, height) / 50));
    for (let x = 0; x < width; x += step) {
      for (const y of [0, height - 1]) {
        const idx = (y * width + x) * 4;
        sx += rgba[idx]; sy += rgba[idx + 1]; sb += rgba[idx + 2]; count++;
      }
    }
    for (let y = 0; y < height; y += step) {
      for (const x of [0, width - 1]) {
        const idx = (y * width + x) * 4;
        sx += rgba[idx]; sy += rgba[idx + 1]; sb += rgba[idx + 2]; count++;
      }
    }
    const bgR = sx / count;
    const bgG = sy / count;
    const bgB = sb / count;

    const colorDist = (i) => {
      const dr = rgba[i] - bgR;
      const dg = rgba[i + 1] - bgG;
      const db = rgba[i + 2] - bgB;
      return Math.sqrt(dr * dr + dg * dg + db * db);
    };

    // flood fill from edges for pixels within tolerance
    const visited = new Uint8Array(width * height);
    const queue = [];
    // push edge pixels similar to bg
    for (let x = 0; x < width; x++) {
      for (const y of [0, height - 1]) {
        const idx = y * width + x;
        const i = idx * 4;
        if (visited[idx]) continue;
        if (colorDist(i) <= tol) { visited[idx] = 1; queue.push(idx); }
      }
    }
    for (let y = 0; y < height; y++) {
      for (const x of [0, width - 1]) {
        const idx = y * width + x;
        const i = idx * 4;
        if (visited[idx]) continue;
        if (colorDist(i) <= tol) { visited[idx] = 1; queue.push(idx); }
      }
    }

    while (queue.length) {
      const idx = queue.shift();
      const x = idx % width;
      const y = Math.floor(idx / width);
      const neighbors = [ [x-1,y],[x+1,y],[x,y-1],[x,y+1] ];
      for (const [nx, ny] of neighbors) {
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
        const nidx = ny * width + nx;
        if (visited[nidx]) continue;
        const ni = nidx * 4;
        if (colorDist(ni) <= tol) { visited[nidx] = 1; queue.push(nidx); }
      }
    }

    // set alpha 0 for visited (background) pixels
    for (let p = 0; p < width * height; p++) {
      if (visited[p]) rgba[p * 4 + 3] = 0;
    }

    // write resized high-res PNG preserving alpha
    await sharp(Buffer.from(rgba), { raw: { width, height, channels: 4 } })
      .resize(outW, outH)
      .png({ compressionLevel: 9 })
      .toFile(output);

    console.log('Saved transparent image to', output);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
