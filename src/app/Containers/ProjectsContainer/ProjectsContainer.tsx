import React from "react";
import { projectList } from "@/app/Constants";
import CardComponent from "../../Components/CardComponent/CardComponent";
import styles from "../ArticlesContainer/ArticlesContainer.module.css";
const ProjectsContainer: React.FC = () => {
  return (
    <div className={styles.outsideContainer}>
      <h1 className={styles.Header}>Projects</h1>
      <div className={styles.cardsContainer}>
        {projectList.map((project) => (
          <CardComponent
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.repo}
            linkTxt={project.linkTxt}

          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
