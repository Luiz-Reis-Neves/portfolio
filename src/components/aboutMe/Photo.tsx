import perfil from '../../assets/img/perfil.png'
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export function Photo() {
    const ref1 = useRef(null)


    useEffect(() => {
        gsap.set([ref1.current], { opacity: 0, x: -40 })

        gsap.to([ref1.current], {
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
        <div ref={ref1} className="w-[100%] h-[40%] flex justify-center items-center lg:w-[40%]">
            <div className="w-[90%] h-[90%] border-glow rounded-2xl sm:w-[40%] sm:h-[40%] lg:w-[80%]">
                <div className="border-glow-inner rounded-2xl">
                    <img className='w-full h-full rounded-2xl object-cover' src={perfil} alt="perfil" />
                </div>
            </div>
        </div>
    )
}