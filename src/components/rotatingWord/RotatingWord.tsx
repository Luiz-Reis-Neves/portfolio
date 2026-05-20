import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const words = ['Engineer', 'Developer', 'Architect']

export function RotatingWord() {
  const [index, setIndex] = useState(0)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
  if (!textRef.current) return
  
  const letters = textRef.current.querySelectorAll('.letter')
  
  // animação de entrada — letras aparecem uma após a outra
  gsap.fromTo(letters,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.1, 
      stagger: 0.05,
      ease: 'power2.out'
    }
  )

  // depois de 2.5s, anima saída e troca de palavra
  const timeout = setTimeout(() => {
    gsap.to(letters, {
      opacity: 0,
      y: -20,
      duration: 0.1,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => {
        setIndex((prev) => (prev + 1) % words.length)
      }
    })
  }, 2500)

  return () => clearTimeout(timeout)
}, [index])

  return (
  <span ref={textRef} className="text-[var(--color-purple)] inline-block">
    {words[index].split('').map((letter, i) => (
      <span 
        key={`${index}-${i}`} 
        className="inline-block letter"
      >
        {letter}
      </span>
    ))}
  </span>
)
}