import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import "../../styles/AboutMe.css";

// Importación correcta de tu PDF
import certificadoPdf from "../../assets/certificado-reparacion.pdf";

export const AboutMe = () => {
  const softSkills = [
    "Resolución de problemas",
    "Autodidacta",
    "Pensamiento creativo",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Adaptabilidad",
    "Gestión del tiempo",
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="about-section"
    >
      <div className="about-header">
        <h3 className="about-title">Sobre Mí</h3>
        <div className="about-divider"></div>
      </div>

      <div className="about-content-grid">
        <div className="about-text-wrapper">
          <div className="about-paragraphs">
            <p>
              Soy estudiante de la Tecnicatura en Programación en la
              UNAHUR. Gracias a mi formación en hardware, entiendo la tecnología
              de manera integral, lo que me ayuda a desarrollar soluciones más
              eficientes y bien pensadas.
            </p>
            <p>
              Fuera de la programación, soy guitarrista desde chico y un
              melómano constante. Disfrutar del arte y la música me ayuda a
              mantener la creatividad activa para pensar soluciones lógicas.
            </p>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="skills-title">Soft Skills</h4>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <span key={index} className="soft-skill-square">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hard Skills */}
        <div>
          <h4 className="skills-title">Hard Skills & Tecnologías</h4>
          <div className="hard-skills-grid">
            {/* Frontend */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <SiJavascript className="text-3xl text-[#F7DF1E] mb-2" title="" />
              <span className="hard-skill-label">JavaScript</span>
            </div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <SiTypescript className="text-3xl text-[#3178C6] mb-2" title="" />
              <span className="hard-skill-label">TypeScript</span>
            </div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaReact className="text-3xl text-[#61DAFB] mb-2" title="" />
              <span className="hard-skill-label">React</span>
            </div>

            {/* Backend Web */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaNodeJs className="text-3xl text-[#339933] mb-2" title="" />
              <span className="hard-skill-label">Node.js</span>
            </div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <SiExpress className="text-3xl text-white mb-2" title="" />
              <span className="hard-skill-label">Express</span>
            </div>

            {/* Backend Orientado a Objetos */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaJava className="text-3xl text-[#007396] mb-2" title="" />
              <span className="hard-skill-label">Java</span>
            </div>

            {/* Bases de Datos */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <SiMysql className="text-3xl text-[#4479A1] mb-2" title="" />
              <span className="hard-skill-label">MySQL</span>
            </div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <SiMongodb className="text-3xl text-[#47A248] mb-2" title="" />
              <span className="hard-skill-label">MongoDB</span>
            </div>

            {/* Herramientas */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaGitAlt className="text-3xl text-[#F05032] mb-2" title="" />
              <span className="hard-skill-label">Git</span>
            </div>

            {/* Hardware y Soporte */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaMicrochip
                className="text-3xl text-emerald-400 mb-2"
                title=""
              />
              <span className="hard-skill-label">Reparación de PC</span>
              <a
                href={certificadoPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors absolute bottom-2 underline"
              >
                Ver certificado
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
