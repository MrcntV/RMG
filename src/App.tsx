import React from "react";

// Importation des fichiers CSS
import "./App.css";

import "../src/styles/components/Header.css";
import "../src/styles/components/Footer.css";
import "../src/styles/components/MenuBurger.css";
import "../src/styles/components/ScrollToTopButton.css";
import "..src/styles/components/LanguageSelector.css";

import "../src/styles/screens/Accueil.css";

// Importation des composants nécessaires
import Footer from "./components/Footer";
import Headers from "./components/header";
import AnimRoutes from "./AnimRoutes";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <>
      <Headers />
      <AnimRoutes />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
