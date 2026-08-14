import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import cvPdf from "../../assets/Cv Torales Santiago.pdf";
import cvPdfEN from "../../assets/Cv Torales Santiago 1 EN.pdf";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const currentCv = language === 'es' ? cvPdf : cvPdfEN;

  return (
    <nav className="fixed top-0 w-full px-8 md:px-20 py-4 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-4">
          <span>Santiago Torales<span className="text-emerald-400">.</span></span>
          
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 text-sm font-mono bg-[#1E293B] border border-slate-700 px-4 py-2 rounded-full hover:border-emerald-400/50 transition-colors ml-2"
          >
            <span className={language === 'es' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>ES</span>
            <span className="text-slate-600">|</span>
            <span className={language === 'en' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>EN</span>
          </button>
        </div>

        {/* Menú de Escritorio */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#hero">{t.nav_home}</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#about">{t.nav_about}</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#projects">{t.nav_projects}</a>
          </li>
          <li className="hover:text-emerald-400 cursor-pointer transition-colors">
            <a href="#contact">{t.nav_contact}</a>
          </li>
          <li>
            <a 
              href={currentCv} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400 hover:text-[#0F172A] transition-all duration-300 font-semibold"
            >
              {t.nav_cv}
            </a>
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
          <ul className="flex flex-col space-y-6 text-left pl-4 text-base font-medium">
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#hero" onClick={toggleMenu} className="block w-full">{t.nav_home}</a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#about" onClick={toggleMenu} className="block w-full">{t.nav_about}</a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#projects" onClick={toggleMenu} className="block w-full">{t.nav_projects}</a>
            </li>
            <li className="hover:text-emerald-400 transition-colors">
              <a href="#contact" onClick={toggleMenu} className="block w-full">{t.nav_contact}</a>
            </li>
            <li className="pt-2 pr-4">
              <a 
                href={currentCv} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400 hover:text-[#0F172A] transition-all duration-300"
                onClick={toggleMenu}
              >
                {t.nav_cv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};