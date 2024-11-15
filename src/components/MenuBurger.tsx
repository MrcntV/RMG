import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { motion, useAnimate, stagger } from "framer-motion";

const MenuBurger: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const [scope, animate] = useAnimate();

  const handleShowLinks = () => setShowLinks((prev) => !prev);
  const closeMenu = () => setShowLinks(false);

  // Animation d'ouverture de droite à gauche
  useEffect(() => {
    const menuAnimations = showLinks
      ? [
          [
            ".navbar_links",
            { x: 0, visibility: "visible" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".navbar_item",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".navbar_item",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [
            ".navbar_links",
            { x: "100%", visibility: "hidden" },
            { at: "-0.1" },
          ],
        ];

    animate(menuAnimations as any);
  }, [showLinks, animate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace" || e.key === "Delete") {
        closeMenu();
      }
      if (
        showLinks &&
        (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown")
      ) {
        e.preventDefault();
      }
    };

    if (showLinks) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      menuRef.current?.querySelector("a")?.focus();
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showLinks]);

  const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Nos véhicules", path: "/NosVehicules" },
    { label: "Contact", path: "/Contact" },
  ];

  return (
    <nav
      className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
      ref={scope}
    >
      <motion.ul ref={menuRef} className="navbar_links">
        <div className="navbar_links_left">
          {menuItems.map((item, index) => (
            <motion.li className="navbar_item" key={index}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span>{`0${index + 1}`}</span> {item.label}
              </NavLink>
            </motion.li>
          ))}
        </div>

        <div className="navbar_links_right">
          <motion.div className="navbar_links_right_left">
            <p>
              © Race Motors Group. {new Date().getFullYear()} | SITE BY
              V.MARCONNET
            </p>
          </motion.div>

          <motion.div className="navbar_links_right_mid">
            <div className="Menu-social-list">
              <a
                href="https://www.instagram.com/pulsar_inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter le compte Instagram de Pulsar Inc."
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div className="navbar_links_right_right">
            <input
              className="dark_mode_input"
              type="checkbox"
              id="darkmode-toggle"
              onChange={(e) =>
                document.body.setAttribute(
                  "data-theme",
                  e.target.checked ? "light" : "dark"
                )
              }
            />
            <motion.div className="navbar_links_right-lien">
              <NavLink to="/cgv" onClick={closeMenu}>
                MENTIONS LEGALES |
              </NavLink>
              <NavLink to="/cgv" onClick={closeMenu}>
                POLITIQUE DE CONFIDENTIALITE
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.ul>

      <button
        className="navbar_burger"
        aria-label="Ouvrir le menu de navigation"
        onClick={handleShowLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default MenuBurger;
