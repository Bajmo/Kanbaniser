import React from "react";
import Task from "../../models/task";
import TaskDetails from "../modals/task/TaskDetails";

interface TaskCardProps {
    task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const [isDetailsOpen, setDetailsOpen] = React.useState(false);

    const handleViewDetails = () => {
        setDetailsOpen(true);
    };

    return (
        <>
            <div className="bg-white p-4 flex justify-between">
                <span className="text-xl">{task.title}</span>
                <span
                    className="text-base hover:text-gray-400 focus:outline-none cursor-pointer flex items-center"
                    onClick={handleViewDetails}
                >
                    View
                </span>
            </div>
            {isDetailsOpen && <TaskDetails task={task} onClose={() => setDetailsOpen(false)} />}
        </>
    );
};

export default TaskCard;