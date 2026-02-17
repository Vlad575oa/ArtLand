'use client';

import { useTranslations } from 'next-intl';

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
