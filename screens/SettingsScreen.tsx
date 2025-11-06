import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { MoonIcon, SunIcon } from '../components/icons';

const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-neutral-500 px-4 mb-2 mt-4">{title}</h3>
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm divide-y divide-gray-100 dark:divide-neutral-700">
            {children}
        </div>
    </div>
);

const SettingsRow: React.FC<{ label: string; children?: React.ReactNode, onClick?: () => void }> = ({ label, children, onClick }) => (
    <div onClick={onClick} className={`flex items-center justify-between p-4 ${onClick ? 'cursor-pointer' : ''}`}>
        <span className="font-semibold text-[#263238] dark:text-neutral-200">{label}</span>
        <div>{children}</div>
    </div>
);

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
    <button onClick={onChange} className={`w-12 h-7 rounded-full p-1 transition-colors ${checked ? 'bg-[#2E7D32]' : 'bg-gray-300 dark:bg-neutral-600'}`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : ''}`} />
    </button>
);


export default function SettingsScreen() {
    const { theme, toggleTheme } = useAppContext();
    return (
        <Screen title="Configuración">
            <SettingsSection title="PREFERENCIAS">
                <SettingsRow label="Tema">
                    <div className="flex items-center gap-2">
                        <SunIcon className={`w-6 h-6 ${theme === 'light' ? 'text-[#FB8C00]' : 'text-gray-400'}`} />
                        <Toggle checked={theme === 'dark'} onChange={toggleTheme} />
                        <MoonIcon className={`w-6 h-6 ${theme === 'dark' ? 'text-[#FB8C00]' : 'text-gray-400'}`} />
                    </div>
                </SettingsRow>
                <SettingsRow label="Idioma" onClick={() => {}}>
                    <span className="font-semibold text-gray-500 dark:text-neutral-400">Español</span>
                </SettingsRow>
                <SettingsRow label="Notificaciones">
                    <Toggle checked={true} onChange={() => {}} />
                </SettingsRow>
            </SettingsSection>

            <SettingsSection title="CUENTA">
                <SettingsRow label="Actualizar correo" onClick={() => {}} />
                <SettingsRow label="Cambiar contraseña" onClick={() => {}} />
            </SettingsSection>
            
            <SettingsSection title="LEGAL">
                <SettingsRow label="Términos y condiciones" onClick={() => {}} />
                <SettingsRow label="Política de privacidad" onClick={() => {}} />
            </SettingsSection>
        </Screen>
    );
}