import { prisma } from '@/lib/prisma';
import { Mail, Phone, Calendar, School, MessageCircle, MoreVertical, Filter, Download, Inbox } from 'lucide-react';

export default async function EnquiriesPage() {
    const enquiries = await prisma.enquiry.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2 font-serif italic">Incoming Signals</h1>
                    <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Encrypted Communication Log</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm hover:shadow-md">
                        <Filter size={18} />
                        <span className="tracking-widest uppercase text-[10px]">Filter</span>
                    </button>
                    <button className="flex items-center gap-3 px-6 py-3 bg-primary border border-primary/50 text-white rounded-2xl text-sm font-bold hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_var(--primary-glow)]">
                        <Download size={18} />
                        <span className="tracking-widest uppercase text-[10px]">Export Data</span>
                    </button>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-white/60 overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                <div className="overflow-x-auto relative z-10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200/60">
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Source Identity</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Contact Vector</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Payload</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Status</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Timestamp</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {enquiries.map((enquiry) => (
                                <tr key={enquiry.id} className="group hover:bg-white/80 transition-all duration-300">
                                    <td className="p-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm group-hover:border-primary/20 group-hover:text-primary group-hover:shadow-md transition-all">
                                                <School size={20} />
                                            </div>
                                            <div>
                                                <div className="font-black text-slate-900 text-lg leading-tight mb-2 tracking-tight group-hover:text-primary transition-colors">{enquiry.school}</div>
                                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                                    {enquiry.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-slate-500 font-medium group-hover:text-slate-800 transition-colors">
                                                <Mail size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                                                {enquiry.email}
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-500 font-medium group-hover:text-slate-800 transition-colors">
                                                <Phone size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                                                {enquiry.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-[250px] group-hover:bg-white group-hover:shadow-sm transition-all">
                                            <MessageCircle size={14} className="text-slate-400 mt-1 flex-shrink-0" />
                                            <span className="leading-relaxed line-clamp-2">{enquiry.message}</span>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex">
                                            <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${enquiry.status === 'NEW'
                                                ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
                                                : 'bg-green-50 text-green-600 border border-green-100 shadow-sm'
                                                }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${enquiry.status === 'NEW' ? 'bg-blue-500' : 'bg-green-500'}`} />
                                                {enquiry.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                            <Calendar size={14} className="text-slate-400" />
                                            {new Date(enquiry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </td>
                                    <td className="p-8 text-right">
                                        <button className="p-3 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {enquiries.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-32 text-center">
                                        <div className="flex flex-col items-center gap-6">
                                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-200">
                                                <Inbox size={32} />
                                            </div>
                                            <div>
                                                <p className="text-slate-900 font-black text-xl tracking-tight mb-2">No Signals Detected</p>
                                                <p className="text-slate-500 text-sm uppercase tracking-widest">Awaiting Transmission</p>
                                            </div>
                                        </div>
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
