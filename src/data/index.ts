import type { NavLink, Projects } from "../types/index.ts"
import finControl from "../assets/img/fin-control.png"
import zpl from "../assets/img/project-zpl.png"
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
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'Vite', icon: 'vite' }
        ],
        status: 'In Progress',
        liveUrl: 'https://luiz-reis-neves.github.io/fin-cntrl/',
        githubUrl: 'https://github.com/Luiz-Reis-Neves/fin-cntrl'
    },
    {
        id: 2,
        image: ESD,
        name: 'Electrostatic Discharge',
        description: 'Automated system for validating ESD (Electrostatic Discharge) protection equipment in production environments.',
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
    },
    {
        id: 3,
        image: zpl,
        name: 'project-zpl',
        description: 'This project is a web application developed to generate and customize labels in ZPL (Zebra Programming Language) format used in Zebra thermal printers.',
        stack: [
            { name: 'Vite', icon: 'vite' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'React', icon: 'react' },
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Express', icon: 'express' },
            { name: 'MySQL', icon: 'sql' },
        ],
        status: 'In Progress',
        liveUrl: 'https://...',
        githubUrl: 'https://...'
    }
]