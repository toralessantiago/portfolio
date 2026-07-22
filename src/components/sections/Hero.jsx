import { motion } from 'framer-motion';
import '../../styles/Hero.css';

export const Hero = () => {
  return (
    <motion.section 
      id="hero" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: false, amount: 0.3 }} 
      className="hero-section"
    >
      <div className="hero-text-container">
        <p className="hero-greeting">¡Hola! Mi nombre es</p>
        
        <h1 className="hero-title-main">
          Santiago Torales.
        </h1>
        <h2 className="hero-title-sub">
          Full Stack Developer.
        </h2>
        
        <p className="hero-description">
          Soy estudiante de la Tecnicatura en Programación en la UNAHUR y desarrollador de software. Me apasiona resolver problemas complejos con creatividad, abarcando desde el diseño de bases de datos y la lógica en el backend, hasta la construcción de interfaces modernas en el frontend. Como valor agregado, cuento con conocimientos técnicos en armado y reparación de hardware, lo que me otorga una comprensión integral de la tecnología, desde los componentes físicos hasta el código.
        </p>
        
        <div className="hero-btn-wrapper">
          <a href="#projects" className="hero-btn">
            Ver mis proyectos
          </a>
        </div>
      </div>
      
      <div className="hero-image-container">
        <div className="hero-image-glow"></div>
        <div className="hero-image-wrapper">
          <span className="hero-image-placeholder">[Tu Foto Aquí]</span>
        </div>
      </div>
    </motion.section>
  );
};