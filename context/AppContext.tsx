import React, { createContext, useContext } from 'react';
// FIX: Import the Material type to use it in the AppContextType interface.
import { User, Reward, Screen, Material } from '../types';

interface Toast {
  message: string;
  id: number;
}
interface AppContextType {
  user: User;
  rewards: Reward[];
  theme: 'light' | 'dark';
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen, data?: any) => void;
  activeTab: Screen;
  setActiveTab: (tab: Screen) => void;
  selectedReward: Reward | null;
  scanResult: { points: number, code: string, timestamp: string } | null;
  selectedMaterial: Material | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  toast: Toast | null;
  setToast: (message: string) => void;
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