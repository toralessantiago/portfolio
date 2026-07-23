import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../../styles/Contact.css";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="contact-section"
    >
      <div className="contact-header">
        <h2 className="contact-title">Ponte en contacto</h2>
        <p className="contact-subtitle">
          ## Ponte en contacto Estoy abierto a nuevas oportunidades. Si tenés un
          proyecto de desarrollo, una consulta técnica o simplemente querés
          charlar, no dudes en escribirme. ¡Te responderé pronto!
        </p>
      </div>

      <div className="contact-links-centered">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=toralessantiago885@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card group"
        >
          <div className="contact-icon-wrapper">
            <FaEnvelope className="text-xl sm:text-4xl" />
          </div>
          <span className="contact-text">Gmail</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/santiagotorales/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card group"
        >
          <div className="contact-icon-wrapper">
            <FaLinkedin className="text-xl sm:text-4xl" />
          </div>
          <span className="contact-text">LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5491138962221"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card group"
        >
          <div className="contact-icon-wrapper">
            <FaWhatsapp className="text-xl sm:text-4xl" />
          </div>
          <span className="contact-text">WhatsApp</span>
        </a>
      </div>
    </motion.section>
  );
};
