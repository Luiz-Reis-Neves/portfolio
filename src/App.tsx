import { Navbar } from "./components/navbar/Navbar.tsx"
import { Hero } from "./components/hero/Hero.tsx"
import { AboutMe } from "./components/aboutMe/AboutMe.tsx"
function App() {

  return (
    <>
      <Hero />
      <Navbar />
      <AboutMe/>
    </>
  )
}

export default App
