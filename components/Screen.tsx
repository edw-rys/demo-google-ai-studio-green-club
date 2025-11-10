import React from 'react';
import { ArrowLeftIcon } from './icons';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum } from '../types';

interface ScreenProps {
  title: string;
  children: React.ReactNode;
  backTo?: ScreenEnum; 
}

const Screen: React.FC<ScreenProps> = ({ title, children, backTo = ScreenEnum.Home }) => {
  const { setCurrentScreen, activeTab } = useAppContext();
  
  const handleBack = () => {
    // If we're on a sub-page of a main tab, go back to that tab
    const mainTabs = [ScreenEnum.Home, ScreenEnum.Rewards, ScreenEnum.Materials, ScreenEnum.Profile];
    if(mainTabs.includes(backTo)) {
        setCurrentScreen(backTo)
    } else {
        // Default back navigation
        setCurrentScreen(activeTab);
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <header className="flex items-center p-4 sticky top-0 bg-[#ECEFF1]/80 backdrop-blur-sm z-10 border-b border-black/5 flex-shrink-0">
        <button onClick={handleBack} className="p-2 -ml-2 mr-2 rounded-full hover:bg-black/5">
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-[#263238]">{title}</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Screen;
