
'use client';

import { useState, useRef } from 'react';
import { updateSiteContent, uploadImage } from '@/lib/actions';
import { Edit2, Save, X, CheckCircle2, Clock, Search, Layout, Terminal, Image as ImageIcon, Upload, Loader2 } from 'lucide-react';

interface ContentEditorProps {
    initialContent: Array<{ id: string; key: string; content: string; type?: string; updatedAt: Date }>;
}

export default function ContentEditorFixed({ initialContent }: ContentEditorProps) {
    const [content, setContent] = useState(initialContent);
    const [editingKey, setEditingKey] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Group content by prefix
    const groupedContent = content.reduce((acc, item) => {
        const prefix = item.key.split('_')[0];
        const label = prefix.charAt(0).toUpperCase() + prefix.slice(1);

        if (!acc[label]) {
            acc[label] = [];
        }
        acc[label].push(item);
        return acc;
    }, {} as Record<string, typeof content>);

    const handleEdit = (key: string, currentValue: string) => {
        setEditingKey(key);
        setEditValue(currentValue);
    };

    const handleSave = async (key: string, type: string = 'TEXT') => {
        setSaving(true);
        try {
            await updateSiteContent(key, editValue, type);

            // Update local state
            setContent(prev => prev.map(item =>
                item.key === key ? { ...item, content: editValue, type, updatedAt: new Date() } : item
            ));

            setEditingKey(null);
        } catch (error) {
            console.error('Failed to save:', error);
            alert('Failed to save content');
        } finally {
            setSaving(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const result = await uploadImage(formData);
            if (result.success && result.url) {
                setEditValue(result.url);
                // Automatically save for images to make it "one-click" replacement
                await updateSiteContent(key, result.url, 'IMAGE');

                setContent(prev => prev.map(item =>
                    item.key === key ? { ...item, content: result.url!, type: 'IMAGE', updatedAt: new Date() } : item
                ));
                setEditingKey(null);
            } else {
                alert(result.error || 'Upload failed');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    const handleCancel = () => {
        setEditingKey(null);
        setEditValue('');
    };

    const getReadableLabel = (key: string) => {
        const parts = key.split('_');
        return parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const isImageContent = (item: any) => {
        return item.type === 'IMAGE' ||
            item.key.toLowerCase().includes('image') ||
            item.key.toLowerCase().includes('img') ||
            item.content?.startsWith('/uploads/') ||
            item.content?.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
    };

    // Set initial selected page (default to first one)
    const [selectedPage, setSelectedPage] = useState<string>(Object.keys(groupedContent)[0] || '');

    return (
        <div className="space-y-10 pb-20">
            {/* Search and Filters Bar */}
            <div className="bg-white/80 backdrop-blur-xl p-4 rounded-[2rem] border border-white/60 shadow-xl flex flex-col md:flex-row items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />

                <div className="relative flex-1 w-full z-10">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search content by key or text..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary focus:shadow-[0_0_20px_var(--primary-light)] transition-all font-bold text-slate-900 placeholder:text-slate-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 z-10 no-scrollbar">
                    {Object.keys(groupedContent).map(page => (
                        <button
                            key={page}
                            onClick={() => setSelectedPage(page)}
                            className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${selectedPage === page
                                ? 'bg-primary text-white border border-primary shadow-[0_0_15px_-5px_var(--primary-light)]'
                                : 'bg-slate-100 border border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            {Object.entries(groupedContent).map(([page, items]) => {
                if (page !== selectedPage && searchTerm === '') return null;

                const filteredItems = items.filter(item =>
                    item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.content.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (filteredItems.length === 0) return null;

                return (
                    <div key={page} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4 mb-8 pl-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary border border-slate-100 shadow-md">
                                <Layout size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter font-serif italic">{page} Page</h2>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">{filteredItems.length} Editable Sectors</p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {filteredItems.map(item => {
                                const isImg = isImageContent(item);

                                return (
                                    <div key={item.key} className={`bg-white/70 backdrop-blur-md rounded-[2rem] border transition-all duration-300 relative overflow-hidden ${editingKey === item.key ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-white/50 shadow-sm hover:shadow-md hover:bg-white/90'}`}>
                                        <div className="p-8 relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 leading-none mb-3 font-serif italic tracking-tight flex items-center gap-3">
                                                        {isImg && <ImageIcon size={20} className="text-primary" />}
                                                        {getReadableLabel(item.key)}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-2">
                                                            <Terminal size={10} />
                                                            {item.key}
                                                        </span>
                                                        {isImg && (
                                                            <span className="text-[8px] font-black uppercase tracking-widest text-white bg-primary px-2 py-0.5 rounded-full">
                                                                Image Asset
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                    <Clock size={12} />
                                                    Updated {new Date(item.updatedAt).toISOString().split('T')[0]}
                                                </div>
                                            </div>

                                            {editingKey === item.key ? (
                                                <div className="space-y-6">
                                                    {isImg ? (
                                                        <div className="space-y-4">
                                                            <div className="relative group/upload aspect-video max-h-[300px] w-full rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center">
                                                                {editValue ? (
                                                                    <>
                                                                        <img src={editValue} alt="Preview" className="w-full h-full object-contain" />
                                                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center">
                                                                            <button
                                                                                onClick={() => fileInputRef.current?.click()}
                                                                                className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
                                                                            >
                                                                                <Upload size={16} /> Replace Image
                                                                            </button>
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => fileInputRef.current?.click()}
                                                                        className="flex flex-col items-center gap-3 text-slate-400 hover:text-primary transition-colors"
                                                                    >
                                                                        <Upload size={40} />
                                                                        <span className="text-xs font-bold uppercase tracking-widest">Select Image File</span>
                                                                    </button>
                                                                )}
                                                                {uploading && (
                                                                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
                                                                        <Loader2 size={32} className="animate-spin text-primary" />
                                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Uploading...</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                className="hidden"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileUpload(e, item.key)}
                                                            />
                                                            <input
                                                                type="text"
                                                                value={editValue}
                                                                onChange={(e) => setEditValue(e.target.value)}
                                                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-slate-500 focus:border-primary outline-none transition-all"
                                                                placeholder="Image URL or Path..."
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="relative">
                                                            <textarea
                                                                value={editValue}
                                                                onChange={(e) => setEditValue(e.target.value)}
                                                                className="w-full min-h-[200px] p-6 bg-slate-50 border border-primary/30 rounded-2xl text-slate-900 focus:bg-white focus:border-primary focus:shadow-inner outline-none resize-y transition-all font-medium leading-relaxed font-mono text-sm"
                                                                placeholder="Enter content..."
                                                            />
                                                            <div className="absolute bottom-4 right-4 text-[10px] font-bold text-slate-500 bg-white/80 backdrop-blur px-3 py-1 rounded-lg border border-slate-200">
                                                                {editValue.length} Chars
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex gap-4 justify-end pt-2 border-t border-slate-100">
                                                        <button
                                                            onClick={handleCancel}
                                                            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-2"
                                                            disabled={saving || uploading}
                                                        >
                                                            <X size={16} /> Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => handleSave(item.key, isImg ? 'IMAGE' : 'TEXT')}
                                                            className="px-8 py-3 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
                                                            disabled={saving || uploading}
                                                        >
                                                            {saving ? <Clock size={16} className="animate-spin" /> : <Save size={16} />}
                                                            {saving ? 'Synching...' : 'Execute Save'}
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="group/content relative">
                                                    {isImg ? (
                                                        <div className="flex items-center gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                                                            <div className="w-32 h-32 rounded-xl bg-white shadow-sm border border-slate-100 overflow-hidden flex items-center justify-center flex-shrink-0">
                                                                {item.content ? (
                                                                    <img src={item.content} alt="Preview" className="w-full h-full object-cover" />
                                                                ) : (
                                                                    <ImageIcon size={32} className="text-slate-200" />
                                                                )}
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Source Path</p>
                                                                <code className="text-[11px] font-mono text-primary font-bold break-all">
                                                                    {item.content || 'No image persistent'}
                                                                </code>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100/50 text-slate-600 whitespace-pre-line leading-relaxed min-h-[100px] font-medium">
                                                            {item.content || <em className="text-slate-400">No data present in sector</em>}
                                                        </div>
                                                    )}

                                                    <button
                                                        onClick={() => handleEdit(item.key, item.content)}
                                                        className="absolute top-4 right-4 p-3 bg-white backdrop-blur-md rounded-xl shadow-md border border-slate-100 text-slate-400 opacity-0 group-hover/content:opacity-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform translate-y-2 group-hover/content:translate-y-0"
                                                        title="Quick Edit"
                                                    >
                                                        <Edit2 size={18} />
                                                    </button>

                                                    <div className="mt-4 flex justify-between items-center px-2">
                                                        <span className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                                            Synchronized
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleEdit(item.key, item.content)}
                                                            className="text-slate-400 hover:text-primary text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 group/edit"
                                                        >
                                                            Modify Asset
                                                            <span className="group-hover/edit:translate-x-1 transition-transform">→</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
