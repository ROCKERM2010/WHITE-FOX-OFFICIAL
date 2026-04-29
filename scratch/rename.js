const fs = require('fs');
const path = require('path');
const publicDir = path.join(__dirname, '../public');

const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));
for (const file of files) {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/ARCTIC FOX/g, 'WHITE FOX');
  content = content.replace(/Arctic Fox/g, 'White Fox');
  content = content.replace(/arctic fox/g, 'white fox');
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Renamed successfully in HTML files.");

// Also update gen.js so any future regenerations use White Fox
const genJsPath = path.join(__dirname, 'gen.js');
if (fs.existsSync(genJsPath)) {
  let genContent = fs.readFileSync(genJsPath, 'utf8');
  genContent = genContent.replace(/ARCTIC FOX/g, 'WHITE FOX');
  genContent = genContent.replace(/Arctic Fox/g, 'White Fox');
  genContent = genContent.replace(/arctic fox/g, 'white fox');
  fs.writeFileSync(genJsPath, genContent, 'utf8');
  console.log("Renamed successfully in gen.js.");
}
