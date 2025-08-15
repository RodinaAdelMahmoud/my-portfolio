import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.container}>
    <motion.div
  className={styles.content}
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <span className={styles.tagline}>
    💻 Passionate Backend Developer | API Specialist
  </span>
  <h1 className={styles.title}>Hi, I’m Rodina Adel</h1>
  <p className={styles.description}>
    I craft <strong>scalable APIs</strong> and build <strong>interactive UIs </strong> 
    using Node.js & React — turning ideas into reality.
  </p>
  <div className={styles.actions}>
    <motion.a
      href="mailto:rodinayassine8@gmail.com"
      className={styles.contactBtn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      Contact Me
    </motion.a>
    <motion.a
      href="/assets/public/rodina_adel_cv.pdf"  
       target="_blank"
  rel="noopener noreferrer"
      className={styles.cvBtn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      Download CV
    </motion.a>
  </div>
</motion.div>

      <motion.img
        src={getImageUrl("hero/aboutimage.png")}
        alt="Rodina Adel"
        className={styles.heroImg}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
