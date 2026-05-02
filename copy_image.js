const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_season_special_1777731301728.png";
const dest = "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_season_special.jpg";

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied new image to shoe_season_special.jpg');
} catch (e) {
  console.error('Error copying file:', e);
}
