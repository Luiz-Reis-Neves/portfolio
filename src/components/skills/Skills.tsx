import { useState } from 'react'
import { TerminalSkills } from "./TerminalSkills"
import { IconsPanel } from "./IconsPanel"
import type { Skill } from "../../types"
export function Skills() {
     const [detectedSkills, setDetectedSkills] = useState<Skill[]>([])

    const handleSkillDetected = (skill: Skill) => {
        setDetectedSkills(prev => [...prev, skill])
    }
    
    return (
        <div className="min-h-screen w-full">
            <div className="max-w-6xl mx-auto">
                <div className="w-[100%] h-auto flex flex-col gap-1 p-4 sm:flex-row lg:h-screen lg:flex-row lg:p-0">
                    <TerminalSkills onSkillDetected={handleSkillDetected} />
                    <IconsPanel detectedSkills={detectedSkills} />
                </div>
            </div>
        </div>
    )
}