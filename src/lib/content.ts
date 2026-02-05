import { prisma } from './prisma';

/**
 * Get content by key with optional fallback
 */
export async function getContent(key: string, fallback: string = ''): Promise<string> {
    try {
        const content = await prisma.siteContent.findUnique({
            where: { key }
        });
        return content?.content || fallback;
    } catch (error) {
        console.error(`Error fetching content for key: ${key}`, error);
        return fallback;
    }
}

/**
 * Get all content for a page by prefix
 */
export async function getPageContent(prefix: string): Promise<Record<string, string>> {
    try {
        const contents = await prisma.siteContent.findMany({
            where: {
                key: {
                    startsWith: prefix
                }
            }
        });

        return contents.reduce((acc, item) => {
            acc[item.key] = item.content;
            return acc;
        }, {} as Record<string, string>);
    } catch (error) {
        console.error(`Error fetching page content for prefix: ${prefix}`, error);
        return {};
    }
}

/**
 * Get all content grouped by page
 */
export async function getAllContentGrouped(): Promise<Record<string, Record<string, string>>> {
    try {
        const allContent = await prisma.siteContent.findMany({
            orderBy: { key: 'asc' }
        });

        const grouped: Record<string, Record<string, string>> = {};

        allContent.forEach(item => {
            const prefix = item.key.split('_')[0]; // 'home', 'about', etc.
            if (!grouped[prefix]) {
                grouped[prefix] = {};
            }
            grouped[prefix][item.key] = item.content;
        });

        return grouped;
    } catch (error) {
        console.error('Error fetching grouped content', error);
        return {};
    }
}
