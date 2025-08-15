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
  I’m <strong>Rodina Adel</strong>, a Backend Developer from Alexandria, Egypt. With 1 year of experience at Spiritude LTD, I specialize in <strong>Node.js</strong>, <strong>Express</strong>, <strong>NestJS</strong>, and <strong>MongoDB</strong>. I hold a Bachelor’s degree in <strong>Computers and Information Technology</strong> from the Egyptian E-Learning University (Graduated 2024).
</p>

<ul>
  <li>⚡ Build scalable, secure APIs</li>
  <li>🗄️ Optimize database performance</li>
  <li>🚀 Deliver clean, maintainable code</li>
</ul>

        </div>
      </div>
    </section>
  );
};
