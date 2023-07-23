import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ArticleCards.module.css";
import { link } from "fs";

interface ArticlesContainerProps {
  title: string;
  description: string;
  image: StaticImageData;
  link?: string;
}

const ArticlesContainer: React.FC<ArticlesContainerProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={styles.ArticleCardContainer}>
      <div className={styles.roundImage}>
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          objectPosition="center"
          className={styles.roundImage}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.link}>Read More</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
