import { BtnContact } from "./BtnContact.tsx"
import { BtnResume } from "./BtnResume.tsx"
import { RotatingWord } from "../rotatingWord/RotatingWord.tsx"
export function Apresentation() {
    return (
        <div className="w-[50%] flex flex-1 flex-col justify-center gap-4">
            <div>
                <h2 className="text-[var(--color-white)] font-bold">Hello! I'm</h2>
                <h1 className="font-[family-name:var(--font-display)] text-7xl font-bold text-[var(--color-title)]">Luiz Reis Neves</h1>
            </div>
            <div>
                <h1 className="font-[family-name:var(--font-display)] text-[var(--color-white)] text-2xl">Fullstack Developer</h1>
                <p className="text-[var(--color-white)] font-bold">A professional {<RotatingWord/>} </p>
                <p className="text-[var(--color-white)] font-bold">crafting seamless experiences from frontend to backend.</p>
            </div>
            <div className="flex gap-5">
                <BtnContact/>
                <BtnResume/>
            </div>
        </div>
    )
}