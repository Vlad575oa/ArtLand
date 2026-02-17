'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
    fallbackSrc?: string
}

export function OptimizedImage({
    src,
    alt,
    fallbackSrc = '/images/fallback/placeholder.jpg',
    ...props
}: OptimizedImageProps) {
    const [imgSrc, setImgSrc] = useState(src)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative">
            <Image
                {...props}
                src={imgSrc}
                alt={alt}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setImgSrc(fallbackSrc)
                    setIsLoading(false)
                }}
                className={`${props.className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            />
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-forest-light/20 to-forest-deep/20 animate-pulse" />
            )}
        </div>
    )
}
