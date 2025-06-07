import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
