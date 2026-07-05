import { MatrixRain } from "../matrixRain/MatrixRain"
import { Apresentation } from "./Apresentation.tsx"
import { Terminal } from "./Terminal.tsx"
export function Hero() {

    return (
        <>
            <div id="Hero" className="relative min-h-screen w-full overflow-hidden">
                <MatrixRain />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-gradient-to-b from-transparent via-[var(--color-bg)]/80 to-[var(--color-bg)]" />

                <div className="max-w-6xl mx-auto">
                    <div className="w-[100%] min-h-screen flex flex-col gap-8 p-6 sm:items-center lg:p-0 lg:flex-row">
                        <Apresentation />
                        <Terminal />
                    </div>
                </div>
            </div>
        </>
    )
}