'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

interface ContactHeroFormProps {
    ctaInputPlaceholder: string
    ctaButton: string
    locale: string
}

export const ContactHeroForm = ({ ctaInputPlaceholder, ctaButton, locale: initialLocale }: ContactHeroFormProps) => {
    const [consentChecked, setConsentChecked] = useState(false)
    const locale = useLocale()

    return (
        <form className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[320px]">
                <div className="relative">
                    <input
                        className="w-full h-full px-8 py-5 rounded-full bg-[#1C2922] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                        placeholder={ctaInputPlaceholder}
                        type="email"
                    />
                </div>

                <div className="flex items-start gap-2 px-2">
                    <input
                        id="form-consent"
                        type="checkbox"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/10 bg-[#1C2922] text-primary focus:ring-primary/50 cursor-pointer"
                    />
                    <label htmlFor="form-consent" className="text-[10px] text-left text-[#A0ABA5] leading-tight cursor-pointer">
                        {locale === 'ru' ? (
                            <>Я даю свое согласие на обработку <Link href="/privacy" target="_blank" className="text-primary hover:underline">персональных данных</Link></>
                        ) : (
                            <>I agree to the processing of <Link href="/privacy" target="_blank" className="text-primary hover:underline">personal data</Link></>
                        )}
                    </label>
                </div>
            </div>

            <div className="md:h-16 flex items-start">
                <button
                    className="gold-btn px-10 py-5 text-olive-deep font-bold rounded-full transition-all whitespace-nowrap disabled:opacity-50 disabled:grayscale"
                    type="button"
                    disabled={!consentChecked}
                >
                    {ctaButton}
                </button>
            </div>
        </form>
    )
}
