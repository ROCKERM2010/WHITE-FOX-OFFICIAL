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
  // We need to match the current HTML which might span multiple lines.
  // It's easier to find the exact block using string replacement.
  
  // Create a regex to find the start of the product card
  const startRegex = new RegExp(`[ \\t]*<div class="h-\\[58vh\\] min-h-\\[340px\\] bg-white flex flex-col justify-center px-\\[8%\\] py-8 border-b border-hairline group-hover:bg-\\[#fafafa\\] transition-colors duration-500">[\\s\\S]*?<!-- Scanning Line Overlay -->[\\s\\S]*?<div class="absolute top-0 left-0 w-full h-\\[1px\\] bg-brand-blue\\/10 z-20 animate-\\[scan_4s_linear_infinite\\] pointer-events-none"><\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>[\\s\\S]*?<\\/div>`);
  
  const replacement = `        <div class="h-[58vh] min-h-[340px] bg-white flex flex-col justify-center px-[6%] py-8 border-b border-hairline relative group overflow-hidden">
          <!-- Background Shimmer Sweep -->
          <div class="absolute top-0 left-[-150%] w-[100%] h-[100%] bg-gradient-to-r from-transparent via-[#F0F0F0]/50 to-transparent skew-x-[-25deg] transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-[150%] z-0 pointer-events-none"></div>
          
          <!-- Titanium Frame Wrapper (1px Gradient Border) -->
          <div class="p-[1px] bg-gradient-to-br from-[#E8E8E8] via-white to-[#C8C8C8] w-full relative z-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1">
            
            <div class="bg-white p-3 relative w-full h-full">
              <!-- Precision Titanium Corners -->
              <div class="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#1A1A1A]"></div>
              <div class="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#1A1A1A]"></div>
              <div class="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#1A1A1A]"></div>
              <div class="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#1A1A1A]"></div>

              <!-- Predator Metadata Bar -->
              <div class="flex justify-between items-center mb-4 px-3 pt-2">
                <div class="flex items-center gap-3">
                  <!-- Predator Laser Dot -->
                  <div class="relative flex items-center justify-center">
                    <div class="absolute w-2.5 h-2.5 bg-red-500 rounded-full animate-ping opacity-60"></div>
                    <div class="w-1.5 h-1.5 bg-red-600 rounded-full relative z-10"></div>
                  </div>
                  <span class="font-oswald text-[8px] text-[#1A1A1A] tracking-[0.4em] uppercase font-bold">WF_ELITE // ${p.id}</span>
                </div>
                <div class="flex gap-1">
                  <div class="w-1 h-1 bg-[#1A1A1A] rounded-full"></div>
                  <div class="w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                  <div class="w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                </div>
              </div>

              <!-- The Museum Image Container -->
              <div class="relative overflow-hidden bg-[#FAFAFA] border border-[#F0F0F0] rounded-sm p-4 flex justify-center items-center h-[170px] md:h-[210px] shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)]">
                <img src="${p.img}" alt="${p.alt}"
                  class="clip-reveal-img w-[85%] max-h-full object-contain transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.12]"
                  onerror="this.outerHTML='<div class=\\'shoe-fallback group-hover:scale-110 transition-transform duration-700\\'>${p.alt}</div>'">
                
                <!-- Laser Scan Line -->
                <div class="absolute top-0 left-0 w-full h-[1px] bg-red-500/30 z-20 animate-[scan_4s_linear_infinite] pointer-events-none shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>`;
  
  // The regex is tricky. Let's just find the block by string matching since we know exactly what we wrote before.
  const oldBlock = `        <div class="h-[58vh] min-h-[340px] bg-white flex flex-col justify-center px-[8%] py-8 border-b border-hairline group-hover:bg-[#fafafa] transition-colors duration-500">
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
        
  html = html.replace(oldBlock, replacement);
});

fs.writeFileSync('public/index.html', html);
console.log("Updated to Premium Titanium Predator Frames.");
