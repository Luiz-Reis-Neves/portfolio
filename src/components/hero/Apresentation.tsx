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
        <div className="w-full flex flex-1 flex-col justify-center gap-0 pt-5 px-0 sm:w-[90%] lg:w-[50%] lg:gap-4 lg:pt-0 lg:px-0">
            <div ref={ref1} className="" >
                <h2 className="text-[var(--color-white)] text-[20px] font-bold">Hello! I'm</h2>
               <h1 className="font-[family-name:var(--font-display)] leading-none text-[54px] lg:text-7xl font-bold text-[#00ff88] sm:text-8xl">Luiz Reis Neves</h1>
            </div>
            <div ref={ref2} >
                <h1 className="font-[family-name:var(--font-display)] text-[var(--color-white)] font-bold text-3xl">Fullstack Developer</h1>
                <p className="text-[var(--color-white)] sm:font-bold sm:text-2xl lg:font-normal lg:text-[20px]">A professional {<RotatingWord />} </p>
                <p className="text-[var(--color-white)] sm:font-bold sm:text-2xl lg:font-normal lg:text-[20px]">crafting seamless experiences from frontend to backend.</p>
            </div>
            <div ref={ref3} className="flex gap-5 mt-3">
                <BtnContact />
                <BtnResume />
            </div>
        </div>
    )
}