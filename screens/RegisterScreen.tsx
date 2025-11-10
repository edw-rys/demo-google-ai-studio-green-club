import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { CheckIcon } from '../components/icons';

const InputField = ({ id, label, type = "text" }: { id: string, label: string, type?: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-2">{label}</label>
        <input 
            type={type} 
            id={id} 
            className="w-full bg-neutral-200 border-none rounded-2xl p-4 text-neutral-800 focus:ring-2 focus:ring-[#558B2F] outline-none" 
        />
    </div>
);

export default function RegisterScreen() {
    const { login, setCurrentScreen } = useAppContext();
    const [termsAccepted, setTermsAccepted] = useState(true);

    return (
        <div className="flex flex-col h-full bg-white p-8 justify-center">
            <div className="w-full max-w-xs mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[#263238]">Crear Cuenta</h1>
                    <p className="text-neutral-500 mt-2">Únete a Green Club y empieza a ganar.</p>
                </div>
                <form className="space-y-4">
                    <InputField id="firstName" label="Nombres" />
                    <InputField id="lastName" label="Apellidos" />
                    <InputField id="email" label="Correo electrónico" type="email" />
                    <InputField id="ruc" label="Cédula o RUC" />
                    <InputField id="password" label="Contraseña" type="password" />

                    <button onClick={() => setTermsAccepted(!termsAccepted)} className="flex items-start gap-3 text-sm text-left pt-2">
                        <div className={`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 transition-colors ${termsAccepted ? 'bg-[#558B2F] border-[#558B2F]' : 'border-gray-300'}`}>
                            {termsAccepted && <CheckIcon className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium text-gray-700">
                            Acepto los <a href="#" className="text-blue-600 hover:underline">Términos</a> y la <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>
                        </span>
                    </button>
                </form>
                 <div className="text-center mt-6">
                    <button onClick={() => setCurrentScreen(Screen.Login)} className="text-sm font-medium">
                        ¿Ya tienes cuenta? <span className="text-blue-600 font-bold hover:underline">Iniciar sesión</span>
                    </button>
                </div>
            </div>
             <div className="flex justify-center py-6 mt-auto">
                <button onClick={login} className="w-20 h-20 bg-[#558B2F] rounded-full flex items-center justify-center text-white shadow-lg transform active:scale-90 transition-transform">
                    <CheckIcon className="w-10 h-10" />
                </button>
            </div>
        </div>
    );
}