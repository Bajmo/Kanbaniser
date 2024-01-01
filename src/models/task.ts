import Board from "./board";
import User from "./user";

interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    createdBy: User;
    board: Board;
}

export default Task;