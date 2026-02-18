'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import { TelegramIcon } from '@/components/ui/SVGIcons'
import { CONTACT_INFO } from '@/lib/constants'
import { useMessengerConsent } from '@/components/features/MessengerConsent'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const locale = useLocale()
    const router = useRouter()
    const t = useTranslations('Navbar')
    const tFooter = useTranslations('Footer')
    const { openConsent } = useMessengerConsent()

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const toggleLanguage = () => {
        const nextLocale = locale === 'ru' ? 'en' : 'ru'
        router.replace(pathname, { locale: nextLocale })
    }

    const navLinks = [
        { href: '/' as const, label: t('home'), isActive: pathname === '/' },
        { href: '/projects' as const, label: t('portfolio'), isActive: pathname.startsWith('/projects') },
        { href: '/services' as const, label: t('services'), isActive: pathname.startsWith('/services') },
        { href: '/philosophy' as const, label: t('philosophy'), isActive: pathname === '/philosophy' },
        { href: '/contacts' as const, label: t('contacts'), isActive: pathname === '/contacts' },
    ]

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 right-6 z-[60] w-12 h-12 rounded-full bg-background-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-glass"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                    <span
                        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                    />
                </div>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-background-dark/95 backdrop-blur-xl border-l border-white/5 z-[58] transform transition-transform duration-300 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <div className="flex flex-col h-full pt-24 pb-8 px-8">
                    {/* Nav Links */}
                    <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-5 py-4 rounded-xl text-base font-medium transition-all duration-200 ${link.isActive
                                    ? 'bg-primary/15 text-primary border border-primary/20'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Socials & Language */}
                    <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => { openConsent(CONTACT_INFO.telegram, 'telegram'); setIsOpen(false) }}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors relative"
                            >
                                <TelegramIcon className="w-6 h-6" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[#1a2922] text-[10px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                                    i
                                </div>
                            </button>
                            <button
                                onClick={() => { openConsent(CONTACT_INFO.whatsapp, 'whatsapp'); setIsOpen(false) }}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors relative"
                            >
                                <span className="material-icons-round text-xl">chat</span>
                                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[#1a2922] text-[10px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                                    i
                                </div>
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors overflow-hidden p-3"
                                title={locale === 'ru' ? 'Switch to English' : 'Переключить на русский'}
                            >
                                <div className="w-full h-full rounded-md overflow-hidden relative shadow-sm">
                                    {locale === 'ru' ? (
                                        <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover">
                                            <rect width="60" height="30" fill="#012169" />
                                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                                            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                                            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                                            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover">
                                            <rect width="9" height="6" fill="#fff" />
                                            <rect width="9" height="4" y="2" fill="#0039a6" />
                                            <rect width="9" height="2" y="4" fill="#d52b1e" />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-sand-dark/40 leading-tight px-4 pb-2">
                            {/* Reusing Footer translation for consistency */}
                            {tFooter.rich('messaging_disclaimer', {
                                privacy: (chunks) => <Link href="/privacy" className="underline">{chunks}</Link>
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
