import React from 'react';
import { User, Reward } from '../types';

interface GoalCardProps {
  user: User;
  goalReward: Reward;
  isHero?: boolean;
}

const GoalCard: React.FC<GoalCardProps> = ({ user, goalReward, isHero }) => {
  const pointsNeeded = Math.max(0, goalReward.points - user.points);
  const progressPercentage = Math.min((user.points / goalReward.points) * 100, 100);

  if (isHero) {
    return (
        <div className="px-4 mt-4">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4">
                <p className="text-sm font-medium text-gray-500 dark:text-neutral-400">Tu objetivo rápido</p>
                <div className="flex items-center gap-4 mt-2">
                    <img src={goalReward.imageUrl} alt={goalReward.name} className="w-16 h-16 rounded-lg" />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#263238] dark:text-neutral-200">{goalReward.name}</h3>
                        <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2.5 mt-2">
                            <div className="bg-[#FB8C00] h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-neutral-400 mt-1">
                            Faltan <span className="font-bold">{pointsNeeded}</span> puntos
                        </p>
                    </div>
                </div>
                 <button className="w-full mt-4 bg-[#A5D6A7]/50 dark:bg-green-900/50 text-[#2E7D32] dark:text-[#A5D6A7] font-semibold py-2 rounded-lg hover:bg-[#A5D6A7]/80 dark:hover:bg-green-900/80 transition-colors">
                    Ver catálogo
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="px-4 mt-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[#263238] dark:text-neutral-200">Tu objetivo: <span className="text-[#2E7D32]">{goalReward.name}</span></p>
          <button className="text-sm font-semibold text-[#FB8C00] hover:underline">Ver catálogo</button>
        </div>
        <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2 mt-2">
          <div className="bg-[#FB8C00] h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-xs text-gray-600 dark:text-neutral-400 mt-1">Faltan <span className="font-bold">{pointsNeeded}</span> puntos</p>
      </div>
    </div>
  );
};

export default GoalCard;