import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TitleContact } from "./TitleContact"
import { ContactInformation } from "./ContactInformation"
import { ContactForm } from "./ContactForm"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
    const titleRef = useRef<HTMLDivElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Título — desce de cima
        gsap.set(titleRef.current, { opacity: 0, y: -30 })
        gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                once: true,
            }
        })

        // Informações — vem da esquerda
        gsap.set(infoRef.current, { opacity: 0, x: -40 })
        gsap.to(infoRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: infoRef.current,
                start: 'top 80%',
                once: true,
            }
        })

        // Formulário — vem da direita
        gsap.set(formRef.current, { opacity: 0, x: 40 })
        gsap.to(formRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: formRef.current,
                start: 'top 80%',
                once: true,
            }
        })
    }, [])

    return (
        <div id="Contact" className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto min-h-screen flex flex-col gap-4">
                <div className="w-[100%] flex flex-col min-h-screen">
                    <div ref={titleRef} className="w-full">
                        <TitleContact />
                    </div>
                    <div className="w-[100%] flex flex-col sm:flex-row lg:flex-row">
                        <div ref={infoRef} className="w-[100%] sm:w-[50%] lg:w-[50%]">
                            <ContactInformation />
                        </div>
                        <div ref={formRef} className="w-[100%] sm:w-[50%] lg:w-[50%]">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}