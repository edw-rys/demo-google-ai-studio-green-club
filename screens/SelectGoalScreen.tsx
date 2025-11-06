import React, { useState } from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { Reward } from '../types';
import { CheckCircleIcon } from '../components/icons';

const GoalRewardCard: React.FC<{ reward: Reward, isSelected: boolean, onSelect: () => void }> = ({ reward, isSelected, onSelect }) => {
    return (
        <button onClick={onSelect} className={`bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4 w-full text-left relative transition-all border-2 ${isSelected ? 'border-[#2E7D32]' : 'border-transparent'}`}>
            {isSelected && (
                <CheckCircleIcon className="w-6 h-6 text-white bg-[#2E7D32] rounded-full absolute -top-2 -right-2" />
            )}
            <div className="flex gap-4 items-center">
                <img src={reward.imageUrl} alt={reward.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                    <h3 className="font-bold text-lg text-[#263238] dark:text-neutral-200">{reward.name}</h3>
                    <p className="font-semibold text-[#2E7D32]">{reward.points} puntos</p>
                </div>
            </div>
        </button>
    );
};

export default function SelectGoalScreen() {
    const { rewards, user } = useAppContext();
    const [selectedId, setSelectedId] = useState(1); // Mock: Airfryer is default goal
    
    // Suggest rewards the user can almost afford
    const suggestedRewards = rewards
        .filter(r => r.points > user.points)
        .sort((a, b) => a.points - b.points)
        .slice(0, 3);

    return (
        <Screen title="Seleccionar Objetivo">
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">Elige una recompensa como tu objetivo principal. ¡Te ayudaremos a seguir tu progreso en la pantalla de inicio!</p>
            
            <div className="space-y-3">
                {suggestedRewards.map(reward => (
                    <GoalRewardCard 
                        key={reward.id}
                        reward={reward}
                        isSelected={selectedId === reward.id}
                        onSelect={() => setSelectedId(reward.id)}
                    />
                ))}
            </div>
            
             <button className="w-full mt-6 bg-[#2E7D32] text-white font-bold py-3 px-5 rounded-lg text-base hover:bg-green-800 transition-colors">
                Guardar objetivo
            </button>
        </Screen>
    );
}