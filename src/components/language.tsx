import React, { useState } from "react";

type Language = "fr" | "en" | "de";

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en"); // Langue par défaut : anglais

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value as Language);
    // Optionnel : Ajouter une logique pour sauvegarder la langue (ex : dans localStorage ou un contexte)
  };

  return (
    <div>
      <label htmlFor="language-select">Choisissez votre langue : </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
        <option value="de">Allemand</option>
      </select>

      <p>
        Langue sélectionnée :{" "}
        {language === "fr"
          ? "Français"
          : language === "en"
          ? "Anglais"
          : "Allemand"}
      </p>
    </div>
  );
};

export default LanguageSelector;
