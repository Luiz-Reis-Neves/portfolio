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
  name: string
  description: string
  stack: stackItems[]
  status:string
  liveUrl?: string
  githubUrl?: string
}