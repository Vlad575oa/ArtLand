import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const t = await getTranslations('Projects');

    const projectMap: Record<string, string> = {
        'kyoto-zen': 'kyoto',
        'terracotta-gardens': 'terracotta',
        'emerald-forest': 'emerald',
        'skyline-roof-deck': 'skyline',
        'zen-courtyard': 'zen',
        'heritage-manor': 'heritage'
    };

    const projectKey = projectMap[slug as keyof typeof projectMap] || null;

    if (!projectKey) {
        return (
            <div className="min-h-screen bg-background-dark pt-40 px-6 text-center">
                <h1 className="text-white text-4xl font-serif">{t('labels.not_found')}</h1>
                <Link href="/projects" className="text-primary mt-8 inline-block hover:underline">{t('labels.back')}</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background-dark overflow-hidden">
            {/* Project Hero */}
            <header className="relative h-[80vh] w-full">
                <Image
                    src={`/images/projects/${slug}.png`}
                    alt={t(`items.${projectKey}.title`)}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="container mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            {t(`items.${projectKey}.category`)}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight drop-shadow-2xl">
                            {t(`items.${projectKey}.title`)}
                        </h1>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="relative z-10 -mt-20 px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    {/* Stats Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-forest-deep/50 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-portfolio-convex mb-20">
                        <div className="text-center md:border-r border-white/5">
                            <p className="text-sand-dark text-xs uppercase tracking-widest mb-2">{t('labels.area')}</p>
                            <p className="text-white text-3xl font-serif">{t(`items.${projectKey}.metrics.area`)}</p>
                        </div>
                        <div className="text-center md:border-r border-white/5">
                            <p className="text-sand-dark text-xs uppercase tracking-widest mb-2">{t('labels.duration')}</p>
                            <p className="text-white text-3xl font-serif">{t(`items.${projectKey}.metrics.duration`)}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sand-dark text-xs uppercase tracking-widest mb-2">{t('labels.flora')}</p>
                            <p className="text-white text-3xl font-serif">{t(`items.${projectKey}.metrics.flora`)}</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8 space-y-16">
                            <div>
                                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-primary" />
                                    {t('labels.vision')}
                                </h2>
                                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                                    {t(`items.${projectKey}.full_desc`)}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                                <div className="space-y-4">
                                    <h3 className="text-white font-serif text-2xl">{t('labels.challenge')}</h3>
                                    <p className="text-[#A0ABA5] font-light leading-relaxed">
                                        {t(`items.${projectKey}.challenge`)}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-primary font-serif text-2xl">{t('labels.solution')}</h3>
                                    <p className="text-[#A0ABA5] font-light leading-relaxed">
                                        {t(`items.${projectKey}.solution`)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <aside className="lg:col-span-4 space-y-10">
                            <div className="sticky top-32 p-10 bg-white/5 rounded-3xl border border-white/10">
                                <h4 className="text-white font-bold mb-6">{t('labels.expertise')}</h4>
                                <ul className="space-y-4 text-sand-dark text-sm">
                                    <li className="flex items-center gap-3">
                                        <span className="material-icons-round text-primary text-sm">verified</span>
                                        {t('labels.expertise_items.botanical')}
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-icons-round text-primary text-sm">verified</span>
                                        {t('labels.expertise_items.hydro')}
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-icons-round text-primary text-sm">verified</span>
                                        {t('labels.expertise_items.rainwater')}
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-icons-round text-primary text-sm">verified</span>
                                        {t('labels.expertise_items.zen_rock')}
                                    </li>
                                </ul>

                                <Link
                                    href="/contacts"
                                    className="gold-btn mt-10 w-full py-5 rounded-full text-center font-bold text-olive-deep inline-block"
                                >
                                    {t('labels.cta')}
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
