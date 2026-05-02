const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\women_hunt_bg_1777732205995.png";
const dest = "d:\\WEBSITES\\WHITE FOX\\public\\images\\women_hunt_bg.png";

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied women background image to women_hunt_bg.png');
} catch (e) {
  console.error('Error copying file:', e);
}
