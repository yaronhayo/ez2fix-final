import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process
const imageDir = path.join(__dirname, '../public/images');

// Walk directory recursively
function walkDir(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...walkDir(fullPath));
        } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
            files.push(fullPath);
        }
    });

    return files;
}

async function convertToWebP() {
    const images = walkDir(imageDir);
    console.log(`Found ${images.length} images to convert...`);

    for (const imagePath of images) {
        const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

        // Skip if WebP already exists
        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Skipping (WebP exists): ${path.basename(imagePath)}`);
            continue;
        }

        try {
            await sharp(imagePath)
                .webp({ quality: 85, effort: 6 })
                .toFile(outputPath);

            const originalSize = fs.statSync(imagePath).size;
            const newSize = fs.statSync(outputPath).size;
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            console.log(`✅ Converted: ${path.basename(imagePath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
        } catch (error) {
            console.error(`❌ Error converting ${imagePath}:`, error.message);
        }
    }

    console.log('\\n✨ Image conversion complete!');
}

convertToWebP();
