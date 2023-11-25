import React, { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { FaTimesCircle } from "react-icons/fa";
import Input from "./Input";

const Form = ({
  handleAddProject,
  userToEdit,
  handleCancelBtn,
  handleUpdate,
  pname,
  pdesc,
  pdate,
  setPdate,
  setPname,
  setPdesc,
}) => {
  const modalRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    if (pname === "" || pdesc === "" || pdate === "") {
      modalRef.current.open();
      return;
    }

    handleAddProject(pname, pdesc, pdate);
    console.log(pname, pdesc, pdate);
  }

  return (
    <>
      <Modal ref={modalRef}>
        <FaTimesCircle className="text-6xl text-dark" />
        <h2 className="text-2xl my-3 font-bold tracking-wider ">
          Error invalid input.
        </h2>
        <p>Please make sure you fill out all the fields!</p>
      </Modal>
      <menu className="flex items-center p-4 justify-end gap-2">
        <Button
          onClick={handleCancelBtn}
          className="text-dark px-6 py-2 rounded-md"
          variant="secondary"
          size="small"
        >
          Cancel
        </Button>
        {userToEdit ? (
          <Button
            onClick={handleUpdate}
            type="submit"
            className="text-dark px-6 py-2 rounded-md"
            variant="secondary"
            size="small"
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            type="submit"
            className="text-dark px-6 py-2 rounded-md"
            variant="secondary"
            size="small"
          >
            Save
          </Button>
        )}
      </menu>
      <div>
        <form className="p-4">
          <Input
            type="text"
            label="Project name"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            className="w-full mt-2 px-4 py-2 rounded-md border border-dark text-dark bg-stone-50"
          />
          <label className="block mt-8 text-dark font-semibold">
            Project description
          </label>
          <textarea
            className="w-full mt-2 px-4 py-2 rounded-md border border-dark text-dark bg-stone-50"
            rows="5"
            value={pdesc}
            onChange={(e) => setPdesc(e.target.value)}
          ></textarea>
          {/* date */}
          <Input
            type="date"
            label="Due date"
            value={pdate}
            onChange={(e) => setPdate(e.target.value)}
            className="w-full mt-2 px-4 py-2 rounded-md border border-dark text-dark bg-stone-50"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
