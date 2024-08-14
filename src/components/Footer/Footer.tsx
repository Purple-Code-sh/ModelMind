import React from "react";
import "./styles.css";

// Import images
import logoSvg from "../../assets/logo.svg";
import instagramSvg from "../../assets/instagram.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import twitterSvg from "../../assets/twitter.svg";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", icon: instagramSvg },
    { name: "Linkedin", icon: linkedinSvg },
    { name: "Twitter", icon: twitterSvg },
  ];

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
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href="#" title={item.name}>
                    <img src={item.icon} alt={item.name} />
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
