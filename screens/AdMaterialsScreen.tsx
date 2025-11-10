import React from 'react';
import Screen from '../components/Screen';
import { DownloadIcon } from '../components/icons';

// FIX: Using React.FC for the component type signature clarifies to TypeScript that this is a React component, which correctly handles special props like 'key' and resolves the type error during mapping.
const AdMaterialCard: React.FC<{ title: string, imageUrl: string }> = ({ title, imageUrl }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden group">
        <img src={imageUrl} alt={title} className="w-full h-24 object-cover" />
        <div className="p-3">
            <p className="font-semibold text-sm text-[#263238] truncate">{title}</p>
            <button className="w-full mt-2 flex items-center justify-center gap-1.5 bg-gray-100 text-xs font-semibold py-1.5 rounded-md hover:bg-gray-200 transition-colors">
                <DownloadIcon className="w-4 h-4" />
                Descargar
            </button>
        </div>
    </div>
);

export default function AdMaterialsScreen() {
    const materials = [
        { title: 'Banner Promocional', imageUrl: 'https://picsum.photos/seed/ad1/300/200' },
        { title: 'Video para Historias', imageUrl: 'https://picsum.photos/seed/ad2/300/200' },
        { title: 'Folleto Digital', imageUrl: 'https://picsum.photos/seed/ad3/300/200' },
        { title: 'Anuncio Cuadrado', imageUrl: 'https://picsum.photos/seed/ad4/300/200' },
    ];
    return (
        <Screen title="Material Publicitario">
             <div className="grid grid-cols-2 gap-4">
                {materials.map(m => <AdMaterialCard key={m.title} title={m.title} imageUrl={m.imageUrl} />)}
             </div>
        </Screen>
    );
}
