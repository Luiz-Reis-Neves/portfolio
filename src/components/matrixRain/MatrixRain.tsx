import { useRef, useEffect } from 'react'

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const fontSize = 16
        const columns = Math.floor(canvas.width / fontSize)
        const trailLength = 20

        // helper para sortear caractere
        const randomChar = () =>
            String.fromCharCode(0x30A0 + Math.random() * 96)

        // cada coluna: posição, velocidade, e os caracteres do rastro
        const drops = Array.from({ length: columns }, () => ({
            y: Math.random() * canvas.height / fontSize,
            speed: 0.3 + Math.random() * 0.4,
            chars: Array.from({ length: trailLength }, randomChar),
        }))

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
                    drop.speed = 0.3 + Math.random() * 0.4
                }
            }
        }

        const interval = setInterval(draw, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    )
}