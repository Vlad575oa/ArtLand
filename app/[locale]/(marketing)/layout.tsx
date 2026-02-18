import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { StickyCTA } from '@/components/layout/StickyCTA'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-olive-deep focus:rounded-lg focus:font-bold">
                Skip to main content
            </a>
            <Navbar />
            <MobileMenu />
            <div id="main-content">
                {children}
            </div>
            <Footer />
            <StickyCTA />
        </>
    )
}
