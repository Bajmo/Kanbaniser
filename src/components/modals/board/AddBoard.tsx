import React from "react";
import { FiX } from "react-icons/fi";

interface AddBoardProps {
    onClose: () => void;
    onAddBoard: (boardTitle: string, boardDescription: string) => void;
}

const AddBoard: React.FC<AddBoardProps> = ({ onClose, onAddBoard }) => {
    const [boardTitle, setBoardTitle] = React.useState<string>('');
    const [boardDescription, setBoardDescription] = React.useState<string>('');

    const handleBoardTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBoardTitle(event.target.value);
    };

    const handleBoardDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardDescription(event.target.value);
    };

    const handleAddBoard = () => {
        onAddBoard(boardTitle, boardDescription);
        setBoardTitle('');
        setBoardDescription('');
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
                    <h1 className="text-6xl text-white mb-8">Add Board</h1>
                    <hr className="mb-8"></hr>
                    <div className="mb-2">
                        <label htmlFor="boardTitle" className="text-white text-xl">
                            Title
                        </label>
                        <input
                            type="text"
                            id="boardTitle"
                            value={boardTitle}
                            onChange={handleBoardTitleChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="boardDescription" className="text-white text-xl">
                            Description
                        </label>
                        <textarea
                            id="boardDescription"
                            value={boardDescription}
                            onChange={handleBoardDescriptionChange}
                            className="p-2 text-white bg-transparent outline-none border border-white w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleAddBoard}
                        className="text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm p-2 inline-flex"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBoard;