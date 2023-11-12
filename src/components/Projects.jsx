import React from "react";
import Button from "./Button";

const Projects = ({ project, handleSelectProject, selectedProjectId }) => {
  let cssClasses =
    "px-6 py-2 my-2 w-full rounded text-primary font-semibold hover:bg-lightDark";
  if (project.id === selectedProjectId) {
    cssClasses += " bg-lightDark";
  } else {
    cssClasses += " bg-dark";
  }
  return (
    <li>
      <button
        onClick={() => handleSelectProject(project.id)}
        className={cssClasses}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Projects;
