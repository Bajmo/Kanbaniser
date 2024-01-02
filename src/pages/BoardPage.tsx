import BoardDescription from "../components/cards/BoardDescription";
import BoardSection from "../components/cards/BoardSection";
import Section from "../enums";
import { useParams } from "react-router-dom";
import { BoardProvider } from "../components/providers/BoardProvider";
import React from "react";
import { mockBoard1 } from "../mockData";
// import Task from "../models/task";

interface BoardPageProps {
    setSelectedBoardTitle: (title: string) => void;
}

const BoardPage: React.FC<BoardPageProps> = ({ setSelectedBoardTitle }) => {
    const { boardId } = useParams<{ boardId: string }>(); // Retrieve the boardId from the URL

    // const [toDoTasks, setToDoTasks] = React.useState<Task[]>([]);
    // const [doingTasks, setDoingTasks] = React.useState<Task[]>([]);
    // const [doneTasks, setDoneTasks] = React.useState<Task[]>([]);

    // make api call to get board data
    console.log(boardId);

    // mockBoard1 is the response from the API call onClick={() => }
    setSelectedBoardTitle(mockBoard1.title + boardId)

    return (
        <BoardProvider board={mockBoard1}>
            <BoardDescription />
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-8 space-y-8 sm:space-y-0 h-full">
                <BoardSection section={Section.ToDo} tasks={mockBoard1.tasks.filter((task) => task.section === Section.ToDo)} />
                <BoardSection section={Section.Doing} tasks={mockBoard1.tasks.filter((task) => task.section === Section.Doing)} />
                <BoardSection section={Section.Done} tasks={mockBoard1.tasks.filter((task) => task.section === Section.Done)} />
            </div>
        </BoardProvider>
    );
};

export default BoardPage;