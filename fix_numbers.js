const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

for (let i = 1; i <= 22; i++) {
    const regex = new RegExp(`id="slide-${i}"[\\s\\S]*?<div class="slide-number">.*?</div>`);
    html = html.replace(regex, (match) => {
        return match.replace(/<div class="slide-number">.*?<\/div>/, `<div class="slide-number">${String(i).padStart(2, '0')} / 22</div>`);
    });
}

fs.writeFileSync('index.html', html);
console.log('Fixed slide numbers');
