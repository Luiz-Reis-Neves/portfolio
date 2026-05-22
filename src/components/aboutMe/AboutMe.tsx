import { Photo } from "./Photo.tsx"
import { Resume } from "./Resume.tsx"
export function AboutMe() {
    return (
        <div className="min-h-screen w-full">
            <div className="max-w-6xl mx-auto">
                <div className="w-[100%] h-auto flex flex-col gap-1 p-4 lg:flex-row lg:p-0">
                    <Photo />
                    <Resume />
                </div>
            </div>
        </div>
    )
}