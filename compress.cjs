const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

async function compressImage() {
  try {
    if (fs.existsSync(inputPath)) {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Compressed ${inputPath} to ${outputPath}`);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  } catch (err) {
    console.error('Error compressing image:', err);
  }
}

compressImage();
