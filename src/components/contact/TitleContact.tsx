import type { LucideIcon } from 'lucide-react'
import { Mail } from 'lucide-react'

export function TitleContact(){
    const Icon: LucideIcon = Mail
    return(
        <div className="w-full flex items-center sm:ml-[60px] gap-2 ">
            <Icon size={50}/>
            <div className="flex flex-col">
                <h1 className="text-[var(--color-white)] text-[25px] leading-none">Contact</h1>
                <p className=''>"You take the blue pill, the story ends. You take the red pill, you stay in Wonderland." — Morpheus</p>
            </div>
            
        </div>
    )
}