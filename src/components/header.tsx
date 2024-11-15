import React from "react";
import MenuBurger from "./MenuBurger";
import LanguageSelector from "./language";

const Headers: React.FC = () => {
  return (
    <header id="Header">
      <div className="containerBurger">
        <MenuBurger />
      </div>
      <div className="containerlogo">
        <a className="" href="/">
          <img src="/images/logo/logo.png" alt="logo race motors group" />
        </a>
      </div>
      <div className="containerLanguage">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Headers;
