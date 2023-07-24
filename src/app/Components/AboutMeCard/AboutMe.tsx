import React from "react";
import Image from "next/image";
import { aboutMe } from "../../Constants";
import pfp from "../../assets/ProfilePicture/pfp.jpg";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}>
      <div className={styles.ImgContainer}>
        <div className={styles.pfpImage}>
          <Image
            src={pfp}
            alt="Picture of the author"
            objectFit="cover"
            objectPosition="center"
            className={styles.roundImage}
          />
        </div>
      </div>

      <div className={styles.AboutMeDescContainer}>
        <h1 className={styles.Name}>{aboutMe.name}</h1>
        <p className={styles.AboutMeDesc}>{aboutMe.description}</p>
      </div>
    </div>
  );
};
