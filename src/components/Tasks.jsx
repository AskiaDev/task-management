import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { BsFillTrashFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import Modal from "./Modal";

const Tasks = ({ tasks, handleAddTask, handleDeleteTask, projectId }) => {
    const [enteredTask, setEnteredTask] = useState('');
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
        setEnteredTask('');
    }

    // Filter tasks based on the selected project
    const projectTasks = tasks.filter(
        (task) => task.projectId === projectId
    );



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
                className=' mt-2 px-4 py-2 rounded-md border border-dark text-dark bg-stone-50'
                type='text'
                label='Tasks'
            />
            <Button className='rounded-md mt-5' variant='secondary' onClick={handleButton}>
                Add task
            </Button>
            {projectTasks.map((task) => (
                <div key={task.id} className='flex justify-between items-center mt-5'>
                    <p className='text-dark'>{task.name}</p>
                    <Button
                        icon={<BsFillTrashFill />}
                        onClick={() => handleDeleteTask(task.id)}
                        className='rounded-md'
                        variant='danger'
                    />
                </div>
            ))}
        </>
    );
};

export default Tasks;
