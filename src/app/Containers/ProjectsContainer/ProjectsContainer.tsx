import React from "react";
import { projectList } from "@/app/Constants";
import ProjectsCard from "@/app/Components/ProjectsCard/ProjectsCard";
import styles from "../ArticlesContainer/ArticlesContainer.module.css";
const ProjectsContainer: React.FC = () => {
  return (
    <div className={styles.outsideContainer}>
      <h1 className={styles.Header}>Projects</h1>
      <div className={styles.cardsContainer}>
        {projectList.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
