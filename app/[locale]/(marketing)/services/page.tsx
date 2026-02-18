import Link from 'next/link'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Услуги ландшафтного дизайна | TERRA.ART',
        titleEn: 'Landscape Design Services | TERRA.ART',
        descriptionRu: 'Озеленение, хардскейпинг, гидросистемы, освещение и ирригация. Полный цикл ландшафтных работ от TERRA.ART.',
        descriptionEn: 'Greening, hardscaping, hydro systems, lumination and irrigation. Full-cycle landscape services by TERRA.ART.',
        path: '/services',
        image: '/images/services/service-1.jpg',
    }, locale);
}

export default function ServicesPage() {
    const t = useTranslations('Services');

    return (
        <div className="relative min-h-screen flex flex-col pt-32">
            {/* Navigation - Note: We are using the global Navbar via the marketing layout, 
          but we'll keep the design specific header here or adjust the layout if needed. 
          Actually, the marketing layout already provides the Navbar. */}

            <header className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase border border-primary/20 shadow-sm animate-slide-up delay-100">
                    {t('badge')}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none animate-slide-up delay-200">
                    {t.rich('title', {
                        sanctuary: (chunks) => <span className="text-primary block">{chunks}</span>
                    })}
                </h1>
                <p className="text-lg md:text-xl text-sand-dark/80 max-w-xl mx-auto leading-relaxed font-light animate-slide-up delay-300">
                    {t('description')}
                </p>
            </header>

            <main className="flex-grow px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Service Card 1: Relief Work */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-moss shadow-soft-volume hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">terrain</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{t('hardscaping_title')}</h3>
                            <p className="text-sand-dark text-sm leading-relaxed mb-6 font-light">
                                {t('hardscaping_desc')}
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt={t('hardscaping_alt')}
                                    className="w-full h-full object-cover"
                                    src="/images/services/hardscaping-hero.jpg"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-moss transition-colors duration-300" href="/services/hardscaping">
                                {t('explore')}
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 2: Hydro Systems */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-terra shadow-soft-volume hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">water_drop</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{t('hydro_title')}</h3>
                            <p className="text-sand-dark text-sm leading-relaxed mb-6 font-light">
                                {t('hydro_desc')}
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt={t('hydro_alt')}
                                    className="w-full h-full object-cover"
                                    src="/images/services/hydro-systems-hero.jpg"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-terra transition-colors duration-300" href="/services/hydro-systems">
                                {t('details')}
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 3: Lumination */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-sand shadow-soft-volume hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">tungsten</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-wide group-hover:shimmer-text transition-all duration-300">{t('lumination_title')}</h3>
                            <p className="text-white/80 text-sm font-light leading-relaxed mb-4 flex-grow group-hover:shimmer-text transition-all duration-300">
                                {t('lumination_desc')}
                            </p>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-8 group-hover:shimmer-text transition-all duration-300">
                                {t('lumination_subtitle')}
                            </span>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt={t('lumination_alt')}
                                    className="w-full h-full object-cover"
                                    src="/images/services/lumination.png"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-sand transition-all duration-300 group-hover:shimmer-text" href="/services/lumination">
                                {t('view')}
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 4: Flora Select */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-stone shadow-soft-volume hover:shadow-lg transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">yard</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">{t('greening_title')}</h3>
                            <p className="text-white/80 text-sm font-light leading-relaxed mb-8 flex-grow">
                                {t('greening_desc')}
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt={t('greening_alt')}
                                    className="w-full h-full object-cover"
                                    src="/images/services/greening.png"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-stone transition-colors duration-300" href="/services/greening">
                                {t('browse')}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-background-dark/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 rounded-3xl bg-forest-light/30 border border-white/5 shadow-soft-neumorph group hover:-translate-y-2 hover:shadow-soft-volume transition-all duration-500">
                        <div className="w-10 h-10 rounded-full bg-earth-moss/20 flex items-center justify-center text-earth-moss font-bold text-xs mb-6 border border-earth-moss/30 group-hover:scale-110 transition-transform duration-300">01</div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('process_01_title')}</h4>
                        <p className="text-sand-dark text-sm font-light leading-relaxed">
                            {t('process_01_desc')}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-forest-light/30 border border-white/5 shadow-soft-neumorph group hover:-translate-y-2 hover:shadow-soft-volume transition-all duration-500">
                        <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold text-xs mb-6 border border-terracotta/30 group-hover:scale-110 transition-transform duration-300">02</div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('process_02_title')}</h4>
                        <p className="text-sand-dark text-sm font-light leading-relaxed">
                            {t('process_02_desc')}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-forest-light/30 border border-white/5 shadow-soft-neumorph group hover:-translate-y-2 hover:shadow-soft-volume transition-all duration-500">
                        <div className="w-10 h-10 rounded-full bg-forest-deep flex items-center justify-center text-primary font-bold text-xs mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-300">03</div>
                        <h4 className="text-white font-bold text-lg mb-2">{t('process_03_title')}</h4>
                        <p className="text-sand-dark text-sm font-light leading-relaxed">
                            {t('process_03_desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/50 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 p-12 lg:p-20 text-center">
                    <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter">
                        {t.rich('cta_title', {
                            exterior: (chunks) => <span className="text-primary italic block md:inline">{chunks}</span>
                        })}
                    </h3>
                    <button className="gold-btn px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-btn">
                        {t('cta_button')}
                    </button>
                </div>

                <div className="mt-16 flex justify-center gap-8 text-slate-500 text-sm font-medium">
                    <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                    <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
                    <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                </div>
            </section>
        </div>
    )
}
