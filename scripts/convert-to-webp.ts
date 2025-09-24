import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputFolder = './public/img';
const outputFolder = './public/images-webp';

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, `${path.basename(file, ext)}.webp`);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Convertido: ${file} → ${outputPath}`))
      .catch((err) => console.error(`❌ Error con ${file}:`, err));
  }
});
