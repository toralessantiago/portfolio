import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaBootstrap, FaDocker, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiVite, SiRedis } from 'react-icons/si';
import '../../styles/Projects.css';

import apexImg from '../../assets/apex-preview.jpg';
import antisocialApiImg from '../../assets/antisocial-api.jpg';
import antisocialWebImg from '../../assets/antisocial-web.jpg';

export const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: false, amount: 0.3 }}
      className="projects-section"
    >
      <div className="projects-header">
        <h3 className="projects-title">Proyectos Destacados</h3>
        <div className="projects-divider"></div>
      </div>

      <div className="projects-grid">
        
        {/* Proyecto 1: Apex Store */}
        <div className="project-card flex flex-col overflow-hidden group">
          
          <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-slate-800">
            <img 
              src={apexImg}
              alt="Vista previa de Apex Store" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <h4 className="project-tag">E-Commerce Web</h4>
              <h3 className="project-name">Apex Store</h3>
              <p className="project-description">
                SPA desarrollada en React que simula una tienda online de indumentaria. Cuenta con catálogo dinámico, sistema de carrito con persistencia en LocalStorage, filtros cruzados y simulador de checkout.
              </p>
            </div>
            <div className="project-footer mt-4">
              <div className="project-tech-icons">
                <FaReact className="tech-icon" title="React" />
                <SiJavascript className="tech-icon" title="JavaScript" />
                <FaBootstrap className="tech-icon" title="Bootstrap" />
              </div>
              
              <div className="project-links-wrapper">
                <a href="https://toralessantiago.github.io/ecommerce/#/" target="_blank" rel="noopener noreferrer" className="project-link" title="Visitar sitio web">
                  <FaExternalLinkAlt className="text-[1.2rem]" />
                </a>
                <a href="https://github.com/toralessantiago/ecommerce" target="_blank" rel="noopener noreferrer" className="project-link" title="Ver código en GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto 2: Backend Anti-Social */}
        <div className="project-card flex flex-col overflow-hidden group">
          
          {/* BLOQUE DE IMAGEN */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-slate-800">
            <img 
              src={antisocialApiImg}
              alt="Estructura de la API Anti-Social" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <h4 className="project-tag">Backend & API REST</h4>
              <h3 className="project-name">UnaHur Anti-Social (API)</h3>
              <p className="project-description">
                API robusta para red social con arquitectura documental NoSQL. Gestiona usuarios, posteos e imágenes embebidas. Implementa una capa de caché en memoria para optimizar consultas frecuentes.
              </p>
            </div>
            <div className="project-footer mt-4">
              <div className="project-tech-icons">
                <FaNodeJs className="tech-icon" title="Node.js" />
                <SiExpress className="tech-icon" title="Express" />
                <SiMongodb className="tech-icon" title="MongoDB" />
                <SiRedis className="tech-icon" title="Redis" />
                <FaDocker className="tech-icon" title="Docker" />
              </div>
              
              <div className="project-links-wrapper">
                <a href="https://github.com/EP-UnaHur-2026C1/anti-social-documental-tp-persistenciadeestrategia" target="_blank" rel="noopener noreferrer" className="project-link" title="Ver código en GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto 3: Frontend Anti-Social */}
        <div className="project-card flex flex-col overflow-hidden group">
          
          {/* BLOQUE DE IMAGEN */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-slate-800">
            <img 
              src={antisocialWebImg}
              alt="Interfaz Web de Anti-Social" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow justify-between">
            <div>
              <h4 className="project-tag">Aplicación Web Full Stack</h4>
              <h3 className="project-name">UnaHur Anti-Social</h3>
              <p className="project-description">
                Cliente web de la red social integrado con la API REST. Incluye autenticación de usuarios, feed de publicaciones, sistema de comentarios, likes, seguidores, carga de imágenes y un toggle para modo oscuro/claro.
              </p>
            </div>
            <div className="project-footer mt-4">
              <div className="project-tech-icons">
                <FaReact className="tech-icon" title="React" />
                <SiTypescript className="tech-icon" title="TypeScript" />
                <SiVite className="tech-icon" title="Vite" />
                <FaBootstrap className="tech-icon" title="Bootstrap" />
              </div>
              
              <div className="project-links-wrapper">
                <a href="https://antisocial-net-frontend-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link" title="Visitar sitio web">
                  <FaExternalLinkAlt className="text-[1.2rem]" />
                </a>
                <a href="https://github.com/toralessantiago/antisocial-net-frontend.git" target="_blank" rel="noopener noreferrer" className="project-link" title="Ver código en GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};
