import React from 'react';
import { Transaction, Screen } from '../types';
import { ArrowDownIcon, ArrowUpIcon } from './icons';
import { useAppContext } from '../context/AppContext';

interface RecentActivityProps {
  transactions: Transaction[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ transactions }) => {
  const { setCurrentScreen } = useAppContext();
  
  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-[#263238] dark:text-neutral-200">Actividad reciente</h2>
        <button 
          onClick={() => setCurrentScreen(Screen.PointsHistory)}
          className="text-sm font-semibold text-[#FB8C00] hover:underline">
            Ver todo
        </button>
      </div>
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-2 space-y-1">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${t.points > 0 ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                {t.points > 0 
                    ? <ArrowUpIcon className="w-5 h-5 text-green-600 dark:text-green-400" /> 
                    : <ArrowDownIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                }
              </div>
              <div>
                <p className="font-semibold text-[#263238] dark:text-neutral-200">{t.description}</p>
                <p className="text-xs text-gray-500 dark:text-neutral-400">{t.timestamp}</p>
              </div>
            </div>
            <p className={`font-bold ${t.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {t.points > 0 ? `+${t.points}` : t.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;