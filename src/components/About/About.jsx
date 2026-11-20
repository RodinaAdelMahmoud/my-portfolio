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
            I’m <strong>Rodina Adel</strong>, a Backend Software Engineer based in Alexandria, Egypt,
            with ~2 years of experience building production services using <strong>NestJS</strong>,{" "}
            <strong>Node.js</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong>,{" "}
            <strong>Firebase</strong>, and <strong>Google Cloud</strong>.
          </p>

          <p>
            At <strong>AlphaWave Software</strong> I own the B2B backend of the Inqlha logistics
            platform, make production release decisions, and build services like an event-driven
            email microservice and unified app analytics. Before that I built ERP and LMS systems
            at Spiritude LTD and delivered freelance web projects. I care about clean,
            maintainable code and well-designed systems.
          </p>

          <ul>
            <li>⚡ Build scalable and secure APIs</li>
            <li>🗄️ Design and optimize databases</li>
            <li>☁️ Ship event-driven services on Google Cloud</li>
          </ul>
        </div>
      </div>
    </section>
  );
};