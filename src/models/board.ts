interface Board {
    id: number;
    title: string;
    description: string;
    members: User[];
    tasks: Task[];
}

export default Board;