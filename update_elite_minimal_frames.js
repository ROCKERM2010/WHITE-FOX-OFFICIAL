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
  // Regex to match the titanium block
  const oldBlockRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-white flex flex-col justify-center px-\\[6%\\] py-8 border-b border-hairline relative group overflow-hidden">[\\s\\S]*?<!-- The Museum Image Container -->[\\s\\S]*?<div class="absolute top-0 left-0 w-full h-\\[1px\\] bg-red-500\\/30 z-20 animate-\\[scan_4s_linear_infinite\\] pointer-events-none shadow-\\[0_0_8px_rgba\\(239,68,68,0\\.5\\)\\]"><\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>`, 'g');
  
  const shortName = p.alt.split(' ')[0];
  
  const replacement = `        <div class="h-[58vh] min-h-[340px] bg-[#F5F5F5] flex flex-col justify-center relative overflow-hidden group">
          
          <!-- Ultra-Minimalist Floating Border -->
          <div class="absolute inset-[3px] border border-[#EBEBEB] opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:inset-[12px] group-hover:border-black/5 z-20 pointer-events-none"></div>
          
          <!-- Very Subtle Metadata -->
          <div class="absolute top-8 left-8 z-20 flex items-center gap-3 opacity-0 -translate-x-4 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-hover:translate-x-0">
            <div class="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full"></div>
            <span class="font-oswald text-[9px] text-[#1A1A1A] tracking-[0.25em] uppercase font-bold">WF_ELITE / ${p.id}</span>
          </div>

          <!-- Product Typography Background -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-[0.04] group-hover:scale-105 pointer-events-none flex justify-center">
            <span class="font-anton text-[clamp(80px,8vw,140px)] leading-none whitespace-nowrap text-[#1A1A1A]">${shortName}</span>
          </div>

          <!-- The Image Container -->
          <div class="relative z-10 flex justify-center items-center w-full h-full px-8">
            <img src="${p.img}" alt="${p.alt}"
              class="w-[70%] max-h-full object-contain mix-blend-multiply transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08] group-hover:-translate-y-1"
              onerror="this.outerHTML='<div class=\\'shoe-fallback group-hover:scale-110 transition-transform duration-700\\'>${p.alt}</div>'">
          </div>
        </div>`;
        
  // Let's replace the block for this product
  // Because the regex matches the whole pattern, we should restrict it to the one containing the product alt text
  
  // We can do it by finding the block that contains the specific image src
  const specificRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-white flex flex-col justify-center px-\\[6%\\] py-8 border-b border-hairline relative group overflow-hidden">[\\s\\S]*?<img src="${p.img.replace(/\./g, '\\.')}"[\\s\\S]*?<!-- Laser Scan Line -->[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>`);
  
  html = html.replace(specificRegex, replacement);
});

fs.writeFileSync('public/index.html', html);
console.log("Updated to Ultra-Minimalist Premium Frames.");
