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
          <div className="">
            <div className="LogoHeader">
              <h1>RMG</h1>
              <p>race motors group</p>
              <p>geneva </p>
            </div>
          </div>
        </a>
      </div>
      <div className="containerLanguage">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Headers;
