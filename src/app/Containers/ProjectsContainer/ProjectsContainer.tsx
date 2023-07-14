import React from "react";
import { projectList } from "@/app/Constants";
import ProjectsCard from "@/app/Components/ProjectsCard/ProjectsCard";
import { StaticImageData } from "next/image";

const ProjectsContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
      <div className="flex md:flex-row flex-col w-full max-w-screen-lg px-25 mt-5">
        {projectList.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image.toString()} // Convert StaticImageData to string
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;