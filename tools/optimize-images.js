// Simple image optimization script using sharp
// Usage:
// 1. npm install sharp glob
// 2. node optimize-images.js

const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const srcFolder = path.join(__dirname, '..');
const outFolder = path.join(__dirname, '..', 'optimized');
if (!fs.existsSync(outFolder)) fs.mkdirSync(outFolder);

// Patterns to optimize
const patterns = [
  'planta*.jpg',
  'planta*.png',
  'IMG_*.JPG',
  'IMG_*.jpg',
  'orla*.jpg',
  'orla*.png',
  'logojass.png'
];

(async () => {
  for (const pat of patterns) {
    const files = glob.sync(path.join(srcFolder, pat));
    for (const f of files) {
      const name = path.basename(f, path.extname(f));
      const outWebp = path.join(outFolder, name + '.webp');
      const outJpg = path.join(outFolder, name + '.jpg');
      try {
        await sharp(f)
          .resize({ width: 1600 })
          .jpeg({ quality: 80 })
          .toFile(outJpg);
        await sharp(f)
          .resize({ width: 1200 })
          .webp({ quality: 75 })
          .toFile(outWebp);
        console.log('Optimized:', path.basename(f));
      } catch (err) {
        console.error('Error optimizing', f, err.message);
      }
    }
  }
  console.log('Done. Optimized files are in', outFolder);
})();
