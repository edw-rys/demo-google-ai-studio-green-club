import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { QrCodeIcon, StarIcon, GiftIcon } from '../components/icons';

const onboardingSteps = [
  {
    icon: QrCodeIcon,
    title: "Escanea y suma puntos",
    text: "Usa la cámara para leer QR o códigos de barras de tus facturas y gana Green Points.",
  },
  {
    icon: StarIcon,
    title: "Sube de nivel",
    text: "Pasa de Hoja de Bronce a Plata y Oro. Conversión: 20/10/5 ctvs → 1 Green Point.",
  },
  {
    icon: GiftIcon,
    title: "Canjea recompensas",
    text: "Intercambia tus puntos por premios como Airfryer, parlante JBL, smartwatch y más.",
  },
];

const ProgressDots: React.FC<{ count: number; current: number }> = ({ count, current }) => (
  <div className="flex justify-center gap-2">
    {Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          index === current ? 'bg-[#2E7D32]' : 'bg-gray-300 dark:bg-neutral-600'
        }`}
      />
    ))}
  </div>
);

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const { setCurrentScreen } = useAppContext();
  const { icon: Icon, title, text } = onboardingSteps[step];

  const handleContinue = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      setCurrentScreen(Screen.Login);
    }
  };
  
  const handleSkip = () => {
    setCurrentScreen(Screen.Login);
  };

  const isLastStep = step === onboardingSteps.length - 1;

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-neutral-900 p-8 text-center">
      <div className="absolute top-6 right-6">
         <button onClick={handleSkip} className="font-semibold text-gray-500 dark:text-neutral-400">
            Omitir
         </button>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-8">
            <Icon className="w-12 h-12 text-[#2E7D32]" />
        </div>
        <h1 className="text-3xl font-bold text-[#263238] dark:text-neutral-200">{title}</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-sm mx-auto">{text}</p>
      </div>
      <div className="mt-auto">
        <ProgressDots count={onboardingSteps.length} current={step} />
        <button
          onClick={handleContinue}
          className="w-full bg-[#2E7D32] text-white font-bold py-4 px-5 rounded-2xl text-lg mt-6 hover:bg-green-800 transition-colors"
        >
          {isLastStep ? 'Empezar' : 'Continuar'}
        </button>
      </div>
    </div>
  );
}