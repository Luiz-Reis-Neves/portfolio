import { GraduationCap } from 'lucide-react'

export function CardOne() {
    return (
        <div className="w-full max-w-[300px] h-[170px] bg-black/30 border border-[var(--color-border)] rounded-xl p-5 terminal-card card-hover">
            <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={18} className="text-[var(--color-purple)]" />
                <span className="text-[var(--color-purple)] font-bold text-sm">Education</span>
            </div>
            <h3 className="text-[var(--color-white)] font-bold text-base mb-1">
                Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-[var(--color-muted)] text-sm">Estácio</p>
            <p className="text-[var(--color-muted)] text-sm">2025 - Present</p>
        </div>
    )
}