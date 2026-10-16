import { Hero } from "./components/hero/Hero.tsx"
import { Navbar } from "./components/navbar/Navbar.tsx"
import { AboutMe } from "./components/aboutMe/AboutMe.tsx"
import { Skills } from "./components/skills/Skills.tsx"
import { Projects } from "./components/projects/Projects.tsx"
import { Contact } from "./components/contact/Contact.tsx"
function App() {

  return (
    <>
      <Navbar />
      {/* overflow-x-clip: elementos começam deslocados ±40px antes das animações de entrada (GSAP).
          O corte precisa ficar num wrapper — navegadores mobile ignoram overflow no <html> */}
      <main className="overflow-x-clip">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
