'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Footer = () => {
    const t = useTranslations('Footer')

    return (
        <footer className="bg-background-dark border-t border-white/5 py-16 px-6 lg:px-12 relative z-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6 col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center shadow-inner">
                            <span className="material-icons text-white text-[10px]">spa</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">TERRA<span className="text-terracotta font-light">FORM</span></span>
                    </div>
                    <p className="text-sand-dark text-sm max-w-xs leading-relaxed">
                        {t('description')}
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark" href="#">
                            <span className="text-xs">IG</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark" href="#">
                            <span className="text-xs">LI</span>
                        </a>
                        <a className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark" href="#">
                            <span className="text-xs">TW</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">{t('company')}</h4>
                    <ul className="space-y-4 text-sm text-sand-dark">
                        <li><Link className="hover:text-primary transition-colors" href="/philosophy">{t('philosophy')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/projects">{t('projects')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/team">{t('team')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/careers">{t('careers')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">{t('getInTouch')}</h4>
                    <ul className="space-y-4 text-sm text-sand-dark">
                        <li>hello@terraform.design</li>
                        <li>+1 (555) 098-7654</li>
                        <li className="pt-4">
                            <address className="not-italic whitespace-pre-line text-sand-dark/80">
                                {t('address')}
                            </address>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-xs text-sand-dark flex flex-col md:flex-row justify-between items-center">
                <p>{t('rights')}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link className="hover:text-white" href="/privacy">{t('privacy')}</Link>
                    <Link className="hover:text-white" href="/terms">{t('terms')}</Link>
                </div>
            </div>
        </footer>
    )
}
