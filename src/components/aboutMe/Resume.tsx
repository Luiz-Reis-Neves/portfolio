import { CardOne } from "./CardOne.tsx"
import { CardTwo } from "./CardTwo.tsx"
export function Resume() {
    return (
        <div className="w-[60%] h-screen flex flex-col gap-5">
            <div className="h-[20%] w-full pl-10 pt-5">
                <h1 className="text-[var(--color-white)]">About</h1>
                <h2 className="text-6xl font-[family-name:var(--font-display)]">Fullstack Developer</h2>
            </div>
            <div className="h-[40%] w-[90%] flex justify-center pl-10">
                <p className="text-justify">I'm Luiz Reis Neves, a Fullstack developer in constant evolution,
                    focused on building modern and functional interfaces with React and TypeScript.
                    I currently develop real projects applying what I learn — turning
                    code into solutions that solve concrete problems.

                    Passionate about continuous learning, I'm expanding my stack to the backend
                    with the goal of mastering the full development cycle — from what the user
                    sees to what runs behind the scenes. I believe good code is code that works,
                    that scales and makes sense to whoever maintains it.</p>
            </div>
            <div className="h-[40%] w-[100%] flex justify-center items-center gap-3">
                <CardOne/>
                <CardTwo/>
            </div>
        </div>
    )
}