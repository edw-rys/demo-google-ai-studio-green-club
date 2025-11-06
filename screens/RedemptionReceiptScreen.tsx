import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { DownloadIcon, ShareIcon } from '../components/icons';

const MockQRCode = () => (
    <svg className="w-full h-full" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#f0f0f0" />
        <rect x="10" y="10" width="20" height="20" fill="black" />
        <rect x="40" y="10" width="5" height="5" fill="black" />
        <rect x="50" y="10" width="5" height="5" fill="black" />
        <rect x="65" y="10" width="25" height="5" fill="black" />
        <rect x="10" y="40" width="5" height="5" fill="black" />
        <rect x="10" y="60" width="20" height="5" fill="black" />
        <rect x="70" y="30" width="20" height="20" fill="black" />
        <rect x="45" y="45" width="20" height="20" fill="black" />
        <rect x="15" y="70" width="20" height="20" fill="black" />
        <rect x="75" y="75" width="10" height="10" fill="black" />
        <rect x="50" y="70" width="15" height="5" fill="black" />
    </svg>
)

export default function RedemptionReceiptScreen() {
    const { selectedReward } = useAppContext();
    
    if (!selectedReward) return <Screen title="Error"><p>Recompensa no encontrada.</p></Screen>;

    return (
        <Screen title="Comprobante de Canje">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-6 text-center">
                <span className="text-green-600 font-semibold">Canje confirmado</span>
                <h2 className="text-2xl font-bold mt-2 text-[#263238] dark:text-neutral-200">{selectedReward.name}</h2>
                <p className="font-bold text-lg text-red-500 mt-1">-{selectedReward.points} Green Points</p>

                <div className="w-48 h-48 mx-auto my-6 p-3 bg-white rounded-lg border">
                    <MockQRCode />
                </div>
                
                <div className="text-left space-y-2 text-sm text-neutral-600 dark:text-neutral-400 border-t border-dashed pt-4">
                    <p className="flex justify-between"><span>Fecha:</span> <span className="font-semibold text-[#263238] dark:text-neutral-200">Hoy, 10:30</span></p>
                    <p className="flex justify-between"><span>Código de retiro:</span> <span className="font-semibold text-[#263238] dark:text-neutral-200">GRC-67890</span></p>
                </div>

                 <p className="text-xs text-neutral-500 mt-4">
                    Presenta este código en la tienda para retirar tu recompensa.
                 </p>
            </div>
            <div className="mt-6 flex gap-3">
                <button className="w-full flex items-center justify-center gap-2 bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                    <DownloadIcon className="w-5 h-5" /> Descargar
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                    <ShareIcon className="w-5 h-5" /> Compartir
                </button>
            </div>
        </Screen>
    );
}