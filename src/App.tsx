// App.tsx
import React, { useState } from 'react';
import Sidebar from './components/navigation/Sidebar';
import { FiMenu, FiEdit2, FiChevronDown, FiPlus, FiCheck, FiX } from 'react-icons/fi';
import TestImage from './assets/test.png';
import BoardDescription from './components/cards/BoardDescription';
import BoardSection from './components/cards/BoardSection';
import Sections from './enums/sections';
import { mockTask } from './mockData';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isEditingProjectTitle, setEditingProjectTitle] = useState<boolean>(false);
  const [projectTitle, setProjectTitle] = useState<string>('Homify');

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleProjectTitleEditClick = () => {
    setEditingProjectTitle(true);
  };

  const handleProjectTitleCheckClick = () => {
    setEditingProjectTitle(false);
    // You can perform any additional logic here when confirming the edit
  };

  const handleProjectTitleCrossClick = () => {
    setEditingProjectTitle(false);
    // You can perform any additional logic here when canceling the edit
  };

  const handleProjectTitleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectTitle(event.target.value);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col h-screen">
        <header className="flex flex-col sm:space-y-0 sm:p-4 sm:flex-row justify-center sm:justify-between bg-[#645757] sm:h-1/4">
          <div className="flex justify-between p-4 sm:p-0 sm:space-x-4 items-stretch">
            <button
              className="self-center text-white hover:text-gray-300 focus:outline-none"
              onClick={handleToggleSidebar}
            >
              <FiMenu size={75} />
            </button>
            <div className="flex items-stretch text-white sm:space-x-4">
              {isEditingProjectTitle ? (
                <>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={handleProjectTitleInputChange}
                    className="self-center p-2 sm:p-0 text-5xl sm:text-8xl bg-transparent outline-none focus:outline-none text-white w-96"
                  />
                  <span
                    className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                    onClick={handleProjectTitleCheckClick}
                  >
                    <FiCheck size={40} />
                  </span>
                  <span
                    className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                    onClick={handleProjectTitleCrossClick}
                  >
                    <FiX size={40} />
                  </span>
                </>
              ) : (
                <>
                  <h1
                    className="self-center p-2 sm:p-0 text-5xl sm:text-8xl"
                    onClick={handleProjectTitleEditClick}
                  >
                    {projectTitle}
                  </h1>
                  <span
                    className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer hidden sm:flex"
                    onClick={handleProjectTitleEditClick}
                  >
                    <FiEdit2 size={40} />
                  </span>
                  <span className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer sm:hidden flex"
                    onClick={handleProjectTitleEditClick}
                  >
                    <FiEdit2 size={30} />
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center sm:items-stretch p-4 sm:p-0 text-white space-x-4">
            <span className="flex">
              <h1 className="self-center text-4xl">Anas Mourad</h1>
              <span className="self-center text-white hover:text-gray-300 focus:outline-none cursor-pointer">
                <FiChevronDown size={40} />
              </span>
            </span>
            <div className="hidden sm:flex sm:items-center">
              <img src={TestImage} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
            </div>
          </div>
        </header>
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
