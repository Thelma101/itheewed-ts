import React, { useState } from 'react';

const guests = [
  { name: 'Aunty Chioma', clue: 'Vegetarian - prefers traditional Nigerian vegetarian dishes', solved: false },
  { name: 'Uncle Emeka', clue: 'Can\'t sit with Aunty Chioma (family dispute)', solved: false },
  { name: 'Cousin Kemi', clue: 'Allergic to peanuts and shellfish', solved: false },
  { name: 'Grandma Ngozi', clue: 'Needs wheelchair access and prefers quiet area', solved: false },
  { name: 'Brother Tunde', clue: 'Bringing 3 children - needs family seating', solved: false },
  { name: 'Sister Folake', clue: 'Muslim - needs halal meal options', solved: false },
  { name: 'Cousin Ade', clue: 'Lactose intolerant', solved: false },
  { name: 'Uncle Bola', clue: 'Diabetic - needs sugar-free dessert options', solved: false },
];

const GuestDetectivePage: React.FC = () => {
  const [revealed, setRevealed] = useState<boolean[]>(guests.map(() => false));

  const handleReveal = (i: number) => {
    setRevealed(revealed.map((r, idx) => (idx === i ? true : r)));
  };

  const allSolved = revealed.every(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">Guest List Detective</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">Click each guest to reveal their hidden needs, allergies, or seating conflicts!</p>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mb-6 border border-green-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guests.map((guest, i) => (
            <div key={guest.name} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg">
              <button 
                onClick={() => handleReveal(i)} 
                disabled={revealed[i]} 
                className={`px-4 py-2 rounded-full font-semibold text-gray-800 disabled:opacity-50 transition-all ${
                  revealed[i] ? 'bg-green-100 text-green-800' : 'bg-yellow-100 hover:bg-yellow-200'
                }`}
              >
                {guest.name}
              </button>
              {revealed[i] && (
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600">💡</span>
                    <span className="font-semibold text-blue-800">Special Need:</span>
                  </div>
                  <div className="text-blue-700 text-sm">{guest.clue}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        {allSolved && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
            <div className="text-2xl mb-2">🎉</div>
            <div className="text-lg font-bold text-green-800">Excellent detective work!</div>
            <div className="text-green-700">You've identified all guest needs and conflicts.</div>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500 text-center">Solving these puzzles helps ensure all guests have a wonderful experience!</div>
    </div>
  );
};

export default GuestDetectivePage; 