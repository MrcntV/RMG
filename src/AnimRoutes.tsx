import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// PAGES
import Home from "./screens/home";

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
