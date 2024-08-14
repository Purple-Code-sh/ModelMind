import React from "react";
import "./styles.css";
import moduleStyles from "./footer.module.css"

// Import images
import logoSvg from "../../assets/logo.svg";
import GithubIcon from '../svg/GithubIcon'
import InstagramIcon from '../svg/InstagramIcon'
import LinkedInIcon from '../svg/LinkedInIcon'

const Footer: React.FC = () => {

  const socialLinks2 = [
    { name: "Github", link: "#", icon: <GithubIcon className={`${moduleStyles.iconColor}`}/> },
    { name: "Instagram", link: "#", icon: <InstagramIcon className={`${moduleStyles.iconColor}`}/> },
    { name: "Linkedin", link: "#", icon: <LinkedInIcon className={`${moduleStyles.iconColor}`}/> },
  ]

  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-top">
          <div className="footer-headline">
            <h2>Subscribe to our newsletter</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <div className="footer-subscribe">
            <input type="email" spellCheck={false} placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </section>
        <div className="footer-columns">
          <section className="footer-logo">
            <h2>
              <img src={logoSvg} alt="Maxwell Technologies" />
            </h2>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              {[
                "Support",
                "Sitemap",
                "Newsletter",
                "Help Centre",
                "Investor",
              ].map((item) => (
                <li key={item}>
                  <a href="#" title={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Company</h3>
            <ul>
              {["About Us", "Blog", "Careers", "Press", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" title={item}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>
          <section>
            <h3>Legal</h3>
            <ul>
              {[
                "Terms of Service",
                "Privacy Policy",
                "Cookies",
                "Licenses",
              ].map((item) => (
                <li key={item}>
                  <a href="#" title={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="social-bottom">
          <div className="social-links">
            <ul>
              {socialLinks2.map((item) => (
                <li key={item.name}>
                  <a href={item.link} title={item.name}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <small>
            © Maxwell Technologies, Inc. {new Date().getFullYear()}, All rights
            reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
