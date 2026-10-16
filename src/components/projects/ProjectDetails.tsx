import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Projects, ProjectDetail } from '../../types'
import { stackIcons } from './stackIcons.ts'
import { ProjectLinks } from './ProjectLinks.tsx'

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
            <div
                role="region"
                aria-roledescription="carousel"
                aria-label={`${project.name} screenshots`}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl border-b border-[var(--color-border)]"
            >
                <img
                    src={images[imgIndex]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-50"
                />
                <img
                    src={images[imgIndex]}
                    alt={`${project.name} — image ${imgIndex + 1} of ${images.length}`}
                    className="relative z-10 w-full h-full object-contain object-center"
                />
                {images.length > 1 && (
                    <>
                        <button type="button" onClick={prevImage} aria-label="Previous image" className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-1 text-[var(--color-text)] hover:bg-black/80 transition-colors">
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>
                        <button type="button" onClick={nextImage} aria-label="Next image" className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-1 text-[var(--color-text)] hover:bg-black/80 transition-colors">
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                        <div aria-hidden="true" className="absolute z-20 bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, i) => (
                                <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === imgIndex ? 'bg-[var(--color-text)]' : 'bg-[var(--color-muted)]'}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-4 p-5">
                <div>
                    <h2 id="project-modal-title" className="text-[19px] font-bold text-[var(--color-white)]">{project.name}</h2>
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-muted)]">Status: {project.status}</span>
                </div>

                <p className="text-sm text-left sm:text-justify text-[var(--color-text)] leading-relaxed">{project.description}</p>

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
                            <p className="text-sm text-left sm:text-justify text-[var(--color-text)] leading-relaxed">
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
                            const Icon = stackIcons[item.icon]
                            return (
                                <div key={item.name} className="flex items-center gap-1">
                                    {Icon && <Icon size={18} aria-hidden="true" />}
                                    <span className="text-xs font-mono text-[var(--color-muted)]">{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <ProjectLinks
                    name={project.name}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    lockedReason={project.lockedReason}
                    align="start"
                    className="pt-2"
                />
            </div>
        </>
    )
}