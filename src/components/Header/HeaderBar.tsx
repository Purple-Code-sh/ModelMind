import React, { useState, useEffect } from "react";

import logo from "@/assets/logo.svg";
import Sun from "../Sun";
import Moon from "../Moon";
import styles from "./styles.module.css";

const HeaderBar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "";
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={styles.headerDiv}>
      <header>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <img
                src={logo}
                alt="Logo de la empresa"
                className={styles.logo}
              />
            </li>
            <li>
              <h5>Inicio</h5>
            </li>
            <li>
              <h5>Acerca de</h5>
            </li>
            <li>
              {isDarkTheme === true && (
                <button className={styles.toggleThemeBtn} onClick={toggleTheme}>
                  <Moon
                    className={`${styles.toggleThemeMoon} ${styles.pulse}`}
                  />
                </button>
              )}
              {isDarkTheme === false && (
                <button className={styles.toggleThemeBtn} onClick={toggleTheme}>
                  <Sun className={styles.toggleThemeSun} />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderBar;
