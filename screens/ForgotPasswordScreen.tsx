import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { ArrowLeftIcon } from '../components/icons';

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export default function ForgotPasswordScreen() {
    const { setCurrentScreen } = useAppContext();

    return (
        <div className="flex flex-col h-full bg-white p-8 justify-between">
             <header className="absolute top-0 left-0 p-4 z-10">
                <button onClick={() => setCurrentScreen(Screen.Login)} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
            </header>
            <div className="flex-1 flex flex-col justify-center w-full max-w-xs mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#263238]">Restablecer Contraseña</h1>
                    <p className="text-neutral-500 mt-2">Ingresa tu número de identificación para continuar.</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="ruc" className="block text-sm font-medium text-neutral-700 mb-2">Cédula o Ruc</label>
                        <input type="text" id="ruc" className="w-full bg-neutral-200 border-none rounded-2xl p-4 text-neutral-800 focus:ring-2 focus:ring-[#558B2F] outline-none" />
                    </div>
                </form>
            </div>

            <div className="flex justify-center py-6">
                <button onClick={() => setCurrentScreen(Screen.EnterCode)} className="w-20 h-20 bg-[#558B2F] rounded-full flex items-center justify-center text-white shadow-lg transform active:scale-90 transition-transform">
                    <ArrowRightIcon className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}