import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { getPageContent } from '@/lib/content';
import { Award, Target, Users, Heart, ArrowRight, ShieldCheck, Zap, Globe, Sparkles, BookOpen } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export default async function AboutPage() {
    const content = await getPageContent('about_');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Official Light Mode */}
            <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['about_hero_background'] || "/abstract_educational_texture_1770224466075.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white pointer-events-none" />

                <div className="container relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-full mb-12 shadow-xl shadow-primary/5 border border-white/60 ring-1 ring-slate-100">
                                <Sparkles size={14} className="text-primary" />
                                <span className="text-primary-dark font-black text-[11px] uppercase tracking-[0.4em]">{content['about_hero_label'] || 'The MIWAY Story'}</span>
                            </div>
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-16 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['about_hero_title'] || 'Defining the <br /> <span class="gradient-text font-serif italic pr-4">Future of Learning.</span>' }} />
                            <p className="text-3xl text-slate-600 font-medium mb-16 leading-relaxed max-w-4xl mx-auto opacity-90 font-serif italic">
                                {content['about_hero_desc'] || 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning materials that foster creativity, critical thinking, and lifelong learning.'}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Our Belief & Pedagogy - World-Class Brochure Layout */}
            <section className="py-20 md:py-40 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn className="relative">
                            {/* Featured Illustration with Overlapping Boxes */}
                            <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
                                <img
                                    src={content['about_pedagogy_image'] || "/visionary-success.jpg"}
                                    alt="Visionary Success"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />

                                {/* Overlay: Our Belief */}
                                <div className="absolute top-8 right-0 md:-right-8 bg-white p-8 md:p-12 shadow-2xl rounded-[2.5rem] border border-slate-100 max-w-[280px] md:max-w-xs z-20 group-hover:-translate-y-2 transition-transform duration-700">
                                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 font-serif italic uppercase tracking-tighter">Our Belief</h4>
                                    <div className="w-12 h-1 bg-slate-900 mb-6" />
                                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                                        At <span className="text-primary font-bold">MIWAY</span>, we believe that every student's learning journey is unique, and education should be personalized to amplify their distinct strengths.
                                    </p>
                                </div>

                                {/* Overlay: Our Pedagogy */}
                                <div className="absolute bottom-0 left-0 md:-left-8 bg-mi-red p-8 md:p-12 shadow-2xl rounded-[2.5rem] text-white max-w-[320px] md:max-w-md z-20 group-hover:translate-x-2 transition-transform duration-700">
                                    <h4 className="text-2xl md:text-3xl font-black mb-6 font-serif italic uppercase tracking-wider">Our Pedagogy</h4>
                                    <p className="text-sm md:text-base opacity-90 leading-relaxed font-medium">
                                        <span className="text-2xl font-black">We</span> take a holistic approach to learning, blending Whole Brain Learning with Multiple Intelligences and 21st Century Skills to offer a truly immersive educational experience. By leveraging diverse teaching frameworks like Bloom's Taxonomy, Spiral Learning, and Sensory Learning, we ensure every student not only grasps knowledge but internalizes it for life.
                                    </p>
                                </div>
                            </div>

                            {/* Strategic Watermark */}
                            <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-slate-900/[0.03] select-none pointer-events-none -z-10 font-serif italic">
                                Believe.
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" className="lg:pl-10">
                            <div className="space-y-16">
                                <div>
                                    <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.6em] mb-8">Pedagogical Philosophy</h2>
                                    <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9] font-serif italic">
                                        Every learner is <br /><span className="text-primary">unique.</span>
                                    </h3>
                                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed opacity-90 mb-10">
                                        At MIWAY, we believe that education should be personalized to amplify distinct strengths. By engaging the whole brain and embracing multiple intelligences, we cultivate future-ready problem solvers equipped for an ever-evolving world.
                                    </p>
                                </div>

                                <div className="p-10 md:p-16 bg-slate-50/50 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                                    <div className="absolute inset-0 opacity-5 mesh-bg-primary group-hover:opacity-10 transition-opacity" />
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-10 shadow-sm border border-slate-100">
                                            <Sparkles size={32} />
                                        </div>
                                        <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 font-serif italic tracking-tighter">Immersive Approach</h4>
                                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed opacity-80">
                                            We blend Whole Brain Learning with Multiple Intelligences and 21st Century Skills to offer a truly immersive experience, ensuring knowledge is internalized for life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Light Mode & Brand Colors */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 mesh-bg-primary" />
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: 'Our Mission',
                                text: content['about_mission_text'] || 'To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth. We are dedicated to crafting inclusive learning experiences that resonate with every learner.',
                                icon: Target,
                                color: 'text-mi-red',
                                gradient: 'from-mi-red/5 to-mi-yellow/5',
                                border: 'border-mi-red/20',
                                bg: 'bg-white/80'
                            },
                            {
                                title: 'Our Vision',
                                text: content['about_vision_text'] || 'To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity, sharpen critical thinking, and boost problem-solving skills, preparing students to thrive confidently.',
                                icon: Award,
                                color: 'text-mi-purple',
                                gradient: 'from-mi-purple/5 to-mi-blue/5',
                                border: 'border-mi-purple/20',
                                bg: 'bg-white/80'
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <FadeIn key={i} delay={0.2 * i}>
                                    <div className={`${item.bg} backdrop-blur-xl p-20 rounded-[4.5rem] border ${item.border} h-full hover:shadow-2xl hover:bg-white transition-all duration-700 group relative overflow-hidden shadow-lg`}>
                                        <div className={`absolute -inset-10 bg-gradient-to-br ${item.gradient} opacity-50 blur-3xl transition-opacity duration-1000`} />
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className={`w-24 h-24 bg-white shadow-xl rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500 border border-slate-100`}>
                                                <Icon size={48} className={item.color} />
                                            </div>
                                            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter font-serif italic">{item.title}</h2>
                                            <p className="text-xl text-slate-600 font-medium leading-relaxed opacity-90">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Founder - The Authority Profile */}
            <section className="py-40 bg-white">
                <div className="container">
                    <div className="bg-slate-50 rounded-[5rem] overflow-hidden shadow-2xl relative border border-slate-100">
                        <div className="grid lg:grid-cols-12 items-stretch">
                            <div className="lg:col-span-12 p-16 lg:p-32 relative z-10 flex flex-col">
                                <FadeIn>
                                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                                        <div className="flex-shrink-0 relative group">
                                            <div className="absolute -inset-6 bg-gradient-to-tr from-primary to-accent rounded-[4rem] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-700" />
                                            <div className="w-[28rem] h-[34rem] bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                                                <img
                                                    src="/founder-photo.png"
                                                    alt="Dr. J. Arawindhan"
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                                                />
                                            </div>
                                            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-[2rem] shadow-2xl z-20 border border-slate-100">
                                                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                                                    <Award size={40} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="max-w-2xl relative">
                                            <h3 className="text-xs font-black text-primary uppercase tracking-[0.6em] mb-8 text-center lg:text-left">Visionary Founder</h3>
                                            <h4 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter font-serif italic text-center lg:text-left whitespace-nowrap">
                                                {content['about_founder_name'] || 'Dr. J. Arawindhan'}
                                            </h4>
                                            <p className="text-xl font-bold text-slate-400 mb-12 uppercase tracking-[0.3em] text-center lg:text-left">
                                                {content['about_founder_role'] || 'Chief Mentor & Visionary'}
                                            </p>

                                            <div className="relative bg-white/60 backdrop-blur-xl p-12 rounded-[3rem] border border-white/50 shadow-xl shadow-slate-200/50">
                                                <div className="absolute -top-6 -left-6 text-primary/20">
                                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.383 15.996 15.115 15.301C16.143 14.331 17.653 13.858 19.646 13.858V13.848C17.584 13.848 15.69 12.358 15.69 10C15.69 8.343 17.032 7 18.69 7H19V21L14.017 21ZM5.01697 21L5.01697 18C5.01697 16.896 5.38297 15.996 6.11497 15.301C7.14297 14.331 8.65197 13.858 10.646 13.858V13.848C8.58297 13.848 6.68997 12.358 6.68997 10C6.68997 8.343 8.03197 7 9.68997 7H10V21L5.01697 21Z" /></svg>
                                                </div>
                                                <div
                                                    className="space-y-6 text-2xl text-slate-700 font-medium leading-relaxed font-serif"
                                                    dangerouslySetInnerHTML={{ __html: content['about_founder_bio'] || `<p>Dr. J. Arawindhan, the visionary behind <span class="text-primary font-bold italic">MIWAY Teaching Aids Pvt. Ltd.</span>, is a dedicated leader in transformative education. With a foundation in neuroscience, he has committed his career to reimagining student engagement.</p><p class="italic text-primary">"His mission is to make learning accessible, inclusive, and enjoyable, empowering students to realize their full potential in a rapidly changing world."</p>` }}
                                                />
                                            </div>

                                            {/* Signature Placeholder */}
                                            <div className="mt-10 ml-12 opacity-40">
                                                <div className="font-serif italic text-4xl text-slate-900 -rotate-2">Dr. J. Arawindhan</div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.4}>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-24 mt-24 border-t border-slate-200">
                                        {[
                                            { val: '25+', label: 'Academic Years', color: 'text-mi-blue' },
                                            { val: '50+', label: 'Elite Partners', color: 'text-mi-green' },
                                            { val: '10K+', label: 'Minds Impacted', color: 'text-mi-red' },
                                            { val: '100%', label: 'Commitment', color: 'text-mi-purple' }
                                        ].map(stat => (
                                            <div key={stat.label} className="text-center">
                                                <div className={`text-5xl font-black mb-3 tracking-tighter text-slate-900`}>{stat.val}</div>
                                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do - High-End Execution */}
            <section className="py-40 bg-white">
                <div className="container">
                    <FadeIn>
                        <div className="max-w-3xl mb-24">
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-8">{content['about_what_we_do_label'] || 'What We Do'}</h2>
                            <h3 className="text-7xl font-black text-slate-900 tracking-tighter leading-none font-serif italic mb-12" dangerouslySetInnerHTML={{ __html: content['about_what_we_do_title'] || 'Designing for <br /> Intelligence.' }} />
                            <p className="text-2xl text-slate-600 font-medium leading-relaxed opacity-90" dangerouslySetInnerHTML={{ __html: content['about_what_we_do_desc'] || 'We design learner-centric materials incorporating <span class="font-bold text-primary italic">Bloom&apos;s Taxonomy, Six Thinking Hats, and Power Learning</span>. Our multilingual approach ensures deep inclusivity for all neural patterns.' }} />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1}>
                            <div className="bg-gradient-to-br from-slate-50 to-mi-yellow/30 p-12 rounded-[3.5rem] border-2 border-mi-yellow/40 shadow-xl shadow-mi-yellow/10 hover:-translate-y-2 transition-transform duration-500 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-mi-yellow/20 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 bg-mi-yellow/20 rounded-3xl flex items-center justify-center mb-8 relative z-10 border border-mi-yellow/20 shadow-lg shadow-mi-yellow/5 group-hover:scale-110 transition-transform duration-500">
                                    <Zap className="text-mi-yellow fill-mi-yellow/20" size={40} />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-4 font-serif italic relative z-10">{content['about_strategies_title'] || 'Strategies'}</h4>
                                <p className="text-slate-600 font-medium text-lg leading-relaxed relative z-10">{content['about_strategies_desc'] || 'Whole Brain Learning & Spiral Mastery.'}</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-gradient-to-br from-slate-50 to-mi-blue/30 p-12 rounded-[3.5rem] border-2 border-mi-blue/40 shadow-xl shadow-mi-blue/10 hover:-translate-y-2 transition-transform duration-500 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-mi-blue/20 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 bg-mi-blue/20 rounded-3xl flex items-center justify-center mb-8 relative z-10 border border-mi-blue/20 shadow-lg shadow-mi-blue/5 group-hover:scale-110 transition-transform duration-500">
                                    <Users className="text-mi-blue fill-mi-blue/20" size={40} />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-4 font-serif italic relative z-10">{content['about_teams_title'] || 'Our Teams'}</h4>
                                <p className="text-slate-600 font-medium text-lg leading-relaxed relative z-10">{content['about_teams_desc'] || 'Neuroscientists & Curriculum Designers.'}</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="bg-gradient-to-br from-slate-50 to-mi-green/30 p-12 rounded-[3.5rem] border-2 border-mi-green/40 shadow-xl shadow-mi-green/10 hover:-translate-y-2 transition-transform duration-500 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-mi-green/20 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="w-20 h-20 bg-mi-green/20 rounded-3xl flex items-center justify-center mb-8 relative z-10 border border-mi-green/20 shadow-lg shadow-mi-green/5 group-hover:scale-110 transition-transform duration-500">
                                    <Globe className="text-mi-green fill-mi-green/20" size={40} />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-4 font-serif italic relative z-10">{content['about_global_title'] || 'Global Reach'}</h4>
                                <p className="text-slate-600 font-medium text-lg leading-relaxed relative z-10">{content['about_global_desc'] || 'Elite networks across tier 1 institutions.'}</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Digital Brochure - Light Mode Showcase */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 mesh-bg-primary" />
                <div className="container relative z-10">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6">{content['about_brochure_label'] || 'Institutional Resource'}</h2>
                            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none font-serif italic mb-12" dangerouslySetInnerHTML={{ __html: (content['about_brochure_title'] || 'Digital <br /><span class="text-primary">Manifesto.</span>').replace('text-primary-light', 'text-primary') }} />
                            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                                {content['about_brochure_desc'] || 'Explore our complete pedagogical blueprint through the official MIWAY digital brochure.'}
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((page) => (
                            <FadeIn key={page} delay={0.05 * page}>
                                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-zoom-in">
                                    <img
                                        src={`/brochure/page-${page.toString().padStart(2, '0')}.jpg`}
                                        alt={`Brochure Page ${page}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest">Page {page}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - The Invitation */}
            <section className="py-40 bg-slate-50">
                <div className="container text-center">
                    <FadeIn>
                        <div className="mb-16">
                            <Sparkles className="mx-auto text-primary mb-10" size={60} />
                            <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-none italic font-serif" dangerouslySetInnerHTML={{ __html: content['about_cta_2_title'] || 'Ready to Author <br /> the Future?' }} />
                            <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
                                {content['about_cta_2_desc'] || 'Join our network of progressive schools and empower students with world-class neuroscience tools.'}
                            </p>
                        </div>
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 text-white shadow-2xl hover:scale-105 transition-all px-20 py-10 text-3xl font-black rounded-full" icon={<ArrowRight size={36} />}>
                                Partner With Us
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
