import React, { useState } from 'react';
import Screen from '../components/Screen';
import { MOCK_TRANSACTIONS } from '../constants';
import { ArrowDownIcon, ArrowUpIcon } from '../components/icons';
import { Transaction, Screen as ScreenEnum } from '../types';

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction: t }) => (
    <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${t.points > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                {t.points > 0
                    ? <ArrowUpIcon className="w-5 h-5 text-green-600" />
                    : <ArrowDownIcon className="w-5 h-5 text-red-600" />
                }
            </div>
            <div>
                <p className="font-semibold text-[#263238]">{t.description}</p>
                <p className="text-sm text-gray-500">{t.timestamp}</p>
            </div>
        </div>
        <p className={`font-bold text-lg ${t.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {t.points > 0 ? `+${t.points}` : t.points}
        </p>
    </div>
);


export default function PointsHistoryScreen() {
    const [filter, setFilter] = useState('todos'); // 'todos', 'acumulacion', 'canje'
    
    const filteredTransactions = MOCK_TRANSACTIONS.filter(t => {
        if (filter === 'acumulacion') return t.points > 0;
        if (filter === 'canje') return t.points < 0;
        return true;
    });

    return (
        <Screen title="Historial de Puntos" backTo={ScreenEnum.ProfileScreenv2}>
            <div className="flex gap-2 mb-4">
                <button onClick={() => setFilter('todos')} className={`px-4 py-2 rounded-full font-semibold text-sm ${filter === 'todos' ? 'bg-[#2E7D32] text-white' : 'bg-white'}`}>Todos</button>
                <button onClick={() => setFilter('acumulacion')} className={`px-4 py-2 rounded-full font-semibold text-sm ${filter === 'acumulacion' ? 'bg-[#2E7D32] text-white' : 'bg-white'}`}>Acumulados</button>
                <button onClick={() => setFilter('canje')} className={`px-4 py-2 rounded-full font-semibold text-sm ${filter === 'canje' ? 'bg-[#2E7D32] text-white' : 'bg-white'}`}>Canjeados</button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
                {filteredTransactions.map(t => <TransactionItem key={t.id} transaction={t} />)}
            </div>
        </Screen>
    );
}