const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = ['index.html', 'stories.html', 'collections.html', 'men.html', 'running.html', 'women.html'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove the existing copyright paragraph
  const oldCopyright = `<p class="font-satoshi text-[12px] text-[#1E1E1E]">© 2026 WHITE FOX SE · <span class="text-[10px] uppercase font-medium">IN</span> India</p>`;
  
  // Need to account for potential spaces
  html = html.replace(/[ \t]*<p class="font-satoshi text-\[12px\] text-\[#1E1E1E\]">© 2026 WHITE FOX SE · <span class="text-\[10px\] uppercase font-medium">IN<\/span> India<\/p>[ \t]*\n?/g, '');
  
  // 2. Add the centered copyright block right before </footer>
  const newCopyrightBlock = `
    <!-- Centered Bottom Copyright -->
    <div class="w-full py-6 flex justify-center items-center bg-[#070707]">
      <p class="font-satoshi text-[10px] text-[#1E1E1E] tracking-widest">© 2026 WHITE FOX SE · <span class="text-[9px] uppercase font-medium">IN</span> India</p>
    </div>
  </footer>`;
  
  // If it's already there, don't add it again
  if (!html.includes('<!-- Centered Bottom Copyright -->')) {
    html = html.replace(/[ \t]*<\/footer>/, newCopyrightBlock);
  }
  
  fs.writeFileSync(filePath, html);
  console.log('Processed', file);
});
