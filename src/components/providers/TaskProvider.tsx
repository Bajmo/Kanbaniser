import React, { createContext, useContext, useState } from "react";
import Task from "../../models/task";

interface TaskContextProps {
    task: Task;
    updateTask: (updatedTask: Task) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode; task: Task }> = ({ children, task }) => {
    const [currentTask, setCurrentTask] = useState<Task>(task);

    const updateTask = (updatedTask: Task) => {
        setCurrentTask(updatedTask);
    };

    return <TaskContext.Provider value={{ task: currentTask, updateTask }}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }

    return context;
};
