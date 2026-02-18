'use client'

import Script from 'next/script'

export function NonBlockingIcons() {
    return (
        <Script
            id="material-icons"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Round&display=swap';
                    document.head.appendChild(link);
                `
            }}
        />
    )
}
