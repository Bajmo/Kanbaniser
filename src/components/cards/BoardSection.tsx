import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Section from '../../enums/section';
import Task from '../../models/task';
import TaskCard from './TaskCard';
import AddTask from '../modals/task/AddTask';
import User from '../../models/user';
import Board from '../../models/board';

interface BoardSectionProps {
    section: Section;
    tasks: Task[];
}

const BoardSection: React.FC<BoardSectionProps> = ({ section, tasks }) => {
    const [isAddTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false);
    const [boardTasks, setTasks] = useState<Task[]>(tasks);

    const openAddTaskModal = () => {
        setAddTaskModalOpen(true);
    };

    const closeAddTaskModal = () => {
        setAddTaskModalOpen(false);
    };

    const handleAddTask = (taskTitle: string, taskDescription: string) => {
        const newTask: Task = {
            id: 5,
            title: taskTitle,
            description: taskDescription,
            createdAt: new Date(),
            createdBy: {} as User,
            board: {} as Board
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
                <h2 className="font-semibold text-4xl flex-grow text-center">{section}</h2>
                <div
                    onClick={openAddTaskModal}
                    className="rounded-full bg-white p-3 text-grey-900 hover:bg-gray-200 focus:outline-none cursor-pointer"
                >
                    <span>
                        <FiPlus />
                    </span>
                </div>
            </div>
            <div className="space-y-4">
                {boardTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            {isAddTaskModalOpen && <AddTask section={section} onClose={closeAddTaskModal} onAddTask={handleAddTask} />}
        </div>
    );
};

export default BoardSection;
