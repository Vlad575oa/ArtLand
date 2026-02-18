'use client'

import { useModal } from '@/context/ModalContext'
import { useTranslations } from 'next-intl'
import { useEffect, useState, FormEvent } from 'react'

export const ConsultationModal = () => {
    const { isOpen, closeModal, subject } = useModal()
    const t = useTranslations('Contacts')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')
    const [budget, setBudget] = useState('')

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSuccess(false)
            setError('')
            setBudget('')
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const form = e.currentTarget
        const formData = new FormData(form)

        // Include subject if present
        if (subject) {
            formData.append('subject', subject)
        }

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
                    subject: subject || 'General Inquiry'
                }),
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Something went wrong')
            }

            setIsSuccess(true)
        } catch (err: any) {
            setError(err.message || 'Failed to send. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background-dark/90 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-contact-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors z-10"
                >
                    <span className="material-icons-round">close</span>
                </button>

                <div className="p-8 md:p-10">
                    <div className="mb-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-contact-primary/10 text-contact-primary text-[10px] font-bold tracking-widest uppercase border border-contact-primary/20 mb-3">
                            {subject ? `${subject} Inquiry` : t('badge')}
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {isSuccess ? 'Message Sent' : t.rich('title', {
                                living_space: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-contact-primary to-[#dccbb5]">{chunks}</span>
                            })}
                        </h2>
                        {!isSuccess && (
                            <p className="text-contact-muted text-sm">
                                {t('description')}
                            </p>
                        )}
                    </div>

                    {isSuccess ? (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-contact-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons-round text-contact-primary text-4xl">check_circle</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Thank you for reaching out!</h3>
                            <p className="text-contact-muted mb-8 max-w-sm mx-auto">
                                We have received your inquiry and will get back to you within 2 business hours.
                            </p>
                            <button
                                onClick={closeModal}
                                className="px-8 py-3 rounded-full bg-contact-primary text-background-dark font-bold hover:bg-contact-primary/90 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="modal-name" className="text-[10px] font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.name')}</label>
                                    <input
                                        id="modal-name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder={t('form.name_placeholder')}
                                        className="w-full bg-background-dark/50 border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="modal-email" className="text-[10px] font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.email')}</label>
                                    <input
                                        id="modal-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={t('form.email_placeholder')}
                                        className="w-full bg-background-dark/50 border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="modal-location" className="text-[10px] font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.location')}</label>
                                    <input
                                        id="modal-location"
                                        name="location"
                                        type="text"
                                        placeholder={t('form.location_placeholder')}
                                        className="w-full bg-background-dark/50 border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="modal-budget" className="text-[10px] font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.budget')}</label>
                                    <div className="relative">
                                        <select
                                            id="modal-budget"
                                            name="budget"
                                            className="w-full bg-background-dark/50 border border-white/5 text-white rounded-lg py-3 px-4 appearance-none focus:ring-1 focus:ring-contact-primary/30 outline-none cursor-pointer text-sm"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                        >
                                            <option value="">{t('form.budget_select')}</option>
                                            <option value="50-100">{t('form.budget_option_1')}</option>
                                            <option value="100-250">{t('form.budget_option_2')}</option>
                                            <option value="250-500">{t('form.budget_option_3')}</option>
                                            <option value="500+">{t('form.budget_option_4')}</option>
                                        </select>
                                        <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-contact-secondary pointer-events-none text-sm">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="modal-vision" className="text-[10px] font-bold text-contact-muted uppercase tracking-wider ml-1">{t('form.vision')}</label>
                                <textarea
                                    id="modal-vision"
                                    name="vision"
                                    rows={3}
                                    placeholder={t('form.vision_placeholder')}
                                    className="w-full bg-background-dark/50 border border-white/5 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-contact-primary/50 transition-colors resize-none text-sm"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-300 text-xs text-center">
                                    {error}
                                </div>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-contact-primary hover:bg-contact-primary/90 text-background-dark font-bold py-4 rounded-lg transition-all shadow-lg shadow-contact-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin material-icons-round text-lg">autorenew</span>
                                            Wait...
                                        </>
                                    ) : (
                                        t('form.submit')
                                    )}
                                </button>

                                <div className="mt-4 flex flex-col gap-2 items-center">
                                    <div className="flex items-center gap-2 text-[10px] text-contact-muted font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        <span className="material-icons-round text-contact-primary text-xs">verified</span>
                                        {t('form.trust_badge')}
                                    </div>
                                    <p className="text-[10px] text-contact-muted/50">
                                        {t('form.trust_spam')} • {t('form.trust_response')}
                                    </p>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
