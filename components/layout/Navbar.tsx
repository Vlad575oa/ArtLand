'use client'

import { usePathname as useNextPathname } from 'next/navigation'
import { Link, useRouter, usePathname } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'

export const Navbar = () => {
    const pathname = usePathname()
    const locale = useLocale()
    const router = useRouter()
    const t = useTranslations('Navbar')

    const toggleLanguage = () => {
        const nextLocale = locale === 'ru' ? 'en' : 'ru'
        router.replace(pathname, { locale: nextLocale })
    }

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-5xl px-4 hidden lg:block" aria-label="Main navigation">
            <div className="pl-2 pr-3 py-2 rounded-full bg-background-dark/80 backdrop-blur-sm border border-white/5 shadow-glass flex items-center gap-1 animate-fade-in-down">
                <Link
                    href="/"
                    className={`px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors ${pathname === '/' ? 'bg-primary text-[#1a2922]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    {t('home')}
                </Link>
                <Link
                    href="/projects"
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${pathname.startsWith('/projects') ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    {t('portfolio')}
                </Link>
                <Link
                    href="/services"
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/services' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    {t('services')}
                </Link>
                <Link
                    href="/philosophy"
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/philosophy' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    {t('philosophy')}
                </Link>
                <Link
                    href="/contacts"
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/contacts' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    {t('contacts')}
                </Link>
                <div className="w-[1.5px] h-6 bg-white/30 mx-3 hidden lg:block shrink-0"></div>
                <button
                    onClick={toggleLanguage}
                    className="p-2.5 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center group"
                    title={locale === 'ru' ? 'Switch to English' : 'Переключить на русский'}
                >
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shadow-sm group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-all duration-300">
                        {locale === 'ru' ? (
                            <svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                                <rect width="9" height="6" fill="#fff" />
                                <rect width="9" height="4" y="2" fill="#0039a6" />
                                <rect width="9" height="2" y="4" fill="#d52b1e" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                                <rect width="60" height="30" fill="#012169" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                            </svg>
                        )}
                    </div>
                </button>
            </div>
        </nav>
    )
}
