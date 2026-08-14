import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext"; 
import "../../styles/Contact.css";

export const Contact = () => {
  const { t } = useLanguage();

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
        <h2 className="contact-title">{t.contact_title}</h2>
        <p className="contact-subtitle">
          {t.contact_subtitle}
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
          <span className="contact-text">{t.contact_gmail}</span>
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
          <span className="contact-text">{t.contact_linkedin}</span>
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
          <span className="contact-text">{t.contact_whatsapp}</span>
        </a>
      </div>
    </motion.section>
  );
};