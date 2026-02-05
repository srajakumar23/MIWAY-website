import { getPageContent } from '@/lib/content';
import HomeClient from './HomeClient';

export default async function Home() {
    const content = await getPageContent('home_');

    return <HomeClient content={content} />;
}
