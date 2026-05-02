const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\men_hunt_bg_1777731975621.png";
const dest = "d:\\WEBSITES\\WHITE FOX\\public\\images\\men_hunt_bg.png";

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied new background image to men_hunt_bg.png');
} catch (e) {
  console.error('Error copying file:', e);
}
