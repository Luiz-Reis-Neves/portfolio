import { useState } from 'react'
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Projects, ProjectDetail } from '../../types'
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

type ProjectDetailsProps = {
    project: Projects
    detail?: ProjectDetail
}

export function ProjectDetails({ project, detail }: ProjectDetailsProps) {
    const [imgIndex, setImgIndex] = useState(0)
    const images = project.images && project.images.length > 0 ? project.images : [project.image]

    const nextImage = () => setImgIndex((i) => (i + 1) % images.length)
    const prevImage = () => setImgIndex((i) => (i - 1 + images.length) % images.length)

    return (
        <>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl border-b border-[var(--color-border)]">
                <img
                    src={images[imgIndex]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-50"
                />
                <img
                    src={images[imgIndex]}
                    alt={`${project.name} screenshot ${imgIndex + 1}`}
                    className="relative z-10 w-full h-full object-contain object-center"
                />
                {images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-1 text-[var(--color-text)] hover:bg-black/80 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextImage} className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-1 text-[var(--color-text)] hover:bg-black/80 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                        <div className="absolute z-20 bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, i) => (
                                <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? 'bg-[var(--color-text)]' : 'bg-[var(--color-muted)]'}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-4 p-5">
                <div>
                    <h2 className="text-[19px] font-bold text-[var(--color-white)]">{project.name}</h2>
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)]">Status: {project.status}</span>
                </div>

                <p className="text-sm text-justify text-[var(--color-text)] leading-relaxed">{project.description}</p>

                {detail?.sections.map((section, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        {section.title && (
                            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-purple)]">
                                {section.title}
                            </h3>
                        )}
                        {section.subtitle && (
                            <p className="text-xs font-mono text-[var(--color-muted)]">
                                {section.subtitle}
                            </p>
                        )}
                        {section.image && (
                            <img
                                src={section.image}
                                alt={section.title ?? project.name}
                                className="w-full rounded-lg border border-[var(--color-border)] object-cover"
                            />
                        )}
                        {section.text && (
                            <p className="text-sm text-justify text-[var(--color-text)] leading-relaxed">
                                {section.text}
                            </p>
                        )}
                        {section.list && (
                            <ul className="flex flex-col gap-1 list-disc list-inside">
                                {section.list.map((item, j) => (
                                    <li key={j} className="text-sm text-[var(--color-text)] leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}

                <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-purple)]">Stack</h3>
                    <div className="flex gap-3 flex-wrap">
                        {project.stack.map((item) => {
                            const Icon = iconMap[item.icon]
                            return (
                                <div key={item.name} className="flex items-center gap-1">
                                    {Icon && <Icon size={18} />}
                                    <span className="text-xs font-mono text-[var(--color-muted)]">{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex gap-3 pt-2">
                    {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" className="btn-outline inline-flex items-center justify-center min-w-[80px] h-[40px]">
                            <span>Live</span>
                        </a>
                    ) : project.lockedReason ? (
                        <button type="button" onClick={() => alert(project.lockedReason)} className="btn-outline inline-flex items-center justify-center gap-1 min-w-[80px] h-[40px] opacity-50">
                            <Lock size={14} />
                            <span>Live</span>
                        </button>
                    ) : null}

                    {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" className="btn-outline inline-flex items-center justify-center min-w-[80px] h-[40px]">
                            <span>GitHub</span>
                        </a>
                    ) : project.lockedReason ? (
                        <button type="button" onClick={() => alert(project.lockedReason)} className="btn-outline inline-flex items-center justify-center gap-1 min-w-[80px] h-[40px] opacity-50">
                            <Lock size={14} />
                            <span>GitHub</span>
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    )
}