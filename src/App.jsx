import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />

      <Footer />
    </>
  );
}

export default App;