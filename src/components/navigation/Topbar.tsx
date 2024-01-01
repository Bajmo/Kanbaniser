import React from "react";
import { FiMenu, FiCheck, FiX, FiEdit2, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MAX_TITLE_LENGTH } from "../../constants";
import { useBoardContext } from "../providers/BoardProvider";
import { useUserContext } from "../providers/UserProvider";

interface TopbarProps {
    onToggleSidebar: () => void;
}

interface DropdownProps {
    isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {
    const { user } = useUserContext(); // Act like this is the response from the API call

    if (!isOpen) return null;

    const handleSignOutClick = () => {
        console.log("Sign out clicked");
    };

    return (
        <div className="text-gray-900 absolute top-30 right-0 w-40 bg-white border border-gray-300 rounded shadow">
            <ul className="py-2">
                <Link to={`/users/${user.id}`}>
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
    const { user } = useUserContext(); // Act like this is the response from the API call
    const { board, updateBoard } = useBoardContext(); // Act like this is the response from the API call

    const [isEditingProjectTitle, setEditingProjectTitle] = React.useState<boolean>(false);
    const [newProjectTitle, setNewProjectTitle] = React.useState<string>(board.title);
    const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
    const [isTitleTooLong, setIsTitleTooLong] = React.useState<boolean>(false);

    const handleToggleSidebar = () => {
        onToggleSidebar();
    };

    const handleProjectTitleEditClick = () => {
        setEditingProjectTitle(true);
    };

    const handleProjectTitleCheckClick = () => {
        if (newProjectTitle.length > MAX_TITLE_LENGTH) {
            setIsTitleTooLong(true);
        } else {
            updateBoard({ ...board, title: newProjectTitle }); // Update board title
            setEditingProjectTitle(false);
            setIsTitleTooLong(false);
        }
    };

    const handleProjectTitleCrossClick = () => {
        setEditingProjectTitle(false);
        setNewProjectTitle(board.title); // Revert to the original title
        setIsTitleTooLong(false);
    };

    const handleProjectTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewProjectTitle(event.target.value);
        setIsTitleTooLong(false); // Reset the error when the input changes
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
                                className={`self-center p-2 text-5xl sm:text-8xl bg-transparent border outline-none text-white w-2/4 ${newProjectTitle.length > MAX_TITLE_LENGTH ? "border-red-500" : "border-white"}`}
                            />
                            {isTitleTooLong && (
                                <p className="text-red-500 text-sm ml-3 self-center text-center">
                                    Too long
                                </p>
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
                                {board.title}
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
                    <h1 className="self-center text-4xl">{user.firstName} {user.lastName}</h1>
                    <span
                        className="self-center text-white focus:outline-none"
                    >
                        <FiChevronDown size={40} />
                        <Dropdown isOpen={isDropdownOpen} />
                    </span>
                </span>
                <div className="hidden sm:flex sm:items-center">
                    <img src={user.image} className="rounded-3xl w-40" />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
