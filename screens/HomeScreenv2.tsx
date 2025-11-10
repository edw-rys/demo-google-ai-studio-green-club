import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Screen } from '../types';
import { ScanLineIcon } from '../components/icons';
import QuickActions from '../components/QuickActions';
import RecentActivity from '../components/RecentActivity';
import { MOCK_QUICK_ACTIONS, MOCK_TRANSACTIONS } from '../constants';


const promoBanners = [
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-1@2x.png",
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-2@2x.png",
    "https://greenlife.com.ec/wp-content/uploads/2020/08/Banner-3@2x.png"
];

const HowToGetPointsModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div 
            className="bg-white rounded-2xl p-6 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
        >
            <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/hojax-points.png" alt="Green Points" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-xl font-bold text-[#263238]">¿Cómo obtener Green Points?</h3>
            <p className="text-neutral-600 mt-2 text-sm">
                Gana Green Points por tus compras escaneando tus facturas. Tu nivel (Bronce, Plata u Oro) determina cuántos centavos equivalen a 1 Green Point. ¡Mientras más alto tu nivel, más rápido acumulas!
            </p>
            <button 
                onClick={onClose} 
                className="mt-6 w-full bg-[#2E7D32] text-white font-bold py-3 rounded-xl text-lg hover:bg-green-800 transition-colors">
                Entendido
            </button>
        </div>
    </div>
);


const PromoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    // FIX: Replaced NodeJS.Timeout with 'number' for browser compatibility.
    const scrollTimeoutRef = useRef<number | null>(null);

    const handleScroll = () => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = window.setTimeout(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                const itemWidth = scrollWidth / promoBanners.length;
                const newIndex = Math.round(scrollLeft / itemWidth);
                if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                }
            }
        }, 150);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % promoBanners.length;
                if (carouselRef.current) {
                    const itemWidth = carouselRef.current.scrollWidth / promoBanners.length;
                    carouselRef.current.scrollTo({ left: itemWidth * nextIndex, behavior: 'smooth' });
                }
                return nextIndex;
            });
        }, 4000);

        return () => {
            clearInterval(interval);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);


    return (
        <div className="mt-6">
            <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {promoBanners.map((src, index) => (
                    <div key={index} className="snap-center flex-shrink-0 w-full rounded-2xl overflow-hidden">
                        <img src={src} alt={`Promo banner ${index + 1}`} className="w-full h-auto" />
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

const ActivePromosSlider = () => {
    const activePromosImages = [
        "https://greenlife.com.ec/wp-content/uploads/2020/08/Promos-activas-1@2x.png",
        "https://greenlife.com.ec/wp-content/uploads/2020/08/Promos-activas-2@2x.png"
    ];

    return (
        <div className="mt-6">
        <h2 className="text-lg font-bold text-[#263238] px-4 mb-3">Promos activas</h2>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4">
                {activePromosImages.map((src, index) => (
                    <div key={index} className="snap-start flex-shrink-0 w-[85%] rounded-2xl overflow-hidden shadow-lg">
                        <img src={src} alt={`Active promo ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function HomeScreenv2() {
    const { user, setCurrentScreen } = useAppContext();
    const [isHowToModalOpen, setIsHowToModalOpen] = useState(false);
    const points = user.points;
    const goal = 1000;
    const progress = Math.min(points / goal, 1);

    const size = 220;
    const strokeWidth = 16;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const arcLength = circumference * 0.75; // 270 degrees arc
    const progressOffset = arcLength - progress * arcLength;


    return (
        <div className='flex-1 flex flex-col bg-[#F7F7F7]'>
            {isHowToModalOpen && <HowToGetPointsModal onClose={() => setIsHowToModalOpen(false)} />}
            <header className="bg-[#538e36] text-white text-center py-4 rounded-b-3xl flex-shrink-0 shadow-md">
                <h1 className="text-2xl tracking-wider font-normal">Green Life</h1>
            </header>

            <main className="flex-1 overflow-y-auto px-4 pt-4 pb-28">
                <section className="flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-black italic">¡Hola, {user.name}!</h2>
                        <p className="text-sm text-gray-600">Nivel y Green Points <span className="font-bold">acumulados</span></p>
                    </div>
                    <div className="bg-[#FBE49B] rounded-xl px-3 py-2 flex flex-col items-center gap-0 shadow-sm">
                        <span className="text-xs font-semibold text-black/70 -mb-1">Tiene acumulado</span>
                        <div className="flex items-center gap-1">
                            <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/hojax-points.png" alt="Leaf" className="w-5 h-5"/>
                            <span className="font-bold text-2xl text-black">{points}</span>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0B521D] rounded-3xl p-4 pt-8 mt-4 relative flex flex-col items-center text-white shadow-lg">
                    <div className="absolute top-4 text-center">
                        <span className="text-sm font-semibold text-white/80">500 greenpoints</span>
                    </div>

                    <div className="relative" style={{ width: size, height: size }}>
                         <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
                            {/* Base Arc */}
                            <circle
                                stroke="white"
                                fill="transparent"
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${arcLength} ${circumference}`}
                                strokeLinecap="round"
                                r={radius}
                                cx={center}
                                cy={center}
                                style={{ transform: `rotate(135deg)`, transformOrigin: 'center' }}
                            />
                            {/* Progress Arc */}
                            <circle
                                stroke="#20713A"
                                fill="transparent"
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${arcLength} ${circumference}`}
                                strokeDashoffset={progressOffset}
                                strokeLinecap="round"
                                r={radius}
                                cx={center}
                                cy={center}
                                style={{
                                    transform: `rotate(135deg)`,
                                    transformOrigin: 'center',
                                    transition: 'stroke-dashoffset 0.5s ease-out',
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Platino@2x.png" alt="Hoja de Plata" className="w-16 h-16"/>
                            <span className="font-bold text-lg mt-1">Hoja de plata</span>
                        </div>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-de-bronce@2x.png" alt="Bronce" className="w-14 h-14 absolute bottom-[10px] left-[-10px]"/>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Platino@2x.png" alt="Plata" className="w-16 h-16 absolute -top-3 left-1/2 -translate-x-1/2"/>
                        <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/Hoja-Dorada@2x.png" alt="Oro" className="w-14 h-14 absolute bottom-[10px] right-[-10px]"/>
                    </div>
                     <div className="w-full flex justify-between px-2 mt-2">
                        <span className="text-xs font-semibold text-white/80">0 greenpoints</span>
                        <span className="text-xs font-semibold text-white/80">1000 greenpoints</span>
                    </div>
                </section>
                
                <button onClick={() => setIsHowToModalOpen(true)} className="w-full bg-[#efefef] border border-gray-200 rounded-2xl py-3 mt-6 flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform">
                    <img src="https://greenlife.com.ec/wp-content/uploads/2020/08/hojax-points.png" alt="Leaf" className="w-5 h-5"/>
                    <span className="font-bold text-black text-md">¿Cómo obtener Green Points?</span>
                </button>

                <div className="px-0 -mx-4">
                  <PromoCarousel />
                  
                  <div className="px-4">
                    <button 
                      onClick={() => setCurrentScreen(Screen.Scan)}
                      className="w-full bg-[#F9D13B] text-black font-bold py-3 px-5 rounded-2xl text-base mt-6 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                      <ScanLineIcon className="w-6 h-6" strokeWidth="2.5" />
                      Escanear mis facturas
                    </button>
                  </div>
                  <ActivePromosSlider />
                  <QuickActions actions={MOCK_QUICK_ACTIONS} />
                  <RecentActivity transactions={MOCK_TRANSACTIONS.slice(0, 3)} />
                </div>
            </main>
        </div>
    );
}