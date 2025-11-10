import React, { useState, useEffect } from 'react';
import { HomeVariant, Level, Screen } from '../types';
import { useAppContext } from '../context/AppContext';
import { MOCK_PROMOS, MOCK_QUICK_ACTIONS, MOCK_TRANSACTIONS, REWARDS, LEVEL_DATA } from '../constants';

import AppBar from '../components/AppBar';
import LevelBanner from '../components/LevelBanner';
import ScanButton, { ScanFab } from '../components/ScanButton';
import GoalCard from '../components/GoalCard';
import PromoCarousel from '../components/PromoCarousel';
import QuickActions from '../components/QuickActions';
import RecentActivity from '../components/RecentActivity';
import { SunIcon, MoonIcon } from '../components/icons';

const SkeletonLoader = () => (
    <div className="p-4 space-y-4">
        <div className="bg-gray-200 h-8 w-3/4 rounded-md animate-pulse"></div>
        <div className="bg-gray-200 h-20 w-full rounded-xl animate-pulse"></div>
        <div className="bg-gray-200 h-16 w-full rounded-xl animate-pulse"></div>
        <div className="flex space-x-4">
            <div className="bg-gray-200 h-24 w-1/2 rounded-xl animate-pulse"></div>
            <div className="bg-gray-200 h-24 w-1/2 rounded-xl animate-pulse"></div>
        </div>
    </div>
);

const OfflineBanner = () => (
  <div className="bg-yellow-500 text-black text-center p-2 text-sm font-semibold">
    Sin conexión. Se sincronizará al volver.
  </div>
);

const VariantSwitcher: React.FC<{
  variant: HomeVariant;
  setVariant: (variant: HomeVariant) => void;
}> = ({ variant, setVariant }) => (
  <div className="flex justify-center p-2 bg-neutral-200 space-x-1 rounded-full mx-4 mb-4 text-sm">
    {(['Scanner-first', 'Goal-first', 'Promos-first'] as HomeVariant[]).map((v) => (
      <button
        key={v}
        onClick={() => setVariant(v)}
        className={`px-3 py-1 rounded-full font-semibold transition-colors duration-200 ${
          variant === v ? 'bg-white text-[#2E7D32]' : 'text-neutral-600'
        }`}
      >
        {v.split('-')[0]}
      </button>
    ))}
  </div>
);


export default function HomeScreen() {
  // FIX: Removed toggleTheme as it's not implemented in the context.
  const { user, theme, setCurrentScreen } = useAppContext();
  const [variant, setVariant] = useState<HomeVariant>('Scanner-first');
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline] = useState(false); // Set to true to test offline banner

  // Empty state for new user
  if (user.points === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-2xl font-bold text-[#263238]">
              Aún no tienes Green Points
            </h2>
            <p className="text-neutral-500 mt-2 mb-6">
              ¡Empieza a acumular puntos con tu primera compra!
            </p>
            <button 
              onClick={() => setCurrentScreen(Screen.Scan)}
              className="w-full max-w-xs bg-[#2E7D32] text-white font-bold py-4 px-5 rounded-2xl text-lg hover:bg-green-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform active:scale-95">
                Escanear mi primera factura
            </button>
        </div>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const { nextLevel, goal } = LEVEL_DATA[user.level] as { nextLevel?: Level, goal: number };
  const goalReward = REWARDS[0]; // Airfryer as mock goal

  const renderHomeScreenContent = () => {
    if (isLoading) return <SkeletonLoader />;

    const commonSections = (
      <>
        <QuickActions actions={MOCK_QUICK_ACTIONS} />
        <RecentActivity transactions={MOCK_TRANSACTIONS.slice(0, 3)} />
      </>
    );

    switch (variant) {
      case 'Scanner-first':
        return (
          <>
            <LevelBanner user={user} nextLevel={nextLevel} goal={goal} />
            <div className="px-4 mt-4">
              <ScanButton />
            </div>
            <GoalCard user={user} goalReward={goalReward} />
            <PromoCarousel promos={MOCK_PROMOS} />
            {commonSections}
          </>
        );
      case 'Goal-first':
        return (
          <>
            <GoalCard user={user} goalReward={goalReward} isHero />
            <div className="px-4 mt-4">
              <ScanButton />
            </div>
            <LevelBanner user={user} nextLevel={nextLevel} goal={goal} />
            <PromoCarousel promos={MOCK_PROMOS} />
            {commonSections}
          </>
        );
      case 'Promos-first':
        return (
          <>
            <PromoCarousel promos={MOCK_PROMOS} isHero />
            <LevelBanner user={user} nextLevel={nextLevel} goal={goal} />
            <GoalCard user={user} goalReward={goalReward} />
            {commonSections}
            <ScanFab />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex-1 flex flex-col'>
      {/* FIX: Removed theme toggle button as the functionality is not implemented.
      <div className="absolute top-2 right-2 z-50">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-white/50">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
      </div>
      */}
      
      <main className="flex-1 overflow-y-auto pb-24">
        {isOffline && <OfflineBanner />}
        <AppBar user={user} />
        <VariantSwitcher variant={variant} setVariant={setVariant} />
        {renderHomeScreenContent()}
      </main>
    </div>
  );
}
