// Sidebar.tsx
import React from 'react';
import { FiX, FiPlus, FiTrash2 } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? '' : '-translate-x-full'
        } bg-[#524545]`}
      tabIndex={isOpen ? 0 : -1}
      aria-labelledby="drawer-navigation-label"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="text-white bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
      >
        <FiX size={20} />
      </button>
      <h1 id="drawer-navigation-label" className="text-4xl text-white py-8 flex justify-center">
        Kanbaniser
      </h1>
      {/* Sidebar content */}
      <div className="py-4 overflow-y-auto">
        <div className="flex justify-between mb-2">
          <h5 id="drawer-navigation-label" className="text-2xl text-white">
            Projects
          </h5>
          <div className="rounded-full bg-white p-2">
            <span className="text-black">
              <FiPlus />
            </span>
          </div>
        </div>
        <hr></hr>
        <ul className="font-medium mt-3 space-y-3">
          {/* Replace the icons and hrefs with your desired links */}
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Homify</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Tinywheels</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Test Project</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
      <div className="py-4 overflow-y-auto">
        <div className="flex justify-between mb-2">
          <h5 id="drawer-navigation-label" className="text-2xl text-white">
            Team Members
          </h5>
          <div className="rounded-full bg-white p-2">
            <span className="text-black">
              <FiPlus />
            </span>
          </div>
        </div>
        <hr></hr>
        <ul className="font-medium mt-3 space-y-3">
          {/* Replace the icons and hrefs with your desired links */}
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Anas Mourad</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Imad Maailil</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
              <span>Hamza Lghali</span>
              <span className="text-red-400">
                <FiTrash2 />
              </span>
            </a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
