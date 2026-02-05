'use client';

import Button from '@/components/ui/Button';
import { createBundle } from '@/lib/actions';
import { ArrowLeft, Box } from 'lucide-react';
import Link from 'next/link';

export default function NewBundlePage() {
    return (
        <div className="max-w-4xl mx-auto pb-20">
            <div className="mb-10">
                <Link href="/admin/bundles" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Abort & Return</span>
                </Link>
                <h1 className="text-5xl font-black text-white tracking-tighter mb-2 font-serif italic">Initialize Sequence</h1>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Create New Curriculum Module</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                <form action={createBundle} className="space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Module Identity</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-bold tracking-tight"
                                    placeholder="e.g. Primary Foundation Kit"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-primary transition-colors">
                                    <Box size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Target Sector</label>
                            <div className="relative">
                                <select
                                    name="grade"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-bold appearance-none cursor-pointer hover:bg-white/10"
                                >
                                    <option value="" className="bg-slate-900 text-slate-500">Select Grade Sector</option>
                                    <option value="Nursey - KG" className="bg-slate-900">Preschool (Nursery - KG)</option>
                                    <option value="Grades 1-5" className="bg-slate-900">Primary (Grades 1-5)</option>
                                    <option value="Grades 6-8" className="bg-slate-900">Middle School (Grades 6-8)</option>
                                    <option value="Grades 9-10" className="bg-slate-900">High School (Grades 9-10)</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                            Core Components <span className="text-slate-600 normal-case tracking-normal">(Comma separated)</span>
                        </label>
                        <input
                            type="text"
                            name="subjects"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-mono text-sm"
                            placeholder="English, Maths, Science"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                            Technical Specifications <span className="text-slate-600 normal-case tracking-normal">(One per line)</span>
                        </label>
                        <textarea
                            name="features"
                            rows={5}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-mono text-sm"
                            placeholder="Interactive Textbook&#10;Workbook included&#10;Digital Access Code"
                        ></textarea>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-6">
                        <Link href="/admin/bundles" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                            Cancel
                        </Link>
                        <Button type="submit" variant="primary" className="shadow-[0_0_30px_var(--primary-glow)] hover:scale-105 transition-transform">
                            Execute Creation
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
