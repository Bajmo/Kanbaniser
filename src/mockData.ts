import Board from "./models/board";
import Task from "./models/task";
import User from "./models/user";

const mockUser: User = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    password: "securepassword",
};

const mockBoard: Board = {
    id: 1,
    title: "Project Board",
    description: "Board for managing project tasks",
    members: [mockUser],
    tasks: [],
};

const mockTask: Task = {
    id: 1,
    title: "Complete Feature A",
    description: "Finish implementing Feature A by the deadline",
    createdAt: new Date(),
    createdBy: mockUser,
    board: mockBoard,
};

export { mockUser, mockBoard, mockTask };