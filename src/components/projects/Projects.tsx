import { useState } from 'react'
import  { projectsDetails } from "../../data/projectDetails.ts"
import { ProjectModal } from "./ProjectModal.tsx"
import { ProjectDetails } from "./ProjectDetails.tsx"
import { projects } from "../../data"
import { ProjectCards } from "./ProjectsCards.tsx"
import { TitleProjects } from "./TitleProjects.tsx"
export function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const selectedProject = projects.find((p) => p.id === selectedId)
    const selectedDetail = projectsDetails.find((d) => d.id === selectedId)
    return (
        <div id="Projects" className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto min-h-screen flex flex-col gap-4 sm:px-2">
                <TitleProjects />
                <div className="w-[100%] h-auto grid grid-cols-1  p-2 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-2">
                    {projects.map((items) => (
                        <ProjectCards key={items.id} {...items} onSelect={() => setSelectedId(items.id)} />
                    ))}
                </div>
            </div>
            {selectedProject && (
                <ProjectModal onClose={() => setSelectedId(null)}>
                    <ProjectDetails project={selectedProject} detail={selectedDetail} />
                </ProjectModal>
            )}
        </div>
    )
} 