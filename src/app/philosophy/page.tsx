import { FadeIn } from '@/components/ui/FadeIn';
import { Brain, Users, Target, Lightbulb, BookOpen, Award, ArrowRight, Zap, Globe, Sparkles, Star, Layers, Activity, Compass, Milestone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { getPageContent } from '@/lib/content';

const philosophies = [
    {
        title: 'Spiral Learning',
        description: 'Revisiting core concepts with exponential complexity to ensure deep-rooted comprehension and progressive mastery.',
        icon: Target,
        color: 'from-[#ed1c24] to-[#f9b233]',
        step: '01'
    },
    {
        title: 'Seven Habits Integration',
        description: 'Empowering students via Stephen Covey’s framework—fostering proactivity, synergy, and interpersonal effectiveness.',
        icon: Star,
        color: 'from-[#662d91] to-[#0088cc]',
        step: '02'
    },
    {
        title: 'Neural Integration',
        description: 'Activating both analytical and creative hemispheres through neuro-scientific, multi-sensory learning experiences.',
        icon: Brain,
        color: 'from-[#0088cc] to-[#76bc21]',
        step: '03'
    },
    {
        title: 'Multiple Intelligences',
        description: 'Leveraging Gardner’s framework to engage linguistic, spatial, and logical capacities simultaneously.',
        icon: Lightbulb,
        color: 'from-[#f9b233] to-[#ed1c24]',
        step: '04'
    },
    {
        title: 'Bloom’s Taxonomy',
        description: 'A structured cognitive journey across six levels—from foundational recall to sophisticated creation.',
        icon: Layers,
        color: 'from-[#76bc21] to-[#0088cc]',
        step: '05'
    },
    {
        title: 'Six Thinking Hats',
        description: 'Edward de Bono’s methodology to solve complex problems through diverse, multi-perspective analysis.',
        icon: Compass,
        color: 'from-[#ed1c24] to-[#662d91]',
        step: '06'
    },
    {
        title: 'Whole Brain Mastery',
        description: 'Philosophical activation of multiple brain regions ensuring information retention and practical application.',
        icon: Zap,
        color: 'from-[#0f172a] to-[#334155]',
        step: '07'
    },
    {
        title: '21st Century Skills',
        description: 'Cultivating digital literacy, critical thinking, and global collaboration for the 22nd-century economy.',
        icon: Globe,
        color: 'from-[#662d91] to-[#ed1c24]',
        step: '08'
    },
    {
        title: 'Power Learning',
        description: 'Advanced mnemonics, visualization, and association techniques to maximize cognitive efficiency.',
        icon: Activity,
        color: 'from-[#ed1c24] to-[#76bc21]',
        step: '09'
    }
];

export default async function PhilosophyPage() {
    const content = await getPageContent('philosophy_');

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - The Manifesto */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['philosophy_hero_image'] || "/philosophy-hero.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white pointer-events-none" />

                <div className="container relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full mb-12 shadow-2xl shadow-primary/10 border border-white/60 ring-1 ring-white/50">
                            <Zap size={14} className="text-primary" />
                            <span className="text-primary-dark font-black text-[11px] uppercase tracking-[0.4em]">{content['philosophy_hero_label'] || 'Scientific Pedagogy'}</span>
                        </div>
                        <h1 className="text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-16 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['philosophy_hero_title'] || 'The MIWAY <br /> <span class="gradient-text font-serif italic pr-4">Framework.</span>' }} />
                        <p className="text-3xl text-slate-600 font-medium mb-16 leading-relaxed max-w-4xl mx-auto opacity-90 font-serif italic" dangerouslySetInnerHTML={{ __html: content['philosophy_hero_desc'] || 'A synthesis of global best practices and neural science. We don\'t just teach; we <span class="text-primary font-bold italic">architect</span> the pathway for human potential.' }} />

                        <div className="flex justify-center gap-6 opacity-40 mix-blend-multiply grayscale md:gap-12">
                            <Brain size={64} />
                            <Target size={64} />
                            <Globe size={64} />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy Grid - The High-End Matrix */}
            <section className="py-40 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent z-10" />

                <div className="container relative z-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {philosophies.map((item, i) => {
                            return (
                                <FadeIn key={i} delay={0.1 * i}>
                                    <Link href={`/contact?topic=${encodeURIComponent(item.title)}`} className="group relative h-full perspective-1000 block">
                                        <div className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
                                        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] border border-white/60 shadow-lg shadow-slate-200/50 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                            {/* Watermark Number */}
                                            <div className="text-[12rem] font-black text-slate-900/5 absolute -right-10 -top-20 leading-none select-none pointer-events-none font-serif italic">
                                                {item.step}
                                            </div>

                                            <div className="relative z-10 h-full flex flex-col">
                                                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                    <item.icon className="text-white" size={40} />
                                                </div>

                                                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-[0.9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
                                                    {content[`philosophy_item_${parseInt(item.step)}_title`] || item.title}
                                                </h3>

                                                <p className="text-lg text-slate-600 font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                                    {content[`philosophy_item_${parseInt(item.step)}_desc`] || item.description}
                                                </p>

                                                <div className="mt-auto pt-10">
                                                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                                                        <span>Explore Capability</span>
                                                        <div className="w-8 h-px bg-current" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Quote - Light Mode Upgrade */}
            <section className="py-60 bg-slate-50 overflow-hidden relative">
                <div className="absolute inset-0 opacity-40 mesh-bg-primary" />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[100px] border-y border-white/50" />

                <div className="container relative z-10 text-center">
                    <FadeIn>
                        <div className="w-24 h-24 bg-white shadow-xl shadow-primary/10 border border-white/60 rounded-full flex items-center justify-center mx-auto mb-16 ring-1 ring-slate-100">
                            <Sparkles className="text-primary" size={48} />
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 max-w-6xl mx-auto leading-[1] tracking-tighter mb-16 italic font-serif drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['philosophy_quote'] || '&quot;Education is not the learning of facts, but the training of the mind to think.&quot;' }} />
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10 opacity-40" />
                        <p className="text-sm font-black text-primary uppercase tracking-[0.6em] animate-pulse">The MIWAY Core Directive</p>
                    </FadeIn>
                </div>
            </section>

            {/* Brochure Grid - Visual Proof */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 -z-10" />

                <div className="container">
                    <div className="max-w-3xl mb-24">
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6">{content['philosophy_visual_label'] || 'Visual Journey'}</h2>
                        <h2 className="text-7xl font-black text-slate-900 tracking-tighter leading-none font-serif italic" dangerouslySetInnerHTML={{ __html: content['philosophy_visual_title'] || 'Framework in <br /> Action.' }} />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { img: content['philosophy_action_image_1'] || '/brochure/page-06.jpg', title: 'Spiral Learning' },
                            { img: content['philosophy_action_image_2'] || '/brochure/page-07.jpg', title: 'Multilingual Integration' },
                            { img: content['philosophy_action_image_3'] || '/brochure/page-09.jpg', title: 'Whole Brain Philosophy' },
                            { img: content['philosophy_action_image_4'] || '/brochure/page-10.jpg', title: 'Bloom’s Taxonomy' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="group">
                                <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-[500px] flex flex-col">
                                    <div className="flex-1 rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-50 relative">
                                        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="pt-8 pb-4 text-center">
                                        <h4 className="text-xl font-black text-slate-900 font-serif italic">{item.title}</h4>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - High Impact */}
            <section className="py-40 bg-white text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <FadeIn>
                        <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-12">{content['philosophy_cta_label'] || 'The Next Revolution'}</h2>
                        <h2 className="text-7xl md:text-[10rem] font-black text-slate-900 mb-16 tracking-tighter leading-[0.8]" dangerouslySetInnerHTML={{ __html: content['philosophy_cta_title'] || 'Ready to <br /><span class="italic font-serif text-primary">Deploy?</span>' }} />
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 text-white shadow-2xl hover:scale-105 transition-all px-20 py-10 text-3xl font-black rounded-full" icon={<ArrowRight size={36} />}>
                                Partner with US
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
