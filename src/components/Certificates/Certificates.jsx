import React from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.certificates}>
        {certificates.map((cert, idx) => (
          <div key={idx} className={styles.certificateCard}>
            <img
              src={getImageUrl(cert.imageSrc)}
              alt={cert.title}
              className={styles.image}
            />
            <h3>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <p className={styles.date}>{cert.date}</p>
            <p className={styles.description}>{cert.description}</p>
            {cert.certificateLink && (
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
