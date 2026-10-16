import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Projects } from '../../types'
import { stackIcons } from './stackIcons.ts'
import { ProjectLinks } from './ProjectLinks.tsx'

gsap.registerPlugin(ScrollTrigger)

export function ProjectCards({ image, name, description, stack, status, liveUrl, githubUrl, lockedReason, onSelect }: Projects & { onSelect?: () => void }) {
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
            className='relative w-[100%] h-auto border border-gray-500 rounded-2xl flex flex-col project-card lg:w-[70%] has-[.card-open:focus-visible]:outline-2 has-[.card-open:focus-visible]:outline-offset-4 has-[.card-open:focus-visible]:outline-[var(--color-text)]'
        >
            {/* Imagem do projeto */}
            <div className="project-img-wrapper w-full h-[170px] aspect-video border-b border-gray-500">
                <img className='w-full h-full rounded-t-2xl object-cover object-top' src={image} alt="" />
                <div className="project-img-overlay" />
            </div>

            {/* Conteúdo do card */}
            <div className='flex flex-col gap-1 p-5'>

                {/* Nome do projeto — o botão se estende pelo card inteiro (after:inset-0),
                    então o card todo é clicável e também acessível pelo teclado */}
                <h3 className='text-[19px] text-[var(--color-white)]'>
                    <button
                        type="button"
                        onClick={onSelect}
                        aria-haspopup="dialog"
                        className="card-open text-left cursor-pointer focus-visible:outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                    >
                        {name}
                    </button>
                </h3>

                {/* Descrição */}
                <p className='text-[11px] text-left sm:text-justify'>
                    {description}
                </p>

                {/* Status do projeto */}
                <div className='text-[11px]'>Status: {status}</div>

                {/* Stack de tecnologias */}
                <div className="flex gap-2 flex-wrap">
                    {stack.map((item) => {
                        const Icon = stackIcons[item.icon]
                        return (
                            <div key={item.name} className="flex items-center gap-1">
                                {Icon && <Icon size={16} aria-hidden="true" />}
                                <span className="text-xs font-mono text-[var(--color-muted)]">{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Botões de ação — z-10 para ficarem acima da área clicável do card */}
            <ProjectLinks
                name={name}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                lockedReason={lockedReason}
                className='relative z-10 p-3 mt-auto'
            />
        </div>
    )
}
