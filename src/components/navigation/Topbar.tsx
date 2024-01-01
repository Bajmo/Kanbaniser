import React from "react";
import { FiMenu, FiCheck, FiX, FiEdit2, FiChevronDown } from "react-icons/fi";
import TestImage from '../../assets/test.png';
import { Link } from "react-router-dom";

interface TopbarProps {
    onToggleSidebar: () => void;
    pageTitle: string;
}

interface DropdownProps {
    isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    const handleSignOutClick = () => {
        console.log("Sign out clicked");
    };

    return (
        <div className="text-gray-900 absolute top-30 right-0 w-40 bg-white border border-gray-300 rounded shadow">
            <ul className="py-2">
                <Link to="/profile">
                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        Profile
                    </li>
                </Link>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={handleSignOutClick}>
                    Sign out
                </li>
            </ul>
        </div>
    );
};

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
    const [isEditingProjectTitle, setEditingProjectTitle] = React.useState<boolean>(false);
    const [projectTitle, setProjectTitle] = React.useState<string>('Homify');
    const [newProjectTitle, setNewProjectTitle] = React.useState<string>(projectTitle);
    const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
    const [isTitleTooLong, setTitleTooLong] = React.useState<boolean>(false);

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    const handleProjectTitleEditClick = () => {
        setEditingProjectTitle(true);
    };

    const handleProjectTitleCheckClick = () => {
        if (newProjectTitle.length > 13) {
            setTitleTooLong(true);
        } else {
            setProjectTitle(newProjectTitle);
            setEditingProjectTitle(false);
            setTitleTooLong(false);
        }
    };

    const handleProjectTitleCrossClick = () => {
        setEditingProjectTitle(false);
        setTitleTooLong(false);
    };

    const handleProjectTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewProjectTitle(event.target.value);
        setTitleTooLong(false); // Reset the error when the input changes
    };

    const handleDropdownClick = () => {
        setDropdownOpen(!isDropdownOpen);
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
                                value={newProjectTitle}
                                onChange={handleProjectTitleInputChange}
                                className={`self-center p-2 text-5xl sm:text-8xl bg-transparent border outline-none text-white w-2/4 ${isTitleTooLong ? "border-red-500" : "border-white"
                                    }`}
                            />
                            {isTitleTooLong && (
                                <p className="text-red-500 text-sm ml-2 self-center">Title is too long</p>
                            )}
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
                            >
                                {projectTitle}
                            </h1>
                            <span
                                className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                                onClick={handleProjectTitleEditClick}
                            >
                                <FiEdit2 size={40} />
                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-center sm:items-stretch p-4 w-1/4 sm:p-0 text-white space-x-4">
                <span className="flex relative cursor-pointer" onClick={handleDropdownClick}>
                    <h1 className="self-center text-4xl">Anas Mourad</h1>
                    <span
                        className="self-center text-white focus:outline-none"
                    >
                        <FiChevronDown size={40} />
                        <Dropdown isOpen={isDropdownOpen} />
                    </span>
                </span>
                <div className="hidden sm:flex sm:items-center">
                    <img src={TestImage} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
