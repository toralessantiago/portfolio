import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaMicrochip } from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiJavascript, SiTypescript } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext"; // <-- Importar
import "../../styles/AboutMe.css";
import certificadoPdf from "../../assets/certificado-reparacion.pdf";

export const AboutMe = () => {
  const { t } = useLanguage();

  const softSkills = [
    t.about_soft_1, t.about_soft_2, t.about_soft_3, t.about_soft_4, 
    t.about_soft_5, t.about_soft_6, t.about_soft_7
  ];

  return (
    <motion.section id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }} className="about-section">
      <div className="about-header">
        <h3 className="about-title">{t.about_title}</h3>
        <div className="about-divider"></div>
      </div>

      <div className="about-content-grid">
        <div className="about-text-wrapper">
          <div className="about-paragraphs">
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>
          </div>

          <div>
            <h4 className="skills-title">{t.about_soft_title}</h4>
            <div className="soft-skills-container">
              {softSkills.map((skill, index) => (
                <span key={index} className="soft-skill-square">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="skills-title">{t.about_hard_title}</h4>
          <div className="hard-skills-grid">
            {/* Frontend */}
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><SiJavascript className="text-3xl text-[#F7DF1E] mb-2" /><span className="hard-skill-label">JavaScript</span></div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><SiTypescript className="text-3xl text-[#3178C6] mb-2" /><span className="hard-skill-label">TypeScript</span></div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><FaReact className="text-3xl text-[#61DAFB] mb-2" /><span className="hard-skill-label">React</span></div>

            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><FaNodeJs className="text-3xl text-[#339933] mb-2" /><span className="hard-skill-label">Node.js</span></div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><SiExpress className="text-3xl text-white mb-2" /><span className="hard-skill-label">Express</span></div>

            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><FaJava className="text-3xl text-[#007396] mb-2" /><span className="hard-skill-label">Java</span></div>

            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><SiMysql className="text-3xl text-[#4479A1] mb-2" /><span className="hard-skill-label">MySQL</span></div>
            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><SiMongodb className="text-3xl text-[#47A248] mb-2" /><span className="hard-skill-label">MongoDB</span></div>

            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative"><FaGitAlt className="text-3xl text-[#F05032] mb-2" /><span className="hard-skill-label">Git</span></div>

            <div className="hard-skill-card flex flex-col items-center justify-center min-h-[120px] relative">
              <FaMicrochip className="text-3xl text-emerald-400 mb-2" />
              <span className="hard-skill-label text-center">{t.about_repair}</span>
              <a href={certificadoPdf} target="_blank" rel="noopener noreferrer" className="text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors absolute bottom-2 underline">
                {t.about_cert}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};