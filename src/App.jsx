import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Hero />
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
