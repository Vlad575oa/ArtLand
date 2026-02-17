import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'О компании | TERRA.ART',
        titleEn: 'About Us | TERRA.ART',
        descriptionRu: 'Terra Art — премиальная студия ландшафтного дизайна с многолетним опытом. Наша история и философия.',
        descriptionEn: 'Terra Art — premium landscape design studio with years of experience. Our story and philosophy.',
        path: '/about',
    }, locale);
}

export default function AboutPage() {
    const t = useTranslations('About');
    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="font-serif text-5xl text-[#F0F2F0]">{t('title')}</h1>
            <p className="text-[#A0ABA5] mt-6 max-w-2xl font-light">
                {t('description')}
            </p>
        </div>
    )
}
