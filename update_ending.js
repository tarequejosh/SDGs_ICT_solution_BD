const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Update totalSlides variable
html = html.replace('const totalSlides = 18;', 'const totalSlides = 19;');

// Update slide numbers "XX / 18" to "XX / 19"
html = html.replace(/\/ 18/g, '/ 19');

// Replace the bottom part of slide 18
html = html.replace(
    /<div class="flex-grow bg-white w-full px-6 py-12 flex flex-col justify-center items-center text-center fade-in-up">[\s\S]*?<\/div>\s*<div class="slide-number">18 \/ 19<\/div>\s*<\/section>/,
    `<div class="flex-grow bg-white w-full px-6 py-12 flex flex-col justify-center items-center text-center fade-in-up">
                <h2 class="text-4xl md:text-5xl font-playfair font-bold text-[#1A1A1A] mb-4">A standard for everyone.</h2>
                <p class="text-xl text-[#6B7280] font-light">We brought Japan's standard to Bangladesh's reality.</p>
            </div>
            <div class="slide-number">18 / 19</div>
        </section>

        <!-- SLIDE 19 -->
        <section class="snap-section w-full bg-black dark-bg" id="slide-19">
            <div class="absolute inset-0 z-0">
                <img src="images/hopeful_children_1782943378881.jpg" alt="Hopeful Future" class="w-full h-full object-cover opacity-40">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div class="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center min-h-screen text-center fade-in-up">
                <h2 class="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight mb-12 drop-shadow-2xl">
                    We cannot stop the floods.<br>
                    <span class="text-[#F97316]">But we can stop the dying.</span>
                </h2>
                
                <p class="text-2xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed mb-16 fade-in-up delay-200">
                    If we can prove this works in the most climate-vulnerable country on Earth, we can scale this blueprint globally. We don't just save a nation...
                </p>

                <h3 class="text-4xl md:text-5xl font-playfair italic text-white mb-16 fade-in-up delay-300">
                    "We make the world a better place."
                </h3>
                
                <div class="w-16 h-[2px] bg-[#F97316] mb-12 fade-in-up delay-300"></div>
                
                <p class="text-2xl font-bold text-[#F97316] tracking-widest uppercase fade-in-up delay-300">Thanks for listening.</p>
            </div>
            <div class="slide-number">19 / 19</div>
        </section>`
);

fs.writeFileSync('index.html', html);
console.log('Updated index.html ending successfully.');
