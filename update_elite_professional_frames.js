const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

const products = [
  { img: './images/shoe_opulent.jpg', alt: 'AURA LUXE RUNNER', id: '01' },
  { img: './images/shoe_detailed.jpg', alt: 'AERO-WEAVE STRATUS', id: '02' },
  { img: './images/shoe_velocity.jpg', alt: 'VELOCITY KINETIC', id: '03' },
  { img: './images/shoe_pulse.jpg', alt: 'DESERT STRIKE HIGH', id: '04' },
  { img: './images/shoe_terra.jpg', alt: 'GLACIER ALPINE NOMAD', id: '05' },
  { img: './images/shoe_eclipse.jpg', alt: 'CRIMSON ECLIPSE SHIFT', id: '06' }
];

products.forEach(p => {
  const specificRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-\\[#F4F4F4\\] flex flex-col justify-center relative group p-6 overflow-hidden">[\\s\\S]*?<img src="${p.img.replace(/\./g, '\\.')}"[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>`);
  
  const replacement = `        <div class="h-[58vh] min-h-[340px] bg-[#F9F9F9] flex flex-col justify-center relative overflow-hidden group border border-[#EEEEEE] transition-all duration-500 hover:border-[#D5D5D5]">
          
          <!-- Subtle professional series tag -->
          <div class="absolute top-6 left-6 z-20 flex items-center gap-2">
            <span class="font-oswald text-[8px] text-[#A6A6A6] tracking-[0.3em] uppercase font-bold">WF_SERIES</span>
            <span class="w-[12px] h-[1px] bg-[#D2D2D2]"></span>
            <span class="font-oswald text-[8px] text-[#111111] tracking-[0.2em] uppercase font-bold">${p.id} // ELITE</span>
          </div>

          <!-- The Image Container -->
          <div class="relative z-10 flex justify-center items-center w-full h-full px-[12%] select-none">
            <img src="${p.img}" alt="${p.alt}"
              class="w-[82%] max-h-full object-contain mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
              onerror="this.outerHTML='<div class=\\'shoe-fallback group-hover:scale-110 transition-transform duration-700\\'>${p.alt}</div>'">
          </div>
        </div>`;
        
  html = html.replace(specificRegex, replacement);
});

fs.writeFileSync('public/index.html', html);
console.log("Updated to high-authority professional gallery frames.");
