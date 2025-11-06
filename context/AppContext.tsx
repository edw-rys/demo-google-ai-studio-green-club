import React, { createContext, useContext } from 'react';
// FIX: Import the Material type to use it in the AppContextType interface.
import { User, Reward, Screen, Material } from '../types';

interface AppContextType {
  user: User;
  rewards: Reward[];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen, data?: any) => void;
  activeTab: Screen;
  setActiveTab: (tab: Screen) => void;
  selectedReward: Reward | null;
  scanResult: { points: number, code: string, timestamp: string } | null;
  // FIX: Add selectedMaterial to the context type to make it available to components that use this context.
  selectedMaterial: Material | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = AppContext.Provider;

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
