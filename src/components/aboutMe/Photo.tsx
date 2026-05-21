import perfil from '../../assets/img/perfil.png'
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from 'gsap'


export function Photo(){
     const ref1 = useRef(null)

     gsap.registerPlugin(ScrollTrigger)

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

    return(
        <div ref={ref1} className="w-[40%] h-screen flex justify-center items-center">
            <img className='w-[80%] h-[90%] rounded-2xl photo-glow' src={perfil} alt="perfil" />
        </div>
    )
}