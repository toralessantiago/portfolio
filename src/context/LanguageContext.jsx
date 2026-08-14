/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    // NavBar
    nav_home: "Inicio", nav_about: "Sobre Mí", nav_projects: "Proyectos", nav_contact: "Contacto", nav_cv: "Ver CV",
    // Hero
    hero_greeting: "¡Hola! Mi nombre es", hero_sub: "Web Developer Jr.",
    hero_desc1: "Apasionado por construir aplicaciones web completas, desde el diseño de bases de datos y arquitecturas backend escalables hasta interfaces de usuario intuitivas y atractivas.",
    hero_desc2: "Actualmente cursando la Tecnicatura en Programación en la UNAHUR, con fuerte enfoque en resolución de problemas, código limpio y buenas prácticas. Combino mis conocimientos de desarrollo con sólidos fundamentos en hardware, lo que me permite entender y optimizar el sistema en su totalidad.",
    hero_btn_projects: "Ver mis proyectos", hero_btn_cv: "Ver CV",
    // About
    about_title: "Sobre Mí", 
    about_p1: "Soy estudiante de la Tecnicatura en Programación en la UNAHUR. Gracias a mi formación en hardware, entiendo la tecnología de manera integral, lo que me ayuda a desarrollar soluciones más eficientes y bien pensadas.", 
    about_p2: "Fuera de la programación, soy guitarrista desde chico y un melómano constante. Disfrutar del arte y la música me ayuda a mantener la creatividad activa para pensar soluciones lógicas.", 
    about_soft_title: "Soft Skills", about_hard_title: "Hard Skills & Tecnologías",
    about_soft_1: "Resolución de problemas", about_soft_2: "Autodidacta", about_soft_3: "Pensamiento creativo", about_soft_4: "Trabajo en equipo", about_soft_5: "Comunicación efectiva", about_soft_6: "Adaptabilidad", about_soft_7: "Gestión del tiempo",
    about_repair: "Reparación de PC", about_cert: "Ver certificado",
    // Projects
    projects_title: "Proyectos Destacados",
    proj1_tag: "E-Commerce Web", proj1_desc: "SPA desarrollada en React que simula una tienda online de indumentaria. Cuenta con catálogo dinámico, sistema de carrito con persistencia en LocalStorage, filtros cruzados y simulador de checkout.",
    proj2_tag: "Backend & API REST", proj2_desc: "API robusta para red social con arquitectura documental NoSQL. Gestiona usuarios, posteos e imágenes embebidas. Implementa una capa de caché en memoria para optimizar consultas frecuentes.",
    proj3_tag: "Aplicación Web Full Stack", proj3_desc: "Cliente web de la red social integrado con la API REST. Incluye autenticación de usuarios, feed de publicaciones, sistema de comentarios, likes, seguidores, carga de imágenes y un toggle para modo oscuro/claro.",
    // Contact
    contact_title: "Ponte en contacto", contact_subtitle: "Estoy abierto a nuevas oportunidades. Si tenés un proyecto de desarrollo o una consulta, no dudes en escribirme!",
    contact_gmail: "Gmail", contact_linkedin: "LinkedIn", contact_whatsapp: "WhatsApp",
    // Footer
    footer_text: "Desarrollado por Santiago Torales"
  },
  en: {
    // NavBar
    nav_home: "Home", nav_about: "About Me", nav_projects: "Projects", nav_contact: "Contact", nav_cv: "View CV",
    // Hero
    hero_greeting: "Hello! My name is", hero_sub: "Jr. Web Developer",
    hero_desc1: "Passionate about building complete web applications, from database design and scalable backend architectures to intuitive and attractive user interfaces.",
    hero_desc2: "Currently studying an Associate Degree in Programming at UNAHUR, with a strong focus on problem-solving, clean code, and good practices. I combine my development knowledge with solid hardware fundamentals, allowing me to understand and optimize the system as a whole.",
    hero_btn_projects: "View my projects", hero_btn_cv: "View CV",
    // About
    about_title: "About Me", 
    about_p1: "I am a Programming student at UNAHUR. Thanks to my hardware background, I understand technology comprehensively, which helps me develop more efficient and well-thought-out solutions.", 
    about_p2: "Outside of programming, I've been a guitarist since childhood and a constant music lover. Enjoying art and music helps keep my creativity active to think of logical solutions.", 
    about_soft_title: "Soft Skills", about_hard_title: "Hard Skills & Technologies",
    about_soft_1: "Problem Solving", about_soft_2: "Self-taught", about_soft_3: "Creative Thinking", about_soft_4: "Teamwork", about_soft_5: "Effective Communication", about_soft_6: "Adaptability", about_soft_7: "Time Management",
    about_repair: "PC Repair", about_cert: "View certificate",
    // Projects
    projects_title: "Featured Projects",
    proj1_tag: "Web E-Commerce", proj1_desc: "React SPA simulating an online clothing store. Features a dynamic catalog, shopping cart with LocalStorage persistence, cross-filtering, and checkout simulator.",
    proj2_tag: "Backend & REST API", proj2_desc: "Robust API for a social network with NoSQL document architecture. Manages users, posts, and embedded images. Implements an in-memory caching layer to optimize frequent queries.",
    proj3_tag: "Full Stack Web App", proj3_desc: "Web client for the social network integrated with the REST API. Includes user authentication, post feed, commenting system, likes, followers, image uploading, and a dark/light mode toggle.",
    // Contact
    contact_title: "Get in touch", contact_subtitle: "I am open to new opportunities. If you have a development project or a question, don't hesitate to write to me!",
    contact_gmail: "Gmail", contact_linkedin: "LinkedIn", contact_whatsapp: "WhatsApp",
    // Footer
    footer_text: "Developed by Santiago Torales"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Idioma por defecto

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);