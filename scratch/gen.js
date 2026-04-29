const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const indexHtml = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');

const headSplit = indexHtml.split('<main id="main-content"');
const preMain = headSplit[0];
const postMainSplit = headSplit[1].split('</main>');
const postMain = postMainSplit[1];

const buildPage = (filename, mainContent) => {
  const content = preMain + '<main id="main-content" class="opacity-0 transition-opacity duration-500 pt-[120px] pb-20 bg-white min-h-screen">\n' + mainContent + '\n</main>' + postMain;
  fs.writeFileSync(path.join(publicDir, filename), content);
};

const menMain = `
  <section class="px-[5vw] py-20 text-center bg-[#0A0A0A] -mt-[120px] pt-[200px] pb-32">
    <p class="font-oswald text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-4 font-bold">MEN'S COLLECTION</p>
    <h1 class="font-anton text-[clamp(48px,8vw,96px)] text-white uppercase leading-[0.9]">BUILT FOR<br/>THE HUNT.</h1>
  </section>
  <section class="bg-hairline flex flex-wrap gap-[2px]">
    <!-- 6 products mock -->
    \${Array(6).fill(0).map((_, i) => \`
      <article class="product-card bg-white w-full md:w-[calc(50%-1px)] lg:w-[calc(33.333%-1.33px)] group">
        <div class="h-[340px] bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
          <div class="shoe-fallback group-hover:scale-[1.06] transition-transform duration-[400ms]">GLACIER ELITE \${i+1}</div>
        </div>
        <div class="pb-7 pt-7 px-7 relative">
          <p class="font-oswald text-[10px] text-brand-blue tracking-[0.18em] uppercase mb-2">RUNNING</p>
          <h3 class="font-satoshi font-bold text-[19px] text-text-primary mb-1">GLACIER ELITE SPEED</h3>
          <p class="font-satoshi text-[13px] text-text-muted mb-6">Colorway \${i+1}</p>
          <div class="flex justify-between items-center">
            <span class="font-oswald font-bold text-[22px]">₹14,999</span>
            <button class="add-to-cart-btn btn-pill border border-hairline text-text-primary hover:border-brand-blue hover:text-brand-blue !py-[10px] !px-5" data-product-id="\${i%2===0?'midnight':'arctic'}">+ ADD</button>
          </div>
        </div>
      </article>
    \`).join('')}
  </section>
`;

const womenMain = `
  <section class="px-[5vw] py-20 text-center bg-[#0A0A0A] -mt-[120px] pt-[200px] pb-32 relative athlete-fallback" style="background-image: url('./images/athlete_2.png'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10">
      <p class="font-oswald text-[10px] text-brand-blue uppercase tracking-[0.2em] mb-4 font-bold">WOMEN'S COLLECTION</p>
      <h1 class="font-anton text-[clamp(48px,8vw,96px)] text-white uppercase leading-[0.9]">MADE FOR<br/>CHAMPIONS</h1>
    </div>
  </section>
  <section class="bg-hairline flex flex-wrap gap-[2px]">
    \${Array(6).fill(0).map((_, i) => \`
      <article class="product-card bg-white w-full md:w-[calc(50%-1px)] lg:w-[calc(33.333%-1.33px)] group">
        <div class="h-[340px] bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
          <div class="shoe-fallback group-hover:scale-[1.06] transition-transform duration-[400ms]">WOMEN'S GLACIER \${i+1}</div>
        </div>
        <div class="pb-7 pt-7 px-7 relative">
          <p class="font-oswald text-[10px] text-brand-blue tracking-[0.18em] uppercase mb-2">RUNNING</p>
          <h3 class="font-satoshi font-bold text-[19px] text-text-primary mb-1">GLACIER ELITE SPEED W</h3>
          <p class="font-satoshi text-[13px] text-text-muted mb-6">Colorway \${i+1}</p>
          <div class="flex justify-between items-center">
            <span class="font-oswald font-bold text-[22px]">₹14,999</span>
            <button class="add-to-cart-btn btn-pill border border-hairline text-text-primary hover:border-brand-blue hover:text-brand-blue !py-[10px] !px-5" data-product-id="tundra">+ ADD</button>
          </div>
        </div>
      </article>
    \`).join('')}
  </section>
`;

const runningMain = `
  <section class="bg-[#0A0A0A] h-[56px] flex items-center overflow-hidden w-full border-b border-white/10 -mt-[120px] pt-[120px] box-content">
    <div class="flex w-[200%] animate-[marquee_20s_linear_infinite] whitespace-nowrap text-white/80 font-satoshi text-[12px] uppercase tracking-[0.2em]">
      <span class="px-8">CARBON PLATE · GLACIER™ FOAM · 176G · 87% ENERGY RETURN · </span>
      <span class="px-8">CARBON PLATE · GLACIER™ FOAM · 176G · 87% ENERGY RETURN · </span>
      <span class="px-8">CARBON PLATE · GLACIER™ FOAM · 176G · 87% ENERGY RETURN · </span>
    </div>
  </section>
  <section class="px-[5vw] py-20">
    <h2 class="font-anton text-[48px] uppercase mb-8">Race Day</h2>
    <div class="bg-hairline flex flex-wrap gap-[2px]">
      <!-- 2 products -->
      \${Array(2).fill(0).map((_, i) => \`
        <article class="product-card bg-white w-full md:w-[calc(50%-1px)] group">
          <div class="h-[340px] bg-[#F5F5F5] flex items-center justify-center"><div class="shoe-fallback">RACE DAY \${i+1}</div></div>
          <div class="p-7"><h3 class="font-satoshi font-bold text-[19px]">RACE ELITE</h3><button class="add-to-cart-btn btn-pill mt-4 border border-hairline" data-product-id="midnight">+ ADD</button></div>
        </article>
      \`).join('')}
    </div>
  </section>
  <section class="px-[5vw] py-20 bg-[#F5F5F5]">
    <h2 class="font-anton text-[48px] uppercase mb-8">Training</h2>
    <div class="bg-hairline flex flex-wrap gap-[2px]">
      \${Array(2).fill(0).map((_, i) => \`
        <article class="product-card bg-white w-full md:w-[calc(50%-1px)] group">
          <div class="h-[340px] bg-[#F5F5F5] flex items-center justify-center"><div class="shoe-fallback">TRAINING \${i+1}</div></div>
          <div class="p-7"><h3 class="font-satoshi font-bold text-[19px]">DAILY TRAINER</h3><button class="add-to-cart-btn btn-pill mt-4 border border-hairline" data-product-id="arctic">+ ADD</button></div>
        </article>
      \`).join('')}
    </div>
  </section>
`;

const collectionsMain = `
  <section class="h-screen flex items-center justify-center bg-[#0A0A0A] text-center -mt-[120px]">
    <div>
      <h2 class="font-anton text-[72px] text-white uppercase mb-6">Glacier Elite Flagship</h2>
      <a href="running.html" class="btn-pill bg-white text-text-primary">Shop Collection →</a>
    </div>
  </section>
  <section class="h-screen flex items-center justify-center bg-tundra-fallback text-center">
    <div>
      <h2 class="font-anton text-[72px] text-text-primary uppercase mb-6">Tundra Capsule</h2>
      <a href="running.html" class="btn-pill bg-section-dark text-white">Shop Collection →</a>
    </div>
  </section>
  <section class="h-screen flex items-center justify-center bg-[#F5F5F5] text-center">
    <div>
      <h2 class="font-anton text-[72px] text-text-primary uppercase mb-6">Essentials Core</h2>
      <a href="running.html" class="btn-pill border border-hairline text-text-primary">Shop Collection →</a>
    </div>
  </section>
`;

const storiesMain = `
  <section class="px-[20vw] py-32 text-center -mt-[120px] pt-[200px]">
    <h1 class="font-cormorant italic text-[32px] md:text-[48px] text-text-primary leading-tight">
      "The white fox doesn't negotiate with terrain. It doesn't ask permission from gravity. Neither should your next personal best."
    </h1>
  </section>
  <section class="px-[5vw] py-20 bg-[#F5F5F5]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      \${Array(3).fill(0).map((_, i) => \`
        <article class="bg-white p-6 border border-hairline">
          <div class="h-[240px] athlete-fallback mb-6">STORY \${i+1}</div>
          <h3 class="font-anton text-[24px] uppercase mb-4">LINA CHEBET BREAKS RECORD</h3>
          <p class="font-satoshi text-text-muted mb-6">An inside look at the training block that led to the fastest marathon of the year.</p>
          <a href="#" class="font-satoshi font-bold text-[12px] uppercase tracking-wider text-brand-blue">Read Story →</a>
        </article>
      \`).join('')}
    </div>
  </section>
`;

buildPage('men.html', menMain);
buildPage('women.html', womenMain);
buildPage('running.html', runningMain);
buildPage('collections.html', collectionsMain);
buildPage('stories.html', storiesMain);
console.log('Pages generated.');
