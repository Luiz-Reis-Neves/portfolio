import { projects } from "../../data"
import { ProjectCards } from "./ProjectsCards.tsx"
import { TitleProjects } from "./TitleProjects.tsx"
export function Projects(){
    return(
         <div id="Projects" className="w-full min-h-screen ">
            <div className="max-w-6xl mx-auto min-h-screen flex flex-col gap-4">
                <TitleProjects/>
                <div className="w-[100%] h-auto grid grid-cols-3 p-2 gap-4 flex justify-items-center">
                    {projects.map((items)=>(
                        <ProjectCards key={items.id} {...items}/>
                    ))}
                </div>
            </div>
        </div>
    )
}