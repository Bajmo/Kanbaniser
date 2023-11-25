// App.tsx
import React, { useState } from 'react';
import Sidebar from './components/navigation/Sidebar';
import { FiMenu, FiEdit2, FiChevronDown, FiPlus } from 'react-icons/fi';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col h-screen">
        <header className="flex justify-between bg-[#645757] border-b h-1/4">
          <div className="flex items-stretch">
            <div className="self-center p-4">
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={handleToggleSidebar}
              >
                <FiMenu size={75} />
              </button>
            </div>
            <div className="flex items-stretch text-white">
              <h1 className="self-center p-4 text-8xl">Homify</h1>
              <span className="self-center">
                <FiEdit2 size={40} />
              </span>
            </div>
          </div>
          <div className="flex items-stretch text-white mx-8">
            <span className="flex">
              <h1 className="self-center p-4 text-4xl">Anas Mourad</h1>
              <span className="self-center">
                <FiChevronDown size={40} />
              </span>
            </span>
            <span className="self-center ml-4 h-40 w-40 bg-white rounded-full">
            </span>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
          <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span>
              <FiEdit2 size={20} />
            </span>
          </div>
          <div className="grid grid-cols-3 space-x-8 h-full">
            <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex flex-col">
              <div className="flex items-center mb-4">
                <h2 className="font-semibold text-4xl flex-grow text-center">
                  To Do
                </h2>
                <div className="rounded-full bg-white p-3">
                  <span className="text-black">
                    <FiPlus />
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 flex justify-between">
                  <span className="text-xl">
                    Cook lunch
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-white p-4 flex justify-between">
                  <span className="text-xl">
                    Walk the dog
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-white p-4 flex justify-between">
                  <span className="text-xl">
                    Wash the car
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex flex-col">
              <div className="flex items-center mb-4">
                <h2 className="font-semibold text-4xl flex-grow text-center">
                  Doing
                </h2>
                <div className="rounded-full bg-white p-3">
                  <span className="text-black">
                    <FiPlus />
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 flex justify-between">
                  <span className="text-xl">
                    Create mock-ups
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-white p-4 flex justify-between">
                  <span className="text-xl">
                    Drink coffee
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex flex-col">
              <div className="flex items-center mb-4">
                <h2 className="font-semibold text-4xl flex-grow text-center">
                  Done
                </h2>
                <div className="rounded-full bg-white p-3">
                  <span className="text-black">
                    <FiPlus />
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-xl">
                <div className="bg-green-100 p-4 flex justify-between">
                  <span className="text-xl">
                    Wake up
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-green-100 p-4 flex justify-between">
                  <span className="text-xl">
                    Brush teeth
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-green-100 p-4 flex justify-between">
                  <span className="text-xl">
                    Go for a walk
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
                <div className="bg-green-100 p-4 flex justify-between">
                  <span className="text-xl">
                    Write some code
                  </span>
                  <span className="text-base">
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
