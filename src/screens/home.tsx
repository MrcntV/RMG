import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.main>
      <Helmet>
        <title>Pulsar Inc. - Accueil</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pulsar Inc. - Accueil" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pulsar Inc. - Accueil" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />

        {/* JSON-LD pour les actualités  à faire*/}
      </Helmet>
    </motion.main>
  );
};

export default Home;
