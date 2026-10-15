import { useId, useState } from 'react'
import { Lock } from 'lucide-react'

type ProjectLinksProps = {
    name: string
    liveUrl?: string
    githubUrl?: string
    lockedReason?: string
    align?: 'center' | 'start'
    className?: string
}

// Botões Live / GitHub — usados no card e no modal do projeto.
// Quando o link não existe e há lockedReason, o botão mostra o motivo inline (no lugar de um alert)
export function ProjectLinks({ name, liveUrl, githubUrl, lockedReason, align = 'center', className = '' }: ProjectLinksProps) {
    const [showReason, setShowReason] = useState(false)
    const reasonId = useId()

    const renderLink = (label: string, url?: string) => {
        if (url) {
            return (
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${name} (opens in a new tab)`} className="btn-outline inline-flex items-center justify-center min-w-[80px] h-[40px]">
                    <span>{label}</span>
                </a>
            )
        }

        if (!lockedReason) return null

        return (
            <button
                type="button"
                onClick={() => setShowReason((v) => !v)}
                aria-expanded={showReason}
                aria-controls={reasonId}
                aria-label={`${label} — ${name} (locked)`}
                className="btn-outline inline-flex items-center justify-center gap-1 min-w-[80px] h-[40px] opacity-50"
            >
                <Lock size={14} aria-hidden="true" />
                <span>{label}</span>
            </button>
        )
    }

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className={`flex gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
                {renderLink('Live', liveUrl)}
                {renderLink('GitHub', githubUrl)}
            </div>

            {/* aria-live anuncia o motivo para leitores de tela quando ele aparece */}
            <p id={reasonId} aria-live="polite" className={`text-xs font-mono text-[var(--color-muted)] ${align === 'center' ? 'text-center' : 'text-left'}`}>
                {showReason && lockedReason}
            </p>
        </div>
    )
}
