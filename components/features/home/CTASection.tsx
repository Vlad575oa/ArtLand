'use client'

import { ContactHeroForm } from '@/components/features/ContactHeroForm'

type CTASectionProps = {
    title: string
    description: string
    ctaInputPlaceholder: string
    ctaButton: string
    locale: string
}

export function CTASection({ title, description, ctaInputPlaceholder, ctaButton, locale }: CTASectionProps) {
    return (
        <div className="container mx-auto px-6 mt-32 relative z-10">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2E4035] to-[#24332B] px-8 py-20 lg:p-24 text-center border border-white/5 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                <svg className="absolute top-10 left-10 w-32 h-32 text-white/5 rotate-[-15deg]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1-2.3A4.49,4.49 0 0,0 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#F0F2F0] mb-6">{title}</h2>
                    <p className="text-[#A0ABA5] mb-12 text-lg font-light">
                        {description}
                    </p>
                    <ContactHeroForm
                        ctaInputPlaceholder={ctaInputPlaceholder}
                        ctaButton={ctaButton}
                        locale={locale}
                    />
                </div>
            </div>
        </div>
    )
}
