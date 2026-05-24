import { useState, useEffect } from 'react'
import { navLinks } from '../../data/index.ts'
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('#Hero')

  const icons: Record<string, LucideIcon> = {
    '#Hero': Home,
    '#AboutMe': User,
    '#Skills': Code2,
    '#Projects': FolderGit2,
    '#Contact': Mail,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3 }
    )

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full h-[80px] fixed z-50 bottom-0 left-0 flex justify-center items-center">
      <div className="border-glow w-[90%] max-w-[500px] xl:max-w-[500px] h-[60px] rounded-2xl">
        <div className="border-glow-inner rounded-2xl">
          <ul className="w-full flex justify-between items-center h-full p-5">
            {navLinks.map((link) => {
              const Icon = icons[link.href]
              const isActive = activeSection === link.href
              return (
                <li key={link.href} className="flex items-center gap-1">


                  <a href={link.href}
                    className={`text-sm flex gap-1 items-center ${isActive ? 'nav-blink-active' : 'nav-blink'}`}>
                    <Icon className="w-6 h-6 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}