import { useEffect } from 'react';
import Lenis from 'lenis'; // Importamos la librería de scroll
import { NavBar } from './components/layout/NavBar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { AboutMe } from './components/sections/AboutMe.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  
  // Este bloque enciende el scroll suave para toda la página
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Controla qué tan largo es el deslizamiento
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0F172A] min-h-screen text-slate-300 font-sans selection:bg-emerald-500 selection:text-white">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;