import Link from 'next/link'

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen flex flex-col pt-32">
            {/* Navigation - Note: We are using the global Navbar via the marketing layout, 
          but we'll keep the design specific header here or adjust the layout if needed. 
          Actually, the marketing layout already provides the Navbar. */}

            <header className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full text-center">
                <span className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
                    Expert Landscape Services
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-8">
                    Cultivating <span className="italic font-serif text-primary">Sanctuary</span>
                </h1>
                <p className="text-xl md:text-2xl text-sand-dark font-light max-w-2xl mx-auto leading-relaxed">
                    Where precision engineering meets organic artistry. We sculpt environments that breathe, enduring beyond the seasons.
                </p>
            </header>

            <main className="flex-grow px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Service Card 1: Relief Work */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-moss shadow-soft-volume hover:shadow-lg transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">terrain</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">Hardscaping</h3>
                            <p className="text-white/80 text-sm font-light leading-relaxed mb-8 flex-grow">
                                Sculpting earth to create dimension. We manipulate topography to reveal hidden potentials.
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt="Sculpted earth terrain"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuQKLpxDBNLufG_ADT8tAyE5Z4EkzkZHUHrvoApatSIJ50VHU7H4YoTdp3xhhcNy6r2lklMQHjDlUg7yrQwILU4oziSSDfNJDMHcZNAbHuGONl-hKMHsbtxgfaIatyWurrwAUUeK3j_MHrkVseVJ_OPunZYh0SmvpXPUmf6OaS5l2Hw0DlBwJHC6HlHvvQHVMKmD_wBc6YOacjM5b6aSRRjO9KAT3sRL8e75h8Ra8oYenl4gRUezzRmi9gDNWvCYDLpzpOCoZkSU"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-moss transition-colors duration-300" href="/services/hardscaping">
                                Explore
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 2: Hydro Systems */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-terra shadow-soft-volume hover:shadow-lg transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">water_drop</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">Hydro Systems</h3>
                            <p className="text-white/80 text-sm font-light leading-relaxed mb-8 flex-grow">
                                Invisible infrastructure. Precision engineering that manages water flow seamlessly.
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt="Water flowing"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQZVuzYo6zV16sk34wtjq5rzZNJNDvh7UyWPwzUeg66XV6UWgXeHKQpJ0T1lenp4WKyu9aVcIM0cNd4MXr39WDK3-nlBeYTN0Glc8VpTJDlbBZ5VlRCjtKL9sPZYFaBu0PTBqKDGA46PoAGAExB1bjHR3DPm2KS35_p1pJlAUBMoUIZb4pcjZ6VSuQfx_uZ0TucJgPDmu7fkzqdzjnaTAXz1bEr3tpNsQcrCUMYmZDsyQeebBkgAHFuMGS4eZEjjsdYvtBgDjiFz4"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-terra transition-colors duration-300" href="/services/hydro-systems">
                                Details
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 3: Lumination */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-sand shadow-soft-volume hover:shadow-lg transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-black/10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-[#3d322a]">tungsten</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-[#3d322a] mb-4 tracking-wide group-hover:shimmer-text transition-all duration-300">Lumination</h3>
                            <p className="text-[#3d322a]/80 text-sm font-medium leading-relaxed mb-4 flex-grow group-hover:shimmer-text transition-all duration-300">
                                Atmospheric curation. We paint with light to extend beauty into the evening.
                            </p>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3d322a]/40 mb-8 group-hover:shimmer-text transition-all duration-300">
                                Garden path lighting
                            </span>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt="Garden path lighting"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GhDGO_GRmICrS6X2yWmDCOTWWUHoS5U-pzJdmbuKGVxXSUDJg0DUgEg5m3hs6mBSsfc8MqljxHfmcNfGnZSPZCUyjxdbMXK7iZe0-jxGrl8vSTuHsyr2XPiom7jLDoUH2K_PHoJipck6XR7DsnlU-FAeSep6NCy5GwjLhjejVQAVq3YIj0hs1-zFBasV4PhAW_NzoEpTuT6GKH9CX2UdRPyHj0vXTTlKReTBwgJxQD--_wL_p7cxaKqEc6fKSsL82vRCE1-VgQs"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-[#3d322a] font-bold tracking-widest uppercase border border-[#3d322a]/30 px-5 py-2 rounded-full hover:bg-[#3d322a] hover:text-earth-sand transition-all duration-300 group-hover:shimmer-text" href="/services/lumination">
                                View
                            </Link>
                        </div>
                    </div>

                    {/* Service Card 4: Flora Select */}
                    <div className="group service-card relative overflow-hidden rounded-[2.5rem] bg-earth-stone shadow-soft-volume hover:shadow-lg transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 pointer-events-none" />
                        <div className="relative z-10 h-full p-8 flex flex-col items-center text-center min-h-[420px]">
                            <div className="mb-8 mt-4 relative">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-icon-float ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-icons text-4xl text-white">yard</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">Greening</h3>
                            <p className="text-white/80 text-sm font-light leading-relaxed mb-8 flex-grow">
                                Botanic curation focused on resilience. A living palette of texture and color.
                            </p>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay">
                                <img
                                    alt="Lush fern leaves"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJmyMDiqpQ-VyorlQwdyDXzdAE5PVZdga5qJod9XAxp6NKNnTHIrHfQ8ETwSGrxmEx3XNqMFF4Rv3yn7R2aOeOkZCTzXjidinFwsAAfFmnddKGdedbyJ2gzEFgZkK-kRiAeqRz0eCq4xDVnCA9bZ3UuvzZr8ojZ9si01pFdDdbY20Z7pUg77W-BE2G3NZ6vb1lXJe5IQsXhfMXCmCgxwhpFFZDynGxponFsPU7gLi6JcOfmOdw-C7W2yHkK1FK6H9trWGjnat_GXQ"
                                />
                            </div>
                            <Link className="inline-flex items-center text-xs text-white font-bold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-earth-stone transition-colors duration-300" href="/services/greening">
                                Browse
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-background-dark/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-extralight text-earth-moss">01</span>
                        <h4 className="text-xl text-white font-medium">Consultation</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Understanding the soul of the site and the desires of the dweller. We begin with deep listening.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-extralight text-earth-sand">02</span>
                        <h4 className="text-xl text-white font-medium">Curation</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Selecting materials that age gracefully. Every stone, light fixture, and sapling is chosen for permanence.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-5xl font-extralight text-earth-terra">03</span>
                        <h4 className="text-xl text-white font-medium">Execution</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">A meticulous installation process where precision meets the unpredictable nature of the wild.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/50 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
                        Ready to transform your <br />
                        <span className="text-primary italic font-serif">exterior world?</span>
                    </h2>
                    <Link href="/contacts" className="group relative inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-br from-primary/50 to-primary/10 hover:from-primary hover:to-primary/80 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(143,168,118,0.3)] hover:shadow-[0_0_60px_-10px_rgba(143,168,118,0.6)]">
                        <div className="bg-background-dark rounded-full px-10 py-5 group-hover:bg-transparent transition-colors duration-300">
                            <span className="text-xl text-primary group-hover:text-white font-medium tracking-wide flex items-center gap-3">
                                Book Consultation
                                <span className="material-icons bg-primary/20 rounded-full p-1 text-sm group-hover:bg-white/20 group-hover:text-white transition-colors">north_east</span>
                            </span>
                        </div>
                    </Link>

                    <div className="mt-16 flex justify-center gap-8 text-slate-500 text-sm font-medium">
                        <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
                        <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
