import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.main>
      <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta
          name="keywords"
          content="Race Motors Group, Suisse, Automobile, Luxe"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <section className="test">
        <h1>{t("welcome")}</h1>
        <p>{t("paragraph1")}</p>
      </section>
    </motion.main>
  );
};

export default Home;
