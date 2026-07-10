export type NavLink = {
  label: string
  href: string
}

export type Skill = {
  name: string
  learning: boolean
}

export type stackItems = {
  name: string
  icon: string
}

export type Projects = {
  id:number
  image: string
  images?: string[]
  name: string
  description: string
  stack: stackItems[]
  status:string
  liveUrl?: string
  githubUrl?: string
}

export type Section = {
  title?: string
  subtitle?: string
  image?: string
  text?:string
  list?:string[]
}

export type ProjectDetail = {
  id: number
  sections: Section[]
}