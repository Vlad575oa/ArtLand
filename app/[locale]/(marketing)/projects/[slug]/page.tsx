export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="container mx-auto px-6 py-32">
            <h1 className="font-serif text-5xl text-[#F0F2F0]">Проект: {slug}</h1>
            <p className="text-[#A0ABA5] mt-6 max-w-2xl font-light">
                Детальное описание реализованного проекта...
            </p>
        </div>
    )
}
