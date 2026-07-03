const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update totalSlides to 22
html = html.replace('const totalSlides = 19;', 'const totalSlides = 22;');
html = html.replace(/\/ 19<\/div>/g, '/ 22</div>');

const slide13_ExistingWork = `
        <!-- SLIDE 13 -->
        <section class="snap-section w-full bg-[#1C1C1E] dark-bg flex flex-col justify-center min-h-screen relative" id="slide-13">
            <div class="w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 fade-in-up">
                <h2 class="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 text-center">Existing Approaches</h2>
                <h3 class="text-xl text-[#6B7280] font-light mb-16 text-center">Where current flood monitoring falls short.</h3>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-black/50 border border-gray-800 p-8 rounded-3xl">
                        <div class="text-[#F97316] mb-6">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h4 class="text-2xl font-bold text-white mb-4">Satellite Imagery</h4>
                        <p class="text-gray-400 font-light leading-relaxed">Observations are often delayed by thick cloud cover during monsoons and lack real-time localized ground truth.</p>
                    </div>
                    <div class="bg-black/50 border border-gray-800 p-8 rounded-3xl">
                        <div class="text-[#F97316] mb-6">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h4 class="text-2xl font-bold text-white mb-4">Manual Gauges</h4>
                        <p class="text-gray-400 font-light leading-relaxed">Traditional water gauges rely on manual reading and reporting, causing critical delays in warning dissemination.</p>
                    </div>
                    <div class="bg-black/50 border border-gray-800 p-8 rounded-3xl">
                        <div class="text-[#F97316] mb-6">
                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h4 class="text-2xl font-bold text-white mb-4">Fragmented Logic</h4>
                        <p class="text-gray-400 font-light leading-relaxed">Early warning is disconnected from relief efforts. Alerts do not seamlessly trigger automated funding or logistics.</p>
                    </div>
                </div>
            </div>
            <div class="slide-number">13 / 22</div>
        </section>
`;

const slide15_Methodology = `
        <!-- SLIDE 15 -->
        <section class="snap-section w-full bg-[#0A0A0A] dark-bg flex flex-col justify-center min-h-screen relative" id="slide-15">
            <div class="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 fade-in-up">
                <h2 class="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 text-center">Methodology</h2>
                <h3 class="text-xl text-[#F97316] font-light mb-16 text-center">The IoT and AI data flow.</h3>
                
                <div class="flex justify-center">
                    <img src="images/iot_methodology_diagram_1783064538328.jpg" alt="IoT Methodology Diagram" class="w-full max-w-5xl rounded-3xl shadow-[0_0_50px_rgba(249,115,22,0.15)] border border-gray-800">
                </div>
            </div>
            <div class="slide-number">15 / 22</div>
        </section>
`;

const slide21_References = `
        <!-- SLIDE 21 -->
        <section class="snap-section w-full bg-[#1C1C1E] dark-bg flex flex-col justify-center min-h-screen relative" id="slide-21">
            <div class="w-full max-w-5xl mx-auto px-6 sm:px-12 py-16 fade-in-up">
                <h2 class="text-4xl md:text-6xl font-playfair font-bold text-white mb-12 text-center border-b border-gray-800 pb-8">References & Existing Works</h2>
                
                <div class="space-y-8 text-gray-300 font-light">
                    <div class="flex gap-4">
                        <span class="text-[#F97316] font-bold">[1]</span>
                        <p class="text-lg">Kratzert, F., et al. (2018). "Rainfall–runoff modelling using Long Short-Term Memory (LSTM) networks." <i class="text-gray-400">Hydrology and Earth System Sciences</i>, 22(11), 6005-6022.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-[#F97316] font-bold">[2]</span>
                        <p class="text-lg">Perera, D., et al. (2019). "Challenges and technical advances in flood early warning systems (FEWSs)." <i class="text-gray-400">Water Security</i>.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-[#F97316] font-bold">[3]</span>
                        <p class="text-lg">Basha, E., & Rus, D. (2007). "Design of early warning flood detection systems for developing countries." <i class="text-gray-400">Intl. Conference on Information and Communication Technologies and Development (ICTD)</i>.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-[#F97316] font-bold">[4]</span>
                        <p class="text-lg">IFRC. (2020). "Anticipatory Action: The Forecast-based Financing approach." <i class="text-gray-400">International Federation of Red Cross and Red Crescent Societies</i>.</p>
                    </div>
                </div>
            </div>
            <div class="slide-number">21 / 22</div>
        </section>
`;

// Shift existing slide IDs up correctly.
const shifts = [
    { old: 19, new: 22 },
    { old: 18, new: 20 },
    { old: 17, new: 19 },
    { old: 16, new: 18 },
    { old: 15, new: 17 },
    { old: 14, new: 16 },
    { old: 13, new: 14 }
];

for (const shift of shifts) {
    html = html.replace('id="slide-' + shift.old + '"', 'id="slide-' + shift.new + '"');
    html = html.replace('<!-- SLIDE ' + String(shift.old).padStart(2, '0'), '<!-- SLIDE ' + String(shift.new).padStart(2, '0'));
}

// Now insert Slide 13 before Slide 14
html = html.replace('<!-- SLIDE 14', slide13_ExistingWork + '\\n        <!-- SLIDE 14');

// Insert Slide 15 before Slide 16
html = html.replace('<!-- SLIDE 16', slide15_Methodology + '\\n        <!-- SLIDE 16');

// Insert Slide 21 before Slide 22
html = html.replace('<!-- SLIDE 22', slide21_References + '\\n        <!-- SLIDE 22');

fs.writeFileSync('index.html', html);
console.log('Slides added successfully.');
