import React from 'react';
import Screen from '../components/Screen';

const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-sm font-semibold text-gray-500 px-4 mb-2 mt-4">{title}</h3>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
            {children}
        </div>
    </div>
);

const SettingsRow: React.FC<{ label: string; children?: React.ReactNode, onClick?: () => void }> = ({ label, children, onClick }) => (
    <div onClick={onClick} className={`flex items-center justify-between p-4 ${onClick ? 'cursor-pointer' : ''}`}>
        <span className="font-semibold text-[#263238]">{label}</span>
        <div>{children}</div>
    </div>
);

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
    <button onClick={onChange} className={`w-12 h-7 rounded-full p-1 transition-colors ${checked ? 'bg-[#2E7D32]' : 'bg-gray-300'}`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-5' : ''}`} />
    </button>
);


export default function SettingsScreen() {
    return (
        <Screen title="Configuración">
            <SettingsSection title="PREFERENCIAS">
                <SettingsRow label="Idioma" onClick={() => {}}>
                    <span className="font-semibold text-gray-500">Español</span>
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
