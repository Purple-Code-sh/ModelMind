// Import images
import logoSvg from "../../assets/logo.svg";
import GithubIcon from '../svg/GithubIcon'
import InstagramIcon from '../svg/InstagramIcon'
import LinkedInIcon from '../svg/LinkedInIcon'
import TwitterIcon from '../svg/TwitterIcon'
import YouTubeIcon from '../svg/YouTubeIcon'

import styles from "./styles.module.css"

const Footer: React.FC = () => {

  const socialLinks2 = [
    { name: "Github", link: "#", icon: <GithubIcon className={`${styles.social_link_icon}`}/> },
    { name: "Instagram", link: "#", icon: <InstagramIcon className={`${styles.social_link_icon}`}/> },
    { name: "Linkedin", link: "#", icon: <LinkedInIcon className={`${styles.social_link_icon}`}/> },
    { name: "Twitter", link: "#", icon: <TwitterIcon className={`${styles.social_link_icon}`}/> },
    { name: "Youtube", link: "#", icon: <YouTubeIcon className={`${styles.social_link_icon}`}/> },
  ]
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <section className={styles.footer_top}>
          <div className={styles.footer_headline}>
            <h2>Subscribe to our newsletter</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <div className={styles.footer_subscribe}>
            <input type="email" spellCheck={false} placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </section>
        <div className={styles.footer_columns}>
          <section className={styles.footer_logo}>
            <h2>
              <img src={logoSvg} alt="ModelMind Technologies" />
            </h2>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              {[
                "Support",
                "Sitemap",
                "Newsletter",
                "Help Center",
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
        <div className={styles.social_bottom}>
          <div className={styles.social_links}>
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
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_wrapper}>
          <small>
            © ModelMind {new Date().getFullYear()}, All rights
            reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
