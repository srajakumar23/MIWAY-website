import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Edit3, CheckCircle2, Sparkles, BookOpen, Send, FileText, Share2, Users, ArrowRight, ArrowUpRight, Zap, Globe } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

import { getPageContent } from '@/lib/content';

export default async function PublishPage() {
    const content = await getPageContent('publish_');
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Executive Style */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['publish_hero_image'] || "/publish-hero.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/90" />

                <div className="container relative z-10">
                    <div className="relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <FadeIn>
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full mb-12 shadow-2xl shadow-primary/10 border border-white/60 ring-1 ring-white/50">
                                    <span className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">{content['publish_hero_label'] || 'Partner with MIWAY'}</span>
                                </div>
                                <h1 className="text-[5rem] lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['publish_hero_title'] || 'Publish Your <br /> <span class="gradient-text font-serif italic pr-4">Vision.</span>' }} />
                                <p className="text-3xl text-slate-600 font-medium mb-12 leading-relaxed max-w-2xl mx-auto opacity-90 font-serif italic" dangerouslySetInnerHTML={{ __html: content['publish_hero_desc'] || 'Join the elite circle of educators shaping the next generation of <span class="text-primary font-bold italic">neuroscience-based</span> learning.' }} />
                                <div className="flex flex-wrap gap-6 justify-center">
                                    <Link href="/contact?subject=publication">
                                        <Button size="lg" className="bg-primary text-white shadow-2xl hover:scale-105 transition-all px-12 py-8 text-xl font-black rounded-full" icon={<Send size={24} />}>
                                            Submit Proposal
                                        </Button>
                                    </Link>
                                    <Button variant="secondary" size="lg" className="px-12 py-8 text-xl font-black rounded-full bg-white/50 backdrop-blur-md border border-white hover:bg-white/80 transition-all text-slate-700" icon={<FileText size={20} />}>
                                        Guidelines
                                    </Button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-12">{content['publish_standard_label'] || 'Quality Standard'}</h3>
                    <div className="space-y-12">
                        {[1, 2, 3].map((num, i) => {
                            const icons = [Sparkles, CheckCircle2, Share2];
                            const colors = ['text-[#f9b233]', 'text-[#76bc21]', 'text-[#0088cc]'];
                            const Icon = icons[i];
                            return (
                                <div key={i} className="flex gap-8 items-start group/item">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shrink-0 group-hover/item:scale-110 transition-transform duration-500 shadow-sm">
                                        <Icon size={28} className={colors[i]} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 mb-2 tracking-tight text-xl font-serif italic">
                                            {content[`publish_standard_${num}_title`] || 'Standard Title'}
                                        </h4>
                                        <p className="text-slate-500 font-medium text-base leading-relaxed opacity-90">
                                            {content[`publish_standard_${num}_desc`] || 'Standard description goes here.'}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Collaborative Process - Global Grid */}
            < section className="py-40 bg-slate-50 relative overflow-hidden" >
                <div className="container relative z-10">
                    <FadeIn>
                        <div className="max-w-2xl mb-24">
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6">{content['publish_process_label'] || 'The Journey'}</h2>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: content['publish_process_title'] || 'The Collaborative <br /><span class="font-serif italic text-primary">Pipeline.</span>' }} />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((num, i) => {
                            const icons = [Edit3, Users, Sparkles, Globe];
                            const colors = ['from-[#ed1c24] to-[#f9b233]', 'from-[#662d91] to-[#0088cc]', 'from-[#76bc21] to-[#0088cc]', 'from-[#ed1c24] to-[#662d91]'];
                            const Icon = icons[i];
                            const step = `0${num}`;

                            return (
                                <FadeIn key={i} delay={0.1 * i} className="group h-full">
                                    <div className="bg-white p-12 rounded-[3.5rem] h-full border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col">
                                        <div className="text-9xl font-black text-slate-50 absolute -right-6 -top-12 select-none group-hover:text-primary/5 transition-colors leading-none pointer-events-none">
                                            {step}
                                        </div>
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-12 group-hover:scale-110 transition-transform border border-slate-100 shadow-sm transform group-hover:rotate-6 duration-500">
                                                <Icon size={32} />
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight font-serif italic">
                                                {content[`publish_step_${num}_title`] || 'Step Title'}
                                            </h3>
                                            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8 opacity-90">
                                                {content[`publish_step_${num}_desc`] || 'Step description.'}
                                            </p>

                                            <div className="mt-auto pt-8 flex items-center justify-between">
                                                <div className={`h-1 w-12 bg-gradient-to-r ${colors[i]} rounded-full`} />
                                                <ArrowUpRight className="text-slate-200 group-hover:text-primary transition-colors" size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section >

            {/* Final CTA */}
            < section className="py-40 bg-white" >
                <div className="container">
                    <FadeIn>
                        <div className="bg-white rounded-[6rem] p-32 text-center relative overflow-hidden group shadow-2xl border border-slate-200/60">
                            <div className="absolute inset-0 opacity-60 mesh-bg-primary" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-white/80 opacity-60 group-hover:scale-110 transition-transform duration-[2s]" />
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <BookOpen className="mx-auto mb-16 text-primary animate-pulse" size={100} />
                                <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-16 tracking-tighter leading-none italic font-serif" dangerouslySetInnerHTML={{ __html: content['publish_cta_title'] || 'Author the <br /> Future.' }} />
                                <p className="text-2xl text-slate-600 font-medium mb-16 leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: (content['publish_cta_desc'] || 'We provide the resources, the platform, and the global audience. <span class="text-primary font-bold">You provide the vision.</span>').replace('text-white', 'text-primary') }} />
                                <Link href="/contact?subject=publication">
                                    <Button size="lg" className="bg-slate-900 text-white shadow-2xl hover:scale-105 transition-all px-20 py-10 text-3xl font-black rounded-full" icon={<ArrowRight size={36} />}>
                                        Submit Proposal
                                    </Button>
                                </Link>
                                <div className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-60">
                                    {['Global Distribution', 'Expert Mentorship', 'Royalty Models'].map(feat => (
                                        <span key={feat} className="text-[10px] font-black text-slate-400 tracking-[0.5em] uppercase whitespace-nowrap">{feat}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section >
        </div >
    );
}
