import React from 'react';
import { Reward, Screen } from '../types';
import { useAppContext } from '../context/AppContext';

interface RedemptionModalProps {
  reward: Reward;
  onClose: () => void;
}

const RedemptionModal: React.FC<RedemptionModalProps> = ({ reward, onClose }) => {
  const { user, setCurrentScreen } = useAppContext();

  const handleConfirm = () => {
    // In a real app, you'd deduct points and generate a receipt here.
    setCurrentScreen(Screen.RedemptionReceipt, reward);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 w-full max-w-sm text-center transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={reward.imageUrl} alt={reward.name} className="w-24 h-24 rounded-lg mx-auto mb-4" />
        <h2 className="text-xl font-bold text-[#263238] dark:text-neutral-200">Confirmar Canje</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          Estás a punto de canjear <span className="font-bold">{reward.name}</span> por <span className="font-bold">{reward.points}</span> Green Points.
        </p>
        <p className="text-sm text-neutral-500 mt-4">
          Tus puntos restantes serán: {user.points - reward.points}
        </p>
        <div className="mt-6 flex gap-3">
          <button 
            onClick={onClose}
            className="w-full bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
            Cancelar
          </button>
          <button 
            onClick={handleConfirm}
            className="w-full bg-[#2E7D32] text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors">
            Confirmar canje
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedemptionModal;