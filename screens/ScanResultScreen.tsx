import React from 'react';
import { Screen } from '../types';
import { useAppContext } from '../context/AppContext';
import { CheckCircleIcon, ExclamationCircleIcon, ShieldExclamationIcon } from '../components/icons';

interface ScanResultScreenProps {
  status: 'success' | 'invalid' | 'used';
}

const resultData = {
    success: {
        icon: CheckCircleIcon,
        color: "text-green-500",
        title: "¡Listo!",
        // FIX: Add description property to make the object shapes consistent.
        description: "",
        primaryButton: "Seguir escaneando",
        primaryAction: Screen.Scan,
        secondaryButton: "Ver mis puntos",
        secondaryAction: Screen.PointsHistory,
    },
    invalid: {
        icon: ExclamationCircleIcon,
        color: "text-red-500",
        title: "No pudimos validar este código",
        description: "El código no parece ser válido o está dañado. Inténtalo de nuevo con otro código.",
        primaryButton: "Reintentar",
        primaryAction: Screen.Scan,
        secondaryButton: "Ayuda",
        secondaryAction: Screen.FAQ,
    },
    used: {
        icon: ShieldExclamationIcon,
        color: "text-yellow-500",
        title: "Este código ya fue utilizado",
        description: "Revisa que la factura sea reciente. Si crees que es un error, no dudes en contactarnos.",
        primaryButton: "Reintentar",
        primaryAction: Screen.Scan,
        secondaryButton: "Contáctanos",
        secondaryAction: Screen.Contact,
    }
}


const ScanResultScreen: React.FC<ScanResultScreenProps> = ({ status }) => {
    const { setCurrentScreen, scanResult } = useAppContext();
    const data = resultData[status];
    const { icon: Icon } = data;

    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gray-50">
            <Icon className={`w-24 h-24 ${data.color}`} />

            <h1 className="text-3xl font-bold mt-6 text-[#263238]">{data.title}</h1>
            
            {status === 'success' && scanResult && (
                <p className="text-lg text-neutral-600 mt-2">
                    Sumaste <span className="font-bold text-[#2E7D32]">{scanResult.points} Green Points</span>
                </p>
            )}

            {data.description ? (
                 <p className="text-neutral-500 mt-2 max-w-sm mx-auto">
                    {data.description}
                 </p>
            ): null}

            {status === 'success' && scanResult && (
                 <p className="text-sm text-neutral-400 mt-4">
                    Código: {scanResult.code} · {scanResult.timestamp}
                 </p>
            )}

            <div className="mt-8 w-full max-w-xs space-y-3">
                 <button 
                    onClick={() => setCurrentScreen(data.primaryAction)}
                    className="w-full bg-[#2E7D32] text-white font-bold py-3 px-5 rounded-lg text-base hover:bg-green-800 transition-colors">
                    {data.primaryButton}
                 </button>
                 <button 
                    onClick={() => setCurrentScreen(data.secondaryAction)}
                    className="w-full text-[#2E7D32] font-semibold py-3 px-5 rounded-lg text-base hover:bg-green-500/10 transition-colors">
                    {data.secondaryButton}
                 </button>
            </div>
        </div>
    );
};

export default ScanResultScreen;
