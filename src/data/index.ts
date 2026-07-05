import type { NavLink, Projects } from "../types/index.ts"
import finControl from "../assets/img/fin-control.png"
import ESD from "../assets/img/ESD.png"
export const navLinks: NavLink[] = [
    { label: "Hero", href: "#Hero" },
    { label: "About Me", href: "#AboutMe" },
    { label: "Skills", href: "#Skills" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
]

export const projects: Projects[] = [
    {
        id: 1,
        image: finControl,
        name: 'Fin-Cntrl',
        description: 'Aplicação de gerenciamento de finanças pessoais — rendas, gastos e cofrinhos.',
        stack: [
            { name: 'Vite', icon: 'vite' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
        ],
        status: 'In Progress',
        liveUrl: 'https://luiz-reis-neves.github.io/fin-cntrl/',
        githubUrl: 'https://github.com/Luiz-Reis-Neves/fin-cntrl'
    },
    {
        id: 2,
        image: ESD,
        name: 'Electrostatic Discharge',
        description: 'Automated system for validating ESD protection equipment in production environments.',
        stack: [
            { name: 'Vite', icon: 'vite' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Express', icon: 'express' },
            { name: 'SQLite3', icon: 'sql' },

        ],
        status: 'In Progress',
        liveUrl: 'https://esd-two.vercel.app/',
        githubUrl: 'https://...'
    }
]