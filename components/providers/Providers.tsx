'use client'

import { NextIntlClientProvider } from 'next-intl'
import { CookieConsentProvider } from '@/components/layout/CookieConsent'
import { ModalProvider } from '@/context/ModalContext'
import { MessengerConsentProvider } from '@/components/features/MessengerConsent'

type ProvidersProps = {
    children: React.ReactNode
    locale: string
    messages: any
}

export function Providers({ children, locale, messages }: ProvidersProps) {
    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <CookieConsentProvider>
                <ModalProvider>
                    <MessengerConsentProvider>
                        {children}
                    </MessengerConsentProvider>
                </ModalProvider>
            </CookieConsentProvider>
        </NextIntlClientProvider>
    )
}
