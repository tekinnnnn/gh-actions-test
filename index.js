// check if the '@jotforminc/dnd-builder' is installed and write it to console and exit
const fs = require('fs');

const dndBuilderPath = 'node_modules/@jotforminc/dnd-builder';
const dndBuilderPackage = 'package.json';

if (!fs.existsSync(dndBuilderPath)) {
    console.log('@jotforminc/dnd-builder is not installed');
    process.exit(1);
}

// read package.json and find it's version
const dndBuilderPackageJson = JSON.parse(fs.readFileSync(`${dndBuilderPath}/${dndBuilderPackage}`, 'utf8'));
console.log(`@jotforminc/dnd-builder is installed. Version: ${dndBuilderPackageJson.version}`);
process.exit(0);