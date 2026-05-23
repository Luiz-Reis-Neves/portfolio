import type { Skill } from '../../types'
import { Zap } from 'lucide-react'
import { Globe } from 'lucide-react'
import {
    Html5Original,
    Css3Original,
    ReactOriginal,
    TailwindcssOriginal,
    TypescriptOriginal,
    GithubOriginal,
    NodejsOriginal,
    MysqlOriginal,
} from 'devicons-react'

type Props = {
    detectedSkills: Skill[]
}

const iconMap: Record<string, React.ReactNode> = {
    'HTML': <Html5Original size={40} />,
    'CSS': <Css3Original size={40} />,
    'TypeScript': <TypescriptOriginal size={40} />,
    'Tailwind': <TailwindcssOriginal size={40} />,
    'React': <ReactOriginal size={40} />,
    'Git/GitHub': <GithubOriginal size={40} />,
    'GSAP': <Zap size={40} color="#00ff88" />,
    'Node.js': <NodejsOriginal size={40} />,
    'API REST': <Globe size={40} color="#00ff88" />,
    'MySQL': <MysqlOriginal size={40} />,
}

export function IconsPanel({ detectedSkills }: Props) {
    return (

        <div className="w-full h-full flex items-center justify-center lg:w-[60%]">
                <div className="grid grid-cols-5 gap-7 p-6" >
                    {detectedSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center gap-2 animate-fade-in card-float"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="w-[60px] h-[60px] bg-black/25 border border-[var(--color-border)] rounded-xl flex items-center justify-center">
                                {iconMap[skill.name]}
                            </div>
                            <span className="text-xs font-mono text-center text-[var(--color-white)]">
                                {skill.name}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}