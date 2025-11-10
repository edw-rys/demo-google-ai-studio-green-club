import React from 'react';
import { User } from '../types';
import { NotificationIcon } from './icons';

interface AppBarProps {
  user: User;
}

const AppBar: React.FC<AppBarProps> = ({ user }) => {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-[#ECEFF1]/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-3">
        <img src={user.avatarUrl} alt="Avatar" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
        <div>
          <h1 className="text-xl font-bold text-[#263238]">¡Hola, {user.name}!</h1>
          <p className="text-sm text-gray-600 font-medium">Tienes <span className="font-bold text-[#2E7D32]">{user.points}</span> Green Points</p>
        </div>
      </div>
      <button className="relative p-2 rounded-full hover:bg-black/5">
        <NotificationIcon className="w-6 h-6 text-gray-700" />
        <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-[#FB8C00] ring-2 ring-white"></span>
      </button>
    </header>
  );
};

export default AppBar;
