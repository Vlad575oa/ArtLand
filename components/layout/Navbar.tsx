'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-2xl px-4">
            <div className="px-2 py-2 rounded-full bg-background-dark/80 backdrop-blur-md border border-white/5 shadow-glass flex items-center gap-1">
                <Link
                    href="/"
                    className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors ${pathname === '/' ? 'bg-primary text-[#1a2922]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/projects"
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${pathname.startsWith('/projects') ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    Portfolio
                </Link>
                <Link
                    href="/services"
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/services' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    Services
                </Link>
                <Link
                    href="/philosophy"
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/philosophy' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    Философия
                </Link>
                <Link
                    href="/contacts"
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${pathname === '/contacts' ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                >
                    Contacts
                </Link>
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <button className="p-3 rounded-full hover:bg-white/5 text-primary transition-colors">
                    <span className="material-icons text-xl">menu</span>
                </button>
            </div>
        </nav>
    )
}
