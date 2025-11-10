import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen as ScreenEnum } from '../types';
import { ChevronRightIcon } from '../components/icons';
import MiniChart from '../components/MiniChart';


const ProfileMenuItem = ({ label, screen }: { label: string, screen: ScreenEnum }) => {
    const { setCurrentScreen } = useAppContext();
    return (
        <button onClick={() => setCurrentScreen(screen)} className="w-full flex items-center justify-between py-4 px-4 border-t border-gray-100">
            <span className="font-semibold text-[#263238] text-base">{label}</span>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
        </button>
    )
}

export default function ProfileScreenv2() {
    const { user, logout, setCurrentScreen } = useAppContext();

    return (
        <div className="flex-1 flex flex-col h-full bg-[#F7F7F7] overflow-y-auto">
            {/* Header and Content Wrapper */}
            <div className="flex-shrink-0">
                {/* Header Area */}
                <div className="bg-[#6f9f48] pt-12 pb-20 relative text-center text-white" style={{ background: 'linear-gradient(180deg, #6f9f48 0%, #538e36 100%)' }}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leafy-green.png')] opacity-10"></div>
                    <div className="relative">
                        <div className="relative inline-block">
                            <img src="https://i.pravatar.cc/150?u=david-alava" alt="Avatar" className="w-24 h-24 rounded-full border-4 border-black shadow-lg" />
                            <div className="absolute -bottom-2 right-0 bg-white rounded-full p-1 shadow-md">
                                <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Platino@2x.png" alt="Nivel" className="w-8 h-8"/>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mt-4 tracking-wide">{user.firstName} {user.lastName}</h1>
                    </div>
                </div>

                 {/* Main Content Area */}
                <div className="relative z-10 -mt-12">
                    {/* Status Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 w-[85%] mx-auto flex justify-around text-center">
                        <div className="w-1/2">
                            <p className="text-sm font-bold text-gray-500">Tu nivel</p>
                            <p className="text-lg font-bold text-[#263238]">{user.level}</p>
                        </div>
                        <div className="w-px bg-gray-200 my-2"></div>
                        <div className="w-1/2">
                            <p className="text-sm font-bold text-gray-500">Tus Green Points</p>
                            <p className="text-lg font-bold text-[#2E7D32]">{user.points}</p>
                        </div>
                    </div>
                    
                    {/* Rest of the content */}
                    <div className="px-4 pt-6 pb-8">
                        <div className="px-2">
                             <h3 className="text-sm font-bold text-gray-500 mb-2">RESUMEN DE PUNTOS</h3>
                             <div className="grid grid-cols-2 gap-3 text-center">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <p className="text-xs text-gray-500">Puntos Totales</p>
                                    <p className="text-xl font-bold text-green-600">{user.points}</p>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <p className="text-xs text-gray-500">Acumulados (mes)</p>
                                    <p className="text-xl font-bold text-green-600">+180</p>
                                </div>
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <p className="text-xs text-gray-500">Canjeados (mes)</p>
                                    <p className="text-xl font-bold text-red-600">-400</p>
                                </div>
                            </div>
                                 <div className="bg-white p-3 rounded-xl shadow-sm flex flex-col justify-between">
                                    <p className="text-xs text-gray-500">Actividad (últimos 7 días)</p>
                                    <div className="h-full flex items-end">
                                        <MiniChart />
                                    </div>
                                </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm mt-6 overflow-hidden">
                            <button onClick={() => setCurrentScreen(ScreenEnum.Settings)} className="w-full flex items-center justify-between py-4 px-4">
                                <span className="font-semibold text-[#263238] text-base">Configuración</span>
                                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                            </button>
                            <ProfileMenuItem label="Contáctanos" screen={ScreenEnum.Contact} />
                            <ProfileMenuItem label="Ayuda" screen={ScreenEnum.HowItWorks} />
                            <ProfileMenuItem label="Preguntas frecuentes" screen={ScreenEnum.FAQ} />
                            <ProfileMenuItem label="Transacciones" screen={ScreenEnum.PointsHistory} />
                            <ProfileMenuItem label="Premios canjeados" screen={ScreenEnum.MyRedemptions} />
                        </div>
                        <div className="mt-8 text-center">
                            <button onClick={logout} className="font-bold text-red-600 py-3 px-6 rounded-xl hover:bg-red-500/10 transition-colors">
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
