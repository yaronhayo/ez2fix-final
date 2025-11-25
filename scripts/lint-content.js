
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '../src');

const PROHIBITED_TERMS = [
    // Speed/Time Claims
    { term: 'fast', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'quick', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'rapid', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'speedy', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'swift', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'fastest', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'quickest', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'immediate', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'instant', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { term: 'instantaneous', message: 'Avoid speed claims. Use "prompt", "timely", "efficient".' },
    { regex: /within \d+ minutes/i, message: 'Avoid specific time promises unless "subject to availability".' },

    // Pricing Claims
    { term: 'cheapest', message: 'Avoid absolute pricing claims. Use "competitive", "fair".' },
    { term: 'lowest price', message: 'Avoid absolute pricing claims. Use "competitive", "fair".' },
    { term: 'best deal', message: 'Avoid absolute pricing claims. Use "competitive", "fair".' },
    { term: 'guaranteed lowest', message: 'Avoid absolute pricing claims. Use "competitive", "fair".' },
    { term: 'unbeatable prices', message: 'Avoid absolute pricing claims. Use "competitive", "fair".' },
    { regex: /starting at \$\d+/i, message: 'Avoid "starting at" prices without full disclosure.' },

    // Superlatives
    { term: 'best', message: 'Avoid superlatives unless citation-backed.' },
    { term: '#1', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'top-rated', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'leading', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'premier', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'finest', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'most trusted', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'highest quality', message: 'Avoid superlatives unless citation-backed.' },
    { term: 'superior', message: 'Avoid superlatives unless citation-backed.' },

    // Absolute Claims
    { term: 'always', message: 'Avoid absolute claims.' },
    { term: 'never', message: 'Avoid absolute claims.' },
    { term: 'guaranteed', message: 'Avoid "guaranteed" for results. Allowed for warranties.' },
    { term: '100%', message: 'Avoid absolute claims.' },
    { term: 'perfect', message: 'Avoid absolute claims.' },
    { term: 'every time', message: 'Avoid absolute claims.' },
    { term: 'without exception', message: 'Avoid absolute claims.' },
    { term: 'flawless', message: 'Avoid absolute claims.' },
];

// Whitelist for false positives
const WHITELIST = [
    'fast response', // Maybe allowed? Rule says "fast" is prohibited. Let's keep it strict for now.
    '10-year warranty', // Allowed context for "guaranteed" check if we can match context
    'guaranteed results', // Prohibited
];

// Files to ignore
const IGNORE_FILES = [
    'lint-content.js',
    'compliance-findings.md',
];

let errorCount = 0;

function scanFile(filePath) {
    if (IGNORE_FILES.some(f => filePath.endsWith(f))) return;

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        // Skip comments or disabled lines (basic check)
        if (line.includes('lint-disable-next-line')) return;

        PROHIBITED_TERMS.forEach(rule => {
            let match = false;
            if (rule.term) {
                // Case insensitive word boundary check
                const regex = new RegExp(`\\b${rule.term}\\b`, 'i');
                if (regex.test(line)) {
                    match = true;
                }
            } else if (rule.regex) {
                if (rule.regex.test(line)) {
                    match = true;
                }
            }

            if (match) {
                // Check if whitelisted context (very basic)
                // For now, just report it.
                // Exception for "guaranteed" if "warranty" is in the same line
                if (rule.term === 'guaranteed' && line.toLowerCase().includes('warranty')) {
                    return;
                }

                // Exception for "best" if it's "best practices" (common in code/comments)
                if (rule.term === 'best' && line.toLowerCase().includes('best practices')) {
                    return;
                }

                // Exception for Tailwind "leading-" classes
                if (rule.term === 'leading' && (line.includes('leading-') || line.includes('leading-tight') || line.includes('leading-relaxed') || line.includes('leading-normal') || line.includes('leading-loose'))) {
                    return;
                }

                console.error(`[ERROR] ${path.relative(ROOT_DIR, filePath)}:${index + 1} - Found prohibited term: "${rule.term || rule.regex}"`);
                console.error(`        Line: ${line.trim()}`);
                console.error(`        Guidance: ${rule.message}`);
                console.error('');
                errorCount++;
            }
        });
    });
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            traverseDir(fullPath);
        } else {
            if (file.endsWith('.astro') || file.endsWith('.tsx') || file.endsWith('.md') || file.endsWith('.ts')) {
                scanFile(fullPath);
            }
        }
    });
}

console.log('Scanning for prohibited terms...');
traverseDir(ROOT_DIR);

if (errorCount > 0) {
    console.error(`Found ${errorCount} violations.`);
    process.exit(1);
} else {
    console.log('No violations found.');
}
