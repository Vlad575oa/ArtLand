import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug } = await params;
    const t = await getTranslations();

    // Mapping slugs to their translation index in the Hero namespace
    const serviceMap: Record<string, { index: number, valid: boolean }> = {
        'hardscaping': { index: 1, valid: true },
        'irrigation': { index: 2, valid: true },
        'lumination': { index: 3, valid: true },
        'plants': { index: 4, valid: true },
        'water': { index: 5, valid: true },
        'small-forms': { index: 6, valid: true },
    };

    const serviceData = serviceMap[slug];

    if (!serviceData?.valid) {
        notFound();
    }

    const titleKey = `Hero.service${serviceData.index}_title` as any;
    const descKey = `Hero.service${serviceData.index}_desc` as any;

    return (
        <main className="min-h-screen bg-background-dark overflow-hidden pt-32 pb-24 relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-leaf-pattern opacity-[0.02] pointer-events-none -z-10" />

            {/* Back Button Overlay */}
            <div className="absolute top-8 md:top-32 left-6 md:left-12 lg:left-24 z-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 shadow-sm"
                >
                    <span className="material-icons-round text-sm">arrow_back</span>
                    {/* Reusing existing back translation, or hardcoding fallback if needed */}
                    {t('Hero.cta_button') === 'Hero.cta_button' ? 'Назад на главную' : 'На главную'}
                </Link>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-8 w-fit shadow-xs">
                            {t('Hero.services_badge')}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#F0F2F0] leading-tight mb-8">
                            {t(titleKey)}
                        </h1>

                        <p className="text-lg md:text-xl text-sand-dark font-light leading-relaxed mb-12">
                            {t(descKey)}
                        </p>

                        <div className="grid gap-8 mb-12">
                            {/* Feature 1 */}
                            <div className="flex gap-4 p-6 rounded-3xl bg-forest-light/20 border border-white/5 shadow-soft-neumorph">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-primary text-sm">verified</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">{t('Hero.approach_step1_title')}</h3>
                                    <p className="text-sand-dark text-sm font-light leading-relaxed">{t('Hero.approach_step1_desc')}</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 p-6 rounded-3xl bg-forest-light/20 border border-white/5 shadow-soft-neumorph">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-primary text-sm">verified</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">{t('Hero.approach_step2_title')}</h3>
                                    <p className="text-sand-dark text-sm font-light leading-relaxed">{t('Hero.approach_step2_desc')}</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 p-6 rounded-3xl bg-forest-light/20 border border-white/5 shadow-soft-neumorph">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-primary text-sm">verified</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">{t('Hero.approach_step3_title')}</h3>
                                    <p className="text-sand-dark text-sm font-light leading-relaxed">{t('Hero.approach_step3_desc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div>
                            <Link href="/contacts" className="gold-btn px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-btn inline-block text-center w-full md:w-auto">
                                {t('Hero.cta_button')}
                            </Link>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2 h-[500px] lg:h-[800px] relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                        <Image
                            src={`/images/services/service-${slug}.jpg`}
                            alt={t(titleKey)}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E27] via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 border-[2px] border-white/10 rounded-[3rem] pointer-events-none mix-blend-overlay" />
                    </div>

                </div>
            </div>
        </main>
    );
}
