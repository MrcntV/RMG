// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Race Motors Group - Home",
        description:
          "Discover the arrival of Race Motors Group in Switzerland, a key player in the luxury automotive industry.",
        welcome: "Welcome to Switzerland, Race Motors Group",
        paragraph1:
          "It's official: Race Motors Group, one of the most prestigious brands in the automotive industry, is setting up in Switzerland...",
      },
    },
    fr: {
      translation: {
        title: "Race Motors Group - Accueil",
        description:
          "Découvrez l'arrivée de Race Motors Group en Suisse, un acteur incontournable du secteur automobile de luxe.",
        welcome: "Bienvenue en Suisse, Race Motors Group",
        paragraph1:
          "C'est officiel : Race Motors Group, l'une des marques les plus prestigieuses de l'industrie automobile, s'installe en Suisse...",
      },
    },
    de: {
      translation: {
        title: "Race Motors Group - Startseite",
        description:
          "Entdecken Sie die Ankunft von Race Motors Group in der Schweiz, einem führenden Akteur in der Luxusautomobilbranche.",
        welcome: "Willkommen in der Schweiz, Race Motors Group",
        paragraph1:
          "Es ist offiziell: Race Motors Group, eine der prestigeträchtigsten Marken der Automobilindustrie, lässt sich in der Schweiz nieder...",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
