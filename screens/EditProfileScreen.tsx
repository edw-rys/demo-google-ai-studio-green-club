import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';

const InputField = ({ label, id, value, type = 'text' }: { label: string, id: string, value: string, type?: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">{label}</label>
        <input 
            type={type} 
            id={id} 
            defaultValue={value}
            className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg p-3 text-[#263238] dark:text-neutral-200" 
        />
    </div>
);

export default function EditProfileScreen() {
    const { user } = useAppContext();
    return (
        <Screen title="Editar Perfil">
            <div className="text-center mb-6">
                <div className="relative inline-block">
                    <img src={user.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-700 shadow-lg" />
                    <button className="absolute bottom-0 right-0 bg-[#2E7D32] text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                </div>
            </div>
            <form className="space-y-4">
                <InputField label="Nombre" id="firstName" value={user.firstName || ''} />
                <InputField label="Apellidos" id="lastName" value={user.lastName || ''} />
                <InputField label="Cédula o RUC" id="idNumber" value={user.idNumber || ''} />
                <InputField label="Correo Electrónico" id="email" value={user.email} type="email" />

                <div className="pt-4 flex gap-3">
                     <button type="button" className="w-full bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                        Cancelar
                    </button>
                    <button type="submit" className="w-full bg-[#2E7D32] text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </Screen>
    );
}