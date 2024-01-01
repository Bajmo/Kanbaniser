import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/navigation/Sidebar';
import Topbar from './components/navigation/Topbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BoardPage from './pages/BoardPage';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col h-screen">
          <Topbar onToggleSidebar={handleToggleSidebar} pageTitle='' />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
            <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/board/:boardId" element={<BoardPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </>
    </Router>
  );
};

export default App;
