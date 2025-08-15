import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const Projects = () => {
  const companyProjects = projects.filter((p) => p.type === "company");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <section className={styles.container} id="projects">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {companyProjects.length > 0 && (
        <>
          <h3 className={styles.subTitle}>Company Projects</h3>
          <div className={styles.projects}>
            {companyProjects.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
          </div>
        </>
      )}

      {personalProjects.length > 0 && (
        <>
          <h3 className={styles.subTitle}>Personal Projects</h3>
          <div className={styles.projects}>
            {personalProjects.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
