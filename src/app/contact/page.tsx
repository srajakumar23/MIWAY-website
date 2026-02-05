import { getPageContent } from '@/lib/content';
import ContactClient from './ContactClient';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
    const content = await getPageContent('contact_');
    return <ContactClient content={content} />;
}
