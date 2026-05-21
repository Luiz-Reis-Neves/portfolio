import { Navbar } from "./components/navbar/Navbar.tsx"
import { Hero } from "./components/hero/Hero.tsx"
import { AboutMe } from "./components/aboutMe/AboutMe.tsx"
import { Skills } from "./components/skills/Skills.tsx"
function App() {

  return (
    <>
      <Hero />
      <Navbar />
      <AboutMe />
      <Skills />
    </>
  )
}

export default App
