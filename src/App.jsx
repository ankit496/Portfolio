import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About_me from "./components/About_me"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    // <BrowserRouter>
    <div className="bg-gradient-to-b from-blue-900 to-black h-full w-full bg-repeat">
      <Navbar></Navbar>
      <Hero></Hero>
      <About_me></About_me>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    // </BrowserRouter>
  )
}

export default App
