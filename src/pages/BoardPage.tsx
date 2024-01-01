import BoardDescription from "../components/cards/BoardDescription";
import BoardSection from "../components/cards/BoardSection";
import { mockBoard, mockTask } from "../mockData";
import Section from "../enums/section";
import { useParams } from "react-router-dom";

const BoardPage: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>(); // Retrieve the boardId from the URL

    // make api call to get board data
    console.log(boardId);

    return (
        <>
            <BoardDescription description={mockBoard.description} />
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-8 space-y-8 sm:space-y-0 h-full">
                <BoardSection section={Section.ToDo} tasks={[mockTask]} />
                <BoardSection section={Section.Doing} tasks={[mockTask]} />
                <BoardSection section={Section.Done} tasks={[mockTask]} />
            </div>
        </>
    );
};

export default BoardPage;