import React, { useState } from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { MOCK_MATERIALS } from '../constants';
import { Material, Screen as ScreenEnum, Level } from '../types';
import { LockIcon } from '../components/icons';

const MaterialCard: React.FC<{ material: Material, onSelect: () => void, isLocked: boolean }> = ({ material, onSelect, isLocked }) => (
    <button
        onClick={onSelect}
        disabled={isLocked}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-3 text-left shadow-sm w-full transition-transform transform active:scale-95 disabled:opacity-50 relative"
    >
        <img src={material.thumbnailUrl} alt={material.title} className="w-full h-24 object-cover rounded-lg mb-2"/>
        <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400">{material.type}</span>
        <h3 className="font-bold text-md text-[#263238] dark:text-neutral-200 mt-1 truncate">{material.title}</h3>
        {material.levelRequired && (
            <div className={`absolute top-2 right-2 flex items-center text-xs px-2 py-0.5 rounded-full font-semibold ${
                material.levelRequired === Level.Silver ? 'bg-gray-200 text-gray-700' : 'bg-yellow-200 text-yellow-800'
            }`}>
                {isLocked && <LockIcon className="w-3 h-3 mr-1" />}
                {material.levelRequired.split(' ')[2]}
            </div>
        )}
    </button>
);


export default function MaterialsScreenv2() {
    const { user, setCurrentScreen } = useAppContext();
    const [filter, setFilter] = useState<'Todos' | 'Artículo' | 'Imagen' | 'Video'>('Todos');
    
    const filters: ('Todos' | 'Artículo' | 'Imagen' | 'Video')[] = ['Todos', 'Artículo', 'Imagen', 'Video'];

    const handleSelectMaterial = (material: Material) => {
        if (material.type === 'Video') {
            setCurrentScreen(ScreenEnum.MaterialVideo, material);
        } else {
            setCurrentScreen(ScreenEnum.MaterialDetail, material);
        }
    };
    
    const filteredMaterials = MOCK_MATERIALS.filter(m => filter === 'Todos' || m.type === filter);

    const userLevelValue = user.level === Level.Gold ? 2 : user.level === Level.Silver ? 1 : 0;
    const isLocked = (material: Material) => {
        if (!material.levelRequired) return false;
        const requiredLevelValue = material.levelRequired === Level.Gold ? 2 : 1;
        return userLevelValue < requiredLevelValue;
    };

    return (
        <Screen title="Materiales" backTo={ScreenEnum.HomeScreenv2}>
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar py-1">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${
                            filter === f ? 'bg-[#2E7D32] text-white' : 'bg-white dark:bg-neutral-800 text-[#263238] dark:text-neutral-200'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {filteredMaterials.map(material => (
                    <MaterialCard 
                        key={material.id} 
                        material={material} 
                        onSelect={() => handleSelectMaterial(material)} 
                        isLocked={isLocked(material)}
                    />
                ))}
            </div>
        </Screen>
    );
}