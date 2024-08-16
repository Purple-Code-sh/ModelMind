import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Sun from "../svg/Sun";
import Moon from "../svg/Moon";
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
                <Link to="/">
                  <h5>Inicio</h5>
                </Link>
              </li>
              <li>
                <Link to="/mission">
                  <h5>Misión</h5>
                </Link>
              </li>
              <li>
                <Link to="/vision">
                  <h5>Visión</h5>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <h5>Contacto</h5>
                </Link>
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