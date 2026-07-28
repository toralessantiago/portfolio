import { motion } from "framer-motion";
import "../../styles/Hero.css";

import fotoPerfil from "../../assets/imagen.jpeg";
import cvPdf from "../../assets/Cv Torales Santiago.pdf";

export const Hero = () => {
  const descriptionParagraphs = [
    "Desarrollador Full Stack apasionado por construir aplicaciones web completas, desde el diseño de bases de datos y arquitecturas backend escalables hasta interfaces de usuario intuitivas y atractivas.",
    "Actualmente cursando la Tecnicatura en Programación en la UNAHUR, con fuerte enfoque en resolución de problemas, código limpio y buenas prácticas. Combino mis conocimientos de desarrollo con sólidos fundamentos en hardware, lo que me permite entender y optimizar el sistema en su totalidad.",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, 
        delayChildren: 0.3,   
      },
    },
  };

  const wordVariants = {
    hidden: {
      backgroundColor: "rgba(52, 211, 153, 0)",
      color: "inherit",
    },
    visible: {
      backgroundColor: [
        "rgba(52, 211, 153, 0)",
        "rgba(52, 211, 153, 0.4)",
        "rgba(52, 211, 153, 0)",
      ],
      color: ["inherit", "#ffffff", "inherit"],
      transition: {
        duration: 0.5,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="hero-section"
    >
      <div className="hero-text-container">
        <p className="hero-greeting">¡Hola! Mi nombre es</p>

        <h1 className="hero-title-main">Santiago Torales.</h1>
        <h2 className="hero-title-sub">Full Stack Developer.</h2>

        <motion.div
          className="hero-description flex flex-col gap-4 text-slate-300 max-w-2xl"
          variants={paragraphVariants}
        >
          {descriptionParagraphs.map((paragraph, pIndex) => (
            <p key={pIndex} style={{ lineHeight: "1.8" }}>
              {paragraph.split(" ").map((word, wIndex) => (
                <span key={`${pIndex}-${wIndex}`}>
                  <motion.span
                    variants={wordVariants}
                    className="inline-block px-1 py-[2px] rounded-md"
                  >
                    {word}
                  </motion.span>{" "}
                </span>
              ))}
            </p>
          ))}
        </motion.div>

        <div className="hero-btn-wrapper pt-4">
          <a href="#projects" className="hero-btn">
            Ver mis proyectos
          </a>
          <a 
            href={cvPdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn-outline"
          >
            Ver CV
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-glow"></div>
        <div className="hero-image-wrapper">
          <img
            src={fotoPerfil}
            alt="Santiago Torales"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </motion.section>
  );
};