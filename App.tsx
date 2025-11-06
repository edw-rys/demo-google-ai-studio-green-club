import React, { useState, useMemo, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import { MOCK_USER, REWARDS } from './constants';
import { User, Reward, Screen } from './types';

// Import all screens
import HomeScreen from './screens/HomeScreen';
import RewardsScreen from './screens/RewardsScreen';
import MaterialsScreen from './screens/MaterialsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardDetailScreen from './screens/RewardDetailScreen';
import ScanScreen from './screens/ScanScreen';
import ScanResultScreen from './screens/ScanResultScreen';
import PointsHistoryScreen from './screens/PointsHistoryScreen';
import MyRedemptionsScreen from './screens/MyRedemptionsScreen';
import RedemptionReceiptScreen from './screens/RedemptionReceiptScreen';
import BenefitsScreen from './screens/BenefitsScreen';
import HowItWorksScreen from './screens/HowItWorksScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactScreen from './screens/ContactScreen';
import FAQScreen from './screens/FAQScreen';
import SelectGoalScreen from './screens/SelectGoalScreen';
import AdMaterialsScreen from './screens/AdMaterialsScreen';
import EditProfileScreen from './screens/EditProfileScreen';

// Import V2 and new screens
import HomeScreenv2 from './screens/HomeScreenv2';
import RewardDetailScreenv2 from './screens/RewardDetailScreenv2';
import MaterialsScreenv2 from './screens/MaterialsScreenv2';
import ProfileScreenv2 from './screens/ProfileScreenv2';
import MaterialDetailScreen from './screens/MaterialDetailScreen';
import MaterialVideoScreen from './screens/MaterialVideoScreen';

import BottomNav from './components/BottomNav';


export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  
  const [user] = useState<User>(MOCK_USER);
  const [rewards] = useState<Reward[]>(REWARDS);

  // Navigation state
  const [currentScreen, setCurrentScreenInternal] = useState<Screen>(Screen.HomeScreenv2);
  const [activeTab, setActiveTab] = useState<Screen>(Screen.HomeScreenv2);
  const [screenData, setScreenData] = useState<any>(null);

  const setCurrentScreen = (screen: Screen, data: any = null) => {
      setCurrentScreenInternal(screen);
      setScreenData(data);
  };
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const appContextValue = useMemo(() => ({
    user,
    rewards,
    theme,
    toggleTheme,
    currentScreen,
    setCurrentScreen,
    activeTab,
    setActiveTab,
    selectedReward: screenData,
    scanResult: screenData,
    selectedMaterial: screenData,
  }), [user, rewards, theme, currentScreen, activeTab, screenData]);

  const renderScreen = () => {
    switch (currentScreen) {
        case Screen.Home: return <HomeScreenv2 />; // Default to v2
        case Screen.Rewards: return <RewardsScreen />;
        case Screen.Materials: return <MaterialsScreenv2 />; // Default to v2
        case Screen.Profile: return <ProfileScreenv2 />; // Default to v2

        // Original Screens (kept for reference, but navigation points to new ones)
        case Screen.HomeScreenv2: return <HomeScreenv2 />;
        case Screen.RewardDetail: return <RewardDetailScreenv2 />; // Default to v2
        case Screen.RewardDetailv2: return <RewardDetailScreenv2 />;
        case Screen.MaterialsScreenv2: return <MaterialsScreenv2 />;
        case Screen.ProfileScreenv2: return <ProfileScreenv2 />;

        // New Material Screens
        case Screen.MaterialDetail: return <MaterialDetailScreen />;
        case Screen.MaterialVideo: return <MaterialVideoScreen />;

        case Screen.Scan: return <ScanScreen />;
        case Screen.ScanSuccess: return <ScanResultScreen status="success" />;
        case Screen.ScanInvalid: return <ScanResultScreen status="invalid" />;
        case Screen.ScanUsed: return <ScanResultScreen status="used" />;
        case Screen.PointsHistory: return <PointsHistoryScreen />;
        case Screen.MyRedemptions: return <MyRedemptionsScreen />;
        case Screen.RedemptionReceipt: return <RedemptionReceiptScreen />;
        case Screen.Benefits: return <BenefitsScreen />;
        case Screen.HowItWorks: return <HowItWorksScreen />;
        case Screen.Settings: return <SettingsScreen />;
        case Screen.Contact: return <ContactScreen />;
        case Screen.FAQ: return <FAQScreen />;
        case Screen.SelectGoal: return <SelectGoalScreen />;
        case Screen.AdMaterials: return <AdMaterialsScreen />;
        case Screen.EditProfile: return <EditProfileScreen />;
        default: return <HomeScreenv2 />;
    }
  };

  const isTabView = [Screen.HomeScreenv2, Screen.Rewards, Screen.MaterialsScreenv2, Screen.ProfileScreenv2].includes(currentScreen);

  return (
    <AppContextProvider value={appContextValue}>
      <div className="w-full min-h-screen bg-neutral-200 dark:bg-black flex justify-center p-0 sm:p-4">
        <div className="w-full max-w-sm h-screen sm:h-[844px] sm:max-h-[844px] flex flex-col bg-[#ECEFF1] dark:bg-neutral-900 shadow-lg relative sm:rounded-[30px] overflow-hidden">
          <div className="flex-1 flex flex-col" style={{ overflow: 'auto' }}>
            {renderScreen()}
          </div>
          {isTabView && <BottomNav />}
        </div>
      </div>
    </AppContextProvider>
  );
}