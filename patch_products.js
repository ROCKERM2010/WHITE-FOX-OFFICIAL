const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject steel and nomad entries into PRODUCTS object
  content = content.replace(
    /'eclipse': \{ id: 'eclipse', name: 'CRIMSON ECLIPSE SHIFT', color: 'Crimson Red \/ Gunmetal', price: 16999, img: '\.\/images\/shoe_eclipse\.jpg' \}/g,
    `'eclipse': { id: 'eclipse', name: 'CRIMSON ECLIPSE SHIFT', color: 'Crimson Red / Gunmetal', price: 16999, img: './images/shoe_eclipse.jpg' },
          'steel': { id: 'steel', name: 'URBAN STEEL', color: 'Stealth Black / Gunmetal', price: 17499, img: './images/detailed_side_profile.jpg' },
          'nomad': { id: 'nomad', name: 'GLACIER ALPINE NOMAD', color: 'Arctic Blue / Snow White', price: 18499, img: './images/shoe_terra.jpg' }`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated PRODUCTS mapping for: ${file}`);
});
