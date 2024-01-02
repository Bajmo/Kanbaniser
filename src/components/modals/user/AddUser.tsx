import React from "react";
import { FiX } from "react-icons/fi";

interface AddUserProps {
    onClose: () => void;
    onAddUser: (firstName: string, lastName: string, phoneNumber: string, email: string, password: string, imageLink: string) => void;
}

const AddUser: React.FC<AddUserProps> = ({ onClose, onAddUser }) => {
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [phoneNumber, setPhoneNumber] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [initalPassword, setInitialPassword] = React.useState<string>('');
    const [imageLink, setImageLink] = React.useState<string>('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleInitialPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInitialPassword(event.target.value);
    };

    const handleImageLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageLink(event.target.value);
    };

    const handleAddUser = () => {
        onAddUser(firstName, lastName, phoneNumber, email, initalPassword, imageLink);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setInitialPassword('');
        setImageLink('');
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-2/3 h-max bg-[#524545] p-8 rounded-2xl border border-black">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-2"
                    >
                        <FiX size={20} />
                    </button>
                </div>
                <div className="overflow-y-auto">
                    <h1 className="text-6xl text-white mb-8">Add User</h1>
                    <hr className="mb-8"></hr>
                    <div className="mb-2">
                        <label htmlFor="userTitle" className="text-white text-xl">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userDescription" className="text-white text-xl">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userDescription" className="text-white text-xl">
                            Phone number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userDescription" className="text-white text-xl">
                            Email address
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userDescription" className="text-white text-xl">
                            Initial password - Please change after first login
                        </label>
                        <input
                            type="text"
                            id="initalPassword"
                            value={initalPassword}
                            onChange={handleInitialPasswordChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="userDescription" className="text-white text-xl">
                            Paste a link to your profile image
                        </label>
                        <input
                            type="text"
                            id="imageLink"
                            value={imageLink}
                            onChange={handleImageLinkChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleAddUser}
                        className="text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-2 inline-flex"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;