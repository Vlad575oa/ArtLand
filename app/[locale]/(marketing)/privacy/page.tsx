'use client';

import { useTranslations } from 'next-intl';

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
