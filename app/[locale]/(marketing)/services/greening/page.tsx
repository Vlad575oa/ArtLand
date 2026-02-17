import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Озеленение и ботаническая курация | TERRA.ART',
        titleEn: 'Greening & Botanical Curation | TERRA.ART',
        descriptionRu: 'Профессиональное озеленение территорий. Подбор растений, создание экосистем, уход за садом. TERRA.ART.',
        descriptionEn: 'Professional greening services. Plant selection, ecosystem creation, garden care. TERRA.ART.',
        path: '/services/greening',
        image: '/images/services/greening-hero.jpg',
    }, locale);
}

export default function GreeningPage() {
    return (
        <div className="bg-greening-background text-gray-100 font-display antialiased leading-relaxed min-h-screen overflow-x-hidden">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
                <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-greening-moss rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-greening-terracotta rounded-full mix-blend-overlay filter blur-[120px]"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] bg-greening-moss rounded-full mix-blend-overlay filter blur-[80px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-60"
                        alt="Lush dark green botanical garden"
                        src="/images/services/greening-hero.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-greening-background/90 via-greening-background/70 to-greening-background"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1410_100%)]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-greening-moss/30 bg-greening-moss/10 backdrop-blur-sm shadow-[0_0_15px_rgba(111,174,127,0.3)]">
                            <span className="w-2 h-2 rounded-full bg-greening-moss animate-pulse shadow-[0_0_10px_#6FAE7F]"></span>
                            <span className="text-greening-moss text-xs font-semibold tracking-widest uppercase">Premium Landscaping</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-white drop-shadow-xl">
                            Cultivating <br />
                            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-greening-moss to-greening-moss-light filter drop-shadow-lg leading-normal py-2 inline-block">Living</span> Art
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-md border-l-2 border-greening-moss/50 pl-6">
                            We design ecosystems, not just gardens. Specialized selection of flora adapted to your specific microclimate and soil composition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-golden-sand text-greening-surface px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-greening-golden flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                Start Project
                            </button>
                            <button className="border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/5">
                                <span className="material-icons-round text-greening-terracotta">play_circle</span>
                                View Showreel
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block relative pl-10 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-greening-moss/30 to-greening-moss/10 leaf-shape-organic blur-2xl animate-pulse duration-[4000ms]"></div>
                        <div className="relative bg-greening-surface/80 backdrop-blur-xl border border-white/10 p-3 rounded-[3rem_1rem_3rem_1rem] overflow-hidden shadow-greening-neumorphic transform rotate-2 hover:rotate-0 transition-all duration-700 group">
                            <img
                                className="rounded-[2.5rem_0.8rem_2.5rem_0.8rem] w-full h-[500px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                                alt="Exotic leaf with water drops"
                                src="/images/services/greening-1.jpg"
                            />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass-panel p-4 rounded-2xl flex items-center justify-between border-l-4 border-l-greening-moss bg-greening-surface/60 backdrop-blur-md">
                                    <div>
                                        <p className="text-xs text-greening-moss-light uppercase tracking-wider mb-1 font-bold">Featured Specimen</p>
                                        <p className="text-white font-medium text-lg">Monstera Deliciosa</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-full bg-golden-sand text-greening-surface flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                        <span className="material-icons-round text-xl">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section className="py-24 bg-greening-background relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-greening-moss/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Science Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-greening-soil to-greening-terracotta font-serif italic py-1 inline-block">Soil</span></h2>
                            <p className="text-gray-400 max-w-lg">Our botanical architects analyze your environment to curate plants that don't just survive, but thrive.</p>
                        </div>
                        <Link
                            href="#"
                            className="text-greening-terracotta hover:text-white transition-colors flex items-center gap-2 text-sm font-medium uppercase tracking-widest group"
                        >
                            Full Analysis Process <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
                        <div className="md:col-span-2 row-span-1 md:row-span-2 group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-greening-neumorphic border border-white/5">
                            <img
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                alt="Rich dark soil texture"
                                src="/images/services/greening-2.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-greening-background via-transparent to-transparent"></div>
                            <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5">
                                <span className="material-icons-round text-4xl text-white/80">landscape</span>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="bg-greening-terracotta text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-lg">Soil Analysis</div>
                                        <h3 className="text-4xl font-display text-white mb-3">Terroir Composition</h3>
                                        <p className="text-gray-300 max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Understanding the pH balance, nutrient density, and drainage capability of your land is the first step to a sustainable landscape.
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md w-14 h-14 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/10 shadow-lg">
                                        <span className="material-icons-round text-white text-xl">science</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative rounded-[2rem] bg-greening-surface border border-white/5 p-8 flex flex-col justify-between hover:border-greening-moss/30 transition-all shadow-greening-neumorphic hover:-translate-y-1 duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-greening-surface to-greening-background border border-white/5 flex items-center justify-center text-greening-moss mb-4 shadow-inner">
                                <span className="material-icons-round text-2xl">water_drop</span>
                            </div>
                            <div>
                                <h4 className="text-2xl text-white font-medium mb-2">Hydro-Zoning</h4>
                                <p className="text-sm text-gray-400">Grouping plants with similar water needs to maximize efficiency.</p>
                            </div>
                            <div className="absolute top-8 right-8 text-5xl font-bold text-white/5 group-hover:text-greening-moss/10 transition-colors">01</div>
                        </div>

                        <div className="group relative rounded-[2rem] bg-greening-surface border border-white/5 p-8 flex flex-col justify-between hover:border-greening-terracotta/30 transition-all shadow-greening-neumorphic hover:-translate-y-1 duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-greening-surface to-greening-background border border-white/5 flex items-center justify-center text-greening-terracotta mb-4 shadow-inner">
                                <span className="material-icons-round text-2xl">wb_sunny</span>
                            </div>
                            <div>
                                <h4 className="text-2xl text-white font-medium mb-2">Solar Mapping</h4>
                                <p className="text-sm text-gray-400">Tracking light patterns to position sun-loving and shade-tolerant species.</p>
                            </div>
                            <div className="absolute top-8 right-8 text-5xl font-bold text-white/5 group-hover:text-greening-terracotta/10 transition-colors">02</div>
                        </div>

                        <div className="md:col-span-3 lg:col-span-1 rounded-[2rem] leaf-shape-organic bg-gradient-to-br from-greening-surface to-[#13231C] border border-white/5 p-10 flex flex-col justify-center relative overflow-hidden group shadow-greening-neumorphic">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-greening-moss/10 rounded-full blur-2xl"></div>
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-greening-terracotta/10 rounded-full blur-2xl"></div>
                            <h4 className="text-3xl text-white font-medium mb-6 z-10">Microclimate <br />Adaptation</h4>
                            <ul className="space-y-4 z-10">
                                <li className="flex items-center text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-greening-moss/20 flex items-center justify-center mr-4 text-greening-moss">
                                        <span className="material-icons-round text-sm">air</span>
                                    </div>
                                    Wind resistance
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-greening-moss/20 flex items-center justify-center mr-4 text-greening-moss">
                                        <span className="material-icons-round text-sm">ac_unit</span>
                                    </div>
                                    Frost tolerance
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-greening-moss/20 flex items-center justify-center mr-4 text-greening-moss">
                                        <span className="material-icons-round text-sm">thermostat</span>
                                    </div>
                                    Heat resilience
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Library Section */}
            <section className="py-24 bg-[#0F1C16] relative z-20">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[80%] bg-[#121f1a] -skew-y-3 z-0"></div>
                <div className="container mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
                    <div>
                        <span className="text-greening-moss text-sm font-bold tracking-widest uppercase mb-2 block flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-greening-moss"></span> The Library
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-white">Curated <span className="font-serif italic text-greening-moss py-1 inline-block">Flora</span></h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-14 h-14 rounded-full bg-greening-surface border border-white/5 text-white hover:bg-white hover:text-greening-background transition-all flex items-center justify-center shadow-greening-neumorphic-sm">
                            <span className="material-icons-round">west</span>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-greening-surface border border-white/5 text-white hover:bg-white hover:text-greening-background transition-all flex items-center justify-center shadow-greening-neumorphic-sm">
                            <span className="material-icons-round">east</span>
                        </button>
                    </div>
                </div>

                <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 pb-20 snap-x snap-mandatory relative z-10">
                    {[
                        { name: 'Japanese Painted Fern', species: 'Athyrium niponicum', img: '/images/services/plants/japanese-fern.jpg', tags: ['Shade', 'Moist'], color: 'greening-moss' },
                        { name: 'European Olive', species: 'Olea europaea', img: '/images/services/plants/olive-tree.jpg', tags: ['Sun', 'Drought'], color: 'greening-terracotta' },
                        { name: 'Fiddle Leaf Fig', species: 'Ficus lyrata', img: '/images/services/plants/fiddle-leaf-fig.jpg', tags: ['Indirect', 'Warm'], color: 'greening-moss' },
                        { name: 'Magnolia', species: 'Magnolia grandiflora', img: '/images/services/plants/magnolia.jpg', tags: ['Full Sun', 'Rich Soil'], color: 'greening-terracotta' }
                    ].map((plant, i) => (
                        <div key={i} className="min-w-[320px] md:min-w-[380px] snap-center group pt-12">
                            <div className="relative h-[500px] bg-greening-surface rounded-[2rem] border border-white/5 p-8 flex flex-col items-center justify-end hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 shadow-greening-neumorphic">
                                <div className="absolute -top-12 w-56 h-64 overflow-hidden rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-greening-surface">
                                    <img className="w-full h-full object-cover" alt={plant.name} src={plant.img} />
                                </div>
                                <div className="text-center relative z-10 w-full pt-12">
                                    <h3 className="text-2xl text-white font-medium mb-1">{plant.name}</h3>
                                    <p className={`text-${plant.color} italic text-sm mb-6`}>{plant.species}</p>
                                    <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                                    <div className="flex justify-center gap-3">
                                        {plant.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 rounded-full bg-greening-surface text-gray-400 text-xs border border-white/5 shadow-inner">{tag}</span>
                                        ))}
                                    </div>
                                    <button className={`mt-8 w-full py-3 rounded-xl border border-${plant.color}/30 text-${plant.color} text-sm hover:bg-${plant.color} hover:text-white transition-colors`}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology Process */}
            <section className="py-32 bg-greening-background relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">From Seed to <span className="text-greening-moss font-serif italic py-1 inline-block">Sanctuary</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our transparent methodology ensures that every stage of your landscape's development is handled with precision and care.</p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-32 overflow-hidden z-0">
                            <svg className="w-full h-full text-white/5" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2" viewBox="0 0 1200 100">
                                <path d="M0 50 C 300 10, 300 90, 600 50 C 900 10, 900 90, 1200 50"></path>
                            </svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                            {[
                                { step: 'Analysis', desc: 'Detailed soil testing, light mapping, and climate assessment.', icon: 'analytics', color: 'greening-moss', shape: 'leaf-shape-organic' },
                                { step: 'Selection', desc: 'Curating a palette of plants that align with your aesthetic.', icon: 'grid_view', color: 'greening-terracotta', circle: true },
                                { step: 'Planting', desc: 'Precision installation with organic soil amendments.', icon: 'park', color: 'greening-moss', shape: 'leaf-shape-organic-reverse' },
                                { step: 'Stewardship', desc: 'Ongoing care and adjustments as your garden matures.', icon: 'spa', color: 'white', circle: true }
                            ].map((step, i) => (
                                <div key={i} className="group">
                                    <div className="relative flex flex-col items-center text-center">
                                        <div className={`w-24 h-24 ${step.shape || (step.circle ? 'rounded-full' : '')} bg-greening-surface border border-white/5 flex items-center justify-center mb-8 group-hover:bg-${step.color} group-hover:scale-110 transition-all duration-500 shadow-greening-neumorphic relative z-10`}>
                                            <span className={`material-icons-round text-3xl text-${step.color} group-hover:text-${step.color === 'white' ? 'background-dark' : 'white'} transition-colors`}>{step.icon}</span>
                                        </div>
                                        <h3 className="text-xl text-white font-medium mb-3">{step.step}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed px-2">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 bg-greening-background border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="relative bg-gradient-to-br from-greening-surface to-[#0d1f18] p-12 md:p-16 rounded-[3rem_0.5rem_3rem_0.5rem] border border-white/5 text-center shadow-greening-neumorphic">
                        <span className="material-icons-round text-6xl text-greening-moss/10 absolute top-8 left-10">format_quote</span>
                        <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-8 relative z-10">
                            "They didn't just plant a garden; they engineered a <span className="text-greening-moss italic">living, breathing extension</span> of our home that changes beautifully with every season."
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <img
                                className="w-14 h-14 rounded-full object-cover border-2 border-greening-moss shadow-lg"
                                alt="Alexander V."
                                src="/images/services/greening-3.jpg"
                            />
                            <div className="text-left">
                                <div className="text-white font-medium">Alexander V.</div>
                                <div className="text-greening-moss text-sm">Residential Client, Kyoto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Float CTA */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-golden-sand hover:brightness-110 text-greening-surface pl-6 pr-2 py-2 rounded-full shadow-greening-golden flex items-center gap-3 transition-all transform hover:scale-105 group">
                    <span className="font-bold text-sm">Request Consult</span>
                    <div className="w-10 h-10 rounded-full bg-greening-surface text-white flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300">
                        <span className="material-icons-round text-sm">arrow_outward</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
