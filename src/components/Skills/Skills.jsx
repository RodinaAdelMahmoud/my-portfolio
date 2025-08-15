import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { fadeInLeft, transition } from "../../utils/motionConfig";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <motion.h2
        className={styles.title}
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={transition}
      >
        Skills & Technologies
      </motion.h2>

      <div className={styles.categories}>
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            className={styles.category}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transition, delay: idx * 0.2 }}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <motion.div
              className={styles.skills}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {category.skills.map((skill, id) => (
                <motion.div
                  key={id}
                  className={styles.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: id * 0.1 }}
                >
                  <div className={styles.skillImageContainer}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                    />
                  </div>
                  <p>{skill.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
