import { Hero } from "./components/hero/Hero.tsx"
import { Navbar } from "./components/navbar/Navbar.tsx"
import { AboutMe } from "./components/aboutMe/AboutMe.tsx"
import { Skills } from "./components/skills/Skills.tsx"
import { Projects } from "./components/projects/Projects.tsx"
// import { Contact } from "./components/contact/Contact.tsx"
function App() {

  return (
    <>
      <Hero />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  )
}

export default App
