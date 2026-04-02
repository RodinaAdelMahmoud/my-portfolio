import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Rodina Adel"
            className={styles.profileImage}
          />
        </div>

        {/* About Text */}
        <div className={styles.textContainer}>
          <p>
            I’m <strong>Rodina Adel</strong>, a Software Developer based in Alexandria, Egypt. 
            I have hands-on experience building scalable backend systems and full-stack applications 
            using <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Express.js</strong>, 
            <strong>React</strong>, and <strong>MongoDB</strong>.
          </p>

          <p>
            I’ve worked at Spiritude LTD and as a freelance developer, delivering real-world solutions 
            including ERP systems, LMS platforms, and custom web applications. I’m passionate about 
            writing clean, maintainable code and designing efficient system architectures.
          </p>

          <ul>
            <li>⚡ Build scalable and secure APIs</li>
            <li>🗄️ Design and optimize databases</li>
            <li>🚀 Develop full-stack web applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};