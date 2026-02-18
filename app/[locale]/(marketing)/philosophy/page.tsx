import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Философия устойчивого дизайна | TERRA.ART',
        titleEn: 'Philosophy of Sustainable Design | TERRA.ART',
        descriptionRu: 'Наша философия создания устойчивых ландшафтов. Инженерный подход к природной гармонии. TERRA.ART.',
        descriptionEn: 'Our philosophy of sustainable landscape creation. Engineered approach to natural harmony. TERRA.ART.',
        path: '/philosophy',
    }, locale);
}

export default function PhilosophyPage() {
    const t = useTranslations('Philosophy');

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
                                {t('badge')}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-white leading-[1.1]">
                                {t.rich('title_part1', {
                                    br: () => <br />
                                })}
                                <span className="font-bold text-terracotta">{t('title_part2')}</span>
                            </h1>
                            <p className="text-lg text-sand-dark max-w-md leading-relaxed">
                                {t('description')}
                            </p>
                            <div className="flex items-center gap-6 lg:gap-12 pt-4 animate-slide-up delay-400">
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-primary">150+</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">{t('stats.acres')}</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-terracotta">12</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">{t('stats.awards')}</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-forest-light/40 shadow-soft-neumorph-inset border border-white/5">
                                    <p className="text-3xl font-bold text-primary">90%</p>
                                    <p className="text-xs text-sand-dark uppercase tracking-wide">{t('stats.flora')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-soft-neumorph border-4 border-forest-light/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-60" />
                                <Image
                                    alt="Mist covered modern minimalist garden landscape"
                                    className="w-full h-full object-cover"
                                    src="/images/projects/kyoto-zen.png"
                                    fill
                                    priority
                                />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="p-5 bg-background-dark/70 backdrop-blur-md rounded-2xl border border-white/10 max-w-xs shadow-inflated">
                                        <p className="text-xs text-primary uppercase tracking-widest mb-1">{t('featured')}</p>
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
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-slide-up delay-200">
                        <h2 className="text-3xl md:text-4xl font-light text-white">
                            {t.rich('section2_title', {
                                nature: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-sand-dark max-w-lg text-sm md:text-base">
                            {t('section2_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative rounded-[2rem] bg-forest-light shadow-inflated overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-slide-up delay-300">
                            <div className="p-10 lg:p-14 relative z-10">
                                <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:opacity-15 transition-opacity transform rotate-12">
                                    <span className="material-icons text-[12rem] text-primary">spa</span>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-forest-light flex items-center justify-center mb-8 shadow-soft-neumorph text-primary border border-white/5">
                                    <span className="material-icons text-3xl">balance</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{t('eco_title')}</h3>
                                <p className="text-sand-dark leading-relaxed mb-8">
                                    {t('eco_desc')}
                                </p>
                                <ul className="space-y-4 text-sm text-sand">
                                    {(t.raw('eco_list') as string[]).map((item, i) => (
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

                        <div className="group relative rounded-[2rem] bg-forest-light shadow-inflated overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-slide-up delay-400">
                            <div className="p-10 lg:p-14 relative z-10">
                                <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:opacity-15 transition-opacity transform rotate-12">
                                    <span className="material-icons text-[12rem] text-terracotta">wb_sunny</span>
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-forest-light flex items-center justify-center mb-8 shadow-soft-neumorph text-terracotta border border-white/5">
                                    <span className="material-icons text-3xl">thermostat</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{t('climatic_title')}</h3>
                                <p className="text-sand-dark leading-relaxed mb-8">
                                    {t('climatic_desc')}
                                </p>
                                <ul className="space-y-4 text-sm text-sand">
                                    {(t.raw('climatic_list') as string[]).map((item, i) => (
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
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">{t('journey_badge')}</span>
                        <h2 className="text-3xl font-light text-white mt-2">
                            {t.rich('journey_title', {
                                sustainability: (chunks) => <span className="font-bold">{chunks}</span>
                            })}
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-forest-light rounded-full shadow-soft-neumorph-inset hidden md:block" />
                        <div className="space-y-12 md:space-y-24">
                            {(t.raw('timeline_items') as Array<{ year: string, title: string, desc: string, color?: string }>).map((item, i) => (
                                <div key={i} className="relative flex flex-col md:flex-row items-center md:justify-between group animate-slide-up delay-200">
                                    <div className={`md:w-5/12 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left order-3'} mt-4 md:mt-0 px-6`}>
                                        <div className={`p-6 bg-forest-light rounded-2xl shadow-inflated border-b-4 border-${item.color} inline-block w-full text-left`}>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-sand-dark text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
                                        <div className="w-16 h-16 rounded-full bg-forest-light border-4 border-background-dark flex items-center justify-center z-10 shadow-inflated group-hover:scale-110 transition-transform">
                                            <span className={`text-sm font-bold ${i === 1 ? 'text-primary' : 'text-terracotta'}`}>{item.year}</span>
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
                            <h2 className="text-4xl font-light text-white mb-4">
                                {t.rich('cultivators_title', {
                                    cultivators: (chunks) => <span className="font-bold text-primary">{chunks}</span>
                                })}
                            </h2>
                            <p className="text-sand-dark">{t('cultivators_desc')}</p>
                        </div>
                        <Link href="/team" className="text-primary hover:text-white transition-colors flex items-center gap-2 group">
                            {t('view_all')} <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Elias Thorne', role: 'Lead Architect', img: '/images/team/elias.png', color: 'terracotta' },
                            { name: 'Dr. Sarah Lin', role: 'Head Botanist', img: '/images/team/sarah.png', color: 'primary' },
                            { name: 'Marcus Vance', role: 'Sustainability Officer', img: '/images/team/marcus.png', color: 'terracotta' }
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
                                    {t('team_bio')}
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
                        <div className="relative z-10 max-w-2xl mx-auto animate-slide-up delay-200">
                            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                                {t.rich('cta_title', {
                                    ecosystem: (chunks) => <span className="font-bold text-terracotta">{chunks}</span>,
                                    br: () => <br />
                                })}
                            </h2>
                            <p className="text-sand-dark mb-10 text-lg">{t('cta_desc')}</p>
                            <button className="gold-btn px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                                {t('cta_button')}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
