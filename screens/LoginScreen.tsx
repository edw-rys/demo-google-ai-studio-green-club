import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { EyeIcon, EyeSlashIcon, CheckIcon } from '../components/icons';

const GreenClubLogo = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-12 h-12 bg-[#2E7D32] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#263238] dark:text-neutral-200">Green Club</h1>
    </div>
);

const InputField = ({ id, label, type = "text", value, icon, onIconClick }: { id: string, label: string, type?: string, value: string, icon?: React.ReactNode, onIconClick?: () => void }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">{label}</label>
        <div className="relative">
            <input 
                type={type} 
                id={id} 
                defaultValue={value}
                className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg p-3 pr-10 text-[#263238] dark:text-neutral-200 focus:ring-1 focus:ring-[#2E7D32] focus:border-[#2E7D32] outline-none" 
            />
            {icon && (
                <button type="button" onClick={onIconClick} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                    {icon}
                </button>
            )}
        </div>
    </div>
);

export default function LoginScreen() {
    const { login, setCurrentScreen } = useAppContext();
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="flex flex-col h-full bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="flex-1 flex flex-col justify-center">
                <GreenClubLogo />
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm space-y-4">
                    <InputField id="email" label="Correo electrónico" value="david.alava+532@demo.ec" />
                    <InputField id="ruc" label="Cédula o RUC" value="0912345678" />
                    <InputField 
                        id="password" 
                        label="Contraseña" 
                        type={showPassword ? 'text' : 'password'} 
                        value="DemoP@ssw0rd"
                        icon={showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        onIconClick={togglePasswordVisibility}
                    />
                    <div className="flex items-center justify-between">
                        <button onClick={() => setRemember(!remember)} className="flex items-center gap-2 text-sm">
                            <div className={`w-5 h-5 rounded border-2 transition-colors ${remember ? 'bg-[#2E7D32] border-[#2E7D32]' : 'border-gray-300'}`}>
                                {remember && <CheckIcon className="w-4 h-4 text-white" />}
                            </div>
                            <span className="font-medium text-gray-700 dark:text-neutral-300">Recordar sesión</span>
                        </button>
                        <a href="#" className="text-sm font-medium text-[#2E7D32] hover:underline">Olvidé mi contraseña</a>
                    </div>
                </div>
                <div className="mt-6">
                    <button onClick={login} className="w-full bg-[#2E7D32] text-white font-bold py-3.5 rounded-lg text-lg hover:bg-green-800 transition-colors">
                        Ingresar ahora
                    </button>
                </div>
                 <div className="text-center mt-4">
                    <button onClick={() => setCurrentScreen(Screen.Register)} className="text-sm font-medium">
                        ¿No tienes cuenta? <span className="text-[#2E7D32] font-bold hover:underline">Crear cuenta</span>
                    </button>
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 dark:text-neutral-500 p-2 bg-gray-200 dark:bg-neutral-800/50 rounded-md">
                Modo demostración: no se valida contra servidor.
            </div>
        </div>
    );
}