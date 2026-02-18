'use client'

import Image from 'next/image'

type Service = {
    icon: string
    title: string
    desc: string
    img: string
}

type ServicesSectionProps = {
    badge: string
    title: string
    services: Service[]
}

export function ServicesSection({ badge, title, services }: ServicesSectionProps) {
    return (
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase block mb-4">{badge}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#F0F2F0]">{title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <div key={i} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer convex-card p-2">
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                            <div className="absolute inset-0 will-change-transform">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 mix-blend-saturation opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E27] via-[#1F2E27]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10 text-left">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-olive-deep transition-all">
                                    <span className="material-icons-round">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-light">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
