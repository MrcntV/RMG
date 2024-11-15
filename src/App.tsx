import React from "react";

// Importation des fichiers CSS
import "./App.css";

import "../src/styles/Components/Header.css";
import "../src/styles/Components/Footer.css";
import "../src/styles/Components/MenuBurger.css";
import "../src/styles/Components/ScrollToTopButton.css";

import "../src/styles/Pages/Accueil.css";

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
