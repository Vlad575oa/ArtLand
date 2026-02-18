import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceSchema } from '@/components/seo/StructuredData';
import { useTranslations } from 'next-intl';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Системы ирригации | TERRA.ART',
        titleEn: 'Irrigation Systems | TERRA.ART',
        descriptionRu: 'Автоматические системы полива для газонов и садов. Проектирование, монтаж, обслуживание. TERRA.ART.',
        descriptionEn: 'Automatic irrigation systems for lawns and gardens. Design, installation, maintenance. TERRA.ART.',
        path: '/services/irrigation',
    }, locale);
}

export default function IrrigationPage() {
    const t = useTranslations('Hero');

    return (
        <>
            <ServiceSchema
                name="Automatic Irrigation"
                description="Smart irrigation systems for lawns and gardens. Design, installation, and maintenance."
                image="/images/services/irrigation-hero.jpg"
                offers={[
                    { name: "Smart Control", description: "Remote management via smartphone." },
                    { name: "Water Efficiency", description: "Rotary nozzles and drip systems." },
                    { name: "Maintenance", description: "Seasonal launch and conservation." }
                ]}
            />
            <div className="container mx-auto px-6 py-32">
                <div className="mb-6">
                    <Breadcrumbs
                        items={[
                            { label: t('service2_title'), href: '/services/irrigation' }
                        ]}
                    />
                </div>
                <h1 className="font-serif text-5xl text-[#F0F2F0]">Autonomous Irrigation</h1>
                <p className="text-[#A0ABA5] mt-6 max-w-2xl font-light">
                    Smart hydration systems engineered for landscape longevity.
                </p>
            </div>
        </>
    )
}
