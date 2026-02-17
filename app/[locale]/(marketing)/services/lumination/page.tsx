import Link from 'next/link'

export default function LuminationPage() {
    return (
        <div className="bg-night-surface text-[#f0f2ef] font-display antialiased leading-relaxed min-h-screen overflow-x-hidden relative">
            <div className="noise-texture absolute inset-0 z-0 opacity-20 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-night-surface z-10"></div>
                    <img
                        alt="Evening garden with warm lighting"
                        className="w-full h-full object-cover opacity-60 scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GhDGO_GRmICrS6X2yWmDCOTWWUHoS5U-pzJdmbuKGVxXSUDJg0DUgEg5m3hs6mBSsfc8MqljxHfmcNfGnZSPZCUyjxdbMXK7iZe0-jxGrl8vSTuHsyr2XPiom7jLDoUH2K_PHoJipck6XR7DsnlU-FAeSep6NCy5GwjLhjejVQAVq3YIj0hs1-zFBasV4PhAW_NzoEpTuT6GKH9CX2UdRPyHj0vXTTlKReTBwgJxQD--_wL_p7cxaKqEc6fKSsL82vRCE1-VgQs"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center">
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-lumination-gold shadow-lumination-glow">
                            Atmospheric Design
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight leading-none tracking-tighter text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Lumination
                        </h1>
                        <p className="text-xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light leading-snug">
                            Atmospheric curation. We paint with light to extend beauty into the evening.
                        </p>
                    </div>

                    <div className="mt-16 animate-in fade-in zoom-in duration-1000 delay-500">
                        <button className="h-20 w-20 rounded-full bg-lumination-night border border-lumination-gold/30 shadow-lumination-glow flex items-center justify-center group hover:scale-110 transition-all duration-500 mx-auto">
                            <span className="material-icons text-lumination-gold text-3xl group-hover:animate-pulse">south</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -top-10 -left-10 text-[12rem] leading-none font-bold text-white/5 select-none pointer-events-none font-serif">01</div>
                            <h2 className="text-4xl md:text-6xl font-extralight mb-10 text-white tracking-tight leading-tight">
                                Lighting is the <br />
                                <span className="shimmer-text font-serif italic py-2 inline-block">Final Layer.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                                We don't just illuminate space; we reveal its character. Our lighting design focuses on hierarchy, shadow play, and visual comfort, ensuring that the garden transforms into a soulful sanctuary after dark.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lumination-shimmer">
                                    <span className="material-icons text-lumination-gold mb-4">brightness_low</span>
                                    <h4 className="text-white font-medium mb-2">Subtle Glow</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Lower intensity focused on textures and forms.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lumination-shimmer">
                                    <span className="material-icons text-lumination-gold mb-4">nights_stay</span>
                                    <h4 className="text-white font-medium mb-2">Moonlight Effect</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Overhead lighting that mimics soft natural night light.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group order-1 lg:order-2">
                            <div className="absolute inset-0 bg-lumination-gold/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                                <img
                                    alt="Professional garden lighting details"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GhDGO_GRmICrS6X2yWmDCOTWWUHoS5U-pzJdmbuKGVxXSUDJg0DUgEg5m3hs6mBSsfc8MqljxHfmcNfGnZSPZCUyjxdbMXK7iZe0-jxGrl8vSTuHsyr2XPiom7jLDoUH2K_PHoJipck6XR7DsnlU-FAeSep6NCy5GwjLhjejVQAVq3YIj0hs1-zFBasV4PhAW_NzoEpTuT6GKH9CX2UdRPyHj0vXTTlKReTBwgJxQD--_wL_p7cxaKqEc6fKSsL82vRCE1-VgQs"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-night-surface via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 bg-black/40 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-lumination-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Light & Shadows</span>
                            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">Core Scenarios</h2>
                        </div>
                        <p className="text-slate-500 max-w-sm font-light text-sm italic border-l border-lumination-gold/30 pl-6">
                            "Light is not what you see, it's what you experience."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'Garden path lighting', desc: 'Guiding the way with invisible light sources buried in the landscape.', icon: 'alt_route' },
                            { title: 'Architectural Uplighting', desc: 'Emphasizing the forms of your home and vertical landscape elements.', icon: 'house' },
                            { title: 'Aquatic Glow', desc: 'Underwater lighting for pools and ponds that creates a mesmerizing depth.', icon: 'water' }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-night-surface border border-white/5 hover:border-lumination-gold/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-lumination-gold/5 rounded-full blur-3xl group-hover:bg-lumination-gold/10 transition-colors"></div>
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-lumination-gold group-hover:text-black transition-all duration-500">
                                    <span className="material-icons text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-light text-white mb-4">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-light text-sm mb-10">
                                    {item.desc}
                                </p>
                                <button className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-lumination-gold hover:text-white transition-colors">
                                    Explore Scenario <span className="material-icons text-xs">arrow_forward</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className="py-32 relative h-[80vh] overflow-hidden z-10">
                <img
                    alt="Luxury evening garden terrace"
                    className="w-full h-full object-cover fixed top-0 left-0 -z-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GhDGO_GRmICrS6X2yWmDCOTWWUHoS5U-pzJdmbuKGVxXSUDJg0DUgEg5m3hs6mBSsfc8MqljxHfmcNfGnZSPZCUyjxdbMXK7iZe0-jxGrl8vSTuHsyr2XPiom7jLDoUH2K_PHoJipck6XR7DsnlU-FAeSep6NCy5GwjLhjejVQAVq3YIj0hs1-zFBasV4PhAW_NzoEpTuT6GKH9CX2UdRPyHj0vXTTlKReTBwgJxQD--_wL_p7cxaKqEc6fKSsL82vRCE1-VgQs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-surface via-night-surface/40 to-night-surface/80"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-5xl md:text-8xl font-extralight text-white mb-8 tracking-tighter">
                        Experience the <br /> <span className="text-lumination-gold font-serif italic">Transformation.</span>
                    </h2>
                    <Link
                        href="/contacts"
                        className="px-12 py-6 rounded-full bg-lumination-gold text-black font-bold uppercase tracking-[0.2em] shadow-lumination-glow hover:scale-105 active:scale-95 transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>

            {/* Footer with unique credits */}
            <footer className="py-20 bg-night-surface relative z-10 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-600 text-xs tracking-widest uppercase">© 2026 Aura Landscape Architecture — Lumination Studio</p>
                    <div className="flex gap-8">
                        <Link href="/services/hardscaping" className="text-xs text-white/40 hover:text-lumination-gold transition-colors tracking-widest uppercase">Hardscaping</Link>
                        <Link href="/services/greening" className="text-xs text-white/40 hover:text-lumination-gold transition-colors tracking-widest uppercase">Greening</Link>
                        <Link href="/services/hydro-systems" className="text-xs text-white/40 hover:text-lumination-gold transition-colors tracking-widest uppercase">Hydro Systems</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
