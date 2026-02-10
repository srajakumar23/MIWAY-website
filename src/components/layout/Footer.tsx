'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const pathname = usePathname();

    // Hide Footer on Admin and Login pages
    if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) return null;

    return (

        <footer className="bg-slate-50 pt-20 md:pt-40 pb-20 relative overflow-hidden text-slate-900 border-t border-slate-200">
            {/* Cinematic Background - Light Mode */}
            <div className="absolute inset-0 opacity-30 mesh-bg-primary" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />

            <div className="container relative z-10">
                {/* Massive Branding - Fluid Typography Fix */}
                <div className="mb-16 md:mb-24 text-center">
                    <FadeIn>
                        <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8">The Future of Learning</h2>
                        <h1 className="text-[20vw] md:text-[15vw] lg:text-[12rem] font-black leading-[0.8] tracking-tighter text-slate-900 select-none opacity-[0.05]">
                            MIWAY
                        </h1>
                    </FadeIn>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 border-t border-slate-200 pt-12 md:pt-20">
                    <div className="lg:col-span-4 space-y-8 md:space-y-12">
                        <Link href="/" className="inline-block group">
                            <img
                                src="/official-logo.png"
                                alt="MIWAY"
                                className="h-16 md:h-24 w-auto object-contain hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-sm font-serif italic">
                            Redefining the educational landscape through diverse intelligence and neuroscience-driven pedagogy.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Ecosystem</h4>
                        <div className="flex flex-col gap-5">
                            {[
                                { name: 'Curriculum Bundles', href: '/bundles' },
                                { name: 'Partner Schools', href: '/schools' },
                                { name: 'Our Philosophy', href: '/philosophy' },
                                { name: 'Digital Brochure', href: '/about' }
                            ].map(link => (
                                <Link key={link.name} href={link.href} className="text-base font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Corporate</h4>
                        <div className="flex flex-col gap-5">
                            {[
                                { name: 'About MIWAY', href: '/about' },
                                { name: 'Leadership', href: '/about' },
                                { name: 'Careers', href: '/contact' },
                                { name: 'Partnership', href: '/publish' }
                            ].map(link => (
                                <Link key={link.name} href={link.href} className="text-base font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:col-end-13">
                        <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Headquarters</h4>
                        <div className="space-y-6">
                            <div className="flex gap-5 group">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <span className="font-medium text-slate-600 leading-relaxed text-base">#88, Candappa Mudaliar St,<br />Puducherry - 605 001. India</span>
                            </div>
                            <div className="flex gap-5 group">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:info@miway.in" className="font-medium text-slate-600 hover:text-primary transition-colors text-base flex items-center">info@miway.in</a>
                            </div>
                            <div className="flex gap-5 group">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 border border-slate-200 shadow-sm group-hover:border-primary/30 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-slate-600 text-base">9025224871</span>
                                    <span className="font-medium text-slate-600 text-base">9345917094</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        © {new Date().getFullYear()} MIWAY Teaching Aids Pvt. Ltd.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy Policy', 'Terms of Service'].map(link => (
                            <Link key={link} href="/privacy" className="text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>


            </div>
        </footer>
    );
}

import { FadeIn } from '@/components/ui/FadeIn';
