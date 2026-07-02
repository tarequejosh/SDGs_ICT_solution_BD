const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Update totalSlides variable
html = html.replace('const totalSlides = 17;', 'const totalSlides = 18;');

// Update slide numbers "XX / 17" to "XX / 18"
html = html.replace(/\/ 17/g, '/ 18');

// Insert new slide 2
const newSlide2 = `
        <!-- SLIDE 02 (Venezuela Hook) -->
        <section class="snap-section w-full bg-black dark-bg" id="slide-2">
            <div class="flex flex-col md:flex-row h-full w-full">
                <div class="w-full md:w-1/2 h-full relative">
                    <img src="images/venezuela_earthquake_news_1782951034626.jpg" alt="Venezuela News" class="absolute inset-0 w-full h-full object-cover filter grayscale opacity-70">
                    <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent md:bg-gradient-to-l md:from-[#0A0A0A] md:via-transparent md:to-transparent z-10"></div>
                </div>
                <div class="w-full md:w-1/2 h-full flex flex-col justify-center px-12 md:px-24 bg-[#0A0A0A] relative z-20 fade-in-up">
                    <h2 class="text-6xl md:text-8xl font-playfair font-bold text-white leading-tight mb-8">Venezuela.</h2>
                    <p class="text-2xl text-gray-400 font-light mb-8">A massive earthquake strikes. Buildings crumble into rubble.</p>
                    <div class="w-24 h-[2px] bg-[#F97316] mb-8"></div>
                    <p class="text-4xl md:text-5xl font-playfair italic text-white leading-tight">"But the phones<br>stayed silent."</p>
                </div>
            </div>
            <div class="slide-number">02 / 18</div>
        </section>
`;

// Shift existing slide IDs up by 1 starting from 17 down to 2
for (let i = 17; i >= 2; i--) {
    html = html.replace(`id="slide-${i}"`, `id="slide-${i+1}"`);
    let oldNumStr = i.toString().padStart(2, '0');
    let newNumStr = (i+1).toString().padStart(2, '0');
    // Also replace the slide-number text inside the div
    html = html.replace(`<div class="slide-number">${oldNumStr} / 18</div>`, `<div class="slide-number">${newNumStr} / 18</div>`);
    // And comment headers <!-- SLIDE XX -->
    html = html.replace(`<!-- SLIDE ${oldNumStr}`, `<!-- SLIDE ${newNumStr}`);
}

// Now insert slide 2 right before slide 3 (which was originally slide 2)
html = html.replace('<!-- SLIDE 03', newSlide2 + '\n        <!-- SLIDE 03');

fs.writeFileSync('index.html', html);
console.log('Updated index.html successfully.');
