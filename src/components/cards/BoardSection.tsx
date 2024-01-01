import { FiPlus } from "react-icons/fi";
import Sections from "../../enums/sections";
import Task from "../../models/task";
import TaskCard from "./TaskCard";

interface BoardSectionProps {
    section: Sections;
    tasks: Task[];
};

const BoardSection: React.FC<BoardSectionProps> = ({ section, tasks }) => {
    return (
        <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
                <h2 className="font-semibold text-4xl flex-grow text-center">
                    {section}
                </h2>
                <div className="rounded-full bg-white p-3 text-grey-900 hover:bg-gray-200 focus:outline-none cursor-pointer">
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
        </div>
    );
};

export default BoardSection;
