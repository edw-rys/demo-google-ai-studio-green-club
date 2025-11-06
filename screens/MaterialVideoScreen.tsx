import React, { useState, useCallback } from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum } from '../types';
import { YOUTUBE_VIDEO_IDS } from '../constants';

const getRandomVideoId = (currentId: string | null = null): string => {
    let newId;
    do {
        newId = YOUTUBE_VIDEO_IDS[Math.floor(Math.random() * YOUTUBE_VIDEO_IDS.length)];
    } while (YOUTUBE_VIDEO_IDS.length > 1 && newId === currentId);
    return newId;
};

export default function MaterialVideoScreen() {
    const { selectedMaterial } = useAppContext();
    const [currentVideoId, setCurrentVideoId] = useState(() => getRandomVideoId());

    const changeVideo = useCallback(() => {
        setCurrentVideoId(prevId => getRandomVideoId(prevId));
    }, []);

    if (!selectedMaterial) {
        return (
            <Screen title="Error" backTo={ScreenEnum.MaterialsScreenv2}>
                <p>No se pudo cargar el material de video.</p>
            </Screen>
        );
    }

    return (
        <Screen title="Video Recomendado" backTo={ScreenEnum.MaterialsScreenv2}>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-black">
                    {/* Mock YouTube Player */}
                    <div className="w-full h-full flex items-center justify-center text-white">
                        <p>Reproductor de YouTube (ID: {currentVideoId})</p>
                    </div>
                </div>
                <div className="p-4">
                     <h2 className="text-lg font-bold text-[#263238] dark:text-neutral-200">{selectedMaterial.title}</h2>
                     <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{selectedMaterial.description}</p>
                </div>
            </div>
            
            <div className="mt-6">
                <button 
                    onClick={changeVideo}
                    className="w-full bg-[#2E7D32] text-white font-bold py-3 px-5 rounded-lg text-base hover:bg-green-800 transition-colors"
                >
                    Ver otro video aleatorio
                </button>
            </div>
             <p className="text-center text-xs text-neutral-500 mt-2">
                ID actual: {currentVideoId}
            </p>
        </Screen>
    );
}