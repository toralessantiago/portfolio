import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import cvPdf from "../../assets/Cv Torales Santiago.pdf";

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
          {/* Botón Ver CV - Modificado para abrir en nueva pestaña */}
          <li>
            <a 
              href={cvPdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400 hover:text-[#0F172A] transition-all duration-300 font-semibold"
            >
              Ver CV
            </a>
          </li>
        </ul>

        {/* Botón Hamburguesa */}
        <button
          className="md:hidden text-slate-300 hover:text-emerald-400 text-3xl focus:outline-none transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-4 border-t border-slate-800 mt-4 transition-all duration-300">
          <ul className="flex flex-col space-y-6 text-left pl-4 text-base font-medium">
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#hero" onClick={toggleMenu} className="block w-full">
                Inicio
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#about" onClick={toggleMenu} className="block w-full">
                Sobre Mí
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#projects" onClick={toggleMenu} className="block w-full">
                Proyectos
              </a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#contact" onClick={toggleMenu} className="block w-full">
                Contacto
              </a>
            </li>
            <li className="pt-2 pr-4">
              <a 
                href={cvPdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400 hover:text-[#0F172A] transition-all duration-300"
                onClick={toggleMenu}
              >
                Ver CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};