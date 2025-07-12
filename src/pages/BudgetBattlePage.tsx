import React, { useState } from 'react';

const categories = [
  { id: 'venue', label: 'Venue & Location' },
  { id: 'food', label: 'Catering & Food' },
  { id: 'dress', label: 'Bride\'s Attire' },
  { id: 'suit', label: 'Groom\'s Attire' },
  { id: 'music', label: 'Music & Entertainment' },
  { id: 'flowers', label: 'Flowers & Decor' },
  { id: 'photography', label: 'Photography & Video' },
  { id: 'transport', label: 'Transportation' },
  { id: 'traditional', label: 'Traditional Ceremony' },
  { id: 'misc', label: 'Miscellaneous' },
];
const TOTAL_BUDGET = 5000000; // 5 million Naira

const BudgetBattlePage: React.FC = () => {
  const [allocations, setAllocations] = useState<{ [key: string]: number }>(Object.fromEntries(categories.map(c => [c.id, 0])));
  const total = Object.values(allocations).reduce((a, b) => a + b, 0);

  const handleChange = (id: string, value: number) => {
    setAllocations({ ...allocations, [id]: value });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">Budget Battle Royale</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Allocate your ₦5,000,000 wedding budget across different categories!</p>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mb-6 border border-yellow-100">
        {categories.map(cat => (
          <div key={cat.id} className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">{cat.label}</label>
            <input 
              type="range" 
              min={0} 
              max={TOTAL_BUDGET} 
              step={100000} 
              value={allocations[cat.id]} 
              onChange={e => handleChange(cat.id, Number(e.target.value))} 
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>₦0</span>
              <span className="font-semibold">{formatCurrency(allocations[cat.id])}</span>
              <span>{formatCurrency(TOTAL_BUDGET)}</span>
            </div>
          </div>
        ))}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-gray-800">Total Spent:</span>
            <span className={`font-bold text-lg ${total > TOTAL_BUDGET ? 'text-red-600' : 'text-green-600'}`}>
              {formatCurrency(total)} / {formatCurrency(TOTAL_BUDGET)}
            </span>
          </div>
          {total > TOTAL_BUDGET && (
            <div className="text-red-600 font-semibold mt-2 text-center">
              ⚠️ You are over budget by {formatCurrency(total - TOTAL_BUDGET)}!
            </div>
          )}
          {total <= TOTAL_BUDGET && total > 0 && (
            <div className="text-green-600 font-semibold mt-2 text-center">
              ✅ Great budgeting! You have {formatCurrency(TOTAL_BUDGET - total)} remaining.
            </div>
          )}
        </div>
      </div>
      {/* Simple bar chart */}
      <div className="w-full max-w-2xl flex gap-2 items-end h-40 mb-8">
        {categories.map(cat => (
          <div key={cat.id} className="flex-1 flex flex-col items-center">
            <div 
              style={{ height: `${(allocations[cat.id] / TOTAL_BUDGET) * 100}%` }} 
              className="w-full bg-gradient-to-t from-pink-400 to-yellow-400 rounded-t-lg transition-all duration-300"
            ></div>
            <span className="text-xs mt-2 text-center text-gray-600">{cat.label.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetBattlePage; 