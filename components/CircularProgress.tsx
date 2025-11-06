import React from 'react';
import { Level } from '../types';

interface CircularProgressProps {
  progress: number;
  goal: number;
  level: Level;
  size?: number;
  strokeWidth?: number;
}

const levelIcons = {
  [Level.Bronze]: '🥉',
  [Level.Silver]: '🥈',
  [Level.Gold]: '🥇',
};

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  goal,
  level,
  size = 72,
  strokeWidth = 8,
}) => {
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  const progressPercentage = Math.min((progress / goal) * 100, 100);
  const offset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-200 dark:text-neutral-700"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className="text-[#2E7D32]"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            transition: 'stroke-dashoffset 0.5s ease-out',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl">
        {levelIcons[level]}
      </div>
    </div>
  );
};

export default CircularProgress;