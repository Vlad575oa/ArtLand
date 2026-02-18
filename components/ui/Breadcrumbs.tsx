import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

interface BreadcrumbsProps {
    items: {
        label: string;
        href: string;
    }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const locale = useLocale();
    const t = useTranslations('Navigation');

    // Prepare schema items
    const schemaItems = [
        {
            name: t('home'),
            url: `https://terra.art/${locale}`
        },
        ...items.map(item => ({
            name: item.label,
            url: `https://terra.art/${locale}${item.href}`
        }))
    ];

    return (
        <>
            <BreadcrumbSchema items={schemaItems} />

            <nav aria-label="Breadcrumb" className="py-4 text-sm font-medium text-gray-400">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-greening-moss transition-colors flex items-center"
                            aria-label={t('home')}
                        >
                            <span className="material-icons-round text-lg">home</span>
                        </Link>
                    </li>

                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <Fragment key={item.href}>
                                <li className="text-gray-600" aria-hidden="true">/</li>
                                <li>
                                    {isLast ? (
                                        <span className="text-greening-moss" aria-current="page">
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="hover:text-greening-moss transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            </Fragment>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
