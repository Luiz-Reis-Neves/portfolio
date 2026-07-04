import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BtnContact } from "./BtnContact.tsx"
import { BtnResume } from "./BtnResume.tsx"
import { RotatingWord } from "../rotatingWord/RotatingWord.tsx"

export function Apresentation() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    useEffect(() => {
        const els = [ref1.current, ref2.current, ref3.current, ref4.current]

        gsap.set(els, { y: 24, opacity: 0, filter: 'blur(4px)' })

        gsap.to(els, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.3
        })
    }, [])

    return (
        <div className=" hero-text-scrim relative w-full flex flex-1 flex-col justify-center gap-6 pt-0 px-0 sm:w-[90%] lg:w-[50%] lg:gap-4 lg:pt-0 lg:px-0">
            <h1 className=" text-white/90 font-mono text-xs uppercase tracking-widest">// I'm</h1>
            <h1 ref={ref1} className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-[96px] leading-[0.95] text-[#00ff88] [text-shadow:0_0_24px_rgba(0,255,136,0.45)]">
                Luiz Reis Neves
            </h1>
            <h2 ref={ref2} className="font-[family-name:var(--font-body)] text-2xl font-normal text-white/90">
                Fullstack Developer
            </h2>
            <p ref={ref3} className="font-[family-name:var(--font-body)] text-base leading-[1.75] text-neutral-300 max-w-md">
                A professional <RotatingWord /> crafting seamless experiences from frontend to backend.
            </p>
            <div ref={ref4} className="flex flex-wrap gap-2">
                <BtnContact />
                <BtnResume />
            </div>
        </div>
    )
}