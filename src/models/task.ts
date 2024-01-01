import Section from "../enums/section";
import User from "./user";

interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    createdBy: User;
    section: Section;
}

export default Task;