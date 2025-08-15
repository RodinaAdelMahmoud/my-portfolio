import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, linkLabel = "View Docs", type },
}) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Screenshot of ${title}`}
          className={styles.image}
        />
        {type === "company" && (
          <span className={styles.badge}>Private Project</span>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Skills */}
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        {/* Link */}
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
};
