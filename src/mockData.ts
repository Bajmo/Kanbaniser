import Section from "./enums/section";
import Board from "./models/board";
import Task from "./models/task";
import User from "./models/user";

export const mockUser1: User = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    password: "securepassword",
    image: "https://media.istockphoto.com/id/952696392/vector/television-test-card.jpg?s=612x612&w=0&k=20&c=HLKN1cPrugPVtcPI6RK60CVb2wKq39ERVa9LgfLW38s="
};

export const mockUser2: User = {
    id: 2,
    firstName: "Anas",
    lastName: "Mourad",
    phoneNumber: "123-456-7890",
    email: "anas.mourad@example.com",
    password: "securepassword",
    image: "https://media.istockphoto.com/id/952696392/vector/television-test-card.jpg?s=612x612&w=0&k=20&c=HLKN1cPrugPVtcPI6RK60CVb2wKq39ERVa9LgfLW38s="
};

export const mockUser3: User = {
    id: 3,
    firstName: "Sally",
    lastName: "Smith",
    phoneNumber: "123-456-7890",
    email: "sally.smith@example.com",
    password: "securepassword",
    image: "https://media.istockphoto.com/id/952696392/vector/television-test-card.jpg?s=612x612&w=0&k=20&c=HLKN1cPrugPVtcPI6RK60CVb2wKq39ERVa9LgfLW38s="
};

export const mockTask1: Task = {
    id: 1,
    title: "Complete Feature A",
    description: "Finish implementing Feature A by the deadline",
    createdAt: new Date(),
    createdBy: mockUser2,
    section: Section.ToDo
};

export const mockTask2: Task = {
    id: 2,
    title: "Complete Feature B",
    description: "Finish implementing Feature B by the deadline",
    createdAt: new Date(),
    createdBy: mockUser1,
    section: Section.Doing
};

export const mockTask3: Task = {
    id: 3,
    title: "Complete Feature C",
    description: "Finish implementing Feature C by the deadline",
    createdAt: new Date(),
    createdBy: mockUser3,
    section: Section.Done
};

export const mockBoard1: Board = {
    id: 1,
    title: "Project Board 1",
    description: "Board for managing project tasks",
    tasks: [mockTask1, mockTask2, mockTask3],
};

export const mockBoard2: Board = {
    id: 2,
    title: "Project Board 2",
    description: "Board for managing project tasks",
    tasks: [],
};

export const mockBoard3: Board = {
    id: 3,
    title: "Test Project",
    description: "Board for managing project tasks",
    tasks: [],
};