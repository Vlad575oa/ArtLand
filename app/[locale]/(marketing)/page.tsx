import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { HeroCTA } from '@/components/features/HeroCTA';
import dynamic from 'next/dynamic';
import { EcoIcon, ArrowForwardIcon, VerifiedIcon } from '@/components/ui/SVGIcons';

const ApproachSection = dynamic(() => import('@/components/features/home/ApproachSection').then(mod => mod.ApproachSection), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-white/5 rounded-[4rem] mx-6 mb-32" />
});

const ServicesSection = dynamic(() => import('@/components/features/home/ServicesSection').then(mod => mod.ServicesSection), {
  ssr: true,
  loading: () => <div className="h-[900px] animate-pulse bg-white/5 rounded-[4rem] mx-6 mb-32" />
});

const CTASection = dynamic(() => import('@/components/features/home/CTASection').then(mod => mod.CTASection), {
  ssr: true,
  loading: () => <div className="h-[400px] animate-pulse bg-white/5 rounded-[4rem] mx-6" />
});

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
    keywords: ['ландшафтный дизайн', 'ландшафтная архитектура', 'благоустройство территории', 'озеленение', 'премиум сад', 'проектирование ландшафта', 'студия ландшафтного дизайна'],
  }, locale);
}


export default function HomePage() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  const approachSteps = [
    { icon: 'science', title: t('approach_step1_title'), desc: t('approach_step1_desc') },
    { icon: 'gesture', title: t('approach_step2_title'), desc: t('approach_step2_desc') },
    { icon: 'architecture', title: t('approach_step3_title'), desc: t('approach_step3_desc') },
    { icon: 'spa', title: t('approach_step4_title'), desc: t('approach_step4_desc') }
  ];

  const services = [
    { icon: 'landscape', title: t('service1_title'), desc: t('service1_desc'), img: '/images/services/service-1.jpg' },
    { icon: 'water_drop', title: t('service2_title'), desc: t('service2_desc'), img: '/images/services/service-2.jpg' },
    { icon: 'lightbulb', title: t('service3_title'), desc: t('service3_desc'), img: '/images/services/service-3.jpg' },
    { icon: 'forest', title: t('service4_title'), desc: t('service4_desc'), img: '/images/services/service-4.jpg' },
    { icon: 'waves', title: t('service5_title'), desc: t('service5_desc'), img: '/images/services/service-5.jpg' },
    { icon: 'deck', title: t('service6_title'), desc: t('service6_desc'), img: '/images/services/service-6.jpg' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Background Gradients - Reduced on mobile */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] opacity-100 hidden lg:block" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#4A6756]/10 lg:bg-[#4A6756]/20 rounded-full blur-[80px] lg:blur-[120px] hidden lg:block" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-terracotta/5 lg:bg-terracotta/10 rounded-full blur-[70px] lg:blur-[100px] hidden lg:block" />
        </div>

        {/* Header/Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden bg-hero-gradient">
          <svg className="absolute top-0 right-0 w-[60%] h-full opacity-[0.02] lg:opacity-[0.03] pointer-events-none hidden lg:block" fill="none" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,0 C300,100 400,300 350,600 L0,600 C50,400 100,200 200,0 Z" fill="white" />
          </svg>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8 text-left relative">
              <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-primary/20 w-fit text-xs tracking-[0.2em] uppercase text-primary font-bold backdrop-blur-sm shadow-lg animate-slide-up delay-100">
                <EcoIcon className="w-4 h-4 text-primary" />
                {t('badge')}
              </span>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F0F2F0] animate-slide-up delay-200">
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

              <p className="text-lg md:text-xl text-[#B0B8B4] max-w-2xl font-light leading-relaxed pl-1 border-l-2 border-primary/30 animate-slide-up delay-300">
                {t('subtitle')}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-6 animate-slide-up delay-500">
                <HeroCTA
                  text={t('cta')}
                  className="gold-btn group relative px-10 py-5 text-olive-deep rounded-full flex items-center gap-3 font-bold text-sm tracking-wide"
                >
                  <ArrowForwardIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    sizes="(max-width: 768px) 95vw, (max-width: 1024px) 100vw, 50vw"
                    priority
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
                <div className="absolute top-10 -right-8 w-3/4 h-3/4 bg-[#3D5246] leaf-shape-wide -z-0 opacity-40 rotate-6" />

                <div className="absolute bottom-6 md:bottom-12 -left-6 md:-left-12 glass-panel p-6 md:p-8 rounded-2xl max-w-[200px] md:max-w-[240px] z-20 shadow-2xl backdrop-blur-lg animate-slide-up delay-700">
                  <div className="flex items-center gap-3 mb-2">
                    <VerifiedIcon className="w-5 h-5 text-primary" />
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
          <ApproachSection
            badge={t('approach_badge')}
            title={t.rich('approach_title', {
              perfection: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8A9A90]">{chunks}</span>
            })}
            description={t('approach_desc')}
            steps={approachSteps}
          />

          {/* Services Section */}
          <ServicesSection
            badge={t('services_badge')}
            title={t('services_title')}
            services={services}
          />

          {/* CTA Section */}
          <CTASection
            title={t('cta_title')}
            description={t('cta_desc')}
            ctaInputPlaceholder={t('cta_input_placeholder')}
            ctaButton={t('cta_button')}
            locale={locale}
          />
        </section>
      </main>
    </div>
  )
}
