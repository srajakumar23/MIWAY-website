import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Book, CheckCircle, Package, ArrowRight, Star, Sparkles, ShieldCheck, Award, Brain, Users, Target, Zap, Globe, Layout, Layers, BookOpen, Rocket } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

import { getPageContent } from '@/lib/content';
import { bundles } from '@/lib/bundles';

export default async function BundlesPage() {
    const content = await getPageContent('bundles_');

    // Merge static definition with CMS content overlay
    const bundlesWithContent = bundles.map(b => ({
        ...b,
        title: content[`${b.contentKey}_title`] || b.titleDefault,
        image: content[`${b.contentKey}_image`], // This might be undefined, component handles fallback
        grades: content[`${b.contentKey}_grade`] || b.gradeDefault,
        focus: content[`${b.contentKey}_focus`] || b.focusDefault,
        description: content[`${b.contentKey}_desc`] || b.descDefault,
    }));

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Product Portfolio Style */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['bundles_hero_image'] || "/bundles-hero.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/90" />

                <div className="container relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full mb-12 shadow-2xl shadow-primary/10 border border-white/60 ring-1 ring-white/50 mx-auto">
                                <BookOpen size={14} className="text-primary" />
                                <span className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">{content['bundles_hero_label'] || 'Curriculum Solutions'}</span>
                            </div>
                            <h1 className="text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['bundles_hero_title'] || 'Premium <br /> <span class="gradient-text font-serif italic text-primary">Portfolios.</span>' }} />
                            <p className="text-3xl text-slate-600 font-medium mb-12 leading-relaxed max-w-2xl mx-auto opacity-90 font-serif italic">
                                {content['bundles_hero_desc'] || 'Engineered for high-engagement schools. Complete ecosystems designed for the modern classroom.'}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Product Grid - High-End Cards */}
            <section className="py-40 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {bundlesWithContent.map((bundle, index) => {
                            const Icon = bundle.icon;
                            return (
                                <FadeIn key={bundle.id} delay={index * 0.2}>
                                    <div className="relative group/card h-full">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur opacity-25 group-hover/card:opacity-100 transition duration-1000"></div>
                                        <div className="glass-panel relative h-full bg-white p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-sm group-hover/card:shadow-2xl transition-all duration-700">
                                            {/* Luxury Graphic Placeholder */}
                                            <div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl rounded-full" />

                                            <div className="relative z-10 h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-12">
                                                    <div className={`w-20 h-20 bg-gradient-to-br ${bundle.color} rounded-3xl flex items-center justify-center text-white shadow-xl group-hover/card:scale-110 transition-transform duration-500`}>
                                                        <Icon size={40} />
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ed1c24] block mb-1">Portfolio</span>
                                                        <span className="text-xs font-bold text-slate-500">ID: MW-00{index + 1}</span>
                                                    </div>
                                                </div>

                                                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 font-serif italic leading-tight">{bundle.title}</h3>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8">
                                                    {bundle.grades} • {bundle.focus}
                                                </p>

                                                <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium">
                                                    {bundle.description}
                                                </p>

                                                <div className="flex flex-wrap gap-3 mb-12">
                                                    {bundle.subjects.map(sub => (
                                                        <span key={sub} className="px-5 py-2 bg-slate-50 text-[10px] font-black text-slate-500 rounded-full border border-slate-100 uppercase tracking-widest">{sub}</span>
                                                    ))}
                                                </div>

                                                <div className="mt-auto pt-10 border-t border-slate-50">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex -space-x-3">
                                                            {[1, 2, 3, 4].map(j => (
                                                                <div key={j} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-sm">
                                                                    <Book size={16} className="text-slate-400" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <Link href={`/bundles/${bundle.id}`}>
                                                            <Button
                                                                variant="primary"
                                                                className={`bg-gradient-to-r ${bundle.color} text-white font-black text-xs uppercase tracking-widest px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all`}
                                                            >
                                                                Explore Components <ArrowRight size={16} className="ml-2" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Product Visual */}
                                            {bundle.image ? (
                                                <div className="absolute -bottom-12 -right-12 w-64 h-80 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white transform rotate-6 group-hover/card:rotate-0 group-hover/card:scale-105 transition-all duration-700 bg-white">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60" />
                                                    <Image
                                                        src={bundle.image}
                                                        alt={bundle.title}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                    />
                                                    {/* Badge */}
                                                    <div className="absolute bottom-6 left-6 z-20">
                                                        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-sm">
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Vol. 1-3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={`absolute -bottom-16 -right-16 w-56 h-80 ${bundle.bg_accent} rounded-[4rem] rotate-12 group-hover/card:rotate-6 transition-transform duration-700 shadow-[0_4rem_6rem_-1rem_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden border border-white/20`}>
                                                    <div className="absolute inset-0 opacity-40 mesh-bg-primary" />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/30" />
                                                    <BookOpen className="text-white/40 -rotate-12 group-hover/card:scale-110 transition-transform duration-1000" size={160} />
                                                    {/* Floating Glass Highlight */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Component Breakdown - Brochure Integration */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl mb-24">
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6">{content['bundles_components_label'] || 'Component Ecosystem'}</h2>
                        <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none font-serif italic" dangerouslySetInnerHTML={{ __html: content['bundles_components_title'] || 'What\'s Inside <br /> Each Bundle.' }} />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((num, i) => {
                            const icons = [Layers, Layout, CheckCircle, Globe];
                            const Icon = icons[i];
                            return (
                                <FadeIn key={i} delay={0.1 * i}>
                                    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 h-full shadow-sm hover:shadow-xl transition-all duration-500">
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-8 border border-slate-100">
                                            <Icon size={32} />
                                        </div>
                                        <h4 className="text-2xl font-black text-slate-900 mb-4 font-serif italic">
                                            {content[`bundles_comp_${num}_title`] || 'Component Title'}
                                        </h4>
                                        <p className="text-slate-600 font-medium leading-relaxed opacity-80">
                                            {content[`bundles_comp_${num}_desc`] || 'Component description.'}
                                        </p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Conversion */}
            <section className="py-40 bg-white">
                <div className="container text-center">
                    <FadeIn>
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-12">{content['bundles_cta_label'] || 'Global Partnership'}</h2>
                        <h2 className="text-6xl md:text-9xl font-black text-slate-900 mb-16 tracking-tighter leading-[0.9]" dangerouslySetInnerHTML={{ __html: content['bundles_cta_title'] || 'Ready for the <br /> <span class="italic font-serif text-primary">Upgrade?</span>' }} />
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 text-white px-20 py-10 text-3xl font-black rounded-full shadow-2xl hover:scale-105 transition-all" icon={<ArrowRight size={36} />}>
                                Contact Sales
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
