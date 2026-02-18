import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Условия использования | TERRA.ART',
        titleEn: 'Terms of Service | TERRA.ART',
        descriptionRu: 'Условия использования сайта и услуг TERRA.ART.',
        descriptionEn: 'Terms and conditions for using TERRA.ART website and services.',
        path: '/terms',
    }, locale);
}

export default function TermsPage() {
    return (
        <div className="container mx-auto px-6 py-32 font-sans text-slate-800 dark:text-slate-200">
            <h1 className="font-serif text-4xl mb-8">Условия использования (Public Offer Disclaimer)</h1>

            <div className="prose dark:prose-invert max-w-4xl space-y-6">
                <p className="italic text-sm opacity-70">Последнее обновление: Февраль 2026</p>

                <section>
                    <h3 className="text-xl font-bold mb-2">1. Общие положения</h3>
                    <p>Данный веб-сайт (terra.art) носит исключительно информационный характер. Ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-2">2. Интеллектуальная собственность</h3>
                    <p>Все материалы, представленные на сайте, включая изображения проектов, тексты, логотипы и дизайн, являются интеллектуальной собственностью TERRA.ART и защищены законодательством об авторском праве. Использование материалов без письменного разрешения правообладателя запрещено.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-2">3. Ограничение ответственности</h3>
                    <p>Администрация сайта не несет ответственности за возможный прямой или косвенный ущерб, связанный с использованием информации данного сайта. Точная стоимость и сроки реализации проектов рассчитываются индивидуально и фиксируются в договоре.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-2">4. Изменения условий</h3>
                    <p>Компания оставляет за собой право в любое время вносить изменения в содержание сайта, заменять материалы и изменять цены без предварительного уведомления.</p>
                </section>
            </div>
        </div>
    )
}
