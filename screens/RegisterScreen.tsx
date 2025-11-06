import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { EyeIcon, EyeSlashIcon, CheckIcon } from '../components/icons';

const InputField = ({ id, label, type = "text", value }: { id: string, label: string, type?: string, value: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">{label}</label>
        <input 
            type={type} 
            id={id} 
            defaultValue={value}
            className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg p-3 text-[#263238] dark:text-neutral-200 focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none" 
        />
    </div>
);

export default function RegisterScreen() {
    const { login, setCurrentScreen } = useAppContext();
    const [termsAccepted, setTermsAccepted] = useState(true);

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[#263238] dark:text-neutral-200">Crear Cuenta</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-2">Únete a Green Club y empieza a ganar.</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InputField id="firstName" label="Nombres" value="David" />
                        <InputField id="lastName" label="Apellidos" value="Alava" />
                    </div>
                    <InputField id="email" label="Correo electrónico" value="david.alava+532@demo.ec" />
                    <InputField id="ruc" label="Cédula o RUC" value="0912345678" />
                    <InputField id="password" label="Contraseña" type="password" value="DemoP@ssw0rd" />

                    <button onClick={() => setTermsAccepted(!termsAccepted)} className="flex items-start gap-2 text-sm text-left">
                        <div className={`w-5 h-5 mt-0.5 rounded border-2 flex-shrink-0 transition-colors ${termsAccepted ? 'bg-[#2E7D32] border-[#2E7D32]' : 'border-gray-300'}`}>
                            {termsAccepted && <CheckIcon className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-neutral-300">
                            Acepto los <a href="#" className="text-[#2E7D32] hover:underline">Términos</a> y la <a href="#" className="text-[#2E7D32] hover:underline">Política de Privacidad</a>
                        </span>
                    </button>
                </div>
                <div className="mt-6">
                    <button onClick={login} className="w-full bg-[#2E7D32] text-white font-bold py-3.5 rounded-lg text-lg hover:bg-green-800 transition-colors">
                        Crear cuenta (sin validar)
                    </button>
                </div>
                 <div className="text-center mt-4">
                    <button onClick={() => setCurrentScreen(Screen.Login)} className="text-sm font-medium">
                        ¿Ya tienes cuenta? <span className="text-[#2E7D32] font-bold hover:underline">Iniciar sesión</span>
                    </button>
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 dark:text-neutral-500 p-2 bg-gray-200 dark:bg-neutral-800/50 rounded-md">
                Modo demostración: no se crea usuario real.
            </div>
        </div>
    );
}