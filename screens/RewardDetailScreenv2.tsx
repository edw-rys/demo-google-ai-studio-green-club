import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum } from '../types';
import RedemptionModal from '../components/RedemptionModal';
import { XMarkIcon } from '../components/icons';

export default function RewardDetailScreenv2() {
    const { selectedReward, user, setCurrentScreen } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!selectedReward) {
        return (
            <div className="p-4">
                <p>No se ha seleccionado ninguna recompensa.</p>
                <button onClick={() => setCurrentScreen(ScreenEnum.Rewards)} className="text-[#2E7D32] font-bold mt-4">Volver a Recompensas</button>
            </div>
        );
    }
    
    const canAfford = user.points >= selectedReward.points;

    return (
        <>
            <div className="flex-1 flex flex-col h-full bg-[#ECEFF1] relative">
                <button 
                    onClick={() => setCurrentScreen(ScreenEnum.Rewards)}
                    className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-black/30 text-white text-sm font-semibold px-3 py-2 rounded-full backdrop-blur-sm"
                    style={{ WebkitTapHighlightColor: 'transparent' }} // iOS specific
                    aria-label="Salir"
                >
                    <XMarkIcon className="w-5 h-5" />
                    <span>Salir</span>
                </button>
                <header className="relative h-64 flex-shrink-0">
                    <img src={selectedReward.imageUrl} alt={selectedReward.name} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                        <h1 className="text-3xl font-bold text-white">{selectedReward.name}</h1>
                        <p className="text-lg font-semibold text-white/90">{selectedReward.points} Green Points</p>
                    </div>
                </header>
                <main className="flex-1 flex flex-col p-4">
                    <div className="flex-grow">
                        <p className="text-[#263238]">
                            {selectedReward.description || 'No hay descripción disponible para este producto.'}
                        </p>
                    </div>
                    <div className="mt-auto pt-4">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            disabled={!canAfford}
                            className="w-full bg-[#2E7D32] text-white font-bold py-4 px-5 rounded-2xl text-lg hover:bg-green-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            Canjear premio
                        </button>
                        {!canAfford && (
                             <p className="text-center text-red-500 text-sm mt-2">
                                Te faltan {selectedReward.points - user.points} puntos para canjear esto.
                            </p>
                        )}
                    </div>
                </main>
            </div>
            {isModalOpen && <RedemptionModal reward={selectedReward} onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
