import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum, Reward } from '../types';

const RewardCard: React.FC<{ reward: Reward, onClick: () => void }> = ({ reward, onClick }) => (
    <div 
        onClick={onClick} 
        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-3 text-center transition-transform transform active:scale-95 cursor-pointer flex flex-col justify-between"
    >
        <img 
            src={reward.imageUrl} 
            alt={reward.name} 
            className="w-full h-32 object-contain rounded-lg mb-3" 
        />
        <div>
            <p className="font-semibold text-sm text-[#263238] truncate">{reward.name}</p>
            <div className="flex items-center justify-center gap-1 mt-1">
                <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/hojax-points.png" alt="Leaf" className="w-4 h-4"/>
                <p className="font-bold text-md text-[#2E7D32]">{reward.points} Green Points</p>
            </div>
        </div>
    </div>
);

export default function RewardsScreen() {
    const { user, rewards, setCurrentScreen } = useAppContext();

    const handleRewardClick = (reward: Reward) => {
        setCurrentScreen(ScreenEnum.RewardDetailv2, reward);
    }

    return (
        <div className="flex-1 flex flex-col h-full bg-[#F7F7F7]">
            <header className="p-4 text-center flex-shrink-0">
                <div className="flex items-center justify-center gap-2">
                    <h1 className="text-3xl font-bold text-[#263238]">Recompensas</h1>
                    <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/medalla.png" alt="Medal" className="w-8 h-8"/>
                </div>
                <p className="text-md font-semibold text-gray-600 mt-1">Tiene {user.points} greenpoints</p>
            </header>
            
            <main className="flex-1 overflow-y-auto p-4 pt-0">
                <div className="grid grid-cols-2 gap-4">
                    {rewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} onClick={() => handleRewardClick(reward)} />
                    ))}
                </div>
            </main>
        </div>
    );
}