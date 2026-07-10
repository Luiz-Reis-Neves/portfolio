import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { X } from 'lucide-react'

type ProjectModalProps = {
    onClose: () => void
    children: React.ReactNode
}

export function ProjectModal({ onClose, children }: ProjectModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.set(overlayRef.current, { opacity: 0 })
        gsap.set(boxRef.current, { opacity: 0, y: 24, scale: 0.97 })
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.25, ease: 'power2.out' })
        gsap.to(boxRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out', delay: 0.05 })

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose])

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose()
    }

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <div
                ref={boxRef}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors bg-black/40 rounded-full p-1"
                >
                    <X size={22} />
                </button>
                {children}
            </div>
        </div>
    )
}