'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="bg-[#1a2e26] font-display min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e26] via-[#152520] to-[#0d1411]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#2a453b] opacity-20 rounded-[100%] blur-[80px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#1e362e] opacity-30 rounded-[100%] blur-[100px]"></div>
                <div className="absolute inset-0 bg-leaf-texture opacity-30"></div>
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-[#dcbfa4]/5 rounded-full blur-[150px] pointer-events-none mix-blend-soft-light"></div>
                <div className="absolute bottom-0 w-full h-[80vh] opacity-30 mix-blend-luminosity mist-layer">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e26] via-transparent to-transparent z-10"></div>
                    <img
                        alt="Misty pine forest silhouette"
                        className="w-full h-full object-cover object-bottom opacity-80"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbGyYIGJhdje5qM6O_xB8_l4FhuH1MLYoXHEbNdNnSPm_Xp9x9q3RfHFSr8XvS9lQArd9wDYmxUnGrzDuFNI_P9tzDr5_VIKhomYuVw5XdVkPhYvGMb79dndELKW4VQqFY-ZL-geG9v19E9FYzGQnP4uhKT_J-XCMYlIf_stnwxHJp8IZUNLZjrci3juI-2bDWkzy-WuDmV4fMBhacAnv953qdFCqnfTmx3ym84bc3Bnq0robGddXkRQx7bqKnnYSTWTggPEv4O5A"
                    />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <h1 className="text-[160px] md:text-[260px] font-thin tracking-tighter text-black/20 select-none blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] scale-105 pointer-events-none">
                        404
                    </h1>
                    <h1 className="text-[140px] md:text-[240px] font-thin tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 drop-shadow-2xl relative z-10">
                        404
                    </h1>
                </div>

                <div className="relative z-20 w-full max-w-xl mx-auto backdrop-blur-md bg-[#1e2d26]/60 p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                        Route lost in the <span className="text-[#dcbfa4] italic font-normal">woods</span>.
                    </h2>
                    <p className="text-lg text-white/50 font-medium leading-relaxed mb-10">
                        The page you are looking for has grown over. Let's get you back to manicured grounds before the fog sets in.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/"
                            className="group relative px-10 py-5 bg-gradient-to-br from-[#e6cdb4] to-[#dcbfa4] text-[#12211b] font-bold text-lg rounded-2xl shadow-404-convex-sand active:shadow-inner active:scale-95 transition-all duration-300 flex items-center gap-3 overflow-hidden active:translate-y-0.5"
                        >
                            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl"></div>
                            <span className="material-icons text-xl relative z-10 transition-transform group-hover:-translate-x-1">west</span>
                            <span className="relative z-10 tracking-wide">Return Home</span>
                        </Link>
                        <button className="px-8 py-5 text-white/60 hover:text-[#dcbfa4] font-medium rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 flex items-center gap-3 hover:shadow-lg">
                            <span className="material-icons text-xl">search</span>
                            <span>Search Site</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 w-full px-8 md:px-12 flex justify-between items-end text-[10px] md:text-xs text-white/20 z-20 font-mono uppercase tracking-[0.2em]">
                <div className="flex flex-col gap-1">
                    <p>Error Code: Path_Not_Found</p>
                    <p>Coords: 47.60.22 N / 122.33.21 W</p>
                </div>
                <div className="flex gap-6 md:gap-8">
                    <a className="hover:text-[#dcbfa4] transition-colors" href="#">Instagram</a>
                    <a className="hover:text-[#dcbfa4] transition-colors" href="#">Twitter</a>
                    <a className="hover:text-[#dcbfa4] transition-colors" href="#">LinkedIn</a>
                </div>
            </div>
        </main>
    )
}
