import React, { createContext, useContext, useState } from "react";
import User from "../../models/user";

interface UserContextProps {
    user: User;
    updateUser: (updatedUser: User) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode; user: User }> = ({ children, user }) => {
    const [currentUser, setCurrentUser] = useState<User>(user);

    const updateUser = (updatedUser: User) => {
        setCurrentUser(updatedUser);
    };

    return <UserContext.Provider value={{ user: currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }

    return context;
};
