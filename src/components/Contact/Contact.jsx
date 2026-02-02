import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:ysudhachandrika@gmail.com">Email me</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sudhayadlapalli" target="_blank">Connect with me on LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={"/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/SudhaChandrikaY" target="_blank">My GitHub </a>
        </li>
      </ul>
    </footer>
  );
};
