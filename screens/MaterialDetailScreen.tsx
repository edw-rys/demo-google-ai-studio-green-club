import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { Material, Screen as ScreenEnum } from '../types';
import { DownloadIcon } from '../components/icons';

export default function MaterialDetailScreen() {
    const { selectedMaterial } = useAppContext();
    const material = selectedMaterial as Material | null;

    if (!material) {
        return (
            <Screen title="Error" backTo={ScreenEnum.MaterialsScreenv2}>
                <p>No se pudo cargar el contenido del material.</p>
            </Screen>
        );
    }
    
    const imageUrl = (material.content?.images && material.content.images[0]) || material.thumbnailUrl;

    return (
        <Screen title={material.title} backTo={ScreenEnum.MaterialsScreenv2}>
            <div className="bg-white rounded-2xl shadow-sm p-4">
                <img 
                    src={imageUrl} 
                    alt={material.title} 
                    className="w-full h-auto object-contain rounded-lg"
                />
            </div>
            
            <p className="text-neutral-600 mt-4 px-1">
                {material.description}
            </p>

            <div className="mt-6">
                <button className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] text-white font-bold py-4 px-5 rounded-2xl text-lg hover:bg-green-800 transition-colors shadow-lg active:scale-95">
                    <DownloadIcon className="w-6 h-6" /> Descargar
                </button>
            </div>
        </Screen>
    );
}
