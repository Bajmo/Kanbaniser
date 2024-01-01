import Task from "./task";

interface Board {
    id: number;
    title: string;
    description: string;
    tasks: Task[];
}

export default Board;