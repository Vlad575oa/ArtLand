import { useTranslations, useLocale } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroScrollSequence } from '@/components/features/HeroScrollSequence';

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
    image: '/images/hero/Hero_image/1.webp',
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
        <HeroScrollSequence
            title={t.rich('title', {
                living: (chunks) => (
                    <span
                        className="italic text-[#8fa86e] relative inline-block"
                        style={locale === 'ru' ? { fontSize: 'calc(1em - 2px)', paddingRight: '0.1em' } : undefined}
                    >
                        {chunks}
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8fa86e] opacity-40" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00025 6.99997C25.7501 2.99999 52.4462 0.999954 87.5002 0.999954C122.554 0.999954 153.75 3.00001 198 7" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </span>
                ),
                breakLine: () => <br />
            })}
            subtitle={t('subtitle')}
            ctaText={t('cta')}
        />

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
