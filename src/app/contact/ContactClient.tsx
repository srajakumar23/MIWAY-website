'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowRight, Zap, Globe, Sparkles, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import { submitEnquiry } from '@/lib/actions';
import { FadeIn } from '@/components/ui/FadeIn';

export default function ContactClient({ content }: { content: Record<string, string> }) {
    const [isPending, startTransition] = useTransition();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await submitEnquiry(formData);
            setIsSuccess(true);
        });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-40 pb-20 mesh-bg-primary flex items-center justify-center">
                <FadeIn>
                    <div className="glass-panel p-20 rounded-[4rem] max-w-2xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl border border-white text-center">
                        <div className="w-24 h-24 bg-[#76bc21] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-200 animate-bounce">
                            <CheckCircle2 size={48} className="text-white" />
                        </div>
                        <h2 className="text-5xl font-black mb-6 text-slate-900 tracking-tighter font-serif italic">Enquiry Received.</h2>
                        <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">Thank you for reaching out. Our academic experts will provide a customized response within <span className="text-primary font-bold">24 hours</span>.</p>
                        <Button onClick={() => setIsSuccess(false)} variant="secondary" className="px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest border-2">Send Another</Button>
                    </div>
                </FadeIn>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Executive Intake */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-40 overflow-hidden mesh-bg-primary">
                <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply">
                    <Image
                        src={content['contact_hero_image'] || "/contact-hero.png"}
                        alt=""
                        fill
                        priority
                        className="object-cover scale-105 animate-pulse-slow"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/90" />

                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-xl rounded-full mb-12 shadow-2xl shadow-primary/10 border border-white/60 ring-1 ring-white/50">
                                <Zap size={14} className="text-primary" />
                                <span className="text-primary font-black text-[11px] uppercase tracking-[0.4em]">{content['contact_hero_label'] || 'Consultation & Partnership'}</span>
                            </div>
                            <h1 className="text-[5rem] lg:text-[9rem] font-black text-slate-900 leading-[0.85] tracking-tighter mb-12 drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content['contact_hero_title'] || 'Connect with <br /> <span class="gradient-text font-serif italic pr-4">MIWAY.</span>' }} />
                            <p className="text-3xl text-slate-600 font-medium mb-12 leading-relaxed max-w-2xl opacity-90 font-serif italic" dangerouslySetInnerHTML={{ __html: content['contact_hero_desc'] || 'Initiate a high-level academic partnership. Discuss your school&apos;s cognitive development goals with our specialist team.' }} />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="py-40 relative">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24">
                        {/* Contact Info - The Authority Matrix */}
                        <div>
                            <FadeIn direction="right">
                                <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-12">{content['contact_info_label'] || 'Institutional Access'}</h2>

                                <div className="space-y-12 mb-20">
                                    {[1, 2, 3].map((num, i) => {
                                        const icons = [MapPin, Phone, Globe];
                                        // Colors matching user screenshot: Red, Purple, Cyan
                                        const bgColors = ['bg-[#ed1c24]', 'bg-[#8b5cf6]', 'bg-[#06b6d4]'];
                                        const Icon = icons[i];
                                        return (
                                            <div key={i} className="flex gap-8 group">
                                                <div className={`flex-shrink-0 w-20 h-20 ${bgColors[i]} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                                    <Icon size={32} className="text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                                                        {content[`contact_info_${num}_title`] || 'Contact Title'}
                                                    </h3>
                                                    <p className="text-lg text-slate-600 font-medium leading-relaxed whitespace-pre-line opacity-90">
                                                        {content[`contact_info_${num}_desc`] || 'Contact details...'}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="p-10 bg-[#f9b233]/5 border border-[#f9b233]/10 rounded-[3rem] relative overflow-hidden group">
                                    <div className="relative z-10 flex gap-6 items-center">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                            <Clock size={24} className="text-[#f9b233]" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-slate-900 tracking-tight">{content['contact_hours_title'] || 'Institutional Hours'}</h4>
                                            <p className="text-slate-600 font-medium">{content['contact_hours_desc'] || 'Monday - Friday: 9:00 AM - 6:00 PM'}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#f9b233]/10 rounded-full blur-3xl -mr-12 -mt-12" />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Enquiry Form - The Luxury Intake */}
                        <FadeIn direction="left">
                            <div className="glass-panel p-12 lg:p-16 rounded-[4.5rem] bg-white shadow-2xl border border-slate-100 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative z-10">
                                    <h2 className="text-4xl font-black mb-10 text-slate-900 tracking-tighter font-serif italic">{content['contact_form_title'] || 'Request Proposal'}</h2>
                                    <form action={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Executive Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 font-medium"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Institution</label>
                                                <input
                                                    type="text"
                                                    name="school"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 font-medium"
                                                    placeholder="School Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Email Access</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 font-medium"
                                                    placeholder="official@school.edu"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Direct Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 font-medium"
                                                    placeholder="+91..."
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Strategic Requirements</label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 text-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 font-medium resize-none"
                                                placeholder="Describe your curriculum objectives..."
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="w-full py-8 rounded-[2rem] text-xl font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                                            disabled={isPending}
                                            icon={!isPending && <ArrowRight />}
                                        >
                                            {isPending ? 'Processing...' : 'Submit Partnership Request'}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Global Authority Section */}
            <section className="py-40 bg-slate-50">
                <div className="container text-center">
                    <FadeIn>
                        <Sparkles className="mx-auto text-primary mb-10" size={60} />
                        <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none italic font-serif" dangerouslySetInnerHTML={{ __html: content['contact_global_title'] || 'A Global Partnership.' }} />
                        <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto opacity-80">
                            {content['contact_global_desc'] || 'Our team operate across all major education hubs, providing on-site deployment and strategic neuroscience consulting.'}
                        </p>
                        <div className="flex justify-center gap-12 grayscale opacity-40">
                            <Globe size={40} />
                            <Building2 size={40} />
                            <Zap size={40} />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
