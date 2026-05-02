const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = ['index.html', 'stories.html', 'collections.html', 'men.html', 'running.html', 'women.html'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  
  // Replace the old ones with the emoji or without the span
  html = html.replace(/<p class="font-satoshi text-\[12px\] text-\[#1E1E1E\]">© 2026 WHITE FOX SE · 🇮🇳 India<\/p>/g, '<p class="font-satoshi text-[12px] text-[#1E1E1E]">© 2026 WHITE FOX SE · <span class="text-[10px] uppercase font-medium">IN</span> India</p>');
  
  fs.writeFileSync(filePath, html);
});
console.log("Updated copyright style across all pages.");
