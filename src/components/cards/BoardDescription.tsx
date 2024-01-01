import React from "react";
import { FiCheck, FiX, FiEdit2 } from "react-icons/fi";
import { useBoardContext } from "../providers/BoardProvider";
import { MAX_DESCRIPTION_LENGTH } from "../../constants";

const BoardDescription: React.FC = () => {
    const { board, updateBoard } = useBoardContext();

    const [isEditingProjectDescription, setEditingProjectDescription] = React.useState<boolean>(false);
    const [newProjectDescription, setNewProjectDescription] = React.useState<string>(board.description);
    const [isNewProjectDescriptionTooLong, setIsNewProjectDescriptionTooLong] = React.useState<boolean>(false);

    const handleProjectDescriptionEditClick = () => {
        setEditingProjectDescription(true);
    };

    const handleProjectDescriptionCheckClick = () => {
        if (newProjectDescription.length > MAX_DESCRIPTION_LENGTH) {
            setIsNewProjectDescriptionTooLong(true);
        } else {
            updateBoard({ ...board, description: newProjectDescription }); // Update board description
            setEditingProjectDescription(false);
            setIsNewProjectDescriptionTooLong(false);
        }
    };

    const handleProjectDescriptionCrossClick = () => {
        setEditingProjectDescription(false);
        setNewProjectDescription(board.description); // Revert to the original description
        setIsNewProjectDescriptionTooLong(false);
    };

    const handleProjectDescriptionInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewProjectDescription(event.target.value);
        setIsNewProjectDescriptionTooLong(false); // Reset length error on input change
    };

    return (
        <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex">
            {isEditingProjectDescription ? (
                <>
                    <textarea
                        value={newProjectDescription}
                        onChange={handleProjectDescriptionInputChange}
                        className={`self-center p-2 bg-transparent outline-none w-full border ${newProjectDescription.length > MAX_DESCRIPTION_LENGTH ? "border-red-500" : "border-white"}`}
                    />
                    {isNewProjectDescriptionTooLong && (
                        <p className="text-red-500 text-sm ml-3 self-center text-center">
                            Too long
                        </p>
                    )}
                    <span
                        className="self-center text-white hover:text-gray-300 ml-3 focus:outline-none cursor-pointer hidden sm:flex"
                        onClick={handleProjectDescriptionCheckClick}
                    >
                        <FiCheck size={20} />
                    </span>
                    <span
                        className="self-center text-white hover:text-gray-300 ml-3 focus:outline-none cursor-pointer hidden sm:flex"
                        onClick={handleProjectDescriptionCrossClick}
                    >
                        <FiX size={20} />
                    </span>
                </>
            ) : (
                <>
                    <p className="hidden sm:flex">{board.description}</p>
                    <span
                        className="text-white hover:text-gray-200 ml-3 focus:outline-none cursor-pointer"
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
