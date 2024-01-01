import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Sections from '../../enums/sections';
import Task from '../../models/task';
import TaskCard from './TaskCard';
import AddTask from '../modals/task/AddTask';

interface BoardSectionProps {
    section: Sections;
    tasks: Task[];
}

const BoardSection: React.FC<BoardSectionProps> = ({ section, tasks }) => {
    const [isAddTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false);

    const openAddTaskModal = () => {
        setAddTaskModalOpen(true);
    };

    const closeAddTaskModal = () => {
        setAddTaskModalOpen(false);
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
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            {/* AddTask modal */}
            {isAddTaskModalOpen && <AddTask onClose={closeAddTaskModal} />}
        </div>
    );
};

export default BoardSection;
