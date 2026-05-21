import { MatrixRain } from "../matrixRain/MatrixRain"
import { Apresentation } from "./Apresentation.tsx"
import { Terminal } from "./Terminal.tsx"
export function Hero() {

    return (
        <>
            <div className="relative min-h-screen w-full overflow-hidden">
                <MatrixRain />

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