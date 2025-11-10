import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


export default function LoginScreen() {
    const { login, setCurrentScreen } = useAppContext();

    return (
        <div className="flex flex-col h-full bg-white p-8 justify-between">
            <div className="flex-1 flex flex-col justify-center w-full max-w-xs mx-auto">
                <div className="text-center mb-6">
                    <p className="text-xl text-neutral-800">Bienvenido al</p>
                    <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/greenclub-logo.png" alt="Green Club Logo" className="w-56 mx-auto my-2"/>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="ruc" className="block text-sm font-medium text-neutral-700 mb-2">Cédula o Ruc</label>
                        <input type="text" id="ruc" className="w-full bg-neutral-200 border-none rounded-2xl p-4 text-neutral-800 focus:ring-2 focus:ring-[#558B2F] outline-none" />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-neutral-700 mb-2">Contraseña</label>
                        <input type="password" id="password" className="w-full bg-neutral-200 border-none rounded-2xl p-4 text-neutral-800 focus:ring-2 focus:ring-[#558B2F] outline-none" />
                    </div>
                </form>

                <div className="flex justify-between mt-6 text-sm">
                    <button onClick={() => setCurrentScreen(Screen.ForgotPassword)} className="font-medium text-blue-600 underline">Olvide mi contraseña</button>
                    <button onClick={() => setCurrentScreen(Screen.Register)} className="font-medium text-blue-600 underline">Nuevo usuario</button>
                </div>
            </div>

            <div className="flex justify-center py-6">
                <button onClick={login} className="w-20 h-20 bg-[#558B2F] rounded-full flex items-center justify-center text-white shadow-lg transform active:scale-90 transition-transform">
                    <ArrowRightIcon className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}