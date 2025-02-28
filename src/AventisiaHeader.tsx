import React from 'react';
import { Bell, Heart } from 'lucide-react';
import { Input } from './components/ui/input';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './components/ui/dropdown-menu';
import Aventisia from './components/Image/Aventisia.png';

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AventisiaHeader: React.FC<HeaderProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white shadow-md p-3">
      
      <div className="flex items-center space-x-3">
        <img src={Aventisia} alt="Aventisia Logo" className="h-12" />
        <button 
          className="p-2 m-2 pl-15 text-gray-600 hover:text-gray-900 rounded-full border border-gray-300"
          onClick={toggleSidebar}
        >
          {isOpen ? '◀' : '▶'}
        </button>
        <span className="text-lg font-semibold text-gray-900">AI/ML Model Builder</span>
      </div>

  
      <div className="relative">
        <Input placeholder="Search" className="w-64 pl-10 rounded-full bg-gray-100" />
        <div className="absolute left-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            <circle cx="10" cy="10" r="7" />
          </svg>
        </div>
      </div>

      
      <div className="flex items-center space-x-5">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-3 w-3 text-[8px] text-white bg-orange-500 text-color-black-500 rounded-full"> 2</span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>

        <div className="border-l h-6 mx-2"></div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Avatar>
                <AvatarFallback className="bg-gray-300">NS</AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Neurotic Spy</p>
                <p className="text-xs text-gray-500">neurotic@aiidea.com</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Profile</DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Settings</DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AventisiaHeader;



