"use client";

import { useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ProjectsCard.module.css";
import React from "react";

interface ProjectsCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  repo?: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = React.memo(
  ({ title, description, image, repo }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = useCallback(() => {
      setIsClicked((prevState) => !prevState);
      if (repo) {
        window.open(repo, "_blank");
      }
    }, [repo]);

    return (
      <div
        onClick={handleClick}
        className={`${styles.cardContainer} ${isClicked ? styles.clicked : ""}`}
      >
        <div className={styles.ImageBackground}>
          <Image src={image} alt={title} className={styles.Image} />
        </div>
        {isClicked && (
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </div>
    );
  }
);

export default ProjectsCard;
