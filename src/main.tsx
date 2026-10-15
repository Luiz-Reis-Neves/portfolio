import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import './style/style.css'
import App from './App.tsx'
import { prefersReducedMotion } from './utils/motion.ts'

// "reduzir movimento" ativo — acelera todas as animações do GSAP para terminarem instantaneamente
if (prefersReducedMotion()) gsap.globalTimeline.timeScale(1000)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
