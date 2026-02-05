'use client';

import styles from './home.module.css';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Sparkles, Star, Award, TrendingUp, Users, CheckCircle2, Globe, Lightbulb, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

import HeroSlider from '@/components/home/HeroSlider';

interface HomeClientProps {
    content: Record<string, string>;
}

export default function HomeClient({ content }: HomeClientProps) {
    const getContent = (key: string, fallback: string = '') => {
        return content[key] || fallback;
    };

    return (
        <main className="overflow-hidden bg-white">
            {/* Hero Section - The Manifesto Slider */}
            <HeroSlider
                slides={[1, 2, 3].map(id => ({
                    image: getContent(`home_hero_slide_${id}_image`, id === 1 ? '/neural_intelligence_abstract_1770224448266.png' : id === 2 ? '/schools-hero.png' : '/philosophy-hero.png'),
                    title: getContent(`home_hero_slide_${id}_title`, id === 1 ? 'Cognitive <br /><span class="gradient-text font-serif italic">Architecture.</span>' : id === 2 ? 'Elite <br /><span class="gradient-text font-serif italic">Network.</span>' : 'Future <br /><span class="gradient-text font-serif italic">Ready.</span>'),
                    description: getContent(`home_hero_slide_${id}_desc`, 'We engineer neural pathways for the next generation of genius.'),
                    cta: getContent(`home_hero_slide_${id}_cta`, 'Explore Methodology'),
                    link: getContent(`home_hero_slide_${id}_link`, id === 3 ? '/contact' : '/about')
                }))}
            />

            {/* Glass Stats Bar */}
            <section className="py-20 bg-slate-900 relative">
                <div className="absolute inset-0 opacity-20 mesh-bg-dark" />
                <div className="container relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 divide-x divide-white/10">
                        {[
                            { value: '50+', label: 'Partner Schools', sub: 'Elite Capabilities' },
                            { value: '10K+', label: 'Active Minds', sub: 'Engaged Daily' },
                            { value: '100+', label: 'Neural Modules', sub: 'Curriculum Depth' },
                            { value: '25+', label: 'Years R&D', sub: 'Cognitive Science' }
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="text-center px-4">
                                <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2">{stat.label}</div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why MIWAY - 3D Glass Cards */}
            <section className="py-40 bg-white">
                <div className="container">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center mb-32">
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">{getContent('home_features_label', 'The MIWAY Advantage')}</h2>
                            <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.85]" dangerouslySetInnerHTML={{ __html: getContent('home_features_title', 'Pedagogical <br /><span class="font-serif italic text-primary">Pillars</span>') }} />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((num, i) => {
                            const icons = [Brain, Sparkles, Star];
                            const gradients = ['from-[#662d91] to-[#9d50bb]', 'from-[#0088cc] to-[#4facfe]', 'from-[#76bc21] to-[#a8e063]'];
                            const Icon = icons[i];

                            return (
                                <FadeIn key={i} delay={0.2 * i}>
                                    <div className="group relative h-full perspective-1000">
                                        <div className={`absolute -inset-1 bg-gradient-to-br ${gradients[i]} rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
                                        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 group-hover:-translate-y-4 group-hover:bg-white/90 group-hover:backdrop-blur-xl transition-all duration-700 h-full flex flex-col relative overflow-hidden shadow-sm group-hover:shadow-2xl">
                                            <div className={`w-24 h-24 bg-gradient-to-br ${gradients[i]} shadow-xl rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                <Icon size={40} className="text-white" />
                                            </div>
                                            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[0.9] font-serif italic">
                                                {getContent(`home_method_${num}_title`, 'Feature Title')}
                                            </h3>
                                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 opacity-80">
                                                {getContent(`home_method_${num}_desc`, 'Feature description goes here.')}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Product Preview - Cinematic Grid */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
                            <div className="max-w-3xl">
                                <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Curriculum Solutions</h2>
                                <h3 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85]">
                                    Curriculum <br />
                                    <span className="gradient-text font-serif italic">Portfolios.</span>
                                </h3>
                            </div>
                            <Link href="/bundles">
                                <Button size="lg" className="rounded-full px-12 py-6 bg-slate-900 text-white text-lg font-bold">View All Portfolios</Button>
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            {
                                slug: 'pre-primary',
                                title: 'Pre-Primary',
                                subtitle: 'Pre-Mont to Mont-II • Sensory Mastery',
                                description: 'Early childhood ecosystem focusing on sensory development, motor skill refinement, and joyful discovery.',
                                color: 'from-[#f9b233] to-[#ed1c24]'
                            },
                            {
                                slug: 'primary',
                                title: 'Primary',
                                subtitle: 'Grades 1-5 • Foundation for Success',
                                description: 'Integrated multi-volume workbooks and visual memory mapping tools designed for neuro-cognitive development.',
                                color: 'from-[#0088cc] to-[#76bc21]'
                            },
                            {
                                slug: 'middle',
                                title: 'Middle School',
                                subtitle: 'Grades 6-8 • Deep Conceptual Mastery',
                                description: 'Advanced science and logic modules with case-study methods for critical analysis and systemic thinking.',
                                color: 'from-[#662d91] to-[#0088cc]'
                            }
                        ].map((bundle, i) => (
                            <FadeIn key={i} delay={0.2 * i}>
                                <Link href={`/bundles/${bundle.slug}`} className="block h-[500px] rounded-[3.5rem] group relative overflow-hidden ring-1 ring-slate-900/5 cursor-pointer">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${bundle.color} opacity-90 group-hover:scale-110 transition-transform duration-1000`} />
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                                    <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-20 drop-shadow-md">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-90">{bundle.subtitle}</p>
                                            <h4 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.85] font-serif italic mb-6">{bundle.title}</h4>
                                            <p className="text-lg font-medium opacity-90 leading-relaxed max-w-sm">{bundle.description}</p>
                                        </div>

                                        <div className="flex items-center justify-end">
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:text-slate-900 transition-colors duration-500 shadow-xl">
                                                <ArrowRight size={22} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3D Object Effect */}
                                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 backdrop-blur-3xl rounded-full blur-2xl group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000" />
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Authority Section */}
            <section className="py-40 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <FadeIn direction="right">
                            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Our Legacy</h2>
                            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.9]">
                                {getContent('home_about_title', 'Defining Learning Since 2024')}
                            </h2>
                            <p className="text-2xl text-slate-600 font-medium mb-12 leading-relaxed opacity-90 font-serif italic">
                                {getContent('home_about_text', 'We are not just publishers. We are architects of the mind.')}
                            </p>
                            <Link href="/about">
                                <Button size="lg" className="bg-primary hover:bg-primary-hover px-12 py-6 rounded-full text-xl font-bold">Read Our Story</Button>
                            </Link>
                        </FadeIn>

                        <FadeIn direction="left" className="relative group">
                            <div className="aspect-[4/5] bg-slate-900 rounded-[5rem] overflow-hidden relative shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10" />
                                <img src="/founder-updated.png" alt="Dr. J. Arawindhan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />

                                <div className="absolute bottom-12 left-12 right-12 z-20">
                                    <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl">
                                        <div className="text-6xl font-black text-white mb-2">50+</div>
                                        <div className="text-xs font-bold text-white/90 uppercase tracking-widest">Global Partners</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Final Conversion - High Impact */}
            <section className="py-40 relative">
                <div className="container relative z-10">
                    <FadeIn className="bg-slate-900 rounded-[5rem] p-32 text-center text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 opacity-20 mesh-bg-dark" />
                        <div className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[200px] animate-pulse-slow" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-xs font-black text-primary-light uppercase tracking-[0.4em] mb-12">Take the Next Step</h2>
                            <h2 className="text-7xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.85] italic font-serif text-white">
                                {getContent('home_cta_title', 'Ready to <br /> Transform?')}
                            </h2>
                            <p className="text-2xl text-slate-400 font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
                                Join the elite network of progressive schools using MIWAY neuroscience-based curriculum solutions.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-slate-900 shadow-2xl hover:scale-110 transition-all px-24 py-10 text-3xl font-black rounded-full" icon={<ArrowRight size={36} />}>
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
