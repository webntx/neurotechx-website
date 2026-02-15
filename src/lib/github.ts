
const GITHUB_API_BASE = 'https://api.github.com';

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    topics: string[];
    owner: {
        login: string;
        avatar_url: string;
    };
    updated_at: string;
}

// Map of manual overrides or specific project IDs if needed
const FEATURED_PROJECTS = [
    'NeuroTechX/moabb',
    'NeuroTechX/eeg-expy',
    'cbrnr/mnelab',
    'fooof-tools/specparam',
    'simnibs/simnibs',
    'ProteusMRIgHIFU/BabelBrain',
    'OHBA-analysis/osl-dynamics', // OSL Tools
    'OHBA-analysis/osl-ephys',
    'brainiak/rt-cloud',
];

async function fetchGitHub(endpoint: string) {
    const res = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            // Add authentication if available in env to increase rate limit
            ...(process.env.GITHUB_TOKEN ? { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } : {})
        },
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function getFeaturedProjects(): Promise<GitHubRepo[]> {
    const promises = FEATURED_PROJECTS.map(async (slug) => {
        try {
            return await fetchGitHub(`/repos/${slug}`);
        } catch (e) {
            console.error(`Failed to fetch repo ${slug}:`, e);
            return null;
        }
    });

    const results = await Promise.all(promises);
    return results.filter((repo): repo is GitHubRepo => repo !== null);
}

export async function getCommunityProjects(): Promise<GitHubRepo[]> {
    try {
        // Search for repositories with topic 'neurotechx'
        // Sort by stars to show most popular first
        const data = await fetchGitHub('/search/repositories?q=topic:neurotechx&sort=stars&order=desc&per_page=30');
        return data.items || [];
    } catch (e) {
        console.error("Failed to fetch community projects:", e);
        return [];
    }
}
