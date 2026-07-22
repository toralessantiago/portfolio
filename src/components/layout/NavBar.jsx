import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import cvPdf from "../../assets/cv.pdf";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full px-8 md:px-20 py-4 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-tighter">
          Santiago Torales<span className="text-emerald-400">.</span>
        </div>

        {/* Menú de Escritorio */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#hero">Inicio</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#about">Sobre Mí</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#projects">Proyectos</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <div className="hero-btn-wrapper">
                <a href={cvPdf} download="cv.pdf" className="hero-btn-outline">
                  Descargar CV
                </a>
              </div>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-300 hover:text-emerald-400 text-3xl focus:outline-none transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden pt-4 pb-4 border-t border-slate-800 mt-4 transition-all duration-300">
          <ul className="flex flex-col space-y-6 text-center text-base font-medium">
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#hero" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#about" onClick={toggleMenu}>
                Sobre Mí
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#projects" onClick={toggleMenu}>
                Proyectos
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#contact" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
            <li className="pt-2">
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
