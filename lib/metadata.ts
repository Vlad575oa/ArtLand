import { Metadata } from 'next'

const BASE_URL = 'https://art-land.vercel.app'

type PageMetaConfig = {
    titleRu: string
    titleEn: string
    descriptionRu: string
    descriptionEn: string
    path: string
    image?: string
}

export function generatePageMetadata(
    config: PageMetaConfig,
    locale: string
): Metadata {
    const isRu = locale === 'ru'
    const title = isRu ? config.titleRu : config.titleEn
    const description = isRu ? config.descriptionRu : config.descriptionEn
    const localePath = isRu ? '' : `/${locale}`
    const canonical = `${BASE_URL}${localePath}${config.path}`

    return {
        metadataBase: new URL(BASE_URL),
        title,
        description,
        alternates: {
            canonical,
            languages: {
                'ru': `${BASE_URL}${config.path}`,
                'en': `${BASE_URL}/en${config.path}`,
            },
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: 'TERRA.ART',
            locale: isRu ? 'ru_RU' : 'en_US',
            type: 'website',
            images: config.image ? [{ url: config.image, width: 1200, height: 630 }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    }
}
