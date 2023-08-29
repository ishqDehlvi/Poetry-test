// For Poems

// const fs = require('fs');
// const path = require('path');
// const yaml = require('js-yaml');

// const poemsDirectory = 'poems';
// const poemDirectories = fs.readdirSync(poemsDirectory);

// const mergedData = [];

// for (const poemDir of poemDirectories) {
//     const poemDirPath = path.join(poemsDirectory, poemDir);
//     const yamlFiles = fs.readdirSync(poemDirPath);

//     for (const yamlFile of yamlFiles) {
//         if (yamlFile.endsWith('.yaml')) {
//             const yamlFilePath = path.join(poemDirPath, yamlFile);
//             const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
//             const jsonData = yaml.load(yamlContent);
//             mergedData.push(jsonData);
//         }
//     }
// }

// const outputFilePath = 'merged_output.json';
// fs.writeFileSync(outputFilePath, JSON.stringify(mergedData, null, 2), 'utf8');

// console.log('Merging complete.');


// For lists

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const directoryPath = 'lists';
const yamlFiles = fs.readdirSync(directoryPath).filter(filename => filename.endsWith('.yaml'));

const mergedData = [];

for (const yamlFile of yamlFiles) {
    const yamlFilePath = path.join(directoryPath, yamlFile);
    const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
    const jsonData = yaml.load(yamlContent);
    mergedData.push(jsonData);
}

const outputFilePath = 'merged_output.json';
fs.writeFileSync(outputFilePath, JSON.stringify(mergedData, null, 2), 'utf8');

console.log('Merging complete.');
