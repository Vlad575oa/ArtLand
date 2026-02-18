'use client'

import { useModal } from '@/context/ModalContext'
import { ReactNode } from 'react'

interface HeroCTAProps {
    text: string
    className?: string
    children?: ReactNode
}

export const HeroCTA = ({ text, className, children }: HeroCTAProps) => {
    const { openModal } = useModal()

    return (
        <button
            onClick={() => openModal()}
            className={className}
        >
            <span>{text}</span>
            {children}
        </button>
    )
}
