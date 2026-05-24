import { CardOne } from "./CardOne.tsx"
import { useEffect, useRef } from "react"
import { CardTwo } from "./CardTwo.tsx"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export function Resume() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)


    useEffect(() => {
        gsap.set([ref1.current, ref2.current, ref3.current], { opacity: 0, x: 40 })

        gsap.to([ref1.current, ref2.current, ref3.current], {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ref1.current,  // elemento que dispara a animação
                start: 'top 80%', // quando o topo do elemento chega em 80% da tela
            }
        })
    }, [])
    return (
        <div className="w-[100%] h-[60%] flex flex-col gap-3 sm:justify-center sm:gap-5 sm:items-center lg:w-[60%] lg:h-screen lg:gap-5">
            <div ref={ref1} className="w-[100%] h-[auto] sm:w-[90%]">
            <div className="flex items-center">
                <User size={40} />
                <div className="flex flex-col">
                    <h1 className="text-[var(--color-white)]">About Me</h1>
                    <p className="text-[var(--color-white)] text-[11px]">Follow the white rabbit.</p>
                </div>
            </div>
                <h2 className="text-7xl flex text-center font-[family-name:var(--font-display)] sm:text-6xl sm:text-end">Fullstack Developer</h2>
            </div>
            <div ref={ref2} className="w-[100%] h-auto flex justify-center sm:w-[90%] sm:h-[auto]">
                <p className="text-justify">I'm Luiz Reis Neves, a Fullstack developer in constant evolution,
                    focused on building modern and functional interfaces with React and TypeScript.
                    I currently develop real projects applying what I learn — turning
                    code into solutions that solve concrete problems.

                    Passionate about continuous learning, I'm expanding my stack to the backend
                    with the goal of mastering the full development cycle — from what the user
                    sees to what runs behind the scenes. I believe good code is code that works,
                    that scales and makes sense to whoever maintains it.</p>
            </div>
            <div ref={ref3} className="w-[100%] h-auto flex flex-col justify-center items-center gap-3 sm:w-[100%] sm:h-auto sm:flex-row">
                <CardOne />
                <CardTwo />
            </div>
        </div>
    )
}