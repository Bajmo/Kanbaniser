import React from "react";
import { FiEdit2, FiCheck, FiX } from "react-icons/fi";
import { useUserContext } from "../providers/UserProvider";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
    const { user, updateUser } = useUserContext();
    const { userId } = useParams<{ userId: string }>();

    const isCurrentUser = user.id !== undefined && userId === user.id.toString();

    const [isEditingUserFirstName, setIsEditingUserFirstName] = React.useState<boolean>(false);
    const [isEditingUserLastName, setIsEditingUserLastName] = React.useState<boolean>(false);
    const [isEditingUserEmail, setIsEditingUserEmail] = React.useState<boolean>(false);
    const [isEditingUserPhoneNumber, setIsEditingUserPhoneNumber] = React.useState<boolean>(false);
    const [isEditingPassword, setIsEditingPassword] = React.useState<boolean>(false);

    const [firstName, setFirstName] = React.useState<string>(user?.firstName || ""); // Have to use fetched user instead
    const [lastName, setLastName] = React.useState<string>(user?.lastName || ""); // Have to use fetched user
    const [email, setEmail] = React.useState<string>(user?.email || ""); // Have to use fetched user
    const [emailError, setEmailError] = React.useState<string | null>(null); // Have to use fetched user
    const [phoneNumber, setPhoneNumber] = React.useState<string>(user?.phoneNumber || ""); // Have to use fetched user
    const [password, setPassword] = React.useState<string>(""); // New password field

    const handleUserFirstNameEditClick = () => {
        setIsEditingUserFirstName(true);
    };

    const handleUserFirstNameCheckClick = () => {
        setIsEditingUserFirstName(false);
        updateUser({ ...user, firstName: firstName });
    };

    const handleUserFirstNameCrossClick = () => {
        setIsEditingUserFirstName(false);
        setFirstName(user?.firstName || "");
    };

    const handleUserLastNameEditClick = () => {
        setIsEditingUserLastName(true);
    };

    const handleUserLastNameCheckClick = () => {
        setIsEditingUserLastName(false);
        updateUser({ ...user, lastName: lastName });
    };

    const handleUserLastNameCrossClick = () => {
        setIsEditingUserLastName(false);
        setLastName(user?.lastName || "");
    };

    const handleUserEmailEditClick = () => {
        setIsEditingUserEmail(true);
        setEmailError(null); // Reset email error when starting to edit
    };

    const handleUserEmailCheckClick = () => {
        if (validateEmail(email)) {
            setIsEditingUserEmail(false);
            updateUser({ ...user, email: email });
        } else {
            setEmailError("Invalid email format");
        }
    };

    const handleUserEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setEmailError(null); // Reset email error on input change
    };

    const handleUserEmailCrossClick = () => {
        setIsEditingUserEmail(false);
        setEmail(user?.email || "");
        setEmailError(null); // Reset email error when discarding changes
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleUserPhoneNumberEditClick = () => {
        setIsEditingUserPhoneNumber(true);
    };

    const handleUserPhoneNumberCheckClick = () => {
        setIsEditingUserPhoneNumber(false);
        updateUser({ ...user, phoneNumber: phoneNumber });
    };

    const handleUserPhoneNumberCrossClick = () => {
        setIsEditingUserPhoneNumber(false);
        setPhoneNumber(user?.phoneNumber || "");
    };

    const handlePasswordEditClick = () => {
        setIsEditingPassword(true);
    };

    const handlePasswordCheckClick = () => {
        setIsEditingPassword(false);
        // Handle the password change logic here
    };

    const handlePasswordCrossClick = () => {
        setIsEditingPassword(false);
        setPassword(""); // Reset the password field when discarding changes
    };

    return (
        <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl text-grey-900">
            <div className="mb-4">
                <h2 className="text-3xl">First Name</h2>
                <div className="flex">
                    {isEditingUserFirstName && isCurrentUser ? (
                        <>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="p-2 text-xl font-thin bg-transparent outline-none border border-white"
                            />
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserFirstNameCheckClick}
                            >
                                <FiCheck size={20} />
                            </span>
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserFirstNameCrossClick}
                            >
                                <FiX size={20} />
                            </span>
                        </>
                    ) : (
                        <>
                            <p className="text-xl font-thin">{user.firstName}</p>
                            {isCurrentUser && (
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleUserFirstNameEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-3xl">Last Name</h2>
                <div className="flex">
                    {isEditingUserLastName && isCurrentUser ? (
                        <>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="p-2 text-xl font-thin bg-transparent outline-none border border-white"
                            />
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserLastNameCheckClick}
                            >
                                <FiCheck size={20} />
                            </span>
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserLastNameCrossClick}
                            >
                                <FiX size={20} />
                            </span>
                        </>
                    ) : (
                        <>
                            <p className="text-xl font-thin">{user.lastName}</p>
                            {isCurrentUser && (
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleUserLastNameEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-3xl">Email</h2>
                <div className="flex">
                    {isEditingUserEmail && isCurrentUser ? (
                        <>
                            <input
                                type="text"
                                value={email}
                                onChange={handleUserEmailInputChange}
                                className={`p-2 text-xl font-thin bg-transparent outline-none border ${emailError ? "border-red-500" : "border-white"
                                    }`}
                            />
                            {emailError && (
                                <p className="text-red-500 text-sm ml-2 self-center">{emailError}</p>
                            )}
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserEmailCheckClick}
                            >
                                <FiCheck size={20} />
                            </span>
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserEmailCrossClick}
                            >
                                <FiX size={20} />
                            </span>
                        </>
                    ) : (
                        <>
                            <p className="text-xl font-thin">{user.email}</p>
                            {isCurrentUser && (
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleUserEmailEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-3xl">Phone number</h2>
                <div className="flex">
                    {isEditingUserPhoneNumber ? (
                        <>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="p-2 text-xl font-thin bg-transparent outline-none border border-white"
                            />
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserPhoneNumberCheckClick}
                            >
                                <FiCheck size={20} />
                            </span>
                            <span
                                className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                onClick={handleUserPhoneNumberCrossClick}
                            >
                                <FiX size={20} />
                            </span>
                        </>
                    ) : (
                        <>
                            <p className="text-xl font-thin">{user.phoneNumber}</p>
                            {isCurrentUser && (
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handleUserPhoneNumberEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
            {isCurrentUser && (
                <div className="mb-4">
                    <h2 className="text-3xl">Change Password</h2>
                    <div className="flex">
                        {isEditingPassword ? (
                            <>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="p-2 text-xl font-thin bg-transparent outline-none border border-white"
                                />
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handlePasswordCheckClick}
                                >
                                    <FiCheck size={20} />
                                </span>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handlePasswordCrossClick}
                                >
                                    <FiX size={20} />
                                </span>
                            </>
                        ) : (
                            <>
                                <p className="text-xl font-thin">********</p>
                                <span
                                    className="self-center text-white hover:text-gray-300 ml-3 cursor-pointer"
                                    onClick={handlePasswordEditClick}
                                >
                                    <FiEdit2 size={20} />
                                </span>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
