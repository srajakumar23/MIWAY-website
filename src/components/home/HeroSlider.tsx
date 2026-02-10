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
        <section className="relative min-h-[85vh] md:min-h-[95vh] flex flex-col overflow-hidden bg-slate-900 text-white">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.0, ease: "circOut" }}
                >
                    {/* Radiance Base Layer */}
                    <div className="absolute inset-0 bg-slate-950">
                        <img
                            src={slides[current].image}
                            alt=""
                            className="w-full h-full object-cover opacity-100 md:opacity-70 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                    </div>
                    {/* World-Class Cinematic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 md:via-slate-950/40 to-transparent mix-blend-multiply opacity-90 md:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 md:opacity-80" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 container flex-1 flex flex-col justify-center py-20 md:py-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-6xl"
                    >
                        {/* Eyebrow Pill - World-Class Glassmorphism */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-2xl rounded-full mb-12 border border-white/10 ring-1 ring-white/10 shadow-2xl">
                            <Zap size={14} className="text-primary-light" />
                            <span className="text-white font-black text-[11px] uppercase tracking-[0.4em]">Visual Mastery</span>
                        </div>

                        {/* Title - Global Visibility Optimization */}
                        <h1
                            className="text-5xl md:text-7xl lg:text-[9rem] font-black leading-[0.95] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-700"
                            dangerouslySetInnerHTML={{ __html: slides[current].title }}
                        />

                        {/* Description - Premium Contrast */}
                        <p className="text-lg md:text-2xl lg:text-3xl text-white font-medium mb-12 md:mb-16 leading-relaxed max-w-3xl drop-shadow-lg font-serif italic selection:bg-primary selection:text-white opacity-95 tracking-tight md:tracking-normal">
                            {slides[current].description}
                        </p>

                        {/* CTA */}
                        <div className="flex gap-6">
                            <Link href={slides[current].link || "/contact"} className="w-full md:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full md:w-auto bg-white text-slate-900 shadow-2xl hover:scale-105 transition-all px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-black rounded-full"
                                    icon={<ArrowRight size={24} />}
                                >
                                    {slides[current].cta}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls - World-Class Interactive Feedback */}
            <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-4 md:gap-6">
                <button onClick={prev} className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 active:scale-95 transition-all group shadow-2xl">
                    <ChevronLeft size={24} className="md:hidden group-hover:-translate-x-1 transition-transform" />
                    <ChevronLeft size={36} className="hidden md:block group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={next} className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 active:scale-95 transition-all group shadow-2xl">
                    <ChevronRight size={24} className="md:hidden group-hover:translate-x-1 transition-transform" />
                    <ChevronRight size={36} className="hidden md:block group-hover:translate-x-1 transition-transform" />
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
