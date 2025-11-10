import React, { useState } from 'react';
import Screen from '../components/Screen';
import { MOCK_FAQS } from '../constants';
import { ChevronDownIcon } from '../components/icons';
import { Screen as ScreenEnum } from '../types';

const AccordionItem: React.FC<{ item: { question: string, answer: string }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left p-4">
            <h3 className="font-semibold text-md text-[#263238]">{item.question}</h3>
            <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isOpen && (
            <div className="p-4 pt-0 text-neutral-600">
                <p>{item.answer}</p>
            </div>
        )}
    </div>
);

export default function FAQScreen() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Screen title="Preguntas Frecuentes" backTo={ScreenEnum.ProfileScreenv2}>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {MOCK_FAQS.map((faq, index) => (
                    <AccordionItem 
                        key={index} 
                        item={faq}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </Screen>
    );
}