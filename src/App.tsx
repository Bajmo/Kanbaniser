import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/navigation/Sidebar';
import Topbar from './components/navigation/Topbar';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import { BoardProvider } from './components/providers/BoardProvider';
import { UserProvider } from './components/providers/UserProvider';
import { mockBoard1, mockUser2 } from './mockData';
import UserDetails from './components/cards/UserDetails';
// import Board from './models/board';

// const intialBoard: Board = {
//   id: 0,
//   title: "",
//   description: "",
//   tasks: [],
// };

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <>
        <UserProvider user={mockUser2}>
          <BoardProvider board={mockBoard1}>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex flex-col h-screen">
              <Topbar onToggleSidebar={handleToggleSidebar} />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
                <Routes>
                  <Route path="/users/:userId" element={<UserDetails />} />
                  <Route path="/boards/:boardId" element={<BoardPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </main>
            </div>
          </BoardProvider>
        </UserProvider>
      </>
    </Router>
  );
};

export default App;
