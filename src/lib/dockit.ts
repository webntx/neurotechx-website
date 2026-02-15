import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/dockit');

export interface DockitContent {
    slug: string;
    frontmatter: {
        title: string;
        sourceUrl: string;
        updatedAt: string;
        [key: string]: any;
    };
    content: string;
}

export function getDockitContent(slug: string): DockitContent | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        frontmatter: data as DockitContent['frontmatter'],
        content,
    };
}

export function getAllDockitSlugs(): string[] {
    if (!fs.existsSync(CONTENT_DIR)) {
        return [];
    }

    const files = fs.readdirSync(CONTENT_DIR);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', ''));
}
