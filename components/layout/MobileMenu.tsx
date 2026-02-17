'use client'

import { useState, useEffect } from 'react'
import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const t = useTranslations('Navbar')

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

                    {/* CTA */}
                    <div className="mt-auto pt-8 border-t border-white/5">
                        <Link
                            href="/contacts"
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-olive-deep font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-icons-round text-lg">mail</span>
                            {t('contacts')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
