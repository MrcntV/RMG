import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  // Obtenir la date actuelle
  const currentDate = new Date();
  // Options pour le format du mois
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
    day: "numeric",
  };
  // Formater la date
  const formattedDate = currentDate.toLocaleDateString("fr-FR", options);

  return (
    <footer>
      <div className="VSlide4-menu-info">
        <div>
          <p>{formattedDate}</p>
        </div>
        <a
          href="mailto:contact@pulsar-inc.fr"
          style={{ display: "inline-block" }}
          aria-label="Envoyer un email à Pulsar Inc."
        >
          <p>contact@rmg.fr</p>
        </a>

        <div className="VSlide4-menu-social-list">
          <a
            href="https://www.instagram.com/pulsar_inc/"
            target="_blank"
            aria-label="Visiter le compte Instagram de Pulsar Inc."
            style={{ display: "inline-block" }}
          >
            <FaInstagram style={{ height: "16px", width: "16px" }} />
          </a>
        </div>
        <p>
          <NavLink to="/cgv" style={{ padding: "2px" }}>
            MENTIONS LEGALES |
          </NavLink>

          <NavLink to="/cgv" style={{ padding: "2px" }}>
            {" "}
            POLITIQUE DE CONFIDENTIALITE
          </NavLink>
        </p>
      </div>
      <div className="VSlide4-menu-info">
        <p>
          © Race Motors Group {currentDate.getFullYear()} | Tous droits réservés
          |
        </p>
        <p>SITE BY V.MARCONNET</p>
      </div>
    </footer>
  );
};

export default Footer;
