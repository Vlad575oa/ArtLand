'use client'

import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

interface HeroVideoInteractiveProps {
    onCtaClick?: () => void
}

export const HeroVideoInteractive = ({ onCtaClick }: HeroVideoInteractiveProps) => {
    const t = useTranslations('Hero')
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleVideoEnded = () => {
        setIsPlaying(false)
    }

    const handleLoadedData = () => {
        setIsLoaded(true)
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.warn('Autoplay blocked:', err)
                setIsPlaying(false)
            })
        }
    }

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    const handleToggleMute = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <div className="lg:col-span-5 flex flex-col items-center mt-12 lg:mt-0">
            <div className="relative w-full">
                {/* Video Container */}
                <div className="relative h-[500px] md:h-[650px] w-full">
                    <div className="absolute inset-0 leaf-shape-wide overflow-hidden convex-card p-2 z-10 transition-all duration-700 ease-out">
                        <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-[#1a2520]">
                            <video
                                ref={videoRef}
                                src="/images/hero/Hero.mp4"
                                poster="/images/hero/hero-main.webp"
                                autoPlay
                                loop={false}
                                muted={isMuted}
                                playsInline
                                preload="auto"
                                onLoadedData={handleLoadedData}
                                onEnded={handleVideoEnded}
                                className="object-cover w-full h-full transition-all duration-700"
                                style={{ filter: isPlaying ? 'none' : 'blur(8px)' }}
                            />

                            {/* Overlay when video ends */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex flex-col justify-start items-center pt-16 bg-black/40 backdrop-blur-sm rounded-[2rem] transition-all duration-500">
                                    {/* Text with fade + lift animation */}
                                    <div className="text-center mt-10 animate-fade-up-slow">
                                        <p className="text-white text-2xl md:text-4xl font-light mb-3">
                                            {t('video_overlay_text')}
                                        </p>
                                        <p className="text-[#8fa86e] text-4xl md:text-6xl font-serif tracking-wide">
                                            {t('video_brand')}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-auto mb-8">
                                        {/* Play Button */}
                                        <button
                                            onClick={handlePlayClick}
                                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300 group"
                                        >
                                            <svg className="w-5 h-5 text-white ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>

                                        {/* Sound Toggle Button */}
                                        <button
                                            onClick={handleToggleMute}
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                        >
                                            {isMuted ? (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="absolute top-10 -right-8 w-3/4 h-3/4 bg-[#3D5246] leaf-shape-wide -z-0 opacity-40 rotate-6" />
                </div>

                {/* Labels Below Video */}
                <div className="flex justify-end items-center mt-8 px-1">
                    <span className="text-xs md:text-sm text-[#8fa86e] font-medium tracking-wide">
                        {t('video_design_label')}
                    </span>
                </div>
            </div>
        </div>
    )
}
