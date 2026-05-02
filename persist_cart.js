const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Persist the cart initialization
  content = content.replace(/let cart\s*=\s*\[\s*\];/g, `let cart = [];
      try {
        const savedCart = localStorage.getItem('white_fox_cart');
        if (savedCart) cart = JSON.parse(savedCart);
      } catch (e) {}`);

  // 2. Add immediate save inside renderCart()
  content = content.replace(/function renderCart\(\)\s*\{/g, `function renderCart() {
        try {
          localStorage.setItem('white_fox_cart', JSON.stringify(cart));
        } catch (e) {}`);

  // 3. Render the saved cart on page load
  content = content.replace(/\}\s*\)\s*\(\s*\)\s*;\s*<\/script>/g, `  if (typeof renderCart === 'function') {
        try {
          renderCart();
        } catch (e) {}
      }
    })();
  </script>`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated cart persistence for: ${file}`);
});
