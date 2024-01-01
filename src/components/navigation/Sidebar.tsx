import React from 'react';
import { FiX, FiPlus, FiTrash2 } from 'react-icons/fi';
import { mockBoard1, mockBoard2, mockBoard3, mockUser1, mockUser2, mockUser3 } from '../../mockData';
import Board from '../../models/board';
import { Link } from 'react-router-dom';
import User from '../../models/user';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Make API call to get the boards and team members

  const boards: Board[] = [
    mockBoard1,
    mockBoard2,
    mockBoard3
  ];

  const users: User[] = [
    mockUser1,
    mockUser2,
    mockUser3
  ];

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
            Boards
          </h5>
          <div className="rounded-full bg-white p-2 text-grey-900 hover:bg-gray-200 focus:outline-none cursor-pointer">
            <FiPlus />
          </div>
        </div>
        <hr></hr>
        <ul className="font-medium mt-3 space-y-3">
          {boards.map((board) => (
            <Link key={board.id} to={`/boards/${board.id}`}>
              <li>
                <div className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
                  <span>{board.title}</span>
                  <span className="text-red-400 hover:text-red-900 cursor-pointer">
                    <FiTrash2 />
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="py-4 overflow-y-auto">
        <div className="flex justify-between mb-2">
          <h5 id="drawer-navigation-label" className="text-2xl text-white">
            Team Members
          </h5>
          <div className="rounded-full bg-white p-2 text-grey-900 hover:bg-gray-200 focus:outline-none cursor-pointer">
            <FiPlus />
          </div>
        </div>
        <hr></hr>
        <ul className="font-medium mt-3 space-y-3">
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <li>
                <div className="flex justify-between items-center p-1 text-white rounded-lg hover:bg-gray-100 hover:text-gray-900">
                  <span>{user.firstName} {user.lastName}</span>
                  <span className="text-red-400 hover:text-red-900 cursor-pointer">
                    <FiTrash2 />
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
