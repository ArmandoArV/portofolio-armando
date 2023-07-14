"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProjectsCard.module.css";

interface ProjectsCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  title,
  description,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className={styles.cardContainer}
    >
      <div className={styles.ImageBackground}>
        <Image
          src={image}
          alt={title}
          className={styles.Image}
        />
      </div>
      {isHovered && (
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
