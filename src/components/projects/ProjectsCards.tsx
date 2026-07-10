import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

// Mapa de string → componente de ícone da stack
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

export function ProjectCards({ image, name, description, stack, status, liveUrl, githubUrl, onSelect }: Projects & { onSelect?: () => void }) {
    const descRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    // Efeito spotlight — ilumina ao redor do cursor
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        cardRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,136,0.08), transparent 30%)`
    }

    // Remove o spotlight ao sair do card
    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.background = ''
        }
    }

    useEffect(() => {

        // Animação de entrada com ScrollTrigger — card sobe suavemente ao entrar na tela
        if (cardRef.current) {
            gsap.set(cardRef.current, { opacity: 0, y: 40 })

            ScrollTrigger.create({
                trigger: cardRef.current,
                start: 'top 90%',
                once: true,
                onEnter: () => {
                    gsap.to(cardRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 2.0,
                        ease: 'power2.out',
                    })
                }
            })
        }
    }, [])

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onSelect}
            className='w-[100%] h-auto border border-gray-500 rounded-2xl flex flex-col project-card lg:w-[70%] cursor-pointer'
        >
            {/* Imagem do projeto */}
            <div className="project-img-wrapper w-full h-[170px] aspect-video border-b border-gray-500">
                <img className='w-full rounded-t-2xl object-cover object-top' src={image} alt={name} />
                <div className="project-img-overlay" />
            </div>

            {/* Conteúdo do card */}
            <div className='flex flex-col gap-1 p-5'>

                {/* Nome do projeto */}
                <div className='text-[19px] text-[var(--color-white)]'>{name}</div>

                {/* Descrição com expand/collapse */}
                <div ref={descRef} className={`text-[11px] text-justify`}>
                    {description}
                </div>

                {/* Status do projeto */}
                <div className='text-[11px]'>Status: {status}</div>

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
            <div className='flex gap-3 p-3 justify-center mt-auto' onClick={(e) => e.stopPropagation()}>
                <a href={liveUrl} target="_blank" className="btn-outline inline-flex items-center justify-center min-w-[80px] h-[40px]">
                    <span>Live</span>
                </a>
                <a href={githubUrl} target="_blank" className="btn-outline inline-flex items-center justify-center min-w-[80px] h-[40px]">
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    )
}