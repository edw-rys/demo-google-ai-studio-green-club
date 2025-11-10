import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { FlashIcon, GalleryIcon, XMarkIcon } from '../components/icons';

export default function ScanScreen() {
  const { setCurrentScreen } = useAppContext();
  const [status, setStatus] = useState('Apunta al código y listo');

  useEffect(() => {
    setStatus('Leyendo...');
    const timer = setTimeout(() => {
      // Simulate random scan result
      const outcomes = [Screen.ScanSuccess, Screen.ScanInvalid, Screen.ScanUsed];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      const scanData = {
          points: 25,
          code: '123-ABC-QR',
          timestamp: new Date().toLocaleString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      };
      setCurrentScreen(randomOutcome, scanData);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setCurrentScreen]);

  return (
    <div className="w-full h-full bg-black text-white flex flex-col">
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
        <button className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
          <FlashIcon className="w-6 h-6" />
        </button>
        <button onClick={() => setCurrentScreen(Screen.HomeScreenv2)} className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>
      
      <div className="flex-1 flex items-center justify-center relative">
        {/* Mock camera view */}
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        <div className="w-64 h-64 border-4 border-dashed border-white/50 rounded-2xl relative">
            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
            <div className="absolute -top-1 -right-1 w-12 h-12 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-white rounded-br-xl"></div>
        </div>
      </div>

      <footer className="w-full p-6 text-center z-10">
         <p className="text-lg font-semibold mb-4">{status}</p>
        <button className="p-3 rounded-full bg-black/30 backdrop-blur-sm">
          <GalleryIcon className="w-8 h-8" />
        </button>
      </footer>
    </div>
  );
}