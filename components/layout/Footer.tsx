'use client'

import { Link } from '@/i18n/routing'
import { TelegramIcon, VKIcon, WhatsAppIcon } from '@/components/ui/SVGIcons'
import { CONTACT_INFO } from '@/lib/constants'
import { useTranslations, useLocale } from 'next-intl'
import { useMessengerConsent } from '@/components/features/MessengerConsent'

export const Footer = () => {
    const t = useTranslations('Footer')
    const locale = useLocale()
    const { openConsent } = useMessengerConsent()


    return (
        <footer className="bg-background-dark border-t border-white/5 py-16 px-6 lg:px-12 relative z-10 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6 col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center shadow-inner">
                            <span className="material-icons text-white text-[10px]">spa</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">{t('brand_part1')}<span className="text-terracotta font-light">{t('brand_part2')}</span></span>
                    </div>
                    <p className="text-sand-dark text-sm max-w-xs leading-relaxed">
                        {t('description')}
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <button
                                onClick={() => openConsent(CONTACT_INFO.telegram, 'telegram')}
                                className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark relative"
                                aria-label="Telegram"
                            >
                                <TelegramIcon className="w-4 h-4" />
                                <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary text-[#1a2922] text-[8px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                                    i
                                </div>
                            </button>
                            <button
                                onClick={() => openConsent(CONTACT_INFO.whatsapp, 'whatsapp')}
                                className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark relative"
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary text-[#1a2922] text-[8px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                                    i
                                </div>
                            </button>
                            <a
                                href={CONTACT_INFO.socials.vk}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-forest-light shadow-soft-neumorph flex items-center justify-center hover:text-terracotta transition-colors text-sand-dark relative"
                                aria-label="VK"
                            >
                                <VKIcon className="w-4 h-4" />
                                <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-primary text-[#1a2922] text-[8px] flex items-center justify-center font-bold shadow-sm border border-[#1a2922]">
                                    i
                                </div>
                            </a>
                        </div>
                        <p className="text-[10px] text-sand-dark/50 leading-tight max-w-[240px]">
                            {t.rich('messaging_disclaimer', {
                                privacy: (chunks) => <Link href="/privacy" className="underline hover:text-primary">{chunks}</Link>
                            })}
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">{t('company')}</h4>
                    <ul className="space-y-4 text-sm text-sand-dark">
                        <li><Link className="hover:text-primary transition-colors" href="/">{t('home')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/projects">{t('portfolio')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/philosophy">{t('philosophy')}</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/contacts">{t('contacts')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">{t('getInTouch')}</h4>
                    <ul className="space-y-4 text-sm text-sand-dark">
                        <li>{CONTACT_INFO.email}</li>
                        <li>{CONTACT_INFO.phone}</li>
                        <li className="pt-4">
                            <address className="not-italic whitespace-pre-line text-sand-dark/80">
                                {t('address')}
                            </address>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-xs text-sand-dark flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col gap-1 md:gap-2">
                    <p>{t('rights')}</p>
                    <p className="text-[10px] opacity-60">
                        {locale === 'ru'
                            ? 'Ландшафтное бюро «ТерраАрт» / ИНН 7707010101 / ОГРН 1027700132195'
                            : 'Terraform Landscapes / Tax ID 7707010101 / Reg No 1027700132195'
                        }
                    </p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link className="hover:text-white" href="/privacy">{t('privacy')}</Link>
                    <Link className="hover:text-white" href="/terms">{t('terms')}</Link>
                </div>
            </div>
        </footer>
    )
}
