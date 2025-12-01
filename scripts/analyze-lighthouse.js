import fs from 'fs';

const files = ['lighthouse-desktop.json', 'lighthouse-mobile.json'];

files.forEach(file => {
    try {
        const data = fs.readFileSync(file, 'utf8');
        const report = JSON.parse(data);

        console.log(`\n--- Report: ${file} ---`);
        console.log('Scores:');
        Object.keys(report.categories).forEach(cat => {
            console.log(`  ${report.categories[cat].title}: ${report.categories[cat].score * 100}`);
        });

        console.log('\nFailing Audits (Score < 1):');
        Object.values(report.audits).forEach(audit => {
            if (audit.score !== null && audit.score < 1) {
                console.log(`  [${audit.id}] ${audit.title} (Score: ${audit.score})`);
                // console.log(`    ${audit.description}`);
            }
        });
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});
