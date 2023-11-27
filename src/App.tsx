// App.tsx
import React, { useState } from 'react';
import Sidebar from './components/navigation/Sidebar';
import { FiMenu, FiEdit2, FiChevronDown, FiPlus } from 'react-icons/fi';
import TestImage from './assets/test.png';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const truncatedText = isExpanded ? text : `${text.slice(0, 200)}...`;

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
              <h1 className="self-center p-2 sm:p-0 text-5xl sm:text-8xl">Homify</h1>
              <span className="self-center hidden sm:flex">
                <FiEdit2 size={40} />
              </span>
              <span className="self-center sm:hidden flex">
                <FiEdit2 size={30} />
              </span>
            </div>
          </div>
          <div className="flex justify-center sm:items-stretch p-4 sm:p-0 text-white space-x-4">
            <span className="flex">
              <h1 className="self-center text-4xl">Anas Mourad</h1>
              <span className="self-center">
                <FiChevronDown size={40} />
              </span>
            </span>
            <div className="hidden sm:flex sm:items-center">
              <img src={TestImage} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-8 space-y-8 text-gray-800">
          <div className="p-6 bg-[#BAAEAE] rounded-2xl shadow-xl flex justify-between">
            <p className="sm:hidden">
              {truncatedText}
              {!isExpanded && (
                <button
                  className="text-blue-500 hover:underline cursor-pointer"
                  onClick={() => setIsExpanded(true)}
                >
                  &nbsp;Read more
                </button>
              )}
            </p>
            <p className="hidden sm:flex">
              {text}
            </p>
            <span>
              <FiEdit2 size={20} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-8 space-y-8 mb-8 sm:space-y-0 h-full">
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
              <h2 className="flex justify-center mb-4 font-semibold text-4xl text-center">
                Doing
              </h2>
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
              <h2 className="flex justify-center mb-4 font-semibold text-4xl text-center">
                Done
              </h2>
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
