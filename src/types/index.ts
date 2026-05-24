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
  name: string
  description: string
  stack: stackItems[]
  image: string
  liveUrl?: string
  githubUrl?: string
}