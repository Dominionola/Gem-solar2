/**
 * download_images.js
 * Downloads all external Unsplash images used in the project,
 * converts them to WebP at 80% quality, and saves to public/images/.
 * Run with: node download_images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const images = [
  // HeroSection
  {
    url: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2000&auto=format&fit=crop',
    filename: 'hero_solar.webp',
  },
  // ProcessSection step 1 — consultation
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop',
    filename: 'process_consultation.webp',
  },
  // ProcessSection step 2 — home visit
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1400&auto=format&fit=crop',
    filename: 'process_home_visit.webp',
  },
  // ProcessSection step 3 — installation
  {
    url: 'https://images.unsplash.com/photo-1508514177221-188b1c7d1f17?q=80&w=1400&auto=format&fit=crop',
    filename: 'process_installation.webp',
  },
  // ProcessSection step 4 — support
  {
    url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1400&auto=format&fit=crop',
    filename: 'process_support.webp',
  },
];

const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      // Follow redirect if needed
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading and processing images...\n');
  for (const img of images) {
    const finalPath = path.join(OUTPUT_DIR, img.filename);
    
    if (fs.existsSync(finalPath)) {
      console.log(`✓ Already exists, skipping: ${img.filename}`);
      continue;
    }

    const tmpPath = finalPath.replace('.webp', '_tmp.jpg');
    try {
      process.stdout.write(`Downloading: ${img.filename}... `);
      await downloadFile(img.url, tmpPath);
      console.log('done.');

      process.stdout.write(`Converting to WebP: ${img.filename}... `);
      // Use sharp-cli to convert to webp
      execSync(`npx sharp-cli -i "${tmpPath}" -o "${finalPath}" --quality 80`);
      fs.unlinkSync(tmpPath);
      const size = (fs.statSync(finalPath).size / 1024).toFixed(1);
      console.log(`done. (${size} KB)`);
    } catch (err) {
      // If sharp-cli fails (e.g. the url was already webp), just rename
      if (fs.existsSync(tmpPath)) {
        fs.renameSync(tmpPath, finalPath);
        const size = (fs.statSync(finalPath).size / 1024).toFixed(1);
        console.log(`saved as-is. (${size} KB)`);
      } else {
        console.error(`\nError processing ${img.filename}:`, err.message);
      }
    }
  }
  console.log('\nAll done! Images saved to public/images/');
}

run();
