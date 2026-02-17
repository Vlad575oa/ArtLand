'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function PortfolioPage() {
    const t = useTranslations('Projects');
    const [activeCategory, setActiveCategory] = useState(t('categories.all'))

    const categories = [
        t('categories.all'),
        t('categories.residential'),
        t('categories.commercial'),
        t('categories.restoration')
    ];

    const projects = [
        {
            title: 'Terracotta Gardens',
            category: t('categories.residential'),
            desc: 'Restoring arid soil for a lush Mediterranean oasis.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqoKA0zf30djiztBqyLOZDXbhNDWEgGq4GcI1kJAy5eFPyBvY5O-0pgRJNTZG4vRvV2L064stMUVL0pzeTgT1m64Jgz7tuj-u9ZAxwTMDZIqsM8VCugNIcIpYKt8jCYkD-1DyADCbAEXzPpPRfMNWAfam5T3_-I-aRTwE12Y0MBeA5dmdm6tivdotScFToCt1fGa_IvQ3uPEKGY0lD_xKKbNqOCKyrbVUdY77QDQBxTaAnK0M1lfynySGap4-uW7XrkjtFukGs1-U',
            theme: 'from-[#3d2c1f]/95 via-[#3d2c1f]/40',
            accent: '#8c6b50'
        },
        {
            title: 'Emerald Forest',
            category: t('categories.estate'),
            desc: 'Integrating modern living into a dense woodland slope.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbAWxxQ_xyBBUIoHl7gOSQxyTQeO28L_yhLlPpsKYFqbjVCHOTwOincgHQ4VUQXSM443wOn0R20meXAkjEsc_iiTqE62hTXGQ0sedMCEjVRUUWtscgvACnKhPlcfiOHXh5h30A2yJ4iUF5vdNwGheFCUsz7BHylpE0Kyz8WCTWV0NFpdO51GlHMa2dtnOeHOHv4wOlF4GXrPyKub-mE4XxdgCEyAfvVqVB3KFXCSpqQFCadbraR22ziFJCzbl6Jr9Ewxxzge3mKNE',
            theme: 'from-[#1c2e24]/95 via-[#1c2e24]/40',
            accent: '#8fa87a'
        },
        {
            title: 'Skyline Roof Deck',
            category: t('categories.commercial'),
            desc: 'Creating privacy and wind protection at 40 stories.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgiQaNhbxAzTzC2aKl9C23NA15ATaRYn-rNHNdHIZX7rhIbf6gjcaeu-xIWn_PlsrMBagNBunYJGSLJBQyoQFKUW20jfpDWqYY2UXVN57dAgNlhbQ1UFd2VkcVgPG_K0W_BTB5D-Qh4tKLKWSaZl8Ugbhm82neiPryzu9N5P8HimUORQeudGA1hyXxfAxnU2bHFHgDsp27oci0SlDuooYsHCZrcj5gfSh8p1ZWRUogLHW8vDkvsQvkJ5RnhjGM09-0d8OnNW8Lu-8',
            theme: 'from-[#2c353d]/95 via-[#2c353d]/40',
            accent: '#8fa87a'
        },
        {
            title: 'The Zen Courtyard',
            category: t('categories.urban'),
            desc: 'Maximizing natural light in a minimalist urban atrium.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo7p6VWz2r1uqq1JtQFnG21fDXJjKIyd1XptF-MFWoHWnfuXdpzOjHlh1nOQ95xReAAMfyjUeTbJZPMvg1ip2P4UX9cJGCxYxeLKHnmNYn7yig3g42MwRoeO2s3mH16IV6VLhkv_RkUgWcvMBKxy0KlkLmuK3B6RJ-UPVQUCPl3XLsjDAdCIvRq0B8N5OvwhrQIAXxYY4_bjmlqPwPrExzUqwarN2FsPobxlIT_uU4o2t2ssUymuWaM5HWDE3AXi4EgSrdYpwZEJc',
            theme: 'from-[#3a3e36]/95 via-[#3a3e36]/40',
            accent: '#8fa87a'
        },
        {
            title: 'Coastal Dune Villa',
            category: t('categories.coastal'),
            desc: 'Sustainable native planting for salt-heavy environments.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1n-TK3YNFDBQTbLUe4eUOzSgGu2wKko5aor-WloBqOIjIdgvFyY2cJd4uwuw8WPosUXl3IcsQFxuadOGpTv9f2e-AQcDlzC4sI1mHriprHwSnGDRDvmuPb2EKQ_0UJeDwiBUFiNdDpND9rXhCMSkTz18A5rFKRv78oDIEbxASQ3S5mjVOlcnYsav2jfvFsS9BldwGiR8Q0eXkzBIsWTFEcac1GAfwobU_z-nZXR4AeXSVyXz8ZIpTEG6WEICimda2whPEMva7GuM',
            theme: 'from-[#42484e]/95 via-[#42484e]/40',
            accent: '#89aeb2'
        },
        {
            title: 'Heritage Manor',
            category: t('categories.restoration'),
            desc: 'Preserving historical ancient trees while modernizing pathways.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5uGXZBuUZQejSvXGb3zZiADK5_w6yiLPdaU3dcRVUOZzUBIKGmRHstmtaioI8InNsFClbKN8MnkKjqrxhE_HoFUYP1TG6t4C-p6eJyu95Lr5G-qYHN3ECRRrGiDDPA_Nf9nQ3X6RaLNNCbxsQ39FJ_znziGE9EXirqMm0LSM68LXRJ_M1lYhCyc7V2flTJczMUzmcbZdLbFx0VMT0mdQypN_vYxhvcMuC5MGov70LcMoIuNvw71KhS8WceDM22EP-uKBuJv_1rJ8',
            theme: 'from-[#3d382e]/95 via-[#3d382e]/40',
            accent: '#d4a883'
        }
    ]

    const filteredProjects = projects.filter(p =>
        activeCategory === t('categories.all') || p.category === activeCategory || (activeCategory === t('categories.restoration') && p.category === t('categories.restoration'))
    )

    return (
        <main className="flex-grow pt-40 pb-24 px-6 relative overflow-hidden bg-background-dark min-h-screen">
            <div className="texture-noise" />

            {/* Background Decor */}
            <div className="fixed top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-20 right-1/4 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 md:mb-24 max-w-3xl animate-slide-up delay-100">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-forest-deep/50 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-white/5 animate-slide-up delay-200">
                        {t('badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#e8eade] leading-[1.1] mb-6 animate-slide-up delay-300">
                        {t.rich('title_part1', {
                            italic: (chunks) => <span className="text-terracotta font-serif italic">{chunks}</span>
                        })}
                        <br />
                        <span className="text-terracotta font-serif italic">{t('title_part2')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a0a8a3] max-w-xl leading-relaxed font-light animate-slide-up delay-400">
                        {t('description')}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16 animate-slide-up delay-500">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-forest-deep text-[#e8eade] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] border border-primary/20'
                                : 'bg-transparent border border-white/5 text-[#a0a8a3] hover:text-primary hover:bg-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, i) => (
                        <div
                            key={project.title}
                            className="group relative rounded-[2.5rem] bg-forest-deep/30 p-3 shadow-portfolio-convex hover:shadow-portfolio-pressed transition-all duration-500 animate-slide-up"
                            style={{ animationDelay: `${(i + 6) * 100}ms` }}
                        >
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden transition-transform duration-500 group-hover:scale-[0.98]">
                                {/* Glass Border Overlay */}
                                <div className="absolute inset-0 rounded-[2rem] border-[8px] border-transparent bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-30 opacity-20" />

                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.theme} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                                                {project.category}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:bg-primary group/btn">
                                                <span className="material-icons text-white text-sm group-hover/btn:scale-125 transition-transform">arrow_outward</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight font-display">{project.title}</h3>
                                        <p className="text-white/70 text-sm font-light border-l-2 pl-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" style={{ borderColor: project.accent }}>
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 flex justify-center">
                    <button className="group relative px-10 py-5 rounded-full bg-forest-deep/50 text-[#a0a8a3] font-bold tracking-widest uppercase text-xs hover:text-primary transition-all shadow-portfolio-convex active:shadow-portfolio-pressed border border-white/5">
                        {t('view_more')}
                        <span className="material-icons text-sm ml-2 group-hover:translate-y-1 transition-transform">keyboard_arrow_down</span>
                    </button>
                </div>
            </div>
        </main>
    )
}
