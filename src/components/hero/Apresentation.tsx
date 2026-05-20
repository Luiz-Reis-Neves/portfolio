import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BtnContact } from "./BtnContact.tsx"
import { BtnResume } from "./BtnResume.tsx"
import { RotatingWord } from "../rotatingWord/RotatingWord.tsx"

export function Apresentation() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    useEffect(() => {
        gsap.set([ref1.current, ref2.current, ref3.current], { opacity: 0, x: -40 })

        gsap.to([ref1.current, ref2.current, ref3.current], {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.3
        })
    }, [])

    return (
        <div className="w-[50%] flex flex-1 flex-col justify-center gap-4">
            <div ref={ref1} >
                <h2 className="text-[var(--color-white)] font-bold">Hello! I'm</h2>
                <h1 className="font-[family-name:var(--font-display)] text-7xl font-bold text-[#00ff88]">Luiz Reis Neves</h1>
            </div>
            <div ref={ref2} >
                <h1 className="font-[family-name:var(--font-display)] text-[var(--color-white)] text-2xl">Fullstack Developer</h1>
                <p className="text-[var(--color-white)] font-bold">A professional {<RotatingWord />} </p>
                <p className="text-[var(--color-white)] font-bold">crafting seamless experiences from frontend to backend.</p>
            </div>
            <div ref={ref3} className="flex gap-5">
                <BtnContact />
                <BtnResume />
            </div>
        </div>
    )
}