import { FolderGit2 } from 'lucide-react'

export function CardTwo() {
    return (
        <div className="w-full max-w-[300px] h-[170px] bg-black/30 border border-[var(--color-border)] rounded-xl p-5 terminal-card card-hover">
            <div className="flex items-center gap-2 mb-3">
                <FolderGit2 size={18} className="text-[var(--color-purple)]" />
                <span className="text-[var(--color-purple)] font-bold text-sm">Projects</span>
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    <h3 className="text-[var(--color-white)] font-bold text-sm">ESD Control System</h3>
                    <p className="text-[var(--color-muted)] text-xs">Industrial testing platform</p>
                </div>
                <div>
                    <h3 className="text-[var(--color-white)] font-bold text-sm">Financial Web App</h3>
                    <p className="text-[var(--color-muted)] text-xs">Personal finance control</p>
                </div>
                <div>
                    <h3 className="text-[var(--color-white)] font-bold text-sm">ZPL Label Print System</h3>
                    <p className="text-[var(--color-muted)] text-xs">Industrial label printing</p>
                </div>
            </div>
        </div>
    )
}