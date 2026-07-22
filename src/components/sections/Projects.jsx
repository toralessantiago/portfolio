import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaBootstrap, FaDocker, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiVite, SiRedis } from 'react-icons/si';
import '../../styles/Projects.css';

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
        <div className="project-card">
          <div>
            <h4 className="project-tag">E-Commerce Web</h4>
            <h3 className="project-name">Apex Store</h3>
            <p className="project-description">
              SPA desarrollada en React que simula una tienda online de indumentaria. Cuenta con catálogo dinámico, sistema de carrito con persistencia en LocalStorage, filtros cruzados y simulador de checkout.
            </p>
          </div>
          <div className="project-footer">
            <div className="project-tech-icons">
              <FaReact className="tech-icon" title="React" />
              <SiJavascript className="tech-icon" title="JavaScript" />
              <FaBootstrap className="tech-icon" title="Bootstrap" />
            </div>
            
            <div className="project-links-wrapper">
              {/* LINK WEB REAL */}
              <a href="https://toralessantiago.github.io/ecommerce/#/" target="_blank" rel="noopener noreferrer" className="project-link" title="Visitar sitio web">
                <FaExternalLinkAlt className="text-[1.2rem]" />
              </a>
              {/* LINK GITHUB REAL */}
              <a href="https://github.com/toralessantiago/ecommerce" target="_blank" rel="noopener noreferrer" className="project-link" title="Ver código en GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 2: Backend Anti-Social (Solo GitHub) */}
        <div className="project-card">
          <div>
            <h4 className="project-tag">Backend & API REST</h4>
            <h3 className="project-name">UnaHur Anti-Social (API)</h3>
            <p className="project-description">
              API robusta para red social con arquitectura documental NoSQL. Gestiona usuarios, posteos e imágenes embebidas. Implementa una capa de caché en memoria para optimizar consultas frecuentes.
            </p>
          </div>
          <div className="project-footer">
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

        {/* Proyecto 3: Frontend Anti-Social */}
        <div className="project-card">
          <div>
            <h4 className="project-tag">Frontend SPA</h4>
            <h3 className="project-name">UnaHur Anti-Social (Web)</h3>
            <p className="project-description">
              Cliente web de la red social integrado con la API REST. Incluye autenticación de usuarios, feed de publicaciones, sistema de comentarios, carga de imágenes y un toggle para modo oscuro/claro.
            </p>
          </div>
          <div className="project-footer">
            <div className="project-tech-icons">
              <FaReact className="tech-icon" title="React" />
              <SiTypescript className="tech-icon" title="TypeScript" />
              <SiVite className="tech-icon" title="Vite" />
              <FaBootstrap className="tech-icon" title="Bootstrap" />
            </div>
            
            <div className="project-links-wrapper">
              <a href="https://toralessantiago.github.io/antisocialnet-frontend/#/" target="_blank" rel="noopener noreferrer" className="project-link" title="Visitar sitio web">
                <FaExternalLinkAlt className="text-[1.2rem]" />
              </a>
              <a href="https://github.com/toralessantiago/antisocial-net-frontend.git" target="_blank" rel="noopener noreferrer" className="project-link" title="Ver código en GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};