import React from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

interface TopbarProps {
    onToggleSidebar: () => void;
    title: string;
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

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar, title }) => {
    const { user } = useUserContext(); // Act like this is the response from the API call
    const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

    const handleToggleSidebar = () => {
        onToggleSidebar();
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
                    <h1
                        className="self-center p-2 sm:p-0 text-5xl sm:text-8xl"
                    >
                        {title}
                    </h1>
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
