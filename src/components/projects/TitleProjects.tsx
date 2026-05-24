import type { LucideIcon } from 'lucide-react'
import { FolderGit2 } from 'lucide-react'

export function TitleProjects(){
    const Icon: LucideIcon = FolderGit2
    return(
        <div className="w-full flex items-center sm:ml-[60px] gap-2 ">
            <Icon size={50}/>
            <div className="flex flex-col">
                <h1 className="text-[var(--color-white)] text-[25px] ">Skills</h1>
                <p className=''>"I can only show you the door. You're the one that has to walk through it." — Morpheus</p>
            </div>
            
        </div>
    )
}