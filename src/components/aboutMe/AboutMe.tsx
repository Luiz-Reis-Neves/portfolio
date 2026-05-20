import { Photo } from "./Photo.tsx"
import { Resume } from "./Resume.tsx"
export function AboutMe() {
    return (
        <div className="min-h-screen w-full">
            <div className="max-w-6xl mx-auto">
                <div className="w-[100%] h-screen flex flex-col md:flex-row gap-8 p-6 md:p-0 border">
                    <Photo />
                    <Resume />
                </div>
            </div>
        </div>
    )
}