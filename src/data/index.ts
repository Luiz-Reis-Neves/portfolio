import type { NavLink, Projects } from "../types/index.ts"
export const navLinks: NavLink[] = [
    { label: "Hero", href: "#Hero" },
    { label: "About Me", href: "#AboutMe" },
    { label: "Skills", href: "#Skills" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
]

export const projects: Projects[] = [
    {
        name: 'Nome do projeto',
        description: 'Descrição',
        stack: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
        ],
        image: '/img/projeto.png',
        liveUrl: 'https://...',
        githubUrl: 'https://...'
    },
    {
        name: 'Nome do projeto',
        description: 'Descrição',
        stack: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
        ],
        image: '/img/projeto.png',
        liveUrl: 'https://...',
        githubUrl: 'https://...'
    },
    {
        name: 'Nome do projeto',
        description: 'Descrição',
        stack: [
            { name: 'React', icon: 'react' },
            { name: 'TypeScript', icon: 'typescript' },
        ],
        image: '/img/projeto.png',
        liveUrl: 'https://...',
        githubUrl: 'https://...'
    }
]