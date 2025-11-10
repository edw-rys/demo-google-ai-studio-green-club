import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Material, Screen as ScreenEnum } from '../types';

const materialCategories = [
    {
        id: 'mat-cat-1',
        title: 'Capacitaciones de nuestros productos',
        imageUrl: 'https://greenlife.com.ec/wp-content/uploads/2020/08/mult-1.jpg',
        description: 'Accede a videos y guías para conocer nuestros productos a fondo y mejorar tus ventas.',
    },
    {
        id: 'mat-cat-2',
        title: 'Ayuda ventas de productos',
        imageUrl: 'https://greenlife.com.ec/wp-content/uploads/2020/08/mult-2.jpg',
        description: 'Encuentra presentaciones, folletos y fichas técnicas listos para compartir con tus clientes.',
    },
    {
        id: 'mat-cat-3',
        title: 'Materiales para redes sociales',
        imageUrl: 'https://greenlife.com.ec/wp-content/uploads/2020/08/mult-3.png',
        description: 'Descarga imágenes y videos en alta calidad, optimizados para Instagram, Facebook y más.',
    }
];

const MaterialCategoryCard: React.FC<{ category: typeof materialCategories[0], onClick: () => void }> = ({ category, onClick }) => (
    <button onClick={onClick} className="w-full h-48 relative rounded-2xl overflow-hidden shadow-lg transform active:scale-95 transition-transform duration-200">
        <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{category.title}</h3>
    </button>
);

export default function MaterialsScreenv2() {
    const { setCurrentScreen } = useAppContext();

    const handleSelectCategory = (category: typeof materialCategories[0]) => {
        const materialPayload: Material = {
            id: category.id,
            title: category.title,
            description: category.description,
            thumbnailUrl: category.imageUrl,
            type: 'Imagen',
            content: {
                text: [],
                images: [category.imageUrl]
            }
        };
        setCurrentScreen(ScreenEnum.MaterialDetail, materialPayload);
    };

    return (
        <div className="flex-1 flex flex-col h-full bg-[#ECEFF1]">
             <header className="p-4 flex-shrink-0">
                <h1 className="text-3xl font-bold text-[#263238]">Materiales</h1>
            </header>
            <main className="flex-1 overflow-y-auto px-4 space-y-5 pb-4">
                {materialCategories.map(category => (
                    <MaterialCategoryCard 
                        key={category.id} 
                        category={category}
                        onClick={() => handleSelectCategory(category)}
                    />
                ))}
            </main>
        </div>
    );
}
