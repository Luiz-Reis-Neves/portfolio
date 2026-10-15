import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../../utils/motion.ts'

type Drop = {
    y: number
    speed: number
    chars: string[]
}

const fontSize = 16
const trailLength = 20
const frameInterval = 50 // ms entre frames (~20 fps) — controla a velocidade da chuva

// helper para sortear caractere
const randomChar = () =>
    String.fromCharCode(0x30A0 + Math.random() * 96)

const randomSpeed = () => 0.3 + Math.random() * 0.4

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const reduced = prefersReducedMotion()
        const drops: Drop[] = []
        const tweens: gsap.core.Tween[] = []
        let speedsRandomized = false

        const createDrop = (): Drop => ({
            y: 0,
            // antes dos 3 segundos todas caem juntas; colunas criadas depois já nascem com velocidade aleatória
            speed: speedsRandomized ? randomSpeed() : 0.5,
            chars: Array.from({ length: trailLength }, randomChar),
        })

        // ajusta o canvas ao tamanho real da seção e adiciona/remove colunas
        const resize = () => {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight

            const columns = Math.floor(canvas.width / fontSize)
            while (drops.length < columns) drops.push(createDrop())
            drops.length = columns

            // movimento reduzido — um único quadro estático, com as colunas espalhadas pela tela
            if (reduced) {
                drops.forEach(drop => {
                    drop.y = Math.random() * (canvas.height / fontSize + trailLength)
                })
                draw()
            }
        }

        // depois de 3 segundos, dá velocidade aleatória pra cada coluna
        const timeout = setTimeout(() => {
            speedsRandomized = true
            drops.forEach(drop => {
                tweens.push(gsap.to(drop, {
                    speed: randomSpeed(),
                    duration: 2,
                    ease: 'power2.out',
                }))
            })
        }, 3000)

        const draw = () => {
            ctx.fillStyle = '#0a0a0a'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const drop = drops[i]

                for (let j = 0; j < trailLength; j++) {
                    const y = (drop.y - j) * fontSize
                    if (y < 0) continue

                    if (j === 0) {
                        ctx.fillStyle = '#ffffff'
                    } else if (j === 1) {
                        ctx.fillStyle = '#d1ffe6'
                    } else if (j === 2) {
                        ctx.fillStyle = '#88ffbb'
                    } else {
                        const opacity = 1 - (j - 2) / (trailLength - 2)
                        ctx.fillStyle = `rgba(0, 255, 136, ${opacity})`
                    }

                    ctx.fillText(drop.chars[j], i * fontSize, y)
                }

                drop.y += drop.speed

                // a cada movimento, "empurra" o array — novo caractere na frente,
                // os outros vão pra trás
                if (Math.floor(drop.y) > Math.floor(drop.y - drop.speed)) {
                    drop.chars.unshift(randomChar())
                    drop.chars.pop()
                }

                if ((drop.y - trailLength) * fontSize > canvas.height) {
                    drop.y = 0
                    drop.speed = randomSpeed()
                }
            }
        }

        resize()

        // loop com requestAnimationFrame — o navegador pausa sozinho em abas em segundo plano
        let rafId = 0
        let lastFrame = 0

        const loop = (time: number) => {
            rafId = requestAnimationFrame(loop)
            if (time - lastFrame < frameInterval) return
            lastFrame = time
            draw()
        }

        const start = () => {
            if (!rafId) rafId = requestAnimationFrame(loop)
        }

        const stop = () => {
            cancelAnimationFrame(rafId)
            rafId = 0
        }

        // só anima enquanto a Hero estiver visível na tela
        const visibilityObserver = new IntersectionObserver(([entry]) => {
            if (reduced) return
            if (entry.isIntersecting) start()
            else stop()
        })
        visibilityObserver.observe(canvas)

        // recalcula as colunas quando a seção muda de tamanho (resize, rotação do celular)
        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(canvas)

        return () => {
            stop()
            clearTimeout(timeout)
            tweens.forEach(tween => tween.kill())
            visibilityObserver.disconnect()
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{ pointerEvents: 'none' }}
        />
    )
}
