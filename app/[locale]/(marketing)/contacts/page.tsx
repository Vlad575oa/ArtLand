'use client'

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react'

export default function ContactPage() {
    const t = useTranslations('Contacts');
    const [budget, setBudget] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    location: formData.get('location'),
                    budget: formData.get('budget'),
                    vision: formData.get('vision'),
                }),
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Something went wrong')
            }

            setIsSuccess(true)
            form.reset()
            setBudget('')
        } catch (err: any) {
            setError(err.message || 'Failed to send. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-contact-background text-[#f0f2ef] font-display antialiased leading-relaxed min-h-screen relative overflow-x-hidden bg-grain-texture">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-contact-secondary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-black/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-7 flex flex-col gap-10">
                    <div className="space-y-4 animate-slide-up delay-100">
                        <span className="inline-block py-1 px-3 rounded-full bg-contact-primary/10 text-contact-primary text-xs font-bold tracking-widest uppercase border border-contact-primary/20 shadow-sm animate-slide-up delay-200">
                            {t('badge')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#f0f2ef] tracking-tight leading-[1.1] animate-slide-up delay-300">
                            {t.rich('title', {
                                living_space: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-contact-primary to-[#dccbb5]">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-lg text-contact-muted max-w-xl leading-relaxed animate-slide-up delay-400">
                            {t('description')}
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-10 text-center animate-slide-up">
                            <span className="material-icons-round text-primary text-5xl mb-4 block">check_circle</span>
                            <h2 className="text-2xl font-bold text-white mb-2">Thank you!</h2>
                            <p className="text-contact-muted">We&apos;ll get back to you within 24 hours.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
                            >
                                Send another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-contact-surface/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-contact-convex border border-white/5 space-y-8 relative overflow-hidden group animate-slide-up delay-500">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-contact-primary/5 rounded-full blur-3xl transition-opacity duration-700 opacity-30 group-hover:opacity-60 pointer-events-none"></div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-name" className="text-xs font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.name')}</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder={t('form.name_placeholder')}
                                        className="w-full bg-contact-surface/50 border border-white/5 rounded-lg px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors shadow-contact-inset"
                                        aria-required="true"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-xs font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.email')}</label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={t('form.email_placeholder')}
                                        className="w-full bg-contact-surface/50 border border-white/5 rounded-lg px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors shadow-contact-inset"
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="contact-location" className="text-xs font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.location')}</label>
                                    <input
                                        id="contact-location"
                                        name="location"
                                        type="text"
                                        placeholder={t('form.location_placeholder')}
                                        className="w-full bg-contact-surface/50 border border-white/5 rounded-lg px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors shadow-contact-inset"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact-budget" className="text-xs font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.budget')}</label>
                                    <div className="relative">
                                        <select
                                            id="contact-budget"
                                            name="budget"
                                            className="w-full bg-contact-surface/50 border border-white/5 text-white rounded-lg py-4 px-5 shadow-contact-inset appearance-none focus:ring-1 focus:ring-contact-primary/30 outline-none cursor-pointer"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                        >
                                            <option value="">{t('form.budget_select')}</option>
                                            <option value="50-100">{t('form.budget_option_1')}</option>
                                            <option value="100-250">{t('form.budget_option_2')}</option>
                                            <option value="250-500">{t('form.budget_option_3')}</option>
                                            <option value="500+">{t('form.budget_option_4')}</option>
                                        </select>
                                        <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-contact-secondary pointer-events-none text-sm" aria-hidden="true">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-vision" className="text-xs font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.vision')}</label>
                                <textarea
                                    id="contact-vision"
                                    name="vision"
                                    rows={4}
                                    placeholder={t('form.vision_placeholder')}
                                    className="w-full bg-contact-surface/50 border border-white/5 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors resize-none shadow-contact-inset"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-300 text-sm" role="alert">
                                    {error}
                                </div>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-contact-primary hover:bg-contact-primary/90 text-background-dark font-bold py-5 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-contact-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="animate-spin material-icons-round text-lg">autorenew</span>
                                            Sending...
                                        </span>
                                    ) : (
                                        t('form.submit')
                                    )}
                                </button>
                                <p className="text-[10px] text-contact-muted/50 mt-4 text-center leading-relaxed font-medium">
                                    {t('form.privacy_note')}
                                </p>
                            </div>
                        </form>
                    )}
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-20 animate-slide-up delay-600">
                    <div className="grid gap-6">
                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-start gap-5 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-12 h-12 rounded-lg bg-contact-primary/10 flex items-center justify-center text-contact-primary shadow-sm">
                                <span className="material-icons" aria-hidden="true">business</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">{t('studio_title')}</h3>
                                <p className="text-contact-muted text-sm leading-relaxed">
                                    1280 Eco Park Blvd,<br />Seattle, WA 98101
                                </p>
                            </div>
                        </div>

                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-start gap-5 border border-white/5 hover:border-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-lg bg-[#dccbb5]/10 flex items-center justify-center text-[#dccbb5] shadow-sm">
                                <span className="material-icons" aria-hidden="true">phonelink_ring</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">{t('direct_line')}</h3>
                                <a href="tel:+15550123-4567" className="text-contact-primary font-bold text-lg hover:underline">+1 (555) 0123-4567</a>
                                <p className="text-[10px] text-contact-muted uppercase tracking-widest mt-1 font-bold">{t('direct_line_desc')}</p>
                            </div>
                        </div>

                        <div className="bg-contact-surface p-6 rounded-xl shadow-contact-convex flex items-center justify-between border border-white/5">
                            <span className="text-sm font-semibold text-contact-muted uppercase tracking-widest pl-2">{t('follow_us')}</span>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-full bg-contact-background shadow-contact-convex flex items-center justify-center text-contact-secondary hover:text-contact-primary hover:scale-110 transition-all duration-300" href="#" aria-label="Instagram">
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v-.002zm0 1.8c-2.637 0-2.974.01-4.022.058-1.05.048-1.62.224-2.002.372a3.11 3.11 0 00-1.127.732 3.11 3.11 0 00-.732 1.127c-.148.382-.325.952-.372 2.002-.048 1.048-.058 1.385-.058 4.022 0 2.637.01 2.974.058 4.022.048 1.05.224 1.62.372 2.002.345.886.966 1.507 1.853 1.853.382.148.952.325 2.002.372 1.048.048 1.385.058 4.022.058 2.637 0 2.974-.01 4.022-.058 1.05-.048 1.62-.224 2.002-.372a3.11 3.11 0 001.127-.732 3.11 3.11 0 00.732-1.127c.148-.382.325-.952.372-2.002.048-1.048.058-1.385.058-4.022 0-2.637-.01-2.974-.058-4.022-.048-1.05-.224-1.62-.372-2.002a3.11 3.11 0 00-.732-1.127 3.11 3.11 0 00-1.127-.732c-.382-.148-.952-.325-2.002-.372-1.049-.048-1.386-.058-4.023-.058zm0 4.414a5.386 5.386 0 100 10.772 5.386 5.386 0 000-10.772zm0 8.973a3.587 3.587 0 110-7.174 3.587 3.587 0 010 7.174zm5.275-9.35a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
                                </a>
                                <a className="w-10 h-10 rounded-full bg-contact-background shadow-contact-convex flex items-center justify-center text-contact-secondary hover:text-contact-primary hover:scale-110 transition-all duration-300" href="#" aria-label="LinkedIn">
                                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-contact-convex border border-white/5 map-grayscale-filter group">
                        <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl"></div>
                        <div className="absolute inset-0 bg-contact-primary/5 z-10 pointer-events-none mix-blend-overlay"></div>
                        <iframe
                            allowFullScreen
                            className="w-full h-full grayscale"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357597.0223594193!2d-122.9231804473872!3d45.542241511210156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1684346765000!5m2!1sen!2sus"
                            style={{ border: 0 }}
                            title="Office Location Map"
                        ></iframe>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20">
                            <div className="relative">
                                <span className="w-4 h-4 bg-contact-primary rounded-full block animate-ping absolute"></span>
                                <span className="w-4 h-4 bg-contact-primary rounded-full block relative shadow-[0_0_15px_#d2b48c]"></span>
                                <div className="w-0.5 h-8 bg-gradient-to-t from-transparent to-contact-primary mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
