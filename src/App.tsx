import React, { useState } from 'react';
import Sidebar from './components/navigation/Sidebar';
import BoardDescription from './components/cards/BoardDescription';
import BoardSection from './components/cards/BoardSection';
import Sections from './enums/sections';
import { mockTask } from './mockData';
import Topbar from './components/navigation/Topbar';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col h-screen">
        <Topbar onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
          <BoardDescription description={"asdas"} />
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-8 space-y-8 sm:space-y-0 h-full">
            <BoardSection section={Sections.ToDo} tasks={[mockTask]} />
            <BoardSection section={Sections.Doing} tasks={[mockTask]} />
            <BoardSection section={Sections.Done} tasks={[mockTask]} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
