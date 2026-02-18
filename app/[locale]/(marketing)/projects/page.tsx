import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { ProjectList } from '@/components/features/ProjectList'

export default async function PortfolioPage() {
    const t = await getTranslations('Projects');

    const categories = [
        t('categories.all'),
        t('categories.residential'),
        t('categories.commercial'),
        t('categories.restoration')
    ];

    const projects = [
        {
            slug: 'kyoto-zen',
            title: t('items.kyoto.title'),
            category: t('categories.residential'),
            desc: t('items.kyoto.desc'),
            img: '/images/projects/kyoto-zen.png',
            theme: 'from-[#1c1c1c]/95 via-[#1c1c1c]/40',
            accent: '#8fa87a'
        },
        {
            slug: 'terracotta-gardens',
            title: t('items.terracotta.title'),
            category: t('categories.residential'),
            desc: t('items.terracotta.desc'),
            img: '/images/projects/project-1.jpg',
            theme: 'from-[#3d2c1f]/95 via-[#3d2c1f]/40',
            accent: '#8c6b50'
        },
        {
            slug: 'emerald-forest',
            title: t('items.emerald.title'),
            category: t('categories.residential'),
            desc: t('items.emerald.desc'),
            img: '/images/projects/project-2.jpg',
            theme: 'from-[#1c2e24]/95 via-[#1c2e24]/40',
            accent: '#8fa87a'
        },
        {
            slug: 'skyline-roof-deck',
            title: t('items.skyline.title'),
            category: t('categories.commercial'),
            desc: t('items.skyline.desc'),
            img: '/images/projects/project-3.jpg',
            theme: 'from-[#2c353d]/95 via-[#2c353d]/40',
            accent: '#8fa87a'
        },
        {
            slug: 'zen-courtyard',
            title: t('items.zen.title'),
            category: t('categories.residential'),
            desc: t('items.zen.desc'),
            img: '/images/projects/project-4.jpg',
            theme: 'from-[#3a3e36]/95 via-[#3a3e36]/40',
            accent: '#8fa87a'
        },
        {
            slug: 'heritage-manor',
            title: t('items.heritage.title'),
            category: t('categories.restoration'),
            desc: t('items.heritage.desc'),
            img: '/images/projects/project-6.jpg',
            theme: 'from-[#3d382e]/95 via-[#3d382e]/40',
            accent: '#d4a883'
        }
    ]

    return (
        <main className="flex-grow pt-40 pb-24 px-6 relative overflow-hidden bg-background-dark min-h-screen">
            <div className="texture-noise" />

            {/* Background Decor */}
            <div className="fixed top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-20 right-1/4 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 md:mb-24 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-forest-deep/50 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-white/5">
                        {t('badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#e8eade] leading-[1.1] mb-6">
                        {t.rich('title_part1', {
                            italic: (chunks) => <span className="text-terracotta font-serif italic">{chunks}</span>
                        })}
                        <br />
                        <span className="text-terracotta font-serif italic">{t('title_part2')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#a0a8a3] max-w-xl leading-relaxed font-light">
                        {t('description')}
                    </p>
                </div>

                <ProjectList
                    projects={projects}
                    categories={categories}
                    initialCategory={t('categories.all')}
                    viewMoreText={t('view_more')}
                />
            </div>
        </main>
    )
}
