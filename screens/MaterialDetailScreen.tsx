import React from 'react';
import Screen from '../components/Screen';
import { useAppContext } from '../context/AppContext';
import { Material, Screen as ScreenEnum } from '../types';
import { DownloadIcon, ShareIcon, StarIcon } from '../components/icons';

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => (
    <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar mt-4">
        {images.map((img, index) => (
            <img key={index} src={img} alt={`Material image ${index + 1}`} className="w-5/6 flex-shrink-0 h-40 object-cover rounded-lg" />
        ))}
    </div>
);


export default function MaterialDetailScreen() {
    const { selectedMaterial } = useAppContext();
    const material = selectedMaterial as Material | null;

    if (!material || !material.content) {
        return (
            <Screen title="Error" backTo={ScreenEnum.MaterialsScreenv2}>
                <p>No se pudo cargar el contenido del material.</p>
            </Screen>
        );
    }

    return (
        <Screen title={material.title} backTo={ScreenEnum.MaterialsScreenv2}>
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm p-5">
                {material.content.images.length > 0 && (
                    <ImageCarousel images={material.content.images} />
                )}

                {material.content.text.map((block, index) => (
                    <div key={index} className="mt-4">
                        <h2 className="text-xl font-bold text-[#263238] dark:text-neutral-200">{block.title}</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 mt-2 whitespace-pre-wrap">{block.body}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-colors">
                    <DownloadIcon className="w-5 h-5" /> Descargar recurso
                </button>
                <div className="flex gap-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                        <ShareIcon className="w-5 h-5" /> Compartir
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-200 dark:bg-neutral-700 text-[#263238] dark:text-neutral-200 font-semibold py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600 transition-colors">
                        <StarIcon className="w-5 h-5" /> Guardar
                    </button>
                </div>
            </div>
        </Screen>
    );
}