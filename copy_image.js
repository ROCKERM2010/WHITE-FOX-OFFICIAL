const fs = require('fs');
const path = require('path');

const srcDestPairs = [
  { src: "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_velocity_1777733023389.png", dest: "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_velocity.jpg" },
  { src: "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_pulse_1777733044566.png", dest: "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_pulse.jpg" },
  { src: "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_detailed_1777733064489.png", dest: "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_detailed.jpg" },
  { src: "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_opulent_1777733087999.png", dest: "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_opulent.jpg" },
  { src: "C:\\Users\\nmani\\.gemini\\antigravity\\brain\\19a9dc78-dec7-476b-a9f2-b8053d2e0fd9\\shoe_eclipse_1777733109848.png", dest: "d:\\WEBSITES\\WHITE FOX\\public\\images\\shoe_eclipse.jpg" }
];

srcDestPairs.forEach(({ src, dest }) => {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${path.basename(src)} to ${path.basename(dest)}`);
  } catch (e) {
    console.error(`Error copying ${path.basename(src)}:`, e);
  }
});
