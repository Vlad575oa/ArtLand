'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

interface CookieConsentContextType {
    consent: boolean | null // null = not decided, true = accepted, false = rejected
    acceptCookies: () => void
    rejectCookies: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType>({
    consent: null,
    acceptCookies: () => { },
    rejectCookies: () => { },
})

export const useCookieConsent = () => useContext(CookieConsentContext)

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
    const [consent, setConsent] = useState<boolean | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const locale = useLocale()

    useEffect(() => {
        const storedConsent = localStorage.getItem('cookie-consent')
        if (storedConsent === 'true') {
            setConsent(true)
        } else if (storedConsent === 'false') {
            setConsent(false)
        } else {
            // No choice made yet
            setIsVisible(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true')
        setConsent(true)
        setIsVisible(false)
    }

    const rejectCookies = () => {
        localStorage.setItem('cookie-consent', 'false')
        setConsent(false)
        setIsVisible(false)
    }

    return (
        <CookieConsentContext.Provider value={{ consent, acceptCookies, rejectCookies }}>
            {children}
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 pointer-events-none">
                    <div className="max-w-4xl mx-auto bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl pointer-events-auto flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-bottom-10 duration-500">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {locale === 'ru'
                                    ? 'Мы используем файлы cookie для улучшения работы сайта и анализа трафика. Продолжая использовать сайт, вы соглашаетесь с нашей '
                                    : 'We use cookies to improve site performance and analyze traffic. By continuing to use the site, you agree to our '}
                                <Link href="/cookies" className="text-contact-primary hover:underline font-medium">
                                    {locale === 'ru' ? 'Политикой cookie' : 'Cookie Policy'}
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={acceptCookies}
                                className="px-6 py-2.5 rounded-full bg-contact-primary text-white font-bold text-sm hover:bg-contact-primary/90 transition-colors whitespace-nowrap shadow-lg shadow-contact-primary/20"
                            >
                                {locale === 'ru' ? 'Принять' : 'Accept'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </CookieConsentContext.Provider>
    )
}
