import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import Sun from "../Sun";
import Moon from "../Moon";
import styles from "./styles.module.css";

const HeaderBar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "";
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerDiv}>
      <header>
        <nav className={styles.headerNav}>
          <div className={styles.leftContent}>
            <img src={logo} alt="Logo de la empresa" className={styles.logo} />
            <ul
              className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
            >
              <li>
                <h5>Inicio</h5>
              </li>
              <li>
                <h5>Misión</h5>
              </li>
              <li>
                <h5>Visión</h5>
              </li>
              <li>
                <h5>Contacto</h5>
              </li>
            </ul>
          </div>
          <div className={styles.rightContent}>
            <button className={styles.toggleThemeBtn} onClick={toggleTheme}>
              {isDarkTheme ? (
                <Moon
                  className={`${styles.toggleThemeMoon} ${styles.pulseMoon}`}
                />
              ) : (
                <Sun
                  className={`${styles.toggleThemeSun} ${styles.pulseSun}`}
                />
              )}
            </button>
            <div
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderBar;
