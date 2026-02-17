import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Портфолио проектов | TERRA.ART',
        titleEn: 'Project Portfolio | TERRA.ART',
        descriptionRu: 'Портфолио завершённых проектов ландшафтного дизайна. Резиденции, коммерческие объекты, реставрация. TERRA.ART.',
        descriptionEn: 'Completed landscape design projects. Residential, commercial, restoration. TERRA.ART.',
        path: '/projects',
        image: '/images/projects/project-1.jpg',
    }, locale);
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
}
