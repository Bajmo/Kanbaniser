import React, { useState } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

interface AddTaskProps {
    onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');

    const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };

    const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
        // Perform the task addition logic here
        // You may want to call an API or update your state to add the task
        // Reset the input fields after adding the task
        setTaskTitle('');
        setTaskDescription('');
        // Close the modal
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-2/3 h-max bg-[#524545] p-8 rounded-2xl border border-black">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-2"
                    >
                        <FiX size={20} />
                    </button>
                </div>
                <div className="overflow-y-auto">
                    <h1 className="text-4xl text-white mb-4">Add Task</h1>
                    <div className="mb-4">
                        <label htmlFor="taskTitle" className="text-white text-xl">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="taskTitle"
                            value={taskTitle}
                            onChange={handleTaskTitleChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="taskDescription" className="text-white text-xl">
                            Task Description
                        </label>
                        <textarea
                            id="taskDescription"
                            value={taskDescription}
                            onChange={handleTaskDescriptionChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleAddTask}
                        className="text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-2 inline-flex"
                    >
                        <FiCheck size={20} className="mr-2" />
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
