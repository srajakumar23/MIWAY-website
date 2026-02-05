import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 opacity-20 mesh-bg-primary" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10 text-center max-w-2xl px-6">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 mb-12 shadow-2xl animate-pulse-slow">
                    <span className="text-6xl font-black text-white/20">?</span>
                </div>

                <h1 className="text-9xl font-black text-white tracking-tighter leading-none mb-6 font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                    404
                </h1>

                <p className="text-2xl text-slate-400 font-medium mb-12 uppercase tracking-[0.3em]">
                    Signal Lost
                </p>

                <p className="text-xl text-slate-500 mb-16 max-w-lg mx-auto leading-relaxed">
                    The requested coordinate exists beyond our mapped curriculum. Let&apos;s guide you back to the foundation.
                </p>

                <Link href="/">
                    <Button size="lg" className="bg-white text-slate-900 shadow-2xl hover:scale-105 transition-all px-12 py-6 text-lg font-black rounded-full">
                        Return to Base
                    </Button>
                </Link>
            </div>
        </div>
    );
}
