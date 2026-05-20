import { useEffect, useRef } from 'react'
import gsap from 'gsap'


const phase1 = 'Wake up...'
const phase2 = 'The Matrix has you.'
const phase3 = `const developer = {
  name: 'Luiz Reis Neves',
  focus: 'Fullstack Mastery',
  skills: ['React', 'TypeScript', 'GSAP', 'Node.js'],
  learning: 'Always',
  motto: "Code. Learn. Evolve."
};`

export function Terminal() {
    const terminalRef = useRef(null)

    const textRef = useRef<HTMLPreElement>(null)

    useEffect(() => {
        gsap.set(terminalRef.current, { opacity: 0, x: 40 })

        gsap.to(terminalRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.5
        })

        const terminal = terminalRef.current
        if (!terminal) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = terminal.getBoundingClientRect()

            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const rotateY = ((e.clientX - centerX) / rect.width) * 15
            const rotateX = ((e.clientY - centerY) / rect.height) * -15

            gsap.to(terminal, {
                rotateX,
                rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 800,
            })
        }

        const handleMouseLeave = () => {
            gsap.to(terminal, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: 'power2.out',
            })
        }

        terminal.addEventListener('mousemove', handleMouseMove)
        terminal.addEventListener('mouseleave', handleMouseLeave)


        if (!textRef.current) return

        const el = textRef.current
        let cancelled = false
        let current = ''

        const type = (text: string, speed = 100): Promise<void> =>
            new Promise((resolve) => {
                let i = 0
                const interval = setInterval(() => {
                    if (cancelled) { clearInterval(interval); resolve(); return }
                    current += text[i]
                    el.innerHTML = current + '<span class="cursor-blink">█</span>'
                    i++
                    if (i >= text.length) { clearInterval(interval); resolve() }
                }, speed)
            })

        const erase = (speed = 100): Promise<void> =>
            new Promise((resolve) => {
                const interval = setInterval(() => {
                    if (cancelled) { clearInterval(interval); resolve(); return }
                    if (current.length === 0) { el.innerHTML = '<span class="cursor-blink">█</span>'; clearInterval(interval); resolve(); return }
                    current = current.slice(0, -1)
                    el.innerHTML = current + '<span class="cursor-blink">█</span>'
                }, speed)
            })

        const wait = (ms: number): Promise<void> =>
            new Promise((resolve) => setTimeout(resolve, ms))

        const run = async () => {
            await wait(800)
            await type(phase1)
            await wait(2000)
            await erase()
            await wait(500)
            await type(phase2)
            await wait(2000)
            await erase()
            await wait(500)
            await type(phase3, 50)
        }

        run()

        return () => {
            cancelled = true
            terminal.removeEventListener('mousemove', handleMouseMove)
            terminal.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div className="w-full md:w-[50%] flex-1 flex items-center justify-center">
            <div ref={terminalRef} className="w-[100%] md:w-[90%] h-[350px] rounded-2xl bg-black/80 terminal-card">
                <div className="w-full h-[60px] px-4 flex items-center justify-between bg-[#171313] rounded-t-2xl">
                    <div className="w-[60px] h-[30px] flex items-center justify-center gap-2">
                        <div className="w-[14px] h-[14px] rounded-full bg-[#ff5f57]"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-[#febc2e]"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="w-[100px] h-[30px]">
                        <p className="text-[var(--color-green)] font-mono text-[12px] px-2 py-1 rounded">
                            Portfolio.ts
                        </p>
                    </div>
                </div>
                <div className="p-6">
                    <pre ref={textRef} className="text-[var(--color-green)] font-mono text-sm whitespace-pre-wrap leading-loose">█</pre>
                </div>
            </div>
        </div>
    )
}