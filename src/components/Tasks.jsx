import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import Modal from "./Modal";
import { FaEdit } from "react-icons/fa";

const Tasks = ({
  handleUpdateTask,
  taskToEdit,
  handleEditTask,
  tasks,
  setEnteredTask,
  enteredTask,
  handleAddTask,
  handleDeleteTask,
  projectId,
}) => {
  const modalRef = useRef();

  function handleOnchange(e) {
    setEnteredTask(e.target.value);
  }

  function handleButton() {
    if (!enteredTask) {
      modalRef.current.open();
      return;
    }
    handleAddTask(enteredTask);
    setEnteredTask("");
  }

  // Filter tasks based on the selected project
  const projectTasks = tasks.filter((task) => task.projectId === projectId);

  return (
    <>
      <Modal ref={modalRef}>
        <FaTimesCircle className="text-6xl text-dark" />
        <h2 className="text-2xl my-3 font-bold tracking-wider ">
          Error invalid input.
        </h2>
        <p>Please make sure you fill out all the fields!</p>
      </Modal>
      <Input
        value={enteredTask}
        onChange={handleOnchange}
        className=" mt-2 px-4 py-2 rounded-md border border-dark text-dark bg-stone-50"
        type="text"
        label="Tasks"
      />
      {taskToEdit ? (
        <Button
          className="rounded-md mt-5"
          variant="secondary"
          onClick={handleUpdateTask}
        >
          Save
        </Button>
      ) : (
        <Button
          className="rounded-md mt-5"
          variant="secondary"
          onClick={handleButton}
        >
          Add task
        </Button>
      )}
      {projectTasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center mt-5">
          <p className="text-dark">{task.name}</p>
          <div className="flex gap-2">
            <Button
              icon={<BsFillTrashFill />}
              onClick={() => handleDeleteTask(task.id)}
              className="rounded-md"
              variant="danger"
            />
            <Button
              icon={<FaEdit />}
              onClick={() => handleEditTask(task.id)}
              className="rounded-md"
              variant="secondary"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
