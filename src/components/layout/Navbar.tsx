'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import styles from './navbar.module.css';
import Button from '@/components/ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Hide Navbar on Admin and Login pages (Command Center mode)
    if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) return null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Philosophy', href: '/philosophy' },
        { name: 'Curriculum', href: '/bundles' },
        { name: 'Partner Schools', href: '/schools' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/official-logo.png"
                        alt="MIWAY - Multiple Intelligence Way"
                        className={`h-10 lg:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${!isScrolled ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]' : ''
                            }`}
                    />
                </Link>

                {/* Desktop Nav - Global Tech Aesthetic */}
                <nav className={styles.navLinks}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-bold transition-all tracking-wider uppercase ${pathname === item.href ? 'text-primary' : 'text-slate-500 hover:text-primary'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                    <Link href="/contact">
                        <Button
                            variant="primary"
                            size="sm"
                            className="rounded-full px-6 py-5 shadow-xl shadow-primary/20 hover:scale-105 transition-all text-xs font-black uppercase tracking-widest"
                            icon={<ArrowRight size={14} />}
                        >
                            Partner With Us
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl text-slate-900 shadow-sm"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Premium Cinematic Transition */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[2000] bg-white flex flex-col p-8 md:p-12 animate-in fade-in slide-in-from-bottom-5 duration-500 overflow-hidden">
                    {/* Background Detail */}
                    <div className="absolute inset-0 opacity-[0.03] mesh-bg-primary pointer-events-none" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />

                    <div className="relative z-10 flex justify-between items-center mb-20">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block">
                            <img src="/official-logo.png" alt="MIWAY" className="h-12 w-auto object-contain" />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-14 h-14 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl shadow-sm text-slate-900 active:scale-95 transition-all"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <nav className="relative z-10 flex flex-col gap-8">
                        {navItems.map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group flex items-center justify-between"
                            >
                                <span className="text-5xl md:text-6xl font-black text-slate-900 group-hover:text-primary transition-all tracking-tighter font-serif italic">
                                    {item.name}
                                </span>
                                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={32} />
                            </Link>
                        ))}
                    </nav>

                    <div className="relative z-10 mt-auto pt-12 border-t border-slate-100/50 flex flex-col gap-6">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button size="lg" className="w-full py-8 text-2xl font-black rounded-[2rem] shadow-2xl hover:scale-105 transition-all">Partner With Us</Button>
                        </Link>

                        <div className="flex justify-between items-center text-slate-400">
                            <div className="flex gap-4">
                                <Globe size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Global Authority</span>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest">© {new Date().getFullYear()} MIWAY Hub</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
