const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
    './public/images/cities',
    './public/images/services',
    './public/images/blog',
    './public/images/gallery',
];

async function convertImagesToWebP() {
    let totalConverted = 0;
    let totalSavings = 0;

    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            console.log(`Skipping ${dir} - does not exist`);
            continue;
        }

        const files = fs.readdirSync(dir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();

            if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
                continue;
            }

            const inputPath = path.join(dir, file);
            const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            // Skip if WebP already exists
            if (fs.existsSync(outputPath)) {
                console.log(`✓ ${outputPath} already exists`);
                continue;
            }

            const inputStats = fs.statSync(inputPath);
            const inputSize = inputStats.size;

            await sharp(inputPath)
                .webp({ quality: 80, effort: 6 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSize = outputStats.size;
            const savings = inputSize - outputSize;
            const savingsPercent = ((savings / inputSize) * 100).toFixed(1);

            totalConverted++;
            totalSavings += savings;

            console.log(`✅ ${file} → ${path.basename(outputPath)}`);
            console.log(`   ${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB (${savingsPercent}% smaller)\n`);
        }
    }

    console.log(`\n=== CONVERSION COMPLETE ===`);
    console.log(`Total images converted: ${totalConverted}`);
    console.log(`Total space saved: ${(totalSavings / 1024 / 1024).toFixed(2)}MB`);
}

convertImagesToWebP().catch(console.error);
