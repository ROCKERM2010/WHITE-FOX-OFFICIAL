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
  const shortName = p.alt.split(' ')[0];
  
  const replacement = `        <div class="h-[58vh] min-h-[340px] bg-[#F4F4F4] flex flex-col justify-center relative group p-6 overflow-hidden">
          
          <!-- Brutalist Outer Frame -->
          <div class="absolute inset-5 border-[2.5px] border-[#0A0A0A] z-20 pointer-events-none transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[0.96]"></div>
          
          <!-- Brutalist Corner Blocks -->
          <div class="absolute top-5 left-5 w-3.5 h-3.5 bg-[#0A0A0A] z-20 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div class="absolute bottom-5 right-5 w-3.5 h-3.5 bg-[#0A0A0A] z-20 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <!-- Vertical Typography Bar -->
          <div class="absolute top-10 right-[32px] z-20" style="writing-mode: vertical-rl;">
            <span class="font-anton text-[12px] text-[#0A0A0A] tracking-[0.2em] uppercase">NO. ${p.id} // ELITE</span>
          </div>

          <!-- Giant Number Watermark -->
          <div class="absolute left-[-5%] top-[10%] text-[#EAEAEA] font-anton text-[280px] leading-none z-0 select-none transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-8">
            ${p.id}
          </div>

          <!-- Bold Model Name Tab -->
          <div class="absolute bottom-5 left-5 bg-[#0A0A0A] text-white px-3 py-1.5 z-20 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-2 group-hover:translate-y-2">
            <span class="font-oswald text-[9px] tracking-[0.2em] uppercase">${shortName}</span>
          </div>

          <!-- The Image Container -->
          <div class="relative z-10 flex justify-center items-center w-full h-full px-8">
            <img src="${p.img}" alt="${p.alt}"
              class="w-[85%] max-h-full object-contain mix-blend-multiply transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
              onerror="this.outerHTML='<div class=\\'shoe-fallback group-hover:scale-110 transition-transform duration-700\\'>${p.alt}</div>'">
          </div>
        </div>`;
        
  // Need to match the current HTML block exactly
  const specificRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-\\[#F5F5F5\\] flex flex-col justify-center relative overflow-hidden group">[\\s\\S]*?<img src="${p.img.replace(/\./g, '\\.')}"[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>`);
  
  html = html.replace(specificRegex, replacement);
});

fs.writeFileSync('public/index.html', html);
console.log("Updated to Tactical Brutalist Frames.");
