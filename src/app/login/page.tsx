'use client';

import Button from '@/components/ui/Button';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';

export default function LoginPage() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900 overflow-hidden relative">
            {/* Cinematic Background */}
            <div className="absolute inset-0 opacity-20 mesh-bg-primary animate-pulse-slow" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 blur-[150px] rounded-full opacity-30" />

            <div className="glass-panel p-12 rounded-[3.5rem] w-full max-w-lg bg-white/5 backdrop-blur-2xl shadow-2xl border border-white/10 relative z-10 mx-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-white tracking-tighter font-serif italic mb-2">MIWAY <span className="text-primary not-italic font-sans">OS</span></h1>
                    <p className="text-slate-400 font-medium uppercase tracking-[0.3em] text-[10px]">Restricted Command Center</p>
                </div>

                <form action={dispatch} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-4">Access ID</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-slate-900/50 border border-white/5 rounded-3xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-medium text-lg"
                            placeholder="officer@miway.in"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-4">Secure Key</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-slate-900/50 border border-white/5 rounded-3xl px-6 py-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-medium text-lg"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <LoginButton />
                    </div>

                    {errorMessage && (
                        <div className="space-y-4">
                            <p className="text-red-400 text-sm text-center bg-red-500/10 py-3 rounded-2xl border border-red-500/20 font-medium mt-4">{errorMessage}</p>
                            <button
                                type="button"
                                onClick={async () => {
                                    const { runDiagnostic } = await import('@/lib/actions');
                                    const result = await runDiagnostic();
                                    alert(JSON.stringify(result, null, 2));
                                }}
                                className="w-full text-[10px] text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold"
                            >
                                Run System Diagnostic
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            variant="primary"
            className="w-full py-5 rounded-full text-lg font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all bg-primary text-white border-none"
            disabled={pending}
        >
            {pending ? 'Authenticating...' : 'Enter System'}
        </Button>
    );
}
