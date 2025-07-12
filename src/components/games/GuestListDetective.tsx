import React, { useState } from 'react';

const guests = [
  {
    name: 'Chioma N.',
    notes: 'Enjoys vegetarian meals, especially traditional Nigerian favorites.',
    dietary: ['vegetarian'],
    constraints: [],
    accessibility: [],
    solved: false
  },
  {
    name: 'William O.',
    notes: 'Should be seated separately from Chioma N. to keep the day peaceful for everyone.',
    dietary: [],
    constraints: ['separate_from:Chioma N.'],
    accessibility: [],
    solved: false
  },
  {
    name: 'Sarah A.',
    notes: 'Has severe allergies to peanuts and shellfish — safety first!',
    dietary: [],
    allergies: ['peanuts', 'shellfish'],
    constraints: [],
    accessibility: [],
    solved: false
  },
  {
    name: 'Charllote I.',
    notes: 'Will enjoy the day best in a calm, easily accessible space with plenty of comfort.',
    dietary: [],
    constraints: [],
    accessibility: ['wheelchair', 'quiet_area'],
    solved: false
  },
  {
    name: 'James K.',
    notes: 'Bringing three little ones — would love a family-friendly seating area.',
    dietary: [],
    guests: ['child1', 'child2', 'child3'],
    constraints: ['needs_family_seating'],
    accessibility: [],
    solved: false
  },
  {
    name: 'Omoye O.',
    notes: 'Has a sensitive palate and prefers simple, well-balanced meals without rich sauces or heavy seasoning.',
    dietary: [],
    constraints: [],
    accessibility: [],
    solved: false
  },
  {
    name: 'Ade C.',
    notes: 'Avoids dairy and would appreciate lactose-free options.',
    dietary: ['lactose_free'],
    constraints: [],
    accessibility: [],
    solved: false
  },
  {
    name: 'Thomas L.',
    notes: 'Would enjoy a sugar-free dessert to stay on track with his health goals.',
    dietary: ['diabetic'],
    constraints: [],
    accessibility: [],
    solved: false
  }
];

const GuestListDetective: React.FC = () => {
  const [revealed, setRevealed] = useState<boolean[]>(guests.map(() => false));

  const handleReveal = (i: number) => {
    setRevealed(revealed.map((r, idx) => (idx === i ? true : r)));
  };

  const allSolved = revealed.every(Boolean);

  const getGuestInfo = (guest: any) => {
    const info = [];
    if (guest.dietary.length > 0) info.push(`Dietary: ${guest.dietary.join(', ')}`);
    if (guest.allergies && guest.allergies.length > 0) info.push(`Allergies: ${guest.allergies.join(', ')}`);
    if (guest.constraints.length > 0) info.push(`Constraints: ${guest.constraints.join(', ')}`);
    if (guest.accessibility.length > 0) info.push(`Accessibility: ${guest.accessibility.join(', ')}`);
    if (guest.guests && guest.guests.length > 0) info.push(`Bringing: ${guest.guests.length} children`);
    return info.length > 0 ? info.join(' • ') : guest.notes;
  };

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
                    <span className="font-semibold text-blue-800">Guest Details:</span>
                  </div>
                  <div className="text-blue-700 text-sm">{getGuestInfo(guest)}</div>
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

export default GuestListDetective; 