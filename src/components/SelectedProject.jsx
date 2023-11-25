import React from "react";
import Tasks from "./Tasks";
import Button from "./Button";

const SelectedProject = ({
  handleUpdateTask,
  handleEditTask,
  setEnteredTask,
  enteredTask,
  projects,
  projectId,
  handleDeleteProject,
  handleAddTask,
  tasks,
  handleDeleteTask,
  handleEdit,
  taskToEdit,
}) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-4 md:w-[35rem] md:mt-16">
      <header className="pb-4 mb-4 border-b-2 border-dark">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-dark font-bold mb-2">
            {projects.name.toUpperCase()}
          </h1>
          <div className="gap-2 flex">
            <Button
              onClick={() => {
                handleDeleteProject(projects.id);
              }}
              variant="danger"
              className="rounded-md"
              size="normal"
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                handleEdit(projects.id);
              }}
              variant="secondary"
              className="rounded-md"
              size="normal"
            >
              Edit
            </Button>
          </div>
        </div>
        <p className="mb-4 text-gray-500">{formatDate(projects.date)}</p>
        <p className="text-dark tracking-tight leading-4 whitespace-pre-wrap">
          {projects.description}
        </p>
      </header>
      <Tasks
        setEnteredTask={setEnteredTask}
        enteredTask={enteredTask}
        projectId={projectId}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
        handleAddTask={handleAddTask}
        handleEditTask={handleEditTask}
        taskToEdit={taskToEdit}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
};

export default SelectedProject;
