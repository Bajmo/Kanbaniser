import Task from "../../models/task";

interface TaskCardProps {
    task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="bg-white p-4 flex justify-between">
            <span className="text-xl">
                {task.title}
            </span>
            <span className="text-base hover:text-gray-400 focus:outline-none cursor-pointer flex items-center">
                View
            </span>
        </div>
    );
};

export default TaskCard;