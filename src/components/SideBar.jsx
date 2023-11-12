import React, { useEffect, useState } from "react";
import Button from "./Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Projects from "./Projects";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({
  handleShowContent,
  handleSelectProject,
  selectedProjectId,
  handleShowProjects,
  showMenuProjects,
}) => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  let projectList = localStorage.getItem("projects");
  if (projectList) {
    projectList = JSON.parse(projectList);
  } else {
    projectList = [];
  }

  return (
    <>
      <GiHamburgerMenu
        className={`block md:hidden z-20 ${showMenuProjects ? "text-primary" : "text-dark"
          } cursor-pointer m-3 w-8 h-8`}
        onClick={handleShowProjects}
      />
      {(showMenuProjects || isMediumScreen) && (
        <aside
          className="bg-dark absolute md:static md:block p-4 md:rounded-r-3xl md:w-1/4 md:px-8 md:py-16 h-screen"
        >
          <h2 className=" pt-10 text-3xl font-semibold tracking-tighter text-primary uppercase">
            Your projects
          </h2>
          <Button
            icon={<AiOutlinePlusCircle />}
            onClick={handleShowContent}
            variant="primary"
            disabled={false}
            className="flex gap-2 items-center mt-5 rounded-md"
          >
            New Project
          </Button>
          <ul className="mt-5">
            {projectList.map((project, idx) => (
              <Projects
                handleSelectProject={handleSelectProject}
                key={idx}
                project={project}
                selectedProjectId={selectedProjectId}
              />
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default SideBar;
