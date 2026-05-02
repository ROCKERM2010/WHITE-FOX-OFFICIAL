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
  const targetRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-\\[#F5F5F5\\] flex items-center justify-center overflow-hidden">[ \\t\\n]*<img src="${p.img}" alt="${p.alt}"[ \\t\\n]*class="clip-reveal-img w-\\[70%\\] transition-transform duration-\\[400ms\\] ease-spring group-hover:scale-\\[1.06\\] award-glow"[ \\t\\n]*onerror="this\\.outerHTML='<div class=\\'shoe-fallback group-hover:scale-\\[1\\.06\\] transition-transform duration-\\[400ms\\]\\'>${p.alt}</div>'">[ \\t\\n]*</div>`);
  
  const replacement = `        <div class="h-[58vh] min-h-[340px] bg-white flex flex-col justify-center px-[8%] py-8 border-b border-hairline group-hover:bg-[#fafafa] transition-colors duration-500">
          <!-- Architectural Dossier Frame -->
          <div class="border border-hairline bg-white p-3 relative shadow-sm group-hover:shadow-xl transition-shadow duration-500 w-full">
            <!-- Corner Accents -->
            <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-blue/50"></div>
            <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-blue/50"></div>
            <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-blue/50"></div>
            <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-blue/50"></div>

            <!-- Header Metadata Bar -->
            <div class="flex justify-between items-center mb-3 px-2 pt-1 border-b border-hairline/30 pb-2">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse"></div>
                <span class="font-oswald text-[7px] text-brand-blue tracking-[0.3em] uppercase font-bold">WF_ELITE // ${p.id}</span>
              </div>
              <span class="font-oswald text-[7px] text-text-faint tracking-[0.2em] uppercase">SYS_SCAN</span>
            </div>

            <!-- The Image Container -->
            <div class="relative overflow-hidden bg-white border border-hairline/50 p-2 flex justify-center items-center h-[180px] md:h-[220px]">
              <img src="${p.img}" alt="${p.alt}"
                class="clip-reveal-img w-[80%] max-h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 award-glow"
                onerror="this.outerHTML='<div class=\\'shoe-fallback group-hover:scale-110 transition-transform duration-700\\'>${p.alt}</div>'">
              
              <!-- Scanning Line Overlay -->
              <div class="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/10 z-20 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            </div>
          </div>
        </div>`;
        
  html = html.replace(targetRegex, replacement);
});

fs.writeFileSync('public/index.html', html);
console.log("Updated frames for all 6 products.");
