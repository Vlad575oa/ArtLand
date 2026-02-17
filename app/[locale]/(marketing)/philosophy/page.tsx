import Link from 'next/link'

export default function PhilosophyPage() {
    return (
        <div className="relative z-10 pt-32 pb-20 overflow-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 ambient-light z-0 pointer-events-none" />
            <div className="fixed inset-0 noise-texture z-50 mix-blend-overlay opacity-20 pointer-events-none" />

            <main className="relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-light border border-white/5 text-xs text-primary font-semibold tracking-wider uppercase shadow-soft-neumorph">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Our Philosophy
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.1]">
                                Cultivating <br />
                                <span className="font-bold text-terracotta">Harmony.</span>
                            </h1>
                            <p className="text-lg text-sand-dark max-w-md leading-relaxed">
                                Where nature's ancient wisdom meets architectural precision. We don't just design landscapes; we curate living ecosystems that breathe.
                            </p>
                            <div className="flex items-center gap-6 lg:gap-12 pt-4">
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-primary">150+</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">Acres Restored</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-terracotta">12</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">Global Awards</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-primary">100%</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">Native Flora</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-soft-neumorph border-4 border-forest-light/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-60" />
                                <img
                                    alt="Mist covered modern minimalist garden landscape"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACPolX2rDHMS-94_yk24_c8eKoSHrtdNF_PLx2UyHav8_re4Ob2MqiJnfaxE29aFxZ_Q21w1cAEBraXUX5iT_83vjVMhH_Mb0KxEwHVEeuN2LRccPI0ZBeL-3H68hdbe_SVSuu_nXvMR6gaEIVHKrEVMqkywnt-K9hsyE-iWmlY_KmRrCLkz20TWx5j3D73u91Jsgq6Ht_ph-fNJVrGUWu1B1b-_XV5JKXIQ568hf5tjRARGz_GdjioZVnMp2TjqffgolJtwvckJg"
                                />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="p-5 bg-background-dark/70 backdrop-blur-md rounded-2xl border border-white/10 max-w-xs shadow-inflated">
                                        <p className="text-xs text-primary uppercase tracking-widest mb-1">Featured Project</p>
                                        <p className="text-white font-medium">Kyoto Zen Residence</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
                        </div>
                    </div>
                </section>

                <div className="leaf-divider" />

                <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-3xl md:text-4xl font-light text-white">Engineered <span className="font-bold text-primary">Nature.</span></h2>
                        <p className="text-sand-dark max-w-lg text-sm md:text-base">
                            Our methodology goes beyond aesthetics. We employ scientific analysis to ensure every plant, stone, and water feature contributes to a self-sustaining biome.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative rounded-[2rem] bg-forest-light shadow-inflated overflow-hidden transition-all duration-500 hover:-translate-y-2">
                            <div className="p-10 lg:p-14 relative z-10">
                                <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:opacity-15 transition-opacity transform rotate-12">
                                    <span className="material-icons text-[12rem] text-primary">spa</span>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-forest-light flex items-center justify-center mb-8 shadow-soft-neumorph text-primary border border-white/5">
                                    <span className="material-icons text-3xl">balance</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Eco-Balance Systems</h3>
                                <p className="text-sand-dark leading-relaxed mb-8">
                                    We design closed-loop ecosystems where waste becomes nutrient. Our water retention landscapes capture 95% of rainfall, reducing irrigation needs and creating resilient micro-climates.
                                </p>
                                <ul className="space-y-4 text-sm text-sand">
                                    {[
                                        'Soil microbiome regeneration',
                                        'Integrated pest management',
                                        'Carbon-sequestering hardscapes'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-deep shadow-soft-neumorph-inset text-primary">
                                                <span className="material-icons text-[10px]">check</span>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="group relative rounded-[2rem] bg-forest-light shadow-inflated overflow-hidden transition-all duration-500 hover:-translate-y-2">
                            <div className="p-10 lg:p-14 relative z-10">
                                <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:opacity-15 transition-opacity transform rotate-12">
                                    <span className="material-icons text-[12rem] text-terracotta">wb_sunny</span>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-forest-light flex items-center justify-center mb-8 shadow-soft-neumorph text-terracotta border border-white/5">
                                    <span className="material-icons text-3xl">thermostat</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Climatic Selection</h3>
                                <p className="text-sand-dark leading-relaxed mb-8">
                                    Every species is chosen based on 50-year climate projections. We prioritize hyper-local natives that thrive in your specific soil chemistry and sun exposure without artificial life support.
                                </p>
                                <ul className="space-y-4 text-sm text-sand">
                                    {[
                                        'Drought-tolerant architectural flora',
                                        'Seasonal adaptive planting',
                                        'Heat-island reduction strategies'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-deep shadow-soft-neumorph-inset text-terracotta">
                                                <span className="material-icons text-[10px]">check</span>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="leaf-divider" />

                <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Journey</span>
                        <h2 className="text-3xl font-light text-white mt-2">Evolution of <span className="font-bold">Sustainability</span></h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-forest-light rounded-full shadow-soft-neumorph-inset hidden md:block" />
                        <div className="space-y-12 md:space-y-24">
                            {[
                                { year: '2010', title: 'Foundation', desc: 'Terraform established with a single mission: to challenge traditional, wasteful landscaping practices.', color: 'terracotta' },
                                { year: '2015', title: 'The Water Shift', desc: 'Introduced our proprietary hydro-zoning technique, reducing client water usage by an average of 60%.', color: 'primary' },
                                { year: '2023', title: 'Carbon Neutral', desc: 'Achieved full carbon neutrality across all operations and supply chains. First in the region.', color: 'terracotta' }
                            ].map((item, i) => (
                                <div key={i} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                                    <div className={`md:w-5/12 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left order-3'} mt-4 md:mt-0 px-6`}>
                                        <div className={`p-6 bg-forest-light rounded-2xl shadow-inflated border-b-4 border-${item.color} inline-block w-full text-left`}>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-sand-dark text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
                                        <div className="w-16 h-16 rounded-full bg-forest-light border-4 border-background-dark flex items-center justify-center z-10 shadow-inflated group-hover:scale-110 transition-transform">
                                            <span className={`text-sm font-bold text-${item.color}`}>{item.year}</span>
                                        </div>
                                    </div>
                                    <div className={`md:w-5/12 ${i % 2 === 0 ? 'order-3' : 'order-1'}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="leaf-divider" />

                <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl font-light text-white mb-4">The <span className="font-bold text-primary">Cultivators</span></h2>
                            <p className="text-sand-dark">Minds dedicated to the art of living architecture.</p>
                        </div>
                        <Link href="/team" className="text-primary hover:text-white transition-colors flex items-center gap-2 group">
                            View All Members <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Elias Thorne', role: 'Lead Architect', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnlua_Rr5Xu2exqBkGVuybJqQnndzo8DL0ajEEHr4yZ0q93ap4jbWUrTlOxtZFd4sDK7dfgkv0sOO0UTFbD2lKDHqVh-CZjQ4FRVBp41GJFzT2yHXyw8yvEWf-E4bE5olLtXUHZUiJL5AYMk37GFb0Enx6jDJOwN_cNTjRfEv8jaJ5uaEMtktxeiFKP8oqeR2dI8M6GolFRvHVUyFPuXDGc5JGI8-GR4fCkgQmNpupQwsuYLVSaXQZOrqDmcMuisq7oD0n4lat30s', color: 'terracotta' },
                            { name: 'Dr. Sarah Lin', role: 'Head Botanist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwFzJKim0Mvfen4cdCnDdmx5Me6GNuTmSVYSijvTTSkSo74dwoQU2ZhcP-YpL-0mJ_6HUxWVx9vzIEhTuKNwTNn4ZtM2jYh6IokiIZhXZy4RM0OYLFDhiteNfG2la3IxN1eNdduKrrd6DaBi5jd17oSjMBnQ-it52lINIFFRsDPdUv4vHu04mZBo5IEF3Qy46QweiVpmXpPO7fb2ke1R34sAbEA-cuBKNj6qvE4piMtA4wMVFUb8JPAAz3FCqpbWEnM79R44snz6E', color: 'primary' },
                            { name: 'Marcus Vance', role: 'Sustainability Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1WUAbTFarOk4jLX0DYNMpFeYK2bmBOUWJez0NoGgt9K_bUaJDUyu6uZST1gMigG_7onaIyFR73gGQuEeA24k1nKggsrpeN2ZoeMPc_ri9wqONtU92MVRsDIo3HgabrUWQ6kyDe1KXaPbbjUkLgjl9whmzOlP2nQ57TXwZUvkTdW7R2RnhYuyvfCr-NPdiN7s09nhbp64WqqnEaWwlkbE62Ty0kgmxUBVZERsTozfxKSjn5FRg4zmhIuVCaryLV6g4lilR0c7u0Yg', color: 'terracotta' }
                        ].map((member, i) => (
                            <div key={i} className="group bg-forest-light rounded-[2.5rem] p-8 text-center shadow-inflated hover:translate-y-[-5px] transition-all duration-300">
                                <div className="relative w-36 h-36 mx-auto mb-8">
                                    <div className="absolute inset-0 rounded-full shadow-soft-neumorph-inset bg-forest-deep flex items-center justify-center" />
                                    <img
                                        alt={member.name}
                                        className="w-28 h-28 object-cover rounded-full relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                                        src={member.img}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className={`text-${member.color} text-xs uppercase tracking-widest mb-6 font-bold`}>{member.role}</p>
                                <p className="text-sand-dark text-sm mb-8 opacity-90 leading-relaxed px-2">
                                    Dedicated to the art of living architecture and sustainable design legacies.
                                </p>
                                <div className="flex justify-center gap-6">
                                    <a className="w-10 h-10 rounded-full bg-forest-light shadow-inflated flex items-center justify-center text-sand hover:text-primary hover:scale-110 transition-all" href="#">
                                        <span className="material-icons text-lg">alternate_email</span>
                                    </a>
                                    <a className="w-10 h-10 rounded-full bg-forest-light shadow-inflated flex items-center justify-center text-sand hover:text-primary hover:scale-110 transition-all" href="#">
                                        <span className="material-icons text-lg">share</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="relative rounded-[3rem] overflow-hidden bg-forest-light p-12 lg:p-24 text-center shadow-inflated border border-white/5">
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#8fa86e 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">Ready to shape your <br /><span className="font-bold text-terracotta">Ecosystem?</span></h2>
                            <p className="text-sand-dark mb-10 text-lg">Let's discuss how we can transform your space into a sustainable legacy.</p>
                            <button className="gold-btn px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
