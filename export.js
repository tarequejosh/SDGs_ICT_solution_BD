const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log("Launching puppeteer...");
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        
        // Set viewport to 16:9 like a presentation
        await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
        
        const filePath = 'file://' + path.resolve('presentation.html');
        console.log("Loading page: " + filePath);
        
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Inject CSS for printing to ensure animations don't hide content and sections break properly
        await page.addStyleTag({ content: `
            .fade-in-up { opacity: 1 !important; transform: none !important; transition: none !important; }
            .snap-section { height: 1080px !important; min-height: 1080px !important; page-break-after: always !important; display: flex !important; }
            .nav-dots, .progress-bar, .slide-number { display: none !important; }
            .snap-container { overflow: visible !important; height: auto !important; }
            body { overflow: visible !important; }
        `});
        
        // Let everything render properly
        await new Promise(r => setTimeout(r, 2000));
        
        console.log("Generating PDF...");
        await page.pdf({
            path: 'presentation.pdf',
            printBackground: true,
            width: '1920px',
            height: '1080px',
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            pageRanges: '1-15'
        });
        
        console.log("PDF generated successfully: presentation.pdf");
        await browser.close();
    } catch (e) {
        console.error("Error generating PDF:", e);
    }
})();
