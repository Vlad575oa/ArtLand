import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Условия использования | TERRA.ART',
        titleEn: 'Terms of Service | TERRA.ART',
        descriptionRu: 'Условия использования сайта TERRA.ART.',
        descriptionEn: 'TERRA.ART Terms of Service.',
        path: '/terms',
    }, locale);
}

export default function TermsPage() {
    const t = useTranslations('Terms');
    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="font-serif text-4xl text-[#F0F2F0]">{t('title')}</h1>
            <div className="text-[#A0ABA5] mt-8 space-y-4 font-light max-w-3xl">
                <p>{t('content')}</p>
            </div>
        </div>
    )
}
