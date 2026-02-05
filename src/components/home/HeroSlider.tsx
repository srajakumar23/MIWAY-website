'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export interface Slide {
    image: string;
    title: string;
    description: string;
    cta: string;
    link?: string;
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000); // Slower 8s rotation for cinematic feel
        return () => clearInterval(timer);
    }, [slides.length]);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative min-h-[95vh] overflow-hidden bg-slate-900 text-white">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.0, ease: "circOut" }}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                        <img
                            src={slides[current].image}
                            alt=""
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>
                    {/* Cinematic Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 container h-full flex flex-col justify-center pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-5xl"
                    >
                        {/* Eyebrow Pill */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-12 border border-white/20 ring-1 ring-white/10">
                            <Zap size={14} className="text-primary-light" />
                            <span className="text-white font-black text-[11px] uppercase tracking-[0.4em]">Visual Mastery</span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-7xl lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-12 drop-shadow-2xl text-white"
                            dangerouslySetInnerHTML={{ __html: slides[current].title }}
                        />

                        {/* Description */}
                        <p className="text-2xl md:text-3xl text-slate-300 font-medium mb-16 leading-relaxed max-w-3xl opacity-90 drop-shadow-lg font-serif italic text-white">
                            {slides[current].description}
                        </p>

                        {/* CTA */}
                        <div className="flex gap-6">
                            <Link href={slides[current].link || "/contact"}>
                                <Button
                                    size="lg"
                                    className="bg-white text-slate-900 shadow-2xl hover:scale-105 transition-all px-12 py-8 text-xl font-black rounded-full"
                                    icon={<ArrowRight size={24} />}
                                >
                                    {slides[current].cta}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-6">
                <button onClick={prev} className="w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all group">
                    <ChevronLeft size={36} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={next} className="w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all group">
                    <ChevronRight size={36} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                <motion.div
                    key={current}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-primary shadow-[0_0_20px_rgba(237,28,36,0.5)]"
                />
            </div>
        </section>
    );
}
