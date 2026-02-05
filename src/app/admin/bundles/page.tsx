import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Edit, Plus } from 'lucide-react';
import { DeleteBundleButton } from './DeleteButton';

export default async function BundlesAdminPage() {
    const bundles = await prisma.bundle.findMany({
        orderBy: { createdAt: 'desc' },
        include: { _count: { select: { books: true } } }
    });

    return (
        <div>
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2 font-serif italic">Curriculum Core</h1>
                    <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Manage Academic Modules</p>
                </div>
                <Link href="/admin/bundles/new" className="flex items-center gap-3 px-6 py-3 bg-primary border border-primary/50 text-white rounded-2xl text-sm font-bold hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_var(--primary-glow)]">
                    <Plus size={20} />
                    <span className="tracking-widest uppercase text-[10px]">Initialize Bundle</span>
                </Link>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-white/60 overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                <div className="overflow-x-auto relative z-10">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-200/60">
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Module Identity</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Target Grade</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Content Mass</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-right">Protocols</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {bundles.map((bundle) => (
                                <tr key={bundle.id} className="group hover:bg-white/80 transition-all duration-300">
                                    <td className="p-8">
                                        <div className="font-black text-slate-900 text-2xl tracking-tight group-hover:text-primary transition-colors font-serif italic">{bundle.title}</div>
                                        <div className="text-[10px] font-mono text-slate-400 mt-1">{bundle.id}</div>
                                    </td>
                                    <td className="p-8">
                                        <span className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            {bundle.grade}
                                        </span>
                                    </td>
                                    <td className="p-8 text-slate-500 font-bold">
                                        {bundle._count.books} <span className="text-slate-400 text-xs uppercase tracking-widest pl-2">Books</span>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex gap-3 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Link href={`/admin/bundles/${bundle.id}/edit`} className="p-3 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all border border-transparent hover:border-primary/20">
                                                <Edit size={18} />
                                            </Link>
                                            <DeleteBundleButton id={bundle.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {bundles.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-32 text-center text-slate-500">
                                        No active modules found. Initialize a new sequence.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
