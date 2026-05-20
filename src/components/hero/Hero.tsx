import { MatrixRain } from "../matrixRain/MatrixRain"
import { Apresentation } from "./Apresentation.tsx"
import { Terminal } from "./Terminal.tsx"
export function Hero() {
    
    return (
        <>
            <MatrixRain />
            <div className="min-h-screen w-full">

                <div className="max-w-6xl mx-auto">
                   <div className="w-[100%] min-h-screen flex flex-col md:flex-row gap-8 p-6 md:p-0">
                        <Apresentation/>
                        <Terminal/>
                   </div>
                </div>

            </div>
        </>
    )
}