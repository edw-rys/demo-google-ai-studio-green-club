import React from 'react';
import Screen from '../components/Screen';
import { PhoneIcon, EnvelopeIcon } from '../components/icons';
import { Screen as ScreenEnum } from '../types';

const ContactButton = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) => (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 flex items-center gap-4">
        <Icon className="w-6 h-6 text-[#2E7D32]" />
        <div>
            <p className="text-sm text-gray-500 dark:text-neutral-400">{label}</p>
            <p className="font-semibold text-[#263238] dark:text-neutral-200">{value}</p>
        </div>
    </div>
);

export default function ContactScreen() {
    return (
        <Screen title="Contáctanos" backTo={ScreenEnum.ProfileScreenv2}>
            <div className="space-y-4">
                <ContactButton icon={PhoneIcon} label="Teléfono" value="+1 (23) 456-7890" />
                <ContactButton icon={EnvelopeIcon} label="Correo Electrónico" value="soporte@greenclub.com" />
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-bold text-[#263238] dark:text-neutral-200 mb-3">O envíanos un mensaje</h3>
                <form className="space-y-4">
                     <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Asunto</label>
                        <input type="text" id="subject" className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg p-3" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">Mensaje</label>
                        <textarea id="message" rows={4} className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg p-3"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#2E7D32] text-white font-bold py-3 px-5 rounded-lg text-base hover:bg-green-800 transition-colors">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </Screen>
    );
}