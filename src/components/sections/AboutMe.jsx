import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaMicrochip } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import '../../styles/AboutMe.css';

export const AboutMe = () => {
  const softSkills = [
    "Resolución de problemas",
    "Autodidacta",
    "Pensamiento creativo",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Adaptabilidad",
    "Gestión del tiempo"
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
        
        {/* Tu historia y Soft Skills */}
        <div className="about-text-wrapper">
          <div className="about-paragraphs">
            <p>
              Soy estudiante de la Tecnicatura en Programación en la UNAHUR. Mi formación técnica en hardware me dio una capacidad analítica sólida, permitiéndome entender la tecnología de punta a punta para escribir código más eficiente.
            </p>
            <p>
              Fuera de la programación, soy guitarrista desde chico y un melómano constante. Disfrutar del arte y la música me ayuda a mantener la creatividad activa para pensar soluciones lógicas.
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
        </div> {/* <--- ¡ESTE ES EL DIV QUE FALTABA CERRAR! */}
        
        {/* Hard Skills */}
        <div>
          <h4 className="skills-title">Hard Skills & Tecnologías</h4>
          <div className="hard-skills-grid">
            
            <div className="hard-skill-card">
              <SiJavascript className="text-3xl text-[#F7DF1E]" />
              <span className="hard-skill-label">JavaScript</span>
            </div>
            <div className="hard-skill-card">
              <FaReact className="text-3xl text-[#61DAFB]" />
              <span className="hard-skill-label">React</span>
            </div>
            <div className="hard-skill-card">
              <FaNodeJs className="text-3xl text-[#339933]" />
              <span className="hard-skill-label">Node.js</span>
            </div>
            <div className="hard-skill-card">
              <SiExpress className="text-3xl text-white" />
              <span className="hard-skill-label">Express</span>
            </div>
            <div className="hard-skill-card">
              <FaJava className="text-3xl text-[#007396]" />
              <span className="hard-skill-label">Java</span>
            </div>
            <div className="hard-skill-card">
              <FaPython className="text-3xl text-[#3776AB]" />
              <span className="hard-skill-label">Python</span>
            </div>
            <div className="hard-skill-card">
              <SiMysql className="text-3xl text-[#4479A1]" />
              <span className="hard-skill-label">MySQL</span>
            </div>
            <div className="hard-skill-card">
              <SiMongodb className="text-3xl text-[#47A248]" />
              <span className="hard-skill-label">MongoDB</span>
            </div>
            <div className="hard-skill-card">
              <FaGitAlt className="text-3xl text-[#F05032]" />
              <span className="hard-skill-label">Git</span>
            </div>
            <div className="hard-skill-card">
              <FaMicrochip className="text-3xl text-emerald-400" />
              <span className="hard-skill-label">Reparación de PC</span>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};