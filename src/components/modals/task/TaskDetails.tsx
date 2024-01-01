import React from "react";
import { FiX, FiEdit2, FiCheck } from "react-icons/fi";
import { useTaskContext } from "../../providers/TaskProvider";

interface TaskDetailsProps {
    onClose: () => void;
    onDeleteTask: (taskId: number) => void; // Add onDeleteTask prop
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ onClose, onDeleteTask }) => {
    const { task, updateTask } = useTaskContext();

    const [isEditingTaskTitle, setEditingTaskTitle] = React.useState<boolean>(false);
    const [isEditingTaskDescription, setEditingTaskDescription] = React.useState<boolean>(false);
    const [taskTitle, setTaskTitle] = React.useState<string>(task?.title || "");
    const [taskDescription, setTaskDescription] = React.useState<string>(task?.description || "");

    const handleTaskTitleEditClick = () => {
        setEditingTaskTitle(true);
    };

    const handleTaskTitleCheckClick = () => {
        updateTask({ ...task, title: taskTitle }); // Update task title
        setEditingTaskTitle(false);
    };

    const handleTaskTitleCrossClick = () => {
        setEditingTaskTitle(false);
        setTaskTitle(task?.title || ""); // Revert to the original title
    };

    const handleTaskTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };

    const handleTaskDescriptionEditClick = () => {
        setEditingTaskDescription(true);
    };

    const handleTaskDescriptionCheckClick = () => {
        updateTask({ ...task, description: taskDescription }); // Update task description
        setEditingTaskDescription(false);
    };

    const handleTaskDescriptionCrossClick = () => {
        setEditingTaskDescription(false);
        setTaskDescription(task?.description || ""); // Revert to the original description
    };

    const handleTaskDescriptionInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDescription(event.target.value);
    };

    const handleDeleteTask = () => {
        onDeleteTask(task.id);
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
                    <div className="flex mb-8">
                        {isEditingTaskTitle ? (
                            <input
                                type="text"
                                value={taskTitle}
                                onChange={handleTaskTitleInputChange}
                                className="p-2 text-6xl text-white bg-transparent outline-none border border-white w-full"
                            />
                        ) : (
                            <h1 className="text-6xl text-white">
                                {taskTitle}
                            </h1>
                        )}
                        {isEditingTaskTitle ? (
                            <>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleTaskTitleCheckClick}
                                >
                                    <FiCheck size={20} />
                                </span>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleTaskTitleCrossClick}
                                >
                                    <FiX size={20} />
                                </span>
                            </>
                        ) : (
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleTaskTitleEditClick}
                            >
                                <FiEdit2 size={20} />
                            </span>
                        )}
                    </div>
                    <hr className="mb-8"></hr>
                    <div className="mb-2">
                        <h2 className="text-3xl text-white">
                            Description
                        </h2>
                        {isEditingTaskDescription ? (
                            <div className="flex justify-between">
                                <textarea
                                    value={taskDescription}
                                    onChange={handleTaskDescriptionInputChange}
                                    className="p-2 text-white text-md font-thin bg-transparent outline-none border border-white w-full"
                                />
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleTaskDescriptionCheckClick}
                                >
                                    <FiCheck size={20} />
                                </span>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleTaskDescriptionCrossClick}
                                >
                                    <FiX size={20} />
                                </span>
                            </div>
                        ) : (
                            <div className="flex">
                                <p className="text-white text-md font-thin">
                                    {taskDescription}
                                </p>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleTaskDescriptionEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="mb-2">
                        <h2 className="text-3xl text-white">
                            Created by
                        </h2>
                        <p className="text-white text-xl font-thin">
                            {task?.createdBy.firstName} {task?.createdBy.lastName}
                        </p>
                    </div>
                    <div className="mb-2">
                        <h2 className="text-3xl text-white">
                            Created at
                        </h2>
                        <p className="text-white text-xl font-thin">
                            {task?.createdAt instanceof Date ? task?.createdAt.toLocaleString() : ''}
                        </p>
                    </div>
                </div>
                <div className="flex justify-end my-auto">
                    <button
                        type="button"
                        onClick={handleDeleteTask}
                        className="text-white bg-red-500 hover:bg-red-600 rounded-lg text-sm p-2 inline-flex"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
