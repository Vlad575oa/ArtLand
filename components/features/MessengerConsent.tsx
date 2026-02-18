'use client'

import { useState, createContext, useContext, ReactNode } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { TelegramIcon, WhatsAppIcon } from '@/components/ui/SVGIcons'

type MessengerType = 'telegram' | 'whatsapp' | null

interface MessengerConsentContextType {
    openConsent: (url: string, type: 'telegram' | 'whatsapp') => void
}

const MessengerConsentContext = createContext<MessengerConsentContextType>({
    openConsent: () => { },
})

export const useMessengerConsent = () => useContext(MessengerConsentContext)

export const MessengerConsentProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [targetUrl, setTargetUrl] = useState<string>('')
    const [messengerType, setMessengerType] = useState<MessengerType>(null)
    const [isAgreed, setIsAgreed] = useState(false)

    const t = useTranslations('MessengerConsent')
    const locale = useLocale()

    const openConsent = (url: string, type: 'telegram' | 'whatsapp') => {
        setTargetUrl(url)
        setMessengerType(type)
        setIsOpen(true)
        setIsAgreed(false) // Reset agreement on new open
    }

    const handleConfirm = () => {
        if (!isAgreed) return
        window.open(targetUrl, '_blank')
        setIsOpen(false)
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <MessengerConsentContext.Provider value={{ openConsent }}>
            {children}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={handleCancel}
                    ></div>
                    <div className="relative bg-background-dark border border-white/10 rounded-2xl p-6 pt-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        {messengerType && (
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-background-dark border border-white/10 p-4 shadow-2xl flex items-center justify-center text-primary">
                                {messengerType === 'telegram' ? (
                                    <TelegramIcon className="w-full h-full" />
                                ) : (
                                    <WhatsAppIcon className="w-full h-full" />
                                )}
                            </div>
                        )}
                        <h3 className="text-xl font-serif text-slate-100 mb-4 text-center">
                            {t('title', { messenger: messengerType === 'telegram' ? 'Telegram' : 'WhatsApp' })}
                        </h3>

                        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex items-start gap-3 mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
                            <div className="flex items-center h-5">
                                <input
                                    id="messenger-consent"
                                    type="checkbox"
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
                                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/50 cursor-pointer shadow-contact-inset"
                                />
                            </div>
                            <label htmlFor="messenger-consent" className="text-xs text-slate-400 cursor-pointer select-none">
                                {t.rich('checkbox_label', {
                                    privacy: (chunks) => (
                                        <Link href="/privacy" target="_blank" className="text-primary hover:underline">
                                            {chunks}
                                        </Link>
                                    )
                                })}
                            </label>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors"
                            >
                                {t('cancel')}
                            </button>
                            <button
                                onClick={handleConfirm}
                                disabled={!isAgreed}
                                className="px-6 py-2 rounded-lg bg-primary text-[#1a2922] font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                            >
                                {t('continue')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MessengerConsentContext.Provider>
    )
}
