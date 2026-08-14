import { useLanguage } from "../../context/LanguageContext"; 

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="text-center py-6 text-slate-500 text-sm font-mono border-t border-slate-800">
      <p>{t.footer_text}</p>
    </footer>
  );
};