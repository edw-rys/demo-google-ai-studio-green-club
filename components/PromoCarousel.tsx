import React from 'react';
import { Promo } from '../types';

interface PromoCarouselProps {
  promos: Promo[];
  isHero?: boolean;
}

const PromoCarousel: React.FC<PromoCarouselProps> = ({ promos, isHero }) => {
  const containerClass = isHero ? "px-4 mt-4" : "mt-6";
  const titleClass = isHero ? "hidden" : "text-lg font-bold text-[#263238] px-4 mb-3";

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>Promos activas</h2>
      <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar pl-4 pr-4">
        {promos.map((promo) => (
          <div key={promo.id} className={`flex-shrink-0 w-64 h-32 rounded-2xl p-4 flex flex-col justify-between text-white shadow-lg ${promo.bgColor}`}>
            <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full self-start">{promo.tag}</span>
            <h3 className="text-lg font-bold">{promo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
