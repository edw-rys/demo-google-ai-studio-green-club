import React, { useState, useRef, useEffect, UIEvent } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { LeafIcon, ScanLineIcon } from '../components/icons';

const promoBanners = [
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-1@2x.png",
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-2@2x.png",
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-3@2x.png"
];

const PromoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Debounce scroll handler
    const handleScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const itemWidth = scrollWidth / promoBanners.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    return (
        <div className="mt-6">
            <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {promoBanners.map((src, index) => (
                    <div key={index} className="snap-center flex-shrink-0 w-full">
                        <img src={src} alt={`Promo banner ${index + 1}`} className="w-full h-auto rounded-2xl" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {promoBanners.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};


export default function HomeScreenv2() {
    const { user, setCurrentScreen } = useAppContext();
    const points = user.points;
    const goal = 1000;
    const progress = Math.min(points / goal, 1);

    const size = 200;
    const strokeWidth = 14;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - progress * circumference;

    return (
        <div className='flex-1 flex flex-col bg-[#F7F7F7]'>
            <header className="bg-[#386641] text-white text-center py-4 rounded-b-3xl flex-shrink-0 shadow-md">
                <h1 className="text-2xl font-bold tracking-wider">Green Life</h1>
            </header>

            <main className="flex-1 overflow-y-auto p-4 pb-28">
                <section className="flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-black">¡Hola, {user.name}!</h2>
                        <p className="text-sm text-gray-600">Nivel y Green Points acumulados</p>
                    </div>
                    <div className="bg-[#FBE49B] rounded-xl px-3 py-2 flex flex-col items-center gap-0 shadow-sm">
                        <span className="text-xs font-semibold text-black/70 -mb-1">Tiene acumulado</span>
                        <div className="flex items-center gap-1">
                            <LeafIcon className="w-5 h-5 text-[#386641]" />
                            <span className="font-bold text-2xl text-black">{points}</span>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0B521D] rounded-3xl p-6 pt-10 mt-4 relative flex flex-col items-center text-white shadow-lg">
                    <div className="absolute top-4 text-center">
                        <span className="text-sm font-semibold text-white/80">500 greenpoints</span>
                    </div>

                    <div className="relative w-[200px] h-[200px]">
                        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                            <circle
                                stroke="#386641"
                                fill="transparent"
                                strokeWidth={strokeWidth - 6}
                                r={radius}
                                cx={center}
                                cy={center}
                            />
                            <circle
                                stroke="white"
                                fill="transparent"
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                strokeLinecap="round"
                                r={radius}
                                cx={center}
                                cy={center}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Platino@2x.png" alt="Hoja de Plata" className="w-16 h-16"/>
                            <span className="font-bold text-lg mt-1">Hoja de plata</span>
                        </div>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-de-bronce@2x.png" alt="Bronce" className="w-12 h-12 absolute -bottom-2 -left-4"/>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Platino@2x.png" alt="Plata" className="w-14 h-14 absolute -top-5 left-1/2 -translate-x-1/2"/>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Dorada@2x.png" alt="Oro" className="w-12 h-12 absolute -bottom-2 -right-4"/>
                    </div>
                     <div className="w-full flex justify-between px-2 mt-2">
                        <span className="text-xs font-semibold text-white/80">0 greenpoints</span>
                        <span className="text-xs font-semibold text-white/80">1000 greenpoints</span>
                    </div>

                </section>
                
                <button className="w-full bg-white border border-gray-200 rounded-2xl py-3 mt-6 flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform">
                    <LeafIcon className="w-5 h-5 text-[#386641]"/>
                    <span className="font-bold text-black text-md">¿Cómo obtener Green Points?</span>
                </button>

                <PromoCarousel />

                <button 
                    onClick={() => setCurrentScreen(Screen.Scan)}
                    className="w-full bg-[#F9D13B] text-black font-bold py-4 px-5 rounded-2xl text-lg mt-6 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                    <ScanLineIcon className="w-7 h-7" strokeWidth="2.5" />
                    Escanear mis facturas
                </button>
            </main>
        </div>
    );
}
