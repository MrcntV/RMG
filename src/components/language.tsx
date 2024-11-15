import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="language-selector">
      <img
        src="/images/flags/fr.png"
        alt="Français"
        className="flag"
        onClick={() => changeLanguage("fr")}
      />
      <img
        src="/images/flags/en.png"
        alt="English"
        className="flag"
        onClick={() => changeLanguage("en")}
      />
      <img
        src="/images/flags/de.png"
        alt="Deutsch"
        className="flag"
        onClick={() => changeLanguage("de")}
      />
    </div>
  );
};

export default LanguageSelector;
