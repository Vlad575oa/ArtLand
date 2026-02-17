'use client'

import { usePathname as useNextPathname } from 'next/navigation'
import { useRouter, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'

export function LanguageToggle() {
    const pathname = usePathname()
    const locale = useLocale()
    const router = useRouter()

    const toggleLanguage = () => {
        const nextLocale = locale === 'ru' ? 'en' : 'ru'
        router.replace(pathname, { locale: nextLocale })
    }

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full bg-forest-light/80 hover:bg-forest-light transition-all text-xs font-bold tracking-wider uppercase text-sand hover:text-white border border-white/5 hover:border-primary/30 shadow-soft-neumorph"
        >
            {locale === 'ru' ? 'EN' : 'RU'}
        </button>
    )
}
