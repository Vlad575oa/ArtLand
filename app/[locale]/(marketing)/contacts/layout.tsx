import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Контакты — запишитесь на консультацию | TERRA.ART',
        titleEn: 'Contact Us — Book a Consultation | TERRA.ART',
        descriptionRu: 'Свяжитесь с нами для консультации по ландшафтному дизайну. Запишитесь на встречу с нашими архитекторами. TERRA.ART.',
        descriptionEn: 'Contact us for landscape design consultation. Schedule a meeting with our architects. TERRA.ART.',
        path: '/contacts',
    }, locale);
}

export default function ContactsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
}
