import React, { createContext, useContext } from 'react';
import { User, Reward, Screen } from '../types';

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