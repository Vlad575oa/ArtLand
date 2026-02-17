import type { MetadataRoute } from 'next'

const BASE_URL = 'https://terra.art'

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['ru', 'en']
    const pages = [
        { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
        { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
        { path: '/services/greening', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/services/hardscaping', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/services/hydro-systems', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/services/irrigation', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/services/lumination', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/projects', changeFrequency: 'weekly' as const, priority: 0.9 },
        { path: '/philosophy', changeFrequency: 'monthly' as const, priority: 0.7 },
        { path: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
        { path: '/contacts', changeFrequency: 'monthly' as const, priority: 0.8 },
        { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
        { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    ]

    const entries: MetadataRoute.Sitemap = []

    for (const page of pages) {
        for (const locale of locales) {
            const localePath = locale === 'ru' ? '' : `/${locale}`
            entries.push({
                url: `${BASE_URL}${localePath}${page.path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
            })
        }
    }

    return entries
}
