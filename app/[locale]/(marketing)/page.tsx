import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { HeroCTA } from '@/components/features/HeroCTA';
import { ContactHeroForm } from '@/components/features/ContactHeroForm';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    titleRu: 'TERRA.ART — Премиальный ландшафтный дизайн',
    titleEn: 'TERRA.ART — Premium Landscape Architecture',
    descriptionRu: 'Создаём живые пространства. Премиальный ландшафтный дизайн и архитектура от TERRA.ART. 150+ завершённых проектов.',
    descriptionEn: 'Cultivating living art on your land. Premium landscape architecture by TERRA.ART. 150+ completed projects.',
    path: '',
    image: '/images/hero/hero-main.jpg',
  }, locale);
}


export default function HomePage() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Background Gradients - Reduced on mobile */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] opacity-50 lg:opacity-100" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#4A6756]/10 lg:bg-[#4A6756]/20 rounded-full blur-[120px] hidden lg:block" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-terracotta/5 lg:bg-terracotta/10 rounded-full blur-[100px] hidden lg:block" />
        </div>

        {/* Header/Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden bg-hero-gradient">
          <svg className="absolute top-0 right-0 w-[60%] h-full opacity-[0.02] lg:opacity-[0.03] pointer-events-none hidden lg:block" fill="none" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,0 C300,100 400,300 350,600 L0,600 C50,400 100,200 200,0 Z" fill="white" />
          </svg>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8 text-left relative">
              <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-primary/20 w-fit text-xs tracking-[0.2em] uppercase text-primary font-bold backdrop-blur-md shadow-lg">
                <span className="material-icons-round text-sm text-primary">eco</span>
                {t('badge')}
              </span>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F0F2F0] drop-shadow-2xl">
                {t.rich('title', {
                  living: (chunks) => (
                    <span
                      className="italic text-primary bg-clip-text text-transparent bg-gold-gradient relative inline-block"
                      style={locale === 'ru' ? { fontSize: 'calc(1em - 2px)', paddingRight: '0.1em' } : undefined}
                    >
                      {chunks}
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00025 6.99997C25.7501 2.99999 52.4462 0.999954 87.5002 0.999954C122.554 0.999954 153.75 3.00001 198 7" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  ),
                  breakLine: () => <br />
                })}
              </h1>

              <p className="text-lg md:text-xl text-[#B0B8B4] max-w-2xl font-light leading-relaxed pl-1 border-l-2 border-primary/30">
                {t('subtitle')}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6">
                <HeroCTA
                  text={t('cta')}
                  className="gold-btn group relative px-10 py-5 text-olive-deep rounded-full flex items-center gap-3 font-bold text-sm tracking-wide"
                >
                  <span className="material-icons-round group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                </HeroCTA>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[500px] md:h-[650px] mt-12 lg:mt-0">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 leaf-shape-wide overflow-hidden convex-card p-2 z-10 lg:rotate-2 lg:hover:rotate-0 transition-all duration-700 ease-out">
                  <Image
                    src="/images/hero/hero-main.jpg"
                    alt="Minimalist modern garden path with concrete steps and lush green ferns"
                    className="object-cover leaf-shape-wide opacity-90 hover:opacity-100 transition-opacity duration-500"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
                <div className="absolute top-10 -right-8 w-3/4 h-3/4 bg-[#3D5246] leaf-shape-wide -z-0 opacity-40 rotate-6" />

                <div className="absolute bottom-6 md:bottom-12 -left-6 md:-left-12 glass-panel p-6 md:p-8 rounded-2xl max-w-[200px] md:max-w-[240px] z-20 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-icons-round text-primary text-xl md:text-2xl">verified</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-bold">
                      {t('experience_label')}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-serif text-white">150+</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#C0C8C4] mt-2 leading-relaxed font-light">
                    {t('experience_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <section className="relative z-20 bg-[#26352E] rounded-t-[4rem] -mt-16 pt-24 pb-20 shadow-[0_-20px_60px_rgba(0,0,0,0.4)] border-t border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-leaf-pattern" />

          {/* Approach Section */}
          <div className="container mx-auto px-6 mb-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
              <div>
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-primary" />
                  {t('approach_badge')}
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#F0F2F0] leading-tight">
                  {t.rich('approach_title', {
                    perfection: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8A9A90]">{chunks}</span>
                  })}
                </h3>
              </div>
              <p className="text-[#A0ABA5] max-w-md text-base leading-relaxed font-light">
                {t('approach_desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'science', titleKey: 'approach_step1_title', descKey: 'approach_step1_desc' },
                { icon: 'gesture', titleKey: 'approach_step2_title', descKey: 'approach_step2_desc' },
                { icon: 'architecture', titleKey: 'approach_step3_title', descKey: 'approach_step3_desc' },
                { icon: 'spa', titleKey: 'approach_step4_title', descKey: 'approach_step4_desc' }
              ].map((step, i) => (
                <div key={i} className="convex-card p-8 rounded-2xl flex flex-col justify-between h-[340px] group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                  <div className="w-16 h-16 rounded-2xl bg-[#2C3E34] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <span className="material-icons-round text-3xl">{step.icon}</span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-serif text-[#F0F2F0] mb-3 group-hover:text-primary transition-colors">{t(step.titleKey)}</h4>
                    <p className="text-[#A0ABA5] text-sm leading-relaxed">{t(step.descKey)}</p>
                  </div>
                  <div className="mt-4 w-12 h-[2px] bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase block mb-4">{t('services_badge')}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F0F2F0]">{t('services_title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'landscape', titleKey: 'service1_title', descKey: 'service1_desc', img: '/images/services/service-1.jpg' },
                { icon: 'water_drop', titleKey: 'service2_title', descKey: 'service2_desc', img: '/images/services/service-2.jpg' },
                { icon: 'lightbulb', titleKey: 'service3_title', descKey: 'service3_desc', img: '/images/services/service-3.jpg' },
                { icon: 'forest', titleKey: 'service4_title', descKey: 'service4_desc', img: '/images/services/service-4.jpg' },
                { icon: 'waves', titleKey: 'service5_title', descKey: 'service5_desc', img: '/images/services/service-5.jpg' },
                { icon: 'deck', titleKey: 'service6_title', descKey: 'service6_desc', img: '/images/services/service-6.jpg' }
              ].map((service, i) => (
                <div key={i} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer convex-card p-2">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                    {/* Image layer - only transform, no filter */}
                    <div className="absolute inset-0 will-change-transform">
                      <Image
                        src={service.img}
                        alt={t(service.titleKey)}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Grayscale overlay - separate layer */}
                    <div className="absolute inset-0 bg-black/30 mix-blend-saturation opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E27] via-[#1F2E27]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10 text-left">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-olive-deep transition-all">
                        <span className="material-icons-round">{service.icon}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-white mb-3">{t(service.titleKey)}</h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-light">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-6 mt-32 relative z-10">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2E4035] to-[#24332B] px-8 py-20 lg:p-24 text-center border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
              <svg className="absolute top-10 left-10 w-32 h-32 text-white/5 rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1-2.3A4.49,4.49 0 0,0 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-[#F0F2F0] mb-6">{t('cta_title')}</h2>
                <p className="text-[#A0ABA5] mb-12 text-lg font-light">
                  {t('cta_desc')}
                </p>
                <ContactHeroForm
                  ctaInputPlaceholder={t('cta_input_placeholder')}
                  ctaButton={t('cta_button')}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
