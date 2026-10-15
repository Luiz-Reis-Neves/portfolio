import type { LucideIcon } from 'lucide-react'
import { FolderGit2 } from 'lucide-react'

export function TitleProjects(){
    const Icon: LucideIcon = FolderGit2
    return(
        <div className="w-full flex items-center gap-2 ">
            <Icon size={50} aria-hidden="true" />
            <div className="flex flex-col">
                <h2 className="text-[var(--color-white)] text-[30px] sm:text-[30px] lg:text-[25px] leading-none ">Projects</h2>
                <p className='text-[12px] sm:text-[15px]'>"I can only show you the door. You're the one that has to walk through it." — Morpheus</p>
            </div>
            
        </div>
    )
}