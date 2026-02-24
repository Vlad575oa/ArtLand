import { ReactNode } from 'react'
import { HeroVideoInteractive } from './HeroVideoInteractive'

interface HeroScrollSequenceProps {
    title: ReactNode
    subtitle: string
    ctaText: string
    onCtaClick?: () => void
}

export const HeroScrollSequence = ({ title, subtitle, ctaText, onCtaClick }: HeroScrollSequenceProps) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden bg-hero-gradient">
            <svg className="absolute top-0 right-0 w-[60%] h-full opacity-[0.02] lg:opacity-[0.03] pointer-events-none hidden lg:block" fill="none" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,0 C300,100 400,300 350,600 L0,600 C50,400 100,200 200,0 Z" fill="white" />
            </svg>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                {/* Left Column - Server Rendered Text Content */}
                <div className="lg:col-span-7 flex flex-col gap-8 text-left relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

                    <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-primary/20 w-fit text-xs tracking-[0.2em] uppercase text-primary font-bold backdrop-blur-sm shadow-lg">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Premium Design
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-[#F0F2F0]">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl text-[#B0B8B4] max-w-2xl font-light leading-relaxed pl-1 border-l-2 border-primary/30">
                        {subtitle}
                    </p>
                </div>

                {/* Right Column - Client Interactive Component */}
                <HeroVideoInteractive
                    ctaText={ctaText}
                    onCtaClick={onCtaClick}
                />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-none">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
                    <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    )
}
