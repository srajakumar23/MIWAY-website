import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, MapPin, Users, CheckCircle2, Trophy, GraduationCap, ChevronRight, ArrowRight, Heart, Zap, Globe, Sparkles, Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { getPageContent } from '@/lib/content';

export default async function SchoolsPage() {
    const content = await getPageContent('schools_');
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - The Network Elite */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['schools_hero_image'] || "/schools-hero.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/90" />

                <div className="container relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full mb-12 shadow-2xl shadow-primary/10 border border-white/60 ring-1 ring-white/50 mx-auto">
                                <Building2 size={14} className="text-[#662d91]" />
                                <span className="text-[#662d91] font-black text-[11px] uppercase tracking-[0.4em]">{content['schools_hero_label'] || 'Partner Ecosystem'}</span>
                            </div>
                            <h1 className="text-[5rem] lg:text-[10rem] font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['schools_hero_title'] || 'Elite School <br /> <span class="gradient-text font-serif italic pr-4">Network.</span>' }} />
                            <p className="text-3xl text-slate-600 font-medium mb-16 leading-relaxed max-w-3xl opacity-90 font-serif italic mx-auto" dangerouslySetInnerHTML={{ __html: content['schools_hero_desc'] || 'Join India&apos;s most progressive educational institutions. We partner with leaders who aim for <span class="text-[#0088cc] font-bold underline decoration-2 underline-offset-8">global academic superiority</span> through neuroscience.' }} />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Why Partner - Visual Storytelling */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#76bc21]/5 to-transparent blur-3xl opacity-30" />
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <FadeIn direction="right">
                            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-10">{content['schools_value_label'] || 'The Value Proposition'}</h2>
                            <h2 className="text-7xl font-black mb-16 text-slate-900 tracking-tighter leading-[0.9]" dangerouslySetInnerHTML={{ __html: content['schools_value_title'] || 'Engineered for <br /><span class="font-serif italic text-primary">Success</span>' }} />
                            <div className="space-y-12">
                                {[1, 2, 3].map((num, i) => {
                                    const icons = [CheckCircle2, Users, Trophy];
                                    const colors = ['bg-[#ed1c24]', 'bg-[#0088cc]', 'bg-[#f9b233]'];
                                    const Icon = icons[i];
                                    return (
                                        <div key={i} className="flex gap-8 group">
                                            <div className={`flex-shrink-0 w-24 h-24 ${colors[i]} shadow-xl rounded-[2rem] flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                                                <Icon size={36} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors font-serif italic">
                                                    {content[`schools_value_${num}_title`] || 'Value Title'}
                                                </h3>
                                                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                                    {content[`schools_value_${num}_desc`] || 'Value description goes here.'}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" className="relative group">
                            <div className="absolute -inset-20 bg-gradient-to-br from-[#662d91]/20 to-[#ed1c24]/20 rounded-full blur-[100px] opacity-50 group-hover:scale-110 transition-transform duration-1000 -z-10" />
                            <div className="bg-slate-900 p-24 rounded-[5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
                                <div className="absolute inset-0 opacity-20 mesh-bg-dark" />
                                <div className="absolute top-0 right-0 w-full h-full bg-primary/20 opacity-40 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white mx-auto mb-12 shadow-2xl group-hover:rotate-12 transition-transform duration-700">
                                        <Building2 size={48} className="text-primary-light" />
                                    </div>
                                    <h3 className="text-[10rem] font-black text-white mb-6 tracking-tighter leading-none">{content['schools_stat_title'] || '50+'}</h3>
                                    <p className="text-xs font-black text-primary-light uppercase tracking-[0.5em] mb-12">{content['schools_stat_subtitle'] || 'Premier Institutions'}</p>
                                    <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: content['schools_stat_desc'] || 'Join the growing network of high-performance schools as a <span class="text-white font-bold">MIWAY Partner Hub</span>.' }} />
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        {['CBSE Elite', 'ICSE Global', 'State Excellence'].map(tag => (
                                            <span key={tag} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-black text-slate-300 uppercase tracking-widest hover:bg-primary/20 transition-colors cursor-default">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* The MIWAY Standard - Glass Cards */}
            <section className="py-40 bg-slate-50 relative">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[1, 2, 3].map((num, i) => {
                            const icons = [Globe, Sparkles, Zap];
                            const gradients = ['from-[#0088cc] to-[#4facfe]', 'from-[#662d91] to-[#9d50bb]', 'from-[#f9b233] to-[#f09819]'];
                            const Icon = icons[i];
                            return (
                                <FadeIn key={i} delay={0.1 * i} className="group">
                                    <div className="relative h-full perspective-1000">
                                        <div className={`absolute -inset-1 bg-gradient-to-br ${gradients[i]} rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
                                        <div className="bg-white p-16 rounded-[4rem] border border-white/60 h-full relative overflow-hidden flex flex-col items-center text-center group-hover:-translate-y-4 group-hover:shadow-2xl transition-all duration-700">
                                            <div className={`w-24 h-24 bg-gradient-to-br ${gradients[i]} rounded-[2rem] flex items-center justify-center mb-12 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                                <Icon size={40} className="text-white" />
                                            </div>
                                            <h3 className="text-4xl font-black text-slate-900 mb-6 font-serif italic leading-none">
                                                {content[`schools_standard_${num}_title`] || 'Standard Title'}
                                            </h3>
                                            <p className="text-xl text-slate-600 font-medium leading-relaxed opacity-90">
                                                {content[`schools_standard_${num}_desc`] || 'Standard description goes here.'}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Support - Industrial Grid */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="container">
                    <FadeIn>
                        <div className="max-w-3xl mb-24 mx-auto text-center">
                            <h2 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6">{content['schools_support_label'] || 'Total Support'}</h2>
                            <h2 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]" dangerouslySetInnerHTML={{ __html: content['schools_support_title'] || 'The Ecosystem <br /><span class="font-serif italic text-primary">Deployment.</span>' }} />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((num, i) => {
                            const icons = [MapPin, GraduationCap, Heart];
                            const colors = ['text-[#ed1c24]', 'text-[#662d91]', 'text-[#76bc21]'];
                            const Icon = icons[i];
                            return (
                                <FadeIn key={i} delay={0.15 * i} className="group h-full">
                                    <div className="bg-slate-50 p-14 rounded-[4.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/10 hover:bg-white transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500 border border-slate-100 shadow-xl">
                                            <Icon size={36} className={colors[i]} />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight font-serif italic">
                                            {content[`schools_support_${num}_title`] || 'Support Title'}
                                        </h3>
                                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                            {content[`schools_support_${num}_desc`] || 'Support description goes here.'}
                                        </p>

                                        <div className="mt-8 pt-8 border-t border-slate-100">
                                            <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500" />
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final Conversion - Light Mode Premium */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white rounded-[6rem] p-32 text-center text-slate-900 relative overflow-hidden group shadow-2xl border border-white/60">
                            {/* Premium Light Backgrounds */}
                            <div className="absolute inset-0 opacity-60 mesh-bg-primary" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-white/80" />

                            <div className="relative z-10 max-w-5xl mx-auto">
                                <div className="w-24 h-24 bg-white/80 backdrop-blur-xl border border-white rounded-full flex items-center justify-center mx-auto mb-16 shadow-xl shadow-primary/10 group-hover:scale-110 transition-transform duration-500">
                                    <Globe className="text-primary" size={48} />
                                </div>
                                <h2 className="text-7xl md:text-[8rem] font-black mb-16 tracking-tighter leading-none italic font-serif text-slate-900" dangerouslySetInnerHTML={{ __html: content['schools_cta_title'] || 'Partner for <br /> the Future.' }} />
                                <p className="text-2xl text-slate-600 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                                    {content['schools_cta_desc'] || 'Secure your institution\'s spot as a leader in neuroscience education. Request a comprehensive proposal today.'}
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="bg-secondary text-white shadow-2xl hover:scale-110 hover:shadow-primary/30 transition-all px-24 py-10 text-3xl font-black rounded-full" icon={<ArrowRight size={36} />}>
                                        Partner with US
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
