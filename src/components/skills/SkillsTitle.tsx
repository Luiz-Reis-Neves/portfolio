import type { LucideIcon } from 'lucide-react'
import { Code2 } from 'lucide-react'

export function SkillsTitle(){
    const Icon: LucideIcon = Code2
    return(
        <div className="w-full flex items-center gap-2 ">
            <Icon size={50} aria-hidden="true" className="shrink-0" />
            <div className="flex flex-col">
                <h2 className="text-[var(--color-white)] text-[25px] ">Skills</h2>
                <p className=''>I know kung fu.</p>
            </div>
            
        </div>
    )
}