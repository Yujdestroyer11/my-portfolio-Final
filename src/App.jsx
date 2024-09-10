import Skills from "./components/Skills"
import About from "./components/About"
import Projects from "./components/Project"
import Work from "./components/Work"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

export default function App() {

  return (
      <div>
        <Header />
        <Hero />
        <Skills/>
        <About />
        <Projects />
        <Work />
        <Contact />
        <Footer />
      </div>
  );
}
