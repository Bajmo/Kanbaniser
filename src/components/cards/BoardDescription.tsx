import React from "react";
import { FiCheck, FiX, FiEdit2 } from "react-icons/fi";

interface BoardDescriptionProps {
    description: string;
};

const BoardDescription: React.FC<BoardDescriptionProps> = ({ description }) => {
    const [isEditingProjectDescription, setEditingProjectDescription] = React.useState<boolean>(false);
    const [projectDescription, setProjectDescription] = React.useState<string>(description);

    const handleProjectDescriptionEditClick = () => {
        setEditingProjectDescription(true);
    };

    const handleProjectDescriptionCheckClick = () => {
        setEditingProjectDescription(false);
    };

    const handleProjectDescriptionCrossClick = () => {
        setEditingProjectDescription(false);
    };

    const handleProjectDescriptionInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProjectDescription(event.target.value);
    };

    return (
        <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex justify-between">
            {isEditingProjectDescription ? (
                <>
                    <textarea
                        value={projectDescription}
                        onChange={handleProjectDescriptionInputChange}
                        className="self-center p-2 h-max sm:p-1 bg-transparent outline-none w-full focus:outline-none"
                    />
                    <span
                        className="self-center text-white hover:text-gray-300 ml-3 focus:outline-none cursor-pointer hidden sm:flex"
                        onClick={handleProjectDescriptionCheckClick}
                    >
                        <FiCheck size={20} />
                    </span>
                    <span
                        className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                        onClick={handleProjectDescriptionCrossClick}
                    >
                        <FiX size={20} />
                    </span>
                </>
            ) : (
                <>
                    <p className="hidden sm:flex">
                        {projectDescription}
                    </p>
                    <span className="text-grey-900 hover:text-gray-200 focus:outline-none cursor-pointer"
                        onClick={handleProjectDescriptionEditClick}
                    >
                        <FiEdit2 size={20} />
                    </span>
                </>
            )}
        </div>
    );
};

export default BoardDescription;