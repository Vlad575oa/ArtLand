'use client'

type ApproachStep = {
    icon: string
    title: string
    desc: string
}

type ApproachSectionProps = {
    badge: string
    title: React.ReactNode
    description: string
    steps: ApproachStep[]
}

export function ApproachSection({ badge, title, description, steps }: ApproachSectionProps) {
    return (
        <div className="container mx-auto px-6 mb-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
                <div>
                    <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-primary" />
                        {badge}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-[#F0F2F0] leading-tight">
                        {title}
                    </h3>
                </div>
                <p className="text-[#A0ABA5] max-w-md text-base leading-relaxed font-light">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="convex-card p-8 rounded-2xl flex flex-col justify-between h-[340px] group transition-all duration-500 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                        <div className="w-16 h-16 rounded-2xl bg-[#2C3E34] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                            <span className="material-icons-round text-3xl">{step.icon}</span>
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-serif text-[#F0F2F0] mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                            <p className="text-[#A0ABA5] text-sm leading-relaxed">{step.desc}</p>
                        </div>
                        <div className="mt-4 w-12 h-[2px] bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                    </div>
                ))}
            </div>
        </div>
    )
}
