import { useEffect } from 'react';
import Lenis from 'lenis'; 
import { LanguageProvider } from "./context/LanguageContext";
import { NavBar } from './components/layout/NavBar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { AboutMe } from './components/sections/AboutMe.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
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
    <LanguageProvider>
      <div className="bg-[#0F172A] min-h-screen text-slate-300 font-sans selection:bg-emerald-500 selection:text-white">
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;