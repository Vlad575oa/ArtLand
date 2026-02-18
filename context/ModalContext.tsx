'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextType {
    isOpen: boolean
    subject: string
    openModal: (subject?: string) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [subject, setSubject] = useState('')

    const openModal = (newSubject?: string) => {
        setSubject(newSubject || '')
        setIsOpen(true)
        // Prevent body scroll
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsOpen(false)
        setSubject('')
        // Restore body scroll
        document.body.style.overflow = 'unset'
    }

    return (
        <ModalContext.Provider value={{ isOpen, subject, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}
