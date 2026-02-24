import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Политика использования файлов cookie | TERRA.ART',
        titleEn: 'Cookie Policy | TERRA.ART',
        descriptionRu: 'Информация о том, как TERRA.ART использует файлы cookie.',
        descriptionEn: 'Information on how TERRA.ART uses cookies.',
        path: '/cookies',
    }, locale);
}

export default function CookiesPage() {
    const t = useTranslations('Cookies');

    return (
        <div className="container mx-auto px-6 py-32 font-sans text-slate-800 dark:text-slate-200">
            <h1 className="font-serif text-4xl mb-8">{t('title')}</h1>

            <div className="prose dark:prose-invert max-w-4xl space-y-6">
                <p>{t('intro')}</p>

                <h3 className="text-xl font-bold">{t('section1_title')}</h3>
                <p>{t('section1_content')}</p>

                <h3 className="text-xl font-bold">{t('section2_title')}</h3>
                <ul className="list-disc pl-5 space-y-3">
                    <li>
                        <strong>{t('section2_technical_title')}</strong> {t('section2_technical_desc')}
                    </li>
                    <li>
                        <strong>{t('section2_analytics_title')}</strong> {t('section2_analytics_desc')}
                    </li>
                    <li>
                        <strong>{t('section2_marketing_title')}</strong> {t('section2_marketing_desc')}
                    </li>
                </ul>

                <h3 className="text-xl font-bold">{t('section3_title')}</h3>
                <p>{t('section3_content')}</p>

                <h3 className="text-xl font-bold">{t('section4_title')}</h3>
                <p>{t('section4_content')}</p>
            </div>
        </div>
    )
}
