import React, { createContext, useContext, useState } from "react";
import Board from "../../models/board";

interface BoardContextProps {
    board: Board;
    updateBoard: (updatedBoard: Board) => void;
}

const BoardContext = createContext<BoardContextProps | undefined>(undefined);

export const BoardProvider: React.FC<{ children: React.ReactNode; board: Board }> = ({ children, board }) => {
    const [currentBoard, setCurrentBoard] = useState<Board>(board);

    const updateBoard = (updatedBoard: Board) => {
        setCurrentBoard(updatedBoard);
    };

    return <BoardContext.Provider value={{ board: currentBoard, updateBoard }}>{children}</BoardContext.Provider>;
};

export const useBoardContext = () => {
    const context = useContext(BoardContext);

    if (!context) {
        throw new Error("useBoardContext must be used within a BoardProvider");
    }

    return context;
};
