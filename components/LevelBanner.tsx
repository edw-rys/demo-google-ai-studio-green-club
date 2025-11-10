import React from 'react';
import { User, Level } from '../types';
import { LEVEL_DATA } from '../constants';
import CircularProgress from './CircularProgress';

interface LevelBannerProps {
  user: User;
  nextLevel?: Level;
  goal: number;
}

const LevelBanner: React.FC<LevelBannerProps> = ({ user, nextLevel, goal }) => {
  const currentLevelData = LEVEL_DATA[user.level];
  const pointsForNextLevel = goal - user.points;

  return (
    <div className="px-4 mt-4">
      <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
        <CircularProgress progress={user.points} goal={goal} level={user.level} />
        <div className="flex-1">
          <h2 className="text-lg font-bold text-[#263238]">{user.level}</h2>
          <p className="text-sm font-semibold text-[#2E7D32]">{currentLevelData.conversion} → 1 Green Point</p>
          {nextLevel && (
            <p className="text-sm text-gray-600 mt-1">
              Te faltan <span className="font-bold text-[#263238]">{pointsForNextLevel}</span> para {nextLevel}
            </p>
          )}
          <button className="text-sm font-semibold text-[#FB8C00] mt-2 hover:underline">
            Ver beneficios
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelBanner;
