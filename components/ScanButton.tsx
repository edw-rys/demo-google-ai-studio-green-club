import React from 'react';
import { QrCodeIcon } from './icons';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';

export const ScanButton: React.FC = () => {
    const { setCurrentScreen } = useAppContext();
    return (
        <div className="flex flex-col items-center">
            <button 
                onClick={() => setCurrentScreen(Screen.Scan)}
                className="w-full bg-[#2E7D32] text-white font-bold py-4 px-5 rounded-2xl text-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform active:scale-95">
            <QrCodeIcon className="w-7 h-7" />
            Escanear factura (QR / Barras)
            </button>
            <p className="text-xs text-gray-500 dark:text-neutral-400 mt-2">Apunta al código y listo</p>
        </div>
    );
};

export const ScanFab: React.FC = () => {
    const { setCurrentScreen } = useAppContext();
    return (
        <button 
            onClick={() => setCurrentScreen(Screen.Scan)}
            className="fixed bottom-24 right-6 z-20 bg-[#FB8C00] text-white p-4 rounded-full shadow-2xl transform active:scale-90 transition-transform duration-200">
            <QrCodeIcon className="w-8 h-8" />
        </button>
    );
}

export default ScanButton;