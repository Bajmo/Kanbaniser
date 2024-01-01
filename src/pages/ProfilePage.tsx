import User from "../models/user";

interface ProfilePageProps {
    user: User;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
    return <div>{user.firstName}</div>;
};

export default ProfilePage;