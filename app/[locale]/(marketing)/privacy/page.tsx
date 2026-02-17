import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Политика конфиденциальности | TERRA.ART',
        titleEn: 'Privacy Policy | TERRA.ART',
        descriptionRu: 'Политика конфиденциальности TERRA.ART. Защита ваших персональных данных.',
        descriptionEn: 'TERRA.ART Privacy Policy. Protection of your personal data.',
        path: '/privacy',
    }, locale);
}

export default function PrivacyPage() {
    const t = useTranslations('Privacy');
    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="font-serif text-4xl text-[#F0F2F0]">{t('title')}</h1>
            <div className="text-[#A0ABA5] mt-8 space-y-4 font-light max-w-3xl">
                <p>{t('content')}</p>
            </div>
        </div>
    )
}
