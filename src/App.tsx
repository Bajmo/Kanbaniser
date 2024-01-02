import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/navigation/Sidebar';
import Topbar from './components/navigation/Topbar';
import BoardPage from './pages/BoardPage';
import { UserProvider } from './components/providers/UserProvider';
import { mockUser2 } from './mockData';
import UserDetails from './components/cards/UserDetails';
import NotFound from './components/cards/NotFound';
import Welcome from './components/cards/Welcome';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const [selectedBoardTitle, setSelectedBoardTitle] = React.useState<string>(''); // Added state to store selected board title

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <>
        <UserProvider user={mockUser2}>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex flex-col h-screen">
            <Topbar onToggleSidebar={handleToggleSidebar} title={selectedBoardTitle} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
              <Routes>
                <Route path="/users/:userId" element={<UserDetails />} />
                <Route path="/boards/:boardId" element={<BoardPage setSelectedBoardTitle={setSelectedBoardTitle} />} />
                <Route path="/" element={<Welcome />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </UserProvider>
      </>
    </Router>
  );
};

export default App;
