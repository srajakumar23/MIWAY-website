import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBundleById } from '@/lib/bundles';
import { getPageContent } from '@/lib/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, BookOpen, CheckCircle, Package } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BundleDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const bundle = getBundleById(slug);

    if (!bundle) {
        notFound();
    }

    const content = await getPageContent('bundles_');

    // Resolve dynamic content or fallbacks
    const title = content[`${bundle.contentKey}_title`] || bundle.titleDefault;
    const desc = content[`${bundle.contentKey}_desc`] || bundle.descDefault;
    const heroImage = content[`${bundle.contentKey}_image`] || '/bundles-hero.png'; // Fallback if specific image missing

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-40 pb-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-20 mesh-bg-primary" />
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <FadeIn>
                                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-12 border border-white/10 text-${bundle.accent}-400 ring-1 ring-white/5`}>
                                    <Package size={14} className="text-white" />
                                    <span className="text-white font-black text-[11px] uppercase tracking-[0.4em]">{bundle.gradeDefault}</span>
                                </div>
                                <h1 className="text-7xl lg:text-[7rem] font-black text-white leading-[0.85] tracking-tighter mb-10 font-serif italic drop-shadow-2xl">
                                    {title}
                                </h1>
                                <p className="text-2xl text-slate-300 font-medium mb-16 leading-relaxed max-w-xl opacity-90">
                                    {desc}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                    <Link href="#components">
                                        <Button size="lg" className={`bg-gradient-to-r ${bundle.color} border-none text-white px-12 py-6 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-all`}>
                                            View Components
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="bg-white/5 text-white border border-white/10 hover:bg-white/10 px-12 py-6 rounded-full text-lg font-bold backdrop-blur-md">
                                            Request Sample
                                        </Button>
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="flex-1 relative perspective-1000">
                            <FadeIn delay={0.2}>
                                <div className="relative z-10 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-1000">
                                    {/* Placeholder for specific bundle image if available, else a generic 3D asset */}
                                    <div className={`aspect-[4/5] rounded-[3.5rem] bg-gradient-to-br ${bundle.color} p-2 shadow-2xl`}>
                                        <div className="h-full w-full bg-slate-900 rounded-[3rem] overflow-hidden relative border border-white/10">
                                            {/* Mock visual */}
                                            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                                            {/* We can use the bundle image here if it's a cutout, otherwise cover */}
                                            <Image
                                                src={heroImage}
                                                alt={title}
                                                fill
                                                priority
                                                className="object-cover opacity-90"
                                                sizes="100vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Glow */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${bundle.color} blur-[150px] opacity-20 -z-10`} />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Grid */}
            <section id="components" className="py-32">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Inside the Box</h2>
                        <h2 className="text-5xl font-black text-slate-900 mb-6 font-serif italic">Complete Learning Ecosystem</h2>
                        <p className="text-lg text-slate-600">Everything a student needs to master the curriculum.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {bundle.components.map((comp, i) => {
                            // Dynamic CMS keys for sub-components
                            const keyPrefix = `${bundle.contentKey}_comp_${i + 1}`;
                            const compTitle = content[`${keyPrefix}_title`] || comp.title;
                            const compDesc = content[`${keyPrefix}_desc`] || comp.description;

                            return (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-6 group">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bundle.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                            <BookOpen size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{compTitle}</h3>
                                            <p className="text-slate-500 leading-relaxed">{compDesc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
