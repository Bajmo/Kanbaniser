import React from "react";
import TaskDetails from "../modals/task/TaskDetails";
import { useTaskContext } from "../providers/TaskProvider";
import Section from "../../enums";

interface TaskCardProps {
    onDeleteTask: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ onDeleteTask }) => {
    const { task } = useTaskContext();

    const [isDetailsOpen, setDetailsOpen] = React.useState(false);

    const handleViewDetails = () => {
        setDetailsOpen(true);
    };

    return (
        <>
            <div className={`${task.section === Section.Done ? "bg-[#EFFFD6]" : "bg-white"} p-4 flex justify-between`}>
                <span className="text-xl">{task.title}</span>
                <span
                    className="text-base hover:text-gray-400 focus:outline-none cursor-pointer flex items-center"
                    onClick={handleViewDetails}
                >
                    View
                </span>
            </div>
            {isDetailsOpen && (
                <TaskDetails
                    onClose={() => setDetailsOpen(false)}
                    onDeleteTask={onDeleteTask}
                />
            )}
        </>
    );
};

export default TaskCard;
