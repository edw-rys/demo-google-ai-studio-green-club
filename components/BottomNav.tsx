import React from 'react';
import { HomeIcon, RewardIcon, MaterialsIcon, ProfileIcon } from './icons';
import { Screen } from '../types';
import { useAppContext } from '../context/AppContext';

const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, setCurrentScreen } = useAppContext();

  const navItems = [
    { label: 'Inicio', icon: HomeIcon, screen: Screen.Home },
    { label: 'Recompensas', icon: RewardIcon, screen: Screen.Rewards },
    { label: 'Materiales', icon: MaterialsIcon, screen: Screen.Materials },
    { label: 'Mi Perfil', icon: ProfileIcon, screen: Screen.Profile },
  ];

  const handlePress = (screen: Screen) => {
    setActiveTab(screen);
    setCurrentScreen(screen);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full h-20 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg border-t border-black/5 dark:border-white/10 flex justify-around items-center z-30">
      {navItems.map((item) => {
        const isActive = activeTab === item.screen;
        return (
          <button
            key={item.label}
            onClick={() => handlePress(item.screen)}
            className={`flex flex-col items-center justify-center gap-1 transition-colors duration-200 w-1/4 h-full ${
              isActive ? 'text-[#2E7D32]' : 'text-gray-500 dark:text-neutral-400'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-semibold">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;