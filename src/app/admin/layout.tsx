import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-slate-50 min-h-screen text-slate-900 relative overflow-hidden font-sans -mt-[80px]">
            {/* Cinematic Background Layer - Light Mode */}
            <div className="absolute inset-0 opacity-30 mesh-bg-primary fixed" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay fixed" />

            {/* Sidebar Shell */}
            <AdminSidebar />

            {/* Main Content Area */}
            <div style={{ marginLeft: '280px', width: '100%' }} className="relative z-10 transition-all duration-300">
                <main className="p-10 max-w-[1600px] mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
