const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove defer from GSAP, ScrollTrigger, Lenis
    content = content.replace(/<script defer src="(https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/[^"]+)"><\/script>/g, '<script src="$1"></script>');
    content = content.replace(/<script defer src="(https:\/\/unpkg\.com\/lenis[^"]+)"><\/script>/g, '<script src="$1"></script>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed defer in ${file}`);
}
