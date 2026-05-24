import { useEffect, useRef, useState } from 'react'
import type { Projects } from '../../types'
import {
    Html5Original,
    Css3Original,
    ReactOriginal,
    TypescriptOriginal,
    TailwindcssOriginal,
    NodejsOriginal,
    JavascriptOriginal,
    VitejsOriginal,
    ExpressOriginal,
    MysqlOriginal,
} from 'devicons-react'

// mapa de string → componente de ícone
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    html: Html5Original,
    css: Css3Original,
    react: ReactOriginal,
    javascript: JavascriptOriginal,
    typescript: TypescriptOriginal,
    tailwind: TailwindcssOriginal,
    vite: VitejsOriginal,
    nodejs: NodejsOriginal,
    express: ExpressOriginal,
    sql: MysqlOriginal
}
export function ProjectCards({ id, image, name, description, stack, status, liveUrl, githubUrl }: Projects) {
    const [expanded, setExpanded] = useState(false)

    const descRef = useRef<HTMLDivElement>(null)

    const [isClamped, setIsClamped] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        cardRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,136,0.08), transparent 30%)`
    }

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.background = ''
        }
    }

    useEffect(() => {
        if (descRef.current) {
            setIsClamped(descRef.current.scrollHeight > descRef.current.clientHeight)
        }
    }, [])

    return (
        <div ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} className='w-[100%] h-full border border-gray-500 rounded-2xl flex flex-col  project-card'>

            {/* Imagem do projeto */}
            <div className="w-[100%] h-[200px] border-b border-gray-500">
                <img className='w-full h-full rounded-t-2xl' src={image} alt="" />
            </div>

            {/* Conteúdo do card */}
            <div className='flex flex-col gap-3 p-5'>

                {/* Nome do projeto */}
                <div className='text-[18px] text-[var(--color-white)]'>{id} {name}</div>

                {/* Descrição com expand/collapse */}
                <div ref={descRef} className={`text-[13px] text-justify ${expanded ? '' : 'line-clamp-2'}`}>
                    {description}
                </div>

                {/* Botão ver mais / ver menos */}
                {isClamped && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-[var(--color-green)] text-xs font-mono mt-1"
                    >
                        {expanded ? 'ver menos ↑' : 'ver mais ↓'}
                    </button>
                )}

                {/* Status do projeto */}
                <div className='text-[13px]'>Status: {status}</div>

                {/* Stack de tecnologias */}
                <div className="flex gap-2 flex-wrap">
                    {stack.map((item) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <div key={item.name} className="flex items-center gap-1">
                                {Icon && <Icon size={16} />}
                                <span className="text-xs font-mono text-[var(--color-muted)]">{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Botões de ação */}
            <div className='flex gap-3 p-3 justify-center mt-auto'>
                <a href={liveUrl} target="_blank" className="btn-outline">
                    <span>Live</span>
                </a>
                <a href={githubUrl} target="_blank" className="btn-outline">
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    )
}