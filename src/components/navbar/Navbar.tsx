import { navLinks } from '../../data/index.ts'
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function Navbar() {
  const icons: Record<string, LucideIcon> = {
    '#Hero': Home,
    '#AboutMe': User,
    '#Skills': Code2,
    '#Projects': FolderGit2,
    '#Contact': Mail,
  }

  return (
    <div className="w-full h-[80px] fixed bottom-0 left-0 flex justify-center items-center">
      <div className="border-glow w-[90%] max-w-[500px] xl:max-w-[500px] h-[60px] rounded-2xl">
        <div className="border-glow-inner rounded-2xl">
          <ul className="w-full flex justify-between items-center h-full p-5">
            {navLinks.map((link) => {
              const Icon = icons[link.href]
              return (
                <li key={link.href} className=" flex items-center gap-1 nav-blink">
                  <a href={link.href} className='text-sm flex gap-1 items-center'>
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