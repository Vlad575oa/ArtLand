'use client'

import Link from 'next/link'

export default function HardscapingPage() {
    return (
        <div className="bg-hardscaping-bg text-[#d0d6d3] font-display antialiased leading-relaxed min-h-screen overflow-x-hidden bg-grain-texture">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-hardscaping-bg via-hardscaping-bg/90 to-hardscaping-bg/40 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-hardscaping-bg via-transparent to-transparent z-10"></div>
                    <img
                        alt="Luxury stone garden path"
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuS4k8l1PZiv4cENWFrbU6dwNq7SimGtSsyK9wNRvUtenSyq01V5NTLUinUFq-1fcxUkS1asDwN-hLosb6CFad8II3rH4UiCQOEhV1MVP4uWlJzW9is_dA4Id5fTy1Job6PqjPiPmjq33h8HD12QOyauWo7_K9J_MehmrbwTaVwURcXnzEwzf_NDoEt7M7eAve5Dkb2fu-GXdJWGuQo_Ry4YJIxpEnD7AQxM9pdtMk6MVHsNrMDCpaOu-uyWGrFL9Ady7IkYqodIA"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-24">
                    <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-hardscaping-surface/40 border border-white/5 backdrop-blur-md mb-10 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-hardscaping-primary animate-pulse shadow-[0_0_10px_#d4a373]"></span>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-hardscaping-primary font-bold">Refined Site Improvement</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight leading-[0.9] tracking-tighter text-white mb-10 drop-shadow-2xl">
                            Elevating <br />
                            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-stone-400 italic font-serif py-1 inline-block">Landscapes</span> <br />
                            with <span className="text-hardscaping-accent font-light">Nature.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-300/80 max-w-xl font-light leading-relaxed border-l border-hardscaping-primary/30 pl-6">
                            We craft the skeleton of your garden. From bespoke stone pathways to architectural retaining walls, we merge engineering with art using raw, honest materials.
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-hardscaping-surface/80 to-hardscaping-bg/80 backdrop-blur-xl border border-white/5 shadow-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-light text-hardscaping-primary tracking-tighter">15+</span>
                                    <span className="text-xs text-hardscaping-primary/70 uppercase tracking-widest mt-1">Years Experience</span>
                                </div>
                                <span className="material-icons text-white/10 text-5xl">architecture</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-hardscaping-primary/50"></div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="h-16 w-16 rounded-full bg-hardscaping-surface shadow-hardscaping-btn border border-white/5 flex items-center justify-center group hover:scale-105 transition-all duration-300">
                                <span className="material-icons text-white group-hover:text-hardscaping-primary transition-colors">south</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-32 relative bg-hardscaping-bg z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 text-[12rem] leading-none font-bold text-white/5 select-none pointer-events-none -z-10 font-serif">01</div>
                            <h2 className="text-4xl md:text-6xl font-extralight mb-10 text-white leading-tight">
                                Where nature meets <br /><span className="text-hardscaping-primary font-serif italic py-1 inline-block">Architecture.</span>
                            </h2>
                            <div className="h-px w-32 bg-gradient-to-r from-hardscaping-primary to-transparent mb-10"></div>
                            <p className="text-stone-400 text-lg leading-relaxed mb-8 font-light">
                                Hardscaping is not just about laying stone; it's about directing flow, creating pauses, and framing nature. Our approach creates a dialogue between the built environment and organic growth.
                            </p>
                            <p className="text-stone-400 text-lg leading-relaxed font-light">
                                We use locally sourced materials and advanced drainage engineering to ensure your landscape stands the test of time, weathering beautifully alongside the seasons.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-hardscaping-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-hardscaping-neumorphic border border-white/5">
                                <img
                                    alt="Modern concrete stairs with lighting"
                                    className="w-full h-[600px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbSA1PVc-T-wV6Jk0tKzf_W7hU5RFxh8RuYb7kubR1rhbAWJfg37y3ERLalfI_cyqj6GaLC3txa945IX4ffgHJChXMqsllOYaj1FT_1rHQGheRy-2axmH7iQIrxb1bQwooVl_sPsG-7-q4-fCDPAIx086mGk5vVpYO5KRA6xgLux8f2aFiWW6MnBclLej0ZSjQw8r7V-hEM1I-kt62nZumzc5Td75JDSsXqM_IBYjEaHEdGzrLPrukoecdLyzEVLJvMUTyoslmvzs"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-hardscaping-bg/90 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-[#2a3630] p-8 rounded-2xl border border-white/5 shadow-2xl max-w-sm hidden md:block z-20">
                                <p className="text-base italic font-serif text-white/90 mb-4 leading-relaxed">"The details are not the details. They make the design."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-hardscaping-primary"></div>
                                    <p className="text-xs text-hardscaping-primary uppercase tracking-widest font-bold">Charles Eames</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-32 bg-[#25302a] relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hardscaping-accent/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
                        <div>
                            <span className="text-hardscaping-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hardscaping-primary"></span>
                                Our Expertise
                            </span>
                            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">Core Competencies</h2>
                        </div>
                        <Link
                            href="#"
                            className="hidden md:flex items-center gap-3 text-white/70 hover:text-hardscaping-primary transition-colors mt-8 md:mt-0 group"
                        >
                            <span className="text-xs font-bold tracking-widest uppercase">View Full Service List</span>
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Pathways & Paving', desc: 'Precision laying of natural stone, granite, and clinker. Creating seamless transitions between zones.', icon: 'edit_road', features: ['Natural Stone Slab', 'Permeable Pavers', 'Floating Steps'] },
                            { title: 'Architectural Forms', desc: 'Small architectural forms (SAF) that define space. Pergolas, benches, and decorative retaining walls.', icon: 'deck', features: ['Retaining Walls', 'Custom Pergolas', 'Fire Pits'], highlighted: true },
                            { title: 'Engineering', desc: 'The invisible infrastructure. Integrated drainage systems and ambient landscape lighting.', icon: 'water_drop', features: ['French Drains', 'Low Voltage Lighting', 'Irrigation Setup'] }
                        ].map((item, i) => (
                            <div key={i} className={`group p-10 rounded-[2rem] ${item.highlighted ? 'bg-gradient-to-b from-[#2e3d35] to-hardscaping-bg border-hardscaping-primary/20 scale-105 z-10 shadow-2xl' : 'bg-hardscaping-bg border-white/5'} border hover:border-hardscaping-primary/30 transition-all duration-500 relative overflow-hidden hover:-translate-y-2`}>
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-hardscaping-primary/10 transition-colors duration-500"></div>
                                <div className={`w-16 h-16 rounded-2xl ${item.highlighted ? 'bg-hardscaping-primary text-white' : 'bg-hardscaping-surface text-hardscaping-primary shadow-hardscaping-inset'} flex items-center justify-center mb-8 transition-all duration-500 group-hover:text-white group-hover:bg-hardscaping-primary`}>
                                    <span className="material-icons text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-4">{item.title}</h3>
                                <p className="text-stone-400 mb-10 leading-relaxed font-light text-sm">
                                    {item.desc}
                                </p>
                                <ul className="space-y-4 mb-10 border-t border-white/5 pt-6">
                                    {item.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-stone-300 font-light">
                                            <span className="material-icons text-hardscaping-primary text-xs">check_circle</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`inline-flex items-center ${item.highlighted ? 'text-hardscaping-primary' : 'text-white/50'} text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group-hover:gap-2`}>
                                    Learn more <span className="material-icons text-sm ml-1">arrow_forward</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Material Library */}
            <section className="py-32 bg-hardscaping-bg relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Material Library</h2>
                            <p className="text-stone-400 font-light text-lg">
                                We source only the finest natural materials. Explore the textures that will define your landscape.
                            </p>
                        </div>
                        <div className="flex gap-2 mt-8 md:mt-0">
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                                <span className="material-icons">chevron_left</span>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                                <span className="material-icons">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-10 overflow-x-auto pb-16 snap-x snap-mandatory hide-scrollbar p-4 no-scrollbar">
                        {[
                            { name: 'Basalt Grey', mat: 'Granite', finish: 'Rough Cut', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZgVt0cBJFm_UCwHBydosHMxNEv1Z_vnQSVsu6vhny2heUW6TSEOUVx6vfTUeRiQ4HqTsI4l942uDQ21obsZ3K290JL4riSUL_D_0EOMa-NCEHx3lD3xkikUNdzuas3_SNk0RsikutsW-aVCtR3H1PzjRYFTm542x0PPxUgUgLTBUqva3XO6ybSIsI-VcL3e1y5gy6s3FCx5iE5wL1xWTpj-Xw129iPmoSvdhmHLsSGDXdIiMJhLdWzx_QcUBTxbSe0egUevwI8U' },
                            { name: 'Brazilian Ipe', mat: 'Hardwood', finish: 'Oiled Finish', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsvVAHQRG03YBGUCFSo3mSK1Yfqzj0rKJrSrTAsAOVyeNWWTlKF877A5JitaQx6-EX7_B8kTtuqoqD6mgQso1uuae0LPtv1_f3k35m9ltIEbAB-pYkZCqGTPqb2VBXS_QxMVzCB4tRCF-aKniKgXXCmFnjmM5S3err6lY2dC0dYJAya3B-448psT8OpUToarBOON09Bw5hjcHvKda95yEi3emly5N2OVOxFzMoxbMuZHXJEyVUBfbpQO1AhhPzMmpKn4_Cu88jbSE', border: 'wood' },
                            { name: 'Travertine Cream', mat: 'Limestone', finish: 'Honed', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFKIIdcug0mXFa2OA5KU7SpZ-B89uies1pZb0YiZ6p3WfxucgXA4fu_fthjJ0yDLCJgMnuNcmorkkUuNuDRoVGQogFQNSMg86WAUy_BYVzfQ6zl2hZLc1RTTdbBeWMkbSaFbjbwWPE-beqvVAmHgMo4QLP5n8uQOSzh69lTYZWLlP1bmP1DOcju_ZWfDvCbNxkIjfpXNecDzJu63zZr1iVEzDRvAUDhrgo1j4kFRt59ZWa1TjuIj3mhCbCxYGdbR0mO1bmgxrM0Ow' },
                            { name: 'Midnight Slate', mat: 'Natural Stone', finish: 'Natural Cleft', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQEu9HXCAqLhWam8EvCszDThPG2A8XXsY36Z605KPX2MEplfab2eiylXrjsr13vt0BB0qLeANB2DG-0AXZ_JZrICIdtsNDEI_G6LcR-iTmpaG4RNAQCmeNwGawHC4xDfjl4ZRNX2krVnpIRqfLRFYP4EAfSHW4MZkwE7cPGl1wSpdANSvVpU3bdqo56BkoyUKMzoNlTzDdQKH8HYVm_uZVPaSrzfS7MZw4htBuwE-CZoEcahcTEUkfDP5t-i69U8zbOttmg5CQ_cs' }
                        ].map((mat, i) => (
                            <div key={i} className={`snap-center shrink-0 w-80 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#2a3630] to-hardscaping-bg shadow-hardscaping-neumorphic flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-transform duration-500 border ${mat.border === 'wood' ? 'border-hardscaping-wood/20' : 'border-white/5'}`}>
                                <div className={`w-56 h-56 rounded-full bg-hardscaping-surface mb-8 shadow-hardscaping-inset overflow-hidden border-8 border-[#232f29] relative flex items-center justify-center`}>
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" src={mat.img} alt={mat.name} />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                                </div>
                                <h4 className="text-xl font-medium text-white mb-2">{mat.name}</h4>
                                <p className="text-[10px] text-hardscaping-primary uppercase tracking-[0.2em] font-bold">{mat.mat}</p>
                                <div className="mt-6 px-4 py-2 rounded-full bg-white/5 text-xs text-stone-400">{mat.finish}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Section */}
            <section className="py-32 bg-[#25302a] relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">Transformation <br /> through <span className="text-hardscaping-primary font-medium font-serif italic py-1 inline-block">Design.</span></h2>
                            <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light">
                                See how we turn rugged, uneven terrain into polished, functional outdoor living spaces. Our site improvement process respects the land while taming it for human enjoyment.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { title: 'Site Analysis', desc: 'Full topographic survey and soil analysis.', icon: 'analytics' },
                                    { title: 'Hardscape Installation', desc: 'Sub-base preparation and precise laying.', icon: 'layers' },
                                    { title: 'Finishing Touches', desc: 'Sealing, jointing, and lighting integration.', icon: 'wb_sunny' }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-hardscaping-surface shadow-hardscaping-btn flex items-center justify-center text-hardscaping-primary mt-1 shrink-0 border border-white/5 group-hover:text-white group-hover:bg-hardscaping-primary transition-all duration-300">
                                            <span className="material-icons text-xl">{step.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">{step.title}</h4>
                                            <p className="text-sm text-stone-500 font-light">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-[#2f3d36]">
                                <img
                                    alt="After transformation"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNym8CyeeKN9klKtLxARQdN6hRymOcHy54VvXEL0Da9Qk8Xd6K0V13m5y2yKfZ6XU8F7vFL7OEuYxwag5zkWYt6556rVWtWelPZX7GNR6kqcy7HNUFjjogydJwDE9JYm0Xw12WgFpGyrDTXy3zTwOZBzDR8gDv5Upzmv2KyE6A3KJJ5_Gw3ppUc8j3H3t4xqhFY_KszoxkIhTfqDjMn5wvXYNAyom33ZZXldemblpt0GW9qKhJ2or1PKApEgFtR0PLUrL8ms4UZzU"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black/60 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                                    <img
                                        alt="Before transformation"
                                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyNmACYxlVMqfEjOcmdy0Ba-gTWrXRaFyoeBD_ItK1PBJ2aU9Qel-55LdkqUSXSZxkc_Oo_5S-9WmybWenW49rJKEa_5-W4WysNCDNQzMdUQ-YwwhqqiPeILkZVmWp3T3uQBwYrScb9-HuKF2epC8BAMTCrNZ1_OLcWPumNK8vi2iUPQ6iwYLxIr5AuoH0JUHxkT5Gmv9eliDRvzs-4xpZrHikxqEtksZ1vUFqHIDhVRwPJ6WP1Svq6FsRhHBemeI4l8-dkU3w4Pc"
                                    />
                                    <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">Before</div>
                                </div>
                                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/50 backdrop-blur cursor-ew-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20">
                                    <div className="w-12 h-12 rounded-full bg-hardscaping-primary flex items-center justify-center shadow-lg border-2 border-white">
                                        <span className="material-icons text-white text-lg">compare_arrows</span>
                                    </div>
                                </div>
                                <div className="absolute top-6 right-6 bg-hardscaping-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg border border-white/20">After</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative z-10 overflow-hidden bg-hardscaping-bg">
                <div className="absolute inset-0 bg-hardscaping-surface/30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hardscaping-primary/20 rounded-full blur-[100px] opacity-60"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight">
                        Ready to build your <br />
                        <span className="font-normal italic font-serif text-hardscaping-primary py-1 inline-block">Foundation?</span>
                    </h2>
                    <p className="text-xl text-stone-400 mb-16 font-light max-w-2xl mx-auto">
                        Schedule a consultation with our lead architect to discuss your site improvement needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 rounded-full bg-gradient-to-r from-hardscaping-primary to-hardscaping-primary-dark text-white font-bold tracking-widest uppercase text-xs hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                            Start Your Project
                            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <Link
                            href="/projects"
                            className="px-12 py-6 rounded-full border border-white/20 text-white font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-all duration-300"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
