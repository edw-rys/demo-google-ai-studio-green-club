import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum, Level } from '../types';
import { ChevronRightIcon, UserIcon, CogIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ArrowLeftOnRectangleIcon } from '../components/icons';

const ProfileMenuItem = ({ icon: Icon, label, screen, last = false }: { icon: React.ElementType, label: string, screen: ScreenEnum, last?: boolean }) => {
    const { setCurrentScreen } = useAppContext();
    return (
        <button onClick={() => setCurrentScreen(screen)} className={`w-full flex items-center justify-between py-4 ${!last ? 'border-b border-gray-200 dark:border-neutral-700' : ''}`}>
            <div className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-[#2E7D32]" />
                <span className="font-semibold text-[#263238] dark:text-neutral-200">{label}</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </button>
    )
}

const levelBadges = {
    [Level.Bronze]: 'bg-orange-200 text-orange-800',
    [Level.Silver]: 'bg-gray-200 text-gray-800',
    [Level.Gold]: 'bg-yellow-200 text-yellow-800',
}

export default function ProfileScreen() {
    const { user, setCurrentScreen } = useAppContext();

    return (
        <div className="flex-1 flex flex-col h-full bg-[#ECEFF1] dark:bg-neutral-900">
            <header className="p-4 pt-8 text-center relative flex-shrink-0">
                <img src={user.avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-700 shadow-lg mx-auto" />
                <h1 className="text-2xl font-bold mt-4 text-[#263238] dark:text-neutral-200">{user.firstName} {user.lastName}</h1>
                <div className="flex justify-center items-center gap-4 mt-2">
                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${levelBadges[user.level]}`}>{user.level}</span>
                    <span className="px-3 py-1 text-sm font-bold rounded-full bg-green-100 text-green-800">{user.points} pts</span>
                </div>
            </header>
            <main className="flex-1 overflow-y-auto p-4">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-sm">
                    <ProfileMenuItem icon={UserIcon} label="Editar perfil" screen={ScreenEnum.EditProfile} />
                    <ProfileMenuItem icon={CogIcon} label="Configuración" screen={ScreenEnum.Settings} />
                    <ProfileMenuItem icon={ChatBubbleLeftRightIcon} label="Contáctanos" screen={ScreenEnum.Contact} />
                    <ProfileMenuItem icon={QuestionMarkCircleIcon} label="Ayuda / FAQ" screen={ScreenEnum.FAQ} last={true} />
                </div>

                <div className="mt-6 text-center">
                    <button className="flex items-center justify-center gap-2 mx-auto text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-red-500/10 transition-colors">
                        <ArrowLeftOnRectangleIcon className="w-5 h-5"/>
                        Cerrar sesión
                    </button>
                </div>
            </main>
        </div>
    );
}