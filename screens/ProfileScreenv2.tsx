import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum, Level, Transaction, Redemption } from '../types';
import { ChevronRightIcon, UserIcon, CogIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ArrowLeftOnRectangleIcon, ArrowUpIcon, ArrowDownIcon, ShareIcon } from '../components/icons';
import { MOCK_TRANSACTIONS, MOCK_REDEMPTIONS } from '../constants';
import MiniChart from '../components/MiniChart';

const levelBadges = {
    [Level.Bronze]: 'bg-orange-200 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    [Level.Silver]: 'bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-neutral-200',
    [Level.Gold]: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
};

const ProfileHeader = () => {
    const { user, setCurrentScreen } = useAppContext();
    return (
        <header className="p-4 text-center relative flex-shrink-0">
            <img src={user.avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg mx-auto" />
            <h1 className="text-2xl font-bold mt-3 text-[#263238] dark:text-neutral-200">{user.firstName} {user.lastName}</h1>
            <div className="flex justify-center items-center gap-2 mt-2">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${levelBadges[user.level]}`}>{user.level}</span>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">{user.points} pts</span>
            </div>
        </header>
    );
};

const TabButton = ({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) => (
    <button onClick={onClick} className={`flex-1 py-2 text-sm font-bold text-center border-b-2 transition-colors ${isActive ? 'border-[#2E7D32] text-[#2E7D32]' : 'border-transparent text-gray-500 dark:text-neutral-400'}`}>
        {label}
    </button>
);

const MisPuntosTab = () => {
    const { user } = useAppContext();
    return (
        <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-sm text-gray-500 dark:text-neutral-400">Puntos Totales</p>
                <p className="text-4xl font-bold text-[#2E7D32]">{user.points}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-3 text-center shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Acumulados (mes)</p>
                    <p className="text-xl font-bold text-green-600">+180</p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-3 text-center shadow-sm">
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Canjeados (mes)</p>
                    <p className="text-xl font-bold text-red-600">-400</p>
                </div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-sm">
                <p className="font-bold text-sm text-[#263238] dark:text-neutral-200 mb-2">Actividad (últimos 7 días)</p>
                <MiniChart />
            </div>
        </div>
    );
};

const TransaccionesTab = () => {
    const transactions = MOCK_TRANSACTIONS.slice(0, 6);
    return (
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm divide-y divide-gray-100 dark:divide-neutral-700">
            {transactions.map((t: Transaction) => (
                <div key={t.id} className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${t.points > 0 ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
                            {t.points > 0 ? <ArrowUpIcon className="w-4 h-4 text-green-600" /> : <ArrowDownIcon className="w-4 h-4 text-red-600" />}
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-[#263238] dark:text-neutral-200">{t.description}</p>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">{t.timestamp}</p>
                        </div>
                    </div>
                    <p className={`font-bold text-md ${t.points > 0 ? 'text-green-600' : 'text-red-600'}`}>{t.points > 0 ? `+${t.points}` : t.points}</p>
                </div>
            ))}
        </div>
    );
};

const PremiosCanjeadosTab = () => {
    const { setCurrentScreen } = useAppContext();
    const statusStyles: { [key: string]: string } = {
        'Retirado': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        'Confirmado': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        'Pendiente': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    };
    return (
        <div className="space-y-4">
            {MOCK_REDEMPTIONS.map((r: Redemption) => (
                <div key={r.id} className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-3">
                    <div className="flex gap-3">
                        <img src={r.reward.imageUrl} alt={r.reward.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-md text-[#263238] dark:text-neutral-200">{r.reward.name}</h3>
                                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusStyles[r.status]}`}>{r.status}</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">{r.timestamp}</p>
                            <p className="font-semibold text-red-600 text-sm mt-1">-{r.reward.points} pts</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => setCurrentScreen(ScreenEnum.RedemptionReceipt, r.reward)} className="w-full text-xs bg-gray-100 dark:bg-neutral-700/80 font-semibold py-1.5 rounded-md">Ver comprobante</button>
                        <button className="w-full text-xs bg-gray-100 dark:bg-neutral-700/80 font-semibold py-1.5 rounded-md flex items-center justify-center gap-1"><ShareIcon className="w-3 h-3" /> Compartir</button>
                    </div>
                </div>
            ))}
        </div>
    );
};


const ProfileMenuItem = ({ icon: Icon, label, screen }: { icon: React.ElementType, label: string, screen: ScreenEnum }) => {
    const { setCurrentScreen } = useAppContext();
    return (
        <button onClick={() => setCurrentScreen(screen)} className="w-full flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
                <Icon className="w-6 h-6 text-[#2E7D32]" />
                <span className="font-semibold text-[#263238] dark:text-neutral-200">{label}</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </button>
    )
}

export default function ProfileScreenv2() {
    const [activeTab, setActiveTab] = useState('Mis Puntos');

    return (
        <div className="flex-1 flex flex-col h-full bg-[#ECEFF1] dark:bg-neutral-900">
            <ProfileHeader />
            <div className="flex bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700 flex-shrink-0">
                <TabButton label="Mis Puntos" isActive={activeTab === 'Mis Puntos'} onClick={() => setActiveTab('Mis Puntos')} />
                <TabButton label="Transacciones" isActive={activeTab === 'Transacciones'} onClick={() => setActiveTab('Transacciones')} />
                <TabButton label="Premios canjeados" isActive={activeTab === 'Premios canjeados'} onClick={() => setActiveTab('Premios canjeados')} />
            </div>
            <main className="flex-1 overflow-y-auto p-4">
                {activeTab === 'Mis Puntos' && <MisPuntosTab />}
                {activeTab === 'Transacciones' && <TransaccionesTab />}
                {activeTab === 'Premios canjeados' && <PremiosCanjeadosTab />}

                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm mt-6 divide-y divide-gray-100 dark:divide-neutral-700">
                    <ProfileMenuItem icon={UserIcon} label="Editar perfil" screen={ScreenEnum.EditProfile} />
                    <ProfileMenuItem icon={CogIcon} label="Configuración" screen={ScreenEnum.Settings} />
                    <ProfileMenuItem icon={ChatBubbleLeftRightIcon} label="Contáctanos" screen={ScreenEnum.Contact} />
                    <ProfileMenuItem icon={QuestionMarkCircleIcon} label="Ayuda / FAQ" screen={ScreenEnum.FAQ} />
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