import BoardDescription from "../components/cards/BoardDescription";
import BoardSection from "../components/cards/BoardSection";
import { mockTask } from "../mockData";
import Section from "../enums/section";
import Board from "../models/board";

interface BoardPageProps {
    board: Board;
};

const BoardPage: React.FC<BoardPageProps> = ({ board }) => {
    console.log(board);
    return (
        <>
            <BoardDescription description={board.description} />
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-8 space-y-8 sm:space-y-0 h-full">
                <BoardSection section={Section.ToDo} tasks={[mockTask]} />
                <BoardSection section={Section.Doing} tasks={[mockTask]} />
                <BoardSection section={Section.Done} tasks={[mockTask]} />
            </div>
        </>
    );
};

export default BoardPage;