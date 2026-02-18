'use client'

import { useEffect, useState } from 'react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useModal } from '@/context/ModalContext'

export const StickyCTA = () => {
    const t = useTranslations('Hero')
    const { openModal } = useModal()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 600px (approx height of mobile hero)
            const show = window.scrollY > 600
            setIsVisible(show)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="bg-background-dark/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between gap-4">
                <span className="text-white font-bold text-sm tracking-wide truncate">
                    {t('cta_title')}
                </span>
                <div className="flex gap-2">
                    <a
                        href="https://wa.me/15550987654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Contact via WhatsApp"
                    >
                        <span className="material-icons-round text-lg">chat</span>
                    </a>
                    <button
                        onClick={() => openModal()}
                        className="px-5 h-10 rounded-full bg-primary text-white font-bold text-xs flex items-center uppercase tracking-wider hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
                    >
                        {t('cta_button')}
                    </button>
                </div>
            </div>
        </div>
    )
}
