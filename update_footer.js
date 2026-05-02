const fs = require('fs');
const path = require('path');

const dir = 'public';
const files = ['collections.html', 'men.html', 'running.html', 'women.html'];

const signatureHTML = `        <div class="flex flex-col md:items-end items-center mt-4 md:mt-0 gap-4">
          <p class="font-satoshi text-[12px] text-[#1E1E1E]">© 2026 WHITE FOX SE · 🇮🇳 India</p>
          
          <!-- Premium Studio Signature -->
          <div class="group flex items-end gap-3 mt-4 md:mt-0 cursor-pointer">
            <!-- Monogram Circle -->
            <div class="w-8 h-8 rounded-full border border-[#222] flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors duration-500">
               <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)]"></div>
               <span class="font-anton text-[12px] text-[#666] relative z-10 group-hover:text-black transition-colors duration-500">R</span>
            </div>
            
            <div class="flex flex-col pb-0.5">
              <!-- Brand Tagline -->
              <span class="font-satoshi text-[7px] text-[#444] uppercase tracking-[0.5em] mb-0.5 group-hover:text-brand-blue transition-colors duration-500">THE PREDATOR PROTOCOL</span>
              
              <!-- Staggered Ripple Wave Animation -->
              <div class="flex overflow-hidden h-[14px] tracking-[0.15em]">
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[0ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">R</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">R</span>
                </div>
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[30ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">O</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">O</span>
                </div>
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[60ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">C</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">C</span>
                </div>
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[90ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">K</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">K</span>
                </div>
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[120ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">E</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">E</span>
                </div>
                <div class="flex flex-col group-hover:-translate-y-[14px] transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] delay-[150ms]">
                  <span class="font-anton text-[14px] text-[#666] uppercase leading-none h-[14px] flex items-center">R</span>
                  <span class="font-anton text-[14px] text-white uppercase leading-none h-[14px] flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('Premium Studio Signature')) {
    html = html.replace(/<p class="font-satoshi text-\[12px\] text-\[#1E1E1E\]">© 2026 WHITE FOX SE · 🇮🇳 India<\/p>/g, signatureHTML);
    fs.writeFileSync(filePath, html);
    console.log('Added to', file);
  } else {
    console.log('Already exists in', file);
  }
});
