const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove Tailwind CDN and config, replace with styles.css
    const tailwindCdnRegex = /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>/;
    if (tailwindCdnRegex.test(content)) {
        content = content.replace(tailwindCdnRegex, '<link rel="stylesheet" href="./css/styles.css">');
    } else {
        // Fallback if config is missing
        content = content.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '<link rel="stylesheet" href="./css/styles.css">');
    }

    // 2. Preload first frame in index.html
    if (file === 'index.html') {
        if (!content.includes('rel="preload" as="image" href="./assets/frames/ezgif-frame-001.jpg"')) {
            content = content.replace(
                '<link rel="stylesheet" href="./css/styles.css">',
                '<link rel="preload" as="image" href="./assets/frames/ezgif-frame-001.jpg">\n  <link rel="stylesheet" href="./css/styles.css">'
            );
        }
    }

    // 3. Lazy load all images (except those that already have loading="lazy")
    content = content.replace(/<img\s+(?!.*?loading="lazy")(.*?src=".*?".*?)>/gi, '<img loading="lazy" $1>');

    // 4. Defer gsap and lenis
    content = content.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com.*?gsap\.min\.js"><\/script>/g, '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>');
    content = content.replace(/<script src="https:\/\/cdnjs\.cloudflare\.com.*?ScrollTrigger\.min\.js"><\/script>/g, '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>');
    content = content.replace(/<script src="https:\/\/unpkg\.com\/lenis.*?lenis\.min\.js"><\/script>/g, '<script defer src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Optimized ${file}`);
}
