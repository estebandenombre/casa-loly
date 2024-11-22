const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const inputDir = path.join(__dirname, "./public");
const outputDir = path.join(__dirname, "./public-optimized");

const processImages = async () => {
    const files = await fs.readdir(inputDir);

    files.forEach(async (file) => {
        const inputFile = path.join(inputDir, file);
        const outputFile = path.join(outputDir, `${path.parse(file).name}.webp`);

        // Ignora los directorios
        if ((await fs.lstat(inputFile)).isDirectory()) return;

        // Convierte a WebP y reduce la calidad al 70%
        sharp(inputFile)
            .webp({ quality: 70 })
            .toFile(outputFile)
            .then(() => {
                console.log(`Optimized: ${file} -> ${outputFile}`);
            })
            .catch((err) => {
                console.error(`Error processing ${file}:`, err);
            });
    });
};

processImages();