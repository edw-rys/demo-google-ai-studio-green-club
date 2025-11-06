import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum, Level } from '../types';
import { LockIcon } from '../components/icons';

const MaterialCard = ({ title, description, locked, onClick }: { title: string, description: string, locked?: boolean, onClick?: () => void }) => (
    <button 
        onClick={onClick}
        disabled={locked}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-4 w-full text-left shadow-sm transition-transform transform active:scale-95 disabled:opacity-50"
    >
        {locked && (
            <div className="absolute top-3 right-3 flex items-center bg-gray-200 dark:bg-neutral-700 text-gray-600 dark:text-neutral-300 text-xs px-2 py-1 rounded-full">
                <LockIcon className="w-3 h-3 mr-1" />
                Oro
            </div>
        )}
        <h3 className="font-bold text-lg text-[#263238] dark:text-neutral-200">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">{description}</p>
        <span className="text-[#2E7D32] font-semibold text-sm mt-3 inline-block">Ver</span>
    </button>
)

export default function MaterialsScreen() {
    const { user, setCurrentScreen } = useAppContext();
    const isGold = user.level === Level.Gold;

    return (
        <Screen title="Materiales">
            <div className="space-y-4">
                <MaterialCard 
                    title="Capacitaciones de productos"
                    description="Videos y guías para conocer nuestros productos a fondo."
                />
                 <MaterialCard 
                    title="Ayudas de venta"
                    description="Presentaciones y folletos para tus clientes."
                />
                 <MaterialCard 
                    title="Material para redes sociales"
                    description="Imágenes y videos listos para compartir en tus perfiles."
                />
                 <MaterialCard 
                    title="Material publicitario exclusivo"
                    description="Recursos premium para miembros de alto nivel."
                    locked={!isGold}
                    onClick={() => setCurrentScreen(ScreenEnum.AdMaterials)}
                />
            </div>
        </Screen>
    );
}