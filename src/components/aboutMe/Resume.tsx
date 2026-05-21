import { CardOne } from "./CardOne.tsx"
import { useEffect, useRef } from "react"
import { CardTwo } from "./CardTwo.tsx"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {User} from 'lucide-react'

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
        <div className="w-[100%] h-auto flex flex-col gap-3 lg:w-[60%] lg:h-screen lg:gap-5">
            <div ref={ref1} className="h-[20%] w-full md:pl-10 md:pt-5">
                <div className="flex gap-1 items-center">
                    <User size={16} />
                <h1 className="text-[var(--color-white)]">About</h1>
                </div>
                <h2 className="text-7xl flex text-center font-[family-name:var(--font-display)] md:text-6xl md:text-end">Fullstack Developer</h2>
            </div>
            <div ref={ref2} className="w-[100%] h-auto flex justify-center md:h-[40%] md:w-[90%] md:pl-10">
                <p className="text-justify">I'm Luiz Reis Neves, a Fullstack developer in constant evolution,
                    focused on building modern and functional interfaces with React and TypeScript.
                    I currently develop real projects applying what I learn — turning
                    code into solutions that solve concrete problems.

                    Passionate about continuous learning, I'm expanding my stack to the backend
                    with the goal of mastering the full development cycle — from what the user
                    sees to what runs behind the scenes. I believe good code is code that works,
                    that scales and makes sense to whoever maintains it.</p>
            </div>
            <div ref={ref3} className="w-[100%] h-auto flex flex-col justify-center items-center gap-3 md:w-[100%] md:h-[40%] md:flex-row">
                <CardOne />
                <CardTwo />
            </div>
        </div>
    )
}