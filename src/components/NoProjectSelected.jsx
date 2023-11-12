import React from "react";
import NoProjectsImg from "../assets/no-projects.png";
import Button from "./Button";

import { AiOutlinePlusCircle } from "react-icons/ai";

const NoProjectSelected = ({ handleShowContent }) => {
  return (
    <div className=" w-2/3 justify-center mt-20 mx-auto flex flex-col items-center">
      <img src={NoProjectsImg} className="w-20 h-20 my-5 mx-auto " />
      <h2 className="text-3xl font-semibold tracking-tighter text-dark uppercase">
        No selected projects yet
      </h2>
      <p className="text-center tracking-tighter mt-3">
        Create a new project or select an existing one to start tracking time
      </p>
      <Button
        icon={<AiOutlinePlusCircle />}
        onClick={handleShowContent}
        variant="secondary"
        className='flex gap-2 items-center mt-5 rounded-md'
      >
        Add more
      </Button>
    </div>
  );
};

export default NoProjectSelected;
