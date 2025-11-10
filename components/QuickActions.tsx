import React from 'react';
import { QuickAction } from '../types';
import { LockIcon } from './icons';
import { useAppContext } from '../context/AppContext';

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  const { setCurrentScreen } = useAppContext();
  
  return (
    <div className="px-4 mt-6">
      <h2 className="text-lg font-bold text-[#263238] mb-3">Atajos rápidos</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            disabled={action.locked}
            onClick={() => !action.locked && setCurrentScreen(action.screen)}
            className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-start justify-between h-24 text-left relative transition-transform transform active:scale-95 disabled:opacity-60"
          >
            <action.icon className="w-6 h-6 text-[#2E7D32]" />
            <span className="font-semibold text-[#263238]">{action.label}</span>
            {action.locked && (
                <div className="absolute top-2 right-2 flex items-center bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    <LockIcon className="w-3 h-3 mr-1" />
                    {action.levelRequired?.split(' ')[2]}
                </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
