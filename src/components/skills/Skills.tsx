import { useState } from 'react'
import { TerminalSkills } from "./TerminalSkills"
import { Carousel } from "./Carousel"
import { SkillsTitle } from './SkillsTitle'
export function Skills() {
    const [terminalDone, setTerminalDone] = useState(false)
    return (
        <div id="Skills" className="w-full min-h-screen ">
            <div className="max-w-6xl mx-auto min-h-screen">
                <div className="w-[100%] h-auto">
                    <SkillsTitle />
                </div>
                <div className="w-[100%] h-auto flex gap-1 flex-col sm:items-center lg:flex-row lg:h-auto lg:p-0">
                    <TerminalSkills onComplete={() => setTerminalDone(true)} />
                    {terminalDone && <Carousel />}
                </div>
            </div>
        </div>
    )
}