import React from 'react';
import Screen from '../components/Screen';
import { QrCodeIcon, StarIcon, GiftIcon, ArrowTrendingUpIcon } from '../components/icons';
import { Screen as ScreenEnum } from '../types';

// FIX: Changed `children` prop to `description` to resolve confusing type error.
const InfoBlock = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: React.ReactNode }) => (
    <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
        <Icon className="w-8 h-8 text-[#2E7D32] flex-shrink-0 mt-1" />
        <div>
            <h3 className="font-bold text-lg text-[#263238]">{title}</h3>
            <p className="text-neutral-600 text-sm mt-1">
                {description}
            </p>
        </div>
    </div>
);

export default function HowItWorksScreen() {
    return (
        <Screen title="¿Cómo funciona?" backTo={ScreenEnum.ProfileScreenv2}>
            <div className="space-y-4">
                {/* FIX: Pass text content via the `description` prop. */}
                <InfoBlock icon={QrCodeIcon} title="Acumula Green Points" description="Gana 1 Green Point por cada centavo gastado según tu nivel. ¡Solo escanea tus facturas y listo!" />
                <InfoBlock icon={StarIcon} title="Aumenta tu nivel" description="Tu nivel (Bronce, Plata, Oro) depende de tus compras. A mayor nivel, ¡más rápido acumulas puntos!" />
                <InfoBlock icon={GiftIcon} title="Gana beneficios" description="Canjea tus Green Points por increíbles recompensas exclusivas que tenemos para los miembros del Green Club." />
                <InfoBlock icon={ArrowTrendingUpIcon} title="Mayores beneficios" description="A medida que aumentas tu nivel, accedes a mejores recompensas y beneficios. ¡Sigue acumulando para ganar más!" />
            </div>
        </Screen>
    );
}