import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s connect and build something great!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rodinayassine8@gmail.com">rodinayassine8@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/rodina-adel-105125216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/rodina-adel-105125216
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a
            href="https://github.com/RodinaAdelMahmoud"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/RodinaAdelMahmoud
          </a>
        </li>
      </ul>
    </footer>
  );
};
