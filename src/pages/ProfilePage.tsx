import React from "react";
import { UserProvider } from "../components/providers/UserProvider";
import { mockUser } from "../mockData";
import UserDetails from "../components/modals/user/UserDetails";

const ProfilePage: React.FC = () => {

    return (
        <UserProvider user={mockUser}>
            <UserDetails />
        </UserProvider>
    );
};

export default ProfilePage;
