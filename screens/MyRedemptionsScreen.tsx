import React from 'react';
import Screen from '../components/Screen';
import { MOCK_REDEMPTIONS } from '../constants';
import { Redemption, Screen as ScreenEnum } from '../types';
import { useAppContext } from '../context/AppContext';

const statusStyles = {
    'Retirado': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    'Confirmado': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    'Pendiente': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
};

const RedemptionCard: React.FC<{ redemption: Redemption }> = ({ redemption }) => {
    const { setCurrentScreen } = useAppContext();
    return (
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-4">
            <div className="flex gap-4">
                <img src={redemption.reward.imageUrl} alt={redemption.reward.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-[#263238] dark:text-neutral-200">{redemption.reward.name}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[redemption.status]}`}>{redemption.status}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">{redemption.timestamp}</p>
                    <p className="font-semibold text-red-600 mt-1">-{redemption.reward.points} puntos</p>
                </div>
            </div>
            <button 
                onClick={() => setCurrentScreen(ScreenEnum.RedemptionReceipt, redemption.reward)}
                className="w-full mt-3 bg-gray-100 dark:bg-neutral-700/80 text-[#263238] dark:text-neutral-200 font-semibold py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors text-sm"
            >
                Ver comprobante
            </button>
        </div>
    )
};

export default function MyRedemptionsScreen() {
    return (
        <Screen title="Mis Canjes">
            <div className="space-y-4">
                {MOCK_REDEMPTIONS.map(r => (
                    <RedemptionCard key={r.id} redemption={r} />
                ))}
            </div>
        </Screen>
    );
}