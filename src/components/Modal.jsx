import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      className="p-5 w-[40rem] backdrop:bg-dark/90 text-center bg-primary text-dark rounded-md"
      ref={dialog}
    >
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
      <form className="flex mt-10 justify-end" method="dialog">
        <Button variant="danger" size="normal" className='rounded-md'>
          Close
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
