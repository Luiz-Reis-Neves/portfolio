import { useRef } from 'react'
import { Webhook, Zap } from 'lucide-react'
// Import por ícone — o import pela raiz ('devicons-react') carrega todos os ícones (~10 MB)
import Html5Original from 'devicons-react/icons/Html5Original'
import Css3Original from 'devicons-react/icons/Css3Original'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal'
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal'
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal'
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal'
import GitOriginal from 'devicons-react/icons/GitOriginal'
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal'

const row1 = [
    { name: 'HTML', subName: 'Markup Language', icon: <Html5Original size={32} /> },
    { name: 'CSS', subName: 'Style Sheet', icon: <Css3Original size={32} /> },
    { name: 'JavaScript', subName: 'Language', icon: <JavascriptOriginal size={32} /> },
    { name: 'TypeScript', subName: 'Language', icon: <TypescriptOriginal size={32} /> },
    { name: 'React', subName: 'Framework', icon: <ReactOriginal size={32} /> },
    { name: 'TailwindCSS', subName: 'CSS Framework', icon: <TailwindcssOriginal size={32} /> },
    { name: 'GSAP', subName: 'Animation Library', icon: <Zap size={32} color="#00ff88" /> },
]

const row2 = [
    { name: 'Node.js', subName: 'Runtime', icon: <NodejsOriginal size={32} /> },
    { name: 'Express.js', subName: 'Framework', icon: <ExpressOriginal size={32} /> },
    { name: 'API REST', subName: 'Architecture', icon: <Webhook size={32} color="#00ff88" /> },
    { name: 'MySQL', subName: 'Database', icon: <MysqlOriginal size={32} /> },
    { name: 'Git', subName: 'Version Control', icon: <GitOriginal size={32} /> },
    { name: 'Vite', subName: 'Build Tool', icon: <VitejsOriginal size={32} /> },
]
export function Carousel() {
    const row1Ref = useRef<HTMLDivElement>(null)
    const row2Ref = useRef<HTMLDivElement>(null)

    const handleMouseEnter = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) ref.current.style.animationPlayState = 'paused'
    }

    const handleMouseLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) ref.current.style.animationPlayState = 'running'
    }
    return (
        <div className="w-full h-auto flex lg:w-[60%] lg:h-auto lg:items-center carousel-enter">
            <div className="w-full flex flex-col gap-4 py-6 overflow-hidden carousel-fade">
                {/* Linha 1 — direita para esquerda */}
                <div
                    className="flex gap-4 carousel-track-left"
                    style={{ width: 'max-content' }}
                    ref={row1Ref}
                    onMouseEnter={() => handleMouseEnter(row1Ref)}
                    onMouseLeave={() => handleMouseLeave(row1Ref)}
                >
                    {[...row1, ...row1].map((skill, index) => (
                        <div
                            key={index}
                            // a segunda metade é cópia só para o loop visual — escondida de leitores de tela
                            aria-hidden={index >= row1.length || undefined}
                            className={`carousel-card flex items-center gap-2 bg-white/5 rounded-xl p-7 min-w-max cursor-pointer ${index >= row1.length ? 'carousel-dup' : ''}`}
                        >
                            <div className="carousel-icon">
                                {skill.icon}
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-[var(--color-text)] font-mono text-sm transition-colors duration-300 group-hover:text-white">
                                    {skill.name}
                                </span>
                                <span className="text-[var(--color-title)] font-mono text-[10px] uppercase transition-colors duration-300 group-hover:text-white">
                                    {skill.subName}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Linha 2 — esquerda para direita */}
                <div
                    className="flex gap-4 carousel-track-right"
                    style={{ width: 'max-content' }}
                    ref={row2Ref}
                    onMouseEnter={() => handleMouseEnter(row2Ref)}
                    onMouseLeave={() => handleMouseLeave(row2Ref)}
                >
                    {[...row2, ...row2].map((skill, index) => (
                        <div
                            key={index}
                            // a segunda metade é cópia só para o loop visual — escondida de leitores de tela
                            aria-hidden={index >= row2.length || undefined}
                            className={`carousel-card flex items-center gap-2 bg-white/5 rounded-xl p-7 min-w-max cursor-pointer ${index >= row2.length ? 'carousel-dup' : ''}`}
                        >
                            <div className="carousel-icon">
                                {skill.icon}
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-[var(--color-text)] font-mono text-sm transition-colors duration-300 group-hover:text-white">
                                    {skill.name}
                                </span>
                                <span className="text-[var(--color-title)] font-mono text-[10px] uppercase transition-colors duration-300 group-hover:text-white">
                                    {skill.subName}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
