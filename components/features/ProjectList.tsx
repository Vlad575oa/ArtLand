'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type Project = {
    slug: string
    title: string
    category: string
    desc: string
    img: string
    theme: string
    accent: string
}

type ProjectListProps = {
    projects: Project[]
    categories: string[]
    initialCategory: string
    viewMoreText: string
}

export function ProjectList({ projects, categories, initialCategory, viewMoreText }: ProjectListProps) {
    const [activeCategory, setActiveCategory] = useState(initialCategory)

    const filteredProjects = projects.filter(p =>
        activeCategory === initialCategory || p.category === activeCategory
    )

    return (
        <div className="max-w-7xl mx-auto relative z-10">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-16 animate-slide-up delay-500">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                            ? 'bg-forest-deep text-[#e8eade] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.05)] border border-primary/20'
                            : 'bg-transparent border border-white/5 text-[#a0a8a3] hover:text-primary hover:bg-white/5'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project, i) => (
                    <Link
                        key={project.title}
                        href={`/projects/${project.slug}`}
                        className="group relative rounded-[2.5rem] bg-forest-deep/30 p-3 shadow-portfolio-convex hover:shadow-portfolio-pressed transition-all duration-500 animate-slide-up"
                        style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    >
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden transition-transform duration-500 group-hover:scale-[0.98]">
                            {/* Glass Border Overlay */}
                            <div className="absolute inset-0 rounded-[2rem] border-[8px] border-transparent bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-30 opacity-20" />

                            <img
                                src={project.img}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.theme} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                                            {project.category}
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:bg-primary group/btn">
                                            <span className="material-icons text-white text-sm group-hover/btn:scale-125 transition-transform">arrow_outward</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight font-display">{project.title}</h3>
                                    <p className="text-white/70 text-sm font-light border-l-2 pl-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" style={{ borderColor: project.accent }}>
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-24 flex justify-center">
                <button className="group relative px-10 py-5 rounded-full bg-forest-deep/50 text-[#a0a8a3] font-bold tracking-widest uppercase text-xs hover:text-primary transition-all shadow-portfolio-convex active:shadow-portfolio-pressed border border-white/5">
                    {viewMoreText}
                    <span className="material-icons text-sm ml-2 group-hover:translate-y-1 transition-transform">keyboard_arrow_down</span>
                </button>
            </div>
        </div>
    )
}
