import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

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
    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="font-serif text-5xl text-[#F0F2F0]">Автополив</h1>
            <p className="text-[#A0ABA5] mt-6 max-w-2xl font-light">
                Проектирование и монтаж систем автоматического полива...
            </p>
        </div>
    )
}
