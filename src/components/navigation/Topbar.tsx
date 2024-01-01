import React from "react";
import { FiMenu, FiCheck, FiX, FiEdit2, FiChevronDown } from "react-icons/fi";
import TestImage from '../../assets/test.png';

interface TopbarProps {
    onToggleSidebar: () => void;
};

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
    const [isEditingProjectTitle, setEditingProjectTitle] = React.useState<boolean>(false);
    const [projectTitle, setProjectTitle] = React.useState<string>('Homify');

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    const handleProjectTitleEditClick = () => {
        setEditingProjectTitle(true);
    };

    const handleProjectTitleCheckClick = () => {
        setEditingProjectTitle(false);
    };

    const handleProjectTitleCrossClick = () => {
        setEditingProjectTitle(false);
    };

    const handleProjectTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectTitle(event.target.value);
    };

    return (
        <header className="flex flex-col sm:space-y-0 sm:p-4 sm:flex-row justify-center sm:justify-between bg-[#645757] sm:h-1/4">
            <div className="flex justify-between p-4 sm:p-0 sm:space-x-4 items-stretch">
                <button
                    className="self-center text-white hover:text-gray-300 focus:outline-none"
                    onClick={handleToggleSidebar}
                >
                    <FiMenu size={75} />
                </button>
                <div className="flex items-stretch text-white sm:space-x-4">
                    {isEditingProjectTitle ? (
                        <>
                            <input
                                type="text"
                                value={projectTitle}
                                onChange={handleProjectTitleInputChange}
                                className="self-center p-2 text-5xl sm:text-8xl bg-transparent border outline-none text-white w-max"
                            />
                            <span
                                className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                                onClick={handleProjectTitleCheckClick}
                            >
                                <FiCheck size={40} />
                            </span>
                            <span
                                className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                                onClick={handleProjectTitleCrossClick}
                            >
                                <FiX size={40} />
                            </span>
                        </>
                    ) : (
                        <>
                            <h1
                                className="self-center p-2 sm:p-0 text-5xl sm:text-8xl"
                                onClick={handleProjectTitleEditClick}
                            >
                                {projectTitle}
                            </h1>
                            <span
                                className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                                onClick={handleProjectTitleEditClick}
                            >
                                <FiEdit2 size={40} />
                            </span>
                            <span className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer sm:hidden flex"
                                onClick={handleProjectTitleEditClick}
                            >
                                <FiEdit2 size={30} />
                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-center sm:items-stretch p-4 sm:p-0 text-white space-x-4">
                <span className="flex">
                    <h1 className="self-center text-4xl">Anas Mourad</h1>
                    <span className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer">
                        <FiChevronDown size={40} />
                    </span>
                </span>
                <div className="hidden sm:flex sm:items-center">
                    <img src={TestImage} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
                </div>
            </div>
        </header>);
};

export default Topbar;