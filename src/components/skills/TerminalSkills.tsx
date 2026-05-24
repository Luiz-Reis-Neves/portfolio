import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const skills = [
    { name: 'HTML', text: '[SKILL DETECTED] HTML..............OK', learning: false },
    { name: 'CSS', text: '[SKILL DETECTED] CSS...............OK', learning: false },
    { name: 'TypeScript', text: '[SKILL DETECTED] TYPESCRIPT........OK', learning: false },
    { name: 'Tailwind', text: '[SKILL DETECTED] TAILWIND..........OK', learning: false },
    { name: 'React', text: '[SKILL DETECTED] REACT.............OK', learning: false },
    { name: 'Git/GitHub', text: '[SKILL DETECTED] GIT/GITHUB........OK', learning: false },
    { name: 'GSAP', text: '[SKILL DETECTED] GSAP........LEARNING', learning: true },
    { name: 'Node.js', text: '[SKILL DETECTED] NODE.JS.....LEARNING', learning: true },
    { name: 'API REST', text: '[SKILL DETECTED] APIREST.....LEARNING', learning: true },
    { name: 'MySQL', text: '[SKILL DETECTED] MYSQL.......LEARNING', learning: true },
]

const PROMPT = '<span style="color:#006633">C:\\&gt;</span> '
const PROMPT_END = '<span style="color:#006633">C:\\&gt;_</span>'

type Props = {
    onComplete: () => void
}

export function TerminalSkills({ onComplete }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const startedRef = useRef(false)
    const cancelledRef = useRef(false)

    useEffect(() => {
        if (startedRef.current) return
        startedRef.current = true
        cancelledRef.current = false

        const el = containerRef.current
        if (!el) return

        const lines: string[] = []
        let typing = ''

        const render = () => {
            const all = [...lines]
            if (typing !== '') all.push(typing)
            el.innerHTML = all.join('\n') + '<span class="cursor-blink">█</span>'
        }

        const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

        const typeText = async (prefix: string, text: string, speed = 60) => {
            let typed = ''
            for (const ch of text) {
                if (cancelledRef.current) return
                typed += ch
                typing = prefix + typed
                render()
                await wait(speed)
            }
            lines.push(prefix + text)
            typing = ''
            render()
        }

        const addLine = (text: string, cls = '') => {
            lines.push(`<span class="${cls}">${text}</span>`)
            render()
        }

        const run = async () => {
            await wait(400)
            await typeText(PROMPT, 'DIR skills.md', 80)
            await wait(1000)

            addLine('Volume in drive C has no label', 'text-[var(--color-muted)]')
            addLine(' Directory of C:\\DEV', 'text-[var(--color-muted)]')
            addLine('')
            addLine('SKILLS   MD        2,048  05-20-25  9:32a', 'text-[var(--color-muted)]')
            addLine('         1 File(s)      2,048 bytes free', 'text-[var(--color-muted)]')
            await wait(1000)

            await typeText(PROMPT, 'TYPE skills.md', 80)
            await wait(800)

            addLine('Loading file...', 'text-[var(--color-muted)]')
            await wait(600)

            for (const skill of skills) {
                if (cancelledRef.current) return
                await wait(350)
                addLine(skill.text, skill.learning ? 'text-[var(--color-purple)]' : '')
            }

            await wait(500)
            addLine('10 skills loaded successfully.')
            await wait(400)
            lines.push(PROMPT_END)
            render()
            onComplete() // ← chama aqui
        }

        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => run()
        })

        return () => {}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="w-full h-auto sm:w-[50%] sm:h-[600px] lg:w-[40%] lg:h-[600px] p-6">
            <div
                ref={containerRef}
                className="text-[var(--color-green)] font-mono text-sm leading-loose whitespace-pre-wrap sm:ml-[30px]"
            >
                █
            </div>
        </div>
    )
}