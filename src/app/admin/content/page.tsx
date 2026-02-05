import { getAllSiteContent } from '@/lib/actions';
import ContentEditor from './ContentEditorFixed';

export const dynamic = 'force-dynamic';

export default async function ContentManagementPage() {
    const content = await getAllSiteContent();

    return (
        <div className="pb-20">
            <div className="mb-12">
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2 font-serif italic">Global Content Grid</h1>
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Manage Enterprise Data</p>
            </div>

            <ContentEditor initialContent={content} />
        </div>
    );
}
