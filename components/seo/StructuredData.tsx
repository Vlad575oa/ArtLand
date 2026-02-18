export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LandscapingBusiness',
        name: 'TERRA.ART',
        alternateName: 'Terraform Design',
        description: 'Premium landscape architecture studio specializing in sustainable garden design, hardscaping, hydro systems, and landscape lighting.',
        url: 'https://terra.art',
        logo: 'https://terra.art/favicon.ico',
        telephone: '+1 (555) 0123-4567',
        email: 'hello@terraform.design',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '1280 Eco Park Blvd',
            addressLocality: 'Seattle',
            addressRegion: 'WA',
            postalCode: '98101',
            addressCountry: 'US',
        },
        priceRange: '$$$',
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 47.6062,
                longitude: -122.3321,
            },
            geoRadius: '100000',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Landscape Design Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Greening & Botanical Curation',
                        description: 'Professional greening services including plant selection, ecosystem creation, and garden care.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Hardscaping',
                        description: 'Landscape sculpture: terraces, retaining walls, paving, and architectural structures.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Hydro Systems',
                        description: 'Design and installation of water features, fountains, ponds, and drainage systems.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Landscape Lumination',
                        description: 'Atmospheric landscape lighting for trees, pathways, and architectural elements.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Irrigation Systems',
                        description: 'Automatic irrigation systems for lawns and gardens.',
                    },
                },
            ],
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export function ServiceSchema({
    name,
    description,
    image,
    offers
}: {
    name: string;
    description: string;
    image: string;
    offers?: { name: string; description: string; price?: string }[]
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'LandscapingBusiness',
            name: 'TERRA.ART',
            image: 'https://terra.art/favicon.ico',
        },
        image: `https://terra.art${image}`,
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 47.6062,
                longitude: -122.3321,
            },
            geoRadius: '100000',
        },
        ...(offers && {
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `${name} Services`,
                itemListElement: offers.map((offer, index) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: offer.name,
                        description: offer.description,
                        ...(offer.price && { price: offer.price, priceCurrency: 'USD' })
                    },
                })),
            },
        }),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
