import React, { useState, useEffect } from "react";

type Language = "fr" | "en" | "de";

const LanguageSelector: React.FC = () => {
  // Langue par défaut récupérée du localStorage ou "en"
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "en"
  );

  // Fonction pour changer la langue
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // Ici, tu peux ajouter ta logique pour changer la langue (par exemple avec i18n)
  };

  return (
    <div className="language-selector">
      <img
        src="/flags/fr.svg"
        alt="Français"
        className={`flag ${language === "fr" ? "active" : ""}`}
        onClick={() => handleLanguageChange("fr")}
      />
      <img
        src="/flags/en.svg"
        alt="English"
        className={`flag ${language === "en" ? "active" : ""}`}
        onClick={() => handleLanguageChange("en")}
      />
      <img
        src="/flags/de.svg"
        alt="Deutsch"
        className={`flag ${language === "de" ? "active" : ""}`}
        onClick={() => handleLanguageChange("de")}
      />
    </div>
  );
};

export default LanguageSelector;
