import { useRef, useEffect } from 'react'

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // 1. fazer o canvas ocupar a tela toda
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // 2. definir o tamanho da fonte e calcular colunas
        const fontSize = 16
        const columns = Math.floor(canvas.width / fontSize)

        // 3. criar array de posições Y (uma por coluna)
        const drops: number[] = Array(columns).fill(1)
        const draw = () => {
            // 1. fundo preto semi-transparente (cria o rastro)
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // 2. cor e fonte dos caracteres
            ctx.fillStyle = '#00ff88'
            ctx.font = `${fontSize}px monospace`

            // 3. desenha um caractere em cada coluna
            for (let i = 0; i < drops.length; i++) {
                const char = String.fromCharCode(0x30A0 + Math.random() * 96)
                ctx.fillText(char, i * fontSize, drops[i] * fontSize)

                // 4. reinicia a coluna aleatoriamente quando chega no fim
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
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