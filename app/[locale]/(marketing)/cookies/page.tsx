import { generatePageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return generatePageMetadata({
        titleRu: 'Политика использования файлов cookie | TERRA.ART',
        titleEn: 'Cookie Policy | TERRA.ART',
        descriptionRu: 'Информация о том, как TERRA.ART использует файлы cookie.',
        descriptionEn: 'Information on how TERRA.ART uses cookies.',
        path: '/cookies',
    }, locale);
}

export default function CookiesPage() {
    return (
        <div className="container mx-auto px-6 py-32 font-sans text-slate-800 dark:text-slate-200">
            <h1 className="font-serif text-4xl mb-8">Политика использования файлов Cookie</h1>

            <div className="prose dark:prose-invert max-w-4xl space-y-6">
                <p>Наш сайт использует файлы cookie, чтобы улучшить работу сайта и предоставить вам персонализированный контент. Ниже мы объясняем, что такое файлы cookie, какие данные мы собираем и как вы можете ими управлять.</p>

                <h3 className="text-xl font-bold">1. Что такое файлы cookie?</h3>
                <p>Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете или телефоне) при посещении веб-сайта. Они позволяют сайту запоминать ваши действия и предпочтения (например, язык, размер шрифта) в течение определенного времени.</p>

                <h3 className="text-xl font-bold">2. Какие типы cookie мы используем?</h3>
                <ul className="list-disc pl-5">
                    <li><strong>Технические (необходимые) cookie:</strong> Эти файлы необходимы для правильной работы сайта. Они позволяют вам перемещаться по сайту и использовать его основные функции. Без них сайт может работать некорректно.</li>
                    <li><strong>Аналитические cookie:</strong> Мы используем сервисы (например, Яндекс.Метрика), чтобы понимать, как посетители взаимодействуют с сайтом. Это помогает нам улучшать структуру и контент. Данные собираются анонимно.</li>
                    <li><strong>Маркетинговые cookie:</strong> Могут использоваться для показа рекламы, наиболее релевантной вашим интересам.</li>
                </ul>

                <h3 className="text-xl font-bold">3. Управление файлами cookie</h3>
                <p>Вы можете управлять файлами cookie и удалять их через настройки вашего браузера. Вы также можете заблокировать сохранение cookie, однако это может повлиять на функциональность некоторых частей сайта.</p>

                <h3 className="text-xl font-bold">4. Изменения в Политике</h3>
                <p>Мы можем обновлять данную Политику по мере необходимости. Рекомендуем периодически проверять эту страницу.</p>
            </div>
        </div>
    )
}
