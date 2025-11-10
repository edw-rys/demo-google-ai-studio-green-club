import React from 'react';
import { HomeIcon, MaterialsIcon, ProfileIcon, MedalIcon } from './icons';
import { Screen } from '../types';
import { useAppContext } from '../context/AppContext';

const BottomNav: React.FC = () => {
  const { activeTab, setCurrentScreen } = useAppContext();

  const navItems = [
    { label: 'Inicio', icon: HomeIcon, screen: Screen.HomeScreenv2 },
    { label: 'Recompensas', icon: MedalIcon, screen: Screen.Rewards },
    { label: 'Materiales', icon: MaterialsIcon, screen: Screen.MaterialsScreenv2 },
    { label: 'Mi Perfil', icon: ProfileIcon, screen: Screen.ProfileScreenv2 },
  ];

  const handlePress = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full bg-neutral-100/90 backdrop-blur-sm rounded-t-[32px] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] h-[90px] flex justify-around items-start pt-1 z-30">
      {navItems.map((item) => {
        const isActive = activeTab === item.screen;
        return (
          <button
            key={item.label}
            onClick={() => handlePress(item.screen)}
            className="flex flex-col items-center justify-center gap-1 transition-transform duration-200 w-1/4 h-full"
            aria-current={isActive ? 'page' : undefined}
          >
            <div className={`
                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out
                ${isActive ? 'bg-[#386641] -translate-y-5 shadow-lg' : 'bg-white border-2 border-neutral-300'}
            `}>
              <item.icon className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-black/80'}`} />
            </div>
            <span className={`text-xs font-semibold transition-all duration-300 ${isActive ? 'text-black mt-[-12px]' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
