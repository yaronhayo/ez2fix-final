const fs = require('fs');

const files = [
    { name: 'Mobile (Partytown)', path: './lighthouse-report-mobile-partytown.json' },
    { name: 'Desktop (Partytown)', path: './lighthouse-report-desktop-partytown.json' },
    { name: 'Mobile (Lazy)', path: './lighthouse-report-mobile-lazy.json' },
    { name: 'Mobile (Deep)', path: './lighthouse-report-mobile-deep.json' }
];

files.forEach(file => {
    try {
        if (fs.existsSync(file.path)) {
            const report = JSON.parse(fs.readFileSync(file.path, 'utf8'));
            const categories = report.categories;
            console.log(`\n-- - ${file.name} Scores-- - `);
            console.log(`Performance: ${categories.performance.score * 100} `);
            console.log(`Accessibility: ${categories.accessibility.score * 100} `);
            console.log(`Best Practices: ${categories['best-practices'].score * 100} `);
            console.log(`SEO: ${categories.seo.score * 100} `);

            // Check for failed audits in accessibility
            const failedAudits = Object.values(report.audits).filter(audit => audit.score !== 1 && audit.score !== null);
            if (failedAudits.length > 0) {
                console.log(`\nFailed Audits(${file.name}): `);
                failedAudits.forEach(audit => {
                    console.log(`- ${audit.title}: ${audit.displayValue || ''}`);
                    if (audit.id === 'errors-in-console' && audit.details && audit.details.items) {
                        audit.details.items.forEach(item => {
                            console.log(`  - ${item.source}: ${item.description}`);
                        });
                    }
                });
            }

        } else {
            console.log(`\n${file.name} report not found.`);
        }
    } catch (e) {
        console.error(`Error reading ${file.name} report: `, e.message);
    }
});
