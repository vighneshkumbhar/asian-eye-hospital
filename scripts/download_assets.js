const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://www.asianeyehospital.com';

const images = [
  '/images/logo.png',
  '/images/NABH.png',
  '/images/dr-vardhaman1.jpg',
  '/images/dr-shrutika.jpg',
  '/images/dr-prakash2.jpg',
  '/images/Dr-Swapnil-Bhalekar.jpg',
  '/images/dr-nitant-shah.jpg',
  '/images/dr-pritam-bhujbal.jpg',
  '/images/femto-lasik.jpg',
  '/images/images-4.jpg',
  '/images/Diabetic-and-Retina-care.jpg',
  '/images/glucoma.jpg',
  '/images/cornea-implant.jpg',
  '/images/pediatric.jpg',
  '/images/banner_new_images/contoura-vision.jpg',
  '/images/banner/best-eye-hospital.jpg',
  '/images/banner/Top-50-Reseracher.png',
  '/images/banner/Best-Lasik-center-maharashtra.jpg',
  '/images/Anna-Hazare.jpg',
  '/images/Dr-Ioannis-Pallikaris.jpg',
  '/images/Deepak-Shirke.png',
  '/images/Sonalee-Kulkarni.png',
  '/images/Pratibhatai-Patil.png',
  '/images/Image_1.jpg'
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function start() {
  console.log("Starting asset downloads...");
  for (const img of images) {
    const remoteUrl = `${baseUrl}${img}`;
    const localDest = path.join(__dirname, '..', 'public', img.replace(/\//g, path.sep));
    console.log(`Downloading ${remoteUrl} -> ${localDest}`);
    try {
      await download(remoteUrl, localDest);
      console.log(`✓ Downloaded ${img}`);
    } catch (err) {
      console.error(`✗ Failed to download ${img}: ${err.message}`);
    }
  }
  console.log("Done!");
}

start();
