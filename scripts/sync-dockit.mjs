import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';

const REPO_URL = 'https://github.com/NeuroTechX/NTX-dockit.git';
const TEMP_DIR = path.join(process.cwd(), 'temp_dockit_sync');
const CONTENT_DIR = path.join(process.cwd(), 'src/content/dockit');

// Mapping configuration: RST file in repo -> MDX output filename (relative to CONTENT_DIR)
const FILE_MAPPING = {
    'about.rst': 'about.mdx',
    'community-growth.rst': 'community-growth.mdx',
    'chapter-guidelines.rst': 'chapter-guidelines.mdx',
    'resources.rst': 'resources.mdx',
    'getting-started.rst': 'getting-started.mdx',
};

async function syncDockit() {
    console.log('Starting NTX-dockit sync...');

    // 1. Prepare temp directory
    if (fs.existsSync(TEMP_DIR)) {
        fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TEMP_DIR);

    // 2. Clone repository
    console.log(`Cloning ${REPO_URL}...`);
    const git = simpleGit();
    await git.clone(REPO_URL, TEMP_DIR);

    // 3. Prepare content directory
    if (!fs.existsSync(CONTENT_DIR)) {
        fs.mkdirSync(CONTENT_DIR, { recursive: true });
    }

    // 4. Process files
    for (const [rstFile, mdxFile] of Object.entries(FILE_MAPPING)) {
        const rstPath = path.join(TEMP_DIR, rstFile);
        const mdxPath = path.join(CONTENT_DIR, mdxFile);

        if (fs.existsSync(rstPath)) {
            console.log(`Processing ${rstFile} -> ${mdxFile}...`);

            try {
                // Convert using pandoc
                // -f rst (from ReStructuredText)
                // -t gfm (to GitHub Flavored Markdown)
                // --wrap=none (preserve line breaks)
                const pandocCommand = `pandoc "${rstPath}" -f rst -t gfm --wrap=none`;
                const markdownContent = execSync(pandocCommand).toString();

                // Add Frontmatter
                const title = extractTitle(rstFile) || path.basename(mdxFile, '.mdx');
                const frontmatterData = {
                    title: title,
                    sourceUrl: `${REPO_URL.replace('.git', '')}/blob/master/${rstFile}`,
                    updatedAt: new Date().toISOString().split('T')[0],
                };

                const fileContent = matter.stringify(markdownContent, frontmatterData);

                fs.writeFileSync(mdxPath, fileContent);
                console.log(`Saved ${mdxPath}`);
            } catch (error) {
                console.error(`Error processing ${rstFile}:`, error.message);
                if (error.message.includes('pandoc: not found')) {
                    console.error('CRITICAL: Pandoc is required but not found in PATH.');
                    process.exit(1);
                }
            }
        } else {
            console.warn(`Warning: Source file ${rstFile} not found in repo.`);
        }
    }

    // 5. Cleanup
    console.log('Cleaning up...');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    console.log('Sync complete.');
}

function extractTitle(filename) {
    // Simple heuristic: usage map or just prettify filename
    const name = path.basename(filename, path.extname(filename));
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

syncDockit().catch(err => {
    console.error('Sync failed:', err);
    process.exit(1);
});
