import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum, Reward } from '../types';
import Screen from '../components/Screen';

const RewardCard: React.FC<{ reward: Reward, onClick: () => void }> = ({ reward, onClick }) => (
    <div onClick={onClick} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-3 text-center transition-transform transform active:scale-95 cursor-pointer">
        <img src={reward.imageUrl} alt={reward.name} className="w-full h-24 object-cover rounded-lg mb-2" />
        <p className="font-semibold text-sm text-[#263238] dark:text-neutral-200 truncate">{reward.name}</p>
        <p className="font-bold text-md text-[#2E7D32]">{reward.points} pts</p>
    </div>
);

export default function RewardsScreen() {
    const { rewards, setCurrentScreen } = useAppContext();
    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', ...new Set(rewards.map(r => r.category))];

    const filteredRewards = filter === 'Todos' ? rewards : rewards.filter(r => r.category === filter);

    const handleRewardClick = (reward: Reward) => {
        setCurrentScreen(ScreenEnum.RewardDetail, reward);
    }

    return (
        <div className="flex-1 flex flex-col h-full">
            <header className="flex items-center p-4 sticky top-0 bg-[#ECEFF1]/80 dark:bg-neutral-900/80 backdrop-blur-sm z-10 flex-shrink-0">
                <h1 className="text-xl font-bold text-[#263238] dark:text-neutral-200">Recompensas</h1>
            </header>
            <div className="px-4 pb-2">
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${filter === category ? 'bg-[#2E7D32] text-white' : 'bg-white dark:bg-neutral-800 text-[#263238] dark:text-neutral-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <main className="flex-1 overflow-y-auto p-4 pt-0">
                <div className="grid grid-cols-2 gap-4">
                    {filteredRewards.map(reward => (
                        <RewardCard key={reward.id} reward={reward} onClick={() => handleRewardClick(reward)} />
                    ))}
                </div>
            </main>
        </div>
    );
}