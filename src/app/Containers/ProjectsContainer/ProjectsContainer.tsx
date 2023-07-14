import React from "react";
import { projects } from "@/app/Constants";
import ProjectsCard from "@/app/Components/ProjectsCard/ProjectsCard";

const ProjectsContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
      <div className="flex md:flex-row flex-col w-full max-w-screen-lg px-25 mt-5">
        {projects.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
