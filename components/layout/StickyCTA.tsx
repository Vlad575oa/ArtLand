'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { TelegramIcon } from '@/components/ui/SVGIcons'
import { CONTACT_INFO } from '@/lib/constants'
import { useMessengerConsent } from '@/components/features/MessengerConsent'

export const StickyCTA = () => {
    const t = useTranslations('Hero')
    const { openConsent } = useMessengerConsent()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 100px (just past header)
            const show = window.scrollY > 100
            setIsVisible(show)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-auto z-50 flex justify-center md:block animate-in slide-in-from-bottom-10 fade-in duration-500 pointer-events-none">
            <button
                onClick={() => openConsent(CONTACT_INFO.telegram, 'telegram')}
                className="pointer-events-auto bg-background-dark/90 backdrop-blur-xl border border-white/10 rounded-full p-2 pr-6 pl-2 shadow-2xl flex items-center gap-3 hover:bg-background-dark hover:border-primary/50 hover:scale-105 transition-all duration-300 group cursor-pointer"
                aria-label={t('get_analysis')}
            >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300 relative">
                    <TelegramIcon className="w-5 h-5" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[#1a2922] text-[10px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                        i
                    </div>
                </div>
                <span className="text-white font-bold text-sm tracking-wide pr-2">
                    {t('get_analysis')}
                </span>
            </button>
        </div>
    )
}
