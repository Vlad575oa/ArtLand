import Link from 'next/link'
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceSchema } from '@/components/seo/StructuredData';
import { useTranslations } from 'next-intl';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Гидросистемы и водные объекты | TERRA.ART',
        titleEn: 'Hydro Systems & Water Features | TERRA.ART',
        descriptionRu: 'Проектирование и установка водных систем: фонтаны, пруды, водопады, дренажные системы. TERRA.ART.',
        descriptionEn: 'Design and installation of water systems: fountains, ponds, waterfalls, drainage. TERRA.ART.',
        path: '/services/hydro-systems',
    }, locale);
}

export default function HydroSystemsPage() {
    const t = useTranslations('Services');

    return (
        <>
            <ServiceSchema
                name="Hydro Systems"
                description="Design and installation of water features, fountains, ponds, and drainage systems."
                image="/images/services/hydro-systems-hero.jpg"
                offers={[
                    { name: "Remote Command Center", description: "Control your landscape from anywhere." },
                    { name: "Weather Adaptive", description: "System automatically pauses during rain." },
                    { name: "Water Conservation", description: "Rotary nozzles and drip irrigation reduce water waste." }
                ]}
            />
            <div className="bg-forest-gradient text-slate-200 font-display antialiased leading-relaxed min-h-screen">
                {/* Texture Overlays */}
                <div className="fixed inset-0 pointer-events-none z-0 leaf-texture opacity-30"></div>
                <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
                <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#5d4037]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

                {/* Header / Hero */}
                <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1611]/40 via-[#0b1611]/70 to-[#0b1611]"></div>
                        <Image
                            alt="Automatic sprinkler system watering lush green lawn"
                            className="w-full h-full object-cover opacity-50"
                            src="/images/services/hydro-systems-hero.jpg"
                            fill
                            priority
                        />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="mb-4">
                                <Breadcrumbs
                                    items={[
                                        { label: t('hydro_title'), href: '/services/hydro-systems' }
                                    ]}
                                />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Next-Gen Hydration
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
                                Precision <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">Hydration</span> <br />
                                Systems.
                            </h1>
                            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
                                Intelligent water management that adapts to weather, season, and soil conditions. Conserve resources while maintaining a flawless landscape.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contacts?subject=Hydro" className="bg-primary hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(20,184,116,0.3)] hover:shadow-[0_0_30px_rgba(20,184,116,0.5)] flex items-center gap-2 group">
                                    {t('hydro_cta')}
                                    <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
                                    View Technical Specs
                                </button>
                            </div>
                        </div>

                        {/* Dashboard Mockup */}
                        <div className="relative hidden md:block h-[500px] animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass-card rounded-2xl p-6 z-20 border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                        <p className="text-white font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary"></span> Active
                                        </p>
                                    </div>
                                    <span className="material-icons-round text-primary/50 text-4xl">wifi_tethering</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="neumorphic-inset rounded-lg p-3">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-slate-400">Moisture</span>
                                            <span className="text-primary font-mono">68%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '68%' }}></div>
                                        </div>
                                    </div>
                                    <div className="neumorphic-inset rounded-lg p-3">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-slate-400">Pressure</span>
                                            <span className="text-primary font-mono">4.2 bar</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                                    <span>Zone A-4 Active</span>
                                    <span className="font-mono">14:02 PM</span>
                                </div>
                            </div>

                            {/* Floating Labels */}
                            <div className="absolute top-20 right-10 p-4 bg-[#d4cbb8]/10 backdrop-blur-md border border-[#d4cbb8]/20 rounded-2xl flex items-center gap-3 animate-bounce shadow-lg">
                                <span className="material-icons-round text-[#c2b59b]">wb_sunny</span>
                                <div>
                                    <p className="text-xs text-[#c2b59b]/70 uppercase">UV Index</p>
                                    <p className="text-sm text-[#d4cbb8] font-mono font-bold">High</p>
                                </div>
                            </div>
                            <div className="absolute bottom-32 left-0 p-4 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center gap-3 animate-bounce-slow shadow-lg">
                                <span className="material-icons-round text-primary">opacity</span>
                                <div>
                                    <p className="text-xs text-primary/70 uppercase">Saved Today</p>
                                    <p className="text-sm text-white font-mono font-bold">124 Gal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Features Section */}
                <section className="py-24 relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Autonomous Ecology.</h2>
                            <p className="text-slate-400 max-w-2xl text-lg">We engineer ecosystems that sustain themselves. Our smart irrigation grid utilizes IoT sensors to deliver precise hydration only when and where it's needed.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                            <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group border-white/5 hover:border-primary/30 transition-all duration-300">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-icons-round text-9xl text-primary">settings_remote</span>
                                </div>
                                <div className="h-full flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                                            <span className="material-icons-round">smartphone</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Remote Command Center</h3>
                                        <p className="text-slate-400 max-w-md">Control your entire landscape from anywhere in the world. Adjust schedules, monitor usage, and receive leak alerts instantly via our dedicated app.</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-8 cursor-pointer hover:underline">
                                        Explore Interface <span className="material-icons-round text-sm">arrow_outward</span>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-[#d4cbb8]/30 transition-all duration-300">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#d4cbb8]/20 flex items-center justify-center mb-4">
                                        <span className="material-icons-round text-[#d4cbb8]">cloud_sync</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Weather Adaptive</h3>
                                    <p className="text-slate-400 text-sm">System automatically pauses during rain and adjusts output based on local evapotranspiration rates.</p>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-blue-400/30 transition-all duration-300">
                                <div className="h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                                            <span className="material-icons-round text-blue-400">water_drop</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Water Conservation</h3>
                                        <p className="text-slate-400 text-sm">Rotary nozzles and drip irrigation reduce water waste by up to 40% compared to traditional spray heads.</p>
                                    </div>
                                    <div className="text-3xl font-mono text-white mt-8">
                                        -40% <span className="text-xs text-slate-500 font-sans uppercase">Usage</span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <span className="material-icons-round text-primary">precision_manufacturing</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Premium Hardware</h3>
                                    <p className="text-slate-400">We utilize industrial-grade Hunter® and Rain Bird® components, designed to withstand extreme climates and resist corrosion.</p>
                                    <ul className="space-y-2 text-sm text-slate-300 mt-4">
                                        <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">check_circle</span> Brass & Stainless Steel Fittings</li>
                                        <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">check_circle</span> Subsurface Drip Lines</li>
                                        <li className="flex items-center gap-2"><span className="material-icons-round text-primary text-sm">check_circle</span> Anti-Vandal Rotors</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full h-[240px] relative rounded-xl overflow-hidden">
                                    <img
                                        alt="Technical irrigation nozzle"
                                        className="w-full h-full object-cover opacity-80"
                                        src="/images/services/hydro-systems-1.jpg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-[#0b1611]/80 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 relative overflow-hidden z-20">
                    <div className="absolute inset-0 bg-[#1a2c24]/90 -z-10"></div>
                    <div className="absolute inset-0 leaf-texture opacity-20 -z-10"></div>

                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Engineering <span className="text-[#d4cbb8]">Process</span></h2>
                                <p className="text-slate-400 text-lg">From hydraulic calculation to digital calibration.</p>
                            </div>
                            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full text-sm font-medium transition-all backdrop-blur-sm flex items-center gap-2">
                                Download Specs PDF <span className="material-icons-round">download</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Horizontal Line (Desktop) */}
                            <div className="hidden md:block absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {[
                                { step: '01', title: 'Hydraulic Audit', desc: 'Analysis of water pressure & flow rate.', grad: 'from-[#6c8c64] to-[#4a6741]', icon: 'analytics' },
                                { step: '02', title: 'Installation', desc: 'Minimally invasive trenching & turf preservation.', grad: 'from-[#795548] to-[#5d4037]', icon: 'landscape', offset: true },
                                { step: '03', title: 'Smart Integration', desc: 'WiFi pairing and sensor calibration.', grad: 'from-[#d7ccc8] to-[#bcaaa4]', icon: 'router', dark: true },
                                { step: '04', title: 'Seasonal Tuning', desc: 'Winter blowout and spring start-up service.', grad: 'from-[#a5d6a7] to-[#81c784]', icon: 'loop', offset: true, dark: true },
                            ].map((p, i) => (
                                <div
                                    key={p.step}
                                    className={`
                                    relative p-8 rounded-[2.5rem] bg-gradient-to-br ${p.grad} 
                                    flex flex-col items-center text-center h-[320px] justify-between shadow-2xl transition-all duration-500 hover:-translate-y-2
                                    ${p.offset ? 'md:translate-y-12' : ''}
                                `}
                                >
                                    <div className="mt-4">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 shadow-xl">
                                            <span className={`material-icons-round text-4xl ${p.dark ? 'text-forest-deep' : 'text-white'}`}>{p.icon}</span>
                                        </div>
                                        <h3 className={`text-xl font-bold mb-3 ${p.dark ? 'text-forest-deep' : 'text-white'}`}>{p.title}</h3>
                                        <p className={`text-sm px-2 ${p.dark ? 'text-forest-deep/70' : 'text-white/80'}`}>{p.desc}</p>
                                    </div>
                                    <div className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest ${p.dark ? 'bg-forest-deep text-white/50' : 'bg-white/20 text-white'}`}>
                                        {p.step}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA section with Form */}
                <section className="py-24 relative overflow-hidden z-10">
                    <div className="absolute inset-0 z-0">
                        <img alt="Aerial view of garden" className="w-full h-full object-cover opacity-20" src="/images/services/hydro-systems-2.jpg" />
                        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest via-deep-forest/90 to-deep-forest/40"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 font-serif italic">
                                "Water is the soul of the landscape. Treat it with respect."
                            </h2>
                            <div className="space-y-12">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#d4cbb8]/10 flex-shrink-0 flex items-center justify-center border border-[#d4cbb8]/20 text-[#d4cbb8] font-bold text-xl">
                                        98%
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Coverage Uniformity</h4>
                                        <p className="text-slate-400 text-sm mt-2">Our MP Rotator technology ensures even distribution, eliminating brown spots and runoff.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center border border-primary/20 text-primary font-bold text-xl">
                                        24/7
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Active Monitoring</h4>
                                        <p className="text-slate-400 text-sm mt-2">Leak detection algorithms shut off valves instantly if abnormal flow is detected.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Request System Audit</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">First Name</label>
                                        <input className="w-full bg-[#0b1611]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-700" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Last Name</label>
                                        <input className="w-full bg-[#0b1611]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-700" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Property Address</label>
                                    <input className="w-full bg-[#0b1611]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-700" placeholder="123 Eco Lane" />
                                </div>
                                <button className="w-full bg-primary hover:bg-emerald-500 text-white font-bold py-4 rounded-xl mt-4 transition-all shadow-xl shadow-primary/20">
                                    Get Estimate
                                </button>
                                <p className="text-center text-[10px] text-slate-600">No commitment required. We respect your privacy.</p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
