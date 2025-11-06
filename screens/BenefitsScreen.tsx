import React from 'react';
import Screen from '../components/Screen';
import { Level } from '../types';
import { CheckIcon } from '../components/icons';

const BenefitCard = ({ level, conversion, benefits, colorClass, icon }: { level: string, conversion: string, benefits: string[], colorClass: string, icon: string }) => (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5 border-t-4" style={{ borderTopColor: colorClass }}>
        <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <h2 className="text-xl font-bold text-[#263238] dark:text-neutral-200">{level}</h2>
        </div>
        <p className={`text-lg font-bold my-3`} style={{ color: colorClass }}>{conversion} → 1 Green Point</p>
        <ul className="space-y-2 text-sm">
            {benefits.map(b => (
                <li key={b} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-px flex-shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-300">{b}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default function BenefitsScreen() {
    return (
        <Screen title="Beneficios por Nivel">
            <div className="space-y-5">
                <BenefitCard 
                    level="Hoja de Bronce" 
                    icon="🥉"
                    conversion="20 ctvs" 
                    benefits={['Promociones', 'Recompensas por tus green points']} 
                    colorClass="#CD7F32" 
                />
                 <BenefitCard 
                    level="Hoja de Plata" 
                    icon="🥈"
                    conversion="10 ctvs" 
                    benefits={['Promociones', 'Recompensas por tus green points', 'Acceso a la sección "Materiales"']} 
                    colorClass="#C0C0C0" 
                />
                 <BenefitCard 
                    level="Hoja de Oro" 
                    icon="🥇"
                    conversion="5 ctvs" 
                    benefits={['Promociones', 'Recompensas por tus green points', 'Acceso a la sección "Materiales"', 'Acceso a material publicitario']} 
                    colorClass="#FFD700" 
                />
            </div>
        </Screen>
    );
}